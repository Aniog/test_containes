# Velmora Fine Jewelry — Visual Identity

## Mood
Quiet luxury. Warm, editorial, intimate. A candlelit velvet jewelry box — deep cocoa-plum base, ivory text, brushed-gold accents. Never loud, never discount-looking, never generic e-commerce.

## Palette (Tailwind config: `theme.extend.colors.velmora`)
| Token | Hex | Usage |
|---|---|---|
| `bg` | #17100E | Deepest cocoa-plum — page background, footer |
| `surface` | #201714 | Raised panels, cards, drawers, newsletter block |
| `elevated` | #2C1F1A | Hover states, secondary surfaces |
| `ink` | #F1E8DB | Warm ivory — primary text on dark |
| `muted` | #B9A18C | Warm taupe — secondary text, captions |
| `gold` | #C8A25E | Brushed gold — primary accent, CTAs, stars, icons |
| `gold-light` | #E5C88A | Gold hover / gradient highlight |
| `gold-deep` | #96703A | Deep gold — gradient shadow, borders on dark |
| `line` | #392C24 | Warm hairline — dividers, card borders |

Contrast rules: body text on `bg`/`surface` is always `ink` or `muted` (both pass AA on these surfaces). Gold is used for accents, prices, icons, and large UI text; long paragraphs never use gold. CTA buttons: `bg-gold text-[#1d130b]` (dark brown-gold ink, 7:1 contrast).

## Typography
- **Serif (headings, logo, product names):** Cormorant Garamond (`font-display`), weights 400–600, often `tracking-[0.18em] uppercase` for product names, italic for editorial accents.
- **Sans (body, UI, prices):** Manrope (`font-body`), weights 300–700. Eyebrow labels: `text-[11px] uppercase tracking-[0.3em]`.
- Scale: hero `text-5xl md:text-7xl`, section titles `text-3xl md:text-5xl`, product names `text-sm md:text-base tracking-[0.18em]`.

## Shape & Depth
- Sharp, editorial geometry: `rounded-none` or `rounded-sm` only. No pill cards.
- Hairlines: `border border-line` (1px). Dividers: `border-line`.
- Shadows: soft, warm, low-opacity — `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]`.
- Motion: `transition-all duration-300/500 ease-out`, image `scale-105` on hover, fade-up reveals. Subtle only — no bounce.

## Components
- **Buttons:** solid gold (`bg-gold hover:bg-gold-light`) or outlined (`border border-gold/60 hover:bg-gold/10`), `uppercase tracking-[0.25em] text-[11px] font-semibold py-4 px-8`.
- **Product cards:** image 4:5 on `surface`, name uppercase serif, price in `gold` sans, hairline top border on details.
- **Eyebrow:** small gold uppercase tracking-widest label above section titles.
- **Accordions:** hairline-separated, serif titles, plus/minus icon.

## Do's
- Generous whitespace: sections `py-20 md:py-28`, max width `max-w-7xl mx-auto px-5 md:px-8`.
- Warm-lit gold jewelry imagery on dark or neutral backgrounds.
- Thin gold rules, italic serif pull quotes, numbered editorial details.

## Don'ts
- No bright white backgrounds, no pure black text blocks, no blue/purple links.
- No heavy borders, no loud badges, no red "SALE" graphics.
- No low-contrast gold-on-taupe body text, no gray-on-gray muted text.
