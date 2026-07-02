# Velmora Fine Jewelry Design System

Velmora uses a warm editorial quiet-luxury direction: soft pearl surfaces, deep espresso typography, champagne metallic accents, generous whitespace, and restrained hairline borders. The store should feel premium, intimate, and accessible rather than loud or discount-driven.

## Palette
- Page background: warm pearl (`velmora-pearl`, example `bg-velmora-pearl`) for the main site canvas.
- Elevated surfaces: ivory (`velmora-ivory`, example `bg-velmora-ivory`) for cards, drawers, forms, and sections.
- Primary text: espresso (`velmora-espresso`, example `text-velmora-espresso`) for strong readability.
- Secondary text: taupe (`velmora-taupe`, example `text-velmora-taupe`) for captions and supporting copy.
- Accent: champagne gold (`velmora-gold`, example `bg-velmora-gold text-velmora-espresso`) for CTAs, ratings, and subtle highlights.
- Deep contrast: night brown (`velmora-night`, example `bg-velmora-night text-velmora-ivory`) for dramatic panels and footer.
- Hairlines: warm line (`velmora-line`, example `border-velmora-line`) for thin dividers.

## Typography
- Headings and product names use Playfair Display via the `font-serif` utility.
- Body, UI, labels, and navigation use Manrope via the `font-sans` utility.
- Product names should be uppercase with generous tracking, e.g. `uppercase tracking-[0.22em]`.
- Use large serif editorial headings with balanced line-height, not heavy all-caps hero text.

## Layout and spacing
- Use mobile-first layouts and expand to two/four/five columns with `md:` and `lg:` breakpoints.
- Prefer generous vertical spacing: `py-16`, `md:py-24`, `px-5`, `lg:px-10`.
- Use max-width containers for content sections and full-bleed only for the hero and editorial image moments.
- Use thin borders and whitespace over heavy shadows.

## Components
- Buttons: premium pill or squared-pill buttons with champagne fill or espresso outline. Use subtle hover transitions, never bright sale colors.
- Cards: warm ivory backgrounds, hairline borders, soft shadow on hover, readable espresso text.
- Forms: ivory fields with espresso text, explicit borders, clear placeholder contrast using taupe.
- Cart drawer: ivory panel with espresso text and clear quantity controls.

## Do
- Keep imagery warm, close-up, tactile, and jewelry-focused.
- Maintain strong contrast on every text surface.
- Use subtle motion: opacity, translate, and scale transitions under 300ms.
- Keep accents restrained and consistent.

## Don't
- Do not use neon colors, sale badges, discount-red CTAs, or generic marketplace styling.
- Do not use low-contrast beige-on-white text for product information.
- Do not overcrowd mobile layouts.
- Do not introduce arbitrary one-off hex colors in JSX; add named tokens to Tailwind first.
