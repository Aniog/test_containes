# Velmora Fine Jewelry Visual Design Guide

## Direction
Quiet luxury with warm editorial restraint. The storefront should feel like a premium demi-fine jewelry atelier: spacious, tactile, soft, and polished without looking loud or promotional.

## Palette
Use one consistent warm-neutral palette that flatters gold jewelry:
- Ink: deep espresso charcoal for primary text and dark surfaces. Tailwind example: `velmora-ink`.
- Ivory: warm off-white for primary page backgrounds. Tailwind example: `velmora-ivory`.
- Champagne: soft neutral card and section backgrounds. Tailwind example: `velmora-champagne`.
- Sand: muted border and divider color. Tailwind example: `velmora-sand`.
- Gold: restrained metallic accent for CTAs, focus states, highlights, and icons. Tailwind example: `velmora-gold`.
- Blush: subtle warm accent blocks. Tailwind example: `velmora-blush`.

Do not use bright sale colors, neon tones, or generic blue e-commerce accents. Keep contrast strong: dark text on light surfaces, ivory text on dark surfaces.

## Typography
- Headings and product names: elegant serif, Cormorant Garamond. Use generous line-height and refined sizing.
- Body and UI: Manrope, clean and modern.
- Product names: uppercase, wide letter-spacing, serif, compact but readable.

## Layout & Spacing
- Mobile-first with generous breathing room and clear stacking.
- Desktop layouts should use balanced two-column editorial sections and multi-column product grids.
- Use thin hairline dividers, rounded image corners, and restrained shadows.
- Prefer large imagery and calm negative space over dense merchandising.

## Components
- Buttons: premium solid ink or gold-accent treatments, pill or softly rounded, subtle hover transitions.
- Cards: warm neutral surface, thin borders, soft hover lift, clear readable text.
- Navigation: transparent over hero, solid ivory after scroll with hairline border.
- Cart drawer: dark readable header, ivory body, clear quantity controls.

## Do
- Use editorial image crops, warm gold jewelry, model close-ups, and neutral/dark backgrounds.
- Keep copy confident and concise.
- Add subtle motion: fade, lift, and image crossfade.

## Don't
- Do not use discount badges, loud gradients, harsh shadows, or crowded product tiles.
- Do not hardcode arbitrary hex colors in JSX classes. Use Tailwind theme tokens.
- Do not allow low-contrast text on custom backgrounds.
