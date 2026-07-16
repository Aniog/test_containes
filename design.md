# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, softened champagne metallic accents, generous whitespace, refined serif headlines, and clean sans-serif interface text.

## Palette
- `velmora-espresso` (`#211915`): primary dark text, navigation on light surfaces, elevated dark sections.
- `velmora-ink` (`#34261f`): secondary dark copy and cards.
- `velmora-ivory` (`#f8f1e7`): primary page background.
- `velmora-porcelain` (`#fffaf3`): card and input surfaces.
- `velmora-champagne` (`#c79a55`): premium accent, buttons, focus rings, stars, hairline highlights.
- `velmora-bronze` (`#8d6336`): hover states and secondary accent copy.
- `velmora-stone` (`#dacfc0`): borders, dividers, muted surfaces.
- `velmora-muted` (`#75675c`): secondary readable body text.
- `velmora-blush` (`#ead8cb`): warm newsletter and soft blocks.

## Typography
- Headings and product names use `Cormorant Garamond`, with large scale, elegant line-height, and serif letterforms.
- Body and UI use `Inter` for clarity.
- Product names should be uppercase with wide tracking: `uppercase tracking-[0.22em]` or Tailwind letter-spacing extensions where available.

## Layout and spacing
- Use generous vertical rhythm: section padding around `py-16 md:py-24`.
- Use restrained max widths: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Prefer thin borders (`border-velmora-stone`) and soft shadows over heavy outlines.
- Full-bleed editorial imagery should feel warm, intimate, and calm.

## Components
- Primary buttons: champagne background, espresso text, pill shape, subtle hover to bronze/dark.
- Secondary buttons: transparent/outlined champagne or espresso with soft hover fills.
- Product cards: porcelain background, hairline border, image hover transitions, quick add overlay.
- Inputs: porcelain or ivory surface, espresso text, stone border, champagne focus.

## Do
- Keep contrast high and text explicit on every custom surface.
- Use warm editorial imagery and restrained animation.
- Let whitespace and typography communicate premium value.

## Don't
- Do not use loud sale colors, discount badges, generic blue links, or crowded product grids.
- Do not place low-contrast beige text on beige backgrounds.
- Do not introduce unrelated color palettes or arbitrary one-off hex classes in JSX.
