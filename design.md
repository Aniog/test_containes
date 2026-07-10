# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav, footer
- `velmora-charcoal`: #2C2825 — secondary dark surface
- `velmora-stone`: #4A4540 — muted text on dark
- `velmora-linen`: #F5F0E8 — primary light background
- `velmora-cream`: #FAF7F2 — card/section backgrounds
- `velmora-ivory`: #FFFDF9 — pure light surface

### Accent (Gold)
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #E2C98A — hover states, subtle accents
- `velmora-gold-dark`: #A8854A — pressed states, borders

### Text
- `velmora-text-dark`: #1A1714 — body on light backgrounds
- `velmora-text-mid`: #5C5550 — secondary text
- `velmora-text-muted`: #9C9490 — captions, placeholders
- `velmora-text-light`: #F5F0E8 — text on dark backgrounds

## Typography

### Fonts
- **Serif (headings, product names)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI)**: Manrope — clean, modern

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Nav Link: `font-manrope text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost (dark bg): `border border-velmora-text-light text-velmora-text-light font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-velmora-text-light hover:text-velmora-obsidian transition-all duration-300`

### Cards
- Product card: `bg-velmora-cream overflow-hidden group cursor-pointer`
- Hover: `shadow-lg` on image, second image crossfade

### Dividers
- Hairline: `border-t border-velmora-gold/20`
- Section: `border-t border-velmora-linen`

### Shadows
- Soft: `shadow-[0_4px_24px_rgba(26,23,20,0.08)]`
- Card hover: `shadow-[0_8px_40px_rgba(26,23,20,0.14)]`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers, never thick borders
- Gold accents sparingly — they should feel precious
- Uppercase + wide tracking for product names and labels
- Serif for anything emotional/editorial, sans for functional UI

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on buttons (sharp = premium)
- No drop shadows that feel heavy or cheap
- No generic stock photo vibes — warm, intimate, editorial
- No cluttered layouts — breathe
