# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: `#2C2825` — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: `#3D3733` — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: `#F5F0E8` — Warm off-white (page background, light sections)
- `velmora-cream`: `#EDE8DC` — Warm cream (card backgrounds, alternating sections)
- `velmora-sand`: `#D4C9B0` — Warm sand (muted text on light, subtle borders)

### Accent — Gold
- `velmora-gold`: `#C9A96E` — Primary gold accent (CTAs, highlights, icons)
- `velmora-gold-light`: `#E2C98A` — Light gold (hover states, shimmer)
- `velmora-gold-dark`: `#A8854A` — Dark gold (pressed states, deep accents)

### Text
- `velmora-text-dark`: `#1A1714` — Primary text on light backgrounds
- `velmora-text-mid`: `#5C5248` — Secondary text, captions
- `velmora-text-muted`: `#8C7E72` — Muted text, placeholders
- `velmora-text-light`: `#F5F0E8` — Text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-6xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- H3: `font-cormorant text-2xl md:text-3xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Nav Link: `font-manrope text-xs uppercase tracking-[0.12em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs text-velmora-text-muted`
- Price: `font-manrope text-lg font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-sand/30`
- Card border: `border border-velmora-sand/20`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for subtle softness

## Shadows
- Card hover: `shadow-[0_8px_40px_rgba(201,169,110,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.3)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-4 hover:bg-velmora-gold-light transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text-mid hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`
- Underline: `after:w-0 hover:after:w-full after:transition-all after:duration-300`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and nav
- Warm gold accents sparingly — they should feel precious
- Soft, warm image overlays (rgba warm tones)

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded pill buttons (keep them sharp/minimal)
- No generic stock photo vibes — editorial warmth only
- No cluttered layouts — breathe
