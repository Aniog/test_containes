# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, refined. Premium demi-fine gold jewelry presented with generous whitespace, hairline dividers, and soft shadows. Never loud, never discount-looking.

## Color Palette (warm editorial neutrals + gold accent)

| Token | Hex | Usage |
|---|---|---|
| `ivory` | #FAF6F0 | Page background — warm off-white |
| `cream` | #F3EDE3 | Alt section background, cards |
| `sand` | #E7DCC9 | Subtle borders, hairlines on dark |
| `ink` | #1C1917 | Primary text, deep espresso-black |
| `espresso` | #44382E | Secondary headings on light |
| `taupe` | #8A7B68 | Muted body text, captions |
| `gold` | #B08D4C | Primary accent — buttons, stars, links hover |
| `gold-dark` | #96773B | Accent hover state |
| `gold-light` | #D9C08F | Soft metallic highlight, badges |
| `forest` | #23201B | Footer / newsletter dark blocks |

Rules:
- Body text on light backgrounds: `text-ink` or `text-taupe`. Never light-gray-on-white below 4.5:1 contrast.
- On dark blocks (`forest`/`ink`): text `ivory`/`sand`, accent `gold-light`.
- Accent gold used sparingly: CTAs, stars, price emphasis, hover states.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600, often italic for editorial accents.
- Body & UI: **Inter** (sans), 400–600.
- Product names: UPPERCASE serif, `tracking-[0.18em]` or wider.
- Eyebrow labels: sans, UPPERCASE, `text-xs tracking-[0.25em] text-gold`.
- Headline scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`.

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-5 md:px-10`.
- Section vertical rhythm: `py-16 md:py-24 lg:py-28`.
- Generous whitespace; avoid cramped grids. Product grid gaps: `gap-6 md:gap-10`.

## Borders & Dividers
- Hairlines: `border-sand` or `border-ink/10`, 1px.
- No heavy borders. Cards mostly borderless with soft shadow on hover.

## Shadows
- Resting: none or `shadow-[0_2px_12px_rgba(28,25,23,0.04)]`.
- Hover lift: `shadow-[0_16px_40px_rgba(28,25,23,0.10)]`.

## Buttons
- Primary: solid gold — `bg-gold text-ivory hover:bg-gold-dark`, `tracking-[0.2em] uppercase text-xs`, `px-8 py-4`.
- Outline: `border border-ink text-ink hover:bg-ink hover:text-ivory`.
- On dark: solid gold or `border-ivory/40 text-ivory`.
- No rounded-full for CTAs; use `rounded-none` for editorial sharpness. Pills allowed for variant selectors.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds, soft directional light.
- Product ratio 4x5-ish (use 3x4), hero 16x9, UGC reels 9x16.
- Hover: subtle scale `group-hover:scale-105 transition duration-700`.

## Do's
- Hairline dividers between sections.
- Italic serif accents inside headlines.
- Consistent uppercase tracking for labels.

## Don'ts
- No bright saturated colors (no pure black #000 backgrounds, no neon).
- No heavy drop shadows, no gradients with multiple hues.
- No cluttered badges/sale stickers everywhere.
