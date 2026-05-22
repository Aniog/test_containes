# MicroCosmos Design System

## Concept
A dark, immersive, science-meets-wonder aesthetic. The site explores the microscopic world — cells, organisms, crystals, and natural patterns invisible to the naked eye. The visual language is deep, rich, and mysterious with pops of vivid bioluminescent color.

## Color Palette
- Background (deep space): `bg-[#050a0f]` — near-black with a blue tint
- Surface / card: `bg-[#0d1a26]` — dark navy
- Surface elevated: `bg-[#112233]`
- Primary accent (cyan/teal): `text-cyan-400`, `border-cyan-400`, `bg-cyan-400`
- Secondary accent (violet): `text-violet-400`, `bg-violet-500`
- Highlight (amber/gold): `text-amber-400`
- Body text: `text-slate-200`
- Muted text: `text-slate-400`
- Dividers: `border-slate-700`

## Typography
- Font: **Inter** (loaded via Google Fonts in index.html)
- Hero heading: `text-5xl md:text-7xl font-extrabold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Sub-heading: `text-xl font-semibold`
- Body: `text-base font-normal leading-relaxed`
- Caption / label: `text-sm text-slate-400`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto`
- Section padding: `py-20 px-6 md:px-12`
- Card gap: `gap-6`
- Rounded corners: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Borders & Shadows
- Card border: `border border-slate-700/50`
- Glow effect (cyan): `shadow-[0_0_30px_rgba(34,211,238,0.15)]`
- Glow effect (violet): `shadow-[0_0_30px_rgba(167,139,250,0.15)]`

## Image Style
- Images should be full-bleed, high-contrast microscopy / macro photography
- Use `object-cover` with fixed aspect ratios
- Overlay gradient on hero: `bg-gradient-to-b from-transparent to-[#050a0f]`

## Do's
- Use dark backgrounds throughout — never white or light gray
- Use cyan/teal as the primary interactive color
- Use generous whitespace between sections
- Use subtle gradient overlays on images
- Use `backdrop-blur` for glass-morphism effects on overlays

## Don'ts
- Don't use light mode colors
- Don't use flat, unstyled buttons
- Don't use more than 3 accent colors at once
- Don't use small, cramped layouts — breathe!
