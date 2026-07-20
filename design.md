# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso text, soft champagne metallic accents, and generous negative space. The design should feel premium, calm, and direct-to-consumer without looking promotional or generic.

## Color palette

Add these colors as named Tailwind tokens and use them consistently:

- `velmora-ivory` — `#F7F1E8`: primary page background.
- `velmora-cream` — `#FFF9F0`: elevated cards, drawers, and form surfaces.
- `velmora-ink` — `#241913`: main readable text on light surfaces.
- `velmora-espresso` — `#3A251B`: deep refined base for footer and dark panels.
- `velmora-umber` — `#6F4E37`: secondary text and restrained UI details.
- `velmora-champagne` — `#C8A46A`: metallic accent for buttons, links, icons, and star ratings.
- `velmora-gold` — `#A77A3D`: hover accent and strong dividers.
- `velmora-blush` — `#E8D9CC`: soft editorial blocks and borders.

## Typography

- Headings, logo, hero statements, and editorial captions: elegant serif using `Cormorant Garamond`.
- Body, product metadata, navigation, buttons, and form UI: clean sans using `Manrope`.
- Product names: serif, uppercase, wide letter spacing, no heavy weights.
- Prefer large line-height and balanced text widths for an editorial feel.

Example Tailwind classes:
- Page text: `font-sans text-velmora-ink bg-velmora-ivory`.
- Serif headings: `font-serif text-5xl md:text-7xl leading-none tracking-tight`.
- Product names: `font-serif uppercase tracking-[0.22em]` is acceptable only for product-name letter spacing; otherwise use built-in tracking classes.

## Layout and spacing

- Use mobile-first layouts, then widen with `md:` and `lg:` breakpoints.
- Use generous section padding: `py-16 md:py-24`.
- Use thin hairline dividers: `border-velmora-blush`.
- Product grids should breathe: `gap-6 lg:gap-8`.
- Avoid cramped desktop layouts; keep editorial image blocks large.

## Components

- Buttons should feel premium: solid champagne with ink text or thin outlined buttons with champagne border.
- Cards should use subtle shadows and warm cream surfaces.
- Navigation becomes solid ivory on scroll; over hero it may be transparent but must keep text readable.
- Hover states should be subtle: opacity, small translate, image scale, and color shift.

## Do

- Use warm gold jewelry imagery on skin, dark espresso, ivory, or neutral editorial backgrounds.
- Explicitly set readable text color on every custom background.
- Keep labels, prices, ratings, empty states, and badges high-contrast.
- Use restrained accents and quiet animation.

## Don't

- Do not use discount-style bright colors, loud badges, or generic marketplace layouts.
- Do not use low-contrast beige text on ivory backgrounds for important data.
- Do not introduce unrelated color palettes or arbitrary one-off hex values in class names.
