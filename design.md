# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, restrained. Demi-fine gold jewelry presented like a fashion magazine, not a discount store.

## Color Direction: "Noir & Gilt"
A deep, refined espresso-noir base paired with warm champagne-gold accents and soft ivory surfaces. Dark editorial sections alternate with light ivory sections for rhythm.

| Token | Hex | Usage |
|---|---|---|
| `ink` | #16120E | Deep espresso noir — dark section backgrounds, primary text on light |
| `ink-soft` | #241D16 | Slightly lifted noir for cards on dark |
| `ivory` | #FAF6EF | Primary light background |
| `cream` | #F3EDE2 | Secondary light background (alternating sections) |
| `sand` | #E7DDCC | Muted surface for image placeholders / subtle fills |
| `gold` | #B08D4F | Primary accent — buttons, stars, small labels, icons |
| `gold-deep` | #96763C | Accent hover state |
| `gold-soft` | #D9C49A | Champagne gold — decorative text on dark, hairlines on dark |
| `line` | #E3DACA | Hairline borders on light |
| `line-dark` | rgba(217,196,154,0.22) | Hairline borders on dark |
| `muted` | #6E6355 | Secondary text on light |
| `muted-dark` | #B4A88F | Secondary text on dark |

Rules:
- Accent gold is used sparingly: primary CTAs, star ratings, eyebrow labels, hover underlines.
- Never large gold fills on light backgrounds except the newsletter block (gold on ink).
- All body text: `ink` on light surfaces, `ivory` on dark surfaces. Never low-contrast.

## Typography
- **Display / headings / product names:** Cormorant Garamond (serif, 300–600). Product names in UPPERCASE with `tracking-[0.14em]`–`tracking-[0.2em]`.
- **Body / UI:** Inter (sans, 300–600). Small labels uppercase `tracking-[0.2em] text-[11px]`.
- Eyebrow label pattern: `text-[11px] uppercase tracking-[0.28em] text-gold`.
- Headline sizes: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, serif weight 400–500 (never bold).

## Surfaces & Shape
- Buttons: **no rounded corners** (`rounded-none`) — sharp editorial rectangles. Solid gold fill with ink text, or 1px gold outline with gold text on dark.
- Cards: no heavy shadows; hairline `border-line` or borderless on ivory with soft `shadow-[0_20px_50px_-20px_rgba(22,18,14,0.25)]` only on hover overlays.
- Hairline dividers: `border-t border-line` (light) / `border-line-dark` (dark).
- Generous section padding: `py-20 md:py-28`.

## Motion
- `transition-all duration-300/500 ease-out` on hovers.
- Product card: image crossfade to second image + "Add to Cart" bar slides up.
- Reveal on scroll: fade + translate-y, staggered.
- Nav: transparent → ink backdrop-blur on scroll.
- No bouncy easing. Everything slow, soft, quiet.

## Imagery
- Warm-lit gold jewelry on dark espresso or soft neutral backgrounds only.
- Hero/backgrounds via `data-strk-bg`, product images via `data-strk-img` with a paired `hoverImgId` for the second-angle hover image.
- Ratios: product 4x3 & 3x4, reels 9x16, hero 16x9, category tiles 3x4.

## Don'ts
- No bright/saturated colors, no red "SALE" badges, no gradients, no pill-shaped buttons, no default blue links, no heavy drop shadows, no dark text on dark or light text on light.
