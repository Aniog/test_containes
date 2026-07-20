# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial mood. The storefront should feel like an intimate jewelry atelier: refined, calm, tactile, and premium-but-accessible. Avoid loud discount styling, bright sale colors, bulky UI, or generic marketplace patterns.

## Palette
Use one consistent soft neutral direction that flatters gold jewelry:
- `velmora-ivory` (`#F7F1E8`): page background and elevated warm surfaces.
- `velmora-cream` (`#FBF8F3`): cards, forms, and calm content blocks.
- `velmora-ink` (`#1F1A17`): primary text for strong accessibility.
- `velmora-cocoa` (`#5B4638`): secondary body text.
- `velmora-bronze` (`#B9824A`): restrained metallic accent for CTAs, links, and key details.
- `velmora-champagne` (`#E7D1B1`): hairline borders, soft badges, and dividers.
- `velmora-forest` (`#28362F`): deep editorial surfaces and footer/nav states.

Use explicit foreground colors on every custom surface. Do not place pale text on pale backgrounds or dark text on deep backgrounds without a matching contrast color.

## Typography
- Headings and logo: elegant serif, `Cormorant Garamond`, with generous line-height and refined tracking.
- Product names: uppercase serif with wide letter spacing.
- Body/UI: clean sans-serif, `Manrope`.

Example Tailwind classes:
- Hero headline: `font-serif text-5xl md:text-7xl leading-none tracking-tight`.
- Section heading: `font-serif text-4xl md:text-5xl`.
- Product name: `font-serif uppercase tracking-[0.18em] text-sm`.
- UI labels: `font-sans uppercase tracking-[0.22em] text-xs`.

## Layout & Spacing
- Mobile-first, with generous vertical rhythm.
- Use full-bleed editorial imagery in hero and wide sections.
- Desktop should use balanced multi-column layouts, never mobile stacking at large widths.
- Prefer `px-5 md:px-8 lg:px-12` and `py-16 md:py-24` for sections.
- Use thin hairline dividers: `border-velmora-champagne/70`.

## Components
- Buttons: premium solid bronze or outlined bronze/ink, no loud shadows. Use subtle hover transitions and gentle lift.
- Cards: warm cream surfaces, thin champagne borders, soft shadows only on hover.
- Navigation: transparent over hero, solid ivory/cream after scroll with readable text.
- Cart drawer: calm cream panel with deep ink text and clear quantity controls.

## Imagery
Use warm gold jewelry imagery, model close-ups, dark/neutral editorial backgrounds, soft natural light, and macro details. Use Strikingly stock image tags with nearby text references rather than hardcoded image URLs.

## Motion
Subtle only: opacity, translate, and scale transitions under 300ms. Avoid flashy animations.

## Do
- Maintain quiet luxury and clear contrast.
- Use serif headings and restrained metallic accents.
- Keep whitespace generous.
- Make mobile shopping interactions easy.

## Don’t
- Do not use discount/sale visual language.
- Do not mix palettes or introduce random hex colors in class names.
- Do not overcrowd product cards.
- Do not make important text rely on inherited colors.