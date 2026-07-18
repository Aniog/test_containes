# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. The experience should feel like a small luxury magazine: generous whitespace, large imagery, refined typography, restrained gold accents. Never loud, never discount, never generic mall-jewelry.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--velmora-cream` | `#F7F4F0` | Primary page background |
| `--velmora-espresso` | `#2A211D` | Hero/footer dark sections, primary text |
| `--velmora-charcoal` | `#3F332C` | Body text, headings |
| `--velmora-gold` | `#B8860B` | Primary accent: buttons, links, stars, highlights |
| `--velmora-gold-light` | `#D4A845` | Hover states, metallic sheen accents |
| `--velmora-taupe` | `#6B5E55` | Muted body text, captions |
| `--velmora-sand` | `#E9E2D9` | Cards, subtle backgrounds, hover fills |
| `--velmora-hairline` | `#DED6CD` | Dividers, borders, hairlines |
| `--velmora-white` | `#FFFFFF` | Cards, inputs, overlaid text surfaces |
| `--velmora-error` | `#B54A4A` | Form errors |

### Rules
- Backgrounds are mostly cream with occasional espresso sections for contrast.
- Text on cream/sand/white must be espresso or charcoal (WCAG contrast).
- Text on espresso sections must be cream or white.
- Gold is an accent only: CTAs, star ratings, hover links. Do not use it for large text blocks.
- Hairlines are 1px solid `--velmora-hairline`.

## Typography

### Fonts
- **Headings / display / logo / product names**: `Cormorant Garamond`, serif. Elegant, high contrast.
- **Body / UI / buttons / price**: `Manrope`, sans-serif. Clean, warm, modern.

### Scale
- Display hero headline: `text-4xl md:text-6xl lg:text-7xl`, `font-light`, `leading-[1.1]`, `tracking-tight`.
- Section titles: `text-3xl md:text-4xl`, `font-light`, `tracking-wide`.
- Product names: `text-xs md:text-sm`, `uppercase`, `tracking-[0.2em]`, `font-medium`.
- Body: `text-sm md:text-base`, `font-normal`, `leading-relaxed`.
- Caption / labels: `text-xs`, `uppercase`, `tracking-[0.15em]`.

## Spacing
- Section vertical padding: `py-16 md:py-24`.
- Container max width: `max-w-7xl` centered with `px-4 sm:px-6 lg:px-8`.
- Grid gaps: `gap-4 md:gap-6` or `gap-6 md:gap-8`.
- Product card gaps: `gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10`.

## Components

### Buttons
- **Primary (solid gold)**: `bg-velmora-gold text-white hover:bg-velmora-gold-light transition-colors duration-300`. Used for CTAs and Add to Cart.
- **Secondary (outlined charcoal)**: `border border-velmora-charcoal text-velmora-charcoal hover:bg-velmora-charcoal hover:text-white transition-colors duration-300`. Used for subtle actions.
- **Ghost**: `text-velmora-charcoal hover:text-velmora-gold` for text links.

### Cards
- Product cards have no border, soft cream/white background, subtle shadow on hover: `hover:shadow-lg transition-shadow duration-300`.
- Image aspect ratio `4x5` for products, `3x4` for category tiles, `9x16` for UGC reel.

### Inputs
- `bg-white border border-velmora-hairline rounded-none px-4 py-3 text-velmora-charcoal placeholder:text-velmora-taupe focus:outline-none focus:border-velmora-gold`.

### Dividers
- `h-px bg-velmora-hairline`.

## Animation
- Subtle hover transitions: `transition-all duration-300 ease-out`.
- Image zoom on hover: `scale-105`.
- Fade-in on load via simple opacity keyframes.

## Responsive
- Mobile-first. Navigation collapses to hamburger menu on small screens.
- Product grid: 2 columns mobile, 3 tablet, 4 desktop.
- Category tiles: 1 column mobile, 3 desktop.
