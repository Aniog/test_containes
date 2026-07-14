# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #3D3733 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE7D9 — Warm cream (section alternates)
- `velmora-sand`: #D4C9B5 — Warm sand (muted text on light)
- `velmora-mist`: #8C8278 — Warm mist (secondary text)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deep gold (pressed states)

### Text
- `velmora-text`: #1A1714 — Primary text on light backgrounds
- `velmora-text-light`: #F5F0E8 — Primary text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm leading-relaxed`
- UI Labels: `font-inter text-xs uppercase tracking-widest`
- Prices: `font-inter text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-stone/30`
- Divider: `h-px bg-velmora-stone/20`

## Shadows
- Card: `shadow-[0_2px_20px_rgba(26,23,20,0.08)]`
- Elevated: `shadow-[0_8px_40px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (dark): `bg-velmora-obsidian text-velmora-text-light hover:bg-velmora-charcoal px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300`
- Accent (gold): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300`
- Outlined: `border border-velmora-obsidian text-velmora-obsidian hover:bg-velmora-obsidian hover:text-velmora-text-light px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline borders, never thick
- Gold accents sparingly — they should feel precious
- Uppercase + wide tracking for product names and labels
- Serif for all emotional/brand copy

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No generic stock-photo vibes
- No cluttered layouts
- No blue links
