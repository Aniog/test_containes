# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, a refined espresso base, muted champagne metallic accents, and restrained contrast. The site should feel calm, premium, and tactile rather than promotional or loud.

## Palette

Use these Tailwind color tokens only for brand colors:
- `velmora-ivory` `#F7F1E8` — main page background, soft editorial surfaces.
- `velmora-porcelain` `#FFFBF5` — cards, inputs, elevated neutral panels.
- `velmora-espresso` `#241711` — primary text and dark sections.
- `velmora-cacao` `#4A3329` — secondary text, warm borders on light surfaces.
- `velmora-bronze` `#B58A54` — premium accent, CTA fills, icon highlights.
- `velmora-champagne` `#E7D2B2` — subtle dividers and pale accent surfaces.
- `velmora-sage` `#77715F` — muted supporting copy and editorial notes.
- `velmora-rose` `#C9A39A` — occasional soft highlight only.

## Typography

- Headings and logo: `font-serif` with Cormorant Garamond. Use airy line-height and generous tracking when appropriate.
- Body and UI: `font-sans` with Manrope. Keep labels concise and readable.
- Product names: uppercase with wide letter spacing, e.g. `uppercase tracking-[0.22em]` when a design needs emphasis.

## Layout & Spacing

- Mobile-first, generous whitespace, editorial section rhythm.
- Use max-width containers (`max-w-7xl`) with comfortable horizontal padding (`px-5 md:px-8`).
- Prefer thin borders (`border-velmora-champagne`) and soft shadows over heavy boxes.
- Desktop should use multi-column editorial layouts where appropriate; mobile should stack gracefully.

## Components

- Buttons: premium solid bronze with ivory text, or outlined espresso/bronze with subtle hover fill.
- Cards: porcelain or transparent surfaces with fine borders; image-driven product cards should feel gallery-like.
- Navigation: transparent over hero, solid ivory after scroll. Text must remain readable in both states.
- Cart drawer: porcelain surface, espresso text, clear quantities and totals.

## Do's

- Use restrained motion: fade, slight lift, subtle image zoom.
- Use warm gold jewelry imagery through the stock-image tagging system.
- Keep all text explicitly readable against its background.

## Don'ts

- Do not use discount-style banners, loud reds, neon colors, heavy gradients, or generic marketplace styling.
- Do not place low-contrast sage/champagne text on pale backgrounds for important content.
- Do not use hardcoded image URLs; use `data-strk-img` / `data-strk-bg` attributes.
