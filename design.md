# MicroCosmos Design System

## Theme
Dark, immersive, scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep navy/black backgrounds with vibrant teal, cyan, and purple accents that evoke bioluminescence and microscope imagery.

## Colors
- Background primary: `#050d1a` (deep dark navy) — `bg-[#050d1a]`
- Background secondary: `#0a1628` — `bg-[#0a1628]`
- Background card: `#0d1f3c` — `bg-[#0d1f3c]`
- Accent teal: `#00d4c8` — `text-[#00d4c8]`, `border-[#00d4c8]`
- Accent cyan: `#00b4d8` — `text-[#00b4d8]`
- Accent purple: `#7c3aed` — `bg-[#7c3aed]`
- Accent glow: `#06b6d4` — Tailwind `cyan-500`
- Text primary: `#f0f9ff` — `text-slate-50`
- Text secondary: `#94a3b8` — `text-slate-400`
- Text muted: `#64748b` — `text-slate-500`
- Border subtle: `rgba(0,212,200,0.2)` — `border-[#00d4c8]/20`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28 px-6`
- Card padding: `p-6 md:p-8`
- Gap between cards: `gap-6 md:gap-8`

## Borders & Radius
- Card radius: `rounded-2xl`
- Image radius: `rounded-xl`
- Button radius: `rounded-full`
- Subtle border: `border border-[#00d4c8]/20`

## Shadows & Effects
- Card glow: `shadow-[0_0_30px_rgba(0,212,200,0.08)]`
- Image hover: `hover:scale-105 transition-transform duration-500`
- Gradient overlays on hero: `bg-gradient-to-b from-transparent to-[#050d1a]`

## Layout
- Max width: `max-w-7xl mx-auto`
- Grid for gallery: `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4`
- Grid for features: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use teal/cyan accents for highlights, borders, and interactive elements
- Use large, full-bleed images with subtle overlays
- Use uppercase tracking-widest for section labels
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Avoid flat, colorless designs — always use the teal/cyan accent palette
- Don't use small images — prefer large, immersive visuals
