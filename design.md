# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not
discount-looking, not generic e-commerce. Generous whitespace, large editorial
imagery, thin hairline dividers, restrained accent color, soft shadows,
subtle hover transitions.

## Color Palette (committed direction: warm ivory + deep espresso + gold)
- `cream`      `#F6F1E9`  Primary page background (warm ivory)
- `ivory`      `#FBF8F2`  Cards / raised surfaces
- `espresso`   `#1F1A16`  Deep ink for text and dark editorial sections
- `ink`        `#2A2420`  Body text on light surfaces
- `muted`      `#8A7F73`  Secondary / caption text (warm taupe)
- `gold`       `#B08D57`  Primary accent (warm metallic gold)
- `gold-soft`  `#C9AE82`  Hover / lighter gold
- `line`       `#E2D9CC`  Hairline dividers / borders (warm taupe)
- `stone`      `#EDE6DA`  Subtle section backgrounds

Semantic token pairs (Tailwind):
- text-ink on bg-cream / bg-ivory
- text-cream on bg-espresso
- text-gold for accent labels and links
- border-line for hairlines

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE, `tracking-[0.18em]`, `text-sm`/`text-base`.
- Eyebrow / kicker labels: UPPERCASE, `tracking-[0.25em]`, `text-xs`, `text-gold`.
- Hero headline: serif, large, `leading-[1.05]`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Card radius: `rounded-none` (editorial, sharp) or `rounded-sm` max. Keep edges
  crisp; avoid large rounded corners.

## Buttons
- Primary (accent): `bg-espresso text-cream` or `bg-gold text-cream`, solid,
  uppercase, `tracking-[0.18em]`, `text-xs`, `px-8 py-4`, hover slightly
  darker / soft shadow.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Pill variant selectors: `border border-line`, active `bg-espresso text-cream`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: primary image + hover second image.
- UGC reels: vertical 9:16 cards with serif caption overlay.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent gold restrained — for CTAs, kickers, small highlights.
- Uppercase wide-tracked product names.
- Soft, subtle transitions (`duration-300`, `ease-out`).

## Don'ts
- No large rounded corners, no drop shadows on cards (keep flat/editorial).
- No loud/discount colors (no pure reds, no neon).
- No generic e-commerce gradients.
- Do not place low-contrast text (e.g. gold on cream) for body copy — use ink.
