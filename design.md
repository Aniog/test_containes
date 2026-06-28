# Velmora Fine Jewelry — Visual Design System

A quiet-luxury, editorial brand identity for a demi-fine gold jewelry DTC store.
The mood is warm, restrained, premium-but-accessible. Think Mejuri × The Row × Aurate.

---

## 1. Color Palette

Use these named colors consistently. They are registered in `index.css` via `@theme`.

| Token            | Hex       | Role |
| ---------------- | --------- | ---- |
| `ivory`          | `#FAF7F2` | Primary page background. Warm off-white. |
| `cream`          | `#F2EBE0` | Secondary surface, soft section bands, newsletter block. |
| `sand`           | `#E8DFD0` | Tertiary surface, category tiles base. |
| `hairline`       | `#D9CFBE` | Thin divider lines, input borders. |
| `ink`            | `#1A1612` | Primary text. Almost-black warm charcoal. |
| `mocha`          | `#2A1F18` | Editorial dark sections (hero overlay, footer). |
| `taupe`          | `#6B5E4F` | Secondary text, captions, muted UI. |
| `champagne`      | `#B08D57` | Primary accent. Warm metallic gold. CTAs, links, prices on dark. |
| `gold-soft`      | `#C9A87C` | Lighter gold for hover, dividers on dark, secondary accents. |
| `success`        | `#5B6B4E` | Subtle olive for confirmations only. |

Do NOT introduce other colors. Never use pure black `#000`, pure white `#FFF`,
or generic blue/red. The accent is `champagne` only.

Contrast rules:
- `ink` on `ivory`/`cream`/`sand` → main body text.
- `ivory` on `mocha` → reversed text on dark editorial sections.
- `champagne` on `mocha` → accent text on dark, prices on dark imagery.
- `taupe` on `ivory` → captions, helper text. Do not use taupe on cream for small text.
- Never use `champagne` on `ivory` for body copy (too low contrast). Use only for
  large headings, borders, icons, or buttons.

---

## 2. Typography

Two-font system loaded via Google Fonts in `index.html`.

- **Serif — "Cormorant Garamond"** (weights 400, 500, 600)
  - Use for: page headings (H1–H3), product names, hero copy, editorial pull-quotes.
  - Class: `font-serif`.
  - Product names render in UPPERCASE with `tracking-[0.18em]` and `font-medium`.
  - Section H2 example: `text-4xl md:text-5xl font-serif font-light leading-[1.1]`.

- **Sans — "Inter"** (weights 300, 400, 500, 600)
  - Use for: body, nav links, UI controls, buttons, badges, captions, prices.
  - Class: `font-sans` (default body).
  - Nav links and small UI: `uppercase tracking-[0.18em] text-xs font-medium`.

Letter-spacing:
- Editorial headlines: `tracking-tight` or default.
- Eyebrow / nav / labels / product names: `tracking-[0.18em]` to `tracking-[0.22em]`, UPPERCASE.
- Body: default.

Sizes (Tailwind defaults are fine):
- Hero H1: `text-5xl md:text-7xl`
- Section H2: `text-3xl md:text-5xl`
- Product card title: `text-sm md:text-[13px]` UPPERCASE wide-tracked.
- Body: `text-base` (16px).
- Caption / helper: `text-xs` or `text-sm` with `text-taupe`.

---

## 3. Spacing & Layout

- Container: `max-w-[1400px] mx-auto px-5 md:px-10`.
- Section vertical rhythm: `py-20 md:py-28`.
- Generous whitespace is mandatory. Do not crowd.
- Grids:
  - Bestsellers: 2 cols mobile → 3 cols `md` → 5 cols `lg`.
  - Category tiles: 1 col mobile → 3 cols `md`.
  - Collection grid: 2 cols mobile → 3 cols `md` → 4 cols `lg`.

---

## 4. Borders, Dividers, Shadows

- Hairline rule: `border-t border-hairline` (1px). Use a lot of these as section separators.
- On dark mocha: use `border-gold-soft/30` for hairlines.
- Cards: NO hard borders by default. Just whitespace. Optional `border border-hairline`
  for filter/input controls only.
- Shadows: very soft only. `shadow-[0_8px_30px_rgb(26,22,18,0.06)]` for elevated elements
  like the cart drawer or nav-on-scroll. Do not use heavy drop shadows.
- Radius: `rounded-none` for most surfaces. Inputs and pills: `rounded-full`.
  Buttons: `rounded-none` (sharp, editorial). Quick-add and small badges may use `rounded-full`.

---

## 5. Buttons

Two button styles only.

- **Primary (solid champagne):**
  `bg-champagne text-ivory hover:bg-ink transition-colors duration-300 px-8 py-4 uppercase tracking-[0.22em] text-xs font-medium`
  - Use for: main CTAs (Add to Cart, Shop the Collection, Subscribe).
- **Outline (ink hairline):**
  `border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors duration-300 px-8 py-4 uppercase tracking-[0.22em] text-xs font-medium`
  - Use for: secondary CTAs (View All, Our Story).
- On dark sections, invert: outline becomes `border-ivory text-ivory hover:bg-ivory hover:text-ink`.

No gradient buttons. No drop-shadow on buttons. No rounded buttons.

---

## 6. Imagery

- Stock images via `data-strk-img` / `data-strk-bg` tags only.
- Aspect ratios:
  - Hero: `16x9` desktop feel, image at `2x3` portrait crops on product cards.
  - Product card image: `3x4` (portrait, editorial).
  - Category tile: `3x4`.
  - UGC reels: `9x16`.
  - Story split image: `4x3` or `3x4`.
- Always include a subtle hover scale on product imagery: `group-hover:scale-[1.03] transition-transform duration-700 ease-out`.

---

## 7. Motion

- Hover transitions: `duration-300` to `duration-500`.
- Image zoom on hover: `duration-700 ease-out`.
- Use `transition-colors`, `transition-transform`, `transition-opacity`. No bouncy springs.
- Cart drawer slides in from right, `duration-300 ease-out`.
- No parallax. No flashy intros. Subtle fade-in only.

---

## 8. Do / Don't

DO:
- Keep huge breathing room around hero text and section titles.
- Use thin hairline rules to separate ideas.
- Let imagery dominate. Text is small, calm, confident.
- Uppercase + wide tracking for all labels, nav, buttons, product names.
- Use `champagne` sparingly — it's the brand jewel.

DON'T:
- Use bright reds, pure blacks, generic blues, neon greens.
- Stack drop shadows or heavy borders on every card.
- Use rounded-2xl cards. This is not a SaaS dashboard.
- Use emoji or playful illustrations.
- Write loud marketing copy. Tone is hushed, confident, editorial.

