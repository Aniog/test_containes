# Velmora Fine Jewelry — Design System

## Brand
- **Name:** VELMORA
- **Mood:** Quiet luxury, warm, editorial. Premium demi-fine. NEVER loud, NEVER discount-feeling, NEVER generic e-commerce.
- **Audience:** Women 25–45, gifting + self-purchase. $30–$120 price band.

## Color Palette — "Champagne No. 02"
A warm, paper-and-brass editorial scheme. Committed direction, used sitewide.

| Token | Hex | Use |
|---|---|---|
| `ivory-50` | `#FBF8F4` | Page base background — warm off-white, like fine paper |
| `ivory-100` | `#F6F1E8` | Alternate section background, cards on white |
| `sand-100` | `#F2E9DA` | Soft warm block (newsletter), category tile overlay |
| `champagne-300` | `#D9B97E` | Light metallic — for soft accents |
| `champagne-500` | `#B68A4E` | Primary metallic accent — hairlines, hover states, dividers |
| `brass-700` | `#8C6A3A` | Deep metallic — pressed/active state |
| `taupe-500` | `#8A7E72` | Muted text — captions, helper text |
| `cocoa-700` | `#5A4A3F` | Secondary text on light |
| `cocoa-900` | `#2A221D` | Primary text on light — warm near-black |
| `espresso-900` | `#1F1A17` | Premium button bg, dark hero overlay, nav-scrolled bg |

### Contrast pairs (must always go together)
- `ivory-50` background + `cocoa-900` text → 14.5:1 ✓ AAA
- `ivory-50` background + `espresso-900` button bg + `ivory-50` text → 15:1 ✓ AAA
- `espresso-900` background + `ivory-50` text → 15:1 ✓ AAA
- `espresso-900` background + `champagne-300` text → 9.2:1 ✓ AAA
- `sand-100` background + `cocoa-900` text → 12.6:1 ✓ AAA

## Typography
- **Display / Headings / Product names:** `Cormorant Garamond` — weights 400, 500, 600. Italic for editorial pull-quotes.
- **Body / UI / Buttons:** `Inter` — weights 400, 500, 600. NEVER below 13px.
- **Product names:** uppercase, tracking `0.14em`, weight 500, serif.
- **Section eyebrows:** uppercase, tracking `0.22em`, weight 500, 11px, sans, `taupe-500` color.
- **Body:** 15–16px, line-height 1.7, color `cocoa-700` on light.

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-28` minimum.
- Max content width: `max-w-7xl` (1280px). Editorial blocks: `max-w-5xl`.
- Hairline dividers: `border-champagne-500/30` (1px) or `border-cocoa-900/10`.
- Grid: 12-col feel via Tailwind grid; product grids use 2/3/4/5 columns responsively.

## Buttons
- **Primary (premium):** `bg-espresso-900 text-ivory-50` — solid, no rounded corners sharper than `rounded-none`. Use slight radius `rounded-sm` (2px) for refinement. Padding `px-7 py-3.5`. Uppercase, tracking `0.18em`, 12px, weight 500. Hover: `bg-cocoa-900` + subtle lift `translate-y-[-1px]`. Transition 200ms ease.
- **Accent outline (hero CTA):** `border border-champagne-300 text-ivory-50` over dark hero. Hover: `bg-champagne-500/10`.
- **Quiet / link-style:** underline-on-hover, `text-cocoa-900`.

## Imagery
- Warm-lit close-ups of gold jewelry. Editorial portraits in soft natural light.
- Category tiles: model wearing product, neutral / warm background.
- All placeholders are real stock images pulled via the `data-strk-img` system.

## Motion
- All transitions: `200–300ms` ease-out, never bouncy.
- Image hover (product cards): subtle scale `1.04` + soft shadow `0_20px_50px_-20px_rgba(31,26,23,0.25)`.
- Nav on scroll: background fade-in 250ms.
- Cart drawer: slide-in 320ms cubic-bezier.

## Don'ts
- ❌ Bright primary colors, neon, gradients (except the very subtle champagne gradient on dividers).
- ❌ Drop shadows heavier than `0 20px 50px -20px`.
- ❌ Discount badges / "SALE" / red strike-throughs.
- ❌ Generic stock-photo-warehouse product shots. Always editorial.
- ❌ Anything that looks like a 2014 Shopify theme.
