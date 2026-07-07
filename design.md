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
- `velmora-mist`: #D4CEC4 — Muted warm gray (secondary text on light)

### Accent (Gold)
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, shimmer)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

### Text
- `velmora-text-dark`: #1A1714 — Primary text on light backgrounds
- `velmora-text-mid`: #5C5550 — Secondary text on light backgrounds
- `velmora-text-light`: #F5F0E8 — Primary text on dark backgrounds
- `velmora-text-muted`: #9C9490 — Muted text, captions

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl md:text-2xl font-medium tracking-widest uppercase`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm leading-relaxed`
- UI Labels: `font-manrope text-xs tracking-widest uppercase`
- Prices: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-stone/30`
- Card border: `border border-velmora-stone/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for small elements

## Buttons
- Primary (solid gold): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost (dark bg): `text-velmora-text-light border-b border-velmora-gold/50 hover:border-velmora-gold`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(201,169,110,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.3)]`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and UI labels
- Generous whitespace — let the jewelry breathe
- Warm gold accents only — never blue, purple, or cool tones
- Hairline borders, not thick borders

## Don'ts
- No rounded corners on hero images or editorial sections
- No bright/neon colors
- No generic e-commerce blue buttons
- No tight spacing or cluttered layouts
- No bold/heavy serif weights — keep headings light or regular
