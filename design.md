# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1614 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2420 — secondary dark, footer
- `velmora-stone`: #3D3530 — muted dark surfaces

### Warm Neutrals
- `velmora-cream`: #FAF7F2 — primary light background
- `velmora-linen`: #F2EDE4 — section alternates, cards
- `velmora-sand`: #E8DFD0 — borders, dividers, subtle fills

### Gold Accents
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover states, warm glow
- `velmora-gold-muted`: #A8895A — secondary accent, icons

### Text
- `velmora-text-dark`: #1A1614 — headings on light bg
- `velmora-text-mid`: #5C4F45 — body on light bg
- `velmora-text-light`: #FAF7F2 — text on dark bg
- `velmora-text-muted`: #9C8B7E — captions, metadata

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Nav: `font-manrope text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-6 lg:gap-8`

## Components

### Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost (dark bg): `border border-velmora-text-light text-velmora-text-light font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-text-light hover:text-velmora-obsidian transition-all duration-300`

### Cards
- Product card: `bg-velmora-cream overflow-hidden group cursor-pointer`
- Hover: `shadow-lg` on image, second image crossfade

### Dividers
- Hairline: `border-t border-velmora-sand`
- Gold accent: `border-t border-velmora-gold/30`

### Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Wide letter-spacing on product names and nav labels
- Generous whitespace — let the jewelry breathe
- Warm gold (#C9A96E) as the single accent color
- Thin hairline borders (1px) for dividers
- Soft shadows, never harsh drop shadows

## Don'ts
- No bright/neon colors
- No rounded corners on buttons (sharp edges feel more premium)
- No heavy font weights for headings (light/regular only)
- No busy backgrounds or patterns
- No generic e-commerce blue/green CTAs
