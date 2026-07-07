# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic marketplace cues. Every surface should feel like a jewelry box interior: soft, refined, and confident.

## Color Palette

### Primary Neutrals
- `--velmora-cream`: `#F8F5F2` — Primary page background. Warm ivory with a hint of rose.
- `--velmora-stone`: `#EFEBE6` — Section alternates, cards, subtle surfaces.
- `--velmora-espresso`: `#2C241F` — Primary text, dark UI, footer. Deep warm brown.
- `--velmora-espresso-light`: `#4A3F38` — Secondary text, hover states.

### Accents
- `--velmora-gold`: `#C5A065` — Primary accent: buttons, links, stars, highlights. Muted champagne gold.
- `--velmora-gold-dark`: `#A98652` — Hover / active gold.
- `--velmora-rose-gold`: `#C9A08B` — Secondary accent for variant toggles / soft emphasis.

### Functional
- `--velmora-border`: `#E0D9D2` — Hairline dividers, card borders.
- `--velmora-muted`: `#8A817C` — Captions, placeholders, disabled text.
- `--velmora-white`: `#FFFFFF` — Cards, modal/drawer surfaces.

## Typography

### Fonts
- **Headings / product names**: `Cormorant Garamond`, serif. Elegant, high-contrast, editorial.
- **Body / UI**: `Inter`, sans-serif. Clean, modern, highly legible.

### Scale
- Hero headline: `text-4xl md:text-6xl lg:text-7xl`, font-serif, font-medium, leading-tight.
- Section headlines: `text-3xl md:text-4xl`, font-serif.
- Product names: `text-sm tracking-[0.2em] uppercase`, font-serif.
- Body: `text-sm md:text-base`, font-sans, text-espresso.
- Caption / UI: `text-xs tracking-wide uppercase`, font-sans.

## Spacing & Layout
- Page horizontal padding: `px-5 md:px-8 lg:px-12`.
- Section vertical spacing: `py-16 md:py-24`.
- Max content width: `max-w-7xl mx-auto`.
- Generous whitespace; avoid crowding. Editorial feel depends on breathing room.

## Components

### Buttons
- **Primary / accent**: solid gold background (`bg-velmora-gold`), espresso text, uppercase tracking-wide, no border-radius (square), hover `bg-velmora-gold-dark`.
- **Secondary / outline**: transparent background, `border border-velmora-espresso`, espresso text, hover `bg-velmora-espresso text-white`.
- **Ghost**: no border, espresso text, hover text-velmora-gold.

### Dividers
- Hairline: `h-px bg-velmora-border`.

### Cards
- Product card: no border, subtle shadow on hover (`shadow-md`), image aspect `3x4` or `4x5`.
- UGC card: vertical `9x16`, rounded-none, serif caption overlay.

### Forms
- Inputs: `border-b border-velmora-border bg-transparent rounded-none`, focus:border-velmora-gold, placeholder muted.

## Elevation & Motion
- Soft shadows only on hover and drawers.
- Transitions: `transition-all duration-300 ease-out`.
- Image zoom on hover: `scale-105`.
- Drawer/sheet: slide from right, `duration-300`.

## Imagery
- Warm-lit gold jewelry on cream, stone, or dark chocolate backgrounds.
- Use stock-image tagging system (`data-strk-img`) for all photos; no hardcoded URLs.
- Product names rendered as referenced text for image queries.

## Accessibility
- Strong espresso-on-cream contrast for body text.
- Focus rings on interactive elements.
- Alt text on every image.
