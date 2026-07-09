# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine jewelry. Rich dark surfaces, soft warm neutrals, and a single warm metallic gold accent. No loud discount language, no clutter.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `base` | `#0f0f0f` | Hero overlays, dark sections, footer |
| `base-800` | `#1a1a1a` | Primary text, nav scrolled state |
| `base-700` | `#2d2d2d` | Secondary dark surfaces |
| `cream` | `#f7f5f2` | Primary page background |
| `cream-100` | `#faf9f7` | Cards, subtle backgrounds |
| `warm-white` | `#ffffff` | Pure contrast surface |
| `gold` | `#c9a050` | Primary accent, CTAs, stars, highlights |
| `gold-dark` | `#a8833d` | Hover/active accent |
| `muted` | `#8a857d` | Secondary text, captions |
| `hairline` | `#e2ddd6` | Dividers, borders |

### Contrast rules
- Body text on cream: `#1a1a1a` (strong contrast).
- Muted text never used for primary data.
- Text on gold accent blocks uses `#0f0f0f` for maximum readability.

## Typography

- **Headings / product names**: `Playfair Display`, serif. Product names are uppercase with wide letter-spacing (`tracking-[0.2em]`).
- **Body / UI**: `Inter`, sans-serif.
- **Weights**: headings 400–500; body 400; UI labels 500; prices 500.

## Spacing & Layout

- Generous vertical rhythm: sections use `py-20 md:py-28`.
- Container max-width `max-w-7xl` with `px-4 sm:px-6 lg:px-8`.
- Hairline dividers: `border-hairline` (`1px solid #e2ddd6`).
- Cards have no heavy borders; rely on whitespace and subtle hover lift.

## Components

### Buttons
- **Primary (solid accent)**: gold background, dark text, no radius (`rounded-none`), hover darken to `gold-dark`, transition `colors`.
- **Secondary (outline)**: transparent, dark border, dark text, hover fill dark and text white.
- **Pill selector (variant)**: rounded-full, border, selected state filled dark text white.

### Product cards
- Large image with hover-reveal secondary image.
- Minimal metadata: name uppercase, price.
- Quick "Add to Cart" button appears on hover/focus at bottom of image.

### Inputs
- Minimal underline or 1px border style, generous padding, focus ring gold.

## Animation
- All transitions `duration-300 ease-out`.
- Subtle hover lift: `-translate-y-1 shadow-lg` on cards.
- Fade-in via simple CSS opacity transitions; avoid heavy motion.

## Imagery
- Warm gold jewelry photography on dark, cream, or neutral backgrounds.
- All images use the stock-image tagging system (`data-strk-img`, `data-strk-bg`) with a tiny SVG placeholder.
