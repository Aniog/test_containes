# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #4A4540 — Warm mid-tone (borders, dividers)
- `velmora-ash`: #8C8480 — Muted warm gray (secondary text, captions)

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE8DF — Slightly deeper warm white (card surfaces)
- `velmora-sand`: #D4C9B8 — Warm sand (subtle borders on light bg)

### Gold Accent
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

## Typography

### Headings — Cormorant Garamond (serif)
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide`
- Section titles: `text-3xl md:text-4xl font-light tracking-wide`
- Product names: `text-xl font-normal uppercase tracking-widest` (UPPERCASE, wide spacing)

### Body — Inter (sans-serif)
- Body text: `text-base font-normal leading-relaxed`
- UI labels: `text-sm font-medium tracking-wide`
- Captions: `text-xs font-normal tracking-wider uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-sand` (on light bg) or `border-t border-velmora-stone` (on dark bg)
- Card border: `border border-velmora-sand`

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/30`

## Buttons
- Primary (accent): `bg-velmora-gold text-velmora-obsidian font-medium tracking-widest uppercase text-sm px-8 py-3 hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-ash hover:text-velmora-obsidian transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers, never thick borders
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights

## Don'ts
- No bright/saturated colors other than gold
- No thick drop shadows
- No rounded corners on images (keep them square/rectangular)
- No generic sans-serif headings
- No discount-style pricing (no red sale tags)
