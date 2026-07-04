# Velmora Fine Jewelry — Design System

## Brand
Quiet luxury, warm, editorial. Premium demi-fine jewelry. **Not** loud, **not** discount-looking, **not** generic e-commerce.

## Color palette (commit to ONE direction sitewide)
A warm, editorial "ivory + ink + champagne" scheme that flatters gold jewelry.

| Token            | Hex       | Usage                                                          |
| ---------------- | --------- | -------------------------------------------------------------- |
| `cream`          | `#F6F1EA` | Page background — soft warm ivory                              |
| `ivory`          | `#FBF7F1` | Section background variant, card surfaces                      |
| `ink`            | `#1F1A16` | Primary text, dark sections, deep contrast                     |
| `ink-soft`       | `#3A312A` | Secondary text on cream                                        |
| `taupe`          | `#8C7A66` | Muted text, meta info, captions                                |
| `hairline`       | `#E5DDD0` | Thin dividers, borders                                         |
| `gold`           | `#C9A86A` | Accent (CTA, links, badges, highlights, buttons)               |
| `gold-soft`      | `#D9BE89` | Hover/secondary gold                                           |
| `gold-deep`      | `#A8864A` | Pressed/dark gold                                              |
| `white`          | `#FFFFFF` | Cart drawer surface, product gallery bg                        |

Contrast checked: `ink #1F1A16` on `cream #F6F1EA` is **15.2:1** (AAA). `gold #C9A86A` is **only used as accent** (text, fills, borders) — never as the sole text color on light surfaces for body copy.

## Typography
- **Serif (headings, product names, brand):** Cormorant Garamond — 300/400/500/600/700
- **Sans (body, UI):** Inter — 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing 0.12em–0.2em, weight 500, serif.
- **Editorial captions:** serif italic at 14–16px, generous leading.
- **Section eyebrows (optional):** sans 11px UPPERCASE, letter-spacing 0.3em, color `taupe`.

## Spacing & layout
- Generous whitespace. Section vertical rhythm: `py-20 md:py-28 lg:py-32`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: 1px `hairline`, full-width, max 80% container.
- No drop-shadow on cards by default — rely on negative space. Soft shadow only on hover: `shadow-[0_8px_30px_rgba(31,26,22,0.08)]`.

## Buttons
- **Primary (accent):** solid `ink` background, cream text, uppercase sans, letter-spacing 0.18em, 12–14px, px-8 py-4. Hover → `ink-soft`. Pressed → `ink` with inset. Rounded `rounded-none` (editorial square).
- **Secondary (outlined):** 1px `ink` border, transparent bg, ink text. Hover → bg `ink`, text `cream`.
- **Gold accent (newsletter, badge):** solid `gold` background, `ink` text. Used sparingly.
- All buttons: `transition-colors duration-300`, no scale, no aggressive shadow.

## Motion
- Subtle only. 200–400ms cubic-bezier(0.22, 1, 0.36, 1) (easeOutQuart feel).
- Image hover: opacity crossfade (0.5s) for second product image.
- No bouncy springs. No parallax. Respects `prefers-reduced-motion`.

## Imagery
- Warm-lit gold jewelry on dark/neutral/ivory backgrounds.
- Editorial portrait crops (model + jewelry), close-up macro product shots.
- Lifestyle UGC: vertical 9:16 reels-style cards with caption overlay.
- Use `data-strk-img` referencing nearby text IDs.

## Do's
- Commit to ivory + ink + gold everywhere — no random greys, no blue links, no red error.
- Use `ink` for primary text, never `taupe` for body copy.
- Hairline 1px borders for separation, not heavy cards.
- Editorial typography: serif for everything that should feel premium.
- Generous padding around CTAs.

## Don'ts
- No bright primary blue / red / green (those scream generic e-com).
- No "SALE 50% OFF" red badges.
- No emoji icons — use `lucide-react` stroke icons.
- No Inter for product names or hero headlines.
- No boxy cards with hard shadows as default — let whitespace breathe.
- No busy multi-color category icons.
