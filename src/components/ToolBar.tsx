import React from 'react';
import {
  ToolType,
  BucketMode,
  KeyZone,
} from '../types/keyboard';
import {
  Paintbrush,
  PaintBucket,
  Pipette,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ToolBarProps {
  activeTool: ToolType;
  bucketMode: BucketMode;
  targetZone: KeyZone;
  activeColor: string;
  onSelectTool: (tool: ToolType) => void;
  onSelectBucketMode: (mode: BucketMode) => void;
  onSelectTargetZone: (zone: KeyZone) => void;
  onOpenGradientModal: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({
  activeTool,
  bucketMode,
  targetZone,
  activeColor,
  onSelectTool,
  onSelectBucketMode,
  onSelectTargetZone,
  onOpenGradientModal,
}) => {
  return (
    <div className="absolute top-20 left-4 z-20 flex flex-col gap-2">
      {/* Main Tool Palette */}
      <div className="flex flex-col gap-1.5 p-1.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl">
        {/* Active Color Preview Indicator */}
        <div className="p-1 flex items-center justify-center">
          <div
            className="w-8 h-8 rounded-xl shadow-md border-2 border-white/20 transition-transform hover:scale-105"
            style={{ backgroundColor: activeColor }}
            title={`Aktive Farbe: ${activeColor.toUpperCase()}`}
          />
        </div>

        <div className="w-full h-px bg-slate-800 my-0.5" />

        {/* 1. Brush Tool */}
        <button
          onClick={() => onSelectTool('brush')}
          title="Pinsel: Klicke auf eine einzelne Taste zum Einfärben"
          className={`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${
            activeTool === 'brush'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
          }`}
        >
          <Paintbrush className="w-5 h-5" />
        </button>

        {/* 2. Bucket Tool */}
        <button
          onClick={() => onSelectTool('bucket')}
          title="Füllwerkzeug: Bereichs- oder Gesamtfüllung"
          className={`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${
            activeTool === 'bucket'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
          }`}
        >
          <PaintBucket className="w-5 h-5" />
        </button>

        {/* 3. Pipette / Eyedropper */}
        <button
          onClick={() => onSelectTool('picker')}
          title="Pipette: Farbe von einer Taste aufnehmen"
          className={`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${
            activeTool === 'picker'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
          }`}
        >
          <Pipette className="w-5 h-5" />
        </button>

        {/* 4. Gradient Tool */}
        <button
          onClick={() => {
            onSelectTool('gradient');
            onOpenGradientModal();
          }}
          title="Farbverlauf-Generator: Linearer Farbverlauf über alle Tasten"
          className={`p-2.5 rounded-xl transition-all duration-150 flex items-center justify-center ${
            activeTool === 'gradient'
              ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30 ring-2 ring-indigo-400/40'
              : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
          }`}
        >
          <Sparkles className="w-5 h-5" />
        </button>
      </div>

      {/* Bucket Sub-Options Popover (Visible when Bucket is active) */}
      {activeTool === 'bucket' && (
        <div className="p-2.5 rounded-xl bg-slate-900/95 backdrop-blur-xl border border-slate-800/90 shadow-2xl flex flex-col gap-2 w-52 animate-in fade-in slide-in-from-left-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-1">
            Füllmodus
          </span>

          <div className="flex flex-col gap-1">
            <button
              onClick={() => onSelectBucketMode('all')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${
                bucketMode === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>Alle Tasten füllen</span>
              <Layers className="w-3.5 h-3.5 opacity-70" />
            </button>

            <button
              onClick={() => onSelectBucketMode('same_color')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${
                bucketMode === 'same_color'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>Gleiche Farbe ersetzen</span>
              <span className="text-[10px] opacity-60">Flood Fill</span>
            </button>

            <button
              onClick={() => onSelectBucketMode('zone')}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-medium text-left flex items-center justify-between ${
                bucketMode === 'zone'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <span>Zonen-Füllung</span>
              <span className="text-[10px] opacity-60">Bereich</span>
            </button>
          </div>

          {bucketMode === 'zone' && (
            <div className="pt-2 border-t border-slate-800 flex flex-col gap-1">
              <span className="text-[10px] font-semibold text-slate-400 px-1">
                Ziel-Zone:
              </span>
              <div className="grid grid-cols-2 gap-1 text-[11px]">
                {[
                  { id: 'alphas', label: 'Alphas' },
                  { id: 'modifiers', label: 'Modifier' },
                  { id: 'f_row', label: 'F-Reihe' },
                  { id: 'arrows', label: 'Pfeiltasten' },
                  { id: 'numpad', label: 'NumPad' },
                  { id: 'space', label: 'Leertaste' },
                ].map((z) => (
                  <button
                    key={z.id}
                    onClick={() => onSelectTargetZone(z.id as KeyZone)}
                    className={`px-2 py-1 rounded text-center truncate ${
                      targetZone === z.id
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                        : 'bg-slate-800/60 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {z.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
