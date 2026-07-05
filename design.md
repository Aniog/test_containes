# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `cream`: #FAF7F2 — card backgrounds, section alternates

### Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — hover states, subtle tints
- `gold-dark`: #A07840 — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B5E52 — secondary text, captions, metadata
- `whisper`: #9E8E7E — placeholder, disabled text

### UI
- `divider`: #E8E0D4 — hairline borders, separators
- `overlay`: rgba(26,23,20,0.55) — image overlays

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Manrope (body, UI, navigation, labels)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-gold text-obsidian font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Outlined: `border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink font-manrope text-xs tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300`

### Cards
- Product card: `bg-cream overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-divider`
- Accent: `border-t border-gold/30`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Subtle hover transitions (300ms ease)
- Uppercase tracking-wide for product names and labels
- Warm tones throughout — avoid cold blues/grays

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic stock-photo vibes — editorial warmth only
- No cluttered layouts — restraint is luxury
