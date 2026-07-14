# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #4A4440 — Warm mid-tone (borders, dividers)
- `velmora-ash`: #8A7F78 — Muted warm gray (secondary text, captions)

### Warm Neutrals
- `velmora-linen`: #F5F0EA — Warm off-white (light section backgrounds)
- `velmora-cream`: #FAF7F2 — Near-white (page background, cards)
- `velmora-sand`: #E8DDD0 — Warm sand (trust bar, subtle fills)

### Gold Accent
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

### Text
- `velmora-text-primary`: #1A1714 — Primary text on light backgrounds
- `velmora-text-secondary`: #4A4440 — Secondary text
- `velmora-text-muted`: #8A7F78 — Muted/caption text
- `velmora-text-inverse`: #FAF7F2 — Text on dark backgrounds

## Typography

### Fonts
- **Serif (headings, product names, brand)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI, labels)**: Inter — clean, readable

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-inter text-base text-velmora-text-secondary`
- Caption: `font-inter text-sm text-velmora-text-muted`
- Label/UI: `font-inter text-xs uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-sand` (1px)
- Card border: `border border-velmora-sand`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for subtle softness

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/30`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light px-8 py-3 font-inter text-xs uppercase tracking-widest transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian px-8 py-3 font-inter text-xs uppercase tracking-widest transition-all duration-300`
- Ghost: `text-velmora-text-secondary hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and labels
- Warm gold accents sparingly — they should feel precious
- Serif for anything emotional/brand; sans for functional UI

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No generic stock-photo vibes — warm, editorial, intimate
- No cluttered layouts — breathe
- No white backgrounds with black text only — always warm tones
