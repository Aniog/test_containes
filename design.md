# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Not loud. Not discount-feeling.
References: Mejuri, The Row, AUrate, Ana Luisa.

## Color Palette (commit sitewide)

A warm neutral / editorial scheme that flatters gold jewelry: deep ink + warm cream + antique gold.

| Token            | Hex       | Usage                                                                 |
|------------------|-----------|-----------------------------------------------------------------------|
| `ink`            | `#1A1714` | Primary text, nav background (when solid), footer, headings           |
| `cream`          | `#F4ECE0` | Page background, warm and soft — NOT yellow                           |
| `ivory`          | `#FAF5EB` | Card / surface background, slightly lighter than cream                |
| `gold`           | `#B08856` | Primary accent, CTAs, hairlines on dark, links, small caps            |
| `gold-deep`      | `#8C6A3E` | Hover state of gold, pressed gold buttons                             |
| `gold-soft`      | `#D9B98A` | Soft gold tint, badges, secondary accents                             |
| `tan`            | `#D9C9B0` | Hairline dividers, borders on cream                                   |
| `stone`          | `#8B8275` | Muted / secondary text on cream                                       |
| `mauve`          | `#6B5A4D` | Body text alt on cream (slightly warm brown)                          |
| `white`          | `#FFFFFF` | Pure white — used sparingly (modals, badges)                          |
| `claret`         | `#5A1F23` | Reserved for sale / error (warm deep wine, not red)                   |

Contrast requirements (all on cream `bg-cream`):
- `text-ink` on cream: ~13.7:1 (AAA)
- `text-mauve` on cream: ~7.4:1 (AAA)
- `text-stone` on cream: ~3.7:1 (use only for de-emphasized, NOT for body copy)
- `text-gold-deep` on cream: ~4.7:1 (AA Large + body acceptable)
- `text-ivory` on ink: ~14:1 (AAA)
- `text-gold` on ink: ~5.5:1 (AA)

## Typography

- **Serif**: Cormorant Garamond (300, 400, 500, 600) — for h1/h2/h3, product names, hero, "Our Story", section eyebrows
- **Sans**: Inter (300, 400, 500, 600) — for body, UI, nav, buttons, prices, descriptions
- **Display accents**: Cormorant Garamond italic for word emphasis in editorial copy

### Scale
- `text-display`  : clamp(3rem, 7vw, 6rem) — Cormorant 300, leading 1.05, used once per page (hero)
- `text-h1`       : clamp(2.25rem, 4vw, 3.5rem) — Cormorant 400
- `text-h2`       : clamp(1.75rem, 3vw, 2.5rem) — Cormorant 400
- `text-h3`       : 1.5rem / 1.25rem (mobile/desktop) — Cormorant 500
- `text-eyebrow`  : 0.75rem — Inter 500 UPPERCASE letter-spacing 0.2em (gold color)
- `text-product`  : 0.85rem — Inter 500 UPPERCASE letter-spacing 0.18em
- `text-body`     : 0.95rem — Inter 400
- `text-small`    : 0.8rem — Inter 400

## Spacing
- 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160 px
- Section vertical padding: 96–128px desktop, 64–80px mobile
- Container max width: 1280px with 24px mobile / 48px desktop side padding
- Editorial full-bleed sections break the container

## Visual Style Rules

### DO
- Generous whitespace. Let content breathe.
- Use Cormorant for anything that should feel "expensive": hero, headings, product names, story text.
- Use uppercase + wide letter-spacing for product names, eyebrows, nav links.
- Hairline `1px` `border-tan` or `border-ink/10` dividers between sections.
- Buttons: solid `bg-ink text-ivory` (primary) or `border border-ink text-ink` (secondary). No rounded > 4px. Height ~48px desktop, 44px mobile.
- Subtle hover transitions: 300ms ease. Image scale 1.04, color fade, no bouncy stuff.
- Soft drop-shadow on cards: `0 1px 2px rgba(26,23,20,0.04), 0 8px 24px rgba(26,23,20,0.06)`.
- Gold jewelry should sit on warm dark or cream backgrounds — never on bright white or blue.
- Numbers in prices should use Inter tabular nums.

### DO NOT
- No pure black `#000` (use `ink`).
- No pure white as main background (use `cream` or `ivory`).
- No drop shadows on hero images — use dark overlay for text contrast.
- No "SALE!" red badges, no countdown timers, no pop-ups, no "BUY NOW" yelling.
- No emojis.
- No bright primary colors.
- No images of generic stock-people on white backgrounds.
- No more than 2 typefaces (we use exactly 2: Cormorant + Inter).
- No card "discount" strikethroughs anywhere.
- No Tailwind `rounded-2xl` or `rounded-3xl` for product cards — use `rounded-sm` or none.

## Components

### Buttons
- Primary: `bg-ink text-ivory hover:bg-gold-deep` — uppercase Inter 12px letter-spacing 0.15em, px-8 py-4, no rounding > 2px
- Secondary outline: `border border-ink text-ink hover:bg-ink hover:text-ivory`
- Tertiary link: `text-ink underline-offset-4 hover:underline` with optional arrow

### Product Card
- Square image (1:1), 2nd image visible on hover
- Image background `bg-ivory` fallback
- Product name: `text-product text-ink` below image, mt-3
- Price: Inter 14px `text-ink/80`, mt-1
- "Quick Add" pill appears on hover at bottom of image, `bg-ink text-ivory`
- Cards in 5-col grid on xl, 4 on lg, 3 on md, 2 on sm, 1 on xs

### Nav
- Transparent over hero, `bg-ivory/95 backdrop-blur` on scroll
- Logo: Cormorant 500, letter-spacing 0.3em, 18px — "VELMORA"
- Center links: Inter 12px uppercase letter-spacing 0.2em, `text-ink/80 hover:text-ink`
- Right: search icon + cart icon with count badge in `bg-gold text-ivory`

## Animations
- All hover: 300ms ease-out
- Image hover: scale 1.04
- Nav transition: 200ms ease
- Section fade-in: 600ms ease-out on intersection (subtle, no slide)
- Cart drawer: 350ms cubic-bezier(0.32, 0.72, 0, 1) slide from right

## Tailwind Custom Tokens

```
colors: {
  ink: '#1A1714',
  cream: '#F4ECE0',
  ivory: '#FAF5EB',
  gold: { DEFAULT: '#B08856', deep: '#8C6A3E', soft: '#D9B98A' },
  tan: '#D9C9B0',
  stone: '#8B8275',
  mauve: '#6B5A4D',
  claret: '#5A1F23',
}
fontFamily: {
  serif: ['"Cormorant Garamond"', 'serif'],
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## Imagery

Always warm-lit gold jewelry on dark or cream backgrounds. Editorial framing. Soft shadows, no harsh studio light. Product on body parts (ear, neck, wrist) is preferred for hero/story.

For categories: prefer editorial still-life (gold on linen, gold on marble, gold on dark fabric).
