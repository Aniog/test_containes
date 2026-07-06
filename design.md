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
- **Charcoal** `#2D2926` — body text on light backgrounds
- **Divider** `#E2D9CC` — hairline borders, separators

## Typography
- **Serif** — Cormorant Garamond (headings, product names, editorial text)
  - Display: 64–80px, weight 300–400, tracking normal
  - H1: 48–56px, weight 300
  - H2: 36–42px, weight 400
  - H3: 24–28px, weight 500
- **Sans** — Manrope (body, UI, labels, nav links)
  - Body: 15–16px, weight 400
  - Small/Label: 12–13px, weight 500, tracking wide
  - Nav: 13px, weight 500, tracking widest (uppercase)
- **Product names**: UPPERCASE, letter-spacing: 0.15em, serif

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6 md:px-10`
- Card gap: `gap-6 md:gap-8`
- Hairline divider: `border-t border-divider`

## Buttons
- **Primary (Accent)**: `bg-champagne text-obsidian px-8 py-3.5 text-xs tracking-widest uppercase font-semibold hover:bg-champagne-dark transition-colors`
- **Outlined**: `border border-champagne text-champagne px-8 py-3.5 text-xs tracking-widest uppercase hover:bg-champagne hover:text-obsidian transition-colors`
- **Ghost**: `text-charcoal text-xs tracking-widest uppercase underline-offset-4 hover:underline`

## Shadows
- Card hover: `shadow-lg shadow-obsidian/10`
- Drawer: `shadow-2xl shadow-obsidian/20`

## Transitions
- Default: `transition-all duration-300 ease-out`
- Hover image: `scale-105 duration-500`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use generous whitespace — sections breathe
- Champagne accent only for key CTAs and highlights
- Thin hairline dividers (1px, divider color)
- Product names always UPPERCASE with wide tracking

## Don'ts
- No bright whites (#FFFFFF) — use Parchment/Ivory instead
- No generic blue links
- No heavy drop shadows
- No crowded layouts
- No discount-looking elements (no red sale badges, no flashing)
