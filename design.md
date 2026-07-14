# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial palette designed to flatter gold jewelry. The storefront should feel premium, calm, and intimate rather than promotional or generic.

## Palette
Use named Tailwind colors from `tailwind.config.js` only.
- `velmora-ink` (`#1F1814`): primary text and deep surfaces.
- `velmora-espresso` (`#3A2A21`): secondary deep panels and borders on dark sections.
- `velmora-cream` (`#F7F1E8`): primary page background.
- `velmora-parchment` (`#EFE3D2`): soft neutral blocks and cards.
- `velmora-champagne` (`#D8B46A`): restrained metallic accent for CTAs, rules, icons, and active states.
- `velmora-antique` (`#A9783D`): hover accent and secondary metallic tone.
- `velmora-rose` (`#D6B8A8`): subtle warm highlight.
- `velmora-stone` (`#76685F`): body copy and muted text.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, refined line-height.
- Body and UI: `Manrope`, clean sans-serif.
- Product names: uppercase with wide tracking via `tracking-product`.
- Navigation and small labels: uppercase, small size, letter-spaced.

## Components
- Buttons: premium pill or rectangular CTA, champagne fill with ink text, smooth hover to antique.
- Cards: soft cream/parchment surfaces, hairline borders, subtle shadows only.
- Dividers: thin 1px lines using champagne/espresso with low opacity.
- Images: editorial scale, warm gold jewelry, dark or neutral backdrops, soft rounded corners where appropriate.

## Responsive Rules
- Mobile-first layout with stacked hero/product/detail sections.
- Desktop uses multi-column editorial layouts and generous whitespace.
- Preserve readable contrast on all cards, overlays, and panels.

## Do
- Use generous spacing, restrained accents, and editorial imagery.
- Keep text legible with explicit foreground color on custom backgrounds.
- Use subtle transitions for hover, drawer, buttons, and product images.

## Don’t
- Do not use loud discount colors, sale badges, neon accents, or heavy shadows.
- Do not use low contrast text or generic e-commerce styling.
- Do not hardcode arbitrary hex values in JSX classes; use the named palette.
