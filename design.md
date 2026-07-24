# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with a warm editorial point of view. The storefront should feel like a premium demi-fine jewelry atelier: restrained, spacious, refined, and never promotional or loud.

## Palette
- Ink base: `velmora-ink` / `#17130F` for primary text and dark editorial surfaces.
- Espresso: `velmora-espresso` / `#2A2018` for secondary dark sections.
- Ivory: `velmora-ivory` / `#F8F2E9` for page backgrounds.
- Porcelain: `velmora-porcelain` / `#FFFDF8` for cards and form surfaces.
- Sand: `velmora-sand` / `#E8D9C5` for subtle fills and borders.
- Champagne: `velmora-champagne` / `#C49A5A` for premium accents and CTA fills.
- Antique gold: `velmora-gold` / `#9D7441` for hover states and fine details.
- Muted taupe: `velmora-taupe` / `#766A5D` for supporting copy.

Use high contrast: dark text on ivory/porcelain, ivory text on dark editorial panels, champagne accents only where readable.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, generous line-height.
- UI and body: Manrope, clean sans-serif.
- Product names: uppercase, wide tracking, serif, refined size scale.

Example Tailwind classes:
- Hero heading: `font-serif text-5xl md:text-7xl leading-none tracking-tight`
- Section eyebrow: `font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold`
- Product name: `font-serif uppercase tracking-[0.22em] text-velmora-ink`

## Layout
- Mobile-first with generous spacing; desktop uses editorial two-column and multi-column layouts.
- Use thin hairline borders: `border-velmora-sand/70`.
- Cards should feel airy with soft shadows and slow hover transitions.
- Avoid dense grids, bright sale badges, aggressive discount styling, or generic e-commerce colors.

## Components
- Buttons: solid champagne with dark text or outlined ink/champagne. Use pill or softly squared shapes with letter-spaced uppercase labels.
- Navigation: transparent over hero, solid ivory on scroll.
- Forms: porcelain backgrounds, fine borders, clear dark text and placeholders.
- Product imagery: warm gold jewelry on model, editorial neutral/dark backgrounds via Strikingly image tags.

## Do's
- Keep whitespace generous.
- Pair imagery with editorial serif copy.
- Use subtle transitions and thin dividers.
- Keep every label, value, and status readable.

## Don'ts
- No loud sale colors, neon accents, generic blue links, or low-contrast taupe on sand.
- No arbitrary hex classes in JSX; use Tailwind theme names from `tailwind.config.js`.
- No hardcoded external image URLs; use Strikingly stock image attributes.
