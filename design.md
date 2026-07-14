# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base with warm metallic accents that flatter gold jewelry.

- `ink` (base dark): `#1A1714` — near-black warm espresso, used for dark sections, footer, hero overlays
- `cream` (base light): `#F7F3EC` — warm off-white, primary page background
- `sand`: `#EDE6DA` — soft neutral for cards / secondary surfaces
- `gold`: `#B08D57` — warm metallic accent, primary CTA / links / highlights
- `gold-deep`: `#8A6A3B` — darker gold for hover / pressed states
- `champagne`: `#D9C3A1` — light metallic for subtle accents / borders
- `charcoal`: `#3A332C` — body text on light backgrounds
- `muted`: `#8A8074` — secondary text, captions

Tailwind tokens (added to config):
- `ink`, `cream`, `sand`, `gold`, `gold-deep`, `champagne`, `charcoal`, `muted`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Hero headline: large serif, tight leading.
- Eyebrow / labels: uppercase sans, `tracking-[0.25em]`, `text-xs`, muted/gold.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-champagne/40`.

## Buttons
- Primary (accent): solid `bg-gold text-ink` (dark text on gold for contrast), `px-8 py-3.5`, uppercase tracking, hover `bg-gold-deep` with light text.
- Outlined: `border border-ink text-ink` on light, hover `bg-ink text-cream`.
- Premium feel: medium letter-spacing, no heavy radius (`rounded-none` or `rounded-sm`), subtle transition.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4:3 or 1:1, hover reveals second image.
- Reel cards: 9:16 vertical.

## Do's
- Use serif for all headings and product names.
- Keep accent color restrained — gold for CTAs, links, small highlights only.
- Ensure strong contrast: dark text on cream, cream/gold text on ink.
- Use hairline dividers and soft shadows (`shadow-sm`, `shadow-md`).

## Don'ts
- No bright/saturated colors. No generic blue/purple.
- No heavy borders or thick shadows.
- No loud discount badges or generic e-commerce clutter.
- Don't use light text on light surfaces or dark text on dark surfaces.
