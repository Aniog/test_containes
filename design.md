# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with a warm editorial sensibility. The storefront should feel premium, calm, and personal rather than promotional or discount-driven.

## Palette
Use one refined neutral direction that flatters gold jewelry:
- `velmora-ink` (`#15110D`) for the deepest text and premium dark sections.
- `velmora-espresso` (`#2B2018`) for warm dark surfaces and nav states.
- `velmora-ivory` (`#FAF6EE`) for the main page background.
- `velmora-parchment` (`#EFE5D6`) for soft editorial panels.
- `velmora-champagne` (`#D7B56D`) for metallic accents and primary buttons.
- `velmora-bronze` (`#8E6338`) for refined secondary accents.
- `velmora-clay` (`#A8795D`) for muted warmth.
- `velmora-pearl` (`#FFFDF8`) for card surfaces.

Always pair dark backgrounds with ivory or pearl text. Important values on light surfaces should use ink or espresso, never low-contrast beige.

## Typography
- Headings and product display names: Cormorant Garamond, elegant serif, generous line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide letter spacing, serif.

## Layout and spacing
- Mobile-first but editorial on desktop: large whitespace, centered max-width containers, spacious grids.
- Use thin hairline dividers (`border-velmora-espresso/10` or `border-velmora-champagne/30`).
- Keep cards calm with subtle shadows and soft rounded corners.

## Components
- Buttons: premium solid champagne on dark text for primary actions, or thin outlined espresso/champagne for secondary actions.
- Navigation: transparent over the homepage hero, solid ivory after scroll and on inner pages.
- Product cards: restrained, image-forward, with quick add appearing subtly on hover/focus.
- Cart drawer: warm ivory surface with clear ink text and champagne checkout-style CTA.

## Do's
- Use warm-lit jewelry imagery, close crops, editorial model styling, and neutral backgrounds.
- Keep hover transitions subtle: opacity, translate, scale, color.
- Use text contrast intentionally on every card, tile, overlay, form, and drawer.

## Don'ts
- Do not use bright sale colors, discount badges, loud gradients, or generic marketplace styling.
- Do not use arbitrary hardcoded colors in JSX class strings; use named Tailwind tokens.
- Do not crowd mobile screens with dense columns or tiny controls.
