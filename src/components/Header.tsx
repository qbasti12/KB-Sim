import React, { useState } from 'react';
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
  Menu,
  X,
  Sliders,
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
  onToggleMobileDrawer?: () => void;
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="h-14 sm:h-16 px-3 sm:px-4 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md flex items-center justify-between z-30 select-none">
        {/* App Logo & Title */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/20 text-white flex-shrink-0">
            <Keyboard className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="text-sm sm:text-base font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-indigo-300">
                KB-Sim 3D
              </h1>
              <span className="hidden lg:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                Pro Studio
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 hidden sm:block">
              Mechanical Keyboard 3D Simulator & Keycap Designer
            </p>
          </div>
        </div>

        {/* Desktop Center: Size & Layout Selectors */}
        <div className="hidden md:flex items-center gap-2">
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

        {/* Mobile Quick Size Pill */}
        <div className="flex md:hidden items-center gap-1.5">
          <select
            value={size}
            onChange={(e) => onSizeChange(e.target.value as KeyboardSize)}
            className="bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-indigo-500"
          >
            {SIZES.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          <button
            onClick={() => onLayoutChange(layout === 'iso-de' ? 'ansi-us' : 'iso-de')}
            className="px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-[11px] font-semibold text-indigo-300"
          >
            {layout === 'iso-de' ? 'ISO' : 'ANSI'}
          </button>
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden sm:flex items-center gap-1.5">
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
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Screenshot</span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down Menu Sheet */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-14 z-40 bg-slate-950/95 border-b border-slate-800/90 backdrop-blur-2xl p-4 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-2 sm:hidden">
          {/* Layout & Language */}
          <div className="space-y-1.5">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Sprachlayout
            </span>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  onLayoutChange('iso-de');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 rounded-lg text-xs font-semibold border ${
                  layout === 'iso-de'
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                ISO Deutsch
              </button>
              <button
                onClick={() => {
                  onLayoutChange('ansi-us');
                  setMobileMenuOpen(false);
                }}
                className={`py-2 rounded-lg text-xs font-semibold border ${
                  layout === 'ansi-us'
                    ? 'bg-indigo-600 text-white border-indigo-500'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}
              >
                ANSI US
              </button>
            </div>
          </div>

          {/* Actions Grid */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => {
                onToggleSound();
              }}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs ${
                soundEnabled
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              <span>Audio</span>
            </button>

            <button
              onClick={() => {
                onToggleAutoRotate();
              }}
              className={`p-2.5 rounded-xl border text-center flex flex-col items-center gap-1 text-xs ${
                autoRotate
                  ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}
            >
              <RotateCw className="w-4 h-4" />
              <span>Drehung</span>
            </button>

            <button
              onClick={() => {
                onResetCamera();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-center flex flex-col items-center gap-1 text-xs"
            >
              <Camera className="w-4 h-4" />
              <span>Zentrieren</span>
            </button>
          </div>

          {/* Export / Import & Screenshot */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                onImportJSON();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 text-xs"
            >
              <Upload className="w-4 h-4" />
              <span>Import</span>
            </button>

            <button
              onClick={() => {
                onExportJSON();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 flex items-center justify-center gap-1.5 text-xs"
            >
              <Download className="w-4 h-4" />
              <span>Export</span>
            </button>

            <button
              onClick={() => {
                onExportScreenshot();
                setMobileMenuOpen(false);
              }}
              className="p-2.5 rounded-xl bg-indigo-600 text-white font-medium flex items-center justify-center gap-1.5 text-xs"
            >
              <Sparkles className="w-4 h-4" />
              <span>Foto</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
