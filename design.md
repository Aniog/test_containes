# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — Deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: `#2C2825` — Secondary dark surface
- `velmora-ivory`: `#FAF7F2` — Primary light background (warm white)
- `velmora-cream`: `#F2EDE4` — Secondary light surface, cards

### Accent (Gold)
- `velmora-gold`: `#C9A96E` — Primary accent, CTAs, highlights
- `velmora-gold-light`: `#E8D5A3` — Hover states, subtle accents
- `velmora-gold-dark`: `#A07840` — Active states, deep gold

### Text
- `velmora-text`: `#1A1714` — Primary text on light backgrounds
- `velmora-muted`: `#6B6560` — Secondary/muted text
- `velmora-subtle`: `#9E9690` — Placeholder, captions

### UI
- `velmora-border`: `#E0D9D0` — Hairline dividers, borders
- `velmora-surface`: `#FFFFFF` — Pure white cards

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Prices: `text-base font-medium` (Manrope 500)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-border` (1px)
- Divider: `h-px bg-velmora-border`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text text-xs tracking-widest uppercase underline-offset-4 hover:underline`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fade-in`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold accents sparingly — they should feel precious
- Serif for all headings, product names, quotes
- Sans-serif for all body copy, prices, UI labels

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic stock-photo vibes — editorial only
- No cluttered layouts — breathe
- No dark text on dark backgrounds
- No light text on light backgrounds
