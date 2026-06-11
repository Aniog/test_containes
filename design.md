# Ignition Dynamics — Design System

## Concept
"Japanese Industrial Minimalism meets Hyper-Quant." The UI is a cold, structured machine — strictly monochrome. Embedded images act as "glowing windows of energy": vibrant, luminous, and chromatic against the void.

## Color Palette

### UI / Layout (Strictly Monochrome)
- `void-black`: `#050505` — primary background
- `industrial-dark`: `#121212` — card/section backgrounds
- `border-gray`: `#262626` — all borders and dividers
- `muted-gray`: `#3a3a3a` — secondary borders, subtle elements
- `text-primary`: `#FFFFFF` — primary text
- `text-secondary`: `#A0A0A0` — secondary/muted text
- `text-tertiary`: `#606060` — labels, captions

### Accent (Minimal)
- `signal-green`: `#00FF88` — system status indicators only
- `signal-amber`: `#FFB800` — warning indicators only

### Images / Visuals (Hyper-Chromatic — images only, never UI)
Plasma purples, laser cyans, solar-flare oranges, tritium greens — these exist only inside image containers.

## Typography

### Headings — Space Grotesk (Google Fonts)
- H1: `text-6xl lg:text-8xl font-bold tracking-tighter leading-none`
- H2: `text-4xl lg:text-5xl font-bold tracking-tight`
- H3: `text-2xl font-semibold tracking-tight`
- All headings: `text-white`

### Body — Inter
- Body: `text-base text-[#A0A0A0] leading-relaxed`
- Small: `text-sm text-[#606060]`

### Monospace / Telemetry — JetBrains Mono
- Data labels: `font-mono text-xs tracking-widest uppercase`
- Telemetry values: `font-mono text-sm`
- Use for: system status, coordinates, measurements, specs

## Borders & Dividers
- Standard: `border border-[#262626]`
- Hairline: `border-[0.5px] border-[#262626]`
- Divider: `border-t border-[#262626]`

## Spacing
- Section padding: `py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card padding: `p-8 lg:p-12`
- Generous whitespace is intentional — negative space is a design element

## Components

### Cards
- Background: `bg-[#121212]`
- Border: `border border-[#262626]`
- No border-radius (sharp industrial corners): `rounded-none`
- Hover: subtle border brightening `hover:border-[#3a3a3a]`

### Buttons
- Primary: `bg-white text-black px-8 py-3 font-mono text-xs tracking-widest uppercase hover:bg-[#A0A0A0] transition-colors`
- Ghost: `border border-[#262626] text-white px-8 py-3 font-mono text-xs tracking-widest uppercase hover:border-white transition-colors`

### Telemetry Indicators
- Container: `font-mono text-xs tracking-widest`
- Live dot: `w-1.5 h-1.5 rounded-full bg-[#00FF88] animate-pulse`
- Label: `text-[#606060] uppercase`
- Value: `text-white`

### Images
- Always full-bleed within their container
- `object-cover w-full h-full`
- No border-radius
- Containers have `overflow-hidden`

## Do's
- Use `tracking-widest` on all uppercase labels
- Use `font-mono` for all data, specs, coordinates
- Use `border-[#262626]` consistently for all borders
- Keep backgrounds strictly `#050505` or `#121212`
- Let images be the only source of color

## Don'ts
- Never use colored text (except `#00FF88` for live status)
- Never use rounded corners on cards or buttons
- Never use drop shadows (use borders instead)
- Never use gradients in the UI (only in images)
- Never use colored backgrounds on UI elements
