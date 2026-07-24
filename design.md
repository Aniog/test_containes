# Velmora Fine Jewelry — Design Language

A quiet-luxury, warm-editorial aesthetic for a demi-fine gold jewelry DTC brand.
Audience: women 25–45, gifting & self-purchase, premium-but-accessible ($30–$120).

## Brand voice
Calm, warm, considered. Never loud, never discount-feeling. Editorial like a
magazine, not a marketplace.

## Color palette (commit to this exact direction sitewide)

| Token            | Hex       | Role                                            |
|------------------|-----------|-------------------------------------------------|
| `ink`            | `#14110F` | Primary text on light, deep brand surface       |
| `ink-soft`       | `#2A2421` | Slightly lifted dark for cards, dividers        |
| `paper`          | `#F7F2EA` | Default page background (warm cream)            |
| `paper-2`        | `#EFE7DA` | Section break / muted band                      |
| `bone`           | `#FAF6EF` | Cards, inputs, hover surface                    |
| `gold`           | `#B8935A` | Primary accent (warm muted gold)                |
| `gold-deep`      | `#8E6E3C` | Hover / pressed accent                          |
| `champagne`      | `#D9C29A` | Soft accent / border / chips                    |
| `text`           | `#14110F` | Body text on light                              |
| `text-muted`     | `#6B5D4F` | Captions, meta, helper                          |
| `line`           | `#1F1B17` | Hairline on dark                                |
| `line-light`     | `#E2D8C7` | Hairline on light                               |

Rules:
- DO NOT use plain black `#000` or plain white `#fff` anywhere.
- DO NOT use blue, red, or saturated colors.
- Gold is the ONLY accent. Use it sparingly.
- Hairlines are 1px, 50–80% opacity on the surface.

## Typography

- **Display / Serif** — `Cormorant Garamond` (300, 400, 500, 600). Used for
  H1–H3, hero, editorial pull-quotes, product names in editorial contexts.
- **UI / Sans** — `Inter` (300, 400, 500, 600). Used for body, navigation,
  buttons, product names in UPPERCASE with `tracking-[0.18em]`.

Sizes (Tailwind classes):
- Display: `text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05]`
- Section heading: `text-3xl md:text-5xl font-light`
- Product name: `text-xs md:text-sm font-medium uppercase tracking-[0.18em]`
- Body: `text-sm md:text-base leading-relaxed text-text`
- Meta: `text-xs uppercase tracking-[0.16em] text-text-muted`

## Spacing & layout
- Mobile-first. Generous whitespace. Vertical rhythm: `py-20 md:py-32`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline divider: `border-t border-line-light` (or `border-line` on dark).

## Imagery
- Warm-lit gold jewelry on neutral or deep backgrounds. No flat-lay white
  studio on the homepage hero.
- Rounded corners on imagery: max `rounded-sm` (4px) — never pill, never
  heavy radius. Editorial, not playful.
- Generous aspect ratios: `3/4` for products, `4/5` for UGC reels, `16/9`
  for editorial.

## Buttons
- **Primary** — solid `bg-ink text-paper hover:bg-ink-soft`, no radius
  beyond `rounded-none` or `rounded-sm`, padding `px-8 py-4`, uppercase
  text-xs tracking-widest, transitions 300ms.
- **Accent** — same but `bg-gold text-ink hover:bg-gold-deep`.
- **Ghost** — bordered `border border-line-light text-ink hover:bg-bone`.
- Never use pill-shaped or gradient buttons.

## Motion
- All transitions: `transition-all duration-300 ease-out`.
- Image hover: subtle scale 1.04 with overflow hidden on parent.
- Fade/slide in: `opacity` + small `translateY` only.

## Do's and don'ts
- DO: hairline dividers, generous whitespace, serif headlines, gold accents.
- DON'T: emoji icons, gradient backgrounds, badges, "SALE" callouts,
  multi-color palettes, drop shadows, large rounded corners.
