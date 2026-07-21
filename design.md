# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, intimate. A dark jewel-box base that flatters gold.
Premium demi-fine jewelry — never loud, never discount-looking, never generic.

## Color Palette (named Tailwind colors — no magic hex values in class strings)

| Token        | Hex       | Usage |
|--------------|-----------|-------|
| `ink`        | #171310   | Primary deep base — page backgrounds (dark sections), primary text on light |
| `espresso`   | #221B15   | Slightly lifted dark surface (footer, cards on dark) |
| `cream`      | #F6F1E8   | Primary light background (editorial sections) |
| `sand`       | #EAE1D3   | Secondary light background, subtle fills |
| `gold`       | #C6A15B   | Accent — CTAs, stars, active states, hairlines on dark |
| `gold-soft`  | #DCC79E   | Hover state of gold, soft metallic highlights |
| `bronze`     | #8A6D3B   | Deep metallic — small labels, eyebrows, links on light |
| `stone`      | #7C7265   | Muted body text on light backgrounds |
| `fog`        | #A79C8D   | Muted body text on dark backgrounds |
| `line`       | #E2D8C6   | Hairline dividers on light |
| `line-dark`  | #3A3128   | Hairline dividers on dark |

## Typography
- Headings / logo / product names: **Cormorant Garamond** (serif), `font-serif`.
  Product names in UPPERCASE with wide letter-spacing (`tracking-[0.18em]`+).
- Body / UI / prices / buttons: **Inter** (sans), `font-sans`.
- Eyebrow labels: sans, uppercase, `text-xs tracking-[0.3em]`, bronze or gold.

## Surfaces & Rhythm
- Alternate cream editorial sections with deep ink sections. One accent (gold) only.
- Generous whitespace: section padding `py-20 md:py-28`, container `max-w-7xl`.
- Thin hairline dividers (`border-line` / `border-line-dark`), never heavy borders.
- Soft shadows only: `shadow-[0_18px_50px_-20px_rgba(23,19,16,0.35)]`.
- Subtle hover transitions: image scale `duration-700`, color/opacity `duration-300`.

## Buttons
- Primary: solid gold bg, ink text, uppercase tracking-wide, no radius (sharp editorial) or `rounded-none`.
- Secondary: outlined — `border border-gold text-gold` on dark, `border-ink text-ink` on light.
- Hover: soften to gold-soft / fill invert. Transitions 300ms.

## Do's
- Large editorial serif headlines with italic accents for emotion words.
- Uppercase micro-labels (eyebrows) above headings.
- Let imagery breathe: full-bleed hero, 4:5 product cards, 9:16 reel cards.
- Strong contrast: cream text on ink, ink text on cream, gold only as accent.

## Don'ts
- No bright/saturated colors, no gradients, no badges shouting "SALE".
- No heavy borders, no busy patterns, no cramped grids.
- No low-contrast text (never gold body text on cream, never fog on espresso).
