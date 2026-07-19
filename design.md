# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury. Warm, editorial, premium-but-accessible demi-fine jewelry. Never loud, never discount-looking.

## Color Palette
A single warm, cohesive palette: deep espresso as the refined base, soft bone/ivory as the light surface, muted warm gold as the primary accent, and a soft rose blush as a secondary accent.

### Tokens (named in Tailwind config)
- `bone` `#F6F1EA` — warm cream, light section background
- `ivory` `#FAF7F2` — page background
- `espresso` `#1C1612` — deep warm dark, primary text and dark sections
- `mocha` `#2A211B` — slightly lighter dark for elevated dark surfaces
- `stone` `#8B7E72` — warm grey-brown for secondary text on light
- `stone-dark` `#5C4F44` — secondary text on dark
- `gold` `#B68A4E` — primary accent, refined muted gold (NOT yellow)
- `gold-deep` `#8C6730` — gold hover/pressed
- `gold-soft` `#D9BE92` — soft gold for highlights/dividers on dark
- `rose` `#C49B8A` — soft blush, secondary accent
- `line` `#E5DED3` — hairline divider on light
- `line-dark` `#3A2E26` — hairline divider on dark
- `ink` `#0E0A07` — near-black for highest contrast

## Typography
- Headings / product names / serif UI: **Cormorant Garamond** (Google Fonts) — weights 400, 500, 600
- Body / UI / nav / buttons: **Inter** (already in template) — weights 300, 400, 500, 600, 700
- Product names: UPPERCASE, `tracking-[0.18em]`, font-weight 500
- Editorial section titles: Cormorant, `font-weight 500`, `italic` allowed
- H1 hero: 5xl–7xl desktop, 4xl mobile
- Body: 14–16px line-height 1.6

## Layout & Spacing
- Container max-width: 1280px (7xl), generous side padding (px-6 mobile, px-10 desktop)
- Vertical rhythm: 24 / 32 / 48 / 64 / 96 / 128px between major sections
- Hairline dividers: 1px in `line` or `line-dark`, often with `mx-auto max-w-XXX`
- Soft shadows: `shadow-[0_2px_24px_-12px_rgba(28,22,18,0.18)]` for elevated cards

## Components — Do
- Buttons feel premium: solid accent (espresso/gold) or outlined with hairline border
- Buttons uppercase Inter, tracking 0.15em, font-weight 500, padding `px-8 py-4`
- Pill variant selector: 40px tall, hairline border, active state filled with espresso + ivory text
- Cards: subtle hover lift, image cross-fade, gold underline for product name on hover
- Inputs: hairline border bottom only, no boxes
- Toast/sonner for cart confirmations

## Components — Don't
- Never use bright/saturated primary colors (blue, green, etc.)
- Never use drop-shadow drop effects, neon, gradients louder than subtle bone-to-cream
- Never use emoji or playful iconography
- Never use border-radius larger than `rounded-sm` (2px) for buttons / pills; cards can be `rounded-sm`
- Never center body paragraphs wider than 65ch

## Iconography
- Lucide React, stroke 1.5, size 20 default

## Imagery
- Warm, moody, editorial photography of gold jewelry on dark or neutral skin/textile backgrounds
- Hero and category images: 3:2 or 4:5
- Product cards: 4:5
- UGC reel cards: 9:16 vertical
- All images go through the data-strk-img / data-strk-bg tagging system
