# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `velmora-obsidian`: #1A1614 — Deep warm black (primary background, nav solid)
- `velmora-ivory`: #FAF7F2 — Warm off-white (page background, cards)
- `velmora-cream`: #F2EDE4 — Warm cream (section backgrounds, trust bar)
- `velmora-gold`: #C9A96E — Warm gold accent (CTAs, accents, borders)
- `velmora-gold-light`: #E8D5A3 — Light gold (hover states, subtle highlights)
- `velmora-gold-dark`: #A07840 — Deep gold (active states)
- `velmora-mink`: #8B7355 — Warm mink brown (secondary text, dividers)
- `velmora-stone`: #D4C9B8 — Warm stone (borders, hairlines)
- `velmora-charcoal`: #3D3530 — Warm charcoal (body text)

### Text Colors
- Headings: `velmora-obsidian` on light backgrounds
- Body: `velmora-charcoal`
- Muted: `velmora-mink`
- On dark: `velmora-ivory`

## Typography

### Fonts
- Serif (headings, product names, editorial): Cormorant Garamond — `font-serif`
- Sans-serif (body, UI, labels): Manrope — `font-sans`

### Scale
- Display: `text-5xl md:text-7xl font-serif font-light tracking-wide`
- H1: `text-4xl md:text-5xl font-serif font-light`
- H2: `text-3xl md:text-4xl font-serif font-light`
- H3: `text-xl md:text-2xl font-serif`
- Product Name: `text-lg font-serif uppercase tracking-[0.15em]`
- Body: `text-sm font-sans leading-relaxed`
- Label/UI: `text-xs font-sans uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs font-sans uppercase tracking-widest hover:bg-velmora-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs font-sans uppercase tracking-widest hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-charcoal text-xs font-sans uppercase tracking-widest hover:text-velmora-gold transition-colors`

### Cards
- Product card: white bg, no border, soft shadow on hover, smooth image zoom
- `bg-white shadow-none hover:shadow-md transition-shadow duration-500`

### Dividers
- Hairline: `border-t border-velmora-stone`
- Gold accent: `border-t border-velmora-gold`

### Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `group-hover:scale-105 transition-transform duration-700`
- Fade in: subtle opacity transitions

## Do's
- Use generous whitespace — let the jewelry breathe
- Large editorial imagery
- Serif for all product names and headings
- Warm gold accents sparingly
- Thin hairline dividers
- Uppercase + wide letter-spacing for labels and product names

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic e-commerce blue/red
- No crowded layouts
- No bold/heavy serif weights (use light/regular)
