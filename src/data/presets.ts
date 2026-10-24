import { ColorPreset } from '../types/keyboard';

export const PRESETS: ColorPreset[] = [
  {
    id: 'retro-beige',
    name: 'Retro Beige (Classic 9009)',
    description: 'Iconic IBM vintage beige with muted sage green and terracotta accents.',
    alphas: { bg: '#e6dfd1', text: '#2d2b28' },
    modifiers: { bg: '#cfc4b2', text: '#2d2b28' },
    accents: { bg: '#7d9d85', text: '#ffffff' }, // sage green (esc, enter)
    space: { bg: '#e6dfd1', text: '#2d2b28' },
    caseColor: '#ded5c5',
    caseMaterial: 'retro-beige',
  },
  {
    id: 'cyberpunk',
    name: 'Cyberpunk Neon',
    description: 'High-contrast futuristic aesthetic with radiant neon pink, cyan, and deep purple.',
    alphas: { bg: '#1c1033', text: '#00f0ff' },
    modifiers: { bg: '#2b0c4a', text: '#ff007f' },
    accents: { bg: '#ff007f', text: '#0c061a' },
    space: { bg: '#00f0ff', text: '#0c061a' },
    caseColor: '#120824',
    caseMaterial: 'aluminum',
  },
  {
    id: 'gmk-dolch',
    name: 'GMK Dolch',
    description: 'Timeless slate and charcoal gray profile with distinctive cyan accent keys.',
    alphas: { bg: '#54595f', text: '#ffffff' },
    modifiers: { bg: '#2f343b', text: '#ffffff' },
    accents: { bg: '#009bb3', text: '#ffffff' },
    space: { bg: '#54595f', text: '#ffffff' },
    caseColor: '#1e2024',
    caseMaterial: 'matte',
  },
  {
    id: 'olivia',
    name: 'GMK Olivia',
    description: 'Elegant dual-tone dark charcoal, crisp off-white, and soft rose gold.',
    alphas: { bg: '#f5f3ee', text: '#2e2e2e' },
    modifiers: { bg: '#2e2e2e', text: '#eed6cc' },
    accents: { bg: '#e8a598', text: '#2e2e2e' },
    space: { bg: '#e8a598', text: '#2e2e2e' },
    caseColor: '#1a1a1a',
    caseMaterial: 'aluminum',
  },
  {
    id: 'botanical',
    name: 'GMK Botanical',
    description: 'Soothing organic forest palette with jungle moss, fern green, and crisp mint.',
    alphas: { bg: '#e7ece8', text: '#314438' },
    modifiers: { bg: '#506758', text: '#e7ece8' },
    accents: { bg: '#86a892', text: '#19261f' },
    space: { bg: '#e7ece8', text: '#314438' },
    caseColor: '#202c25',
    caseMaterial: 'matte',
  },
  {
    id: 'dracula',
    name: 'Dracula Theme',
    description: 'Beloved dark coding theme with purple, cyan, neon green, and pink highlights.',
    alphas: { bg: '#282a36', text: '#f8f8f2' },
    modifiers: { bg: '#44475a', text: '#f8f8f2' },
    accents: { bg: '#ff79c6', text: '#282a36' },
    space: { bg: '#bd93f9', text: '#282a36' },
    caseColor: '#1e1f29',
    caseMaterial: 'matte',
  },
  {
    id: 'carbon',
    name: 'Carbon Orange',
    description: 'Industrial technical styling with warm gray alphas, bone modifier, and vibrant orange.',
    alphas: { bg: '#c9beb0', text: '#2b2927' },
    modifiers: { bg: '#42454b', text: '#ea6d20' },
    accents: { bg: '#ea6d20', text: '#ffffff' },
    space: { bg: '#ea6d20', text: '#ffffff' },
    caseColor: '#2b2d31',
    caseMaterial: 'aluminum',
  },
  {
    id: 'red-samurai',
    name: 'Red Samurai',
    description: 'Feudal Japanese grandeur with deep imperial burgundy, dark grey, and rich gold.',
    alphas: { bg: '#5e1923', text: '#d9a74a' },
    modifiers: { bg: '#2b2b2e', text: '#d9a74a' },
    accents: { bg: '#d9a74a', text: '#2b2b2e' },
    space: { bg: '#5e1923', text: '#d9a74a' },
    caseColor: '#1b1b1c',
    caseMaterial: 'aluminum',
  },
];

export const CASE_COLORS = [
  { name: 'Anodized Black', hex: '#161719', material: 'aluminum' as const },
  { name: 'Space Gray', hex: '#373a40', material: 'aluminum' as const },
  { name: 'E-White', hex: '#f0f2f5', material: 'e-white' as const },
  { name: 'Midnight Navy', hex: '#162238', material: 'aluminum' as const },
  { name: 'Forest Green', hex: '#1c2e24', material: 'matte' as const },
  { name: 'Rose Gold', hex: '#b77b73', material: 'aluminum' as const },
  { name: 'Vintage Beige', hex: '#ded5c5', material: 'retro-beige' as const },
  { name: 'Frosted Polycarb', hex: '#dce5ed', material: 'polycarbonate' as const },
];

export const PLATE_COLORS = [
  { name: 'Brushed Brass', hex: '#d4af37' },
  { name: 'Anodized Aluminum (Silver)', hex: '#c5c8cf' },
  { name: 'Matte Black Aluminum', hex: '#1e2024' },
  { name: 'FR4 Black & Gold', hex: '#141414' },
  { name: 'Polycarbonate Clear', hex: '#e8edf2' },
];

export const SWITCH_TYPES = [
  { id: 'cherry-red', name: 'Cherry MX Red (Linear)', stemColor: '#d62828', housingColor: '#111111' },
  { id: 'cherry-blue', name: 'Cherry MX Blue (Clicky)', stemColor: '#0077b6', housingColor: '#111111' },
  { id: 'cherry-brown', name: 'Cherry MX Brown (Tactile)', stemColor: '#8a5a36', housingColor: '#111111' },
  { id: 'gateron-yellow', name: 'Gateron Yellow (Smooth Linear)', stemColor: '#ffb703', housingColor: '#2b2d42' },
  { id: 'boba-u4t', name: 'Gazzew Boba U4T (Thocky Tactile)', stemColor: '#ffffff', housingColor: '#d8b08c' },
];

export const QUICK_PALETTE = [
  '#f8f9fa', '#e9ecef', '#dee2e6', '#ced4da', '#adb5bd', '#6c757d', '#495057', '#343a40', '#212529', '#0d1117',
  '#ff4d4f', '#ff7875', '#f5222d', '#fa541c', '#fa8c16', '#faad14', '#fadb14', '#52c41a', '#13c2c2', '#1890ff',
  '#2f54eb', '#722ed1', '#eb2f96', '#ff007f', '#00f0ff', '#ffe600', '#e8a598', '#86a892', '#d4af37', '#7d9d85',
];
