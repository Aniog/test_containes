# MicroCosmos Design System

## Concept
A dark, immersive aesthetic inspired by bioluminescent deep-sea and microscopic worlds. Deep navy and black backgrounds with glowing cyan, teal, and violet accents evoke the feeling of peering through a microscope into an alien universe.

## Color Palette

### Backgrounds
- Page background: `#050a14` (near-black deep navy) — `bg-[#050a14]`
- Section alternate: `#0a1628` (dark navy) — `bg-[#0a1628]`
- Card background: `#0d1f3c` (deep blue-navy) — `bg-[#0d1f3c]`
- Card border: `rgba(0,200,255,0.15)` — `border border-cyan-500/20`

### Accent Colors
- Primary cyan: `#00c8ff` — `text-cyan-400`, `bg-cyan-400`
- Teal: `#00e5c8` — `text-teal-400`
- Violet: `#a855f7` — `text-purple-500`
- Amber highlight: `#f59e0b` — `text-amber-400`

### Text
- Heading primary: `#e2f4ff` (near-white with blue tint) — `text-[#e2f4ff]`
- Body text: `#94b8d0` (muted blue-grey) — `text-[#94b8d0]`
- Muted label: `#4a7a9b` — `text-[#4a7a9b]`

## Typography

### Fonts
- Headings: `font-bold tracking-tight` with Inter
- Body: `font-normal leading-relaxed`

### Scale
- Hero title: `text-5xl md:text-7xl font-extrabold`
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-lg font-semibold`
- Body: `text-base`
- Caption/label: `text-sm`

## Spacing & Layout
- Section padding: `py-20 px-4 md:px-8`
- Max content width: `max-w-7xl mx-auto`
- Card gap: `gap-6`
- Card padding: `p-5`

## Borders & Shadows
- Card border: `border border-cyan-500/20 rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,200,255,0.15)]`
- Image border radius: `rounded-xl`

## Do's
- Use dark backgrounds throughout — never white or light grey
- Use cyan/teal glows on hover states
- Use `overflow-hidden` on image containers to keep rounded corners
- Use `object-cover` on all images
- Maintain high contrast: light text on dark backgrounds always

## Don'ts
- No white or light backgrounds
- No black text on dark surfaces
- No flat, unstyled cards — always add border and subtle glow
- No small images — images should be prominent and generous in size
