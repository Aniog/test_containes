# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial look: warm ivory surfaces, ink-green depth, champagne-gold accents, refined hairline borders, generous whitespace, and soft shadows. The storefront should feel premium and intimate, never loud, discounted, or generic.

## Palette
Use named Tailwind colors from `tailwind.config.js` only. Avoid arbitrary hex values in JSX class strings.

- `velmora-ivory` (`#F7F1E8`): primary page background.
- `velmora-cream` (`#FFF9F0`): elevated cards, inputs, and light panels.
- `velmora-ink` (`#1B2A24`): deep refined text and dark surfaces.
- `velmora-forest` (`#243B32`): navigation, editorial dark sections, footer.
- `velmora-sage` (`#A8B5A2`): soft secondary accent and muted panels.
- `velmora-gold` (`#B88945`): primary CTA/accent color.
- `velmora-champagne` (`#E8D2AE`): subtle metallic highlight.
- `velmora-clay` (`#9A6B53`): warm muted supporting text.
- `velmora-line` (`#D8C8AE`): hairline borders and dividers.

Always pair dark surfaces with `velmora-ivory` or `velmora-cream`, and light surfaces with `velmora-ink`.

## Typography
- Headings and product names: `font-serif` using Cormorant Garamond.
- Body and UI: `font-sans` using Manrope.
- Product names: uppercase, wide tracking (`tracking-[0.22em]` is acceptable for product headings only; otherwise use `tracking-widest`).
- Editorial captions can use serif italic styling.

## Layout and spacing
- Mobile-first layouts with generous padding (`px-5`, `py-16`), expanding to desktop spacing (`lg:px-12`, `lg:py-24`).
- Desktop sections should use wide editorial compositions, not single-column mobile layouts.
- Use thin dividers (`border-velmora-line/70`) between premium content blocks.
- Product grids should be airy with consistent gaps.

## Components
- Buttons: solid `velmora-gold` with ink text, or outline buttons with gold/line borders. Use rounded-full for a jewelry-like soft premium shape.
- Cards: cream surfaces, thin line borders, subtle shadows, restrained hover lift.
- Inputs: cream/ivory backgrounds, ink text, line borders, clear focus rings in gold.
- Cart drawer: cream surface, readable ink text, strong contrast buttons.

## Imagery
Use Strikingly stock image tags for warm editorial jewelry imagery. Prefer close-up gold jewelry on skin, velvet, marble, parchment, or neutral studio backgrounds. Avoid bright sale imagery, generic product mockups, and hard neon colors.

## Do / Don't
- Do keep accents restrained and consistent.
- Do use warm, flattering surfaces for gold jewelry.
- Do ensure all visible text has strong contrast.
- Don't use bright discount colors, heavy gradients, large badges, or crowded layouts.
- Don't hardcode image URLs or arbitrary color hex values in components.
