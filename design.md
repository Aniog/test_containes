# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — primary light background
- `cream`: #FAF7F2 — card/section background
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, warm glow
- `gold-dark`: #A8854A — pressed state, deep accent

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6560 — secondary/caption text
- `ivory`: #FAF7F2 — primary text on dark
- `ivory-muted`: #C4BDB5 — secondary text on dark

## Typography

### Fonts
- Headings/Product names: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body/UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant, weight 300–400, tracking-wide
- H1: `text-4xl md:text-5xl`, Cormorant, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant, weight 400
- H3: `text-xl md:text-2xl`, Cormorant, weight 500
- Product name: `text-lg md:text-xl`, Cormorant, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Caption/UI: `text-xs`, Manrope, weight 500, tracking-wider

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-linen` (1px)
- Card border: `border border-linen`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-gold/10`
- Drawer: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-gold text-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-obsidian`
- Ghost: `text-ink-muted hover:text-gold`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Drawer slide: `translate-x-full → translate-x-0`
- Nav opacity: transparent → solid on scroll

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial)
- No generic e-commerce blue/red CTAs
- No crowded layouts
- No heavy drop shadows
