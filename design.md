# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, hero)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (cards, nav solid)
- `velmora-stone`: #3D3733 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (light backgrounds, sections)
- `velmora-cream`: #EDE8DE — Soft cream (card backgrounds)
- `velmora-sand`: #D4C9B5 — Warm sand (muted text on dark)
- `velmora-mist`: #8C8278 — Warm gray (secondary text)

### Accent (Gold)
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Light gold (hover states)
- `velmora-gold-dark`: #A8854A — Deep gold (pressed states)

### Text
- `velmora-white`: #FAF8F4 — Warm white (text on dark)
- `velmora-ink`: #1A1714 — Dark ink (text on light)

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Price: `text-base font-semibold` (Manrope 600)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-stone/30`
- Card border: `border border-velmora-stone/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(0,0,0,0.25)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-gold text-xs tracking-widest uppercase font-medium hover:text-velmora-gold-light`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial)
- No generic e-commerce blue/green CTAs
- No cluttered layouts
- No more than 2 font families
