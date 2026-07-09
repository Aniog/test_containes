# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount-looking, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — warm near-black for text, dark sections, footer
- `cream` (base light): `#F7F3EC` — warm off-white page background
- `sand`: `#EDE6DA` — soft neutral for cards, secondary surfaces
- `stone`: `#8A8175` — muted text, captions
- `gold`: `#B08D57` — primary accent (warm metallic gold)
- `gold-deep`: `#9A7544` — hover / pressed accent
- `champagne`: `#E8D9B8` — soft gold tint for accent blocks / highlights
- `line`: `#E2D9CB` — hairline dividers on light surfaces

Tailwind named colors (added to config):
- `ink`, `cream`, `sand`, `stone`, `gold`, `gold-deep`, `champagne`, `line`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Hero headline: serif, large, tight leading.
- Body text: `text-stone`, `leading-relaxed`.

Fonts loaded via Google Fonts in `index.html`.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-line` / `border-t`.
- Cards: soft shadow `shadow-sm`, rounded-none or `rounded-[2px]` (sharp editorial feel).

## Buttons
- Primary (accent): solid `bg-ink text-cream` OR `bg-gold text-white`. Uppercase, wide tracking, `px-8 py-3.5`, `text-xs tracking-[0.2em]`. Hover: subtle darken + slight translate.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Premium feel: no rounded pill, sharp corners or very slight radius.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed).
- Product cards: square or 4x5, hover reveals second image.
- Reels: vertical 9:16.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, links.
- Strong contrast: dark text on light, cream text on ink.
- Hairline dividers between sections.

## Don'ts
- No bright/saturated colors. No discount-red. No generic blue.
- No rounded-full buttons. No heavy shadows.
- No low-contrast text (e.g. stone on sand without checking).
- Don't mix serif and sans for the same role.
