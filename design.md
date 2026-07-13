# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark, card backgrounds
- `velmora-stone`: #3D3830 — borders, dividers

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — light page background, section fills
- `velmora-cream`: #FAF7F2 — card backgrounds, hero overlay
- `velmora-sand`: #E8DFD0 — subtle fills, trust bar

### Gold Accents
- `velmora-gold`: #C9A96E — primary accent, CTA buttons, highlights
- `velmora-gold-light`: #DFC08A — hover states, shimmer
- `velmora-gold-muted`: #A8895A — secondary accent, borders

### Text
- `velmora-text-primary`: #1A1714 — headings on light bg
- `velmora-text-secondary`: #5C5248 — body text, descriptions
- `velmora-text-muted`: #8C7E72 — captions, metadata
- `velmora-text-inverse`: #FAF7F2 — text on dark backgrounds

## Typography

### Fonts
- Headings / Product Names: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-6xl` to `text-8xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl lg:text-6xl`, Cormorant Garamond
- H2: `text-3xl md:text-4xl`, Cormorant Garamond
- H3: `text-xl md:text-2xl`, Cormorant Garamond
- Product Name: `text-xl tracking-[0.2em] uppercase`, Cormorant Garamond
- Body: `text-sm md:text-base`, Manrope
- Caption: `text-xs tracking-widest uppercase`, Manrope

## Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Card gap: `gap-4 md:gap-6 lg:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-stone/30` (1px)
- Card border: `border border-velmora-sand`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.2)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian tracking-widest uppercase text-xs font-semibold px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold tracking-widest uppercase text-xs px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text-secondary hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`
- Underline slide: `after:w-0 hover:after:w-full after:transition-all after:duration-300`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold tones for all accents
- Serif for all emotional/brand copy

## Don'ts
- No bright/saturated colors
- No rounded corners on hero images or editorial tiles
- No generic blue links
- No heavy drop shadows
- No Comic Sans, Roboto, or system fonts for headings
