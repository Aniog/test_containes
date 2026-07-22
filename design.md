# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — primary light background, page base
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `linen`: #EDE8DF — subtle dividers, borders

### Accent / Brand
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #E2C98A — hover states, warm highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions, metadata
- `whisper`: #9E9189 — placeholder, disabled text

### Semantic
- `surface`: #FFFFFF — card surfaces
- `border`: #E0D9CF — hairline dividers

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — weights 300, 400, 500, 600, 700
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide` — hero headlines
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- H3: `font-cormorant text-2xl font-normal`
- Product Name: `font-cormorant text-xl font-medium tracking-[0.15em] uppercase`
- Body: `font-manrope text-sm font-normal leading-relaxed`
- Caption: `font-manrope text-xs font-light tracking-wide`
- Label/UI: `font-manrope text-xs font-medium tracking-[0.1em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `border-[#E0D9CF]`
- Radius: `rounded-none` for editorial cards, `rounded-sm` for buttons/pills

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.15)]`

## Buttons
- Primary (solid): `bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink font-manrope text-xs tracking-[0.1em] uppercase hover:text-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for CTAs and key highlights
- Warm, neutral backgrounds (parchment/cream) for most sections

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on editorial image cards
- No generic sans-serif for headings
- No discount-style badges (SALE!, 50% OFF in red)
- No cluttered layouts — always breathe
