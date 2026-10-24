import * as THREE from 'three';
import { KeyLegend } from '../types/keyboard';

// Texture cache to prevent recreating textures on every frame/render
const textureCache = new Map<string, THREE.CanvasTexture>();

export function getOrCreateKeycapTexture(
  bgColor: string,
  textColor: string,
  legend: KeyLegend,
  label: string,
  showLegends: boolean
): THREE.CanvasTexture {
  const cacheKey = `${bgColor}_${textColor}_${showLegends ? `${legend.main}_${legend.sub || ''}_${legend.altGr || ''}` : 'blank'}`;

  if (textureCache.has(cacheKey)) {
    return textureCache.get(cacheKey)!;
  }

  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    const fallback = new THREE.CanvasTexture(canvas);
    return fallback;
  }

  // Base background fill
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, size, size);

  // Subtle spherical dish vignette (simulates Cherry/OEM cylindrical dish indentation)
  const grad = ctx.createRadialGradient(size / 2, size / 2, 20, size / 2, size / 2, size * 0.7);
  grad.addColorStop(0, 'rgba(255, 255, 255, 0.08)');
  grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.0)');
  grad.addColorStop(1, 'rgba(0, 0, 0, 0.18)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, size, size);

  // Draw legends if enabled
  if (showLegends) {
    ctx.fillStyle = textColor;
    ctx.textBaseline = 'middle';

    const mainText = legend.main || label;
    const subText = legend.sub;
    const altGrText = legend.altGr;

    const isLongWord = mainText.length > 2;

    if (isLongWord) {
      // Modifiers like ENTER, SHIFT, CAPS, SPACE, TAB, BACKSPACE
      // Centered or left-aligned modern GMK style
      ctx.textAlign = 'center';
      const fontSize = mainText.length > 7 ? 40 : mainText.length > 4 ? 50 : 64;
      ctx.font = `600 ${fontSize}px "JetBrains Mono", Inter, sans-serif`;
      ctx.fillText(mainText, size / 2, size / 2);
    } else if (subText) {
      // Dual legend (e.g. Number row '1 !', or German 'ß ?')
      ctx.textAlign = 'left';
      // Shift character (top-left)
      ctx.font = '600 58px "JetBrains Mono", Inter, sans-serif';
      ctx.fillText(subText, 64, 120);

      // Main number / letter (lower-left)
      ctx.font = '700 78px "JetBrains Mono", Inter, sans-serif';
      ctx.fillText(mainText, 64, 340);

      // AltGr legend (lower-right) if present
      if (altGrText) {
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.85;
        ctx.textAlign = 'right';
        ctx.font = '600 58px "JetBrains Mono", Inter, sans-serif';
        ctx.fillText(altGrText, size - 64, 340);
        ctx.globalAlpha = 1.0;
      }
    } else {
      // Single character alpha key (e.g. 'A', 'W', 'Z')
      ctx.textAlign = 'left';
      ctx.font = '700 95px "JetBrains Mono", Inter, sans-serif';
      ctx.fillText(mainText, 70, 150);

      // AltGr legend (e.g. '@' on Q, '€' on E)
      if (altGrText) {
        ctx.fillStyle = textColor;
        ctx.globalAlpha = 0.85;
        ctx.textAlign = 'right';
        ctx.font = '600 65px "JetBrains Mono", Inter, sans-serif';
        ctx.fillText(altGrText, size - 64, 340);
        ctx.globalAlpha = 1.0;
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  textureCache.set(cacheKey, texture);

  return texture;
}

export function clearTextureCache() {
  textureCache.forEach((tex) => tex.dispose());
  textureCache.clear();
}
