# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: `#1A1714` — primary dark background, nav solid state
- `espresso`: `#2C2420` — secondary dark surface, footer
- `parchment`: `#F5F0E8` — primary light background, page base
- `ivory`: `#FAF7F2` — card backgrounds, hero overlay
- `linen`: `#EDE8DF` — subtle section backgrounds, dividers

### Accent / Gold
- `gold`: `#C9A96E` — primary accent, CTAs, highlights
- `gold-light`: `#E2C98A` — hover states, shimmer
- `gold-dark`: `#A8854A` — pressed states, deep accents

### Text
- `ink`: `#1A1714` — primary body text on light
- `muted`: `#7A6E65` — secondary text, captions
- `whisper`: `#B5ADA5` — placeholder, disabled

### Semantic
- `surface`: `#FAF7F2` — card/modal surface
- `border`: `#E2DDD6` — hairline dividers

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Manrope (body, UI, labels, prices)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Price: `font-manrope text-base font-medium`
- Button: `font-manrope text-xs tracking-[0.12em] uppercase font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian hover:bg-gold-light px-8 py-3 text-xs tracking-[0.12em] uppercase font-manrope font-medium transition-all duration-300`
- Secondary (outline): `border border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-3 text-xs tracking-[0.12em] uppercase font-manrope font-medium transition-all duration-300`
- Ghost: `text-ink hover:text-gold text-xs tracking-[0.12em] uppercase font-manrope transition-colors duration-200`

### Cards
- Product card: `bg-ivory overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-border`
- Gold accent: `border-t border-gold/30`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`
- Subtle lift: `hover:-translate-y-1 transition-transform duration-300`

## Do's
- Use generous whitespace — let products breathe
- Serif for all editorial/product text
- Gold accent sparingly — it should feel precious
- Large, full-bleed imagery
- Thin hairline borders only
- Uppercase product names with wide tracking

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic sans-serif headings
- No cluttered layouts
- No discount-style pricing (no red, no "SALE!" banners)
