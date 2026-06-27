# Velmora Fine Jewelry — Visual Design System

## Brand Mood
Quiet luxury. Warm. Editorial. Premium demi-fine — never loud, never discount, never generic e-commerce. Every screen should feel like a curated magazine spread.

## Color Palette (commit to ONE direction)
| Token | Hex | Usage |
| --- | --- | --- |
| `bone` | `#F5F1EA` | Primary canvas, page background |
| `ivory` | `#FBF8F3` | Cards, raised surfaces |
| `taupe` | `#E8DCC8` | Secondary surfaces, dividers, hover washes |
| `champagne` | `#C9A96E` | Gold accent — buttons, lines, dots, hairline borders |
| `champagne-soft` | `#D9BE8E` | Lighter gold, hover state |
| `espresso` | `#1F1814` | Primary text, dark sections, inverse surface |
| `espresso-soft` | `#3A2F26` | Secondary text on light bg |
| `muted` | `#7A6F65` | Muted text, captions |
| `line` | `#E2D7C5` | Hairline dividers on light bg |
| `rose` | `#E6CFC0` | Subtle warm accent for hover washes |

Dark inverse: dark sections use `espresso` background, `bone` for text, `champagne` for accents.

Contrast & accessibility:
- Body text on `bone`: `espresso` (contrast ratio ≥ 13:1) — passes AAA.
- Body text on `espresso`: `bone` — passes AAA.
- Champagne on bone — only for non-text decorative accents. For interactive elements, always pair with a text color of `espresso` or `bone` so labels stay AA/AAA.
- Always set explicit `text-*` classes on data surfaces (cards, tables, drawers, empty states) — never inherit.

## Typography
- **Serif (headings, product names, hero copy):** Cormorant Garamond — light/regular weights, generous tracking.
- **Sans (body, UI, nav, buttons):** Inter — 300/400/500/600 weights.
- Product names: **UPPERCASE**, `tracking-[0.18em]`, font-medium, serif.
- Hero headline: serif, `font-weight: 400`, very large (mobile ~48px, desktop ~96px).
- Body copy: `font-weight: 400`, `text-[15px]` or `text-base`, `leading-relaxed`.

CSS variable names map to Tailwind v4 `@theme` tokens:
`--color-bone`, `--color-ivory`, `--color-taupe`, `--color-champagne`, `--color-espresso`, `--color-muted`, `--color-line`, `--color-rose`.
`--font-serif`, `--font-sans`.

## Layout
- Max content width: `1440px` (12-col grid on desktop, edge-to-edge on mobile).
- Container horizontal padding: `px-5` mobile / `px-10` desktop.
- Generous vertical rhythm: section vertical padding `py-20` mobile / `py-32` desktop.
- Hairline `1px` dividers in `champagne` or `line`, never bold borders.

## Iconography
- Lucide React, `stroke-width: 1.25` (thinner = more refined).
- Icons inherit currentColor.

## Imagery
- Editorial warm-tone photography. Warm gold jewelry on bone, taupe, or espresso backgrounds.
- Aspect ratios: 4:5 product cards, 3:4 hero model, 2:3 category tiles, 9:16 UGC reels.
- All images fill their containers via `object-cover`.

## Buttons
- **Primary (champagne):** solid champagne bg, espresso text, uppercase, `tracking-[0.2em]`, no rounding or `rounded-none`, padding `px-8 py-4`. Hover: champagne-soft.
- **Secondary (outline):** transparent bg, `1px` champagne border, espresso text. Hover: champagne bg + bone text.
- **Ghost:** transparent bg, espresso text, champagne underline on hover.
- All buttons: `transition-all duration-300`, subtle hover translate-y of `0` (no movement, only color).

## Hover & Motion
- Subtle 300ms transitions on color, opacity, transform.
- Product card hover: image swap, faint scale `1.02`, opacity overlay lift.
- UGC reel: horizontal scroll-snap.
- No bouncy or playful animations. Smooth, soft, restrained.

## Navigation
- Sticky, transparent over hero, `bg-bone/95 backdrop-blur` after 80px scroll.
- Center links, uppercase, `tracking-[0.2em]`, no background hover.
- Right cluster: search icon (1.25 stroke), cart icon with item count badge in champagne.

## Cards & Surfaces
- Cards: `bg-ivory` with `1px` hairline `border-line`.
- No drop shadows. If elevation needed: `shadow-[0_4px_24px_rgba(31,24,20,0.04)]` — extremely soft.
- Drawer/modal: `shadow-[0_24px_48px_rgba(31,24,20,0.18)]`.

## Do / Don't
**Do**
- Commit to whitespace — when in doubt, leave it empty.
- Use serif for product names, headlines, and editorial copy.
- Uppercase + wide letter-spacing for category and navigation labels.
- Pair any image with explicit readable text color underneath.

**Don't**
- Don't use red, neon, or saturated accent colors — they read as discount.
- Don't use drop shadows > 8% opacity.
- Don't use the champagne color for body copy.
- Don't center long-form copy — keep reading width ~60ch, left-aligned for paragraphs.
- Don't stack everything in single-column on desktop — use proper multi-column layouts.
- Don't rely on inherited colors for visible text — set explicit classes.