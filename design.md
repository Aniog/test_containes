# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury. Editorial. Warm. Premium demi-fine jewelry — never loud, never discount-looking.
Reference: Mejuri x Roen x AUrate. Light-filled studio photography, soft warm shadows, hairlines, generous whitespace.

## Direction (one confident choice)
**Warm Editorial Daylight** — a warm ivory base, deep espresso ink, antique gold metallic accent.
A dark espresso footer + occasional dark panels balance the light base, so the brand feels grounded and premium rather than airy-only.

## Color tokens
- `cream`        `#F6F0E4`   page background, soft warmth
- `cream-soft`   `#FBF7EE`   cards, product image wells, drawer surface
- `cream-warm`   `#EFE6D2`   subtle warm wash / hover for cream surfaces
- `ink`          `#1B1611`   primary text, hairlines on cream, dark panels
- `ink-soft`     `#6E6356`   secondary / muted text on cream
- `line`         `#D9CFBE`   hairline dividers, borders
- `gold`         `#B48A4A`   accent (CTA, links, focus, dot markers)
- `gold-soft`    `#D9B677`   secondary accent, badge fills, hover tints
- `ink-deep`     `#15110D`   hero overlay, footer, dark sections
- `ivory`        `#F6F0E4`   text on dark surfaces (alias of cream)
- `danger`       `#8E2F2A`   destructive (used sparingly)

Contrast pairs (WCAG AA+):
- `ink` on `cream`  ≈ 13.6:1
- `cream` on `ink`  ≈ 13.6:1
- `gold` on `ink`   ≈ 6.4:1
- `ink-soft` on `cream` ≈ 4.7:1
- `cream-soft` on `ink` ≈ 13.0:1

## Typography
- **Headings / product names / hero copy** — Cormorant Garamond, weights 400/500/600.
  Use italic 500i for editorial accents.
- **Body / UI / buttons / nav** — Inter, weights 300/400/500/600.
- **Product names in detail & cards** — UPPERCASE Inter 500 with `tracking-[0.18em]` and 0.9em size.
- **Hero headline** — Cormorant 500, 4xl → 7xl, leading tight.
- **Section eyebrows** — Inter 500 uppercase tracking-[0.28em] text-[11px] text-ink-soft.
- **Body copy** — Inter 400, base size, leading 1.7 on cream; lighter leading on dark.

## Layout & spacing
- Max content width: 1320px. Product grid max 1280px.
- Generous vertical rhythm. Section padding `py-20 md:py-28` for main, `py-12 md:py-16` for tighter sections.
- Hairline dividers: 1px `border-line` or `border-ink/10` on dark. Use `divide-line` on lists.
- Use `tracking-[0.18em]` to `tracking-[0.32em]` for uppercase editorial labels.
- Buttons: solid (gold) and outline (ink on cream / ivory on dark). All caps tracking-[0.22em] text-[11px] px-7 py-3.5.

## Iconography
- Lucide React, stroke 1.5, sizes 16/18/20. Never filled, never colored with bright tones.
- Cart icon, search icon, social icons in line style. Stars for ratings use `lucide-react` Star filled `fill-gold text-gold` size 14.

## Cards & hover
- Product card image wells: `bg-cream-soft` square area, image object-cover.
- Card hover: swap to second image with cross-fade 500ms; reveal quick-add chip on cream-soft background.
- Card padding minimal, generous surrounding whitespace.
- Subtle shadow only on drawer and on product card on hover: `shadow-[0_24px_60px_-30px_rgba(27,22,17,0.35)]`.

## Imagery
- Use `data-strk-img` (content) and `data-strk-bg` (background) tags. Provide empty SVG placeholder src.
- All queries reference IDs of nearby text elements (most-specific first).
- Tone: warm-lit gold jewelry on model/neutral/dark backgrounds.

## Do's
- Use serif for product names of features & headlines.
- Allow big editorial imagery; let it breathe.
- Use hairlines, not chunky borders.
- Use gold for accents only, not large fills.

## Don'ts
- Never use red/coral CTAs, neon, or discount-feel banners.
- Never use more than 2 typefaces.
- Never put gold on gold.
- Never crowd the layout; whitespace is the product.
