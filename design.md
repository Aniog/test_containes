# Ignition Dynamics — Design System

## Visual Philosophy
"Japanese Industrial Minimalism" meets Hyper-Quant. Ultra-clean layouts, massive deliberate whitespace, hairline borders, and crisp mono-spaced typography. The UI is a cold, structured machine; images are glowing windows of energy.

## Color Palette

### UI / Layout (Strictly Black & White)
- Void Black: `#050505` — primary background (`bg-[#050505]`)
- Dark Industrial: `#121212` — card/section backgrounds (`bg-[#121212]`)
- Border Gray: `#262626` — hairline borders (`border-[#262626]`)
- Muted Gray: `#3a3a3a` — secondary borders, dividers
- White: `#FFFFFF` — primary text, headings (`text-white`)
- Off-White: `#E5E5E5` — secondary text (`text-neutral-200`)
- Dim White: `#A3A3A3` — tertiary text, labels (`text-neutral-400`)
- Accent White: `#F5F5F5` — hover states, subtle highlights

### Images / Visuals (Hyper-Chromatic — images only, never UI)
- Plasma Purple: glowing violet/indigo tones
- Laser Cyan: electric blue-green
- Solar Orange: incandescent amber/orange
- Tritium Green: neon emerald

## Typography
- Display/Hero: `font-mono` uppercase, tracking-widest, weight 700–900
- Section Headings: `font-mono` uppercase, tracking-wider, weight 600
- Body: `font-sans` (Inter), weight 400, leading-relaxed
- Labels/Telemetry: `font-mono` uppercase, text-xs, tracking-widest, text-neutral-400
- Specs/Data: `font-mono` text-sm, text-neutral-300

## Borders & Dividers
- All borders: `border border-[#262626]` (1px hairline)
- Section dividers: `border-t border-[#262626]`
- Card borders: `border border-[#262626]`

## Spacing
- Section padding: `py-24 px-6 md:px-12 lg:px-24`
- Card padding: `p-8 md:p-12`
- Component gap: `gap-8` to `gap-16`
- Generous whitespace is intentional — do not compress

## Components

### Navigation
- Background: `bg-[#050505]` with `border-b border-[#262626]`
- Logo: `font-mono uppercase tracking-widest text-white`
- Links: `font-mono text-xs uppercase tracking-widest text-neutral-400 hover:text-white`
- Telemetry badge: `font-mono text-xs text-neutral-500`

### Cards / Panels
- Background: `bg-[#121212]`
- Border: `border border-[#262626]`
- Hover: subtle `border-neutral-600` transition

### Buttons
- Primary: `bg-white text-black font-mono text-xs uppercase tracking-widest px-6 py-3`
- Ghost: `border border-[#262626] text-white font-mono text-xs uppercase tracking-widest px-6 py-3 hover:border-white`

### Telemetry Indicators
- Dot: `w-2 h-2 rounded-full bg-green-400 animate-pulse`
- Label: `font-mono text-xs uppercase tracking-widest text-neutral-500`
- Value: `font-mono text-xs text-neutral-300`

### Images
- Always full-bleed within their container
- `object-cover` with defined aspect ratios
- Never add color filters — images must remain vibrant

## Do's
- Use `font-mono` for all technical labels, headings, and data
- Use hairline `border-[#262626]` everywhere
- Keep backgrounds strictly black/dark gray
- Let images be the only color on the page
- Use generous padding and whitespace

## Don'ts
- Never use colored text in the UI (no blue links, no colored badges)
- Never use colored backgrounds in UI components
- Never compress whitespace to fit more content
- Never use rounded corners larger than `rounded-sm` on industrial components
- Never use drop shadows (use borders instead)
