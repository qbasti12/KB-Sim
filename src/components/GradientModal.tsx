import React, { useState } from 'react';
import { GradientDirection } from '../types/keyboard';
import { X, Sparkles, ArrowRight, ArrowDown, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { lerpColor } from '../utils/color';

interface GradientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyGradient: (startColor: string, endColor: string, direction: GradientDirection) => void;
  initialStartColor: string;
}

export const GradientModal: React.FC<GradientModalProps> = ({
  isOpen,
  onClose,
  onApplyGradient,
  initialStartColor,
}) => {
  const [startColor, setStartColor] = useState(initialStartColor || '#ff007f');
  const [endColor, setEndColor] = useState('#00f0ff');
  const [direction, setDirection] = useState<GradientDirection>('horizontal');

  if (!isOpen) return null;

  const handleApply = () => {
    onApplyGradient(startColor, endColor, direction);
    onClose();
  };

  // Preview gradient steps
  const previewSteps = 12;
  const steps = Array.from({ length: previewSteps }, (_, i) => {
    return lerpColor(startColor, endColor, i / (previewSteps - 1));
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-100">Farbverlauf-Generator</h3>
              <p className="text-xs text-slate-400">Lineare Farbinterpolation über alle Tasten</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="py-5 space-y-5">
          {/* Colors Selection */}
          <div className="grid grid-cols-2 gap-4">
            {/* Start Color */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Startfarbe</label>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                <input
                  type="color"
                  value={startColor}
                  onChange={(e) => setStartColor(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input
                  type="text"
                  value={startColor}
                  onChange={(e) => setStartColor(e.target.value)}
                  className="w-full bg-transparent font-mono text-xs uppercase text-slate-200 focus:outline-none"
                />
              </div>
            </div>

            {/* End Color */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-slate-300">Endfarbe</label>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                <input
                  type="color"
                  value={endColor}
                  onChange={(e) => setEndColor(e.target.value)}
                  className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                />
                <input
                  type="text"
                  value={endColor}
                  onChange={(e) => setEndColor(e.target.value)}
                  className="w-full bg-transparent font-mono text-xs uppercase text-slate-200 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Direction Selection */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-slate-300">Richtung des Verlaufs</label>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setDirection('horizontal')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${
                  direction === 'horizontal'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <ArrowRight className="w-5 h-5" />
                <span className="text-xs font-medium">Horizontal</span>
                <span className="text-[10px] text-slate-500">Links → Rechts</span>
              </button>

              <button
                onClick={() => setDirection('vertical')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${
                  direction === 'vertical'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <ArrowDown className="w-5 h-5" />
                <span className="text-xs font-medium">Vertikal</span>
                <span className="text-[10px] text-slate-500">Oben → Unten</span>
              </button>

              <button
                onClick={() => setDirection('diagonal-down')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-xl border transition-all ${
                  direction === 'diagonal-down'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-300 shadow-sm'
                    : 'bg-slate-800/50 border-slate-700/60 text-slate-400 hover:text-slate-200'
                }`}
              >
                <ArrowDownRight className="w-5 h-5" />
                <span className="text-xs font-medium">Diagonal</span>
                <span className="text-[10px] text-slate-500">Links oben → Rechts unten</span>
              </button>
            </div>
          </div>

          {/* Live Preview Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[11px] text-slate-400">
              <span>Vorschau-Verlauf</span>
              <span className="font-mono">{startColor.toUpperCase()} → {endColor.toUpperCase()}</span>
            </div>
            <div className="h-6 rounded-lg overflow-hidden flex border border-slate-700/80 shadow-inner">
              {steps.map((c, i) => (
                <div key={i} className="flex-1 h-full" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition-colors"
          >
            Abbrechen
          </button>
          <button
            onClick={handleApply}
            className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-600/30 transition-all active:scale-95 flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verlauf anwenden</span>
          </button>
        </div>
      </div>
    </div>
  );
};
