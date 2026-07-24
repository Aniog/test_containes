# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso ink, burnished gold accents, restrained borders, and generous whitespace. The brand should feel premium, intimate, and calm rather than loud or promotional.

## Palette
- `velmora-ivory` (`#F7F1E8`): primary page background.
- `velmora-cream` (`#FFF9F0`): elevated cards and input surfaces.
- `velmora-linen` (`#E7D8C3`): subtle dividers and muted panels.
- `velmora-espresso` (`#261A16`): primary text and deep backgrounds.
- `velmora-cocoa` (`#5B463C`): secondary text.
- `velmora-gold` (`#B78A43`): metallic accent, buttons, focus states.
- `velmora-champagne` (`#D8B879`): soft accent fills and hover states.
- `velmora-rose` (`#B78376`): editorial warmth for badges and highlights.

## Typography
- Headings and logo use Cormorant Garamond with elegant serif contrast: `font-serif`.
- Body and UI use Manrope: `font-sans`.
- Product names are uppercase with wide tracking: `uppercase tracking-widest`.
- Hero headings should be large, airy, and editorial with `font-serif font-medium leading-none`.

## Layout and surfaces
- Use generous vertical rhythm: section padding `py-16 md:py-24`.
- Use thin hairline dividers with `border-velmora-linen`.
- Cards should be soft and refined: `bg-velmora-cream shadow-velmora border border-velmora-linen/70`.
- Avoid heavy outlines, bright sale colors, dense grids, and discount-style badges.

## Buttons
- Primary CTA: `bg-velmora-gold text-velmora-espresso hover:bg-velmora-champagne`.
- Secondary CTA: `border border-velmora-gold text-velmora-espresso hover:bg-velmora-gold hover:text-velmora-espresso`.
- Buttons should use rounded-full shapes, small uppercase labels, and subtle transitions.

## Imagery
- Use warm-lit gold jewelry imagery on skin, dark velvet, warm stone, or soft neutral backgrounds.
- Hero and editorial images should be large and immersive.
- Product imagery should feel curated and photographic, not generic catalog stock.

## Do's
- Keep contrast high and text explicitly readable on every surface.
- Use whitespace, hairline rules, serif captions, and restrained gold accents.
- Use subtle hover transitions and soft shadows.

## Don'ts
- Do not use loud sale colors, saturated neon tones, or cluttered promotional layouts.
- Do not use low-contrast text on image overlays; always add a dark gradient or solid surface.
- Do not hardcode arbitrary hex values in JSX class strings; use Tailwind theme tokens.
