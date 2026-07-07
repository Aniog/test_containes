# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (espresso/near-black warm): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `gold` (warm metallic accent): `#B08D57` — primary accent, buttons, hairlines, logo
- `gold-deep`: `#8A6A3B` — hover / pressed accent
- `ivory` (page background): `#F7F3EC` — main background
- `cream`: `#EFE7DA` — alt section background, cards
- `sand`: `#E2D6C2` — borders, dividers, muted surfaces
- `stone` (muted text): `#8A7F73` — captions, meta, placeholders

Contrast: ink on ivory (strong), gold on ink (strong), ink on cream (strong). Never use stone on cream without testing; prefer ink-soft for body text on light surfaces.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans), weights 300–600.
- Eyebrow/labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`, color gold or stone.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand`, `border-t`.

## Components
- Buttons: solid gold (`bg-gold text-ivory hover:bg-gold-deep`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-ivory`). Rounded-none or `rounded-sm`. Subtle transition `duration-300`.
- Cards: `bg-ivory` or `bg-cream`, soft shadow `shadow-sm`, hover `shadow-md`, `transition`.
- Inputs: `border-sand`, `bg-transparent`, focus `border-gold`.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small labels, hairlines.
- Large editorial imagery with warm tones.
- Subtle hover transitions (image swap, shadow lift).

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons. No heavy shadows. No discount badges in red.
- No generic e-commerce clutter.
