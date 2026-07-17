# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.
Deep warm charcoal base with champagne gold accents. Generous whitespace. Restrained.

## Color Palette
- `velvet` (#1C1814) — primary text, near-black warm base
- `obsidian` (#2A2420) — card/surface dark, nav solid
- `mink` (#3D3530) — borders, hairline dividers
- `stone` (#7A6E68) — muted/secondary text
- `parchment` (#F5F0E8) — section backgrounds (off-white)
- `cream` (#FAF7F2) — page background, lightest surface
- `champagne` (#C9A96E) — PRIMARY accent (gold), CTAs, highlights
- `gold` (#B8924A) — deeper gold, hover states
- `blush` (#E8D5B7) — soft warm highlight, badges

## Typography
- **Headings / Product names**: `font-serif` = Cormorant Garamond (elegant, editorial)
  - Hero headline: `text-5xl md:text-7xl font-light italic`
  - Section headings: `text-4xl md:text-5xl font-light`
  - Product names: `text-sm tracking-widest2 uppercase font-serif`
- **Body / UI**: `font-sans` = Manrope
  - Body: `text-sm font-normal text-stone`
  - Labels: `text-xs tracking-widest3 uppercase text-stone`
  - Prices: `text-base font-semibold text-velvet`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Buttons
- Primary: `btn-primary` — champagne bg, velvet text, uppercase, wide tracking
- Outline: `btn-outline` — champagne border, champagne text → fills on hover
- Dark: `btn-dark` — velvet bg, cream text

## Borders & Dividers
- Hairline: `border-t border-mink/40` (very subtle)
- Card borders: `border border-mink/20`

## Shadows
- Subtle: `shadow-sm`
- Card hover: `shadow-xl`

## Animations
- Duration: 300–500ms
- Easing: `ease-luxury` (cubic-bezier 0.25, 0.46, 0.45, 0.94)
- Hover: `-translate-y-1`, `shadow-xl`, opacity transitions

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE with wide letter-spacing
- Use italic serif for editorial/hero text
- Thin hairline dividers between sections
- Warm, dark backgrounds for hero/newsletter sections

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp = premium)
- No generic blue links
- No crowded layouts
- No bold/heavy serif weights (use light/regular)
