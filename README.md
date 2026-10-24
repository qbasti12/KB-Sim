# Mechanical Keyboard 3D Simulator & Keycap Designer ⌨️✨

Eine interaktive, responsive Web-Applikation zur 3D-Simulation mechanischer Tastaturen und zum Gestalten individueller Keycap-Farbsets. Läuft zu **100% statisch** im Browser (ohne Backend) und wird automatisch über GitHub Actions auf **GitHub Pages** bereitgestellt.

🌐 **Live Demo:** [https://qbasti12.github.io/KB-Sim/](https://qbasti12.github.io/KB-Sim/)

---

## 🚀 Features

### 1. 3D Rendering & Studio Simulation
- **Three.js & OrbitControls:** Freies Drehen, Schwenken und Zoomen des 3D-Modells.
- **PBR-Materialien:** Physikalisch basierte Materialien für Keycaps (PBT/ABS-Matte), Gehäuse (Aluminium anodisiert, Polycarbonat transluzent, E-White, Retro Beige) und Montageplatten (Messing gebürstet, Silber, FR4, Matte Black).
- **Studio-Lighting & Soft Shadows:** 3-Punkt-Beleuchtung (Key Light mit weichen PCF-Schatten, Cool Fill Light, Rim Light).
- **RGB Underglow & Backlight:** Dynamische LED-Beleuchtungsmodi (*Off, Static, Rainbow Wave, Pulse*).
- **Thocky Soundeffekte:** Realistischer Klicksound über die Web Audio API bei jedem Tastendruck (verschiedene Switch-Profile: Linear, Clicky, Tactile).
- **Physisches Tippen:** Tastenanschläge auf der echten Computertastatur lösen eine 3D-Tastenanimation und Sound aus!

### 2. Layout- & Größenkonfigurator
- **Formfaktoren:**
  - `100%`: Full-Size mit NumPad, Navigationsblock & Funktionstasten
  - `TKL (80%)`: Tenkeyless ohne Ziffernblock
  - `75%`: Kompakte Bauweise mit F-Reihe und Pfeiltasten
  - `65%`: Schlanker Formfaktor mit Pfeiltasten & dedizierten Nav-Keys
  - `60%`: Klassischer minimalistischer 60%-Block
  - `40%`: Ultra-kompaktes Enthusiasten-Layout
- **Sprachlayouts:**
  - `ISO-DE`: Deutsche Tastaturbelegung (große 2-zeilige Enter-Taste, kurze linke Shift, `< > |`, Umlaute `Ä`, `Ö`, `Ü`, `ß`, `€`, `@`)
  - `ANSI-US`: US-Standard (flache Enter-Taste, breite 2.25u Shift-Taste)

### 3. Keycap Designer & Werkzeuge
- **Brush (Single Select):** Klicke auf eine beliebige Keycap, um sie mit der aktiven Farbe einzufärben.
- **Bucket (Füllwerkzeug):**
  - *Option A:* Alle Tasten der Tastatur auf einmal einfärben.
  - *Option B (Flood Fill):* Ersetzt alle Tasten, die dieselbe Farbe wie die angeklickte Taste besitzen.
  - *Option C (Zonen-Fill):* Färbt gezielt Funktionszonen ein (*Alphas, Modifiers, F-Reihe, NumPad, Pfeiltasten, Leertaste*).
- **Pipette (Eyedropper):** Klicke auf eine beliebige Keycap im 3D-Canvas, um deren Farbwert in den Color Picker zu übernehmen.
- **Farbverlauf-Generator (Gradient Tool):**
  - Start- und Endfarbe frei wählbar.
  - Richtungen: *Horizontal (Links → Rechts)*, *Vertikal (Oben → Unten)* oder *Diagonal*.
  - Lineare Interpolation (Lerp) entlang der X/Y-Koordinaten aller Tasten.
- **Color Picker & Historie:**
  - Hex-Eingabe, Farbauswahl, Quick-Swatches und Historie der zuletzt genutzten Farben.
  - **Kuratierte Presets:**
    - *Retro Beige (IBM Model M / 9009)*
    - *Cyberpunk Neon*
    - *GMK Dolch*
    - *GMK Olivia*
    - *GMK Botanical*
    - *Dracula Theme*
    - *Carbon Orange*
    - *Red Samurai*

### 4. Export & Import
- **High-Res Screenshot Export:** Erstellt mit einem Klick einen gestochen scharfen PNG-Snapshot des aktuellen 3D-Modells.
- **JSON Export / Import:** Speichern und Laden vollständiger Farb- und Hardware-Konfigurationen.

---

## 🛠️ Tech Stack
- **Framework:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **3D Engine:** [Three.js](https://threejs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **CI/CD Deployment:** GitHub Actions (`actions/deploy-pages`)

---

## 📦 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktions-Build erzeugen
npm run build
```

---

## 🚀 GitHub Pages Automatisierung
Das Repository enthält eine vollständige GitHub Actions Workflow-Datei unter `.github/workflows/deploy.yml`. Bei jedem Push auf den `main`-Branch wird das Projekt automatisch kompiliert und direkt auf GitHub Pages veröffentlicht.
