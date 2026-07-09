# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-ivory`: #F7F3EE — Warm off-white (primary light background)
- `velmora-cream`: #EDE8E0 — Warm cream (section alternates)

### Accent Colors
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, shimmer)
- `velmora-gold-dark`: #A07840 — Deep gold (pressed states)

### Text Colors
- `velmora-text`: #1A1714 — Primary text on light backgrounds
- `velmora-muted`: #7A6E65 — Muted/secondary text
- `velmora-subtle`: #B5ADA5 — Placeholder, captions

### UI Colors
- `velmora-border`: #DDD6CC — Hairline dividers
- `velmora-surface`: #FFFFFF — Card surfaces

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, navigation

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-widest uppercase`
- Nav: `font-manrope text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Components

### Buttons
- Primary: `bg-velmora-gold text-white px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-gold hover:text-white transition-colors`
- Ghost: `text-velmora-text font-manrope text-xs tracking-widest uppercase underline-offset-4 hover:underline`

### Cards
- Product card: `bg-white overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow`

### Dividers
- Hairline: `border-t border-velmora-border`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline borders, never thick borders
- Subtle hover transitions (200-300ms)
- Uppercase tracking-widest for labels and nav
- Serif for all headings and product names
- Gold accent used sparingly for maximum impact

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp or very subtle)
- No heavy drop shadows
- No generic stock photo aesthetics
- No crowded layouts
- No blue links
