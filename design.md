# Velmora Fine Jewelry — Visual Style Guide

## Brand Mood
Quiet luxury. Warm. Editorial. Premium demi-fine jewelry — never loud, never discount, never generic e-commerce. Slow scroll, generous whitespace, confident restraint.

## Color Palette
A deep, refined warm base paired with antique gold accents. Inspired by editorial fashion magazines and the natural color of yellow gold on skin.

### Core
- **Espresso (near-black with warm undertone)**: `#1A1208` — primary foreground on light, primary surface on dark sections
- **Cream (warm ivory)**: `#F7F0E1` — primary background, light text on dark
- **Antique Gold (warm metallic accent)**: `#A8804A` — primary accent for buttons, links, highlights
- **Antique Gold Hover**: `#8A6638` — darker gold for hover/active states
- **Antique Gold Soft (subtle tint)**: `#D9C19A` — hairlines, hover surfaces, gold tags

### Neutrals
- **Taupe (warm mid-tone)**: `#E8DCC4` — secondary surface, section dividers
- **Stone (slightly darker taupe)**: `#D4C4A6` — card backgrounds, table strips
- **Mocha (warm medium gray)**: `#6B5A48` — secondary text, captions
- **Sand (very light warm tint)**: `#FBF7EE` — alternate background, drawers

### Functional
- **Success**: `#5A7A4A` (sage, not bright green)
- **Error**: `#8B3A2A` (muted terracotta)
- **Hairline**: `#1A1208 / 0.12` on cream, `#F7F0E1 / 0.16` on espresso

## Typography

### Headings & product names — Cormorant Garamond
- Loaded from Google Fonts. Serif, high contrast, elegantly tall.
- Weights used: 300 (light), 400 (regular), 500 (medium), 600 (semibold).
- H1 / hero headline: 64–96px on desktop, 40–48px on mobile. Light weight (300) for hero; medium (500) for section heads.
- Product names: UPPERCASE, letter-spacing 0.16em, weight 500, 14–18px.
- Section titles: 32–48px, weight 400, italic allowed for editorial quotes.

### Body & UI — Inter
- Loaded from Google Fonts. Clean, modern, neutral.
- Weights: 300, 400, 500, 600.
- Body: 15–16px, line-height 1.65, weight 400.
- UI labels: 12–13px UPPERCASE, letter-spacing 0.12em, weight 500.
- Buttons: 13px UPPERCASE, letter-spacing 0.14em, weight 500.

## Spacing
Generous, editorial. Section padding: 96–128px top/bottom on desktop, 64–80px on mobile. Card padding: 24–32px. Grid gap: 24–32px. Element vertical rhythm: 8/16/24/40/64/96.

## Borders & Dividers
- Hairlines: 1px solid `gold-soft/0.4` on cream, `cream/0.16` on espresso.
- No heavy borders. Card separation comes from whitespace and tonal contrast, not strokes.
- Underlines on text links: 1px, animated left-to-right on hover.

## Shadows
Restrained. Soft, diffused, low opacity.
- Card: `0 1px 2px rgba(26,18,8,0.04), 0 8px 24px rgba(26,18,8,0.06)`
- Elevated (drawer, modal): `0 24px 64px rgba(26,18,8,0.18)`
- Hover lift on product card: `0 12px 32px rgba(26,18,8,0.10)`

## Buttons

### Primary (accent solid)
- Background `gold-500`, text `cream`. Hover: `gold-600`, slight Y translate (-1px).
- Padding 14px 28px, no border-radius (sharp), UPPERCASE Inter 13px tracking 0.14em.
- Subtle inner shadow at top for metallic feel: inset 0 1px 0 rgba(255,255,255,0.2).

### Secondary (outlined)
- Border 1px `gold-500`, text `gold-600`, bg transparent. Hover: bg `gold-soft/0.18`.

### Tertiary (text link)
- Underlined or arrow-follow link, `mocha` color, hover to `espresso`.

## Imagery
Warm-lit close-ups on neutral/dark backgrounds. Soft directional lighting that flatters gold. Editorial portraits with jewelry on skin. Always treated with a touch of warmth — never clinical white. Images occupy large space; text is the supporting element, not the dominant one.

## Animations
Subtle, slow, decelerated. Default easing: `cubic-bezier(0.22, 1, 0.36, 1)`. Durations: 200ms (micro), 400ms (hover/scroll reveals), 700ms (page-level).
- Fade + 8px lift on scroll into view.
- Image cross-fade on product hover (300ms).
- Underline grow on text links.
- No bounce, no overshoot, no parallax.

## Iconography
Lucide React. Stroke width 1.25 (slightly lighter than default 2). Size: 18px in nav, 16px in buttons, 20px in product cards.

## Don'ts
- No neon, no bright primary colors, no gradients beyond soft gold-to-cream.
- No drop shadows on text. No glow effects.
- No emoji.
- No discount badges, no "SALE" shouts, no urgency timers.
- No bright red, no pure white, no pure black.
- No more than 2 typefaces.
- No more than 1 accent color in use at a time.
