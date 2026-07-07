# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry store for women 25–45. No loud discounts, no generic e-commerce. Generous whitespace, large imagery, restrained accents.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| ink | `#1B1816` | Primary text, dark backgrounds, footer |
| ink-light | `#2D2825` | Subtle dark variations |
| cream | `#F8F5F1` | Primary page background |
| cream-dark | `#EDE8E2` | Section alternates, cards |
| sand | `#E6E0D8` | Dividers, subtle backgrounds, borders |
| gold | `#B9935F` | Primary accent, CTAs, highlights |
| gold-light | `#D4B88A` | Hover states, hero accents |
| gold-dark | `#8F6E3E` | Muted gold text |
| taupe | `#A79A8E` | Secondary text, captions |

## Typography

- **Headings / Product names**: Cormorant Garamond, serif. Product names are UPPERCASE with `tracking-brand` (0.2em letter-spacing).
- **Body / UI**: Manrope, sans-serif. Clean, medium weight for UI, regular for body.

## Spacing & Layout

- Max content width: `max-w-7xl` (Tailwind).
- Section vertical padding: `py-20 md:py-28`.
- Grid gaps: `gap-4 md:gap-6` for product grids.
- Whitespace-first: avoid cramped layouts.

## Components

### Buttons
- Primary: solid gold background, ink text, uppercase, tracking-brand.
- Outline: transparent with ink border, hover fills ink and text turns cream.
- Sizes: sm, md, lg.

### Cards
- Product cards: 3:4 aspect ratio, sand placeholder background.
- Hover reveals second image and "Add to Cart" bar.

### Forms
- Inputs: cream background, subtle border or borderless, focus ring.

## Imagery

- All product and editorial images use the Strikingly SDK stock-image tagging system (`data-strk-img`, `data-strk-bg`).
- No hardcoded image URLs.
- Placeholder SVG used for `<img>` tags.

## Animation

- Subtle transitions: `duration-300` for UI, `duration-500/700` for imagery.
- Easing: `ease-out-expo` for drawer/mobile menu.
- Cart drawer: slide from right with backdrop blur.
