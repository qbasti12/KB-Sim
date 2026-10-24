import React, { useState } from 'react';
import {
  KeyboardState,
  ColorPreset,
  CaseMaterial,
  SwitchType,
} from '../types/keyboard';
import {
  PRESETS,
  CASE_COLORS,
  PLATE_COLORS,
  SWITCH_TYPES,
  QUICK_PALETTE,
} from '../data/presets';
import {
  Palette,
  Sliders,
  Sun,
  ChevronRight,
  ChevronLeft,
  Check,
  Eye,
  Box,
  X,
} from 'lucide-react';

interface CustomizerPanelProps {
  state: KeyboardState;
  isOpen: boolean;
  onToggleOpen: () => void;
  onColorChange: (color: string) => void;
  onApplyPreset: (preset: ColorPreset) => void;
  onCaseChange: (color: string, material: CaseMaterial) => void;
  onPlateChange: (color: string) => void;
  onSwitchChange: (type: SwitchType) => void;
  onRgbChange: (mode: KeyboardState['rgbMode'], color?: string) => void;
  onToggleLegends: () => void;
  onToggleWireframe: () => void;
}

export const CustomizerPanel: React.FC<CustomizerPanelProps> = ({
  state,
  isOpen,
  onToggleOpen,
  onColorChange,
  onApplyPreset,
  onCaseChange,
  onPlateChange,
  onSwitchChange,
  onRgbChange,
  onToggleLegends,
  onToggleWireframe,
}) => {
  const [activeTab, setActiveTab] = useState<'colors' | 'hardware' | 'lighting'>('colors');

  return (
    <>
      {/* Mobile Backdrop (when open on phone screens) */}
      {isOpen && (
        <div
          onClick={onToggleOpen}
          className="fixed inset-0 bg-black/40 backdrop-blur-xs z-30 sm:hidden animate-in fade-in"
        />
      )}

      {/* Main Drawer:
          - Mobile: Bottom Sheet (fixed at bottom of screen, rounded-t-3xl)
          - Desktop: Floating right sidebar (top-20 right-4)
      */}
      <aside
        className={`fixed sm:absolute bottom-0 sm:bottom-auto sm:top-20 inset-x-0 sm:inset-x-auto sm:right-4 z-40 sm:z-20 transition-transform duration-300 ease-out flex ${
          isOpen
            ? 'translate-y-0 sm:translate-x-0'
            : 'translate-y-full sm:translate-y-0 sm:translate-x-[calc(100%+1.5rem)]'
        }`}
      >
        {/* Desktop Collapse / Expand Toggle Tab */}
        <button
          onClick={onToggleOpen}
          className="hidden sm:flex absolute -left-9 top-4 w-9 h-10 rounded-l-xl bg-slate-900/90 border-l border-y border-slate-800 backdrop-blur-md items-center justify-center text-slate-400 hover:text-white shadow-xl"
          title={isOpen ? 'Panel einklappen' : 'Panel ausklappen'}
        >
          {isOpen ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
        </button>

        {/* Panel Container */}
        <div className="w-full sm:w-80 max-h-[65vh] sm:max-h-[calc(100vh-6.5rem)] bg-slate-900/95 backdrop-blur-2xl border-t sm:border border-slate-800/90 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden pb-4 sm:pb-0">
          {/* Mobile Handle Bar */}
          <div className="sm:hidden w-full flex items-center justify-between px-4 pt-3 pb-1 border-b border-slate-800/60">
            <div className="w-10 h-1 bg-slate-700/80 rounded-full mx-auto" />
            <button
              onClick={onToggleOpen}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-800 p-1.5 bg-slate-950/40">
            <button
              onClick={() => setActiveTab('colors')}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'colors'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Farben</span>
            </button>

            <button
              onClick={() => setActiveTab('hardware')}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'hardware'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Hardware</span>
            </button>

            <button
              onClick={() => setActiveTab('lighting')}
              className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'lighting'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Effekte</span>
            </button>
          </div>

          {/* Tab Contents (Scrollable) */}
          <div className="p-4 overflow-y-auto space-y-4 sm:space-y-5 text-slate-200 scrollbar-thin scrollbar-thumb-slate-700">
            {/* TAB 1: FARBEN & PRESETS */}
            {activeTab === 'colors' && (
              <>
                {/* Active Color Picker Section */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Aktive Pinselfarbe
                  </span>
                  <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                    <div className="relative">
                      <input
                        type="color"
                        value={state.activeColor}
                        onChange={(e) => onColorChange(e.target.value)}
                        className="w-10 h-10 rounded-xl cursor-pointer bg-transparent border-0 opacity-0 absolute inset-0"
                      />
                      <div
                        className="w-10 h-10 rounded-xl shadow-inner border border-white/20"
                        style={{ backgroundColor: state.activeColor }}
                      />
                    </div>

                    <div className="flex-1">
                      <input
                        type="text"
                        value={state.activeColor.toUpperCase()}
                        onChange={(e) => onColorChange(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-mono uppercase text-slate-200 focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Recent Colors (History) */}
                {state.recentColors.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Zuletzt verwendet
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {state.recentColors.map((hex, i) => (
                        <button
                          key={`${hex}-${i}`}
                          onClick={() => onColorChange(hex)}
                          title={hex}
                          className={`w-7 h-7 sm:w-6 sm:h-6 rounded-md shadow border transition-transform hover:scale-110 active:scale-95 ${
                            state.activeColor.toLowerCase() === hex.toLowerCase()
                              ? 'ring-2 ring-indigo-400 border-white scale-105'
                              : 'border-white/10'
                          }`}
                          style={{ backgroundColor: hex }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Quick Swatches Palette */}
                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Farbpalette
                  </span>
                  <div className="grid grid-cols-10 gap-1.5 sm:gap-1">
                    {QUICK_PALETTE.map((hex) => (
                      <button
                        key={hex}
                        onClick={() => onColorChange(hex)}
                        title={hex}
                        className={`h-6 sm:h-5 rounded shadow-sm transition-transform hover:scale-125 active:scale-95 ${
                          state.activeColor.toLowerCase() === hex.toLowerCase()
                            ? 'ring-2 ring-indigo-400 z-10 scale-110'
                            : 'border border-white/5'
                        }`}
                        style={{ backgroundColor: hex }}
                      />
                    ))}
                  </div>
                </div>

                {/* Curated Keycap Set Presets */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Keycap Set Presets
                  </span>
                  <div className="space-y-2">
                    {PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        onClick={() => onApplyPreset(preset)}
                        className="w-full p-2.5 rounded-xl bg-slate-800/40 hover:bg-slate-800/80 active:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all text-left flex flex-col gap-1.5 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300">
                            {preset.name}
                          </span>
                          {/* Mini Color Strip */}
                          <div className="flex items-center gap-1">
                            <div
                              className="w-3.5 h-3.5 rounded-full border border-black/20"
                              style={{ backgroundColor: preset.alphas.bg }}
                              title="Alphas"
                            />
                            <div
                              className="w-3.5 h-3.5 rounded-full border border-black/20"
                              style={{ backgroundColor: preset.modifiers.bg }}
                              title="Modifiers"
                            />
                            <div
                              className="w-3.5 h-3.5 rounded-full border border-black/20"
                              style={{ backgroundColor: preset.accents.bg }}
                              title="Accents"
                            />
                          </div>
                        </div>
                        <p className="text-[10px] text-slate-400 line-clamp-1">
                          {preset.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* TAB 2: HARDWARE (CASE, PLATE, SWITCHES) */}
            {activeTab === 'hardware' && (
              <>
                {/* Case Color & Material */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Gehäuse (Case)
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {CASE_COLORS.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => onCaseChange(c.hex, c.material)}
                        className={`p-2.5 sm:p-2 rounded-xl border text-left flex items-center gap-2 transition-all ${
                          state.caseColor.toLowerCase() === c.hex.toLowerCase()
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full border border-white/20 flex-shrink-0"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span className="text-xs truncate">{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Plate Material & Color */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Montageplatte (Plate)
                  </span>
                  <div className="space-y-1.5">
                    {PLATE_COLORS.map((p) => (
                      <button
                        key={p.name}
                        onClick={() => onPlateChange(p.hex)}
                        className={`w-full p-2.5 sm:p-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                          state.plateColor.toLowerCase() === p.hex.toLowerCase()
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-full border border-white/20"
                            style={{ backgroundColor: p.hex }}
                          />
                          <span className="text-xs">{p.name}</span>
                        </div>
                        {state.plateColor.toLowerCase() === p.hex.toLowerCase() && (
                          <Check className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Switches */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Switches
                  </span>
                  <div className="space-y-1.5">
                    {SWITCH_TYPES.map((sw) => (
                      <button
                        key={sw.id}
                        onClick={() => onSwitchChange(sw.id as SwitchType)}
                        className={`w-full p-2.5 sm:p-2 rounded-xl border text-left flex items-center justify-between transition-all ${
                          state.switchType === sw.id
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-4 h-4 rounded-sm shadow-sm"
                            style={{ backgroundColor: sw.stemColor }}
                          />
                          <span className="text-xs">{sw.name}</span>
                        </div>
                        {state.switchType === sw.id && (
                          <Check className="w-3.5 h-3.5 text-indigo-400" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* TAB 3: EFFEKTE & VIEW */}
            {activeTab === 'lighting' && (
              <>
                {/* RGB Underglow Modes */}
                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    RGB Unterbodenbeleuchtung
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    {(['off', 'rainbow', 'static', 'pulse'] as const).map((mode) => (
                      <button
                        key={mode}
                        onClick={() => onRgbChange(mode)}
                        className={`p-2.5 rounded-xl border text-center text-xs font-medium capitalize transition-all ${
                          state.rgbMode === mode
                            ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                            : 'bg-slate-800/40 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {mode === 'off' ? 'Aus' : mode}
                      </button>
                    ))}
                  </div>

                  {state.rgbMode !== 'off' && state.rgbMode !== 'rainbow' && (
                    <div className="flex items-center gap-2 pt-2">
                      <span className="text-xs text-slate-400">LED-Farbe:</span>
                      <input
                        type="color"
                        value={state.rgbColor}
                        onChange={(e) => onRgbChange(state.rgbMode, e.target.value)}
                        className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                      />
                    </div>
                  )}
                </div>

                {/* View Display Options */}
                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Ansichtsoptionen
                  </span>

                  <button
                    onClick={onToggleLegends}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      state.showLegends
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                        : 'bg-slate-800/40 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-xs">Tastenbeschriftung (Legends)</span>
                    </div>
                    <span className="text-xs font-mono">{state.showLegends ? 'AN' : 'AUS'}</span>
                  </button>

                  <button
                    onClick={onToggleWireframe}
                    className={`w-full p-2.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                      state.wireframe
                        ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300'
                        : 'bg-slate-800/40 border-slate-800 text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Box className="w-4 h-4" />
                      <span className="text-xs">Drahtgitter-Modus (Wireframe)</span>
                    </div>
                    <span className="text-xs font-mono">{state.wireframe ? 'AN' : 'AUS'}</span>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
