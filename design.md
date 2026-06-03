# Ignition Dynamics: The Fusion Era — Design System

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quant. Ultra-clean, data-dense, control-room aesthetic.
The UI is a cold, structured machine. Images are glowing windows of energy inside it.

## Color Palette

### UI / Layout (Strictly Black & White)
- Void Black: `#050505` — page background (`bg-[#050505]`)
- Industrial Dark: `#121212` — card/panel backgrounds (`bg-[#121212]`)
- Border Gray: `#262626` — hairline borders (`border-[#262626]`)
- Muted Gray: `#3a3a3a` — secondary borders, dividers
- Text Primary: `#FFFFFF` — headings, labels (`text-white`)
- Text Secondary: `#A0A0A0` — body copy, captions (`text-[#A0A0A0]`)
- Text Muted: `#5a5a5a` — metadata, timestamps (`text-[#5a5a5a]`)
- Accent White: `#F0F0F0` — subtle highlights

### Images / Visuals (Hyper-Chromatic — DO NOT use in UI)
- Plasma Purple: glowing violet/indigo in images only
- Laser Cyan: electric cyan/teal in images only
- Solar Orange: searing orange/amber in images only
- Tritium Green: neon green in images only

## Typography
- Font Family: `Space Grotesk` (headings), `Inter` (body), `Space Mono` (monospaced data/labels)
- Heading Scale: `text-7xl` → `text-5xl` → `text-3xl` → `text-xl`
- Body: `text-sm` to `text-base`, `leading-relaxed`
- Labels/Telemetry: `text-xs`, `font-mono`, `tracking-widest`, `uppercase`
- DO NOT use colored text in UI — white, gray, and muted only

## Borders & Spacing
- Hairline borders: `border border-[#262626]`
- Card padding: `p-8` to `p-12`
- Section spacing: `py-24` to `py-32`
- Grid gaps: `gap-px` (for seamless grid lines) or `gap-8`

## Components

### Cards
- Background: `bg-[#121212]`
- Border: `border border-[#262626]`
- No border-radius or very subtle: `rounded-none` or `rounded-sm`
- Hover: subtle brightness lift `hover:bg-[#1a1a1a]`

### Buttons
- Primary: `bg-white text-black px-8 py-3 text-xs font-mono tracking-widest uppercase`
- Ghost: `border border-[#262626] text-white px-8 py-3 text-xs font-mono tracking-widest uppercase hover:bg-[#121212]`

### Navigation
- Background: `bg-[#050505]/95 backdrop-blur-sm`
- Border bottom: `border-b border-[#262626]`
- Height: `h-16`
- Links: `text-xs font-mono tracking-widest uppercase text-[#A0A0A0] hover:text-white`

### Telemetry Labels
- Style: `text-xs font-mono tracking-widest uppercase text-[#5a5a5a]`
- With dot indicator: small colored dot + label

### Images
- Always full-bleed, no border-radius
- Aspect ratios: `aspect-video`, `aspect-square`, `aspect-[4/5]`
- Overlay: `absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent`

## Do's
- Use `font-mono` for all data, specs, coordinates, and labels
- Use `tracking-widest` on uppercase labels
- Use `border-[#262626]` for all structural lines
- Use massive whitespace — `py-32`, `px-16`
- Use asymmetric layouts — 60/40, 70/30 splits
- Keep images vibrant and full-bleed

## Don'ts
- Never use colored text in UI elements
- Never use rounded corners on structural elements
- Never use drop shadows (use borders instead)
- Never use gradients in UI (only in image overlays)
- Never use colored backgrounds in UI panels
