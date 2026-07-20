# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark surface, footer
- `parchment`: #F5F0E8 — warm off-white page background
- `linen`: #EDE8DF — subtle section alternates, card backgrounds
- `stone`: #C8BFB0 — hairline dividers, muted borders

### Accent / Gold
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E2C98A — hover state, shimmer
- `gold-dark`: #A8854A — pressed state, deep accent

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `mist`: #6B6259 — secondary/muted text
- `cream`: #F5F0E8 — text on dark backgrounds
- `cream-muted`: #C8BFB0 — muted text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide text-ink`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide text-ink`
- Product Name: `font-cormorant text-2xl font-medium tracking-widest uppercase text-ink`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm text-mist leading-relaxed`
- UI Labels: `font-inter text-xs tracking-widest uppercase text-mist`
- Price: `font-inter text-lg font-medium text-ink`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone/40`
- Divider: `h-px bg-stone/40`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid gold): `bg-gold text-obsidian font-inter text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-200`
- Secondary (outlined): `border border-gold text-gold font-inter text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-colors duration-200`
- Ghost: `text-ink font-inter text-xs tracking-widest uppercase hover:text-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use wide letter-spacing on product names (tracking-widest)
- Keep whitespace generous — sections breathe
- Use warm gold (#C9A96E) as the single accent color
- Hairline borders only — never thick borders
- Images: warm-lit, editorial, gold on dark/neutral

## Don'ts
- No bright whites (#FFFFFF) — use parchment (#F5F0E8) instead
- No cool grays — everything has a warm undertone
- No thick borders or heavy shadows
- No more than 2 font families
- No discount-looking elements (no red sale badges, no flashing)
