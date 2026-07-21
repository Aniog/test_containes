# Velmora Fine Jewelry — Design System

## Brand voice
Quiet luxury. Warm. Editorial. Demi-fine gold jewelry — premium but accessible.
Never loud, never discount-looking, never generic e-commerce.

## Visual direction
Warm cream + deep espresso + brushed antique gold.
The site should feel like a calm, sunlit atelier — never glossy, never stark, never cold.

## Color palette
Commit to ONE palette. Do not introduce extra colors.

| Token        | Hex      | Use                                                         |
| ------------ | -------- | ----------------------------------------------------------- |
| `cream`      | #F4ECDF  | Primary page background. Warm off-white.                    |
| `cream-2`    | #EBE0CE  | Subtle surface (cards, hover backgrounds).                  |
| `bone`       | #FBF6EC  | Lightest tint, newsletter / hero overlay.                    |
| `espresso`   | #1F1A14  | Dark sections, primary text on cream.                       |
| `espresso-2` | #2A2419  | Softer dark for cards inside dark sections.                 |
| `ink`        | #2A2419  | Body text on cream (same as espresso-2 for consistency).    |
| `muted`      | #6B5E4D  | Secondary text, captions, helper.                           |
| `gold`       | #B08A4A  | Primary accent — brushed antique gold, NEVER shiny yellow.  |
| `gold-2`     | #9A7438  | Hover / pressed accent.                                     |
| `gold-soft`  | #D9B97F  | Light gold tint, badges, thin underlines.                   |
| `line`       | #D9CFB9  | Hairline dividers, borders on cream.                        |
| `line-dark`  | #3A322A  | Hairline dividers on espresso.                             |
| `white`      | #FFFFFF  | Cart drawer, modal surfaces only.                           |

Contrast: `espresso` on `cream` ≈ 13:1 (AAA). `gold` is decorative only — never used for body text on cream.

## Typography
- **Serif (display + product names):** Cormorant Garamond — weights 300 / 400 / 500 / 600
- **Sans (body + UI):** Inter — weights 300 / 400 / 500 / 600
- **Product names:** UPPERCASE, letter-spacing 0.18em, weight 500, serif
- **Section titles (display):** Cormorant Garamond, weight 400, italic-friendly
- **Eyebrow labels:** Inter, UPPERCASE, letter-spacing 0.22em, size 11px, weight 500, color `muted` or `gold-soft` on dark

Sizes (use Tailwind utilities):
- Display: `text-5xl md:text-6xl lg:text-7xl`
- Section title: `text-3xl md:text-4xl lg:text-5xl`
- Product name: `text-xs md:text-sm` (uppercase + wide tracking)
- Body: `text-sm md:text-base` Inter
- Caption / eyebrow: `text-[11px]`

## Spacing
- Section vertical padding: `py-20 md:py-28 lg:py-32`
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`
- Hairline divider: 1px solid `line` or `line-dark`, `max-w-xs` or full-width depending on context

## Imagery
- Warm, editorial photography. Gold jewelry on warm neutral / deep brown backgrounds.
- Aspect ratios: product cards 3x4, hero 4x5 mobile / 16x9 desktop, UGC 9x16 vertical.
- Image fills entire card; no white frames.

## UI patterns
- **Buttons:**
  - Primary: solid `espresso` background, `cream` text, uppercase, tracking 0.2em, padding 14px 28px, no border-radius (square 2px). Hover: `gold` background.
  - Secondary: transparent with `espresso` 1px border, `espresso` text. Hover: `espresso` background, `cream` text.
  - On dark backgrounds: primary becomes `cream` bg + `espresso` text, secondary is `cream` border + `cream` text.
- **Inputs:** 1px solid `line`, no radius, padding 14px 16px, focus border `espresso`, no glow.
- **Cards:** no border, no shadow on cream. On dark sections: 1px `line-dark` and a very subtle 1px outer gold-soft glow on hover.
- **Hover transitions:** `transition-all duration-300 ease-out`. No bounce. No scale-jumps above 1.02.

## Do
- Use generous whitespace.
- Use hairline 1px dividers.
- Use italic serif for emotional moments (testimonials, brand story).
- Let imagery breathe.

## Don't
- Don't use bright primary colors (no red/blue/green accents).
- Don't use drop shadows beyond `shadow-sm`.
- Don't use rounded corners above 2px on any container.
- Don't use emoji.
- Don't use uppercase sans-serif headings.
- Don't use the gold accent for long body text.
