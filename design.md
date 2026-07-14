# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base with warm metallic accents. One confident direction, sitewide.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `cream` (base light): `#F7F2EA` — warm off-white page background
- `sand`: `#EDE4D6` — soft neutral for cards / alternating sections
- `champagne`: `#C9A96A` — warm metallic gold accent (buttons, links, dividers, stars)
- `champagne-deep`: `#A8854A` — hover / pressed accent
- `espresso`: `#3B2F26` — dark warm brown for body text on light
- `taupe`: `#8A7B6B` — muted secondary text on light
- `stone`: `#6B6258` — muted text on dark

Contrast rules:
- On `cream`/`sand`: use `espresso` for headings/body, `taupe` for secondary. Never use `stone` (too low contrast on light).
- On `ink`: use `cream` for headings/body, `champagne` for accents, `stone` for secondary.
- `champagne` on `ink` is readable; `champagne` on `cream` is for accents/lines only, not body text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Nav links: UPPERCASE, `text-xs`, `tracking-[0.18em]`.
- Hero headline: serif, large, `leading-[1.05]`.

Font sizes: use Tailwind's type scale. Hero `text-5xl md:text-7xl`. Section titles `text-3xl md:text-4xl`. No magic px values.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-ink/10` (on light) or `border-cream/15` (on dark).
- Cards: `bg-cream` with subtle `shadow-[0_8px_30px_rgba(26,23,20,0.06)]`, rounded-none or `rounded-sm`.

## Buttons
- Primary (accent): `bg-champagne text-ink hover:bg-champagne-deep hover:text-cream`, uppercase, tracking-wide, `px-8 py-3.5 text-xs`, `transition-colors duration-300`.
- Outline: `border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream`.
- On dark backgrounds: primary stays champagne/ink; outline uses `border-cream/40 text-cream`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups.
- Use the `data-strk-img` / `data-strk-bg` stock image system with dynamic text references.
- Large hero uses `data-strk-bg`. Product cards use `data-strk-img` with hover second image.

## Do's
- Generous whitespace, hairline dividers, restrained accent.
- Serif headings, uppercase wide-tracked product names.
- Soft shadows, subtle 300ms transitions.

## Don'ts
- No loud gradients, no discount badges, no generic e-commerce clutter.
- No low-contrast text (no stone on cream, no champagne body text on cream).
- No hardcoded hex in JSX beyond the palette above (use Tailwind named colors).
- No rounded-full buttons (keep editorial/sharp). Pills only for variant selectors.
