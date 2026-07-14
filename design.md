# Velmora Fine Jewelry Design System

## Visual direction
Quiet luxury with a warm editorial feel. The storefront should feel intimate, polished, and premium-but-accessible, never loud or discount-oriented.

## Palette
Use a deep espresso base with warm ivory surfaces and muted gold accents.

- `velmora-ink` (`#211814`): primary text and dark surfaces.
- `velmora-espresso` (`#2B211D`): elevated dark backgrounds.
- `velmora-cream` (`#F7F0E7`): main page background.
- `velmora-linen` (`#EFE3D4`): soft panels and dividers.
- `velmora-champagne` (`#C59A57`): premium CTA and metallic accent.
- `velmora-bronze` (`#8E6235`): hover states and secondary accent.
- `velmora-sage` (`#706F5C`): muted editorial text.
- `velmora-blush` (`#D8B8A5`): newsletter/accent warmth.

Always pair dark surfaces with cream/ivory text and light surfaces with ink text. Use champagne sparingly for CTAs, rules, icons, and premium highlights.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif. Example Tailwind: `font-serif tracking-tight`.
- Body and UI: Manrope, clean sans-serif. Example Tailwind: `font-sans tracking-[0.02em]`.
- Product names: uppercase with generous letter spacing. Example Tailwind: `uppercase tracking-[0.22em]`.

## Layout and spacing
Use generous whitespace and editorial pacing. Prefer full-bleed imagery, thin hairline dividers, and spacious cards. Mobile is first-class: stack sections naturally on small screens, expand into balanced grids on desktop.

## Components
- Buttons: restrained, premium, rounded-full. Solid champagne on dark/light surfaces or outlined ink/champagne alternatives.
- Cards: soft shadows, warm ivory/linen backgrounds, thin borders.
- Navigation: transparent over hero, solid cream/espresso on scroll with subtle border.
- Product cards: minimal details, image-led, quick action revealed on hover/focus.

## Do
- Use warm gold-neutral imagery.
- Keep copy and labels readable with strong contrast.
- Use subtle transitions: opacity, translate, color, border.
- Use hairline dividers (`border-velmora-linen/70`, `border-white/15`).

## Don't
- Do not use bright sale colors, loud badges, or generic blue e-commerce UI.
- Do not use low-contrast text on image overlays.
- Do not hardcode arbitrary colors in JSX; use named Tailwind colors from this system.
