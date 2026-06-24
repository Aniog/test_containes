# Velmora Fine Jewelry — Visual System

A quiet-luxury editorial aesthetic for a demi-fine DTC jewelry brand. The site
reads like a printed lookbook: warm, restrained, premium, and confident.

## 1. Mood & Direction

- **Mood:** quiet luxury, warm, editorial, premium-but-accessible.
- **What we are:** curated, intentional, considered.
- **What we are not:** loud, discount, fast-fashion, generic e-commerce, techy.
- **Inspiration:** Mejuri, Aurate, Monica Vinader, Atolea, Missoma — at their
  most editorial and least crowded.

## 2. Color Palette

A warm neutral base with one gold accent. Deep enough to flatter photography,
light enough to feel airy and "white-glove".

| Token        | Hex       | Use                                           |
| ------------ | --------- | --------------------------------------------- |
| `bone`       | `#F6EFE6` | Page background (warm off-white)              |
| `ivory`      | `#F1E7D8` | Section alt background, card surfaces         |
| `linen`      | `#E7DAC4` | Borders, dividers, soft chips                 |
| `hairline`   | `#D7C9B5` | 1px dividers, faint outlines                  |
| `espresso`   | `#1F1A14` | Primary text, dark surfaces, footer           |
| `charcoal`   | `#3B322A` | Secondary text, muted body                    |
| `gold`       | `#B08A4A` | Accent, primary buttons, links on hover       |
| `gold-soft`  | `#D4B481` | Subtle highlights, hairline accents on dark   |
| `muted`      | `#8A7E6E` | Placeholder, captions                         |

**Rules**

- Page bg is always `bone`; never pure white.
- Primary text on `bone` is always `espresso`; never pure black.
- On `espresso` surfaces, body text is `ivory/80`; never `white`.
- The only saturated color on the site is `gold`. Use it sparingly.
- All text/background pairs must read at WCAG AA or better.

## 3. Typography

| Role        | Family                | Notes                                       |
| ----------- | --------------------- | ------------------------------------------- |
| Display     | Cormorant Garamond    | Serif, weights 400/500/600                  |
| Body / UI   | Inter                 | Weights 400/500/600                         |
| Product     | Inter, UPPERCASE      | Tracked 0.18–0.28em                         |
| Eyebrow     | Inter, UPPERCASE      | 11–12px, tracked 0.28em, `muted` color      |

**Rules**

- Headings (h1–h3) are always serif.
- Product names: serif, uppercase, letter-spacing 0.2em.
- Eyebrows (above a heading): uppercase sans, gold or muted.
- Body and UI: Inter, 14–15px, line-height 1.6–1.7.
- Never use bold for product names; weight 500 with wide tracking is enough.

## 4. Spacing & Layout

- 8px grid. Most vertical rhythm is 4 / 8 / 12 / 16 / 24 / 32 / 48 / 72 / 96.
- Section vertical padding: `py-20 md:py-28` (5–7rem).
- Container width: `max-w-7xl` with `px-6 md:px-10`.
- Whitespace is part of the brand — when in doubt, add more.

## 5. Imagery

- Warm, directional natural light. Skin tones, hands, ears, necks.
- Backgrounds: warm dark espresso, soft taupe, sand, linen.
- Subject is always hero; never busy sets.
- All product imagery is `3:4` or `4:5` portrait.
- Lifestyle/Reels is `9:16` vertical.
- Categories tiles: `3:4` portrait.

## 6. Components

### Buttons

- **Primary (`btn-primary`):** solid `espresso` background, `ivory` text,
  uppercase, tracked. Hover: `gold-soft` underline / subtle bg shift.
- **Accent (`btn-gold`):** solid `gold` background, `espresso` text. Used
  sparingly — the Add-to-Cart and CTA.
- **Outline (`btn-outline`):** 1px `espresso` border, transparent bg, espresso
  text. Hover: espresso bg, ivory text.
- **Ghost:** no border, underline on hover.

All buttons: 11–12px uppercase, tracked 0.2em, `px-7 py-4`, no rounded
corners (rounded-none), no shadows on default.

### Product card

- 3:4 image, espresso backdrop placeholder.
- Quick-add pill appears on hover, centered, fades in.
- Name: serif uppercase tracked, 14–15px, `espresso`.
- Price below in `charcoal`, sans 13–14px.
- Star rating 12px, `gold-soft` fill, count in `muted`.

### Pills / chips

- 1px border `hairline`, no fill, uppercase 11px tracked.
- Selected state: espresso border + soft ivory fill.

### Inputs

- 1px bottom border only (no boxy inputs).
- 16px padding, focus: gold underline.

### Dividers

- 1px `hairline` full-width, 1px `gold-soft` for editorial accents (10–40% width, centered).

## 7. Motion

- All transitions 200–400ms, ease-out.
- Hover: 0.5–4% scale or 2–4px translate only. Never bouncy.
- Reveal on scroll: fade-up 16px over 500ms.
- Cart drawer: slide-in 280ms ease-out.
- Image swap on product hover: 200ms cross-fade.

## 8. Iconography

- `lucide-react`, 18–20px, stroke 1.5.
- Icons are quiet and functional, never decorative.
- Cart icon shows item count as small serif numeral.

## 9. Do's and Don'ts

**Do**

- Generous whitespace, hairline dividers, restrained type.
- Use the same serif weight (500) for product names across the site.
- Show star ratings on every product surface.

**Don't**

- No red, no green, no bright colors anywhere.
- No drop shadows under product cards; only on the cart drawer.
- No more than one accent (`gold`) on any single screen.
- No icons in product names or buttons unless universally understood (cart, search).
- No all-caps body copy. Caps are reserved for eyebrows and product names.
