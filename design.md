# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial tone. The storefront should feel like a premium direct-to-consumer demi-fine jewelry brand: restrained, tactile, warm, and elegant. Avoid discount styling, loud gradients, heavy borders, or generic marketplace patterns.

## Palette
Use a deep refined base with warm neutral surfaces and muted metallic accents that flatter gold jewelry.

- `velmora-ink` `#16120F`: primary text and deep surfaces.
- `velmora-espresso` `#2B211B`: secondary dark surface, nav and footer depth.
- `velmora-cream` `#F7F1E8`: primary page background.
- `velmora-porcelain` `#FFFaf2`: elevated card surface.
- `velmora-linen` `#E7D8C5`: subtle section surface and hairlines.
- `velmora-champagne` `#C79A5B`: primary metallic accent and CTA background.
- `velmora-antique` `#A8743D`: hover and active accent.
- `velmora-sage` `#7C806E`: muted editorial support tone.
- `velmora-blush` `#E8D2C5`: warm soft accent block.

Use Tailwind names from `tailwind.config.js`, e.g. `bg-velmora-cream`, `text-velmora-ink`, `border-velmora-linen`, `bg-velmora-champagne`.

## Typography
- Headings, logo, editorial callouts, and product names: `font-serifDisplay` using Cormorant Garamond.
- Body, navigation, buttons, forms, captions: `font-sans` using Manrope.
- Product names: uppercase with wide letter spacing, e.g. `uppercase tracking-[0.22em]`.
- Hero headline: large serif, thin weight, generous line-height.

## Spacing and Layout
- Mobile-first with generous whitespace, never crowded.
- Desktop sections should use editorial two-column layouts where appropriate.
- Use thin hairline dividers: `border-velmora-linen` and `border`.
- Content max width: `max-w-7xl mx-auto px-5 sm:px-8 lg:px-12`.
- Product cards should be clean, image-forward, and airy.

## Components
- Buttons: premium, restrained, slightly rounded-none or softly rounded. Primary uses champagne fill with dark text; hover deepens to antique.
- Cards: porcelain or transparent surfaces, thin linen borders, subtle soft shadow on hover.
- Navigation: transparent over hero, transitions to porcelain/cream solid on scroll with hairline bottom border.
- Cart drawer: porcelain panel on dark overlay, readable text, clear quantity controls.
- Inputs: porcelain or cream background, thin linen border, dark text, visible placeholder.

## Imagery
Use warm-lit jewelry photography on model, ear, neck, hand, velvet, marble, or dark neutral backgrounds. Use the Strikingly image tagging attributes with nearby text references. No hardcoded external image URLs.

## Do
- Keep colors consistent sitewide.
- Preserve strong contrast on all surfaces.
- Use soft transitions and slight scale/opacity changes.
- Let jewelry imagery and serif typography create luxury.

## Don’t
- Do not use bright sale colors, discount badges, loud banners, neon accents, or heavy drop shadows.
- Do not crowd mobile layouts.
- Do not use low-contrast text on warm neutral backgrounds.
