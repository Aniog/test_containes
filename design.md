# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry — restrained, elegant, never loud.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F7F3EE — primary light background
- `cream`: #EDE8E1 — secondary light surface, cards
- `linen`: #E0D9D0 — borders, hairlines

### Accent
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6460 — secondary/muted text
- `ivory`: #F7F3EE — primary text on dark

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, captions

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid gold): `bg-gold text-obsidian font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink-muted hover:text-ink font-manrope text-xs tracking-wide uppercase transition-colors`

### Cards
- Product card: `bg-cream overflow-hidden group cursor-pointer`
- Hover: `shadow-md transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-linen`
- Accent: `border-t border-gold/30`

## Do's
- Use generous whitespace — let products breathe
- Serif for all editorial/product text, sans for UI
- Product names always UPPERCASE with wide tracking
- Gold accent used sparingly — CTAs, prices, stars
- Soft transitions (300ms ease)
- Images: warm-lit, editorial, neutral/dark backgrounds

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product images (sharp or very subtle)
- No generic e-commerce blue/green CTAs
- No crowded layouts
