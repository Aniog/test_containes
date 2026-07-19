# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for footer, hero overlays, primary text on light surfaces
- `espresso`: `#2A2520` — secondary dark surface
- `cream`: `#F7F2EA` — primary light background, warm off-white
- `sand`: `#EDE4D6` — subtle section background, dividers
- `stone`: `#8A7F73` — muted secondary text
- `gold`: `#B08D57` — primary accent (warm metallic gold), buttons, links, price highlights
- `gold-deep`: `#8A6A3B` — hover state for gold
- `champagne`: `#D9C3A1` — soft accent tint, hover backgrounds

Text contrast rules:
- On `cream`/`sand`: use `ink` for primary text, `stone` for secondary. Never use `gold` for body text (low contrast); gold is for accents, prices, links, and small labels only.
- On `ink`/`espresso`: use `cream`/`champagne` for text. Never use `stone` on dark (too low contrast).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- Eyebrow/label text: UPPERCASE, `text-xs tracking-[0.25em]`, sans-serif, `stone` or `gold`.

Font sizes (desktop):
- Hero headline: `text-5xl md:text-7xl`
- Section headings: `text-3xl md:text-5xl`
- Product names: `text-sm md:text-base`
- Body: `text-sm md:text-base`

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-5 md:px-8`
- Hairline dividers: `border-t border-ink/10` (1px, low opacity)
- Card gaps: `gap-6 md:gap-8`

## Components
- Buttons:
  - Primary (accent): `bg-gold text-cream hover:bg-gold-deep` , `px-8 py-3.5`, `text-xs tracking-[0.2em] uppercase`, subtle transition.
  - Outline: `border border-ink/30 text-ink hover:border-gold hover:text-gold`.
  - On dark backgrounds: `bg-cream text-ink hover:bg-champagne`.
- Cards: `bg-cream`, soft shadow `shadow-sm hover:shadow-md`, rounded-none (editorial square corners) or `rounded-sm` max. Prefer square corners for editorial feel.
- Inputs: `bg-transparent border-b border-ink/30`, underline style, focus `border-gold`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4:3 or 1:1, hover reveals second image.
- UGC reel: 9:16 vertical cards.

## Do's
- Use generous whitespace.
- Keep accent gold restrained — small areas only.
- Use hairline dividers between sections.
- Uppercase serif product names with wide tracking.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No rounded-full buttons (except small pills for variant selectors).
- No large gold fills — gold is an accent.
- No body text in gold (contrast too low).
- No generic e-commerce clutter (badges, countdowns, popups).
