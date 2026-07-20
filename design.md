# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark surface, footer
- `velmora-stone`: #3D3733 — card backgrounds, subtle surfaces

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — primary light background, page base
- `velmora-cream`: #FAF7F2 — card surfaces, hero overlay
- `velmora-sand`: #E8DFD0 — dividers, borders, muted surfaces

### Gold Accents
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover states, warm highlights
- `velmora-gold-muted`: #A8895A — secondary accent, icons

### Text
- `velmora-text-dark`: #1A1714 — primary text on light backgrounds
- `velmora-text-mid`: #5C5248 — secondary text, captions
- `velmora-text-light`: #F5F0E8 — text on dark backgrounds
- `velmora-text-muted`: #9C8E82 — placeholder, muted labels

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-2xl font-medium tracking-widest uppercase`
- Card Title: `font-cormorant text-lg font-medium tracking-widest uppercase`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm font-normal`
- UI Labels: `font-manrope text-xs font-medium tracking-wider uppercase`
- Nav Links: `font-manrope text-xs font-medium tracking-widest uppercase`
- Price: `font-manrope text-base font-semibold`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Hairline divider: `border-t border-velmora-sand`

## Borders & Shadows
- Hairline: `border border-velmora-sand`
- Card shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Soft glow: `shadow-[0_4px_24px_rgba(201,169,110,0.12)]`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text-mid font-manrope text-xs tracking-widest uppercase hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500 ease-out`
- Fade in: `opacity-0 animate-fadeIn`
- Subtle lift: `hover:-translate-y-0.5 transition-transform duration-200`

## Do's
- Use generous whitespace between sections
- Serif for all product names, headings, editorial text
- Gold accent sparingly — it should feel precious
- Thin hairline dividers between sections
- Large, full-bleed imagery
- Uppercase + wide letter-spacing for product names and UI labels

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No heavy drop shadows
- No generic stock photo vibes — warm, editorial, intimate
- No small cramped layouts
