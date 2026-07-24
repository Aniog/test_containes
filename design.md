# Velmora Fine Jewelry Design System

## Visual Direction
Velmora uses a quiet-luxury editorial system: deep espresso surfaces, warm ivory pages, restrained champagne accents, thin hairline borders, large whitespace, and soft photographic panels. The brand should feel premium and intimate, not promotional or loud.

## Palette
All colors are defined as Tailwind theme tokens.
- `velmora-ink` (#211915): primary deep espresso text and luxury dark backgrounds.
- `velmora-espresso` (#332720): secondary dark surfaces and hover states.
- `velmora-cream` (#F8F1E8): warm page background.
- `velmora-porcelain` (#FFFBF5): elevated cards and form surfaces.
- `velmora-linen` (#E8D8C6): soft dividers and neutral blocks.
- `velmora-gold` (#B8864B): champagne metallic accent for buttons and highlights.
- `velmora-goldDark` (#8F6535): darker accent hover and readable small labels.
- `velmora-mauve` (#8A6F65): muted editorial body copy.
- `velmora-blush` (#D7B9A8): gentle warmth for accent panels.

## Typography
- Headings and product names use `font-serifDisplay` with Cormorant Garamond.
- Body and UI use `font-sans` with Manrope.
- Product names are uppercase with wide letter spacing: `uppercase tracking-[0.28em]`.
- Use relaxed line height for editorial copy and clear readable contrast on every surface.

## Layout and Spacing
- Mobile-first; desktop uses centered max-width containers (`max-w-7xl`) and generous vertical spacing.
- Use thin dividers with `border-velmora-linen` or translucent ivory borders on dark surfaces.
- Prefer large image-led sections, split editorial blocks, and restrained grids.

## Buttons and Interactions
- Primary buttons: `bg-velmora-gold text-velmora-ink`, uppercase, wide tracking, subtle hover to `bg-velmora-goldDark text-velmora-porcelain`.
- Secondary buttons: transparent or porcelain surface with thin accent borders.
- Hover transitions are subtle: small lift, soft shadow, image scale, or opacity changes.

## Do's
- Use warm neutrals and champagne accents consistently.
- Keep copy short, premium, and editorial.
- Make all text explicitly readable on cards, drawers, overlays, and image captions.
- Use stock image attributes for jewelry/editorial imagery instead of hardcoded URLs.

## Don'ts
- Do not use loud sale colors, generic blue UI accents, dense product cards, or heavy shadows.
- Do not show discount-style banners beyond the refined newsletter incentive.
- Do not use low-contrast text on image overlays or neutral surfaces.
