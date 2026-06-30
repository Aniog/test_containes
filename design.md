# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial feel: deep espresso and ivory surfaces, softened blush neutrals, and restrained antique-gold accents. The store should feel premium and calm, never promotional or loud.

## Palette
- Deep espresso base: `velmora-espresso` (`#211712`) for navigation, footer, hero overlays, and high-contrast text.
- Warm ivory: `velmora-ivory` (`#F8F2E8`) for page backgrounds.
- Soft champagne: `velmora-champagne` (`#E8D6BA`) for panels, trust bar, and subtle section backgrounds.
- Antique gold: `velmora-gold` (`#B4874B`) for primary CTAs, accents, icons, and thin rules.
- Burnished gold: `velmora-burnished` (`#7A552D`) for hover states and stronger accent text.
- Rose clay: `velmora-clay` (`#B98272`) for small editorial highlights.
- Ink brown: `velmora-ink` (`#32231C`) for readable body copy on light surfaces.
- Muted taupe: `velmora-taupe` (`#7E6D61`) for secondary text.

## Typography
- Headings and product names use Cormorant Garamond: elegant, high-contrast, editorial.
- Body and UI use Manrope: clean, modern, legible.
- Product names are uppercase with wide letter spacing.

## Layout and Styling
- Use generous whitespace, large imagery, hairline borders, restrained shadows, and smooth transitions.
- Buttons should be refined: solid antique-gold with ivory text, or outlined espresso/gold with subtle hover fills.
- Cards should use warm ivory/champagne surfaces with explicit readable text colors.
- Dividers are thin and low-contrast, typically `border-velmora-gold/20` or `border-velmora-espresso/10`.

## Do
- Keep contrast strong and text legible on every surface.
- Use editorial image crops, especially portrait and vertical formats.
- Use subtle hover movement and opacity transitions.
- Keep mobile layouts spacious and thumb-friendly.

## Don't
- Do not use bright discount colors, heavy gradients, generic neon accents, or crowded sale banners.
- Do not use arbitrary hex values directly in JSX; use named Tailwind colors from the config.
- Do not make product grids feel dense or low-end.
