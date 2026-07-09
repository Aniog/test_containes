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
- `whisper`: #9E9590 — placeholder, disabled

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
- `text-base`: 1rem — body
- `text-lg`: 1.125rem — body large
- `text-xl`: 1.25rem — subheadings
- `text-2xl`: 1.5rem — section headings small
- `text-3xl`: 1.875rem — section headings
- `text-4xl`: 2.25rem — page headings
- `text-5xl`: 3rem — hero headings
- `text-6xl`: 3.75rem — hero display
- `text-7xl`: 4.5rem — hero display large

### Product Names
Always: `font-serif uppercase tracking-[0.15em]` — e.g. `VIVID AURA JEWELS`

### Section Headings
`font-serif font-light tracking-wide` — e.g. "Bestsellers"

## Spacing
Generous whitespace. Section padding: `py-20 md:py-28`. Container: `max-w-7xl mx-auto px-6 md:px-10`.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: none (use shadow instead)
- Subtle shadow: `shadow-sm` with warm tint

## Buttons

### Primary (CTA)
`bg-gold text-cream font-sans font-medium tracking-widest uppercase text-xs px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`

### Secondary (Outlined)
`border border-gold text-gold font-sans font-medium tracking-widest uppercase text-xs px-8 py-3.5 hover:bg-gold hover:text-cream transition-all duration-300`

### Ghost
`text-ink font-sans font-medium tracking-widest uppercase text-xs hover:text-gold transition-colors duration-300`

## Animations
- Hover transitions: `duration-300 ease-out`
- Image hover: `scale-105 duration-500`
- Nav scroll: opacity + background transition `duration-200`
- Cart drawer: slide-in from right `translate-x-full → translate-x-0`

## Do's
- Use `font-serif` for all headings, product names, editorial text
- Use `font-sans` for all UI elements, prices, labels, body copy
- Keep gold accents restrained — use for CTAs and key highlights only
- Generous padding around all content
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide tracking

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp or very subtle `rounded-none` or `rounded-sm`)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
