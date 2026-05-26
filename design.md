# MicroCosmos Design System

## Theme
Dark, immersive scientific aesthetic evoking the mysterious beauty of the microscopic world. Deep space-like backgrounds with glowing bioluminescent accents.

## Colors
- Background primary: `#050d1a` (deep navy black)
- Background secondary: `#0a1628` (dark navy)
- Background card: `#0f1f3d` (dark blue card)
- Accent cyan: `#00d4ff` — use `text-[#00d4ff]`, `border-[#00d4ff]`
- Accent teal: `#00b4a0` — use `text-[#00b4a0]`
- Accent purple: `#7c3aed` — use `text-purple-600`, `bg-purple-600`
- Accent green: `#10b981` — use `text-emerald-400`
- Text primary: `#f0f8ff` (alice blue white) — use `text-[#f0f8ff]`
- Text secondary: `#94a3b8` — use `text-slate-400`
- Text muted: `#64748b` — use `text-slate-500`

## Typography
- Font: Inter (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption: `text-sm text-slate-400`

## Borders & Shadows
- Card border: `border border-[#00d4ff]/20`
- Glow effect: `shadow-[0_0_30px_rgba(0,212,255,0.15)]`
- Hover glow: `hover:shadow-[0_0_40px_rgba(0,212,255,0.3)]`
- Rounded cards: `rounded-2xl`
- Rounded images: `rounded-xl`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6 md:gap-8`

## Components
- Buttons: `bg-[#00d4ff] text-[#050d1a] font-bold px-8 py-3 rounded-full hover:bg-white transition-all`
- Ghost button: `border border-[#00d4ff] text-[#00d4ff] px-8 py-3 rounded-full hover:bg-[#00d4ff]/10`
- Badge/tag: `bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-semibold px-3 py-1 rounded-full border border-[#00d4ff]/30`
- Section divider: subtle gradient line `bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent h-px`

## Do's
- Use dark backgrounds throughout — never white or light backgrounds
- Use cyan/teal glows on interactive elements
- Images should fill their containers with `object-cover`
- Use gradient overlays on hero images: `bg-gradient-to-b from-transparent to-[#050d1a]`
- Animate subtle hover states on cards (scale, glow)
- Use grid layouts for image-heavy sections

## Don'ts
- No white or light backgrounds
- No low-contrast text (never dark text on dark bg without sufficient contrast)
- No harsh borders — use subtle opacity borders
- No flat, uninteresting layouts — use overlapping elements and gradients
