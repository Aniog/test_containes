# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, sitewide.

- `ink` (base dark): `#1A1714` — near-black warm brown, used for hero overlays, footer, primary text on light.
- `cream` (page background): `#F7F3EC` — warm off-white, the main page background.
- `sand` (secondary surface): `#EFE7DA` — slightly deeper warm neutral for cards/strips.
- `champagne` (accent / metallic gold): `#B08D57` — warm gold accent for buttons, links, hairlines, price.
- `champagne-deep`: `#8A6D3F` — hover state for accent.
- `stone` (muted text): `#6B6258` — secondary text on light backgrounds.
- `line` (hairline divider): `#E2D9CB` — thin dividers on light.

Text contrast rules:
- On `cream`/`sand`: use `ink` for primary text, `stone` for secondary. Never use champagne text on cream (low contrast) — champagne is for fills/borders/icons only on light.
- On `ink`: use `cream` for primary text, `champagne` for accents/links. Champagne on ink has strong contrast and reads well.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: serif, large (`text-5xl`–`text-7xl`), tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-line`.
- Cards: subtle, `bg-cream` or `bg-sand`, no heavy borders; soft shadow on hover only (`shadow-[0_18px_40px_-24px_rgba(26,23,20,0.35)]`).

## Buttons
- Primary (accent): `bg-champagne text-cream hover:bg-champagne-deep`, uppercase, `tracking-[0.2em]`, `text-xs`, `px-8 py-4`, rounded-none (sharp editorial) or `rounded-sm`.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- On dark hero: `bg-champagne text-ink` or `border border-cream text-cream hover:bg-cream hover:text-ink`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: square or 4x5, hover reveals second image.
- UGC reel: vertical 9:16 cards.

## Do's
- Use serif for all headings and product names.
- Keep accent (champagne) restrained — buttons, hairlines, small icons, price.
- Use generous whitespace and hairline dividers.
- Ensure strong contrast on every surface.

## Don'ts
- Don't use bright/saturated colors.
- Don't use rounded-full buttons (too casual); keep editorial sharp corners.
- Don't put champagne text on cream/sand backgrounds.
- Don't use generic e-commerce density — keep it airy and editorial.
