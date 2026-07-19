# Velmora Fine Jewelry — Visual Design Guide

## Brand mood
Quiet luxury. Warm, editorial, premium-but-accessible. Feels like a fashion
magazine spread, not a discount marketplace. Restraint over decoration. Whitespace
is a feature.

## Color palette (committed)
A warm cream/ivory base with deep brown-black ink and a soft brushed-gold
accent. This palette flatters 14k/18k gold jewelry under both daylight and
warm interior lighting and is widely used by demi-fine houses (Mejuri, Aurate,
Vrai). Cohesive sitewide; do not introduce new accent colors.

- `ivory`     — `#F6F0E6`  primary background (warm cream)
- `paper`     — `#FBF7F0`  elevated surface (slightly brighter ivory)
- `stone`     — `#E8DFD2`  secondary surface / hairline dividers (warm taupe)
- `ink`       — `#1B1612`  primary text (warm near-black)
- `ink-soft`  — `#3A312A`  secondary headings / strong body
- `muted`     — `#7A6F62`  body / helper text (warm gray)
- `gold`      — `#B08A4A`  accent (brushed champagne gold — restrained)
- `gold-deep` — `#8A6A33`  hover / pressed accent
- `gold-soft` — `#D9C29A`  subtle accent fill / chip background

Contrast: ink-on-ivory ≥ 13:1 (AAA). gold-on-ivory 3.0:1 — only used for
non-text decorative elements or large display text. For interactive accents
the gold is paired with ink/ivory so the click target remains AAA.

## Typography
Two faces only. No display sans-serifs.

- **Display / headings / product names:** Cormorant Garamond (400, 500, 600)
  - Generous tracking on display (`tracking-display`)
  - Product names rendered in `UPPERCASE` with `tracking-product` (0.18em)
- **Body / UI:** Inter (300, 400, 500, 600)
  - Use 300/400 for body, 500/600 for buttons and small caps labels

Sizes (mobile-first; desktop uses `md:` / `lg:`):
- Eyebrow label: 11px / 0.2em tracking / uppercase / Inter 500
- Section H2 (serif): 36 → 56px
- Hero H1 (serif): 48 → 88px
- Product name: 13px / 0.18em / Inter 500 / uppercase
- Body: 15px / Inter 400

## Spacing & layout
- Generous section padding: `py-20 md:py-32`
- Container max width: 1280px (`max-w-7xl`)
- Editorial gutters: `px-5 md:px-10`
- Vertical rhythm: multiples of 4 (Tailwind default)

## Hairlines & dividers
- Use 1px `stone` borders for rules. Never heavy black dividers.
- Decorative ornament: a small gold `◆` or `·` between section labels.

## Buttons
Two primary styles — both feel premium and never look like SaaS:

1. **Solid accent** — `bg-ink text-ivory hover:bg-ink-soft` (preferred for
   high-emphasis CTAs like "Add to Cart")
2. **Outlined accent** — `border border-ink text-ink hover:bg-ink hover:text-ivory`
   (preferred for secondary actions)
- Padding `px-8 py-4`. Letter-spacing 0.18em on label. UPPERCASE label.
- No drop shadows on buttons. Subtle 1px shift on hover, no scale bounce.

## Cards & product tiles
- No heavy drop shadows. Optional 1px `stone` border on hover only.
- Image fills card; product name centered beneath. Price below in `muted`.
- Hover swaps to second product image; quick-add fades in from below.

## Image treatment
All product/UGC imagery must be warm, low-key, editorial. Categories with
desaturated gold on dark or skin-tone backgrounds, never flat white
sweatshop shots.

## Motion
Subtle only. No bounces, no spinners, no parallax. Allowed:
- 200ms ease opacity for hover image swap
- 250ms ease-out for nav background color change on scroll
- 300ms ease-out for cart drawer slide-in
- 200ms ease for accordion open/close

## Do
- Use lots of whitespace.
- Use thin stone dividers between sections.
- Center serif headings; left-align long body copy.
- Use `ink` for primary text, `muted` for helper text.
- Use gold only for: section eyebrows, hover underlines, decorative ornament,
  rating stars, the logo accent. Never as a full button fill.

## Don't
- Don't use bright primary colors (red, blue, green, purple).
- Don't use emoji icons in the UI.
- Don't use stock illustration / clip-art. Use only real photography (via
  stock image system) or SVG ornaments.
- Don't use drop shadows on cards.
- Don't use bold sans-serif headings. Serif always for display.
- Don't stack more than 2 sans weights on one page.
- Don't use all-caps body text.
