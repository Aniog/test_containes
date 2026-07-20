# Velmora — Visual Design System

## Brand Mood
**Quiet luxury. Warm. Editorial. Premium demi-fine jewelry.**

Not loud. Not discount-looking. Not generic e-commerce.

## Color Palette (commit to one direction — warm cream + espresso + gold)

| Token | Hex | Use |
|---|---|---|
| `bone` (background) | `#FAF7F2` | Primary page background. Warm cream. |
| `linen` | `#EFE8DD` | Alternate sections, soft surfaces |
| `sand` | `#E2D6C5` | Hairline dividers, subtle borders |
| `espresso` (ink) | `#1B1410` | Primary text, nav, buttons |
| `mink` (muted) | `#6B5D4F` | Secondary text, captions, metadata |
| `stone` (subtle) | `#9A8B7A` | Tertiary text, disabled |
| `gold` (accent) | `#B08968` | Primary accent, CTA solid, links hover |
| `gold-deep` | `#8C6B4A` | CTA hover |
| `gold-soft` | `#D9C2A1` | Soft accent backgrounds |
| `white` | `#FFFFFF` | Cards, drawers |

These are registered in `tailwind.config.js` as named colors so we never hardcode hex in class strings.

### Contrast rules
- Body text on `bone` → `espresso` (12.7:1, AAA)
- Muted text on `bone` → `mink` (5.4:1, AA Large)
- White text on `espresso` or `gold` (4.5:1+)
- Never put `mink` on `linen`; never put `espresso` on `espresso`; never use `gold` alone as text on `bone` (insufficient contrast) — always pair gold accent with espresso ink for text.

## Typography

| Use | Family | Notes |
|---|---|---|
| Display / H1 | Cormorant Garamond 400/500 | Hero headlines, "VELMORA" wordmark, section titles |
| Section headings | Cormorant Garamond 500 | Collections, "Our Story", "Bestsellers" |
| Product names | Inter 500 UPPERCASE | `tracking-[0.18em]` wide letter-spacing |
| Body | Inter 400 | Paragraphs, descriptions |
| UI / labels | Inter 500 UPPERCASE | Buttons, nav links, badges — `tracking-[0.15em]` |
| Numerals (price) | Inter 500 | Clean tabular feel |

**Sizes (mobile → desktop):**
- Hero headline: `text-5xl sm:text-6xl md:text-7xl lg:text-8xl`
- Section heading: `text-3xl sm:text-4xl md:text-5xl`
- Product name: `text-xs sm:text-sm`
- Body: `text-sm sm:text-base`
- Eyebrow label: `text-[10px] sm:text-xs`

## Spacing
- Generous. Section vertical padding: `py-20 md:py-28 lg:py-32`
- Container max-width: `max-w-7xl`, side padding `px-5 sm:px-8 lg:px-12`
- Product grid gaps: `gap-y-12 gap-x-6 md:gap-x-8`

## Borders & Dividers
- Hairline 1px dividers in `sand` color
- No heavy borders. No box-shadows on products. Soft shadow only on cart drawer / modals: `shadow-[0_24px_60px_-20px_rgba(27,20,16,0.25)]`

## Buttons
- **Primary (solid):** `bg-espresso text-bone hover:bg-gold-deep hover:text-bone`, uppercase, `tracking-[0.18em]`, `px-8 py-4`, no rounding beyond `rounded-none` (sharp) — premium, not soft.
- **Secondary (outlined):** `border border-espresso text-espresso hover:bg-espresso hover:text-bone`.
- **Ghost link:** Underline on hover, hairline 1px, color `espresso` → `gold-deep`.

## Icons
Lucide React, `strokeWidth={1.25}` for elegance. Never `strokeWidth={2}`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds (espresso, deep tan, soft cream).
- Use stock-image system via `data-strk-img` and `data-strk-bg`.
- For lifestyle/UGC: warm skin tones, soft window light, editorial framing.
- Never use stock image of a person looking into camera with a discount banner.

## Do's
- Whitespace. Hairlines. Subtle hover transitions (200-300ms).
- Editorial photography. Restrained accent.
- Product cards: image, then minimal text, plenty of breathing room.

## Don'ts
- No bright reds, neon, or "sale"-style color (no `#dc2626` badges).
- No drop shadows on product images.
- No heavy borders or rounded buttons (no `rounded-full` CTAs).
- No emoji. No icons inside product card titles.
- No "BUY 1 GET 1 FREE" — discount-feeling is anti-brand.
