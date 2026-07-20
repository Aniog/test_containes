# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #3D3935 — tertiary surface, borders

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE7DA — secondary light surface, cards
- `cream`: #FAF7F2 — lightest surface, hero overlay

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, darker gold

### Text
- `ink`: #1A1714 — primary text on light
- `mist`: #6B6560 — secondary/muted text
- `whisper`: #9C9490 — placeholder, disabled

### Utility
- `divider`: #E8E2D9 — hairline dividers

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest`
- Quote/Pull: `font-cormorant text-2xl italic font-light`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm leading-relaxed`
- UI Labels: `font-manrope text-xs uppercase tracking-widest`
- Nav Links: `font-manrope text-xs uppercase tracking-widest`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-divider` (1px, #E8E2D9)
- Thin: `border-2 border-gold`

## Shadows
- Card: `shadow-sm` with warm tint
- Elevated: `shadow-md`

## Buttons
- Primary (solid): `bg-gold text-cream font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-cream transition-colors`
- Ghost: `text-ink font-manrope text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
