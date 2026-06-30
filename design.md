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
- `ivory`: #F5F0E8 — text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
  - `font-serif` → `'Cormorant Garamond', Georgia, serif`
- **Sans**: Manrope — body, UI, labels, navigation
  - `font-sans` → `'Manrope', Inter, system-ui, sans-serif`

### Scale
- Display: `text-6xl` / `text-7xl` — hero headlines (Cormorant)
- H1: `text-4xl` / `text-5xl` — page titles (Cormorant)
- H2: `text-3xl` — section headings (Cormorant)
- H3: `text-xl` — product names (Cormorant, uppercase, tracking-widest)
- Body: `text-sm` / `text-base` — Manrope
- Label: `text-xs` tracking-widest uppercase — Manrope

### Product Names
Always: `font-serif uppercase tracking-widest text-ink`

## Spacing
- Section padding: `py-20` / `py-24` on desktop, `py-12` on mobile
- Container: `max-w-7xl mx-auto px-6 lg:px-12`
- Card gap: `gap-6` / `gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `border-stone/20`
- Divider: `h-px bg-linen` or `bg-stone/20`

## Shadows
- Card: `shadow-sm` with `hover:shadow-md transition-shadow`
- Drawer: `shadow-2xl`

## Buttons

### Primary (Accent)
`bg-gold text-obsidian font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors`

### Outlined
`border border-gold text-gold font-sans text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-colors`

### Ghost
`text-ink font-sans text-xs tracking-widest uppercase hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 → opacity-100 transition-opacity duration-500`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-300`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Restrained use of gold accent (not everywhere)
- Serif for all headings and product names
- Sans for all body copy, labels, navigation

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic stock photo aesthetics
- No cluttered layouts
- No more than 2 font families
