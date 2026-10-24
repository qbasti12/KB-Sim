import { KeyDefinition, KeyboardSize, KeyboardLayout } from '../types/keyboard';

export interface LayoutBounds {
  width: number;
  height: number;
}

// Generate base layout for a given size and layout type (ISO-DE vs ANSI-US)
export function getKeyboardLayout(size: KeyboardSize, layout: KeyboardLayout): KeyDefinition[] {
  const isISO = layout === 'iso-de';
  const keys: KeyDefinition[] = [];

  // Helper to add keys
  const addKey = (
    id: string,
    code: string,
    label: string,
    x: number,
    y: number,
    w: number,
    h: number,
    zone: KeyDefinition['zone'],
    deMain: string,
    usMain: string,
    options?: {
      deSub?: string;
      usSub?: string;
      deAltGr?: string;
      shape?: 'normal' | 'iso_enter' | 'stepped_caps';
    }
  ) => {
    keys.push({
      id,
      code,
      label,
      x,
      y,
      w,
      h,
      shape: options?.shape || 'normal',
      zone,
      legends: {
        'iso-de': {
          main: deMain,
          sub: options?.deSub,
          altGr: options?.deAltGr,
        },
        'ansi-us': {
          main: usMain,
          sub: options?.usSub,
        },
      },
    });
  };

  // Row index tracking
  // --- ROW 0: F-Row (100%, TKL, 75%) ---
  if (size === '100%' || size === 'tkl' || size === '75%') {
    const fRowY = 0;
    // Esc
    addKey('esc', 'Escape', 'ESC', 0, fRowY, 1, 1, 'modifiers', 'ESC', 'ESC');

    if (size === '75%') {
      // 75% has compact F-row directly spaced
      const fKeys = [
        ['f1', 'F1', 'F1'],
        ['f2', 'F2', 'F2'],
        ['f3', 'F3', 'F3'],
        ['f4', 'F4', 'F4'],
        ['f5', 'F5', 'F5'],
        ['f6', 'F6', 'F6'],
        ['f7', 'F7', 'F7'],
        ['f8', 'F8', 'F8'],
        ['f9', 'F9', 'F9'],
        ['f10', 'F10', 'F10'],
        ['f11', 'F11', 'F11'],
        ['f12', 'F12', 'F12'],
      ];
      fKeys.forEach(([id, code, label], i) => {
        addKey(id, code, label, 1 + i, fRowY, 1, 1, 'f_row', label, label);
      });
      // 75% top right key: Del
      addKey('del_top', 'Delete', 'DEL', 13, fRowY, 1, 1, 'nav', 'ENTF', 'DEL');
      addKey('nav_top_extra', 'PrintScreen', 'PRT', 14, fRowY, 1, 1, 'nav', 'DRUCK', 'PSCR');
    } else {
      // Standard spacing for 100% and TKL: Esc + 1u gap + F1-F4 + 0.5u gap + F5-F8 + 0.5u gap + F9-F12
      const f1_4 = ['F1', 'F2', 'F3', 'F4'];
      f1_4.forEach((f, i) => addKey(`f${i + 1}`, f, f, 2 + i, fRowY, 1, 1, 'f_row', f, f));

      const f5_8 = ['F5', 'F6', 'F7', 'F8'];
      f5_8.forEach((f, i) => addKey(`f${i + 5}`, f, f, 6.5 + i, fRowY, 1, 1, 'f_row', f, f));

      const f9_12 = ['F9', 'F10', 'F11', 'F12'];
      f9_12.forEach((f, i) => addKey(`f${i + 9}`, f, f, 11 + i, fRowY, 1, 1, 'f_row', f, f));

      // Nav cluster F-row: Print, Scroll Lock, Pause
      addKey('prt', 'PrintScreen', 'PRT', 15.25, fRowY, 1, 1, 'nav', 'DRUCK', 'PRT');
      addKey('scrl', 'ScrollLock', 'SCRL', 16.25, fRowY, 1, 1, 'nav', 'ROLLEN', 'SCRL');
      addKey('pause', 'Pause', 'PAUSE', 17.25, fRowY, 1, 1, 'nav', 'PAUSE', 'PAUSE');
    }
  }

  // Row Y offsets
  const hasFRow = size === '100%' || size === 'tkl' || size === '75%';
  const rowGap = (size === '75%') ? 1.0 : 1.35; // 75% has no big gap between F-row and number row
  const r1Y = hasFRow ? rowGap : 0;
  const r2Y = r1Y + 1;
  const r3Y = r2Y + 1;
  const r4Y = r3Y + 1;
  const r5Y = r4Y + 1;

  // --- 40% Keyboard (Special compact 4-row layout) ---
  if (size === '40%') {
    // 40% has no number row! Starts at Q row
    // Row 1 (Tab + Alphas)
    addKey('tab_40', 'Tab', 'TAB', 0, 0, 1.25, 1, 'modifiers', 'TAB', 'TAB');
    const qRowAlphas = isISO
      ? ['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P']
      : ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    qRowAlphas.forEach((char, i) => {
      addKey(`r1_k${i}`, `Key${char}`, char, 1.25 + i, 0, 1, 1, 'alphas', char, char);
    });
    addKey('backspace_40', 'Backspace', 'BKSP', 11.25, 0, 1.25, 1, 'modifiers', '⌫', '⌫');

    // Row 2 (Caps / Ctrl + Alphas + Enter)
    addKey('caps_40', 'CapsLock', 'CAPS', 0, 1, 1.5, 1, 'modifiers', 'CAPS', 'CAPS');
    const aRowAlphas = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    aRowAlphas.forEach((char, i) => {
      addKey(`r2_k${i}`, `Key${char}`, char, 1.5 + i, 1, 1, 1, 'alphas', char, char);
    });
    if (isISO) {
      addKey('oe_40', 'Semicolon', 'Ö', 10.5, 1, 1, 1, 'alphas', 'Ö', ';');
      addKey('enter_40', 'Enter', 'ENTER', 11.5, 1, 1.0, 1, 'modifiers', '⏎', '⏎');
    } else {
      addKey('enter_40', 'Enter', 'ENTER', 10.5, 1, 2.0, 1, 'modifiers', 'ENTER', 'ENTER');
    }

    // Row 3 (Shift + Alphas + Shift / Up)
    addKey('lshift_40', 'ShiftLeft', 'SHIFT', 0, 2, 1.75, 1, 'modifiers', 'SHIFT', 'SHIFT');
    const zRowAlphas = isISO
      ? ['Y', 'X', 'C', 'V', 'B', 'N', 'M']
      : ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    zRowAlphas.forEach((char, i) => {
      addKey(`r3_k${i}`, `Key${char}`, char, 1.75 + i, 2, 1, 1, 'alphas', char, char);
    });
    addKey('r3_p1_40', 'Comma', ',', 8.75, 2, 1, 1, 'alphas', ',', ',');
    addKey('r3_p2_40', 'Period', '.', 9.75, 2, 1, 1, 'alphas', '.', '.');
    addKey('rshift_40', 'ShiftRight', 'SHIFT', 10.75, 2, 1.75, 1, 'modifiers', 'SHIFT', 'SHIFT');

    // Row 4 (Bottom row)
    addKey('lctrl_40', 'ControlLeft', 'CTRL', 0, 3, 1.25, 1, 'modifiers', 'STRG', 'CTRL');
    addKey('lopt_40', 'AltLeft', 'ALT', 1.25, 3, 1.25, 1, 'modifiers', 'ALT', 'ALT');
    addKey('fn1_40', 'Fn', 'FN1', 2.5, 3, 1.25, 1, 'modifiers', 'FN1', 'FN1');
    addKey('space_40', 'Space', 'SPACE', 3.75, 3, 6.25, 1, 'space', 'SPACE', 'SPACE');
    addKey('fn2_40', 'Fn2', 'FN2', 10, 3, 1.25, 1, 'modifiers', 'FN2', 'FN2');
    addKey('rctrl_40', 'ControlRight', 'CTRL', 11.25, 3, 1.25, 1, 'modifiers', 'STRG', 'CTRL');

    return keys;
  }

  // --- STANDARD NUMBER ROW (Row 1) for 60%, 65%, 75%, TKL, 100% ---
  // Tilde / Grave / ^
  if (isISO) {
    addKey('grave', 'Backquote', '^', 0, r1Y, 1, 1, 'alphas', '^', '`', { deSub: '°', usSub: '~' });
  } else {
    addKey('grave', 'Backquote', '`', 0, r1Y, 1, 1, 'alphas', '`', '`', { deSub: '~', usSub: '~' });
  }

  // 1 to 0
  const numDefs = [
    { num: '1', deSub: '!', usSub: '!', deAltGr: '' },
    { num: '2', deSub: '"', usSub: '@', deAltGr: '²' },
    { num: '3', deSub: '§', usSub: '#', deAltGr: '³' },
    { num: '4', deSub: '$', usSub: '$', deAltGr: '' },
    { num: '5', deSub: '%', usSub: '%', deAltGr: '' },
    { num: '6', deSub: '&', usSub: '^', deAltGr: '' },
    { num: '7', deSub: '/', usSub: '&', deAltGr: '{' },
    { num: '8', deSub: '(', usSub: '*', deAltGr: '[' },
    { num: '9', deSub: ')', usSub: '(', deAltGr: ']' },
    { num: '0', deSub: '=', usSub: ')', deAltGr: '}' },
  ];
  numDefs.forEach((def, i) => {
    addKey(`num_${def.num}`, `Digit${def.num}`, def.num, 1 + i, r1Y, 1, 1, 'alphas', def.num, def.num, {
      deSub: def.deSub,
      usSub: def.usSub,
      deAltGr: def.deAltGr,
    });
  });

  // Minus / ß
  if (isISO) {
    addKey('minus', 'Minus', 'ß', 11, r1Y, 1, 1, 'alphas', 'ß', '-', { deSub: '?', usSub: '_', deAltGr: '\\' });
    addKey('equal', 'Equal', '´', 12, r1Y, 1, 1, 'alphas', '´', '=', { deSub: '`', usSub: '+' });
  } else {
    addKey('minus', 'Minus', '-', 11, r1Y, 1, 1, 'alphas', '-', '-', { deSub: '_', usSub: '_' });
    addKey('equal', 'Equal', '=', 12, r1Y, 1, 1, 'alphas', '=', '=', { deSub: '+', usSub: '+' });
  }
  // Backspace 2u
  addKey('bsp', 'Backspace', 'BKSP', 13, r1Y, 2, 1, 'modifiers', '⌫', 'BACKSPACE');

  // --- ROW 2 (Tab + QWERTY/Z) ---
  addKey('tab', 'Tab', 'TAB', 0, r2Y, 1.5, 1, 'modifiers', 'TAB', 'TAB');
  const qRowISO = [
    { de: 'Q', us: 'Q', altGr: '@' },
    { de: 'W', us: 'W' },
    { de: 'E', us: 'E', altGr: '€' },
    { de: 'R', us: 'R' },
    { de: 'T', us: 'T' },
    { de: 'Z', us: 'Y' }, // German Z vs US Y
    { de: 'U', us: 'U' },
    { de: 'I', us: 'I' },
    { de: 'O', us: 'O' },
    { de: 'P', us: 'P' },
    { de: 'Ü', us: '[', usSub: '{' },
    { de: '+', us: ']', deSub: '*', deAltGr: '~', usSub: '}' },
  ];

  qRowISO.forEach((def, i) => {
    const isZKey = i === 5;
    const code = isZKey ? (isISO ? 'KeyZ' : 'KeyY') : `Key${def.us}`;
    addKey(`r2_k${i}`, code, isISO ? def.de : def.us, 1.5 + i, r2Y, 1, 1, 'alphas', def.de, def.us, {
      deSub: def.deSub,
      usSub: def.usSub,
      deAltGr: def.altGr,
    });
  });

  // Backslash in ANSI (1.5u), not on row 2 in ISO (ISO Enter spans row 2 & 3!)
  if (!isISO) {
    addKey('backslash', 'Backslash', '\\', 13.5, r2Y, 1.5, 1, 'alphas', '\\', '\\', { usSub: '|' });
  }

  // --- ROW 3 (Caps Lock + ASDF) ---
  addKey('caps', 'CapsLock', 'CAPS', 0, r3Y, 1.75, 1, 'modifiers', 'CAPS LOCK', 'CAPS LOCK');
  const aRowISO = [
    { de: 'A', us: 'A' },
    { de: 'S', us: 'S' },
    { de: 'D', us: 'D' },
    { de: 'F', us: 'F' },
    { de: 'G', us: 'G' },
    { de: 'H', us: 'H' },
    { de: 'J', us: 'J' },
    { de: 'K', us: 'K' },
    { de: 'L', us: 'L' },
    { de: 'Ö', us: ';', usSub: ':' },
    { de: 'Ä', us: "'", usSub: '"' },
  ];
  aRowISO.forEach((def, i) => {
    addKey(`r3_k${i}`, `Key${def.us}`, isISO ? def.de : def.us, 1.75 + i, r3Y, 1, 1, 'alphas', def.de, def.us, {
      usSub: def.usSub,
    });
  });

  if (isISO) {
    // German '#' key beside Enter
    addKey('hash', 'Backslash', '#', 12.75, r3Y, 1, 1, 'alphas', '#', '#', { deSub: "'" });
    // ISO Enter: Spans row 2 and row 3 (x=13.75, y=r2Y, w=1.25, h=2)
    addKey('enter', 'Enter', 'ENTER', 13.75, r2Y, 1.25, 2, 'modifiers', 'ENTER', 'ENTER', { shape: 'iso_enter' });
  } else {
    // ANSI Enter 2.25u
    addKey('enter', 'Enter', 'ENTER', 12.75, r3Y, 2.25, 1, 'modifiers', 'ENTER', 'ENTER');
  }

  // --- ROW 4 (Left Shift + ZXCVB + Right Shift) ---
  if (isISO) {
    // ISO Left Shift: 1.25u + < > | key 1u
    addKey('lshift', 'ShiftLeft', 'SHIFT', 0, r4Y, 1.25, 1, 'modifiers', 'SHIFT', 'SHIFT');
    addKey('less_than', 'IntlBackslash', '<', 1.25, r4Y, 1, 1, 'alphas', '<', '<', { deSub: '>', deAltGr: '|' });
  } else {
    // ANSI Left Shift: 2.25u
    addKey('lshift', 'ShiftLeft', 'SHIFT', 0, r4Y, 2.25, 1, 'modifiers', 'SHIFT', 'SHIFT');
  }

  const zStart = isISO ? 2.25 : 2.25;
  const zRowISO = [
    { de: 'Y', us: 'Z' }, // German Y vs US Z
    { de: 'X', us: 'X' },
    { de: 'C', us: 'C' },
    { de: 'V', us: 'V' },
    { de: 'B', us: 'B' },
    { de: 'N', us: 'N' },
    { de: 'M', us: 'M', altGr: 'µ' },
    { de: ',', us: ',', deSub: ';', usSub: '<' },
    { de: '.', us: '.', deSub: ':', usSub: '>' },
    { de: '-', us: '/', deSub: '_', usSub: '?' },
  ];

  zRowISO.forEach((def, i) => {
    const isYKey = i === 0;
    const code = isYKey ? (isISO ? 'KeyY' : 'KeyZ') : `Key${def.us}`;
    addKey(`r4_k${i}`, code, isISO ? def.de : def.us, zStart + i, r4Y, 1, 1, 'alphas', def.de, def.us, {
      deSub: def.deSub,
      usSub: def.usSub,
      deAltGr: def.altGr,
    });
  });

  // Right Shift: In 65% and 75% it's 1.75u, otherwise 2.75u
  if (size === '65%' || size === '75%') {
    addKey('rshift', 'ShiftRight', 'SHIFT', 12.25, r4Y, 1.75, 1, 'modifiers', 'SHIFT', 'SHIFT');
    // In 65% & 75%, Up arrow is at 14.0, r4Y
    addKey('up', 'ArrowUp', '↑', 14, r4Y, 1, 1, 'arrows', '▲', '▲');
  } else {
    addKey('rshift', 'ShiftRight', 'SHIFT', 12.25, r4Y, 2.75, 1, 'modifiers', 'SHIFT', 'SHIFT');
  }

  // --- ROW 5 (Bottom Row: Modifiers & Space) ---
  if (size === '65%' || size === '75%') {
    // Compact bottom row: Ctrl 1.25, Win 1.25, Alt 1.25, Space 6.25, AltGr 1, Fn 1, Left 1, Down 1, Right 1
    addKey('lctrl', 'ControlLeft', 'CTRL', 0, r5Y, 1.25, 1, 'modifiers', 'STRG', 'CTRL');
    addKey('lwin', 'MetaLeft', 'WIN', 1.25, r5Y, 1.25, 1, 'modifiers', 'WIN', 'WIN');
    addKey('lalt', 'AltLeft', 'ALT', 2.5, r5Y, 1.25, 1, 'modifiers', 'ALT', 'ALT');
    addKey('space', 'Space', 'SPACE', 3.75, r5Y, 6.25, 1, 'space', 'SPACE', 'SPACE');
    addKey('ralt', 'AltRight', 'ALT_GR', 10, r5Y, 1, 1, 'modifiers', 'ALT GR', 'ALT');
    addKey('fn', 'Fn', 'FN', 11, r5Y, 1, 1, 'modifiers', 'FN', 'FN');
    addKey('rctrl', 'ControlRight', 'CTRL', 12, r5Y, 1, 1, 'modifiers', 'STRG', 'CTRL');
    addKey('left', 'ArrowLeft', '←', 13, r5Y, 1, 1, 'arrows', '◄', '◄');
    addKey('down', 'ArrowDown', '↓', 14, r5Y, 1, 1, 'arrows', '▼', '▼');
    addKey('right', 'ArrowRight', '→', 15, r5Y, 1, 1, 'arrows', '►', '►');
  } else {
    // Standard bottom row: 1.25, 1.25, 1.25, 6.25, 1.25, 1.25, 1.25, 1.25
    addKey('lctrl', 'ControlLeft', 'CTRL', 0, r5Y, 1.25, 1, 'modifiers', 'STRG', 'CTRL');
    addKey('lwin', 'MetaLeft', 'WIN', 1.25, r5Y, 1.25, 1, 'modifiers', 'WIN', 'WIN');
    addKey('lalt', 'AltLeft', 'ALT', 2.5, r5Y, 1.25, 1, 'modifiers', 'ALT', 'ALT');
    addKey('space', 'Space', 'SPACE', 3.75, r5Y, 6.25, 1, 'space', 'SPACE', 'SPACE');
    addKey('ralt', 'AltRight', 'ALT_GR', 10, r5Y, 1.25, 1, 'modifiers', 'ALT GR', 'ALT');
    addKey('rwin', 'MetaRight', 'WIN', 11.25, r5Y, 1.25, 1, 'modifiers', 'WIN', 'WIN');
    addKey('menu', 'ContextMenu', 'MENU', 12.5, r5Y, 1.25, 1, 'modifiers', 'MENÜ', 'MENU');
    addKey('rctrl', 'ControlRight', 'CTRL', 13.75, r5Y, 1.25, 1, 'modifiers', 'STRG', 'CTRL');
  }

  // --- ADDITIONAL CLUSTERS ---

  // 65% and 75% Right Navigation Column
  if (size === '65%') {
    addKey('nav_del', 'Delete', 'DEL', 15, r1Y, 1, 1, 'nav', 'ENTF', 'DEL');
    addKey('nav_pgup', 'PageUp', 'PGUP', 15, r2Y, 1, 1, 'nav', 'BILD ▲', 'PGUP');
    addKey('nav_pgdn', 'PageDown', 'PGDN', 15, r3Y, 1, 1, 'nav', 'BILD ▼', 'PGDN');
    addKey('nav_end', 'End', 'END', 15, r4Y, 1, 1, 'nav', 'ENDE', 'END');
  } else if (size === '75%') {
    addKey('nav_del', 'Delete', 'DEL', 15, r1Y, 1, 1, 'nav', 'ENTF', 'DEL');
    addKey('nav_home', 'Home', 'HOME', 15, r2Y, 1, 1, 'nav', 'POS1', 'HOME');
    addKey('nav_pgup', 'PageUp', 'PGUP', 15, r3Y, 1, 1, 'nav', 'BILD ▲', 'PGUP');
    addKey('nav_pgdn', 'PageDown', 'PGDN', 15, r4Y, 1, 1, 'nav', 'BILD ▼', 'PGDN');
    // Note: row 5 already has right arrow at 15
  }

  // TKL and 100%: 3x2 Navigation Cluster + Inverted T Arrows
  if (size === 'tkl' || size === '100%') {
    const navX = 15.25;
    // 3x2 Cluster: Insert, Home, PgUp / Delete, End, PgDn
    addKey('ins', 'Insert', 'INS', navX, r1Y, 1, 1, 'nav', 'EINF', 'INS');
    addKey('home', 'Home', 'HOME', navX + 1, r1Y, 1, 1, 'nav', 'POS1', 'HOME');
    addKey('pgup', 'PageUp', 'PGUP', navX + 2, r1Y, 1, 1, 'nav', 'BILD ▲', 'PGUP');

    addKey('del', 'Delete', 'DEL', navX, r2Y, 1, 1, 'nav', 'ENTF', 'DEL');
    addKey('end', 'End', 'END', navX + 1, r2Y, 1, 1, 'nav', 'ENDE', 'END');
    addKey('pgdn', 'PageDown', 'PGDN', navX + 2, r2Y, 1, 1, 'nav', 'BILD ▼', 'PGDN');

    // Inverted-T Arrows (Up at r4Y, Left/Down/Right at r5Y)
    addKey('up', 'ArrowUp', '↑', navX + 1, r4Y, 1, 1, 'arrows', '▲', '▲');
    addKey('left', 'ArrowLeft', '←', navX, r5Y, 1, 1, 'arrows', '◄', '◄');
    addKey('down', 'ArrowDown', '↓', navX + 1, r5Y, 1, 1, 'arrows', '▼', '▼');
    addKey('right', 'ArrowRight', '→', navX + 2, r5Y, 1, 1, 'arrows', '►', '►');
  }

  // 100% NumPad
  if (size === '100%') {
    const npX = 18.75;
    // Row 0 above NumPad (Calculator / Mute / Vol- / Vol+)
    addKey('np_calc', 'LaunchApp2', 'CALC', npX, 0, 1, 1, 'numpad', 'CALC', 'CALC');
    addKey('np_mute', 'AudioVolumeMute', 'MUTE', npX + 1, 0, 1, 1, 'numpad', 'MUTE', 'MUTE');
    addKey('np_vol_dn', 'AudioVolumeDown', 'VOL-', npX + 2, 0, 1, 1, 'numpad', 'VOL-', 'VOL-');
    addKey('np_vol_up', 'AudioVolumeUp', 'VOL+', npX + 3, 0, 1, 1, 'numpad', 'VOL+', 'VOL+');

    // Num Row 1: NumLock, /, *, -
    addKey('np_lock', 'NumLock', 'NUM', npX, r1Y, 1, 1, 'numpad', 'NUM', 'NUM');
    addKey('np_div', 'NumpadDivide', '/', npX + 1, r1Y, 1, 1, 'numpad', '/', '/');
    addKey('np_mul', 'NumpadMultiply', '*', npX + 2, r1Y, 1, 1, 'numpad', '*', '*');
    addKey('np_sub', 'NumpadSubtract', '-', npX + 3, r1Y, 1, 1, 'numpad', '-', '-');

    // Num Row 2: 7, 8, 9, + (2u height)
    addKey('np_7', 'Numpad7', '7', npX, r2Y, 1, 1, 'numpad', '7', '7');
    addKey('np_8', 'Numpad8', '8', npX + 1, r2Y, 1, 1, 'numpad', '8', '8');
    addKey('np_9', 'Numpad9', '9', npX + 2, r2Y, 1, 1, 'numpad', '9', '9');
    addKey('np_add', 'NumpadAdd', '+', npX + 3, r2Y, 1, 2, 'numpad', '+', '+');

    // Num Row 3: 4, 5, 6
    addKey('np_4', 'Numpad4', '4', npX, r3Y, 1, 1, 'numpad', '4', '4');
    addKey('np_5', 'Numpad5', '5', npX + 1, r3Y, 1, 1, 'numpad', '5', '5');
    addKey('np_6', 'Numpad6', '6', npX + 2, r3Y, 1, 1, 'numpad', '6', '6');

    // Num Row 4: 1, 2, 3, Enter (2u height)
    addKey('np_1', 'Numpad1', '1', npX, r4Y, 1, 1, 'numpad', '1', '1');
    addKey('np_2', 'Numpad2', '2', npX + 1, r4Y, 1, 1, 'numpad', '2', '2');
    addKey('np_3', 'Numpad3', '3', npX + 2, r4Y, 1, 1, 'numpad', '3', '3');
    addKey('np_enter', 'NumpadEnter', 'ENTER', npX + 3, r4Y, 1, 2, 'numpad', 'ENTER', 'ENTER');

    // Num Row 5: 0 (2u), , (or .)
    addKey('np_0', 'Numpad0', '0', npX, r5Y, 2, 1, 'numpad', '0', '0');
    addKey('np_dec', 'NumpadDecimal', isISO ? ',' : '.', npX + 2, r5Y, 1, 1, 'numpad', ',', '.');
  }

  return keys;
}

// Compute total layout bounds in U
export function getLayoutBounds(keys: KeyDefinition[]): LayoutBounds {
  let maxX = 0;
  let maxY = 0;
  for (const k of keys) {
    const kMaxX = k.x + k.w;
    const kMaxY = k.y + k.h;
    if (kMaxX > maxX) maxX = kMaxX;
    if (kMaxY > maxY) maxY = kMaxY;
  }
  return { width: maxX, height: maxY };
}
