# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base with warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — warm near-black for text, footer, dark sections
- `cream` (page background): `#F7F3EC` — warm off-white editorial background
- `sand` (secondary surface): `#EFE7DA` — soft warm neutral for cards/strips
- `champagne` (accent / metallic gold): `#B08D57` — warm gold accent for buttons, links, highlights
- `champagne-deep`: `#8A6D3F` — hover / pressed state for accent
- `stone` (muted text): `#6B6258` — secondary text on light backgrounds
- `line` (hairline divider): `#D9CFC0` — warm hairline borders

Contrast: ink on cream = strong. champagne on ink = strong. Never use light text on light surfaces.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Eyebrow / label text: UPPERCASE, `tracking-[0.25em]`, `text-xs`, champagne color.
- Body base size 15px, line-height 1.7 for editorial readability.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): solid champagne bg, ink text, uppercase tracking, subtle hover darken, `transition-colors duration-300`.
- Secondary (outlined): transparent bg, ink border, ink text, hover fills ink.
- Rounded: `rounded-none` (sharp editorial) or `rounded-full` for pills. Prefer sharp/rectangular for premium feel; pills only for variant selectors.

## Cards & Imagery
- Product cards: clean, no heavy borders. Image area square or 4x3. Hover reveals second image + quick add button.
- Soft shadows only: `shadow-sm`, `shadow-md` on hover.
- Large editorial hero imagery, full-bleed.

## Do's
- Use serif for all headings and product names.
- Keep accent (champagne) restrained — buttons, small labels, links.
- Use hairline dividers between sections.
- Generous whitespace.

## Don'ts
- No bright/saturated colors. No reds, blues, greens.
- No rounded chunky buttons. No drop shadows on text.
- No discount/sale badges in loud colors.
- No low-contrast text (e.g. champagne on cream for body copy).
