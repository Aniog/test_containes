# Velmora Fine Jewelry — Visual Style Guide

## Brand
Quiet luxury, warm, editorial. Premium demi-fine jewelry. **NOT** loud, **NOT** discount-looking.

## Color Palette
Commit to a single, cohesive "warm cream editorial" direction.

| Token            | Hex       | Usage |
|------------------|-----------|-------|
| `bg-cream`       | `#F6F1EA` | Page background |
| `surface-ivory`  | `#FBF8F3` | Card / elevated surface |
| `surface-sand`   | `#EEE6D9` | Subtle alt surface |
| `ink`            | `#1B1410` | Primary text (warm espresso, not pure black) |
| `ink-muted`      | `#5C5045` | Secondary text |
| `taupe`          | `#8A7A6A` | Tertiary / labels |
| `hairline`       | `#D9CFC1` | Hairline dividers |
| `accent`         | `#B5905A` | Warm champagne gold — primary accent / CTA |
| `accent-deep`    | `#8A6A3E` | Hover / pressed state of accent |
| `accent-soft`    | `#E6D5B6` | Soft gold tints / chips |
| `success`        | `#5C6B4A` | Reserved for "in stock" / fine print success |

Contrast notes:
- `ink` on `bg-cream`: passes AAA.
- `white` on `accent` (#B5905A): ~3.7:1 — for filled buttons; use `accent-deep` for text on accent backgrounds when text size is small.
- Body text always uses `ink` or `ink-muted`, never taupe on cream (use only for tiny meta labels).

## Typography
- **Headings / display / product names**: Cormorant Garamond (Google), 300–500 weights. Product names: UPPERCASE, `tracking-[0.18em]`.
- **Body / UI**: Inter, 300–500.
- **No more than 2 typefaces.**
- Headings should breathe — `leading-tight` (1.05–1.15) for display, `leading-relaxed` for body.

## Layout / spacing
- Generous whitespace. Page max-width ~1440px. Content max-width 1280px.
- Section vertical padding: `py-20 md:py-28` minimum.
- Hairline dividers are 1px `border-hairline`, never thicker.
- Soft shadows only: `0 8px 24px -16px rgba(27,20,16,0.18)`.

## Buttons
- **Primary** (accent solid): bg `accent`, text `#FBF8F3`, uppercase, `tracking-[0.2em]`, padding `px-8 py-4`, radius `rounded-none` (editorial sharp). Hover darken.
- **Outline**: border 1px `ink`, text `ink`, transparent bg. Hover fills `ink` + text `bg-cream`.
- **Ghost** (nav): no border, subtle hover underline using hairline.

## Imagery
- Warm-lit jewelry on dark/neutral backgrounds. Lots of skin tones, soft golden light.
- Use the strk-img tag system for stock images.

## Iconography
- Lucide React, 1.25–1.5 stroke. Default size 18–20px for nav.

## Motion
- Subtle: 200–300ms ease-out on hover. No bounces. Fade + 4–8px translate for reveals.
- Nav turns solid after 24px scroll.

## Don'ts
- No red/orange sale tags.
- No emoji.
- No saturated blues/greens.
- No "shop now" red buttons.
- No stocky product cards — use clean image-first composition.
- Never use taupe text for body copy.
- Never stack elements without a hairline or whitespace separator.
