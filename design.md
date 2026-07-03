# Velmora Fine Jewelry — Visual Identity

## Brand Mood
Quiet luxury. Warm, editorial, restrained. Premium demi-fine jewelry that feels personal
and considered — never loud, never discount-looking, never generic. The whole site
should feel like a slow, considered magazine spread rather than a shop floor.

## Color Palette
Commit to ONE warm, ivory-on-ink system with a muted antique-gold accent. No
fluorescent gold, no bright yellow, no neon.

| Token        | Hex      | Use                                                       |
|--------------|----------|-----------------------------------------------------------|
| `ivory`      | #F4EEE2  | Page background (warm canvas)                             |
| `ivory-soft` | #FBF7EF  | Slightly lighter wash for alternating sections            |
| `ink`        | #181410  | Primary text, dark surfaces (footer, hero overlay)        |
| `ink-soft`   | #2A231B  | Slightly lifted dark surface, dark cards                  |
| `gold`       | #A47E3B  | The brand accent. CTAs on dark, hairlines, stars, links   |
| `gold-soft`  | #C9A968  | Hover/lighter state of gold, gradient stops               |
| `taupe`      | #6E5F4E  | Secondary / muted body text                               |
| `hairline`   | #D8CDB8  | Thin dividers, borders, muted separators                  |
| `wash`       | #E8DFCC  | Subtle background tints, badges, inputs                   |
| `oxblood`    | #5A1F22  | Single editorial accent for the newsletter block only     |

Contrast: ink-on-ivory ≥ 11:1, gold-on-ink ≥ 4.6:1, taupe-on-ivory ≥ 4.5:1.

## Typography
- **Serif (display + product names)**: `Cormorant Garamond` — weights 300 / 400 / 500.
  Used for H1, H2, H3, product titles, hero copy, brand story, large editorial
  pull-quotes. Slightly negative tracking on huge sizes, generous leading.
- **Sans (body + UI)**: `Inter` — weights 300 / 400 / 500 / 600. Used for nav,
  body copy, buttons, inputs, prices, meta. Always uppercase with `tracking-[0.18em]`
  for product names, nav micro-copy, and section eyebrows.

Product names display in UPPERCASE with `letter-spacing: 0.18em` to feel like
quiet embossed type. Section eyebrows use the same treatment at smaller size.

## Layout & Spacing
- Mobile-first. Generous vertical rhythm. Sections separated by 96–160px on desktop,
  64–96px on mobile.
- Page max-width `1440px`. Inner content gutters `px-6 md:px-10 lg:px-16`.
- Hairlines are 1px, color `hairline` (#D8CDB8). Use them between sections, around
  cards, between footer columns. Never heavy rules.
- Cards have no heavy shadows; prefer a soft `0 30px 60px -30px rgba(24,20,16,0.18)`
  shadow only on hover or on the cart drawer.
- Buttons: solid `ink` with `ivory` text, or outlined `ink` border on `ivory`. Gold
  is reserved for the SHOP NOW / ADD TO CART call to action on dark surfaces, and
  for the star icons.

## Imagery
- Warm, dim, editorial. Gold-on-skin, gold-on-stone, gold-on-cream. Avoid stocky
  white-background product photography — it kills the mood.
- Always overlay a soft warm gradient on hero/UGC imagery to keep the palette
  cohesive.
- Reel-style cards: 9:16 vertical. Brand story: 4:5. Product card images: 4:5.
  Category tiles: 4:5. Hero: 16:9 on desktop, 4:5 on mobile.

## Do
- Keep type weight light (300/400) for big serif moments.
- Use the muted gold sparingly — never for body text.
- Use hairline dividers generously.
- Add subtle hover transitions (200-400ms, ease-out).
- Preserve generous whitespace; do not crowd.

## Don't
- No bright/saturated gold, no yellow.
- No dark-on-dark text, no low-contrast gold on cream.
- No drop shadows on every card.
- No emojis. No "BUY NOW!" shouting.
- No big bold uppercase body text — uppercase is reserved for micro-eyebrows and
  product names.
- No discount language, no countdown timers, no "limited time" energy.
