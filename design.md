# MicroCosmos Design System

## Concept
A dark, immersive scientific/nature aesthetic evoking the hidden world of microscopic life — cells, organisms, water droplets, and tiny ecosystems.

## Color Palette
- Background (deep dark): `#050a0e` → Tailwind: `bg-[#050a0e]`
- Surface (dark card): `#0d1b2a` → Tailwind: `bg-[#0d1b2a]`
- Surface elevated: `#112233` → Tailwind: `bg-[#112233]`
- Primary accent (teal/cyan): `#00d4c8` → Tailwind: `text-[#00d4c8]`, `border-[#00d4c8]`
- Secondary accent (electric blue): `#0ea5e9` → Tailwind: `text-sky-400`
- Highlight (soft green): `#4ade80` → Tailwind: `text-green-400`
- Text primary: `#f0f9ff` → Tailwind: `text-slate-50`
- Text secondary: `#94a3b8` → Tailwind: `text-slate-400`
- Text muted: `#475569` → Tailwind: `text-slate-600`
- Border subtle: `rgba(0,212,200,0.15)` → Tailwind: `border-[#00d4c8]/15`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-6xl md:text-8xl font-black tracking-tight`
- Section heading: `text-4xl md:text-5xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption/label: `text-sm font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-24 px-6 md:px-12`
- Card padding: `p-6`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-[#00d4c8]/15 rounded-2xl`
- Glow effect: `shadow-[0_0_40px_rgba(0,212,200,0.12)]`
- Image overlay: `bg-gradient-to-t from-[#050a0e] via-transparent to-transparent`

## Do's
- Use dark backgrounds with teal/cyan accent colors
- Use uppercase tracking-widest labels for section tags
- Use subtle gradient overlays on images
- Use grid layouts for image galleries
- Ensure all text is clearly readable against dark backgrounds

## Don'ts
- No light backgrounds (white/light gray)
- No bright saturated colors other than the accent palette
- No cluttered layouts — keep generous whitespace
- No small unreadable text on dark surfaces
