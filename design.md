# Velmora Fine Jewelry — Visual Identity

## Brand Mood
**Quiet luxury · warm · editorial.** Premium demi-fine jewelry that feels
intentional, never loud. Restrained, generous, considered. Think a small
atelier rather than a marketplace. Every element should feel like it was
designed, not templated.

## Color Palette (use these tokens — do not hardcode hex)

| Token | Value | Use |
| --- | --- | --- |
| `ink` | `#1d1611` | Primary text on light, dark surfaces, footer |
| `ink-soft` | `#2b211a` | Slightly lifted dark surface |
| `paper` | `#faf6ef` | Primary background — warm ivory paper |
| `paper-warm` | `#f3ebdc` | Section background variation (cards, alt rows) |
| `gold` | `#b89460` | Primary accent — refined warm gold (NOT yellow) |
| `gold-deep` | `#8e6f44` | Hover / pressed accent, deep gold |
| `gold-soft` | `#d9c19a` | Hairlines, subtle gold tint, dividers |
| `taupe` | `#8a7a68` | Muted warm neutral, secondary text on paper |
| `mist` | `#e9e0d1` | Light hairline divider, subtle borders |
| `success` | `#4a6b3c` | Form success (warm sage, not neon green) |

**Contrast rules**
- Body text on `paper` → `ink` (#1d1611 on #faf6ef) — WCAG AAA
- Body text on `ink` → `paper` — WCAG AAA
- Muted text on `paper` → `taupe` (#8a7a68 on #faf6ef) — large text only
- Gold buttons: `ink` text on `gold` background (#1d1611 on #b89460) — AAA for large text; for body text only on solid filled button. Never use gold text on cream paper.

## Typography

- **Display / Serif**: `Cormorant Garamond` (400, 500, 600) — headlines, product names
- **Body / Sans**: `Inter` (300, 400, 500, 600) — UI, body copy, captions
- **Tracking**:
  - Product names: `UPPERCASE` + `tracking-[0.18em]`
  - Section labels (eyebrow): `UPPERCASE` + `tracking-[0.32em]` + 11–12px
  - Body: normal
- **Line-height**:
  - Headlines: 1.05–1.15
  - Body: 1.6–1.7
  - Product name: 1.3

## Layout

- Max content width: 1280px (7xl)
- Section vertical rhythm: `py-20 md:py-28 lg:py-32`
- Generous gutter: `px-6 md:px-10 lg:px-16`
- Hairline dividers: 1px `mist` or `gold-soft/40`
- Card radius: `rounded-sm` (2–4px max) — keep architectural, not bubble-y
- Buttons: 0–2px radius, full uppercase tracking, padded `px-7 py-3.5`

## Components

- **Buttons**
  - `Primary`: solid `ink` background, `paper` text, hover `ink-soft`, on hero/over-image: `gold` background
  - `Outline`: 1px `ink` border, transparent bg, hover fill `ink` → `paper` text
  - `Ghost`: no border, underline-on-hover
- **Inputs**: 1px `mist` border, `paper` bg, focus border `gold-deep`, no rounded corners
- **Cards (product)**: no border, image-first, name + price stacked below
- **Hairline divider**: 1px `border-t border-mist` (60% opacity)
- **Icons**: Lucide, 18–20px default, `stroke-width={1.25}` for editorial feel
- **Badges**: uppercase, 10px, wide tracking, `gold-soft` background, `ink` text

## Imagery

- Warm gold jewelry on deep neutral / dark cocoa backgrounds
- Editorial close-ups — texture, skin, soft light
- 9:16 vertical for UGC reel cards, 3:4 or 4:5 for product cards
- Always allow generous breathing room around subjects

## Motion

- Default duration: 300ms
- Default easing: `cubic-bezier(0.22, 1, 0.36, 1)` (smooth out)
- Subtle only: image fade, underline grow, drawer slide. No bouncy spring.

## Do

- Commit to one accent (gold) and let it do the work
- Use serif for emotion (names, headlines), sans for information (prices, UI)
- Keep product cards image-dominant; text plays second fiddle
- Use hairlines instead of heavy borders

## Don't

- Don't use bright colors, gradients, or saturated tones
- Don't use drop shadows beyond `shadow-sm`; prefer hairline borders
- Don't use rounded pills or bubble shapes for primary UI
- Don't use sans-serif uppercase tracking on product names — that screams mass-market
- Don't put gold text on cream backgrounds (illegible)
- Don't crowd: when in doubt, add more whitespace
