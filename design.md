# MicroCosmos — Visual Style Guide

A single-page website exploring the hidden microscopic universe. The design
evokes a scientific, editorial, "deep-field" feel: dark, immersive, with
luminous imagery and clean typography.

## Typography
- Headings: `font-serif` (Georgia / "Times New Roman" stack) for an editorial,
  scientific-journal feel. Large, tight leading.
- Body: `font-sans` (Inter) for readability.
- Eyebrow / labels: uppercase, tracking-widest, small, muted.

Example classes:
- Hero title: `font-serif text-5xl md:text-7xl tracking-tight`
- Section eyebrow: `text-xs uppercase tracking-[0.3em] text-emerald-300/80`
- Body: `text-base md:text-lg leading-relaxed text-slate-300`

## Colors
Dark, immersive palette with luminous accents.
- Background base: `#070b14` (near-black navy) — use `bg-[#070b14]`
- Surface / cards: `bg-white/5` with `border border-white/10`
- Primary accent (life/bio): emerald — `text-emerald-300`, `bg-emerald-500`
- Secondary accent (energy): cyan/teal — `text-cyan-300`
- Foreground text: `text-slate-100` (headings), `text-slate-300` (body)
- Muted: `text-slate-400` / `text-slate-500`

Add these named colors to tailwind.config.js:
- `ink: '#070b14'` (deep background)
- `ink-soft: '#0d1424'` (slightly lighter panels)

## Layout & Spacing
- Full-width sections with max-width content container `max-w-7xl mx-auto px-6`.
- Generous vertical rhythm: `py-20 md:py-28` between sections.
- Rounded corners: `rounded-2xl` for cards, `rounded-3xl` for hero panels.
- Subtle borders and shadows: `border border-white/10`, `shadow-2xl`.

## Visual Style
- Immersive dark hero with full-bleed background image and gradient overlay.
- Image-heavy: large feature images, multi-column galleries, masonry-style grids.
- Cards float on translucent surfaces with backdrop blur: `backdrop-blur-sm`.
- Hover: subtle scale + glow on images (`hover:scale-105 transition`).
- Use emerald/cyan gradients for accents and dividers.

## Do's
- Use lots of imagery (hero bg, feature images, gallery grid).
- Keep text readable: light text on dark backgrounds, explicit colors.
- Use responsive grids (1 col mobile, 2-3 col desktop).
- Add gradient overlays over background images for text legibility.

## Don'ts
- Don't use light backgrounds with light text.
- Don't hardcode arbitrary hex values in class strings (use config colors).
- Don't use single-column stacking on desktop.
- Don't place low-contrast text over busy images without an overlay.
