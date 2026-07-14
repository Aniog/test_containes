# Velmora Fine Jewelry — Visual Direction

A quiet-luxury, editorial system for a demi-fine gold jewelry DTC storefront.
The page must feel like a Vogue editorial, not a Shopify theme.

## 1. Mood & tone

- Quiet, warm, considered. Premium-but-accessible.
- Restrained. Never loud. Never discount-coded.
- Generous whitespace, thin hairline dividers, soft shadows.
- Subtle motion only. Soft fades and small lifts on hover (150–300ms, ease-out).

## 2. Color palette

A warm, refined scheme that flatters 18K gold. The base is a deep warm
charcoal; the canvas is a warm cream ivory; the accent is a softened gold
(never garish yellow).

| Token            | Hex       | Use                                            |
| ---------------- | --------- | ---------------------------------------------- |
| `cream`          | `#F6F0E6` | Page background                                |
| `ivory`          | `#FAF6EE` | Section backgrounds, cards                     |
| `bone`           | `#EBE3D3` | Subtle dividers, hover fills                   |
| `mist`           | `#D9CFBC` | Hairline borders                               |
| `mocha`          | `#7A6A57` | Secondary text                                 |
| `espresso`       | `#3D2F22` | Body text on light                             |
| `charcoal`       | `#1B1611` | Primary text, dark sections                    |
| `gold`           | `#B08A4A` | Accent — warm, refined, not yellow              |
| `gold-soft`      | `#D8BC85` | Hover, light gold                              |
| `gold-deep`      | `#876631` | Pressed / active accent                        |

Do **not** introduce additional brand colors. Pink, neon, bright blue,
or saturated yellow are off-brand. Black is too cold; use `charcoal`
(`#1B1611`) instead. White is too clinical; use `ivory` or `cream`.

## 3. Typography

- Display & headings: **Cormorant Garamond** (serif, weights 300/400/500).
  Italic for editorial pull-quotes.
- Body & UI: **Inter** (weights 300/400/500/600).
- Product names: **Cormorant Garamond**, UPPERCASE, tracking `0.18em`,
  size 13–15px, weight 500.
- Section labels (eyebrows): Inter, UPPERCASE, tracking `0.32em`,
  size 11px, weight 500, color `mocha`.

Pairing examples:
- Hero headline: Cormorant 400, 56–84px, line-height 1.05.
- Subhead: Inter 300, 16–18px, line-height 1.6.
- Price: Inter 500, 15px, color `charcoal`.

## 4. Layout & spacing

- Container max-width: 1280px. Gutter 24px (mobile), 48px (desktop).
- Vertical rhythm: section padding 96–128px on desktop, 64–80px on mobile.
- Hairline dividers: `1px solid #D9CFBC` (token: `border-mist`).
- Card border-radius: 0 — sharp corners reinforce the editorial tone.
  Exception: cart drawer uses `rounded-l-sm` for a softer mobile feel.
- Shadows: only soft, low-contrast. Tailwind `shadow-[0_1px_2px_rgba(27,22,17,0.04),0_8px_24px_rgba(27,22,17,0.06)]`.

## 5. Buttons

- Primary: solid `charcoal` background, `ivory` text, 14px Inter uppercase
  tracking `0.18em`, padding 16px 32px, no rounding, hover lifts 1px and
  shifts to `espresso`.
- Secondary (outline): 1px `charcoal` border, `charcoal` text, hover fills
  `charcoal` and inverts to `ivory`.
- Pill (variant selector): 1px `mist` border, gold dot inside, active
  state gets `charcoal` background and `ivory` text.
- Icon buttons (cart, search): 40px circle, hover `bone` fill.

## 6. Imagery

- Lifestyle / hero / product photos use the project's image-search system
  with `data-strk-img-*` attributes and a fallback warm-gradient panel.
- Product card aspect: 4/5 portrait.
- Hero: 3/4 portrait or 16/9 cinematic; warm-lit gold on neutral skin or
  warm sand.
- Reels / UGC: 9/16 vertical.
- Category tiles: 4/5 portrait.
- All `data-strk-img-*` slots have a warm gradient background so the page
  reads well before the image system returns results.

## 7. Iconography

- Use `lucide-react` exclusively. Stroke width 1.5. Default size 18–20px.
- Never mix icon styles. No filled icons unless explicitly decorative.

## 8. Motion

- Hover transitions: 200ms ease-out, opacity or 1px lift.
- Cart drawer slide-in: 320ms cubic-bezier(0.22, 1, 0.36, 1).
- Image fade-in on product cards: 300ms.
- No bounce, no elastic, no parallax.

## 9. Do's and don'ts

Do:
- Use the cream/ivory/charcoal/gold palette consistently.
- Keep product names UPPERCASE with wide tracking.
- Use hairline `mist` dividers between sections.
- Add a small decorative dot or line (e.g. `·`) between inline meta items.

Don't:
- Use bright primaries (blue, red, green) as accents.
- Add rounded-everything corners.
- Use stock-photo "happy shoppers" tropes.
- Stack many shadows or heavy borders.
- Use ALL CAPS body text — only eyebrows and product names.
