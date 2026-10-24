import React, { useState, useRef, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import {
  KeyboardState,
  KeyboardSize,
  KeyboardLayout,
  ToolType,
  BucketMode,
  KeyZone,
  GradientDirection,
  ColorPreset,
  KeyDefinition,
  CaseMaterial,
  SwitchType,
} from './types/keyboard';
import { PRESETS } from './data/presets';
import { getKeyboardLayout, getLayoutBounds } from './data/layouts';
import { lerpColor, getOptimalTextColor, colorsMatch } from './utils/color';
import { KeyboardCanvas } from './components/ThreeKeyboard/KeyboardCanvas';
import { Keyboard3D } from './components/ThreeKeyboard/Keyboard3D';
import { Header } from './components/Header';
import { ToolBar } from './components/ToolBar';
import { CustomizerPanel } from './components/CustomizerPanel';
import { GradientModal } from './components/GradientModal';
import {
  exportConfigurationAsJSON,
  importConfigurationFromJSON,
  downloadScreenshot,
} from './utils/exportImport';

export const App: React.FC = () => {
  const keyboard3DRef = useRef<Keyboard3D | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Initial colorway: GMK Olivia / Cyberpunk hybrid default
  const defaultPreset = PRESETS[0]; // Retro Beige

  const [state, setState] = useState<KeyboardState>(() => {
    // Generate initial keys for 75% ISO-DE
    const initialKeys = getKeyboardLayout('75%', 'iso-de');
    const keyColors: Record<string, string> = {};
    const legendColors: Record<string, string> = {};

    initialKeys.forEach((k) => {
      let bg = defaultPreset.alphas.bg;
      let text = defaultPreset.alphas.text;

      if (k.zone === 'modifiers' || k.zone === 'f_row' || k.zone === 'nav') {
        bg = defaultPreset.modifiers.bg;
        text = defaultPreset.modifiers.text;
      }
      if (k.id === 'esc' || k.id === 'enter' || k.zone === 'arrows') {
        bg = defaultPreset.accents.bg;
        text = defaultPreset.accents.text;
      }
      if (k.zone === 'space' && defaultPreset.space) {
        bg = defaultPreset.space.bg;
        text = defaultPreset.space.text;
      }

      keyColors[k.id] = bg;
      legendColors[k.id] = text;
    });

    return {
      size: '75%',
      layout: 'iso-de',
      keyColors,
      legendColors,
      activeColor: '#7d9d85',
      activeLegendColor: '#ffffff',
      activeTool: 'brush',
      bucketMode: 'all',
      targetZone: 'alphas',
      gradientStart: '#ff007f',
      gradientEnd: '#00f0ff',
      gradientDirection: 'horizontal',
      recentColors: ['#7d9d85', '#e6dfd1', '#cfc4b2', '#ff007f', '#00f0ff', '#e8a598'],
      caseColor: defaultPreset.caseColor,
      caseMaterial: defaultPreset.caseMaterial,
      plateColor: '#d4af37',
      switchType: 'cherry-red',
      rgbMode: 'off',
      rgbColor: '#00f0ff',
      soundEnabled: true,
      autoRotate: false,
      wireframe: false,
      showLegends: true,
    };
  });

  const [isGradientModalOpen, setIsGradientModalOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 640 : true
  );
  const [notification, setNotification] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification((curr) => (curr === msg ? null : curr));
    }, 2800);
  };

  // Add to recent colors helper
  const addRecentColor = (color: string) => {
    setState((prev) => {
      const filtered = prev.recentColors.filter(
        (c) => c.toLowerCase() !== color.toLowerCase()
      );
      return {
        ...prev,
        recentColors: [color, ...filtered].slice(0, 16),
      };
    });
  };

  // Layout Size or Language Change: Regenerate missing key colors cleanly
  const handleSizeChange = (newSize: KeyboardSize) => {
    const keys = getKeyboardLayout(newSize, state.layout);
    const newColors = { ...state.keyColors };
    const newLegends = { ...state.legendColors };

    keys.forEach((k) => {
      if (!newColors[k.id]) {
        newColors[k.id] = k.zone === 'alphas' ? defaultPreset.alphas.bg : defaultPreset.modifiers.bg;
        newLegends[k.id] = getOptimalTextColor(newColors[k.id]);
      }
    });

    setState((prev) => ({
      ...prev,
      size: newSize,
      keyColors: newColors,
      legendColors: newLegends,
    }));
    showToast(`Formfaktor geändert zu ${newSize}`);
  };

  const handleLayoutChange = (newLayout: KeyboardLayout) => {
    setState((prev) => ({ ...prev, layout: newLayout }));
    showToast(`Sprachlayout gewechselt zu ${newLayout === 'iso-de' ? 'ISO Deutsch' : 'ANSI US'}`);
  };

  // Handle Key Click (Brush, Bucket, Pipette)
  const handleKeyClick = (key: KeyDefinition, currentColor: string) => {
    if (state.activeTool === 'brush') {
      const optimalText = getOptimalTextColor(state.activeColor);
      setState((prev) => ({
        ...prev,
        keyColors: { ...prev.keyColors, [key.id]: prev.activeColor },
        legendColors: { ...prev.legendColors, [key.id]: optimalText },
      }));
      addRecentColor(state.activeColor);
    } else if (state.activeTool === 'picker') {
      setState((prev) => ({ ...prev, activeColor: currentColor }));
      addRecentColor(currentColor);
      showToast(`Farbe aufgenommen: ${currentColor.toUpperCase()}`);
    } else if (state.activeTool === 'bucket') {
      const keys = getKeyboardLayout(state.size, state.layout);
      const newColors = { ...state.keyColors };
      const newLegends = { ...state.legendColors };
      const optimalText = getOptimalTextColor(state.activeColor);

      if (state.bucketMode === 'all') {
        keys.forEach((k) => {
          newColors[k.id] = state.activeColor;
          newLegends[k.id] = optimalText;
        });
        showToast('Alle Tasten eingefärbt');
      } else if (state.bucketMode === 'same_color') {
        const targetColor = currentColor;
        let count = 0;
        keys.forEach((k) => {
          const kColor = state.keyColors[k.id] || '#d1d5db';
          if (colorsMatch(kColor, targetColor)) {
            newColors[k.id] = state.activeColor;
            newLegends[k.id] = optimalText;
            count++;
          }
        });
        showToast(`${count} Tasten mit gleicher Farbe ersetzt`);
      } else if (state.bucketMode === 'zone') {
        const targetZone = state.targetZone || key.zone;
        let count = 0;
        keys.forEach((k) => {
          if (k.zone === targetZone) {
            newColors[k.id] = state.activeColor;
            newLegends[k.id] = optimalText;
            count++;
          }
        });
        showToast(`Zone "${targetZone}" gefüllt (${count} Tasten)`);
      }

      setState((prev) => ({
        ...prev,
        keyColors: newColors,
        legendColors: newLegends,
      }));
      addRecentColor(state.activeColor);
    }
  };

  // Apply Linear Gradient across all keys
  const handleApplyGradient = (
    startColor: string,
    endColor: string,
    direction: GradientDirection
  ) => {
    const keys = getKeyboardLayout(state.size, state.layout);
    const bounds = getLayoutBounds(keys);
    const newColors = { ...state.keyColors };
    const newLegends = { ...state.legendColors };

    keys.forEach((k) => {
      let t = 0;
      if (direction === 'horizontal') {
        t = (k.x + k.w / 2) / bounds.width;
      } else if (direction === 'vertical') {
        t = (k.y + k.h / 2) / bounds.height;
      } else if (direction === 'diagonal-down') {
        const normX = (k.x + k.w / 2) / bounds.width;
        const normY = (k.y + k.h / 2) / bounds.height;
        t = (normX + normY) / 2;
      } else {
        const normX = (k.x + k.w / 2) / bounds.width;
        const normY = 1 - (k.y + k.h / 2) / bounds.height;
        t = (normX + normY) / 2;
      }

      const color = lerpColor(startColor, endColor, t);
      newColors[k.id] = color;
      newLegends[k.id] = getOptimalTextColor(color);
    });

    setState((prev) => ({
      ...prev,
      keyColors: newColors,
      legendColors: newLegends,
    }));

    addRecentColor(startColor);
    addRecentColor(endColor);

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.8 },
    });
    showToast('Farbverlauf erfolgreich angewendet!');
  };

  // Apply Keycap Preset
  const handleApplyPreset = (preset: ColorPreset) => {
    const keys = getKeyboardLayout(state.size, state.layout);
    const newColors: Record<string, string> = {};
    const newLegends: Record<string, string> = {};

    keys.forEach((k) => {
      let bg = preset.alphas.bg;
      let text = preset.alphas.text;

      if (k.zone === 'modifiers' || k.zone === 'f_row' || k.zone === 'nav') {
        bg = preset.modifiers.bg;
        text = preset.modifiers.text;
      }
      if (k.id === 'esc' || k.id === 'enter' || k.zone === 'arrows') {
        bg = preset.accents.bg;
        text = preset.accents.text;
      }
      if (k.zone === 'space' && preset.space) {
        bg = preset.space.bg;
        text = preset.space.text;
      }

      newColors[k.id] = bg;
      newLegends[k.id] = text;
    });

    setState((prev) => ({
      ...prev,
      keyColors: newColors,
      legendColors: newLegends,
      caseColor: preset.caseColor,
      caseMaterial: preset.caseMaterial,
      activeColor: preset.accents.bg,
    }));

    addRecentColor(preset.alphas.bg);
    addRecentColor(preset.modifiers.bg);
    addRecentColor(preset.accents.bg);

    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
    });
    showToast(`Preset "${preset.name}" geladen!`);
  };

  // Export Screenshot
  const handleExportScreenshot = () => {
    if (!keyboard3DRef.current) return;
    const dataUrl = keyboard3DRef.current.captureScreenshot();
    downloadScreenshot(dataUrl, `mechanical-keyboard-${state.size}-${state.layout}.png`);
    showToast('High-Res Screenshot exportiert!');
  };

  // Export JSON
  const handleExportJSON = () => {
    exportConfigurationAsJSON(state);
    showToast('Design als JSON exportiert!');
  };

  // Trigger file upload for JSON
  const handleImportJSONClick = () => {
    fileInputRef.current?.click();
  };

  // Handle uploaded JSON file
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const config = await importConfigurationFromJSON(file);
      setState((prev) => ({
        ...prev,
        ...config,
      }));
      showToast('Design erfolgreich importiert!');
    } catch (err: any) {
      showToast(`Fehler: ${err.message || 'Import fehlgeschlagen'}`);
    } finally {
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#0c0f17] flex flex-col font-sans select-none">
      {/* Hidden file input for JSON import */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* Header Bar */}
      <Header
        size={state.size}
        layout={state.layout}
        soundEnabled={state.soundEnabled}
        autoRotate={state.autoRotate}
        onSizeChange={handleSizeChange}
        onLayoutChange={handleLayoutChange}
        onToggleSound={() => setState((p) => ({ ...p, soundEnabled: !p.soundEnabled }))}
        onToggleAutoRotate={() => setState((p) => ({ ...p, autoRotate: !p.autoRotate }))}
        onResetCamera={() => keyboard3DRef.current?.resetCamera()}
        onExportScreenshot={handleExportScreenshot}
        onExportJSON={handleExportJSON}
        onImportJSON={handleImportJSONClick}
      />

      {/* Main 3D Viewport */}
      <main className="relative flex-1 w-full h-[calc(100vh-4rem)]">
        <KeyboardCanvas
          state={state}
          onKeyClick={handleKeyClick}
          keyboardRef={keyboard3DRef}
        />

        {/* Floating Tools Palette (Left on desktop, bottom dock on mobile) */}
        <ToolBar
          activeTool={state.activeTool}
          bucketMode={state.bucketMode}
          targetZone={state.targetZone}
          activeColor={state.activeColor}
          onSelectTool={(tool) => setState((p) => ({ ...p, activeTool: tool }))}
          onSelectBucketMode={(mode) => setState((p) => ({ ...p, bucketMode: mode }))}
          onSelectTargetZone={(zone) => setState((p) => ({ ...p, targetZone: zone }))}
          onOpenGradientModal={() => setIsGradientModalOpen(true)}
          onToggleCustomizer={() => setIsCustomizerOpen((prev) => !prev)}
          isCustomizerOpen={isCustomizerOpen}
        />

        {/* Customization Drawer (Right sidebar on desktop, Bottom Sheet on mobile) */}
        <CustomizerPanel
          state={state}
          isOpen={isCustomizerOpen}
          onToggleOpen={() => setIsCustomizerOpen((prev) => !prev)}
          onColorChange={(color) => {
            setState((p) => ({ ...p, activeColor: color }));
            addRecentColor(color);
          }}
          onApplyPreset={handleApplyPreset}
          onCaseChange={(caseColor, caseMaterial) =>
            setState((p) => ({ ...p, caseColor, caseMaterial }))
          }
          onPlateChange={(plateColor) => setState((p) => ({ ...p, plateColor }))}
          onSwitchChange={(switchType) => setState((p) => ({ ...p, switchType }))}
          onRgbChange={(rgbMode, rgbColor) =>
            setState((p) => ({
              ...p,
              rgbMode,
              ...(rgbColor ? { rgbColor } : {}),
            }))
          }
          onToggleLegends={() => setState((p) => ({ ...p, showLegends: !p.showLegends }))}
          onToggleWireframe={() => setState((p) => ({ ...p, wireframe: !p.wireframe }))}
        />
      </main>

      {/* Gradient Generator Modal */}
      <GradientModal
        isOpen={isGradientModalOpen}
        onClose={() => setIsGradientModalOpen(false)}
        onApplyGradient={handleApplyGradient}
        initialStartColor={state.activeColor}
      />

      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/50 text-indigo-300 text-xs font-semibold shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
};
