# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text, borders

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `cream`: #FAF7F2 — card backgrounds, hero overlay
- `linen`: #EDE8DF — subtle section backgrounds

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm glow
- `gold-dark`: #A8854A — pressed states, deep accent

### Text
- `ink`: #1A1714 — primary body text on light
- `mist`: #8C8480 — secondary/muted text
- `ivory`: #F5F0E8 — text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm leading-relaxed`
- UI Labels: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone/20`
- Divider: `h-px bg-stone/20`
- Card border: `border border-linen`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-gold text-obsidian hover:bg-gold-light px-8 py-3 text-xs uppercase tracking-widest font-inter transition-colors`
- Secondary (outline): `border border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-inter transition-colors`
- Ghost: `text-mist hover:text-ink text-xs uppercase tracking-widest`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and UI labels
- Generous whitespace between sections
- Warm gold (#C9A96E) as the single accent color
- Thin hairline borders (1px, low opacity)
- Large editorial imagery

## Don'ts
- No bright/saturated colors other than gold accent
- No heavy drop shadows
- No rounded corners > 2px on cards (sharp, editorial)
- No generic blue/purple CTA buttons
- No crowded layouts
