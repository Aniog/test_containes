# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial tone. The storefront should feel like a premium demi-fine jewelry atelier: refined, spacious, intimate, and never promotional or loud.

## Palette
Use one consistent warm dark-and-cream palette that flatters gold jewelry.

- Obsidian espresso background: `velmora-obsidian` / `#15110E`
- Deep espresso surface: `velmora-espresso` / `#241B16`
- Soft cream base: `velmora-cream` / `#F8F2EA`
- Warm parchment sections: `velmora-parchment` / `#EFE3D2`
- Silk cards: `velmora-silk` / `#FFF9F1`
- Antique gold accent: `velmora-gold` / `#B98B4B`
- Deep bronze hover/accent: `velmora-bronze` / `#7B5630`
- Readable muted text: `velmora-muted` / `#7C6B5D`

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, generous leading.
- Product names: uppercase with wide letter spacing.
- Body and UI: Manrope, clean sans-serif.

Example classes:
- Headline: `font-serifDisplay text-5xl md:text-7xl leading-none`
- Product name: `font-serifDisplay uppercase tracking-product text-xl`
- UI label: `font-sansBody uppercase tracking-nav text-xs`

## Layout & spacing
- Mobile-first, with spacious desktop layouts using `md:` and `lg:` breakpoints.
- Use generous whitespace: `py-16 md:py-24`, `px-5 md:px-10`.
- Prefer max-width containers: `max-w-7xl mx-auto`.
- Use thin hairline dividers: `border-velmora-gold/20` or `border-velmora-espresso/10`.

## Components
- Buttons should feel premium: solid antique-gold or outlined espresso/gold, rounded-full, uppercase, small letter-spacing.
- Cards use subtle shadows, cream/silk backgrounds, and restrained transitions.
- Navigation is transparent over hero, then solid cream with readable espresso text on scroll.
- Avoid bright sale colors, discount badges, heavy borders, and crowded layouts.

## Accessibility
- Always pair dark surfaces with cream/silk text.
- Always pair cream surfaces with obsidian/espresso text.
- Muted text must remain readable; use `velmora-muted` only on light backgrounds and cream-gold variants on dark backgrounds.
