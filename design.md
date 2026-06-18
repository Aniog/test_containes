# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a warm editorial luxury direction: soft parchment surfaces, deep espresso text, refined muted-gold accents, generous whitespace, thin hairline dividers, and restrained motion. The result should feel premium and intimate, never loud, generic, or discount-driven.

## Palette
Use named Tailwind colors from `tailwind.config.js` only. Avoid arbitrary hex values in class names.

- `velmora-ink` (`#241815`): primary foreground and deep UI surfaces.
- `velmora-espresso` (`#3A2924`): secondary dark panels, footer, drawer headers.
- `velmora-bark` (`#5F463B`): warm body text and subdued labels.
- `velmora-parchment` (`#FBF7EF`): page background.
- `velmora-champagne` (`#F3E8D8`): editorial blocks and soft cards.
- `velmora-pearl` (`#FFFDF8`): elevated cards and forms.
- `velmora-oyster` (`#E8DED0`): hairline borders.
- `velmora-gold` (`#B08D57`): main accent, buttons, links, icons.
- `velmora-goldDeep` (`#80643B`): hover and readable metallic text.
- `velmora-blush` (`#D9BFAE`): soft highlight backgrounds.

## Typography
- Headings and product names use `font-serifDisplay` (Cormorant Garamond), with elegant weight and generous line height.
- Body and UI use `font-sans` (Manrope), with clear readable spacing.
- Product names are uppercase with wide letter spacing: use `uppercase tracking-[0.22em]` only for product labels and refined navigation details.

## Layout and spacing
- Use mobile-first layouts and expand to two or three columns at `md:` and `lg:` breakpoints.
- Preserve generous whitespace: section padding should generally be `py-16`, `md:py-24`, or larger for hero/editorial sections.
- Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for primary content containers.
- Hairline dividers should use `border-velmora-oyster` or translucent pearl borders on dark surfaces.

## Components
- Buttons: solid gold for primary actions, outlined warm dark/gold for secondary actions. Use subtle transitions, not dramatic effects.
- Product cards: quiet pearl surfaces, soft shadows, image-first layout, uppercase product names, quick add revealed on hover or always accessible on mobile.
- Navigation: transparent over hero, solid parchment after scroll, high contrast in both states.
- Cart drawer: pearl surface, clear quantity controls, visible totals, and readable status messages.

## Imagery
Use Strikingly stock image attributes for editorial jewelry imagery. Queries should reference nearby text IDs, not hardcoded image descriptions. Images should feel warm, close-up, and editorial with gold jewelry on model or neutral backgrounds.

## Do
- Keep motion subtle: fade, slight lift, gentle image scale.
- Set explicit foreground colors on cards, drawers, forms, overlays, and badges.
- Use refined gold accents sparingly.

## Don't
- Do not use loud sale language, bright discount colors, or crowded marketplace layouts.
- Do not place low-contrast text over images without a dark or warm overlay.
- Do not introduce arbitrary colors outside the approved palette.
