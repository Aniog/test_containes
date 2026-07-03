# Velmora Fine Jewelry — Design System

Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)

- `ink` (espresso near-black): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `cream` (warm ivory): `#F7F2EA` — page background, light sections
- `cream-deep`: `#EFE7DA` — alt section background, cards
- `sand`: `#E4D8C6` — hairline borders, dividers, subtle surfaces
- `gold` (warm metallic accent): `#B08A4F` — primary accent, buttons, links, price
- `gold-deep`: `#8E6A36` — hover / pressed accent
- `gold-soft`: `#D9BE8E` — soft accent fills, badges
- `muted`: `#8A7F73` — muted/placeholder text on cream

Contrast: ink on cream = strong. gold on ink = strong. Never use gold text on cream-deep without weight; prefer ink for body text. Muted text only for secondary captions.

## Typography

- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), smaller size.
- Hero headline: serif, large, tight leading.
- Eyebrow / labels: sans, uppercase, `tracking-[0.25em]`, `text-xs`, muted or gold.

## Spacing & Layout

- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand`, `border-t`.
- Soft shadows: `shadow-[0_10px_40px_-12px_rgba(28,23,20,0.18)]`.

## Buttons

- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`, `tracking-[0.18em] uppercase text-xs`, generous padding, subtle transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Ghost/link: `text-ink underline-offset-4 hover:text-gold-deep`.

## Imagery

- Warm gold jewelry on dark/neutral backgrounds. Large editorial imagery.
- Subtle hover transitions (image zoom 1.03, opacity), soft shadows.

## Do's

- Use serif for headlines and product names.
- Keep accent (gold) restrained — buttons, prices, small highlights.
- Use hairline dividers and generous whitespace.
- Mobile-first responsive.

## Don'ts

- No loud/discount colors (no reds, no neon).
- No generic e-commerce blue.
- No low-contrast text (no gold on cream-deep for body).
- No heavy borders or drop shadows.
