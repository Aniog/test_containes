# Velmora Fine Jewelry — Design System

## Visual Direction

Quiet luxury, warm editorial. Premium demi-fine jewelry — never loud, never discount.
Deep refined base of warm charcoal and ivory, accented by burnished gold and a soft blush highlight.

## Color Palette

| Token                | Hex       | Usage                                        |
|----------------------|-----------|----------------------------------------------|
| `--color-base`       | #1C1A19   | Primary text, dark surfaces, footer          |
| `--color-base-soft`  | #2E2B29   | Secondary dark, hover states                 |
| `--color-ivory`      | #FAF8F5   | Primary background, light surfaces           |
| `--color-cream`      | #F2EDE6   | Secondary background, subtle cards           |
| `--color-linen`      | #E8E1D8   | Hairline dividers, borders                   |
| `--color-gold`       | #B8914B   | Primary accent — CTAs, stars, highlights     |
| `--color-gold-light` | #D4B06C   | Hover / glow states                          |
| `--color-blush`      | #F3E7E0   | Soft accent block, newsletter background     |
| `--color-muted`      | #6B6560   | Body copy, captions, secondary text          |

## Typography

- **Headings / Product names:** Cormorant Garamond (Google Fonts), weights 400, 500, 600, 700.
- **Body / UI:** Inter, weights 300, 400, 500, 600.
- Product names: uppercase, letter-spacing `0.16em`, Cormorant Garamond 500.

### Type Scale

| Element          | Size (mobile → desktop) | Font                  |
|------------------|-------------------------|-----------------------|
| Hero H1          | 40px → 72px             | Cormorant Garamond 500 |
| Section H2       | 28px → 40px             | Cormorant Garamond 500 |
| Product name     | 13px → 14px             | Cormorant Garamond 500 uppercase |
| Body             | 14px → 16px             | Inter 400             |
| UI label         | 11px → 12px             | Inter 500 uppercase   |
| Price            | 14px → 16px             | Inter 500             |

## Spacing

- Section vertical padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-5 md:px-8 lg:px-12`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`

## Components

### Buttons

- **Primary (solid gold):** bg-gold text-white hover:bg-gold-light, no border-radius, uppercase tracking-wide, py-3 px-8.
- **Secondary (outlined):** border-base text-base hover:bg-base hover:text-ivory, no border-radius, uppercase tracking-wide.
- **Ghost:** text-base hover:text-gold, underline offset.

### Cards

- Product card: no border, subtle shadow on hover, image swap on hover.
- Image tiles: overlay gradient from bottom, label on hover.

### Dividers

- Hairline: 1px solid #E8E1D8.

## Effects

- Transitions: `transition-all duration-300 ease-out`.
- Soft shadows: `shadow-sm hover:shadow-md`.
- Image hover: scale 1.03, opacity crossfade.
