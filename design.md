# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, and restrained antique-gold accents. The look should feel premium and calm, never discount-driven or visually loud.

## Palette
- Deep espresso: `velmora-espresso` (`#1F1713`) for primary text, footer, and high-contrast surfaces.
- Charcoal brown: `velmora-charcoal` (`#302620`) for secondary dark sections.
- Warm ivory: `velmora-ivory` (`#F7F1E8`) for the main page background.
- Champagne: `velmora-champagne` (`#E8D8BE`) for soft cards and elevated surfaces.
- Antique gold: `velmora-gold` (`#B8874B`) for CTAs, borders, icons, ratings, and premium accents.
- Muted taupe: `velmora-taupe` (`#8B7A6A`) for supporting text.
- Rose clay: `velmora-clay` (`#C9A18C`) for soft editorial accents.

## Typography
- Headings, logo, editorial captions, and product display names use Cormorant Garamond.
- Body copy, navigation, buttons, forms, and prices use Manrope.
- Product names are uppercase with wide letter spacing.

## Layout and spacing
- Use generous whitespace and max-width containers (`max-w-7xl`).
- Use thin hairline dividers (`border-velmora-gold/20`, `border-velmora-espresso/10`).
- Keep sections airy with `py-16`, `py-20`, and larger desktop spacing.
- Mobile-first layouts should stack naturally, while desktop uses editorial two-column or multi-column grids.

## Components
- Buttons: premium solid antique-gold buttons with espresso text, or refined outlined buttons with gold borders.
- Cards: soft ivory/champagne surfaces, subtle shadows, no heavy borders.
- Images: large editorial crops, warm lighting, rounded only when it supports the layout; avoid playful shapes.
- Navigation: transparent on the homepage hero, solid warm ivory after scroll and on inner pages.

## Do
- Use restrained animations: opacity, translate, scale, subtle color transitions.
- Maintain high contrast for every text surface.
- Let jewelry imagery and typography carry the luxury feeling.

## Don’t
- Do not use bright sale colors, heavy badges, neon gradients, or loud ecommerce patterns.
- Do not crowd product grids; maintain breathing room.
- Do not use arbitrary hex values in component class strings; use Tailwind theme names.
