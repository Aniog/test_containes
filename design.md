# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount, NOT generic.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text, borders

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE8DF — card backgrounds, section alternates
- `cream`: #FAF7F2 — lightest surface

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter gold
- `gold-dark`: #A8854A — pressed states, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `mist`: #8C8480 — secondary/muted text
- `ivory`: #F5F0E8 — text on dark backgrounds

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — weight 300, 400, 600
- Body/UI: "Manrope" (sans-serif) — weight 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, font-light, tracking-wide
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, font-light
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, font-light
- H3: `text-xl md:text-2xl`, Cormorant Garamond, font-normal
- Product Name: `text-lg md:text-xl`, Cormorant Garamond, uppercase, tracking-widest
- Body: `text-sm md:text-base`, Manrope, font-light, leading-relaxed
- Caption/Label: `text-xs`, Manrope, uppercase, tracking-widest

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-stone/20`
- Card border: `border border-stone/15`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-lg shadow-obsidian/8`
- Drawer: `shadow-2xl shadow-obsidian/20`

## Buttons
- Primary (CTA): bg-gold text-obsidian, uppercase tracking-widest text-xs font-medium, px-8 py-3.5, hover:bg-gold-light transition
- Outlined: border border-gold text-gold, same sizing, hover:bg-gold hover:text-obsidian
- Ghost: text-ink underline-offset-4 hover:underline

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Drawer slide: `translate-x-full` → `translate-x-0`
- Fade in: `opacity-0` → `opacity-100`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide tracking for product names and labels
- Warm gold tones for all accents

## Don'ts
- No bright/saturated colors
- No rounded corners on hero images or editorial tiles
- No generic blue links
- No heavy drop shadows
- No busy patterns or textures
