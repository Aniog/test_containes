# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `cream`: `#faf8f5` — page background (warm white)
- `parchment`: `#f2ede4` — section backgrounds, cards
- `linen`: `#e8e0d4` — borders, dividers (hairline)
- `espresso`: `#1c1814` — primary text, dark backgrounds
- `bark`: `#4a3f36` — secondary text, muted labels
- `stone`: `#8a7a6e` — placeholder, tertiary text

### Accent
- `gold`: `#b8935a` — primary accent (CTA buttons, highlights)
- `gold-light`: `#d4b07a` — hover states, lighter gold
- `gold-pale`: `#f0e4cc` — very light gold tint for backgrounds

### Semantic
- Background: `cream` (#faf8f5)
- Text: `espresso` (#1c1814)
- Accent: `gold` (#b8935a)
- Border: `linen` (#e8e0d4)

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Manrope (body, UI, labels, buttons)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-widest`
- Caption: `font-manrope text-xs text-stone`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-cream font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-espresso text-espresso font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-espresso hover:text-cream transition-colors`
- Ghost: `text-espresso font-manrope text-xs uppercase tracking-widest underline-offset-4 hover:underline`

### Cards
- Product card: `bg-cream border border-linen shadow-none hover:shadow-md transition-shadow`
- Rounded: `rounded-none` (sharp corners for editorial feel)

### Dividers
- `border-t border-linen` (hairline)

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Serif for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Subtle hover transitions (150–200ms)
- Thin 1px borders only

## Don'ts
- No rounded pill buttons (use sharp or very slightly rounded)
- No bright/saturated colors
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
