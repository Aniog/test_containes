# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial direction: deep espresso foundations, warm ivory surfaces, champagne metallic accents, fine hairline borders, generous whitespace, and soft photographic panels. The design should feel premium and intimate, never loud or discount-driven.

## Palette
Use Tailwind theme tokens only; do not add arbitrary hex values in component class strings.

- `velmora-ink` — deep espresso-black for primary text and premium dark sections.
- `velmora-espresso` — refined dark brown for navigation, overlays, and footer.
- `velmora-ivory` — warm page background.
- `velmora-parchment` — elevated card and section surface.
- `velmora-champagne` — restrained metallic accent for CTAs and highlights.
- `velmora-gold` — deeper gold for borders, icons, and small accents.
- `velmora-blush` — subtle warm tint for editorial blocks.
- `velmora-line` — thin divider and card border color.
- `velmora-muted` — secondary copy color.

## Typography
- Headings and logo: Cormorant Garamond, elegant serif, high contrast.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide tracking, serif, restrained size.

## Layout and spacing
- Use generous section padding: `py-16 md:py-24`.
- Keep content centered with `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Prefer airy grids, thin dividers, soft shadows, and editorial image proportions.
- Mobile-first layouts should stack cleanly; desktop layouts should use multi-column editorial compositions.

## Components
- Primary buttons: `bg-velmora-champagne text-velmora-ink` with subtle hover lift.
- Secondary buttons: transparent or ivory with `border-velmora-gold` and readable dark text.
- Cards: `bg-velmora-parchment text-velmora-ink border border-velmora-line shadow-soft`.
- Dark surfaces must explicitly use `text-velmora-ivory`.
- All important text must have explicit readable foreground colors.

## Do
- Use warm imagery, gold jewelry, close crops, model-worn pieces, and soft shadows.
- Use small caps, hairline dividers, refined spacing, and slow transitions.
- Keep accent color restrained.

## Do not
- Do not use bright sale colors, discount badges, generic marketplace styling, or heavy gradients.
- Do not use low-contrast text.
- Do not hardcode arbitrary colors in JSX class strings.
