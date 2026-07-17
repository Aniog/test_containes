# Velmora Fine Jewelry — Design System

A premium demi-fine gold jewelry DTC brand. Quiet luxury, warm, editorial.

## Mood & Direction

Quiet luxury. Editorial. Warm. Never loud, never discount, never generic e-commerce. Every element should feel like a page out of a fashion magazine: confident, restrained, and beautifully typeset.

## Color Palette

Commit to one direction: **warm ivory editorial** (cream/ivory base with deep espresso + antique gold accents). Gold jewelry photographs beautifully against this palette — it's the inverse of "every DTC brand is a black background" and signals editorial confidence.

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#FAF6EF` | Primary background (warm cream) |
| `ivory-soft` | `#F2EBDE` | Subtle alt-section background |
| `espresso` | `#1B1612` | Deep warm black, hero/section contrast, primary text |
| `espresso-soft` | `#2A221B` | Hover state on dark, dark card surface |
| `gold` | `#B8935A` | Primary accent — buttons, dividers, icons, CTA |
| `gold-soft` | `#D6B681` | Hover/light state for gold accents |
| `gold-deep` | `#8A6A3B` | Pressed/active state for gold accents |
| `ink` | `#1B1612` | Primary body text |
| `ink-muted` | `#6E6256` | Secondary text, captions, metadata |
| `hairline` | `#E5DCC9` | 1px dividers on light backgrounds |
| `hairline-dark` | `#3A3027` | 1px dividers on dark backgrounds |
| `success` | `#5C7A4A` | Subtle confirmation states |

Contrast notes:
- `ink` (#1B1612) on `ivory` (#FAF6EF) — high contrast for body text
- `ivory` on `espresso` — high contrast for dark sections
- `gold` (#B8935A) is used for accents and CTAs ONLY, never for body text on light backgrounds. On the espresso background we use ivory text for legibility.

## Typography

- **Headings / Product names / Editorial**: `Cormorant Garamond` — weight 400/500 for editorial, 600 for hero.
- **Body / UI / Buttons**: `Inter` — weight 400/500.
- **Product names**: ALWAYS uppercase, letter-spacing 0.18em–0.22em, Cormorant Garamond weight 500, sometimes 400 italic for editorial.
- **Section titles** (the "kicker" labels): Inter uppercase, 0.25em tracking, 11px, gold accent.
- **Hero headline**: Cormorant Garamond 400, 56–88px, line-height 1.05.
- **Body**: Inter 400, 15–16px, line-height 1.65.

Type scale (Tailwind):
- text-xs / text-sm — UI metadata
- text-base — body
- text-lg — emphasized body
- text-2xl / text-3xl — sub-section titles (serif)
- text-4xl / text-5xl — section titles (serif)
- text-6xl / text-7xl — hero (serif)

## Spacing & Layout

- Use generous whitespace. Section vertical padding: `py-24 md:py-32`.
- Page max-width for content: `max-w-7xl` (1280px) but breakout for full-bleed sections.
- Hairline dividers: `border-t border-hairline` (1px), never thicker.
- Container padding: `px-6 md:px-10 lg:px-16`.

## Buttons

Three flavors:
1. **Primary (filled)**: `bg-espresso text-ivory hover:bg-espresso-soft` — the main CTA. Square-ish corners, uppercase, tracking 0.18em, Inter 12px.
2. **Accent (gold)**: `bg-gold text-espresso hover:bg-gold-soft` — for hero/newsletter/special CTAs. Same shape as primary.
3. **Ghost / Underline**: text button, 1px underline offset, no border. Used for "View all", "Our Story", "Read more".
- All buttons: `tracking-[0.18em] uppercase text-xs font-medium`, padding `px-7 py-4`, `transition-colors duration-300`.
- No drop-shadows on buttons. No rounded-full pill buttons. Keep them architectural.

## Cards

- No heavy shadows. Use `border border-hairline` for product cards OR a flat warm background.
- Product card image: square, slight zoom on hover.
- "Add to Cart" overlay on hover: fades in over the image, full width at the bottom.

## Imagery

- Stock images via strk-img system.
- Hero: warm-lit close-up of gold jewelry on a model, dim, moody, on dark background.
- Product photography: gold jewelry on warm dark/neutral backgrounds.
- UGC reel cards: 9:16 vertical format, soft warm lighting, lifestyle.

## Motion

- Subtle, never showy. Easing: `ease-out`. Durations: 200–500ms.
- Image hover: 700ms slow zoom.
- Drawer: 400ms slide.
- Nav background fade: 300ms.
- Use only `transition`, `transform`, `opacity`. No bouncing, no parallax, no auto-play video on scroll.

## Iconography

- Use Lucide React icons. Stroke 1.5. Size 20 for nav, 16 for inline.

## Do

- Use serif for emotion, sans for function.
- Make every section feel like an editorial spread.
- Use uppercase with wide tracking for product names and labels.
- Commit to warm gold + cream + espresso. Nothing else.

## Don't

- Don't use bright primary colors, neon, or pastels.
- Don't use a pure black background — always warm espresso.
- Don't use emoji, gradient blobs, or generic stock patterns.
- Don't use discount badges, "SALE" copy, countdown timers.
- Don't use rounded-full pill buttons for primary CTAs.
- Don't use more than 2 font families.
