export type KeyboardSize = '100%' | 'tkl' | '75%' | '65%' | '60%' | '40%';

export type KeyboardLayout = 'iso-de' | 'ansi-us';

export type ToolType = 'brush' | 'bucket' | 'picker' | 'gradient';

export type BucketMode = 'all' | 'same_color' | 'zone';

export type KeyZone = 'alphas' | 'modifiers' | 'f_row' | 'numpad' | 'arrows' | 'nav' | 'space';

export type GradientDirection = 'horizontal' | 'vertical' | 'diagonal-down' | 'diagonal-up';

export type CaseMaterial = 'aluminum' | 'matte' | 'e-white' | 'retro-beige' | 'polycarbonate';

export type SwitchType = 'cherry-red' | 'cherry-blue' | 'cherry-brown' | 'gateron-yellow' | 'boba-u4t';

export interface KeyLegend {
  main: string;
  sub?: string;
  shift?: string;
  altGr?: string;
}

export interface KeyDefinition {
  id: string;
  code?: string; // KeyboardEvent.code mapping e.g. "KeyQ", "Enter"
  label: string;
  x: number; // in U units (1u = 19.05mm)
  y: number; // in U units (row offset)
  w: number; // width in U units (1, 1.25, 1.5, 1.75, 2, 2.25, 2.75, 6.25, etc.)
  h: number; // height in U units (normally 1, 2 for numpad enter/+)
  shape?: 'normal' | 'iso_enter' | 'stepped_caps';
  zone: KeyZone;
  legends: {
    'iso-de': KeyLegend;
    'ansi-us': KeyLegend;
  };
}

export interface KeyboardState {
  size: KeyboardSize;
  layout: KeyboardLayout;
  keyColors: Record<string, string>; // keyId -> hex color
  legendColors: Record<string, string>; // keyId -> hex color
  activeColor: string;
  activeLegendColor: string;
  activeTool: ToolType;
  bucketMode: BucketMode;
  targetZone: KeyZone;
  gradientStart: string;
  gradientEnd: string;
  gradientDirection: GradientDirection;
  recentColors: string[];
  caseColor: string;
  caseMaterial: CaseMaterial;
  plateColor: string;
  switchType: SwitchType;
  rgbMode: 'off' | 'static' | 'rainbow' | 'pulse';
  rgbColor: string;
  soundEnabled: boolean;
  autoRotate: boolean;
  wireframe: boolean;
  showLegends: boolean;
}

export interface ColorPreset {
  id: string;
  name: string;
  description: string;
  alphas: { bg: string; text: string };
  modifiers: { bg: string; text: string };
  accents: { bg: string; text: string };
  space?: { bg: string; text: string };
  caseColor: string;
  caseMaterial: CaseMaterial;
}
