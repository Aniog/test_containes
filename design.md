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

### Accent (Gold)
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, shimmer)
- `velmora-gold-dark`: #A8854A — Deep gold (pressed states)

### Text
- `velmora-text-dark`: #1A1714 — On light backgrounds
- `velmora-text-light`: #F5F0E8 — On dark backgrounds
- `velmora-text-muted`: #8C8278 — Secondary text

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-widest uppercase` (Cormorant Garamond 300)
- Product Name: `text-xl md:text-2xl font-normal tracking-[0.2em] uppercase` (Cormorant Garamond)
- Card Title: `text-base tracking-[0.15em] uppercase font-normal`

### Body — Manrope (sans-serif)
- Body: `text-sm font-light leading-relaxed` (Manrope 300)
- UI Labels: `text-xs tracking-widest uppercase font-medium` (Manrope 500)
- Price: `text-base font-medium` (Manrope 500)
- Nav Links: `text-xs tracking-[0.15em] uppercase font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-stone/30`
- Card border: `border border-velmora-stone/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_40px_rgba(0,0,0,0.12)]`
- Drawer: `shadow-[-4px_0_40px_rgba(0,0,0,0.2)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text-light text-xs tracking-widest uppercase font-medium underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue buttons
- No tight spacing or cluttered layouts
- No bold/heavy fonts for headings
