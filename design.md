# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount cues. Generous whitespace, large imagery, refined typography.

## Color Palette
- Background Primary: `cream` `#FAF8F5` — warm ivory page background
- Background Secondary: `linen` `#F3EFE8` — subtle section backgrounds, cards
- Background Dark: `espresso` `#2C241F` — footer, dark sections, high-contrast moments
- Text Primary: `espresso` `#2C241F`
- Text Secondary: `taupe` `#8C7F73`
- Accent: `gold` `#BFA06B` — buttons, links, stars, highlights
- Accent Hover: `gold-dark` `#9E824F`
- Muted: `sand` `#DCD5CA` — hairlines, borders, dividers
- White: `#FFFFFF` — overlays, text on dark

All body text uses espresso on cream for strong contrast. White text only on espresso or gold backgrounds.

## Typography
- Headings / product names: `Playfair Display`, serif. Elegant, high contrast.
- Body / UI: `Inter`, sans-serif. Clean, readable.
- Product names: UPPERCASE, `tracking-[0.18em]`, `text-sm` to `text-base`, font-weight 500.
- Section headings: `font-serif`, `font-normal` or `font-medium`, generous line-height.

## Spacing & Layout
- Max container width: `max-w-7xl` (80rem / 1280px), centered.
- Section vertical padding: `py-16 md:py-24`.
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`.
- Hairline dividers: `border-sand` with `border-b` or `divide-sand`.

## Components
- Buttons:
  - Primary: solid `bg-gold text-white` hover `bg-gold-dark`, uppercase tracking-wide, rounded-none.
  - Secondary / outline: `border-espresso text-espresso` hover `bg-espresso text-white`, uppercase tracking-wide.
- Cards: no border-radius or very subtle (`rounded-none`), soft shadow on hover, image-first.
- Inputs: `border-sand`, focus `border-gold ring-gold`, rounded-none.
- Accordions: hairline top/bottom, serif headings, sans body.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Editorial crops. Use stock-image tagging system for all real images; placeholder SVGs for structure where needed.

## Motion
- Subtle transitions: `transition-all duration-300 ease-out`.
- Hover lifts: `-translate-y-0.5` or `shadow-md`.
- Fade-ins on scroll (optional). Keep fast and non-blocking.
