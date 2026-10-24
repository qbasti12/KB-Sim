import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { KeyDefinition, KeyboardState, SwitchType, CaseMaterial } from '../../types/keyboard';
import { getKeyboardLayout, getLayoutBounds } from '../../data/layouts';
import { getOrCreateKeycapTexture, clearTextureCache } from '../../utils/textureGenerator';
import { playKeySound } from '../../utils/sound';
import { SWITCH_TYPES } from '../../data/presets';

export interface Keyboard3DCallbacks {
  onKeyClick?: (key: KeyDefinition, currentColor: string) => void;
  onKeyHover?: (key: KeyDefinition | null, event?: MouseEvent) => void;
}

export class Keyboard3D {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;

  private keyboardGroup: THREE.Group;
  private keycapMeshes: Map<string, THREE.Mesh> = new Map();
  private keycapGroups: Map<string, THREE.Group> = new Map();
  private keyDefinitions: Map<string, KeyDefinition> = new Map();

  private hoveredMesh: THREE.Mesh | null = null;
  private pressedKeys: Set<string> = new Set();

  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private animationFrameId: number | null = null;
  private clock: THREE.Clock;

  private currentState: KeyboardState;
  private callbacks: Keyboard3DCallbacks;

  // RGB lighting
  private rgbLights: THREE.PointLight[] = [];

  constructor(container: HTMLElement, state: KeyboardState, callbacks: Keyboard3DCallbacks = {}) {
    this.container = container;
    this.currentState = state;
    this.callbacks = callbacks;

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#0c0f17');

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 600;

    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 16, 20);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      preserveDrawingBuffer: true, // Needed for screenshot export!
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.05; // Don't clip below floor
    this.controls.minDistance = 6;
    this.controls.maxDistance = 45;
    this.controls.target.set(0, 0, 0);

    this.keyboardGroup = new THREE.Group();
    this.scene.add(this.keyboardGroup);

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2(-999, -999);
    this.clock = new THREE.Clock();

    this.setupLighting();
    this.setupFloor();
    this.buildKeyboard();

    this.bindEvents();
    this.animate = this.animate.bind(this);
    this.animate();
  }

  private setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.65);
    this.scene.add(ambientLight);

    // Main Studio Key Light (soft directional light casting shadows)
    const keyLight = new THREE.DirectionalLight(0xfffaed, 2.0);
    keyLight.position.set(10, 18, 12);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 50;
    keyLight.shadow.camera.left = -15;
    keyLight.shadow.camera.right = 15;
    keyLight.shadow.camera.top = 15;
    keyLight.shadow.camera.bottom = -15;
    keyLight.shadow.bias = -0.0002;
    keyLight.shadow.radius = 3;
    this.scene.add(keyLight);

    // Cool fill light from front-left
    const fillLight = new THREE.DirectionalLight(0x90b4ce, 0.9);
    fillLight.position.set(-14, 12, 10);
    this.scene.add(fillLight);

    // Rim / Back light for crisp specular edges on keycaps
    const rimLight = new THREE.DirectionalLight(0xcfd8dc, 1.2);
    rimLight.position.set(0, 12, -16);
    this.scene.add(rimLight);

    // RGB Underglow point lights
    for (let i = 0; i < 4; i++) {
      const pl = new THREE.PointLight(0x00f0ff, 0, 8);
      pl.position.set((i - 1.5) * 4, 0.2, 0);
      this.keyboardGroup.add(pl);
      this.rgbLights.push(pl);
    }
  }

  private setupFloor() {
    // Large studio floor / desk mat
    const floorGeo = new THREE.PlaneGeometry(80, 80);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090c12,
      roughness: 0.85,
      metalness: 0.1,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -0.05;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Desk mat
    const matGeo = new THREE.BoxGeometry(26, 0.08, 14);
    const matMaterial = new THREE.MeshStandardMaterial({
      color: 0x131722,
      roughness: 0.9,
      metalness: 0.05,
    });
    const deskMat = new THREE.Mesh(matGeo, matMaterial);
    deskMat.position.set(0, -0.01, 0.5);
    deskMat.receiveShadow = true;
    this.scene.add(deskMat);

    // Desk mat stitched border accent
    const borderGeo = new THREE.BoxGeometry(26.15, 0.04, 14.15);
    const borderMat = new THREE.MeshStandardMaterial({
      color: 0x242d3d,
      roughness: 0.7,
    });
    const border = new THREE.Mesh(borderGeo, borderMat);
    border.position.set(0, -0.03, 0.5);
    this.scene.add(border);
  }

  public buildKeyboard() {
    // Clear existing keyboard elements
    while (this.keyboardGroup.children.length > 0) {
      const obj = this.keyboardGroup.children[0];
      this.keyboardGroup.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m) => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    }
    this.keycapMeshes.clear();
    this.keycapGroups.clear();
    this.keyDefinitions.clear();
    clearTextureCache();

    // Re-add RGB lights to keyboard group
    this.rgbLights.forEach((pl) => this.keyboardGroup.add(pl));

    const keys = getKeyboardLayout(this.currentState.size, this.currentState.layout);
    const bounds = getLayoutBounds(keys);

    keys.forEach((k) => this.keyDefinitions.set(k.id, k));

    // Center offset
    const offsetX = -bounds.width / 2;
    const offsetZ = -bounds.height / 2;

    // 1. Build Case & Plate
    this.buildCaseAndPlate(bounds);

    // 2. Build Switches & Keycaps
    const switchData = SWITCH_TYPES.find((s) => s.id === this.currentState.switchType) || SWITCH_TYPES[0];

    // Shared switch geometry
    const stemGeo = new THREE.BoxGeometry(0.24, 0.32, 0.24);
    const stemMat = new THREE.MeshStandardMaterial({
      color: switchData.stemColor,
      roughness: 0.35,
    });

    const housingGeo = new THREE.BoxGeometry(0.74, 0.25, 0.74);
    const housingMat = new THREE.MeshStandardMaterial({
      color: switchData.housingColor,
      roughness: 0.5,
    });

    keys.forEach((key) => {
      const keyGroup = new THREE.Group();

      // Coordinates in 3D:
      // X = key.x + key.w / 2 + offsetX
      // Z = key.y + key.h / 2 + offsetZ
      const posX = key.x + key.w / 2 + offsetX;
      const posZ = key.y + key.h / 2 + offsetZ;
      const posY = 0.55; // Plate elevation

      keyGroup.position.set(posX, posY, posZ);

      // --- Switch Housing & Stem ---
      const housingMesh = new THREE.Mesh(housingGeo, housingMat);
      housingMesh.position.y = 0.12;
      housingMesh.castShadow = true;
      keyGroup.add(housingMesh);

      const stemMesh = new THREE.Mesh(stemGeo, stemMat);
      stemMesh.position.y = 0.32;
      keyGroup.add(stemMesh);

      // --- Keycap Mesh ---
      const keycapMesh = this.createKeycapMesh(key);
      keycapMesh.position.y = 0.45;
      keycapMesh.userData = { keyId: key.id };
      keyGroup.add(keycapMesh);

      this.keycapMeshes.set(key.id, keycapMesh);
      this.keycapGroups.set(key.id, keyGroup);
      this.keyboardGroup.add(keyGroup);
    });

    // Angle keyboard slightly (6 degree ergonomic typing slope)
    this.keyboardGroup.rotation.x = THREE.MathUtils.degToRad(5.5);
  }

  private createKeycapMesh(key: KeyDefinition): THREE.Mesh {
    const isISOEnter = key.shape === 'iso_enter';
    const kw = Math.max(0.7, key.w - 0.05);
    const kh = Math.max(0.7, key.h - 0.05);
    const depth = 0.52; // Keycap height

    // Color resolution
    const color = this.currentState.keyColors[key.id] || '#d1d5db';
    const legendColor = this.currentState.legendColors[key.id] || '#1f2937';
    const legend = key.legends[this.currentState.layout];

    // Texture for top face
    const topTexture = getOrCreateKeycapTexture(
      color,
      legendColor,
      legend,
      key.label,
      this.currentState.showLegends
    );

    // Beveled PBR material for sides
    const sideMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness: 0.48,
      metalness: 0.02,
      wireframe: this.currentState.wireframe,
    });

    // Top face material with canvas legend texture
    const topMaterial = new THREE.MeshStandardMaterial({
      map: topTexture,
      roughness: 0.42,
      metalness: 0.02,
      wireframe: this.currentState.wireframe,
    });

    let geometry: THREE.BufferGeometry;

    if (isISOEnter) {
      // Custom compound geometry for ISO Enter (L-shape)
      geometry = this.createIsoEnterGeometry();
    } else {
      // Tapered keycap box geometry
      geometry = this.createTaperedKeycapGeometry(kw, kh, depth);
    }

    // Material array: BoxGeometry order: [right, left, top (+Y), bottom (-Y), front (+Z), back (-Z)]
    const materials = [
      sideMaterial,
      sideMaterial,
      topMaterial, // Top face has legends!
      sideMaterial,
      sideMaterial,
      sideMaterial,
    ];

    const mesh = new THREE.Mesh(geometry, materials);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    return mesh;
  }

  // Realistic tapered keycap geometry (Cherry / OEM profile)
  private createTaperedKeycapGeometry(w: number, l: number, h: number): THREE.BufferGeometry {
    // 8 vertices of a frustum (top face slightly smaller than base face)
    const taper = 0.14;
    const topW = Math.max(0.4, w - taper);
    const topL = Math.max(0.4, l - taper);

    const hw = w / 2;
    const hl = l / 2;
    const htw = topW / 2;
    const htl = topL / 2;

    const geo = new THREE.BoxGeometry(w, h, l, 1, 1, 1);
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 0) {
        // Top vertex: taper inwards
        const x = pos.getX(i);
        const z = pos.getZ(i);
        pos.setX(i, (x / hw) * htw);
        pos.setZ(i, (z / hl) * htl);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }

  // ISO Enter geometry
  private createIsoEnterGeometry(): THREE.BufferGeometry {
    // ISO enter is 1.25u on row 2, 1.5u on row 3, spans 2 rows
    const geo = new THREE.BoxGeometry(1.22, 0.52, 1.95);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 0) {
        const x = pos.getX(i);
        const z = pos.getZ(i);
        pos.setX(i, x * 0.88);
        pos.setZ(i, z * 0.92);
      }
    }
    geo.computeVertexNormals();
    return geo;
  }

  private buildCaseAndPlate(bounds: { width: number; height: number }) {
    const paddingX = 0.45;
    const paddingZ = 0.45;
    const caseW = bounds.width + paddingX * 2;
    const caseH = bounds.height + paddingZ * 2;
    const caseThickness = 1.0;

    // 1. Case Material Setup
    const caseColor = new THREE.Color(this.currentState.caseColor);
    let caseMat: THREE.MeshStandardMaterial;

    switch (this.currentState.caseMaterial) {
      case 'aluminum':
        caseMat = new THREE.MeshStandardMaterial({
          color: caseColor,
          metalness: 0.88,
          roughness: 0.28,
        });
        break;
      case 'polycarbonate':
        caseMat = new THREE.MeshPhysicalMaterial({
          color: caseColor,
          roughness: 0.22,
          transmission: 0.65,
          thickness: 1.2,
          transparent: true,
          opacity: 0.92,
        });
        break;
      case 'e-white':
        caseMat = new THREE.MeshStandardMaterial({
          color: caseColor,
          metalness: 0.05,
          roughness: 0.25,
        });
        break;
      case 'retro-beige':
        caseMat = new THREE.MeshStandardMaterial({
          color: caseColor,
          metalness: 0.05,
          roughness: 0.65,
        });
        break;
      case 'matte':
      default:
        caseMat = new THREE.MeshStandardMaterial({
          color: caseColor,
          metalness: 0.15,
          roughness: 0.6,
        });
        break;
    }

    // 2. Beveled Case Geometry
    const caseGeo = new THREE.BoxGeometry(caseW, caseThickness, caseH);
    const caseMesh = new THREE.Mesh(caseGeo, caseMat);
    caseMesh.position.set(0, 0, 0);
    caseMesh.castShadow = true;
    caseMesh.receiveShadow = true;
    this.keyboardGroup.add(caseMesh);

    // Bezel border frame
    const bezelGeo = new THREE.BoxGeometry(caseW + 0.12, 0.35, caseH + 0.12);
    const bezelMesh = new THREE.Mesh(bezelGeo, caseMat);
    bezelMesh.position.set(0, 0.45, 0);
    bezelMesh.castShadow = true;
    this.keyboardGroup.add(bezelMesh);

    // 3. Switch Mounting Plate
    const plateMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(this.currentState.plateColor),
      metalness: 0.75,
      roughness: 0.35,
    });
    const plateGeo = new THREE.BoxGeometry(bounds.width + 0.1, 0.08, bounds.height + 0.1);
    const plateMesh = new THREE.Mesh(plateGeo, plateMat);
    plateMesh.position.set(0, 0.52, 0);
    plateMesh.receiveShadow = true;
    this.keyboardGroup.add(plateMesh);

    // Subtle USB-C Cutout at back
    const usbCutoutGeo = new THREE.BoxGeometry(0.9, 0.3, 0.2);
    const usbCutoutMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9 });
    const usbCutout = new THREE.Mesh(usbCutoutGeo, usbCutoutMat);
    usbCutout.position.set(0, 0.35, -caseH / 2);
    this.keyboardGroup.add(usbCutout);
  }

  // Update specific key colors dynamically without rebuilding whole scene
  public updateKeyColor(keyId: string, colorHex: string, legendColorHex?: string) {
    const mesh = this.keycapMeshes.get(keyId);
    const key = this.keyDefinitions.get(keyId);
    if (!mesh || !key) return;

    const legColor = legendColorHex || this.currentState.legendColors[keyId] || '#1f2937';
    const legend = key.legends[this.currentState.layout];

    const newTex = getOrCreateKeycapTexture(
      colorHex,
      legColor,
      legend,
      key.label,
      this.currentState.showLegends
    );

    if (Array.isArray(mesh.material)) {
      // Top face material index is 2
      const topMat = mesh.material[2] as THREE.MeshStandardMaterial;
      topMat.map = newTex;
      topMat.needsUpdate = true;

      // Side materials
      const sideMat = mesh.material[0] as THREE.MeshStandardMaterial;
      sideMat.color.set(colorHex);
      sideMat.needsUpdate = true;
    }
  }

  // Fast bulk color update (e.g. preset or gradient)
  public updateAllKeyColors(keyColors: Record<string, string>, legendColors: Record<string, string>) {
    this.currentState.keyColors = keyColors;
    this.currentState.legendColors = legendColors;

    this.keyDefinitions.forEach((key, keyId) => {
      const color = keyColors[keyId] || '#d1d5db';
      const legColor = legendColors[keyId] || '#1f2937';
      this.updateKeyColor(keyId, color, legColor);
    });
  }

  // Update full configuration state
  public updateState(newState: Partial<KeyboardState>) {
    const sizeChanged = newState.size && newState.size !== this.currentState.size;
    const layoutChanged = newState.layout && newState.layout !== this.currentState.layout;
    const switchChanged = newState.switchType && newState.switchType !== this.currentState.switchType;
    const caseChanged =
      (newState.caseColor && newState.caseColor !== this.currentState.caseColor) ||
      (newState.caseMaterial && newState.caseMaterial !== this.currentState.caseMaterial) ||
      (newState.plateColor && newState.plateColor !== this.currentState.plateColor);
    const wireframeChanged = newState.wireframe !== undefined && newState.wireframe !== this.currentState.wireframe;
    const legendDisplayChanged = newState.showLegends !== undefined && newState.showLegends !== this.currentState.showLegends;

    this.currentState = { ...this.currentState, ...newState };

    if (sizeChanged || layoutChanged || switchChanged || caseChanged || wireframeChanged || legendDisplayChanged) {
      this.buildKeyboard();
    } else if (newState.keyColors || newState.legendColors) {
      this.updateAllKeyColors(this.currentState.keyColors, this.currentState.legendColors);
    }
  }

  // Animate a single key press (press down and rebound)
  public triggerKeyPress(codeOrId: string) {
    let targetKeyId: string | null = null;

    if (this.keyDefinitions.has(codeOrId)) {
      targetKeyId = codeOrId;
    } else {
      // Find key by event.code
      for (const [id, def] of this.keyDefinitions.entries()) {
        if (def.code && def.code.toLowerCase() === codeOrId.toLowerCase()) {
          targetKeyId = id;
          break;
        }
      }
    }

    if (!targetKeyId) return;

    const group = this.keycapGroups.get(targetKeyId);
    if (!group) return;

    if (this.currentState.soundEnabled) {
      playKeySound(targetKeyId === 'space', this.currentState.switchType);
    }

    // Depress keycap
    const originalY = 0.55;
    const depressedY = 0.38;
    group.position.y = depressedY;

    setTimeout(() => {
      group.position.y = originalY;
    }, 90);
  }

  private bindEvents() {
    const dom = this.renderer.domElement;

    // Pointer move for hover raycasting
    const onPointerMove = (e: MouseEvent) => {
      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.checkHover(e);
    };

    // Pointer click for tool action
    const onPointerDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Left click only

      const rect = dom.getBoundingClientRect();
      this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      this.raycaster.setFromCamera(this.mouse, this.camera);
      const meshes = Array.from(this.keycapMeshes.values());
      const intersects = this.raycaster.intersectObjects(meshes, true);

      if (intersects.length > 0) {
        let hitMesh: THREE.Mesh | null = null;
        for (const hit of intersects) {
          if (hit.object instanceof THREE.Mesh && hit.object.userData?.keyId) {
            hitMesh = hit.object;
            break;
          }
        }

        if (hitMesh && hitMesh.userData?.keyId) {
          const keyId = hitMesh.userData.keyId;
          const key = this.keyDefinitions.get(keyId);
          if (key) {
            this.triggerKeyPress(keyId);
            const currentColor = this.currentState.keyColors[keyId] || '#d1d5db';
            this.callbacks.onKeyClick?.(key, currentColor);
          }
        }
      }
    };

    // Global physical keyboard listener to simulate mechanical typing
    const onKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }
      this.triggerKeyPress(e.code);
    };

    dom.addEventListener('mousemove', onPointerMove);
    dom.addEventListener('click', onPointerDown);
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', this.onWindowResize);

    // Cleanup reference
    (dom as any)._cleanup = () => {
      dom.removeEventListener('mousemove', onPointerMove);
      dom.removeEventListener('click', onPointerDown);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', this.onWindowResize);
    };
  }

  private checkHover(event: MouseEvent) {
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const meshes = Array.from(this.keycapMeshes.values());
    const intersects = this.raycaster.intersectObjects(meshes, true);

    let foundMesh: THREE.Mesh | null = null;
    let foundKey: KeyDefinition | null = null;

    if (intersects.length > 0) {
      for (const hit of intersects) {
        if (hit.object instanceof THREE.Mesh && hit.object.userData?.keyId) {
          foundMesh = hit.object;
          foundKey = this.keyDefinitions.get(foundMesh.userData.keyId) || null;
          break;
        }
      }
    }

    if (this.hoveredMesh !== foundMesh) {
      // Un-highlight previous
      if (this.hoveredMesh && Array.isArray(this.hoveredMesh.material)) {
        const topMat = this.hoveredMesh.material[2] as THREE.MeshStandardMaterial;
        topMat.emissive.setHex(0x000000);
      }

      this.hoveredMesh = foundMesh;

      // Highlight new
      if (this.hoveredMesh && Array.isArray(this.hoveredMesh.material)) {
        const topMat = this.hoveredMesh.material[2] as THREE.MeshStandardMaterial;
        topMat.emissive.setHex(0x2f3640);
      }

      this.callbacks.onKeyHover?.(foundKey, event);
    }
  }

  private onWindowResize = () => {
    if (!this.container) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  };

  private animate() {
    this.animationFrameId = requestAnimationFrame(this.animate);
    const elapsed = this.clock.getElapsedTime();

    // Auto rotate if enabled
    if (this.currentState.autoRotate) {
      this.keyboardGroup.rotation.y = elapsed * 0.25;
    } else {
      this.keyboardGroup.rotation.y = 0;
    }

    // RGB Underglow Animation
    if (this.currentState.rgbMode === 'rainbow') {
      this.rgbLights.forEach((pl, i) => {
        pl.intensity = 2.5;
        const hue = (elapsed * 0.15 + i * 0.25) % 1;
        pl.color.setHSL(hue, 1, 0.5);
      });
    } else if (this.currentState.rgbMode === 'static') {
      const col = new THREE.Color(this.currentState.rgbColor);
      this.rgbLights.forEach((pl) => {
        pl.intensity = 2.0;
        pl.color.copy(col);
      });
    } else if (this.currentState.rgbMode === 'pulse') {
      const pulse = (Math.sin(elapsed * 3) + 1) * 1.5;
      const col = new THREE.Color(this.currentState.rgbColor);
      this.rgbLights.forEach((pl) => {
        pl.intensity = pulse;
        pl.color.copy(col);
      });
    } else {
      this.rgbLights.forEach((pl) => {
        pl.intensity = 0;
      });
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  // Capture crystal-clear snapshot of keyboard
  public captureScreenshot(): string {
    // Hide floor elements temporarily if needed, or render high-res frame
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }

  // Reset camera view
  public resetCamera() {
    this.camera.position.set(0, 16, 20);
    this.controls.target.set(0, 0, 0);
    this.controls.update();
  }

  public dispose() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    const dom = this.renderer.domElement;
    if ((dom as any)._cleanup) {
      (dom as any)._cleanup();
    }
    this.controls.dispose();
    this.renderer.dispose();
    clearTextureCache();
    if (this.container.contains(dom)) {
      this.container.removeChild(dom);
    }
  }
}
