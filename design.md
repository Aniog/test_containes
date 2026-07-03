# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.

## Color Palette
- **Obsidian** `#1A1714` — primary dark background, nav solid state
- **Parchment** `#F5F0E8` — warm off-white, page background, card surfaces
- **Champagne** `#C9A96E` — primary accent, CTAs, highlights (warm gold)
- **Champagne Light** `#E8D5A3` — hover states, subtle tints
- **Champagne Dark** `#A07840` — pressed states, borders
- **Warm Stone** `#8C7B6B` — secondary text, muted labels
- **Ivory** `#FAF7F2` — lightest surface, hero overlay
- **Charcoal** `#3D3530` — body text on light backgrounds
- **Divider** `#E2D9CC` — hairline borders, separators

## Typography
- **Serif** — Cormorant Garamond (headings, product names, editorial text)
  - H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
  - H2: `font-cormorant text-3xl md:text-5xl font-light tracking-wide`
  - H3: `font-cormorant text-2xl font-light`
  - Product names: `font-cormorant text-xl uppercase tracking-[0.15em]`
- **Sans** — Manrope (body, UI, labels, prices)
  - Body: `font-manrope text-sm text-charcoal`
  - Label: `font-manrope text-xs uppercase tracking-widest`
  - Price: `font-manrope text-lg font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Buttons
- Primary (filled): `bg-champagne text-obsidian hover:bg-champagne-dark px-8 py-3 text-xs uppercase tracking-widest font-manrope transition-all duration-300`
- Secondary (outlined): `border border-champagne text-champagne hover:bg-champagne hover:text-obsidian px-8 py-3 text-xs uppercase tracking-widest`
- Ghost: `text-charcoal hover:text-champagne text-xs uppercase tracking-widest`

## Cards
- Product card: `bg-ivory rounded-none overflow-hidden group`
- Hover: `shadow-lg` on image, second image crossfade
- No rounded corners on product cards (editorial feel)

## Dividers
- `border-t border-divider` — hairline horizontal rule
- `w-12 h-px bg-champagne mx-auto` — decorative accent line

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Serif for all headings and product names
- Champagne gold as the ONLY accent color
- Thin hairline dividers, never thick borders
- Uppercase + wide letter-spacing for labels and product names

## Don'ts
- No rounded pill buttons (use square/minimal radius)
- No bright whites — use parchment/ivory instead
- No blue links — use champagne or charcoal
- No drop shadows on text
- No generic e-commerce blue/green CTAs
