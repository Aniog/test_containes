# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #3D3835 — muted dark surface

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background, page base
- `cream`: #FAF7F2 — card backgrounds, hero overlay
- `linen`: #EDE8DF — subtle dividers, hover states

### Gold Accents
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `mist`: #6B6460 — secondary/muted text
- `whisper`: #9C9490 — placeholder, disabled

### Semantic
- `success`: #4A7C59
- `error`: #8B3A3A

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- `text-xs`: 0.75rem — labels, badges
- `text-sm`: 0.875rem — body small, captions
- `text-base`: 1rem — body default
- `text-lg`: 1.125rem — body large
- `text-xl`: 1.25rem — subheadings
- `text-2xl`: 1.5rem — section headings small
- `text-3xl`: 1.875rem — section headings
- `text-4xl`: 2.25rem — page headings
- `text-5xl`: 3rem — hero headings
- `text-6xl`: 3.75rem — hero large
- `text-7xl`: 4.5rem — hero XL

### Product Names
Always: `font-cormorant uppercase tracking-[0.15em] font-medium`

### Section Headings
`font-cormorant text-3xl md:text-4xl font-light tracking-wide text-ink`

## Spacing
Generous whitespace. Section padding: `py-16 md:py-24 lg:py-32`
Container: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: none (use shadow or background contrast)
- Radius: `rounded-none` for editorial feel, `rounded-sm` for buttons/pills

## Shadows
- Subtle: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`
- Card hover: `shadow-[0_8px_40px_rgba(26,23,20,0.12)]`

## Buttons
### Primary (Gold filled)
`bg-gold text-cream font-manrope text-sm font-medium tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`

### Secondary (Outlined)
`border border-ink text-ink font-manrope text-sm font-medium tracking-[0.1em] uppercase px-8 py-3.5 hover:bg-ink hover:text-cream transition-colors duration-300`

### Ghost
`text-gold font-manrope text-sm font-medium tracking-[0.08em] uppercase hover:text-gold-dark transition-colors duration-300`

## Animations
- Hover transitions: `duration-300 ease-out`
- Page transitions: `duration-500 ease-in-out`
- Image zoom on hover: `scale-105 duration-700 ease-out`
- Fade in: `opacity-0 → opacity-100 duration-500`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use Manrope for all body copy, labels, navigation
- Keep product names UPPERCASE with wide letter-spacing
- Use generous whitespace between sections
- Use gold accent sparingly — it should feel precious
- Hairline borders only (1px)
- Warm-toned imagery backgrounds

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial elements
- No heavy drop shadows
- No generic sans-serif headings
- No discount-style pricing (no red, no "SALE!" banners)
- No cluttered layouts
