# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F7F3EE — primary light background, page base
- `ivory`: #FDFAF6 — card backgrounds, hero overlay areas
- `linen`: #EDE8E1 — subtle section backgrounds, dividers

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions, labels
- `whisper`: #9E9189 — placeholder, disabled text

### Utility
- `divider`: #E2DDD7 — hairline borders, separators

## Typography

### Fonts
- **Serif (headings, product names, logo):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels):** Manrope — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, weight 400
- H3: `text-xl md:text-2xl`, Cormorant Garamond, weight 400
- Product Name: `text-xl md:text-2xl`, Cormorant Garamond, uppercase, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Label/UI: `text-xs`, Manrope, weight 500, `tracking-wider uppercase`
- Price: `text-lg`, Manrope, weight 500

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Components

### Buttons
- **Primary (solid):** `bg-gold text-ivory px-8 py-3 text-xs tracking-widest uppercase font-manrope font-500 hover:bg-gold-dark transition-colors duration-300`
- **Outlined:** `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-ivory transition-all duration-300`
- **Ghost/text:** `text-gold text-xs tracking-widest uppercase underline-offset-4 hover:underline`
- No border-radius on buttons (sharp, editorial feel) — `rounded-none`

### Cards
- Product card: white/ivory bg, no border, soft shadow on hover `shadow-sm hover:shadow-md`
- Transition: `transition-all duration-300`

### Dividers
- `border-t border-divider` — hairline, 1px

### Nav
- Transparent over hero, transitions to `bg-ivory/95 backdrop-blur-sm` on scroll
- Height: `h-16 md:h-20`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-bleed)
- Thin hairline dividers between sections
- Uppercase + wide tracking for product names and labels
- Warm gold accents sparingly — not everywhere
- Subtle hover transitions (200–300ms)

## Don'ts
- No rounded buttons (sharp edges only)
- No bright/saturated colors
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
- No Comic Sans, no system fonts for headings
