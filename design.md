# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial point of view. The storefront should feel premium, intimate, and giftable, never loud, discounted, or generic.

## Palette
Use a soft parchment foundation with a deep espresso-plum base and restrained antique-gold accents.

- `velmora-ink` (`#241915`): primary text, solid nav/drawer surfaces.
- `velmora-espresso` (`#37241E`): deep section backgrounds and high-contrast editorial panels.
- `velmora-parchment` (`#F7F0E6`): main page background.
- `velmora-ivory` (`#FFF9F0`): cards, form fields, elevated surfaces.
- `velmora-taupe` (`#B8A696`): muted dividers, secondary UI.
- `velmora-gold` (`#B9854B`): buttons, links, focus rings, tasteful metallic accent.
- `velmora-champagne` (`#E8D4B8`): soft accent fills and trust strips.
- `velmora-rose` (`#9B6D5E`): warm secondary accent.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, high contrast, editorial scale.
- Body and UI: `Manrope`, clean sans-serif for readability.
- Product names: uppercase with wide letter spacing (`uppercase tracking-[0.18em]` or named utilities).

## Layout and Spacing
- Mobile-first, generous whitespace, relaxed vertical rhythm.
- Desktop content should use wide editorial layouts, not mobile stacking.
- Use thin hairline dividers (`border-velmora-taupe/30`) and subtle shadows.
- Keep product cards clean with image-first composition and restrained metadata.

## Components
- Buttons: premium solid antique-gold with ink text, or outlined hairline buttons on ivory/parchment.
- Cards: ivory surfaces, soft shadows, thin borders, gentle hover lift.
- Inputs: ivory/champagne backgrounds with clear ink text and visible focus states.
- Navigation: transparent over hero; solid parchment/ivory after scroll.

## Do
- Use warm jewelry imagery on neutral or deep backgrounds.
- Keep all text high contrast and explicitly colored.
- Use smooth, subtle transitions (`duration-300`, `ease-out`).
- Favor editorial section headings and airy grid spacing.

## Don't
- Do not use neon colors, sale badges, heavy borders, or loud discount language.
- Do not use low-contrast taupe text for important product data.
- Do not hardcode arbitrary hex colors in JSX; use named Tailwind colors.
