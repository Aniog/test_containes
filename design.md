# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surfaces
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE7DA — card backgrounds, section alternates
- `sand`: #D4C9B5 — borders, hairlines, dividers

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E2C98A — hover states, warm glow
- `gold-dark`: #A8854A — pressed states, deep accent

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6259 — secondary/muted text
- `cream`: #F5F0E8 — text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, captions

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-wide`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-widest uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink-muted font-manrope text-xs tracking-widest uppercase hover:text-gold transition-colors`

### Cards
- Product card: `bg-white overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-sand`
- Accent: `border-t border-gold/30`

### Transitions
- Default: `transition-all duration-300 ease-out`
- Slow: `transition-all duration-500 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers, never thick borders
- Serif for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold accent used sparingly for maximum impact
- Subtle hover states (scale, opacity, color shift)

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on buttons (sharp = premium)
- No drop shadows heavier than `shadow-md`
- No generic stock-photo vibes — editorial warmth only
- No cluttered layouts — breathe
- No blue links or default browser styles
