# MicroCosmos Design System

## Theme
Strict black and white palette. No color accents. High contrast, editorial, scientific aesthetic.

## Colors
- Background (primary): `bg-black` (#000000)
- Background (secondary): `bg-neutral-950` (#0a0a0a)
- Background (card/surface): `bg-neutral-900` (#171717)
- Background (subtle): `bg-neutral-800` (#262626)
- Border: `border-neutral-700` (#404040) or `border-white/10`
- Text (primary): `text-white` (#ffffff)
- Text (secondary): `text-neutral-300` (#d4d4d4)
- Text (muted): `text-neutral-500` (#737373)
- Accent line / divider: `border-white` or `border-neutral-600`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-6xl md:text-8xl font-black tracking-tighter text-white`
- Section heading: `text-4xl md:text-5xl font-bold tracking-tight text-white`
- Subheading: `text-xl md:text-2xl font-semibold text-white`
- Body: `text-base text-neutral-300 leading-relaxed`
- Caption / label: `text-sm text-neutral-500 uppercase tracking-widest`
- Quote / highlight: `text-2xl font-light italic text-white`

## Spacing
- Section padding: `py-20 md:py-32`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Shapes
- Cards: `rounded-none` (sharp, editorial) or `rounded-sm`
- Borders: `border border-neutral-800`
- Dividers: `border-t border-neutral-800`

## Images
- All images use grayscale filter: `grayscale` Tailwind class
- On hover: `hover:grayscale-0` for subtle reveal effect (optional)
- Image overlays: `bg-gradient-to-t from-black/80 to-transparent`
- Aspect ratios: 16x9 for wide shots, 1x1 for grid cells, 3x4 for portrait

## Buttons & Interactive
- Primary button: `bg-white text-black font-semibold px-8 py-3 hover:bg-neutral-200 transition-colors`
- Ghost button: `border border-white text-white px-8 py-3 hover:bg-white hover:text-black transition-colors`

## Do's
- Use generous whitespace to create a scientific, editorial feel
- Use large, full-bleed images with grayscale filter
- Use thin uppercase labels for section identifiers
- Use strong typographic hierarchy

## Don'ts
- Never use any color other than black, white, and neutral grays
- Never use rounded-full on cards or image containers
- Never use colored shadows or glows
