# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet-luxury editorial look: deep cocoa and ink foundations, warm ivory surfaces, muted blush accents, and brushed-gold details. The site should feel warm, refined, and premium-but-accessible, never loud or discount-oriented.

## Color palette
Use named Tailwind colors defined in `tailwind.config.js`.

- `velmora-ink` (`#161210`): primary text and deep sections.
- `velmora-cocoa` (`#2A211D`): navigation, footer, drawer, and high-contrast panels.
- `velmora-espresso` (`#3A2B25`): secondary deep backgrounds and hover states.
- `velmora-ivory` (`#F8F3EA`): page background and light sections.
- `velmora-pearl` (`#FFFBF3`): card and form surfaces.
- `velmora-oat` (`#E7DBCB`): hairlines, borders, and muted section backgrounds.
- `velmora-taupe` (`#8A7567`): readable supporting text.
- `velmora-gold` (`#B98745`): premium accent, CTAs, icons, stars, focus rings.
- `velmora-champagne` (`#D7B77A`): soft metallic highlight.
- `velmora-rose` (`#D8B8A8`): restrained newsletter or badge accent.

## Typography
- Headings and brand marks: `font-serifDisplay` (Cormorant Garamond), elegant and spacious.
- Body and UI: `font-sans` (Inter), clean and readable.
- Product names: uppercase, `tracking-[0.22em]`, small but readable, serif.

## Layout and spacing
- Use generous whitespace: section padding `py-16 md:py-24`, page gutters `px-5 sm:px-8 lg:px-12`.
- Use max-width containers around `max-w-7xl`.
- Cards should use soft shadows, rounded corners, and thin hairline borders.
- Dividers should be `border-velmora-oat` with restrained opacity.

## Components
- Primary buttons: solid `bg-velmora-gold text-velmora-ink`, rounded-full, uppercase, wide tracking, subtle hover to `bg-velmora-champagne`.
- Secondary buttons: outlined `border-velmora-gold text-velmora-gold` on dark surfaces or `text-velmora-cocoa` on light surfaces.
- Inputs: warm pearl backgrounds, cocoa text, oat borders, gold focus ring.
- Navigation: transparent over hero with ivory text; solid cocoa/ivory after scroll or on inner pages.

## Imagery
Use Strikingly stock image tags for jewelry, model, and lifestyle imagery. Queries should reference nearby static text IDs. Prefer warm-lit gold jewelry, close-up model shots, dark neutral backgrounds, and editorial tabletop compositions.

## Do
- Maintain strong text contrast on every surface.
- Use subtle transitions and gentle hover effects.
- Keep accents minimal and consistent.
- Make mobile layouts feel intentional and spacious.

## Don’t
- Do not use loud sale colors, discount badges, or busy gradients.
- Do not hardcode arbitrary hex colors in JSX class names.
- Do not use generic ecommerce styling or low-contrast muted text.
