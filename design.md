# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text, borders

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `cream`: #FAF7F2 — card backgrounds, sections
- `linen`: #EDE8DF — subtle dividers, hover states

### Gold Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed state, deep accents

### Text
- `ink`: #1A1714 — primary body text on light
- `mist`: #7A7068 — secondary/muted text
- `ivory`: #FAF7F2 — text on dark backgrounds

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — `font-cormorant`
- **Body / UI**: Manrope (sans-serif) — `font-manrope`

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section headline: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant uppercase tracking-widest`
- Body: `text-sm font-manrope text-mist`
- Caption: `text-xs font-manrope tracking-wider uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-manrope hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase font-manrope hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ink text-xs tracking-widest uppercase font-manrope hover:text-gold transition-colors`

### Cards
- Product card: `bg-cream overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow`

### Dividers
- Hairline: `border-t border-linen`
- Gold accent line: `w-12 h-px bg-gold`

## Do's
- Use generous whitespace — let products breathe
- Large editorial imagery (full-bleed or 2/3 width)
- Thin, restrained borders (1px, linen color)
- Subtle hover transitions (200–300ms ease)
- UPPERCASE with wide tracking for product names and labels
- Serif for all emotional/brand copy
- Sans-serif for all functional UI (prices, buttons, nav links)

## Don'ts
- No bright/saturated colors
- No thick borders or heavy shadows
- No generic stock-photo vibes
- No crowded layouts
- No Comic Sans, Roboto, or system fonts for headings
- No discount-style badges (SALE!, 50% OFF in red)
