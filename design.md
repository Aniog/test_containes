# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic marketplace feel. Generous whitespace, large imagery, refined typography, thin hairline dividers.

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#F7F4EF` | Primary background, light surfaces |
| `--color-espresso` | `#1C1917` | Primary text, dark surfaces, footer |
| `--color-gold` | `#B58A4E` | Accent CTAs, stars, links, hover states |
| `--color-gold-light` | `#D9B77B` | Subtle gold highlights, hover backgrounds |
| `--color-warm-gray` | `#8C837D` | Secondary text, muted labels |
| `--color-blush` | `#EAE0D6` | Soft section backgrounds, newsletter block |
| `--color-white` | `#FFFFFF` | Cards, overlays, nav solid state |
| `--color-hairline` | `#DED9D3` | Thin borders and dividers |

### Contrast rules
- Body text espresso on cream: strong AA-compliant contrast.
- Gold accent on espresso or white: only for large text, buttons, icons; never small body copy.
- Muted warm-gray text remains legible (≥4.5:1 on cream/blush).

## Typography

- **Serif headings:** Cormorant Garamond (300, 400, 500, 600) via Google Fonts.
- **Sans-serif body/UI:** Inter (300, 400, 500, 600) via Google Fonts.
- Product names: uppercase, wide letter-spacing (`tracking-[0.2em]`), serif, font-weight 500.
- Headings scale from `text-4xl` mobile to `text-6xl` desktop.
- Body base: `text-sm md:text-base`, line-height `leading-relaxed`.

## Spacing & Layout

- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`.
- Thin hairline dividers: `border-t border-hairline` or `bg-hairline h-px`.

## Components

### Buttons
- **Primary (accent):** solid gold background, white text, no border-radius override (slight rounded-sm), hover darkens to espresso.
- **Secondary / outline:** transparent background, espresso border, espresso text, hover fills espresso with white text.
- Transitions: `transition-all duration-300 ease-out`.

### Cards
- White background, no heavy shadow. Optional `shadow-sm` only on hover.
- Subtle hairline border where needed.
- Product cards: image container 4:5 ratio, hover reveals second image and quick add button.

### Forms
- Inputs: `bg-white border border-hairline rounded-none px-4 py-3`, focus `ring-1 ring-gold`.
- Newsletter block uses blush background with espresso input + gold button.

## Imagery
- Warm-lit close-ups of gold jewelry on model or dark/neutral backgrounds.
- Use data-strk-img tagging system for stock imagery.
- Maintain 4:5 product ratio, 9:16 UGC ratio, 16:9 hero/editorial ratio.

## Animations
- Subtle hover transitions (0.3s ease-out) on cards, buttons, links.
- Nav solidifies on scroll via `scroll` listener + transition.
- Page elements use simple opacity/transform on hover; avoid heavy motion.

## Do's & Don'ts
- Do use generous whitespace and high-quality imagery.
- Do keep typography hierarchy clear: serif for headings, sans for body.
- Don't use loud red sale badges or countdown timers.
- Don't use harsh shadows or neon colors.
- Don't mix multiple accent colors; gold is the singular accent.
