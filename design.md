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
- `parchment`: #F5F0E8 — page background, light sections
- `cream`: #FAF7F2 — card backgrounds, hero overlay
- `linen`: #EDE8DF — dividers, subtle backgrounds

### Gold Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm accents
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light
- `mist`: #8C8480 — secondary/muted text
- `ivory`: #FAF7F2 — text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm leading-relaxed`
- UI Labels: `font-manrope text-xs uppercase tracking-widest`
- Prices: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `border-gold/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Buttons
- Primary (solid): `bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-manrope hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-gold text-xs uppercase tracking-widest underline-offset-4 hover:underline`

## Shadows
- Card hover: `shadow-lg shadow-obsidian/10`
- Drawer: `shadow-2xl shadow-obsidian/30`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]`
- Fade in: `opacity-0 → opacity-100 duration-500`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and UI labels
- Generous whitespace between sections
- Warm gold (#C9A96E) as the single accent color
- Hairline borders, never thick borders
- Soft hover transitions on all interactive elements

## Don'ts
- No bright whites (#FFFFFF) — use cream/parchment instead
- No blue or cool-toned accents
- No rounded corners on editorial image containers
- No heavy drop shadows
- No generic e-commerce button styles (no blue, no green)
