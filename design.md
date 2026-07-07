# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1614 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2420 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #3D3530 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0EA — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE6DC — Warm cream (section alternates)
- `velmora-sand`: #D4C9B8 — Warm sand (muted text on light)
- `velmora-mist`: #8C7E72 — Warm mist (secondary text)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deep gold (pressed states)

### Text
- `velmora-text`: #1A1614 — Primary text on light backgrounds
- `velmora-text-light`: #F5F0EA — Primary text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-2xl font-medium tracking-[0.15em] uppercase`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm leading-relaxed`
- UI Labels: `font-inter text-xs tracking-widest uppercase`
- Nav Links: `font-inter text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-stone/30`
- Divider: `h-px bg-velmora-stone/20`

## Shadows
- Card: `shadow-[0_2px_20px_rgba(26,22,20,0.08)]`
- Elevated: `shadow-[0_8px_40px_rgba(26,22,20,0.12)]`

## Buttons

### Primary (Gold filled)
`bg-velmora-gold text-velmora-obsidian font-inter text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold-light transition-colors duration-300`

### Secondary (Outlined)
`border border-velmora-gold text-velmora-gold font-inter text-xs tracking-widest uppercase px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`

### Ghost (Dark)
`border border-velmora-stone text-velmora-text font-inter text-xs tracking-widest uppercase px-8 py-4 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and UI labels
- Use generous whitespace — sections breathe
- Use warm gold (#C9A96E) as the single accent color
- Keep imagery large and editorial
- Use hairline borders (1px, low opacity)

## Don'ts
- No bright whites (#FFFFFF) — use warm off-white (#F5F0EA)
- No cool grays — everything has a warm undertone
- No rounded corners on buttons (sharp or very subtle)
- No drop shadows that look "web 2.0"
- No generic blue links
- No crowded layouts
