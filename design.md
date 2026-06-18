# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F7F3EE — primary light background, page base
- `ivory`: #FDFAF6 — card backgrounds, hero overlay
- `linen`: #EDE8E1 — subtle section backgrounds, dividers

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #6B6259 — secondary text, captions
- `ghost`: #9E9189 — placeholder, disabled

### Semantic
- `star`: #D4A843 — star ratings

## Typography

### Fonts
- Headings / Product names: `Cormorant Garamond` (serif) — weights 300, 400, 500, 600
- Body / UI: `Manrope` (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-normal`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid): `bg-gold text-ivory font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-ink font-manrope text-xs tracking-wider uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights
- Warm neutral backgrounds (parchment, ivory, linen)

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No bold/heavy serif weights (keep it light and refined)
