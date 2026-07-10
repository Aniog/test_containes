# MicroCosmos Design System

## Theme
Dark, scientific, immersive. Inspired by the deep ocean, bioluminescence, and electron microscopy imagery. The palette evokes the mysterious beauty of the invisible world.

## Colors
- Background (deep): `#050d1a` — near-black navy (`bg-cosmos-deep`)
- Background (dark): `#0a1628` — dark navy (`bg-cosmos-dark`)
- Background (mid): `#0f2040` — mid navy (`bg-cosmos-mid`)
- Accent cyan: `#00d4ff` — electric cyan (`text-cyan-400`, `border-cyan-400`)
- Accent teal: `#00b4a0` — teal glow (`text-teal-400`)
- Accent purple: `#8b5cf6` — violet (`text-violet-400`)
- Accent amber: `#f59e0b` — warm highlight (`text-amber-400`)
- Text primary: `#e2e8f0` — light slate (`text-slate-200`)
- Text secondary: `#94a3b8` — muted slate (`text-slate-400`)
- Text muted: `#64748b` — dim slate (`text-slate-500`)

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero title: `text-5xl md:text-7xl font-black tracking-tight`
- Section title: `text-3xl md:text-4xl font-bold`
- Subtitle: `text-lg md:text-xl font-medium`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-slate-400`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Shadows
- Card border: `border border-white/10`
- Card hover: `hover:border-cyan-400/40`
- Glow shadow: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Card radius: `rounded-2xl`

## Do's
- Use dark backgrounds throughout; never white or light backgrounds
- Use cyan/teal accents for highlights and interactive elements
- Use subtle gradients: `from-cosmos-deep via-cosmos-dark to-cosmos-mid`
- Images should fill their containers with `object-cover`
- Use `backdrop-blur` for overlays on images
- Hover effects: scale images slightly, brighten borders

## Don'ts
- No white backgrounds
- No harsh black text on light surfaces
- No flat, unstyled cards
- No low-contrast text combinations
