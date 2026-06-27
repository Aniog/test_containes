# Velmora Fine Jewelry — Visual Style Guide

Mood: quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud,
NOT discount-looking, NOT generic e-commerce. Generous whitespace, large
editorial imagery, thin hairline dividers, restrained accent color.

## Color palette (one confident direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)

- `--velmora-ink`     `#1C1714`  deep warm espresso (primary dark surface / text on light)
- `--velmora-cream`   `#F7F2EA`  warm ivory (page background)
- `--velmora-sand`    `#EDE4D6`  soft sand (cards / subtle panels)
- `--velmora-stone`   `#8A7E6E`  muted taupe (secondary text)
- `--velmora-gold`    `#B08A4A`  warm metallic gold (accent — buttons, links, hairlines)
- `--velmora-gold-deep` `#8C6A30` hover / pressed gold
- `--velmora-line`    `#E2D8C8`  hairline divider color

Usage: cream page background, ink text, gold accent reserved for CTAs, price,
links, and thin dividers. Sand for cards. Stone for muted/secondary text.
Strong contrast everywhere — never light text on light surface.

## Typography

- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size.
- Hero headline: large serif, tight leading.

## Spacing & layout

- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace between blocks.
- Thin hairline dividers: `border-t border-[var(--velmora-line)]`.

## Buttons (premium feel)

- Primary (accent): solid `bg-[var(--velmora-gold)] text-white`, hover
  `bg-[var(--velmora-gold-deep)]`, `tracking-[0.15em] uppercase text-xs`,
  `px-8 py-4`, subtle transition.
- Outlined: `border border-[var(--velmora-ink)] text-[var(--velmora-ink)]`,
  hover fills ink.
- Rounded: `rounded-none` or `rounded-sm` — sharp/editorial, not pill.

## Imagery

- Large editorial photos, warm gold jewelry on dark/neutral backgrounds.
- Use the Strikingly stock image system (`data-strk-img` / `data-strk-bg`).
- Subtle hover transitions (opacity, scale 1.02), soft shadows only on cards.

## Do's

- Keep accent gold restrained — use it for CTAs, prices, links, hairlines.
- Use serif for all headings and product names.
- Maintain strong text contrast (ink on cream, cream on ink).
- Generous whitespace; let imagery breathe.

## Don'ts

- No loud discount badges, no neon colors, no drop shadows on text.
- No pill buttons, no rounded-full on primary CTAs.
- No light text on light backgrounds.
- No hardcoded hex outside the palette above.
