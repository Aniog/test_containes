# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest background, card surfaces
- `linen`: #EDE8DF — subtle dividers, borders

### Accent / Gold
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deeper gold

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions
- `whisper`: #9E9189 — placeholder, tertiary text

### Semantic
- All text on dark backgrounds: parchment (#F5F0E8) or cream (#FAF7F2)
- All text on light backgrounds: ink (#1A1714) or muted (#6B6259)
- Never use white text on gold — use obsidian instead
- Never use dark text on obsidian without sufficient contrast

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Manrope (body, UI, labels, captions)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid gold): `bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink font-manrope text-xs uppercase tracking-[0.1em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm, muted tones — avoid pure white or pure black

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial)
- No generic e-commerce blue CTAs
- No tight spacing or cluttered layouts
- No bold/heavy serif weights (keep it light and elegant)
