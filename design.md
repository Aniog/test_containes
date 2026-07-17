# Velmora Fine Jewelry — Design System

A quiet, editorial, premium visual language for a demi-fine gold jewelry brand. The site must feel like the cover of an upscale fashion magazine: warm, restrained, generous in space, and confident in typography.

---

## 1. Brand Voice & Mood

- **Quiet luxury.** Never loud, never discount-feeling, never generic. Think: Net-a-Porter, Cuyana, Aurum, Mejuri (without the cold minimalism).
- **Warm + editorial.** Photographed in soft, golden-hour light. Cream, beige, and gold. Hairline lines. Generous margins.
- **Premium but accessible.** The customer is paying $30–$120; the design should feel $300+.
- **Feminine, never girly.** Serif typography, adult palette, no pastel playfulness.

## 2. Color Palette — "Ivory & Champagne Gold"

The site is built on a warm ivory base with rich champagne gold accents and a deep warm ink for text. Gold jewelry on this palette reads as rich and saturated, not flat.

| Token              | Hex       | Use                                                       |
| ------------------ | --------- | --------------------------------------------------------- |
| `bg-cream`         | `#F5EFE6` | Page background (warm ivory)                              |
| `bg-ivory`         | `#FBF7F1` | Cards, drawers, raised surfaces                          |
| `bg-bone`          | `#EDE5D7` | Hover/well, dividers in dark mode                         |
| `bg-ink`           | `#1A1410` | Deep warm ink (used for dark hero overlay & footer)       |
| `bg-ink-soft`      | `#2A201A` | Slightly lifted dark surface                              |
| `text-ink`         | `#1F1813` | Primary text on cream                                     |
| `text-ink-soft`    | `#6B5D50` | Secondary / muted text on cream                           |
| `text-ink-inverse` | `#F4ECD9` | Text on dark surfaces                                     |
| `accent-gold`      | `#A8824A` | Primary accent — buttons, links, focus rings              |
| `accent-gold-soft` | `#C9A876` | Subtle accent — hovers, underlines                        |
| `accent-gold-deep` | `#7E5F2E` | Deep gold for borders or pressed states                   |
| `hairline`         | `#D8C9B5` | Hairline dividers on cream                                |
| `hairline-dark`    | `#3A2E24` | Hairline dividers on dark                                 |
| `success`          | `#5C7556` | Sage, used very sparingly                                 |
| `error`            | `#8C3A2E` | Terracotta red, not bright                                |

Contrast rules:
- Primary text on cream must hit WCAG AA (≥ 4.5:1) — `#1F1813` on `#F5EFE6` ≈ 14.4:1. ✓
- Accent gold (`#A8824A`) is used for buttons with white text (button label), where contrast is ≈ 4.7:1. ✓
- Never use `accent-gold-soft` as a text color on cream — it's too low contrast for body text. Use it for borders and decorative underlines only.

## 3. Typography

Two type families, used with discipline.

### Serif — Cormorant Garamond (headlines, product names, editorial copy)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Used for: H1–H3, product names, hero copy, brand logo "VELMORA", pull-quotes
- Style: tracked tightly on big display, slightly loose on small body serif

### Sans — Inter (UI, body, labels)
- Weights: 300, 400, 500, 600, 700
- Used for: nav links, body copy, buttons, form labels, prices, accordion details
- Style: tightly tracked, 0.5px letter-spacing on uppercase UI labels

### Type scale (desktop, mobile uses `clamp` to scale down)

| Role             | Desktop            | Letter-spacing      | Notes                                |
| ---------------- | ------------------ | ------------------- | ------------------------------------ |
| Display (hero)   | `clamp(3rem, 6vw, 5.5rem)` | `-0.01em`  | Cormorant 300, italic accents allowed |
| H1 section       | `clamp(2rem, 4vw, 3.25rem)` | `-0.005em` | Cormorant 400                        |
| H2 product       | `1.125rem`         | `0.18em`            | Inter 500, UPPERCASE, wide tracking  |
| H3 subhead       | `1.5rem`           | `0`                 | Cormorant 500                        |
| Body             | `1rem` (16px)      | `0`                 | Inter 400, line-height 1.6           |
| Body small       | `0.875rem`         | `0`                 | Inter 400, line-height 1.55          |
| Eyebrow / label  | `0.75rem`          | `0.22em`            | Inter 500, UPPERCASE, gold color     |
| Button           | `0.8125rem`        | `0.18em`            | Inter 600, UPPERCASE                 |

### Product names
Product names (e.g. "Vivid Aura Jewels") are rendered in **Inter 500, UPPERCASE, 1.125rem, letter-spacing 0.18em** — small, tracked, all-caps, never in serif. This is a key signature.

## 4. Spacing & Layout

- **Page horizontal padding:** `px-5` (mobile, 20px), `md:px-10` (40px), `lg:px-16` (64px)
- **Max content width:** 1440px, centered
- **Section vertical rhythm:** `py-16` (mobile, 64px) → `md:py-24` (96px) → `lg:py-32` (128px)
- **Hero:** full-bleed, 90vh on desktop, 75vh on mobile
- **Product card spacing:** 32px gutter on desktop, 16px on mobile
- **Whitespace is a feature.** Do not pack things together. Empty space reads as luxury.

## 5. Hairlines, Borders, Shadows

- **Hairline dividers:** `1px` solid `hairline` (`#D8C9B5`) on cream, `hairline-dark` (`#3A2E24`) on dark. Always 1px, never thicker.
- **Card borders:** none by default. Use shadow for elevation.
- **Shadows:** extremely soft, warm-tinted:
  - `shadow-sm`: `0 1px 2px rgba(31, 24, 19, 0.04)`
  - `shadow-md`: `0 8px 24px -8px rgba(31, 24, 19, 0.10)`
  - `shadow-lg`: `0 20px 48px -12px rgba(31, 24, 19, 0.18)`
- **No neon, no bright drop-shadow, no "discount badge" red.**

## 6. Buttons

Three button styles, used with intent:

1. **Primary (solid gold):** `bg-accent-gold` + `text-white` (warm off-white `#FBF7F1`), uppercase, letter-spacing 0.18em, 13px, 14px vertical padding, 28px horizontal. Hover: lift to `accent-gold-deep`. Rounded `0px` (sharp corners) for the editorial feel — no pill buttons except for the variant selector.
2. **Secondary (outlined):** `border border-ink` + `text-ink`, transparent bg. Hover: fill `bg-ink` + `text-ivory`. Same letter-spacing & uppercase treatment.
3. **Ghost / link:** plain uppercase link with `accent-gold`, underline-on-hover from left.

All buttons transition `color, background-color, border-color, transform 200ms ease-out`. On hover, primary buttons get a 1px translateY(-1px). On active, scale(0.99).

The variant selector (gold tone / silver tone) uses **rounded pill buttons** with a 1px border that fills on selection.

## 7. Iconography

- **Lucide React** icons only. Stroke 1.5px, never thicker.
- Icons in nav: 20px. Icons in body: 16px. Icons in buttons: 16px (right-aligned).
- Never use icons where text alone is more elegant. Cart and search are the only nav icons.

## 8. Imagery

- All photography is warm-lit, gold-on-cream or gold-on-model. Cool tones are forbidden.
- Hero image: full-bleed editorial portrait or close-up of model wearing gold.
- Product images: square 1:1, isolated on warm cream or soft tan background, jewelry centered.
- UGC strip: 9:16 vertical, instagram-reel style, soft warm color grading.
- Background placeholders (hero) and content images (products) are loaded via the `data-strk-img` / `data-strk-bg` runtime system.
- Never use placeholder color blocks. Always use the SDK image system.

## 9. Motion

- **Hover transitions:** 200–280ms, ease-out, on `color`, `background-color`, `border-color`, `transform`, `opacity`.
- **Product image swap on hover:** the second image fades in over the first (300ms, opacity 0→1).
- **Cart drawer:** slides in from right, 320ms cubic-bezier(0.32, 0.72, 0, 1).
- **Scroll-to-section reveal:** subtle 12px translateY + opacity, only on first paint of the section. Threshold 0.15. Do NOT animate every little thing — restraint matters.
- **No bouncing, no springy easing, no parallax scroll-jacking.** Subtle is the goal.

## 10. Accessibility

- All interactive elements have a visible focus ring: `2px solid accent-gold` with `2px` offset, no removal.
- All text meets WCAG AA on its background.
- Cart drawer traps focus; ESC closes.
- Mobile menu is full-screen, traps focus.
- Images have meaningful `alt` (product name + material), decorative images use `alt=""`.
- All buttons have either text or `aria-label`.

## 11. Do / Don't

**Do**
- Let the type breathe. Use letter-spacing on uppercase, generous line-height on body.
- Use a single warm accent color and one dark text color per page.
- Let images do the selling; UI chrome stays out of the way.

**Don't**
- Don't use bright primary colors (red, blue, green) for UI accents. No emojis. No exclamation marks in copy.
- Don't use shadows with strong black tint — always warm-tinted.
- Don't use rounded-xl on cards. Use `rounded-none` or at most `rounded-sm` for editorial sharpness. Exception: the variant selector pills and the search input.
- Don't show discount strikethroughs, "SALE!" badges, or countdown timers. The brand is not on sale.
- Don't use generic stock photography. The stock image system pulls editorial-style results.
- Don't use system fonts. Always Cormorant + Inter via Google Fonts.
