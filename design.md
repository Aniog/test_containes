# Velmora Fine Jewelry Design System

## Direction
Quiet luxury for a premium-but-accessible demi-fine jewelry storefront. The site should feel warm, editorial, refined, and calm. Avoid discount styling, loud colors, heavy gradients, or generic marketplace patterns.

## Palette
Use one consistent deep espresso and warm ivory direction that flatters gold jewelry.

- Base background: `velmora-ivory` (`#F7F1E8`) for warm editorial surfaces.
- Deep contrast: `velmora-espresso` (`#211814`) for text, nav, dark hero overlays, and premium panels.
- Secondary neutral: `velmora-taupe` (`#B9A99A`) for fine dividers, muted UI, and subtle borders.
- Soft surface: `velmora-champagne` (`#EFE2CF`) for trust bars, cards, and accent blocks.
- Metallic accent: `velmora-gold` (`#B98A45`) for CTAs, icon highlights, ratings, and small details.
- Dark accent: `velmora-bronze` (`#6E4B2E`) for hover states and grounded labels.
- Light text: `velmora-pearl` (`#FFFDF8`) on dark panels.

## Typography
- Headings and product names: Playfair Display, elegant serif.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide letter spacing, restrained size.
- Use generous line height and avoid crowded text.

Example Tailwind classes:
- Main heading: `font-serif text-5xl md:text-7xl leading-tight tracking-tight`.
- Section eyebrow: `text-xs uppercase tracking-[0.28em] text-velmora-gold`.
- Product name: `font-serif uppercase tracking-[0.22em] text-sm text-velmora-espresso`.
- Body copy: `font-sans text-sm md:text-base leading-7 text-velmora-espresso/75`.

## Layout and spacing
- Mobile-first, with large breathing room on desktop.
- Use thin hairline dividers: `border-velmora-taupe/30`.
- Cards should be editorial, not boxed-in marketplace tiles.
- Prefer soft shadows only on interactive overlays or cart drawer.

## Components
- Primary button: gold background with pearl text, uppercase tracking, subtle bronze hover.
- Secondary button: transparent with espresso or pearl border depending on surface.
- Inputs: ivory or pearl surfaces, thin taupe border, visible focus ring in gold.
- Cart drawer: pearl/ivory surface, espresso text, clear quantity controls.

## Do
- Use warm gold imagery and dramatic whitespace.
- Keep contrast high and text readable on every surface.
- Use subtle transitions: opacity, translate, scale under 105%.
- Keep accent color restrained.

## Don't
- Do not use neon colors, bright sale badges, fake discount banners, or crowded grid styling.
- Do not use black-on-dark or pale-text-on-ivory combinations.
- Do not hardcode arbitrary color values in JSX; use Tailwind theme tokens.
