# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F7F3EE — primary light background
- `cream`: #EDE8E1 — secondary light surface, cards
- `linen`: #E0D9D0 — borders, hairlines

### Accent
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6460 — secondary/muted text
- `ivory`: #F7F3EE — primary text on dark backgrounds
- `ivory-muted`: #C4B9AE — secondary text on dark

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels):** Manrope — weights 300, 400, 500, 600

### Scale
- Display: `text-6xl` to `text-8xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl lg:text-6xl`, Cormorant Garamond, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, weight 400
- H3: `text-xl md:text-2xl`, Cormorant Garamond, weight 500
- Product Name: `text-lg md:text-xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Label/UI: `text-xs`, Manrope, weight 500–600, `tracking-wider uppercase`
- Price: `text-base md:text-lg`, Manrope, weight 500

## Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Card gap: `gap-4 md:gap-6 lg:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges
- Pill buttons: `rounded-full`

## Shadows
- Card hover: `shadow-md shadow-obsidian/10`
- Drawer: `shadow-2xl shadow-obsidian/20`

## Buttons
- **Primary (CTA):** `bg-gold text-obsidian hover:bg-gold-light` — solid, full-width on mobile
- **Outlined:** `border border-gold text-gold hover:bg-gold hover:text-obsidian`
- **Ghost:** `text-ink hover:text-gold` — nav links
- Padding: `px-8 py-3` for standard; `px-6 py-2.5` for small
- Font: Manrope, `text-xs tracking-widest uppercase font-semibold`
- Transition: `transition-all duration-300`

## Animations
- Hover image scale: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 → opacity-100 transition-opacity duration-500`
- Nav scroll: `bg-transparent → bg-obsidian transition-colors duration-300`
- Underline link: `after:scale-x-0 group-hover:after:scale-x-100 transition-transform`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Gold accent used sparingly — only for CTAs and key highlights
- Warm, dark backgrounds for hero/feature sections; light parchment for product grids

## Don'ts
- No bright/neon colors
- No rounded corners on images (keep editorial/square)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts — always breathe
- No more than 2 font families
