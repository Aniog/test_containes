# MicroCosmos Design System

## Concept
A dark, immersive website exploring the microscopic world. The aesthetic draws from deep-sea bioluminescence, electron microscopy imagery, and scientific wonder. Rich dark backgrounds with vivid teal/cyan/emerald accent colors evoke the feeling of peering through a microscope.

## Color Palette

### Background Colors
- Deep black: `bg-black` (#000000) — primary page background
- Dark navy: `bg-[#050d1a]` — section backgrounds
- Dark teal: `bg-[#071a1a]` — alternate section backgrounds
- Card dark: `bg-[#0a1628]` — card/panel backgrounds

### Accent Colors (add to tailwind config)
- `cosmos-teal`: #00d4c8 — primary accent, headings, highlights
- `cosmos-cyan`: #00b8ff — secondary accent, links
- `cosmos-emerald`: #00e87a — tertiary accent, badges
- `cosmos-purple`: #8b5cf6 — decorative accent
- `cosmos-gold`: #f59e0b — warm accent for stats

### Text Colors
- Primary text: `text-white` on dark backgrounds
- Secondary text: `text-slate-300`
- Muted text: `text-slate-400`
- Accent text: `text-cosmos-teal`

## Typography

### Font Stack
- Headings: `font-display` → "Space Grotesk" (Google Fonts)
- Body: `font-sans` → "Inter" (Google Fonts)

### Scale
- Hero title: `text-6xl md:text-8xl font-bold tracking-tight`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base text-slate-300 leading-relaxed`
- Caption: `text-sm text-slate-400`

## Spacing & Layout
- Section padding: `py-20 md:py-28 px-6`
- Max content width: `max-w-7xl mx-auto`
- Card gap: `gap-6 md:gap-8`
- Grid: 2-col on md, 3-col on lg for gallery

## Borders & Effects
- Subtle border: `border border-white/10`
- Glow border: `border border-cosmos-teal/30`
- Card radius: `rounded-2xl`
- Image radius: `rounded-xl`
- Backdrop blur: `backdrop-blur-sm`
- Gradient overlays: `bg-gradient-to-b from-transparent to-black/80`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan glows on hover states
- Use full-bleed images with gradient overlays for text legibility
- Use generous whitespace between sections
- Use subtle grid/dot patterns as section backgrounds

## Don'ts
- No light backgrounds
- No harsh borders — use opacity-based borders only
- No flat, unstyled cards — always add subtle glow or border
- No small images — prefer large, immersive imagery
