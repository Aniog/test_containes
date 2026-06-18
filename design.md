# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by microscopy imagery — deep blacks, electric teals, bioluminescent greens, and soft purples. The aesthetic evokes the wonder of the invisible world.

## Colors
- Background primary: `#050a0e` (near-black deep ocean)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0d1f2d` (dark teal-navy)
- Accent teal: `#00d4aa` (bioluminescent teal) — Tailwind: use `[#00d4aa]`
- Accent green: `#39ff14` (neon green) — Tailwind: use `[#39ff14]`
- Accent purple: `#a855f7` — Tailwind: `purple-500`
- Text primary: `#f0f9ff` — Tailwind: `sky-50`
- Text secondary: `#94a3b8` — Tailwind: `slate-400`
- Text muted: `#475569` — Tailwind: `slate-600`
- Border subtle: `rgba(0,212,170,0.15)` — use `border-[#00d4aa]/15`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero title: `text-6xl md:text-8xl font-black tracking-tight`
- Section title: `text-4xl md:text-5xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-24 px-6 md:px-12`
- Card padding: `p-6`
- Gap between grid items: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-[#00d4aa]/15 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Image overlay: gradient from transparent to `#050a0e`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/green accents for highlights, CTAs, and borders
- Use large, full-bleed images with subtle overlays
- Use grid layouts for image galleries (masonry-style or uniform)
- Use uppercase tracking-widest for section labels/eyebrows
- Animate subtle glows on hover

## Don'ts
- No white backgrounds
- No bright primary colors (red, orange, yellow) as main accents
- No rounded corners smaller than `rounded-xl`
- No dense text blocks without visual breathing room
