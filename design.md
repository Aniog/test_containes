# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic e-commerce clutter.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#F9F6F1` | Primary background |
| `--color-espresso` | `#1E1814` | Primary text, solid buttons |
| `--color-taupe` | `#E8E0D6` | Secondary backgrounds, hairlines |
| `--color-gold` | `#B98B4F` | Accent: CTA highlights, newsletter block, hover states |
| `--color-warm-gray` | `#7A6F66` | Muted text, secondary copy |
| `--color-linen` | `#F3EDE4` | Cards, subtle surfaces |
| `--color-hairline` | `#D9CFC3` | Dividers, borders |

Contrast notes:
- Espresso `#1E1814` on Cream `#F9F6F1` → strong AAA contrast.
- Cream text on Espresso buttons → strong AAA contrast.
- Gold `#B98B4F` used as a background only with Espresso or Cream text; avoid white text on gold.

## Typography

- **Headings / logo / product names:** Cormorant Garamond (Google Fonts), weights 400, 500, 600, 700.
- **Body / UI / buttons:** Inter, weights 300, 400, 500, 600.
- Product names are uppercase with wide letter-spacing (`tracking-[0.22em]`).
- Headings use tight line-height (`leading-[1.1]`); body uses relaxed (`leading-relaxed`).

## Spacing & Layout

- Generous vertical whitespace between sections (`py-20` to `py-28` on desktop, `py-14` on mobile).
- Horizontal padding: `px-4` mobile, `px-6` tablet, `px-8` desktop; max-width containers at `max-w-7xl` centered.
- Thin hairline dividers: `border-hairline` (`1px solid #D9CFC3`).
- Cards: soft backgrounds, subtle shadows on hover (`shadow-lg`).

## Components

### Buttons
- **Primary solid:** Espresso background, cream text, no border-radius (square), uppercase tracking-wide, hover opacity-90.
- **Secondary outline:** Transparent background, espresso border, espresso text, hover espresso background with cream text.
- **Accent gold pill (newsletter):** Gold background, espresso text.

### Product Cards
- Cream/linen background, square-ish image area, product name uppercase tracking-widest, price in sans-serif.
- Hover: reveal secondary image (crossfade), show quick "Add to Cart" button.
- Transition duration-500 ease-out.

### Navigation
- Sticky top, transparent over hero, becomes solid cream after scroll.
- Links uppercase tracking-widest, small font size.
- Mobile: hamburger sheet.

### Drawers
- Slide-in from right, cream background, hairline shadow.

### Forms / Inputs
- Minimal: transparent background, bottom hairline only, focus:border-gold.

## Animations
- Subtle fade-ins on scroll via simple CSS transitions (no heavy library).
- Image hover crossfade.
- Button hover opacity/color transitions `transition-all duration-300`.

## Responsive
- Mobile-first. Most traffic is mobile.
- Hero headline scales from `text-4xl` (mobile) to `text-6xl`/`text-7xl` (desktop).
- Product grids: 1 col mobile, 2 col tablet, 3-4 col desktop.
- Collection page filter sidebar becomes top accordion on mobile.
