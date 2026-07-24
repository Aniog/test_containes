# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base with warm metallic accents that flatter gold jewelry.

- `ink` (base dark): `#1A1714` — warm near-black for text and dark sections
- `cream` (page background): `#F7F3EC` — warm off-white editorial background
- `sand` (secondary surface): `#EFE8DD` — soft warm neutral for cards/strips
- `champagne` (accent / metallic): `#B89968` — warm muted gold accent for buttons, links, dividers
- `champagne-deep`: `#9A7E50` — hover / pressed accent
- `stone` (muted text): `#6B6258` — secondary text on light backgrounds
- `line` (hairline): `#E2D9CC` — thin dividers on light backgrounds

Contrast rules:
- On `cream`/`sand`: use `ink` for primary text, `stone` for secondary. Never use champagne text on cream (too low contrast).
- On `ink` sections: use `cream` for primary text, `champagne` for accents/links. Champagne on ink has strong contrast.
- Buttons: solid `ink` background with `cream` text, OR outlined `champagne` border with `ink` text. Accent CTA can be solid `champagne` with `ink` text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- Nav links: uppercase, `text-xs`, `tracking-[0.18em]`, sans-serif.
- Headlines: large serif, tight leading (`leading-[1.05]`).

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-line`.

## Components
- Buttons: `px-8 py-3.5 text-xs uppercase tracking-[0.2em]`, solid ink or outlined champagne, subtle `transition-colors duration-300`.
- Product cards: image area `aspect-[4/5]`, hover reveals second image + quick add overlay.
- Pills (variant selector): `rounded-full border`, active = ink fill / cream text.
- Inputs: underline style or thin border, no heavy boxes.

## Do's
- Use serif for all headings and product names.
- Keep accent (champagne) restrained — buttons, small labels, dividers.
- Use large editorial imagery with warm tones.
- Mobile-first: stack columns, keep nav simple, large tap targets.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows or thick borders. No discount-style badges.
- No generic e-commerce clutter. No emoji.
- Don't put champagne text on cream/sand backgrounds.
