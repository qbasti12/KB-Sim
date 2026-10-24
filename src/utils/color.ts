// Color utilities and gradient math

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)));
  return (
    '#' +
    [clamp(r), clamp(g), clamp(b)]
      .map((x) => x.toString(16).padStart(2, '0'))
      .join('')
  );
}

// Linear color interpolation
export function lerpColor(hexA: string, hexB: string, t: number): string {
  const cA = hexToRgb(hexA);
  const cB = hexToRgb(hexB);
  const clampedT = Math.max(0, Math.min(1, t));

  const r = cA.r + (cB.r - cA.r) * clampedT;
  const g = cA.g + (cB.g - cA.g) * clampedT;
  const b = cA.b + (cB.b - cA.b) * clampedT;

  return rgbToHex(r, g, b);
}

// Calculate relative luminance to determine optimal legend contrast color
export function getOptimalTextColor(bgHex: string): string {
  const { r, g, b } = hexToRgb(bgHex);
  // standard relative luminance formula
  const lum = 0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
  return lum > 0.45 ? '#1a1a1a' : '#f8f9fa';
}

// Check if two hex colors match closely
export function colorsMatch(c1: string, c2: string): boolean {
  return c1.toLowerCase().replace('#', '') === c2.toLowerCase().replace('#', '');
}
