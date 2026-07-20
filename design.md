# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso text, and restrained antique-gold accents that flatter demi-fine gold jewelry without feeling promotional.

## Palette
- `velmora-ivory` `#F6F0E7`: primary page background.
- `velmora-porcelain` `#FBF8F2`: elevated cards and form surfaces.
- `velmora-espresso` `#241A16`: primary text and dark editorial panels.
- `velmora-umber` `#5C4134`: secondary text.
- `velmora-taupe` `#B8A494`: muted borders and dividers.
- `velmora-gold` `#B98B4D`: primary accent and buttons.
- `velmora-champagne` `#E7D4B7`: soft metallic highlight.
- `velmora-clay` `#8F5E4A`: warm secondary accent.

Use strong contrast: espresso text on ivory/porcelain, ivory text on espresso, and gold primarily as an accent or solid button background with espresso text.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, high contrast, editorial scale.
- Body and UI: `Manrope`, clean sans-serif.
- Product names: uppercase, wide letter spacing, serif.

Example Tailwind classes:
- Headline: `font-serif text-6xl leading-none text-velmora-espresso`
- Body: `font-sans text-base leading-7 text-velmora-umber`
- Product name: `font-serif uppercase tracking-velmora text-velmora-espresso`

## Layout and Surfaces
- Generous whitespace with `py-16`, `py-24`, and max-width containers.
- Thin hairline dividers using `border-velmora-taupe/40`.
- Cards use warm porcelain backgrounds, soft shadows, and restrained borders.
- Imagery is editorial, warm-lit, and spacious.

## Buttons and Interactions
- Primary buttons: solid antique gold, espresso text, subtle hover lift.
- Secondary buttons: transparent/outlined with thin espresso or gold border.
- Transitions should be soft: `transition duration-300 ease-out`.
- Avoid loud colors, sale badges, heavy gradients, and generic marketplace styling.

## Do's
- Keep the site warm, airy, premium, and accessible.
- Use large imagery with small refined labels.
- Maintain consistent accent usage sitewide.

## Don'ts
- Do not use discount-style red badges or high-saturation palettes.
- Do not crowd cards with too many controls.
- Do not use low-contrast text on warm surfaces.
