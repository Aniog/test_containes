# MicroCosmos Design System

## Concept
Dark, immersive, scientific-wonder aesthetic. Inspired by microscopy, bioluminescence, and the hidden beauty of the microscopic world. Deep navy/black backgrounds with vibrant teal, cyan, and emerald accent colors.

## Color Palette
- Background primary: `#050d1a` (near-black deep navy) — `bg-[#050d1a]`
- Background secondary: `#0a1628` (dark navy) — `bg-[#0a1628]`
- Background card: `#0f1f35` (dark blue-navy) — `bg-[#0f1f35]`
- Accent primary: `#00d4aa` (bioluminescent teal) — `text-[#00d4aa]`, `bg-[#00d4aa]`
- Accent secondary: `#00b4d8` (cyan blue) — `text-[#00b4d8]`
- Accent glow: `#7df9e8` (bright mint) — `text-[#7df9e8]`
- Text primary: `#e8f4f8` (near-white cool) — `text-[#e8f4f8]`
- Text secondary: `#94b8c8` (muted blue-gray) — `text-[#94b8c8]`
- Text muted: `#5a7a8a` — `text-[#5a7a8a]`
- Border subtle: `#1a3a4a` — `border-[#1a3a4a]`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card padding: `p-6`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#1a3a4a]`
- Card radius: `rounded-2xl`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,170,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,170,0.3)]`

## Image Style
- Images should be full-bleed, rounded-2xl, with slight overlay for text legibility
- Use aspect ratios: 16x9 for hero/banners, 4x3 for cards, 1x1 for gallery squares, 3x4 for portrait cards
- Overlay: `bg-gradient-to-t from-[#050d1a] via-transparent to-transparent`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan accents for interactive elements and highlights
- Use generous whitespace between sections
- Images should be large and prominent
- Use subtle gradient overlays on images for text legibility

## Don'ts
- Never use white or light backgrounds
- Never use low-contrast text (e.g., dark text on dark bg)
- Avoid cluttered layouts — let images breathe
- Don't use warm colors (orange, red, yellow) as primary accents
