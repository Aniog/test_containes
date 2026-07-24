# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial feel. The storefront should feel premium, calm, and tactile, with generous whitespace and restrained metallic accents. Avoid discount-style banners, loud gradients, and generic e-commerce density.

## Palette
Use a single refined warm-neutral direction that flatters gold jewelry:

- Ink: `velmora-ink` (`#17120F`) for primary text and deep surfaces.
- Espresso: `velmora-espresso` (`#2B211C`) for navigation, footer, and elevated dark areas.
- Porcelain: `velmora-porcelain` (`#F7F1EA`) for the main page background.
- Sand: `velmora-sand` (`#E8D9C8`) for soft panels and dividers.
- Champagne: `velmora-champagne` (`#C9A46A`) for CTAs, highlights, icons, and fine borders.
- Pearl: `velmora-pearl` (`#FFFDF9`) for cards and light text surfaces.
- Clay: `velmora-clay` (`#8A604B`) for muted editorial text.

Always pair dark surfaces with pearl or porcelain text. Always pair light surfaces with ink or espresso text. Champagne accents should be used sparingly and never as low-contrast body text on light backgrounds.

## Typography
- Headings, logo, product names, and editorial captions: `font-serif`, using Cormorant Garamond from Google Fonts.
- Body, navigation, buttons, filters, and utility UI: `font-sans`, using Manrope from Google Fonts.
- Product names: uppercase with wide tracking (`uppercase tracking-[0.22em]` or a named utility equivalent).
- Headlines should feel airy and elegant, with relaxed line-height and generous spacing.

## Layout and Spacing
- Mobile-first, with calm single-column sections on small screens and editorial two-column layouts on desktop.
- Use generous section padding: `py-16`, `md:py-24`, `lg:py-28`.
- Use thin hairline dividers with `border-velmora-sand` or translucent champagne on dark areas.
- Product cards should have ample negative space and avoid heavy borders.

## Components
- Buttons: premium solid champagne on dark text for main CTAs; outlined ink/champagne for secondary actions. Use subtle hover transitions.
- Cards: pearl or porcelain backgrounds, soft shadows, thin sand borders, rounded only subtly (`rounded-sm` to `rounded-xl` depending on context).
- Forms: elegant thin borders, clear labels/placeholders, strong focus states using champagne.
- Drawer/overlay: dark translucent overlay with pearl cart panel; all text explicitly readable.

## Imagery
- Use warm-lit gold jewelry images on model, skin, silk, stone, or deep neutral backgrounds.
- Hero and story images should feel editorial and close-up.
- UGC/reel cards should be vertical 9:16 and slightly immersive, with readable caption overlays.

## Do
- Keep nav aligned and restrained.
- Use whitespace, hairline details, and warm metal accents.
- Make all text high contrast and readable.
- Use smooth, subtle animations only.

## Don’t
- Do not use loud sale colors, heavy badges, neon accents, or crowded product grids.
- Do not make buttons look like discount-store promos.
- Do not use low-contrast champagne text for essential copy on porcelain backgrounds.
