# MicroCosmos Design System

## Theme
Dark, scientific, and immersive. Evokes the mysterious beauty of the microscopic world — deep space-like backgrounds with vivid bioluminescent accent colors.

## Colors
- Background primary: `#050d1a` (near-black deep navy)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f38` (dark blue-navy)
- Accent primary: `#00d4ff` (cyan/teal — like bioluminescence)
- Accent secondary: `#7c3aed` (violet/purple)
- Accent tertiary: `#10b981` (emerald green)
- Text primary: `#f0f6ff` (near-white with blue tint)
- Text secondary: `#94a3b8` (muted slate)
- Text muted: `#475569` (dim slate)
- Border: `#1e3a5f` (subtle dark blue border)

Add to tailwind config as named colors:
- `cosmos-bg`: `#050d1a`
- `cosmos-card`: `#0f1f38`
- `cosmos-cyan`: `#00d4ff`
- `cosmos-violet`: `#7c3aed`
- `cosmos-emerald`: `#10b981`
- `cosmos-text`: `#f0f6ff`
- `cosmos-muted`: `#94a3b8`
- `cosmos-border`: `#1e3a5f`

## Typography
- Font: Inter (already loaded)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-3xl md:text-5xl font-bold`
- Card title: `text-lg md:text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-cosmos-muted`
- Label/tag: `text-xs font-semibold uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28 px-6 md:px-12`
- Card padding: `p-5 md:p-6`
- Gap between cards: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-cosmos-border`
- Card radius: `rounded-2xl`
- Glow effect (cyan): `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Glow effect (violet): `shadow-[0_0_30px_rgba(124,58,237,0.15)]`

## Do's
- Use dark backgrounds throughout — no white/light backgrounds
- Use cyan and violet as accent colors for highlights, borders, and glows
- Use large, full-bleed images wherever possible
- Use grid layouts for galleries (3-4 columns on desktop, 2 on tablet, 1 on mobile)
- Add subtle gradient overlays on images for text legibility
- Use uppercase tracking-widest for section labels/tags

## Don'ts
- No white or light gray backgrounds
- No flat, unstyled cards
- No small or cramped image grids
- No low-contrast text on dark backgrounds
