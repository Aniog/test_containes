# Velmora Fine Jewelry Visual System

Velmora uses a quiet luxury editorial direction: soft warm neutrals, deep espresso contrast, and muted antique-gold accents that flatter demi-fine gold jewelry without feeling loud or discount-oriented.

## Palette
- Background: warm ivory (`velmora-ivory`, example `bg-velmora-ivory`) for the primary page surface.
- Secondary surface: champagne beige (`velmora-champagne`, example `bg-velmora-champagne`) for editorial blocks and newsletter areas.
- Deep base: espresso brown (`velmora-espresso`, example `text-velmora-espresso`, `bg-velmora-espresso`) for premium contrast.
- Soft text: taupe (`velmora-taupe`, example `text-velmora-taupe`) for supporting copy, always on light surfaces only.
- Accent: antique gold (`velmora-gold`, example `bg-velmora-gold`, `text-velmora-gold`) for CTAs, dividers, ratings, and refined highlights.
- Hairlines: warm stone (`velmora-stone`, example `border-velmora-stone`) for subtle borders and dividers.

## Typography
- Headings and brand moments use Cormorant Garamond via `font-serif`, with generous line-height and refined contrast.
- Body and UI use Manrope via `font-sans`.
- Product names are uppercase with wide tracking, e.g. `uppercase tracking-[0.24em]`.
- Avoid heavy, crowded typography. Use whitespace and restrained weight.

## Layout & Spacing
- Mobile-first responsive layouts with comfortable single-column stacking on small screens and editorial grids from `md:` upward.
- Use generous section padding (`py-16`, `md:py-24`) and max-width containers (`max-w-7xl mx-auto px-5 sm:px-8`).
- Use thin hairline borders (`border`, `border-velmora-stone/70`) and subtle shadows only.

## Components
- Buttons: premium, calm, either solid espresso/gold or outlined hairline. Use uppercase labels with letter spacing.
- Cards: warm ivory/champagne surfaces, soft rounded corners, image-led composition, restrained hover transitions.
- Navigation: transparent over hero, solid warm ivory on scroll or inner pages.
- Inputs: warm light surfaces, espresso text, clear placeholder contrast.

## Do's
- Pair gold accents with ivory, champagne, espresso, and editorial imagery.
- Keep text contrast explicit and readable.
- Use subtle transitions: `transition-all duration-300 ease-out`.

## Don'ts
- Do not use bright sale colors, loud gradients, or discount badges.
- Do not use generic blue/purple e-commerce styling.
- Do not place taupe text on dark backgrounds or gold text on light beige unless contrast remains clear.
