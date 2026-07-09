# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial style: warm ivory surfaces, deep espresso contrast, and restrained antique-gold accents. The look should feel premium, calm, tactile, and giftable — never loud, discounted, or generic.

## Palette
Add these named colors to Tailwind and use the names instead of hardcoded hex values in JSX:
- `velmora-ivory` `#F8F3EA` — primary page background
- `velmora-cream` `#FFF9F0` — elevated light cards and inputs
- `velmora-stone` `#E6D8C4` — dividers, borders, soft strips
- `velmora-taupe` `#A88F72` — muted supporting text/accent surfaces
- `velmora-gold` `#B88746` — primary metallic accent and CTA color
- `velmora-goldDark` `#7A522A` — hover states and readable gold text
- `velmora-espresso` `#241A16` — primary text and dark surfaces
- `velmora-ink` `#3A2B24` — body text
- `velmora-blush` `#EBD8CC` — warm editorial highlight blocks

## Typography
- Headings and brand mark: Cormorant Garamond, elegant serif, generous line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide tracking, serif, compact but readable.
- Use restrained type scale with large hero/editorial headings and smaller utility text.

## Layout and spacing
- Mobile-first responsive layouts with desktop grids from `md:` and `lg:` breakpoints.
- Use generous whitespace: section padding around `py-16`, `py-20`, or `lg:py-28`.
- Use max-width containers (`max-w-7xl`) and elegant asymmetry for editorial sections.
- Use thin hairline dividers with `border-velmora-stone`.

## Components
- Primary CTA: `bg-velmora-gold text-velmora-cream`, uppercase, wide tracking, soft transition to `bg-velmora-goldDark`.
- Secondary CTA: transparent or cream background with `border-velmora-gold text-velmora-espresso`.
- Cards: cream/ivory surfaces, subtle border, soft warm shadow, image-led composition.
- Inputs: cream surface, espresso text, stone border, gold focus ring.

## Do's
- Use warm gold jewelry imagery with neutral or deep editorial backgrounds.
- Keep contrast strong: espresso text on ivory/cream, cream text on espresso.
- Use subtle hover transitions, image scale, and opacity fades.
- Keep buttons and labels calm, premium, and intentional.

## Don'ts
- Do not use bright sale colors, discount badges, loud gradients, or generic blue links.
- Do not place low-contrast taupe text on blush/stone surfaces for important content.
- Do not use hardcoded hex colors in JSX classes; use Tailwind named colors.
