# Velmora Fine Jewelry Design System

## Direction
Velmora uses a quiet-luxury editorial identity: warm ivory surfaces, deep espresso contrast, muted clay neutrals, and restrained antique-gold accents. The design should feel premium and intimate rather than promotional or busy.

## Typography
- Headings and editorial statements: Cormorant Garamond, elegant serif, generous line-height.
- Body, navigation, forms, and UI: Manrope, clean sans-serif.
- Product names: uppercase with wide letter spacing.

## Color Palette
Use named Tailwind colors from `tailwind.config.js` only.
- `velmora-ivory` for main page backgrounds.
- `velmora-pearl` and `velmora-linen` for soft panels and product cards.
- `velmora-ink` for primary text on light surfaces.
- `velmora-espresso` for deep luxury surfaces and solid buttons.
- `velmora-brass` for metallic accents, focus states, stars, and small highlights.
- `velmora-clay` and `velmora-mauve` for muted editorial sections.

## Layout & Spacing
- Mobile-first with generous whitespace and simple stacking.
- Desktop should use editorial multi-column layouts, not mobile-style stacking.
- Use thin hairline borders in `velmora-hairline` and large image areas.
- Keep content max-widths calm and readable with `max-w-7xl`.

## Components
- Buttons: solid espresso with ivory text, or outlined espresso/brass for secondary actions.
- Cards: soft pearl or linen backgrounds with subtle border and shadow.
- Product cards: large image ratio, uppercase product names, restrained quick-add hover.
- Navigation: transparent over hero, solid ivory after scrolling.
- Cart drawer: ivory panel with clear dark text and visible quantity controls.

## Do's
- Use warm gold-friendly imagery and soft shadows.
- Keep typography refined and high contrast.
- Use subtle transitions: opacity, translate, border, and background changes.
- Let white space and product photography create the luxury mood.

## Don'ts
- Do not use bright sale colors, discount badges, loud gradients, or generic blue UI.
- Do not use low-contrast muted text for important product or cart information.
- Do not hardcode arbitrary hex colors in JSX class strings; add named tokens instead.
