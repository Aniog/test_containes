# MicroCosmos Design System

## Concept
A dark, immersive scientific aesthetic inspired by microscopy and the hidden world of microorganisms. Deep navy and teal backgrounds evoke the look of a microscope slide under fluorescent light.

## Color Palette

### Primary Colors
- `cosmos-dark`: #050d1a — Page background, deepest dark
- `cosmos-navy`: #0a1628 — Section backgrounds
- `cosmos-blue`: #0e2240 — Card backgrounds
- `cosmos-teal`: #0d9488 — Primary accent (teal-600)
- `cosmos-cyan`: #06b6d4 — Secondary accent (cyan-500)
- `cosmos-glow`: #67e8f9 — Highlight / glow text (cyan-300)

### Text Colors
- Primary text: `text-slate-100` (#f1f5f9)
- Secondary text: `text-slate-300` (#cbd5e1)
- Muted text: `text-slate-400` (#94a3b8)
- Accent text: `text-teal-400` (#2dd4bf)

### Gradient
- Hero gradient: `from-[#050d1a] via-[#0a1628] to-[#0e2240]`
- Card hover: subtle teal glow border

## Typography

### Fonts
- Headings: **Space Grotesk** — modern, scientific feel
- Body: **Inter** — clean, readable

### Scale
- Hero title: `text-5xl md:text-7xl font-bold` (Space Grotesk)
- Section title: `text-3xl md:text-4xl font-bold`
- Card title: `text-xl font-semibold`
- Body: `text-base` (Inter)
- Caption/label: `text-sm text-slate-400`

## Borders & Shadows
- Card border: `border border-teal-900/40`
- Card hover border: `border-teal-500/60`
- Glow shadow: `shadow-[0_0_30px_rgba(13,148,136,0.15)]`
- Hover glow: `shadow-[0_0_40px_rgba(6,182,212,0.25)]`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Grid gap: `gap-6` or `gap-8`

## Components

### Navbar
- Fixed top, dark background with blur: `bg-cosmos-dark/80 backdrop-blur-md`
- Logo: teal accent color
- Links: `text-slate-300 hover:text-teal-400`

### Cards
- Background: `bg-cosmos-blue`
- Border: `border border-teal-900/40 hover:border-teal-500/60`
- Rounded: `rounded-2xl`
- Transition: `transition-all duration-300`

### Buttons
- Primary: `bg-teal-600 hover:bg-teal-500 text-white rounded-full px-6 py-2.5`
- Outline: `border border-teal-500 text-teal-400 hover:bg-teal-500/10 rounded-full px-6 py-2.5`

### Images
- All images use rounded corners: `rounded-xl` or `rounded-2xl`
- Hover: subtle scale transform `hover:scale-105 transition-transform duration-500`
- Overlay: dark gradient overlay for text readability

## Do's
- Use dark backgrounds throughout
- Use teal/cyan as accent colors consistently
- Add subtle glow effects on hover
- Use generous whitespace between sections
- Images should be large and prominent

## Don'ts
- No white or light backgrounds
- No harsh color contrasts
- No small, cramped image grids
- Don't use warm colors (orange, red) as primary accents
