# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: deep espresso foundations, warm ivory surfaces, champagne-gold accents, and generous whitespace. The storefront should feel premium and intimate, never loud or discount-oriented.

## Palette
- Ink Espresso: `velmora-espresso` (`#17110E`) for primary text, dark sections, nav overlays, and footer.
- Warm Ivory: `velmora-ivory` (`#F8F1E8`) for the page background and editorial cards.
- Pearl: `velmora-pearl` (`#FFF9F1`) for elevated surfaces and form fields.
- Champagne Gold: `velmora-gold` (`#C8A15A`) for primary CTAs, dividers, ratings, and refined accents.
- Burnished Gold: `velmora-burnished` (`#8D6837`) for hover states and understated labels.
- Taupe: `velmora-taupe` (`#BBAA96`) for secondary text, hairlines, and soft borders.
- Rose Clay: `velmora-clay` (`#A96F5E`) for gentle editorial emphasis only.

## Typography
- Headings and product names: Playfair Display, elegant serif, high contrast, relaxed line-height.
- Body and UI: Manrope, clean sans-serif, readable and calm.
- Product names: uppercase with wide letter spacing (`tracking-[0.2em]` or `tracking-[0.24em]`) and restrained sizing.

## Layout & Spacing
- Use generous vertical rhythm: large section padding (`py-16`, `md:py-24`) and spacious gutters (`px-5`, `md:px-10`).
- Prefer editorial asymmetry and large imagery, balanced by clean product grids.
- Use thin hairline dividers (`border-velmora-taupe/30`) instead of heavy borders.
- Keep desktop layouts multi-column; mobile stacks cleanly with breathing room.

## Components
- Buttons: premium solid champagne-gold buttons with espresso text, or outlined buttons with gold borders. Use uppercase labels and wide tracking.
- Cards: soft ivory/pearl surfaces, subtle shadows, hairline borders, and slow hover transitions.
- Navigation: transparent over hero, solid pearl/ivory after scroll with strong text contrast.
- Imagery: warm gold jewelry, editorial close-ups, soft shadows, restrained overlays.

## Do's
- Keep text contrast explicit and accessible on every custom background.
- Use subtle transitions (`duration-300` to `duration-500`) and slight image scale on hover.
- Use gold accent sparingly for CTAs, stars, dividers, and small labels.

## Don'ts
- Do not use bright sale colors, generic discount badges, or loud gradients.
- Do not crowd product cards or reduce whitespace on desktop.
- Do not use hardcoded arbitrary hex values in JSX; use the named Tailwind colors above.
