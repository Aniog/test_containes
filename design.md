# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #4A4540 — Warm mid-tone (borders, dividers)
- `velmora-ash`: #8C8480 — Muted warm gray (secondary text, captions)

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE8DE — Slightly deeper cream (section alternates)
- `velmora-sand`: #D4C9B8 — Warm sand (subtle borders on light bg)

### Gold Accent
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm leading-relaxed`
- Caption: `font-inter text-xs tracking-widest uppercase`
- Price: `font-inter text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-sand` (on light bg) or `border border-velmora-stone` (on dark bg)
- Divider: `h-px bg-velmora-sand` or `h-px bg-velmora-stone`

## Shadows
- Card: `shadow-[0_2px_20px_rgba(0,0,0,0.06)]`
- Elevated: `shadow-[0_8px_40px_rgba(0,0,0,0.12)]`

## Buttons
- Primary (accent): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium transition-all duration-300`
- Ghost dark: `text-velmora-ash hover:text-velmora-gold text-xs tracking-widest uppercase transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all display text, product names, quotes
- Wide letter-spacing on all uppercase labels
- Generous whitespace between sections
- Warm gold (#C9A96E) as the ONLY accent color
- Hairline borders, never thick borders
- Soft, warm image overlays

## Don'ts
- No bright whites (#FFFFFF) — use warm linen (#F5F0E8) instead
- No cool grays — always warm-toned
- No thick borders or heavy shadows
- No bright/saturated colors other than gold
- No generic e-commerce button styles
