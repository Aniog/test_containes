# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (espresso near-black): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `gold` (warm metallic accent): `#B08A4F` — primary accent, buttons, hairlines, price
- `gold-deep`: `#8A6A38` — hover / pressed accent
- `ivory` (page background): `#F7F3EC` — main background
- `cream`: `#EFE7D8` — alt section background, cards
- `sand`: `#E4D8C4` — borders, dividers, muted surfaces
- `stone` (muted text): `#8A7F72` — captions, meta
- `white`: `#FFFFFF` — cards, nav solid

Contrast: ink on ivory, ink on cream, ivory on ink — all strong. Gold used sparingly for accents and CTAs (gold button with ink text for strong contrast).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Display hero headline: serif, large, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-ink/10`, 1px.
- Card radius: minimal (`rounded-none` or `rounded-sm`) for editorial feel.

## Buttons
- Primary (accent): `bg-gold text-ink` solid, uppercase, wide tracking, subtle hover darken.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- No heavy shadows; soft `shadow-sm` at most.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: square or 4x5, hover reveals second image.
- UGC reel: vertical 9:16 cards.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — mostly ink/ivory/cream.
- Generous whitespace, hairline dividers.
- Uppercase wide-tracked labels for eyebrows and product names.

## Don'ts
- No bright/discount reds, no neon, no generic blue links.
- No rounded-full chunky buttons, no heavy drop shadows.
- No low-contrast text (always set explicit readable foreground).
- No hardcoded arbitrary hex in components — use tailwind theme tokens.
