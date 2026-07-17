# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE7DA — card backgrounds, section alternates
- `sand`: #D4C9B5 — borders, hairlines, dividers

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E2C98A — hover states, shimmer
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
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl md:text-6xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-widest uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-gold text-obsidian px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ink-muted hover:text-gold font-manrope text-xs tracking-widest uppercase transition-colors`

### Cards
- Product card: `bg-linen overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow`

### Dividers
- Hairline: `border-t border-sand`
- Accent: `border-t border-gold/30`

### Animations
- Hover scale: `transition-transform duration-500 group-hover:scale-105`
- Fade in: `transition-opacity duration-300`
- Slide up: `transition-all duration-500 ease-out`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase tracking-widest for labels and captions
- Cormorant Garamond for all headings and product names
- Gold accent used sparingly — not everywhere

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No heavy drop shadows
- No generic stock-photo vibes
- No crowded layouts
- No blue links
