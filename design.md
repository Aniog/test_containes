# MicroCosmos Design System

## Theme
Dark, immersive, scientific aesthetic inspired by microscopy and bioluminescence.
Deep navy/black backgrounds with vibrant teal, cyan, and purple accent colors.

## Colors
- Background primary: `bg-[#050d1a]` (near-black deep navy)
- Background secondary: `bg-[#0a1628]` (dark navy)
- Background card: `bg-[#0d1f35]` (slightly lighter navy)
- Accent primary (teal/cyan): `text-cyan-400`, `bg-cyan-400`, `border-cyan-400`
- Accent secondary (purple): `text-purple-400`, `bg-purple-500`
- Accent glow: `text-teal-300`, `shadow-cyan-500/50`
- Text primary: `text-white`
- Text secondary: `text-slate-300`
- Text muted: `text-slate-400`
- Divider/border: `border-slate-700`, `border-cyan-900`

## Typography
- Font: Inter (loaded via Google Fonts)
- Hero heading: `text-5xl md:text-7xl font-black tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold`
- Card heading: `text-xl font-semibold`
- Body: `text-base text-slate-300`
- Caption/label: `text-sm text-slate-400 uppercase tracking-widest`

## Spacing
- Section padding: `py-20 px-4 md:px-8`
- Card padding: `p-6`
- Gap between grid items: `gap-6` or `gap-8`

## Borders & Shadows
- Card border: `border border-cyan-900/40`
- Card hover: `hover:border-cyan-500/60`
- Glow effect: `shadow-lg shadow-cyan-500/20`
- Rounded: `rounded-2xl` for cards, `rounded-full` for badges/pills

## Buttons
- Primary: `bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-6 py-3 rounded-full transition`
- Secondary/outline: `border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full transition`

## Images
- Use `data-strk-img` / `data-strk-bg` system for all stock images
- Aspect ratios: hero `16x9`, cards `4x3` or `3x2`, portrait `2x3`
- All images should have `object-cover` and `rounded-xl` or `rounded-2xl`

## Do's
- Use dark overlays on background images for text legibility
- Add subtle gradient overlays: `bg-gradient-to-t from-[#050d1a] to-transparent`
- Use `backdrop-blur` for glass-morphism effects on cards
- Animate with `transition-all duration-300`

## Don'ts
- Never use white or light backgrounds
- Never use dark text on dark backgrounds
- Avoid flat, unadorned cards — always add border or glow
- Don't use more than 3 accent colors per section
