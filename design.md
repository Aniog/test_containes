# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet-luxury editorial direction: warm candlelit neutrals, deep espresso contrast, antique gold accents, generous whitespace, thin dividers, and soft gallery-like surfaces. The storefront should feel premium and calm, never loud, crowded, or discount-driven.

## Palette
- Ink espresso: `#211812` for primary text, deep sections, navigation, and high-contrast surfaces.
- Warm ivory: `#fbf6ee` for page backgrounds and soft panels.
- Alabaster: `#fffaf3` for cards and inputs.
- Champagne gold: `#c59a52` for primary CTAs, accents, stars, hairlines, and hover states.
- Muted taupe: `#8f7b67` for secondary copy.
- Blush clay: `#d8b8a2` for understated editorial blocks.
- Cocoa: `#4a3227` for footer and dark accent sections.

Use these as named CSS variables in `src/index.css`; do not scatter arbitrary hex values in JSX.

## Typography
- Headings and product names: Playfair Display, elegant serif, high contrast, refined tracking where appropriate.
- Body and UI: Manrope, clean sans-serif with strong readability.
- Product names must be uppercase with wide letter spacing.
- Hero and section headlines should be spacious, calm, and editorial.

## Layout & Spacing
- Mobile-first; use responsive grids that open into multi-column editorial layouts at `md:` and `lg:` breakpoints.
- Use generous vertical rhythm: section padding around `py-16`, `md:py-24`, `lg:py-28`.
- Keep max content width near `max-w-7xl`, with `px-4`, `sm:px-6`, `lg:px-8`.
- Use thin borders (`border-[color:var(--color-hairline)]`) and large radii only where they feel soft and premium.

## Components
- Buttons: solid champagne on espresso text for primary actions; outlined espresso/champagne for secondary actions. Subtle hover lift and shadow.
- Product cards: ivory/alabaster cards, restrained shadows, image-first with hover reveal and quick add overlay.
- Cart drawer: espresso text on warm ivory, clear quantities, readable total, full-width checkout CTA placeholder.
- Inputs: alabaster background, espresso text, visible focus ring in champagne.
- Dividers: thin hairlines, never heavy borders.

## Imagery
Use Strikingly stock image attributes for jewelry and editorial imagery. Imagery should be warm gold jewelry on skin, dark velvet, ivory silk, marble, or soft neutral studio backgrounds. Do not use hardcoded external image URLs.

## Do's
- Maintain strong contrast for every text element.
- Use soft transitions: `transition`, `duration-300`, `ease-out`.
- Let whitespace and typography create the premium mood.
- Keep copy concise and editorial.

## Don'ts
- No loud sale banners, neon colors, busy gradients, or generic marketplace styling.
- No low-contrast taupe text on dark or blush backgrounds.
- No arbitrary inline colors or one-off visual styles outside the palette.
