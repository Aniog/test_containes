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
- `velmora-cream`: #EDE8DE — Warm cream (section alternates)
- `velmora-sand`: #D4C9B5 — Warm sand (muted text on light)
- `velmora-mist`: #8C8278 — Warm muted gray (body text secondary)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, shimmer)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

### Text
- `velmora-ink`: #1A1714 — Primary text on light backgrounds
- `velmora-ivory`: #F5F0E8 — Primary text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)
- Subheadings: `text-lg font-light italic` (Cormorant Garamond 300 italic)

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Prices: `text-base font-medium` (Manrope 500)
- Captions: `text-xs font-light` (Manrope 300)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-stone/30`
- Card border: `border border-velmora-stone/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_40px_rgba(201,169,110,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.3)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian text-xs tracking-widest uppercase font-medium px-8 py-3.5 hover:bg-velmora-gold-light transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold text-xs tracking-widest uppercase font-medium px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost (nav): `text-xs tracking-widest uppercase font-medium hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and UI labels
- Generous whitespace between sections
- Warm gold accents sparingly — they should feel precious
- Dark backgrounds for hero/editorial sections, light linen for product sections

## Don'ts
- No bright whites (#FFFFFF) — use warm off-white (#F5F0E8)
- No cool grays — everything has a warm undertone
- No rounded corners on editorial images
- No generic blue links
- No cluttered layouts
