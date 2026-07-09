# Velmora Fine Jewelry Visual Design

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, aged-gold accents, and generous whitespace. The storefront should feel premium, calm, and intimate rather than loud or promotional.

## Palette
- Ink: deep espresso for primary text and dark sections. Tailwind: `velmora-ink`.
- Ivory: warm page background. Tailwind: `velmora-ivory`.
- Pearl: elevated card and panel surface. Tailwind: `velmora-pearl`.
- Sand: soft neutral blocks and dividers. Tailwind: `velmora-sand`.
- Gold: restrained metallic accent for CTAs, borders, icons, and highlights. Tailwind: `velmora-gold`.
- Bronze: hover and secondary accent. Tailwind: `velmora-bronze`.
- Cocoa: warm muted body text. Tailwind: `velmora-cocoa`.
- Blush: subtle editorial accent block. Tailwind: `velmora-blush`.

## Typography
- Headings and product names use Cormorant Garamond for an editorial jewelry feel. Tailwind: `font-serif`.
- Body copy and UI controls use Manrope. Tailwind: `font-sans`.
- Product names are uppercase with wide tracking: `uppercase tracking-[0.24em]` or `tracking-[0.2em]`.

## Layout & spacing
- Use generous vertical rhythm: section padding around `py-16 md:py-24`.
- Use centered max-width containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Prefer thin hairline dividers: `border-velmora-gold/20` or `border-velmora-ink/10`.
- Cards should feel airy with soft shadows and subtle hover lift.

## Interaction style
- CTAs should be refined and confident: solid gold with ink text, or outlined ink/gold on pale surfaces.
- Use subtle transitions: opacity, transform, colors over `duration-300`.
- Cart drawer and accordions should feel smooth but lightweight.

## Do
- Keep imagery warm, close-up, tactile, and editorial.
- Ensure every text element has strong contrast against its background.
- Use restrained accent color and avoid sale/discount visual language.

## Don't
- Do not use bright generic e-commerce blues, harsh blacks, or loud gradients.
- Do not crowd product cards or overuse badges.
- Do not introduce arbitrary hex colors in JSX classes; use named Tailwind colors from the config.
