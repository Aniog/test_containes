# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with warm editorial restraint. The storefront should feel premium, intimate, and tactile: soft ivory surfaces, deep espresso contrast, muted gold accents, hairline borders, generous whitespace, and large warm jewelry imagery.

## Palette
Use named Tailwind colors from `tailwind.config.js` only.
- `velmora-ink` (`#1F1712`): primary text, solid buttons, dark surfaces.
- `velmora-espresso` (`#34251D`): nav overlays, footer, rich card accents.
- `velmora-cream` (`#F8F1E8`): page background.
- `velmora-porcelain` (`#FFFDF8`): cards, drawers, inputs.
- `velmora-linen` (`#E8DCCE`): borders, dividers, muted panels.
- `velmora-gold` (`#B9894F`): primary accent, CTAs, ratings.
- `velmora-champagne` (`#D8BC8A`): soft highlight and hover surfaces.
- `velmora-clay` (`#8D6F5D`): muted body copy.

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond. Large, airy, editorial line-height.
- Body and UI: `font-sans` using Manrope.
- Product names: uppercase, wide tracking (`tracking-[0.22em]` or token utility), refined and understated.

## Layout and Spacing
- Mobile-first with comfortable stacked layouts.
- Desktop should use multi-column editorial grids, not mobile stacking.
- Use generous vertical spacing: section padding around `py-16 md:py-24`.
- Use thin hairline dividers: `border-velmora-linen`.
- Cards should be clean, spacious, and not boxed heavily.

## Buttons and Interactions
- Primary buttons: solid `velmora-ink` or `velmora-gold` with readable cream text.
- Secondary buttons: thin outlined dark or gold border.
- Hover transitions should be subtle: opacity, translate, soft shadow, image scale.
- Avoid bright sale-like colors and discount styling.

## Imagery
- Use warm-lit jewelry, model closeups, neutral/editorial backgrounds.
- Use Strikingly stock image tags with contextual text references.
- Prefer large editorial crops and vertical 9:16 UGC cards.

## Do
- Keep contrast strong and every text surface explicitly readable.
- Use restrained metallic accents.
- Keep nav, product cards, and cart drawer elegant and uncluttered.

## Don't
- Do not use loud gradients, red sale badges, neon colors, or generic marketplace styling.
- Do not hardcode arbitrary colors in JSX/CSS; use named Tailwind tokens.
- Do not use external image URLs or API calls.
