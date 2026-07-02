# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial point of view. The storefront should feel premium, intimate, and calm: generous whitespace, large jewelry imagery, thin hairline borders, refined motion, and restrained metallic accents. Avoid loud sales language, heavy gradients, neon colors, and generic marketplace styling.

## Color Palette
Use a deep espresso base with warm ivory and champagne-gold accents. All custom color values must be defined in Tailwind theme colors and referenced by name.

- `velmora-espresso` (`#201814`): primary dark surface and high-contrast text.
- `velmora-cocoa` (`#3A2B24`): secondary dark surface and hover state.
- `velmora-ivory` (`#F8F2E9`): page background and light foreground.
- `velmora-parchment` (`#EEE4D4`): soft cards, dividers, and muted blocks.
- `velmora-champagne` (`#C79A55`): primary accent for buttons, icons, and fine rules.
- `velmora-softgold` (`#E5C990`): subtle highlight and badge surfaces.
- `velmora-mink` (`#7D6A5D`): muted body text on light surfaces.
- `velmora-blush` (`#D9B8A7`): gentle editorial accent for newsletter and UGC overlays.

## Typography
- Headings and brand marks: elegant serif using Cormorant Garamond, e.g. `font-serif`.
- Body, navigation, buttons, and form UI: clean sans-serif using Manrope, e.g. `font-sans`.
- Product names must be uppercase with wide tracking: `uppercase tracking-[0.22em]`.
- Hero headings should be large and airy with tight line-height.

## Layout and Spacing
- Mobile-first layouts that become multi-column on tablet and desktop.
- Use generous vertical spacing: `py-16 md:py-24 lg:py-32` for major sections.
- Use centered max-width containers: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Use thin dividers: `border-velmora-champagne/20` or `border-velmora-espresso/10`.

## Components
- Buttons: premium, restrained, either solid champagne on espresso or outlined hairline accent. Use uppercase labels, small text, and wider letter spacing.
- Cards: minimal with soft shadows only on hover, no heavy borders. Product cards should prioritize image and product name.
- Inputs: ivory/parchment surfaces, clear dark text, champagne focus ring.
- Drawer/modals: ivory surface with espresso text and readable muted supporting text.

## Imagery
Use the Strikingly stock image tagging system for warm gold jewelry imagery. Favor close-up editorial shots: jewelry on model, earrings on ear, necklaces on skin, warm neutral surfaces, velvet, stone, or linen backgrounds. Do not use hardcoded external image URLs.

## Do's
- Keep text readable with explicit foreground colors on every major surface.
- Use subtle transitions: `transition duration-300 ease-out`.
- Use refined icons and thin strokes.
- Preserve a calm, premium tone.

## Don'ts
- Do not use discount banners, loud sale badges, or bright marketplace colors.
- Do not use low contrast text on image overlays; always add a dark overlay behind text.
- Do not crowd desktop layouts with mobile stacking.
