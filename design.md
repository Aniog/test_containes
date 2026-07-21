# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep, refined warm base with a soft champagne/cream surface and a warm metallic gold accent.

- `ink` (base dark): `#1A1714` — near-black warm brown, used for footer, hero overlays, primary text on light.
- `cream` (page surface): `#F7F2EA` — warm off-white page background.
- `sand` (secondary surface / cards): `#EFE7DA` — soft warm sand for cards and strips.
- `champagne` (light accent surface): `#E7D8BE` — warm metallic tint for newsletter / highlights.
- `gold` (primary accent): `#B08D57` — warm antique gold for buttons, links, accents.
- `gold-deep` (hover): `#94723F` — darker gold for hover states.
- `stone` (muted text): `#7A6F62` — warm gray for secondary text.
- `hairline` (dividers/borders): `#D9CFC0` — warm hairline.

Text contrast rules:
- On `cream`/`sand`/`champagne`: use `ink` for primary text, `stone` for secondary.
- On `ink`: use `cream`/`champagne` for text.
- Gold accent text only on dark or cream backgrounds where contrast is strong; never gold text on champagne.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: UPPERCASE sans, `tracking-[0.2em]`, `text-xs`.
- Buttons: UPPERCASE sans, `tracking-[0.18em]`, `text-xs`/`text-sm`.

Font sizes (desktop):
- Hero headline: `text-5xl md:text-7xl` serif.
- Section titles: `text-3xl md:text-4xl` serif.
- Product names: `text-sm md:text-base` serif uppercase tracked.
- Body: `text-sm md:text-base` sans, `leading-relaxed`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-hairline`.
- Card gaps: `gap-6 md:gap-8`.

## Components
- Buttons:
  - Primary (solid gold): `bg-gold text-cream hover:bg-gold-deep` uppercase tracked, `px-8 py-4`, subtle transition.
  - Outline: `border border-ink text-ink hover:bg-ink hover:text-cream`.
  - On dark: `border border-cream/40 text-cream hover:bg-cream hover:text-ink`.
- Cards: `bg-cream` with soft shadow on hover (`shadow-[0_18px_40px_-24px_rgba(26,23,20,0.35)]`), image hover reveals second image + quick add.
- Pills (variant selector): `border border-hairline` rounded-full, active = `border-gold bg-gold/10 text-ink`.
- Inputs: `bg-transparent border-b border-hairline` underline style, focus `border-gold`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds, editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.
- Hero: full-bleed warm-lit close-up of gold jewelry on a model.
- Product cards: 4:3 ratio, hover second image.
- Reels: 9:16 vertical.
- Category tiles: 4:3 or 3:4.

## Do's
- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Generous whitespace; let imagery breathe.
- Subtle transitions (`transition duration-300 ease-out`).
- Hairline dividers between sections.

## Don'ts
- No bright/saturated colors. No neon. No discount-red.
- No generic e-commerce clutter.
- No low-contrast text (gold on champagne, stone on sand without checking).
- No heavy shadows; keep them soft and low.
- No uppercase body copy (only headings, names, nav, buttons).
