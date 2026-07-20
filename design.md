# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with an editorial jewelry-house feel: warm light, deep espresso contrast, soft parchment surfaces, restrained metallic accents, and generous whitespace. The store should feel premium and calm, never loud, sale-heavy, or generic.

## Palette
Use one cohesive warm-neutral palette:
- `velmora-espresso` (`#211915`): primary dark base for hero, footer, overlays, and high-contrast text on light surfaces.
- `velmora-ink` (`#342820`): secondary dark text and card accents.
- `velmora-parchment` (`#F7F0E7`): main page background.
- `velmora-ivory` (`#FFFBF5`): elevated card/input surfaces.
- `velmora-linen` (`#E9DCCB`): borders, dividers, soft section backgrounds.
- `velmora-champagne` (`#C9A46A`): refined metallic accent for CTAs, stars, links, and focus states.
- `velmora-rose` (`#B98972`): muted secondary warmth for small badges and editorial details.

## Typography
- Headings and logo: elegant serif using `Cormorant Garamond`, with high contrast, large sizes, and relaxed line-height.
- Body and UI: `Manrope`, clean and modern.
- Product names: serif, uppercase, wide letter spacing (`tracking-[0.22em]` or `tracking-widest`).

## Components
- Buttons: premium, simple shapes, rounded-full, fine borders. Primary uses champagne fill with espresso text; secondary uses transparent/ivory with hairline borders.
- Cards: ivory surfaces, soft shadows, thin linen borders, ample padding.
- Dividers: hairline linen or champagne/30. Avoid heavy rules.
- Navigation: transparent over hero, solid ivory/parchment with blur on scroll.
- Product imagery: large editorial crops, warm gold jewelry, neutral/dark backgrounds. Use stock image tags, no hardcoded image URLs.

## Spacing and Motion
- Use generous vertical spacing (`py-16`, `py-20`, `lg:py-28`) and comfortable card gaps.
- Subtle transitions only: opacity, transform, colors, shadows (`duration-300/500`).
- Hover states should reveal details without aggressive motion.

## Do's
- Keep text highly readable on every background.
- Use restrained metallic accents and warm shadows.
- Preserve premium editorial whitespace.
- Prioritize mobile-first layouts with clean stacked sections.

## Don'ts
- Do not use discount red, neon colors, heavy gradients, loud badges, or cluttered promotional blocks.
- Do not use low-contrast beige-on-beige text.
- Do not hardcode arbitrary colors outside the Tailwind theme.
