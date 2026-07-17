# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm porcelain surfaces, deep espresso contrast, champagne metallic accents, generous whitespace, thin dividers, and soft shadowing. The interface should feel premium and calm, never promotional or loud.

## Palette
- Porcelain base: `velmora-porcelain` (`#F6F0E8`) for page backgrounds.
- Pearl card: `velmora-pearl` (`#FFFDF8`) for elevated cards and form surfaces.
- Espresso text: `velmora-espresso` (`#241A16`) for primary text and strong buttons.
- Cocoa muted: `velmora-cocoa` (`#6F5A4F`) for secondary text.
- Champagne accent: `velmora-champagne` (`#C6A15B`) for premium CTAs, icons, stars, and dividers.
- Bronze hover: `velmora-bronze` (`#9B773D`) for hover states.
- Linen border: `velmora-linen` (`#E7DAC9`) for hairline borders.
- Oxblood depth: `velmora-oxblood` (`#3A1718`) for editorial contrast blocks.

## Typography
- Headings and logo: elegant serif using Cormorant Garamond. Example Tailwind: `font-serif`.
- Body and UI: clean sans using Manrope. Example Tailwind: `font-sans`.
- Product names: uppercase, wide letter spacing. Example Tailwind: `uppercase tracking-[0.22em]`.

## Components
- Buttons: refined, rounded-full, clear contrast. Primary buttons use espresso or champagne surfaces with matching readable foregrounds.
- Cards: pearl background, linen borders, soft shadows, subtle lift on hover.
- Dividers: one-pixel linen or champagne lines, never heavy borders.
- Imagery: large editorial crops, warm gold jewelry, soft neutral or dark backgrounds.
- Inputs: pearl or porcelain surfaces, linen border, espresso text, cocoa placeholder.

## Layout
- Mobile first with generous vertical spacing and comfortable tap targets.
- Desktop should use editorial multi-column layouts, not mobile stacking.
- Use whitespace as a premium feature; avoid clutter and discount-style badges.

## Do
- Keep text contrast high and explicit on every surface.
- Use restrained motion: fade, lift, and slow image zooms.
- Keep accents consistent and sparse.

## Do not
- Do not use bright sale colors, loud gradients, or generic marketplace styling.
- Do not place low-contrast beige text on beige backgrounds.
- Do not hardcode new color hex values in JSX; add named colors to Tailwind if needed.
