import React, { useEffect, useRef, useState } from 'react';
import { Keyboard3D } from './Keyboard3D';
import { KeyDefinition, KeyboardState } from '../../types/keyboard';

interface KeyboardCanvasProps {
  state: KeyboardState;
  onKeyClick: (key: KeyDefinition, currentColor: string) => void;
  keyboardRef: React.MutableRefObject<Keyboard3D | null>;
}

export const KeyboardCanvas: React.FC<KeyboardCanvasProps> = ({
  state,
  onKeyClick,
  keyboardRef,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredKey, setHoveredKey] = useState<KeyDefinition | null>(null);
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const kb3d = new Keyboard3D(
      containerRef.current,
      state,
      {
        onKeyClick,
        onKeyHover: (key, event) => {
          setHoveredKey(key);
          if (event) {
            setHoverPos({ x: event.clientX, y: event.clientY });
          }
        },
      }
    );

    keyboardRef.current = kb3d;

    return () => {
      kb3d.dispose();
      keyboardRef.current = null;
    };
  }, []);

  // Update state whenever props change
  useEffect(() => {
    if (keyboardRef.current) {
      keyboardRef.current.updateState(state);
    }
  }, [state]);

  const activeColor = hoveredKey ? state.keyColors[hoveredKey.id] || '#d1d5db' : '';
  const activeLegend = hoveredKey ? hoveredKey.legends[state.layout] : null;

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      {/* Three.js container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Hover Tooltip */}
      {hoveredKey && activeLegend && (
        <div
          className="fixed pointer-events-none z-50 px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-2xl flex items-center gap-2.5 text-xs transform -translate-x-1/2 -translate-y-12 transition-all duration-75"
          style={{ left: hoverPos.x, top: hoverPos.y }}
        >
          <div
            className="w-3.5 h-3.5 rounded-md border border-white/20 shadow-inner flex-shrink-0"
            style={{ backgroundColor: activeColor }}
          />
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 flex items-center gap-1.5">
              <span>{hoveredKey.label}</span>
              <span className="text-[10px] text-slate-400 font-mono">({hoveredKey.zone})</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">
              {activeColor.toUpperCase()}
            </span>
          </div>
        </div>
      )}

      {/* Viewport Control Hints */}
      <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400">
        <span>🖱️ Drehen: Linksklick + Ziehen</span>
        <span>•</span>
        <span>🔍 Zoom: Scrollrad</span>
        <span>•</span>
        <span>⌨️ Physische Tasten drücken zum Testen</span>
      </div>
    </div>
  );
};
