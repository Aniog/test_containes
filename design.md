# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with a warm editorial feel. The storefront should feel premium, calm, and intimate rather than promotional or loud. Use generous whitespace, fine hairline dividers, warm gold accents, and large lifestyle imagery.

## Palette
Use one consistent deep-warm palette that flatters gold jewelry:
- Obsidian espresso base: `velmora-espresso` (`#17110D`) for primary text, dark panels, and high-contrast surfaces.
- Porcelain warm background: `velmora-porcelain` (`#F7F1E8`) for the main page background.
- Champagne surface: `velmora-champagne` (`#E9D8BE`) for soft blocks, cards, and newsletter surfaces.
- Antique gold accent: `velmora-gold` (`#B9853B`) for CTAs, icons, ratings, and refined hover states.
- Deep bronze accent: `velmora-bronze` (`#5D3A1E`) for secondary buttons and understated details.
- Warm mist: `velmora-mist` (`#FBF8F2`) for elevated cards and product panels.
- Rose taupe: `velmora-taupe` (`#8D7463`) for secondary body copy.

Do:
- Pair dark text with porcelain, champagne, and mist surfaces.
- Pair porcelain or mist text with espresso panels.
- Use gold sparingly for calls-to-action and premium accents.

Don't:
- Use bright sale colors, heavy gradients, or saturated generic e-commerce blues.
- Put low-contrast taupe text on champagne without a darker nearby heading.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase, wide tracking, refined and editorial.
- Use large, airy serif headlines with generous line-height.

Example Tailwind classes:
- Hero headline: `font-serif text-5xl md:text-7xl tracking-tight leading-none`
- Product name: `font-serif uppercase tracking-[0.22em] text-sm md:text-base`
- UI text: `font-sans text-sm tracking-[0.12em] uppercase`

## Layout & Spacing
- Mobile-first with spacious vertical rhythm.
- Desktop pages should use balanced multi-column layouts, not mobile stacking.
- Use thin hairline borders: `border border-velmora-espresso/10`.
- Use rounded corners sparingly: large imagery can use `rounded-t-full` or subtle `rounded-3xl`, while premium buttons remain clean.

## Components
- Buttons: solid antique gold with espresso text for primary; outlined espresso/gold for secondary. Add subtle hover transitions.
- Cards: warm mist or transparent surfaces, soft shadows, readable dark text.
- Navigation: transparent over hero at top, then porcelain/espresso text once scrolled.
- Cart drawer: espresso text on mist/porcelain, clear quantity controls, no hidden low-contrast values.

## Imagery
Warm-lit gold jewelry on model, dark velvet, neutral stone, satin, or editorial close-up backgrounds. Use large hero and lifestyle imagery, plus vertical reel-like UGC cards.
