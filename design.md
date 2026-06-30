# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/charcoal) with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1C1714` — warm near-black espresso, used for footer, hero overlays, primary text on light surfaces
- `cream` (page background): `#F7F2EA` — warm soft cream, the main page surface
- `sand` (secondary surface): `#EFE7DA` — slightly deeper warm neutral for cards/strips
- `champagne` (accent gold): `#B08D57` — warm metallic gold for buttons, links, accents
- `champagne-deep`: `#8A6A3B` — hover/pressed state of accent
- `stone` (muted text): `#6B6258` — warm gray for secondary text
- `line` (hairline): `#E2D8C8` — warm hairline divider color

Text contrast rules:
- On `cream`/`sand`: use `ink` for primary text, `stone` for secondary. Both pass WCAG AA.
- On `ink`: use `cream`/`champagne` for text. Never use `stone` on dark.
- Accent `champagne` on `cream` is for buttons/links only (large/bold), not body text.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif), weights 400–600.
- Body & UI: **Inter** (clean sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: UPPERCASE sans, `tracking-[0.2em]`, `text-xs`.
- Buttons: UPPERCASE sans, `tracking-[0.18em]`, `text-xs`/`text-sm`.

Font sizes: editorial scale. Hero h1 ~ `text-5xl md:text-7xl`. Section titles `text-3xl md:text-4xl`.

## Spacing & Layout
- Generous vertical rhythm: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Card spacing: `gap-6 md:gap-8`.

## Components
- Buttons: solid `bg-champagne text-cream` hover `bg-champagne-deep`; outlined `border border-ink text-ink` hover `bg-ink text-cream`. Rounded-none (sharp editorial) or `rounded-sm`. Subtle transition `duration-300`.
- Product cards: image with hover second-image reveal, name uppercase serif, price sans. Soft shadow on hover `shadow-[0_10px_40px_-15px_rgba(28,23,20,0.25)]`.
- Pills (variant selector): `border border-line rounded-full px-4 py-2`, active `bg-ink text-cream border-ink`.
- Inputs: `border-b border-line bg-transparent`, underline style, no box.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small icons, thin underlines.
- Use hairline dividers between sections.
- Large editorial imagery with warm tones.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons (except pills). No heavy drop shadows.
- No discount badges, no loud red sale colors.
- No generic e-commerce blue links.
