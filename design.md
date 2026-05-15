# Ignition Dynamics: Design System

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quant. The UI is a cold, structured machine — strictly black and white. Images are glowing, vibrant "windows of energy" embedded within that machine.

## Color Palette

### UI / Layout (Strictly Monochrome)
- Void Black: `#050505` — primary background (`bg-[#050505]`)
- Industrial Dark: `#121212` — card/panel backgrounds (`bg-[#121212]`)
- Border Gray: `#262626` — hairline borders (`border-[#262626]`)
- Muted Gray: `#3a3a3a` — secondary borders, dividers
- Text White: `#FFFFFF` — primary text (`text-white`)
- Text Muted: `#888888` — secondary/label text (`text-[#888888]`)
- Text Dim: `#555555` — tertiary/metadata text (`text-[#555555]`)

### Accent (Sparingly, UI only)
- Signal White: `#F0F0F0` — hover states, active indicators
- Telemetry Green: `#22c55e` — live status indicators only (`text-green-500`)

### Images / Visuals (Hyper-Chromatic — images only, never UI)
- Plasma Purple, Laser Cyan, Solar Orange, Tritium Green
- All color lives inside `<img>` tags and image containers

## Typography
- Display: `font-mono` uppercase tracking-widest — section labels, telemetry codes
- Heading: `font-sans font-black` — massive hero titles
- Body: `font-sans font-light` — technical descriptions, specs
- Mono Data: `font-mono text-xs` — telemetry values, coordinates, specs

## Borders & Spacing
- Hairline borders: `border border-[#262626]`
- Generous padding: `p-8`, `p-12`, `p-16`
- Deliberate whitespace: large `gap-16`, `gap-24`, `mb-24`

## Component Patterns
- Cards: `bg-[#121212] border border-[#262626]` — no rounded corners (sharp industrial)
- Buttons: `border border-white text-white hover:bg-white hover:text-black` — invert on hover
- Overlays: `bg-white text-black` — stark white telemetry overlays on image hover
- Status dots: `w-2 h-2 rounded-full bg-green-500 animate-pulse`

## Do's
- Use `tracking-widest` and `uppercase` for labels
- Use `border-[#262626]` for all structural dividers
- Keep image containers with `overflow-hidden` and sharp corners
- Use asymmetric grid layouts (60/40, 70/30)
- Dense telemetry data blocks with mono font

## Don'ts
- No rounded corners on structural elements (`rounded-*` only for status dots)
- No color in UI text or backgrounds (except green status indicators)
- No gradients in UI (only in images)
- No drop shadows on UI elements
- Never use Tailwind color classes (blue, purple, etc.) on UI elements
