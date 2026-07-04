# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial look: warm ivory surfaces, deep espresso contrast, refined champagne-gold accents, generous whitespace, thin hairline dividers, and soft shadows. The store should feel premium and calm, never loud, discounted, or generic.

## Color palette
Use named Tailwind colors only.
- `velmora-ivory` (`#F7F0E6`): primary page background.
- `velmora-porcelain` (`#FFFBF5`): cards, drawer, inputs, and elevated surfaces.
- `velmora-espresso` (`#211A16`): primary text and dark editorial sections.
- `velmora-cocoa` (`#4B372C`): secondary dark text and outlines.
- `velmora-taupe` (`#8E7B6C`): muted text.
- `velmora-champagne` (`#C9A46A`): primary metallic accent and solid buttons.
- `velmora-antique` (`#8C6A3D`): darker hover accent.
- `velmora-blush` (`#EAD8C8`): soft accent blocks.

## Typography
- Headings and product names: `font-serifDisplay` using Cormorant Garamond. Use elegant line-height and refined tracking.
- Body and UI: `font-sans` using Manrope. Keep labels crisp and readable.
- Product names should be uppercase with wide tracking: `uppercase tracking-[0.22em]` or the configured tracking value.

## Layout and spacing
- Mobile-first with roomy stacking, then multi-column editorial layouts on `md` and `lg`.
- Prefer `px-5 sm:px-6 lg:px-10` section padding and large vertical rhythm such as `py-16 md:py-24`.
- Use thin dividers: `border-velmora-cocoa/10`.

## Components
- Buttons: solid champagne on espresso text for primary CTAs; outlined espresso/cocoa for secondary CTAs. Rounded-full, refined letter spacing, smooth hover transitions.
- Cards: porcelain or transparent editorial cards with soft shadows and hairline borders.
- Product cards: large imagery, uppercase product name, serif type, quick add revealed on hover/focus.
- Drawers/modals: porcelain background, espresso text, explicit foreground colors for every readable area.

## Imagery
Use warm, editorial jewelry imagery: gold jewelry on skin, warm neutrals, close-up details, gift-box scenes, ear and neck styling. Use the stock image data attributes rather than hardcoded external URLs.

## Do not
- Do not use bright sale colors, discount badges, neon accents, or generic marketplace styling.
- Do not use low-contrast muted text on light surfaces.
- Do not hardcode arbitrary hex colors in JSX class strings; add named colors to Tailwind config if needed.
