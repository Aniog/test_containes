# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury with a warm, editorial feel. Premium demi-fine jewelry for women 25–45. No loud discount language, no cluttered e-commerce UI. Confident, restrained, and tactile.

## Color Palette
Background Primary: warm off-white `#F9F6F2` (creamy paper)
Background Secondary: deep espresso `#2B211E` (rich brown-black)
Text Primary: charcoal `#1F1A17`
Text Secondary: warm gray `#6E625C`
Accent: warm terracotta / cognac `#B76D4A` (CTAs, highlights)
Accent Hover: deeper rust `#9A5A3B`
Muted: soft taupe `#E8E0D8`
Hairline: `#D9CFC5`
Gold Metallic: `#C6A25F` (decorative stars, price highlights)
White: `#FFFFFF`

### Contrast & Accessibility
- Body text on off-white: very strong contrast.
- Espresso section uses off-white/cream text.
- Accent buttons use white text; large enough and contrast ratio > 4.5:1.

## Typography
- Headings / product names / logo: `Cormorant Garamond` (serif, elegant).
- Body / UI / price / buttons: `Inter` (clean sans-serif).
- Product names are UPPERCASE with `tracking-[0.2em]` letter-spacing.
- H1: 3rem / 4xl, H2: 2rem / 3xl, body base 1rem / 16px.

## Spacing
- Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container max width: `max-w-7xl` with `px-4 sm:px-6 lg:px-8`.
- Hairline dividers: `h-px`.

## Components
- Buttons:
  - Primary: solid accent background, white text, no border-radius override beyond default rounded-sm.
  - Secondary / outlined: transparent bg, `border` hairline, text primary, hover:bg muted.
- Cards: no visible border, subtle hover lift and shadow, image crossfade on hover.
- Inputs: bottom border only or full outlined with hairline, rounded-sm.
- Links: underline on hover, transition 200ms.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Editorial, soft shadows, no harsh crops.

## Do's & Don'ts
- DO use generous whitespace.
- DO keep CTAs minimal and prominent.
- DON'T use neon colors or loud sale badges.
- DON'T use rounded-full pills except for variant selectors.
- DON'T crowd product grids; max 2 columns mobile, 3 tablet, 4+ desktop.
