# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso text, and restrained champagne-gold accents that flatter demi-fine gold jewelry without feeling loud or promotional.

## Palette
- `velmora-ivory` (`#F8F3EA`): primary page background and soft editorial surfaces.
- `velmora-parchment` (`#EFE4D3`): secondary section backgrounds and subtle contrast blocks.
- `velmora-linen` (`#D8C7AE`): hairline borders, dividers, thumbnail frames.
- `velmora-espresso` (`#221913`): primary text, dark buttons, footer/nav solids.
- `velmora-cocoa` (`#5B4638`): supporting body copy and muted UI text.
- `velmora-gold` (`#B58A4A`): metallic accent, premium CTA states, ratings.
- `velmora-bronze` (`#7E5A31`): hover states and deeper accent text.
- `velmora-blush` (`#E6D4C5`): gentle newsletter and testimonial highlights.

## Typography
- Headings and product names: `font-serifDisplay` using Cormorant Garamond. Use refined, high-contrast sizing and generous line-height.
- Body and UI: `font-sans` using Manrope. Keep labels crisp, readable, and understated.
- Product names: uppercase with wide letter spacing, e.g. `uppercase tracking-[0.22em]` or the `tracking-product` token.

## Layout and spacing
- Mobile-first with generous vertical rhythm. Use roomy section padding (`py-16`, `md:py-24`) and centered max-width containers.
- Desktop layouts should feel editorial: split image/text sections, multi-column product grids, and ample whitespace.
- Use thin dividers (`border-velmora-linen`) and avoid heavy boxes.

## Components
- Buttons: premium solid espresso or gold-accent buttons with subtle transitions. Avoid bright sale-like colors.
- Cards: soft shadows, ivory/parchment backgrounds, elegant image crops, restrained hover lift.
- Navigation: transparent over the hero, solid ivory/espresso when scrolled or on inner pages.
- Cart drawer: light surface with explicit espresso/cocoa text for strong readability.

## Do
- Use warm editorial imagery, close crops, gold jewelry, model styling, and neutral/dark backdrops.
- Keep motion subtle: opacity, translate, and gentle hover reveals.
- Ensure all text has strong contrast on its surface.

## Don't
- Do not use discount-style red sale badges, neon colors, heavy gradients, or generic marketplace styling.
- Do not crowd mobile views or collapse desktop layouts into overly narrow single columns.
- Do not introduce new arbitrary hex colors in components; use the named Tailwind palette above.
