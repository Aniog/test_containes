# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with a warm editorial point of view. The storefront should feel calm, premium, and intimate: deep espresso surfaces, antique-gold accents, pearl neutrals, thin hairline dividers, and soft warm imagery. Avoid discount language, loud colors, heavy badges, or generic marketplace patterns.

## Palette
- `velmora-espresso` (`#201815`): primary dark editorial base for hero, footer, cart drawer, and premium surfaces.
- `velmora-ink` (`#2D2622`): main readable text on light surfaces.
- `velmora-cream` (`#F8F3EA`): page background and quiet neutral areas.
- `velmora-pearl` (`#FFFDF8`): card and form surface.
- `velmora-champagne` (`#C7A56B`): restrained metallic accent for buttons, icons, rules, and highlights.
- `velmora-bronze` (`#8B6838`): darker accent for hover states and readable gold text on light surfaces.
- `velmora-mist` (`#E6DCCB`): hairline borders and soft dividers.
- `velmora-blush` (`#EEE1D6`): warm editorial panels.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, generous line-height.
- Body and UI: `Manrope`, clean sans-serif.
- Product names must be uppercase with wide tracking (`uppercase tracking-[0.22em]` or `tracking-[0.18em]`).

## Layout & Spacing
- Mobile-first with generous breathing room. Use `px-5`, `py-14` on mobile and scale to `lg:px-12`, `lg:py-24`.
- Desktop sections should use strong editorial composition, not single-column mobile stacking.
- Use max-width containers (`max-w-7xl mx-auto`) except full-bleed hero and UGC strip.
- Use thin dividers (`border-velmora-mist/70`) and restrained shadows.

## Components
- Buttons: premium solid champagne on dark or espresso on light. Use uppercase labels, letter spacing, and soft hover transitions.
- Cards: pearl/cream surfaces with explicit `text-velmora-ink`; hover image transitions should be subtle.
- Forms: cream/pearl fields with visible dark text and mist borders.
- Cart drawer: espresso surface with cream text and clear champagne actions.

## Do
- Keep color contrast strong on every surface.
- Use warm image treatments and editorial cropping.
- Use subtle animation: opacity, translate, and scale only.
- Keep CTAs confident and minimal.

## Don't
- Do not use bright sale colors, neon accents, or loud gradients.
- Do not create low-contrast gold text on cream backgrounds without using the darker bronze tone.
- Do not use hardcoded image URLs; use the Strikingly image attributes.
