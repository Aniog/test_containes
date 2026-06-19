# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. **Never** discount-looking, **never** loud. Restrained accents, generous whitespace, hairline dividers.

## Color Palette
Commit to a single confident direction: **deep, warm, refined neutral with a warm-gold accent**.

| Token | Hex | Use |
| --- | --- | --- |
| `ink` | `#1B1814` | Primary text, headings on light |
| `ink-soft` | `#3A342D` | Secondary text |
| `bone` | `#F6F1EA` | Page background (warm off-white) |
| `cream` | `#EFE7DC` | Section/card background, soft contrast |
| `line` | `#D9CFC2` | Hairlines, borders, dividers |
| `gold` | `#B8893A` | Accent (warm, restrained, NOT yellow-orange) |
| `gold-deep` | `#8A6428` | Accent hover / pressed |
| `moss` | `#3F4A3A` | Reserved secondary accent (very sparing) |

### Contrast rules
- Headlines on bone: `ink` (AAA).
- Body on bone: `ink-soft` (AA at body sizes).
- Accent buttons (filled `ink` or outlined `ink` 1px) on bone.
- NEVER put `gold` text on `bone` for long copy — too low contrast. Use only for short uppercase labels, hairlines, or icons.
- ALWAYS set explicit `text-ink` / `text-ink-soft` on cards, modals, table rows, etc.

## Typography
- **Display serif (headings + product names):** Cormorant Garamond (Google Fonts). Light/Regular for editorial headlines; Medium for product names. All product names set UPPERCASE with `tracking-[0.18em]`.
- **Sans (body + UI):** Inter. Regular 400 body, Medium 500 for buttons/labels, Semibold 600 for emphasized UI.

### Scale
- Hero headline: `text-5xl md:text-7xl`, `font-light`, serif, `leading-[1.05]`.
- Section eyebrow: `text-xs`, sans, uppercase, `tracking-[0.3em]`, `text-ink-soft`.
- Section title: `text-3xl md:text-5xl`, serif, `font-light`.
- Product name: `text-sm`, serif, uppercase, `tracking-[0.18em]`, `font-medium`.
- Body: `text-sm md:text-base`, sans, regular.

## Layout & spacing
- Container max-width `max-w-[1440px]`, horizontal padding `px-6 md:px-10 lg:px-16`.
- Section vertical spacing: `py-20 md:py-28 lg:py-32`.
- Hairline dividers: 1px `bg-line`.
- Editorial imagery: large, full-bleed where possible.

## Buttons
- **Primary (filled):** `bg-ink text-bone hover:bg-ink-soft`, `tracking-[0.18em]`, uppercase, `text-xs`, `px-8 py-4`. Smooth 300ms transition.
- **Secondary (outline):** `border border-ink text-ink hover:bg-ink hover:text-bone`. Same typographic style.
- **Ghost / link:** `text-ink underline-offset-4 hover:underline`, body text.
- **Icon button:** 40×40, hairline border or transparent, 300ms transition.

## Cards (product)
- Background: `bg-bone` (page) or `bg-cream` for subtle distinction.
- Image aspect 4:5 (portrait, editorial).
- On hover: secondary image fade-in; thin gold underline reveal beneath product name; "Add to Cart" pill slides up.
- Price: `text-sm`, sans, regular, `text-ink`.

## Motion
- Default transitions: 300–500ms `ease-out`.
- Hover lifts on cards: subtle 1–2px translate, soft shadow.
- No bouncy springs. No parallax. Subtle only.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds (warm chocolate, deep umber, cream, soft taupe). NEVER white seamless studio.
- Aspect ratios: 4:5 product, 16:9 hero, 9:16 UGC reels, 1:1 category tiles.

## Don'ts
- No bright neon accents.
- No big red sale badges / countdown timers.
- No emoji in product names.
- No more than 2 typefaces.
- No gray-on-gray low-contrast text.