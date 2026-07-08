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
- `parchment`: #F5F0E8 — primary light background, page base
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `linen`: #EDE8DF — subtle dividers, hover states

### Gold Accent (brand identity)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active state

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `mist`: #8C8480 — secondary/muted text
- `ivory`: #F5F0E8 — text on dark backgrounds

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
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
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.15)]`

## Buttons
- Primary (CTA): `bg-gold text-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ink font-manrope text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accents sparingly — only for CTAs and key highlights

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on images (keep editorial/square)
- No heavy drop shadows
- No generic sans-serif headings
- No cluttered layouts
