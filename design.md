# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — near-black warm espresso, used for hero overlays, footer, deep sections
- `cream` (base light): `#F7F3EC` — warm off-white page background
- `sand`: `#EFE7DA` — soft neutral for cards / alternating sections
- `champagne`: `#C9A86A` — warm metallic gold accent (buttons, links, dividers, stars)
- `champagne-deep`: `#A8854A` — hover / pressed accent
- `espresso`: `#3A322B` — body text on light
- `taupe`: `#8A7E6E` — muted secondary text on light
- `linen`: `#E4DCCF` — hairline borders on light
- `ivory`: `#FBF9F4` — pure light surface (inputs, drawer)

Contrast: espresso on cream = strong. champagne on ink = strong. Never use champagne text on cream/sand (low contrast) — use espresso or ink instead. On dark (ink) backgrounds use cream/ivory text and champagne accents.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels / nav: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, taupe or champagne.
- Hero headline: Cormorant Garamond, large, light weight, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28` (generous).
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-linen` (1px).
- Card radius: minimal — `rounded-none` or `rounded-sm`. Premium = sharp edges, not pill cards.
- Soft shadows only on hover: `shadow-[0_18px_40px_-24px_rgba(26,23,20,0.35)]`.

## Buttons
- Primary (accent): solid champagne bg, ink text, uppercase tracking, `px-8 py-3.5 text-xs tracking-[0.2em]`. Hover: champagne-deep.
- On dark sections: champagne bg + ink text, or outlined `border border-champagne text-champagne` hover `bg-champagne text-ink`.
- Secondary: `border border-espresso text-espresso` hover `bg-espresso text-cream`.
- No rounded-full pills except variant selectors (small). Keep premium/sharp.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive queries referencing nearby text.
- Product cards: 4:3 or 1:1. Hero: 16:9 full-bleed. Reels: 9:16 vertical.

## Do's
- Use Cormorant Garamond for all serif headings.
- Keep accent (champagne) restrained — buttons, stars, small labels, hairline accents.
- Generous whitespace; let imagery breathe.
- Uppercase wide-tracked product names.
- Subtle transitions: `transition-all duration-500 ease-out`.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full large buttons. No drop shadows on resting cards.
- No champagne text on light backgrounds (low contrast).
- No generic e-commerce clutter (badges, sale tags, busy grids).
- Don't stack single-column on desktop; use multi-column editorial layouts.
