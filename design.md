# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm, refined, feminine, and premium without looking loud or discount-driven. The visual system is built to flatter gold jewelry through deep espresso contrast, creamy editorial neutrals, and restrained champagne-metallic accents.

## Palette
- Deep espresso base: `velmora-espresso` (`#201812`) for navigation, footer, hero overlays, and premium contrast surfaces.
- Soft ivory canvas: `velmora-ivory` (`#F7F2EA`) for the main page background.
- Warm parchment cards: `velmora-parchment` (`#EFE4D4`) for editorial panels and subtle content blocks.
- Champagne accent: `velmora-champagne` (`#C9A25D`) for primary buttons, icons, stars, and thin highlights.
- Burnished gold hover: `velmora-gold` (`#A97A32`) for active/hover states.
- Taupe text: `velmora-taupe` (`#75685C`) for secondary copy with clear contrast.
- Pearl lines: `velmora-pearl` (`#E2D6C6`) for hairline dividers and borders.
- Rose clay accent: `velmora-clay` (`#A86F5C`) for occasional warm editorial accents only.

## Typography
- Headings and product names use an elegant serif: Cormorant Garamond.
- Body, UI, prices, and utility labels use Manrope.
- Product names should be uppercase with wide letter spacing: example `font-serif uppercase tracking-[0.22em]` only where intentional.
- Use generous leading and whitespace. Avoid cramped product grids.

## Layout & Spacing
- Mobile-first, with desktop grids using `md:` and `lg:` breakpoints.
- Use wide editorial containers (`max-w-7xl`) and generous vertical rhythm (`py-16`, `lg:py-24`).
- Thin hairline dividers should use `border-velmora-pearl`.
- Hero imagery should feel full-bleed and cinematic with readable overlays.

## Components
- Buttons: solid champagne on espresso/ivory surfaces, or outlined champagne for secondary actions. Use uppercase, small text, wide tracking, and subtle transitions.
- Cards: warm ivory/parchment surfaces, soft shadows, thin pearl borders, restrained hover lift.
- Inputs: clean ivory surfaces with champagne/espresso focus states.
- Cart drawer and mobile menu: espresso or ivory surfaces with explicit readable text colors.

## Do
- Keep contrast strong and every label readable.
- Use warm gold and neutral imagery that supports the jewelry.
- Use slow, subtle hover transitions and soft shadows.
- Keep accent color restrained and intentional.

## Don’t
- Do not use loud sale colors, discount badges, generic blue UI accents, or neon tones.
- Do not overcrowd mobile layouts.
- Do not use hardcoded image URLs; use the Strikingly image attributes.
- Do not place low-contrast taupe text on dark backgrounds.
