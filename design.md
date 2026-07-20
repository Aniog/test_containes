# Velmora Fine Jewelry Design System

## Direction
Quiet luxury for demi-fine gold jewelry: warm editorial, refined, spacious, and premium-but-accessible. The design should feel like a boutique jewelry journal rather than a discount storefront.

## Palette
Use one consistent warm neutral direction with a deep refined base and soft champagne surfaces.

- Ink: deep espresso-black for primary text and dark surfaces. Tailwind example: `text-velmora-ink`, `bg-velmora-ink`.
- Cocoa: softened deep brown for secondary dark sections and borders. Tailwind example: `bg-velmora-cocoa`, `border-velmora-cocoa/20`.
- Cream: warm main page background. Tailwind example: `bg-velmora-cream`.
- Porcelain: elevated card background. Tailwind example: `bg-velmora-porcelain`.
- Champagne: metallic accent for premium CTAs, rules, icons, and small labels. Tailwind example: `bg-velmora-champagne`, `text-velmora-champagne`.
- Blush: soft editorial accent block. Tailwind example: `bg-velmora-blush`.
- Sage: subtle muted supporting accent. Tailwind example: `bg-velmora-sage`.

Always pair dark surfaces with cream or porcelain text. Never use low-contrast champagne text on cream for body copy; use it only for large labels, icons, borders, or dark surfaces.

## Typography
- Headings and product names: elegant serif, Cormorant Garamond. Use generous line-height and refined tracking.
- Body and UI: Manrope. Keep labels uppercase with wide letter-spacing.
- Product names are uppercase with wide letter-spacing.

## Layout and Spacing
- Mobile-first, then expand to editorial two-column or multi-column desktop layouts.
- Use generous whitespace: `py-16`, `md:py-24`, `px-5`, `sm:px-8`, `lg:px-12`.
- Use thin hairline dividers: `border-t border-velmora-ink/10` or `border-velmora-champagne/30`.
- Cards should use soft shadows and restrained borders.

## Components
- Buttons: solid dark ink or champagne accents; outlined variants should use thin borders and subtle hover fills.
- Product cards: editorial image-first, clean metadata, quick add appears on hover/focus on desktop and remains accessible on mobile.
- Navigation: transparent over hero, solid cream on scroll, clear contrast in both states.
- Cart drawer: dark overlay, porcelain panel, clear item controls and readable text.

## Do
- Use stock image tags for jewelry/editorial images with nearby text references.
- Use subtle transitions: `transition`, `duration-300`, `ease-out`.
- Keep imagery warm, gold, close-up, model/editorial.
- Keep text readable with explicit foreground colors on every custom surface.

## Do Not
- Do not use bright sale colors, discount badges, neon accents, or generic marketplace styling.
- Do not overcrowd product cards.
- Do not hardcode random hex colors in component classes; use Tailwind theme tokens.
