# MicroCosmos Design System

## Concept
A dark, immersive aesthetic inspired by microscopy and bioluminescence — the hidden universe of tiny life forms. Deep space-like backgrounds with glowing cyan/teal accents evoke the feeling of peering through a microscope into an alien world.

## Color Palette

### Backgrounds
- Page background: `#050d1a` (deep navy-black)
- Section alt background: `#080f1f` (slightly lighter navy)
- Card background: `#0d1a2e` (dark blue-navy)
- Card border: `#1a2d4a` (muted navy border)

### Accent Colors (Bioluminescent)
- Primary accent (cyan): `#00d4ff` — use `text-[#00d4ff]`, `border-[#00d4ff]`
- Secondary accent (teal): `#00ffcc` — use `text-[#00ffcc]`
- Tertiary accent (purple): `#7c3aed` — use `bg-[#7c3aed]`
- Glow cyan: `rgba(0, 212, 255, 0.15)` — for subtle glows

### Text
- Primary text: `#e8f4f8` (near-white, slightly cool)
- Secondary text: `#8ab4c8` (muted blue-grey)
- Muted text: `#4a6a7a` (dim blue-grey)
- Heading text: `#ffffff`

## Typography

### Font
- Primary: `Space Grotesk` (headings) — modern, scientific feel
- Secondary: `Inter` (body) — clean, readable

### Scale
- Hero heading: `text-6xl md:text-8xl font-bold`
- Section heading: `text-4xl md:text-5xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base` or `text-lg`
- Caption/label: `text-sm`

## Spacing
- Section padding: `py-24 px-6`
- Container max-width: `max-w-7xl mx-auto`
- Card padding: `p-6` or `p-8`
- Gap between cards: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#1a2d4a]`
- Glowing border on hover: `hover:border-[#00d4ff]/50`
- Card shadow: `shadow-lg shadow-black/50`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`

## Components

### Cards
- Background: `bg-[#0d1a2e]`
- Border: `border border-[#1a2d4a]`
- Rounded: `rounded-2xl`
- Hover: `hover:border-[#00d4ff]/40 transition-all duration-300`

### Buttons
- Primary: `bg-[#00d4ff] text-[#050d1a] font-semibold px-8 py-3 rounded-full hover:bg-[#00ffcc] transition-colors`
- Outline: `border border-[#00d4ff] text-[#00d4ff] px-8 py-3 rounded-full hover:bg-[#00d4ff]/10 transition-colors`

### Badges / Labels
- `bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-medium px-3 py-1 rounded-full border border-[#00d4ff]/20`

## Do's
- Use dark backgrounds throughout — never white or light grey
- Use cyan/teal glows sparingly for emphasis
- Keep text contrast high — always use `#e8f4f8` or `#ffffff` on dark backgrounds
- Use `rounded-2xl` for cards, `rounded-full` for pills/badges
- Animate with `transition-all duration-300` for smooth interactions

## Don'ts
- Don't use white or light backgrounds
- Don't use warm colors (orange, red, yellow) as primary accents
- Don't use small font sizes below `text-sm`
- Don't use low-contrast text (e.g. `#4a6a7a` on `#050d1a` for body text)
- Don't use sharp corners on cards — always round them
