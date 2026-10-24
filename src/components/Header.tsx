import React from 'react';
import {
  KeyboardSize,
  KeyboardLayout,
} from '../types/keyboard';
import {
  Keyboard,
  Camera,
  RotateCw,
  Volume2,
  VolumeX,
  Download,
  Upload,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  size: KeyboardSize;
  layout: KeyboardLayout;
  soundEnabled: boolean;
  autoRotate: boolean;
  onSizeChange: (size: KeyboardSize) => void;
  onLayoutChange: (layout: KeyboardLayout) => void;
  onToggleSound: () => void;
  onToggleAutoRotate: () => void;
  onResetCamera: () => void;
  onExportScreenshot: () => void;
  onExportJSON: () => void;
  onImportJSON: () => void;
}

const SIZES: { label: string; value: KeyboardSize; desc: string }[] = [
  { label: '100%', value: '100%', desc: 'Full-Size mit NumPad' },
  { label: 'TKL', value: 'tkl', desc: '80% Tenkeyless' },
  { label: '75%', value: '75%', desc: 'Kompakt mit F-Reihe' },
  { label: '65%', value: '65%', desc: 'Kompakt mit Pfeiltasten' },
  { label: '60%', value: '60%', desc: 'Standard 60%' },
  { label: '40%', value: '40%', desc: 'Ultra-kompakt' },
];

export const Header: React.FC<HeaderProps> = ({
  size,
  layout,
  soundEnabled,
  autoRotate,
  onSizeChange,
  onLayoutChange,
  onToggleSound,
  onToggleAutoRotate,
  onResetCamera,
  onExportScreenshot,
  onExportJSON,
  onImportJSON,
}) => {
  return (
    <header className="h-16 px-4 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md flex items-center justify-between z-30 select-none">
      {/* App Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white">
          <Keyboard className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300">
              KB-Sim 3D
            </h1>
            <span className="hidden md:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              Pro Studio
            </span>
          </div>
          <p className="text-[11px] text-slate-400 hidden sm:block">
            Mechanical Keyboard 3D Simulator & Keycap Designer
          </p>
        </div>
      </div>

      {/* Center: Size & Layout Selectors */}
      <div className="flex items-center gap-2">
        {/* Size Selector */}
        <div className="flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs">
          {SIZES.map((s) => (
            <button
              key={s.value}
              onClick={() => onSizeChange(s.value)}
              title={s.desc}
              className={`px-2.5 py-1 rounded-md font-medium transition-all duration-150 ${
                size === s.value
                  ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* Language Layout Selector (ISO-DE vs ANSI-US) */}
        <div className="flex bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs">
          <button
            onClick={() => onLayoutChange('iso-de')}
            title="ISO Deutsch (Große Enter, kurze Shift, Umlaute)"
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              layout === 'iso-de'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            ISO-DE
          </button>
          <button
            onClick={() => onLayoutChange('ansi-us')}
            title="ANSI US (Flache Enter, breite Shift)"
            className={`px-2.5 py-1 rounded-md font-medium transition-all ${
              layout === 'ansi-us'
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            ANSI-US
          </button>
        </div>
      </div>

      {/* Right: Actions (Sound, AutoRotate, Reset, Screenshot, JSON) */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={onToggleSound}
          title={soundEnabled ? 'Thocky Audio An' : 'Thocky Audio Aus'}
          className={`p-2 rounded-lg border transition-all ${
            soundEnabled
              ? 'bg-slate-800 border-slate-700 text-indigo-400'
              : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-slate-300'
          }`}
        >
          {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        </button>

        <button
          onClick={onToggleAutoRotate}
          title={autoRotate ? 'Auto-Drehung stoppen' : 'Auto-Drehung starten'}
          className={`p-2 rounded-lg border transition-all ${
            autoRotate
              ? 'bg-indigo-600/20 border-indigo-500/40 text-indigo-300 animate-spin'
              : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800'
          }`}
        >
          <RotateCw className="w-4 h-4" />
        </button>

        <button
          onClick={onResetCamera}
          title="Kamera-Perspektive zurücksetzen"
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
        >
          <Camera className="w-4 h-4" />
        </button>

        <div className="h-5 w-px bg-slate-800 mx-1" />

        <button
          onClick={onImportJSON}
          title="Design laden (JSON Import)"
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
        >
          <Upload className="w-4 h-4" />
        </button>

        <button
          onClick={onExportJSON}
          title="Design speichern (JSON Export)"
          className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-all"
        >
          <Download className="w-4 h-4" />
        </button>

        <button
          onClick={onExportScreenshot}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all active:scale-95"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Screenshot</span>
        </button>
      </div>
    </header>
  );
};
