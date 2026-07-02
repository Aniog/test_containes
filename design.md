# Velmora Fine Jewelry Design System

Velmora uses a warm editorial quiet-luxury direction designed to flatter gold jewelry and feel premium without looking inaccessible.

## Visual direction
- Mood: quiet luxury, warm, editorial, intimate, polished.
- Avoid: loud sale colors, generic marketplace grids, heavy gradients, neon accents, crowded layouts.
- Use generous whitespace, thin hairline dividers, soft shadows, large imagery, and restrained motion.

## Color palette
Use named Tailwind colors from `tailwind.config.js` instead of arbitrary hex values in JSX.

- `velmora-ink` (`#191613`): primary deep espresso text and dark surfaces.
- `velmora-espresso` (`#2A211B`): hero overlays, footer, premium dark panels.
- `velmora-cream` (`#F8F1E7`): main warm page background.
- `velmora-linen` (`#EFE3D2`): secondary surfaces and editorial blocks.
- `velmora-parchment` (`#FCF8F1`): cards, forms, nav solid background.
- `velmora-gold` (`#B98745`): metallic accent for CTAs, icons, borders, ratings.
- `velmora-bronze` (`#7A5730`): darker accent for hover states and readable accent text.
- `velmora-rose` (`#C8A28D`): soft supporting accent.
- `velmora-mist` (`#D8C8B7`): hairline dividers and subtle borders.

## Typography
- Headings and product names: Cormorant Garamond serif.
- Body and UI: Manrope sans-serif.
- Product names: uppercase, wide tracking, refined scale.
- Logo: serif uppercase with moderate tracking.

## Layout and components
- Desktop layouts should use multi-column editorial compositions; mobile stacks naturally with comfortable spacing.
- Product cards: warm parchment background, soft shadow, thin border, image-first layout.
- Buttons: premium gold fill with dark readable text, or thin outlined gold/ink variants.
- Dividers: use `border-velmora-mist` with thin borders.
- Text contrast: use `text-velmora-ink` on light surfaces and `text-velmora-cream` on dark surfaces.

## Motion
- Keep animations subtle: opacity, translate, scale no more than a gentle lift.
- Hover transitions should feel soft and editorial, not flashy.
