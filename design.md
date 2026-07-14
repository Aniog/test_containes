# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with a warm editorial tone. The storefront should feel like a premium demi-fine jewelry magazine spread: calm, refined, generous, and confident. Avoid loud discount colors, crowded product cards, heavy borders, or generic marketplace styling.

## Palette
Use a deep espresso base with warm parchment surfaces and restrained champagne-gold accents. All colors must be referenced through Tailwind theme tokens, not arbitrary hex classes.

- `velmora-espresso` (`#1F1712`): primary dark base, footer, drawer, high-contrast text on light backgrounds.
- `velmora-ink` (`#31251D`): softer body text and section headings.
- `velmora-parchment` (`#F6EFE6`): main page background.
- `velmora-ivory` (`#FFF9F0`): cards, forms, elevated panels.
- `velmora-sand` (`#E8D8C5`): hairline dividers, subtle borders.
- `velmora-bronze` (`#A7753B`): primary accent for buttons and active states.
- `velmora-champagne` (`#D7B46A`): metallic highlights, stars, small decorative details.
- `velmora-rose` (`#C8A28B`): soft secondary tint for editorial blocks.

## Typography
- Headings, logo, hero copy, product names: elegant serif using `Cormorant Garamond`.
- Body, navigation, UI, prices, buttons: clean sans-serif using `Manrope`.
- Product names should be uppercase with generous letter spacing.

Example Tailwind usage:
- Headings: `font-serif text-5xl md:text-7xl leading-none text-velmora-espresso`.
- Body: `font-sans text-sm md:text-base text-velmora-ink/80`.
- Product names: `font-serif uppercase tracking-[0.22em]` only when necessary for brand-specific typography.

## Layout and Components
- Use generous whitespace, wide gutters, and editorial image ratios.
- Use thin hairline borders: `border border-velmora-sand/70`.
- Cards should be subtle: ivory backgrounds, light shadows, and smooth hover transitions.
- Buttons should feel premium: solid bronze with ivory text or outlined espresso/bronze treatments.
- Navigation should be transparent over the hero and become ivory with a subtle border when scrolled.
- Mobile-first, with elegant stacking on small screens and multi-column editorial layouts on desktop.

## Do's
- Keep contrast strong and readable on every surface.
- Use warm gold/champagne accents sparingly.
- Use soft overlays on imagery for legibility.
- Keep microcopy refined and concise.

## Don'ts
- Do not use bright sale reds, neon accents, or heavy ecommerce badges.
- Do not crowd product cards with excessive labels.
- Do not place low-contrast beige text on light beige surfaces.
- Do not hardcode image URLs; use the Strikingly image tagging system for stock imagery.
