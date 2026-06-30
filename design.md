# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `ivory`: #FAF7F2 — primary light background, page base
- `cream`: #F2EDE4 — section alternates, cards
- `linen`: #E8E0D4 — borders, hairlines, dividers

### Accent
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm fills
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `text-primary`: #1A1714 — headings on light
- `text-secondary`: #5C4F44 — body on light
- `text-muted`: #9C8E82 — captions, metadata
- `text-inverse`: #FAF7F2 — text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial)
- **Sans**: Manrope (body, UI, labels, prices)

### Scale
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Price: `font-manrope text-lg font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outline): `border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-text-secondary hover:text-gold transition-colors duration-200`

### Cards
- Product card: `bg-ivory overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`
- Hover lift: `hover:-translate-y-1 transition-transform duration-300`

### Dividers
- Hairline: `border-t border-linen`
- Accent: `border-t border-gold/30`

### Animations
- Fade in: `transition-opacity duration-500`
- Slide up: `transition-transform duration-500 translate-y-4 opacity-0 → translate-y-0 opacity-100`
- Hover scale image: `group-hover:scale-105 transition-transform duration-700`

## Do's
- Use generous whitespace — let jewelry breathe
- Serif for all editorial/product text
- Gold accent sparingly — it should feel precious
- Large imagery, minimal text clutter
- Thin borders, never thick outlines

## Don'ts
- No bright/neon colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No heavy drop shadows
- No busy patterns or textures
- No all-caps body text (only labels/captions)
