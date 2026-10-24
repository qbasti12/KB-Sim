import { KeyboardState } from '../types/keyboard';

export function exportConfigurationAsJSON(state: KeyboardState) {
  const exportData = {
    appName: 'Mechanical Keyboard 3D Simulator & Keycap Designer',
    version: '1.0.0',
    exportDate: new Date().toISOString(),
    configuration: {
      size: state.size,
      layout: state.layout,
      caseColor: state.caseColor,
      caseMaterial: state.caseMaterial,
      plateColor: state.plateColor,
      switchType: state.switchType,
      rgbMode: state.rgbMode,
      rgbColor: state.rgbColor,
      keyColors: state.keyColors,
      legendColors: state.legendColors,
    },
  };

  const jsonString = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `keyboard-design-${state.size}-${Date.now()}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function importConfigurationFromJSON(file: File): Promise<Partial<KeyboardState>> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const parsed = JSON.parse(text);

        if (parsed.configuration) {
          resolve(parsed.configuration);
        } else if (parsed.keyColors) {
          // Direct state export compatibility
          resolve(parsed);
        } else {
          reject(new Error('Ungültiges Format: Keine Tastaturkonfiguration gefunden.'));
        }
      } catch (err) {
        reject(new Error('Fehler beim Parsen der JSON-Datei.'));
      }
    };
    reader.onerror = () => reject(new Error('Datei konnte nicht gelesen werden.'));
    reader.readAsText(file);
  });
}

export function downloadScreenshot(dataUrl: string, filename?: string) {
  const a = document.createElement('a');
  a.href = dataUrl;
  a.download = filename || `keyboard-snapshot-${Date.now()}.png`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
