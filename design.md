# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: deep espresso and ink foundations, warm ivory surfaces, muted champagne-gold accents, and generous whitespace. The site should feel premium and calm, never loud, gimmicky, or discount-driven.

## Palette

Use named Tailwind colors from `tailwind.config.js` only. Do not introduce arbitrary hex values in JSX.

- `velmora-ink` (`#15120F`): primary dark surface and high-contrast text.
- `velmora-espresso` (`#2B211B`): warm deep surface for nav/footer/editorial panels.
- `velmora-ivory` (`#FAF7F1`): primary page background.
- `velmora-parchment` (`#EFE7DA`): soft section background and cards.
- `velmora-champagne` (`#C8A765`): restrained metallic accent and primary buttons.
- `velmora-antique` (`#8F6B32`): hover/accent text on light surfaces.
- `velmora-mist` (`#D7CDBF`): hairline dividers and borders.
- `velmora-rose` (`#A87866`): subtle warm secondary accent.

## Typography

- Headings, logo, hero statements, and product names: `font-serif`, Cormorant Garamond.
- Body and UI: `font-sans`, Inter.
- Product names must be uppercase with wide letter spacing, e.g. `uppercase tracking-[0.22em]` when necessary.
- Use elegant scale and breathing room: large hero type on desktop, readable but not cramped on mobile.

## Layout and Surfaces

- Mobile-first with comfortable 20–24px side padding; desktop max width around `max-w-7xl`.
- Prefer editorial grids, large image panels, and thin dividers.
- Use soft shadows sparingly: `shadow-luxury` for premium cards and drawers.
- Use `rounded-none` or gentle rounded corners (`rounded-2xl`, `rounded-3xl`) consistently; avoid playful pill-heavy layouts except variant selectors.

## Buttons and Interactions

- Primary CTA: champagne background with ink text, uppercase sans label, wide tracking, subtle darkening on hover.
- Secondary CTA: transparent/outlined with hairline border and warm hover fill.
- Animations should be smooth and subtle: opacity, transform, hover image crossfade, drawer slide.

## Do

- Keep text clearly readable against every background.
- Use warm jewelry imagery with editorial close-ups and model context.
- Keep the cart drawer and product interactions polished and calm.

## Don't

- Do not use bright sale colors, discount badges, neon gradients, or generic marketplace styling.
- Do not use low-contrast beige text on beige surfaces.
- Do not add arbitrary colors directly in JSX; use named palette tokens.
