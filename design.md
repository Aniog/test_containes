# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry that feels intimate and considered — not loud, not discount-looking, not generic. Soft warmth, generous whitespace, refined type, hairlines.

## Color Palette
A single confident direction: warm ivory base with deep espresso type and a restrained brushed-gold accent. The palette is consistent site-wide; no competing accent colors.

| Token | Hex | Role |
| --- | --- | --- |
| `ivory` | `#FAF6F0` | Page background (warm cream) |
| `sand` | `#F2EBDD` | Section variant background |
| `card` | `#FFFFFF` | Product cards, raised surfaces |
| `espresso` | `#1F1A14` | Primary text / dark sections |
| `espresso-soft` | `#2A2419` | Slightly lifted dark surfaces |
| `taupe` | `#6B5D4F` | Secondary / muted text on light |
| `taupe-light` | `#9B8E7E` | Tertiary text, captions |
| `hairline` | `#E8DFD0` | Borders, dividers on light |
| `gold` | `#B08D57` | Primary accent (buttons, icons) |
| `gold-deep` | `#8E6F3D` | Accent hover |
| `blush` | `#E9D9C9` | Soft warm secondary (rare) |

**Contrast:** espresso on ivory is 12.5:1 (AAA). Gold buttons use espresso text on gold (5.2:1, AA). Never put light text directly on gold — use a subtle hover/pressed gold-deep with white text only for hero overlays.

## Typography
- **Display / Serif:** "Cormorant Garamond" (Google Fonts, weights 300, 400, 500, 600). Used for hero headline, section headlines, product names, pull-quotes, brand logo. Italic 400 for editorial flourishes.
- **Body / UI Sans:** "Inter" (Google Fonts, weights 300, 400, 500, 600). Used for nav links, body copy, UI controls, prices, button labels, captions.
- **Product names:** UPPERCASE, `letter-spacing: 0.15em`, `font-weight: 500`, serif (Cormorant). They feel like engraved labels.
- **Hero headline:** Cormorant, 56–96px, weight 400, tight tracking, italic accent possible.
- **Section headlines:** Cormorant, 32–48px, weight 500.

## Spacing & Layout
- Generous vertical rhythm. Section padding: 96–128px on desktop, 64–80px on mobile.
- Container max-width: 1280px with 24–32px gutter.
- Product grid: 4-up desktop, 2-up mobile, generous 24–32px gaps.
- Hairlines: 1px solid `hairline` — never thicker, never doubled. Use them to separate, not to box.

## Buttons
Two button styles, both feel premium:
- **Primary (solid gold):** `bg-gold text-espresso` with `hover:bg-gold-deep`. Subtle 1px ring of `gold-deep` for crisp edge. Letter-spacing 0.1em on label, uppercase, 14px, height 48–52px. Optional outlined variant.
- **Secondary (outlined dark):** 1px solid `espresso`, text `espresso`, transparent bg, hover fills with `espresso` + `text-ivory`. Used for "Add to Cart" on light cards.

## Cards
- White `card` surface on `ivory` background.
- Rounded corners: 4–6px (very subtle, not playful).
- Shadow: `0 1px 2px rgba(31,26,20,0.04), 0 8px 24px rgba(31,26,20,0.04)`.
- Image zoom on hover: scale 1.04 over 700ms ease-out.
- Second image cross-fade on product card hover.

## Imagery
- Warm gold jewelry against dark or neutral backgrounds.
- Hero is editorial: model + jewelry, warm side-light.
- Lifestyle UGC framed like Instagram Reels (vertical 9:16).
- Backgrounds use `data-strk-bg` referencing nearby text.

## Motion
- Subtle, slow, editorial. Durations 500–800ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (gentle ease-out).
- No bouncy springs. No large translations. Subtle opacity + 8–16px slide.
- Nav background fades in over 300ms on scroll past 40px.

## Voice
- Confident but warm. Sentence case in body, uppercase in product names only.
- Never shouty. Never exclamatory. Avoid "amazing", "stunning", "incredible".
- Preferred words: "crafted", "considered", "treasured", "quiet", "intentional", "made to last".

## Don'ts
- No red, no neon, no bright primaries.
- No all-caps body copy or all-caps buttons.
- No thick borders, no heavy drop shadows.
- No icons competing with the gold accent.
- No emoji, no decorative flourishes that feel mass-market.
- No discount badges, "SALE!" stickers, or countdown timers.
- No "Add to cart" buttons colored bright green or red.
