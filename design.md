# Velmora Fine Jewelry Visual System

## Direction
Velmora uses a quiet-luxury editorial look: warm ivory surfaces, deep espresso contrast, restrained champagne-gold accents, large jewelry imagery, generous whitespace, and thin hairline dividers. The experience should feel premium and calm, never promotional or loud.

## Palette
- Canvas: warm ivory (`velmora-ivory`, example `bg-velmora-ivory`)
- Soft surface: porcelain blush (`velmora-blush`, example `bg-velmora-blush`)
- Elevated surface: pearl (`velmora-pearl`, example `bg-velmora-pearl`)
- Primary text/base: deep espresso (`velmora-espresso`, example `text-velmora-espresso`)
- Secondary text: taupe (`velmora-taupe`, example `text-velmora-taupe`)
- Accent: champagne gold (`velmora-gold`, example `bg-velmora-gold`)
- Dark editorial section: obsidian brown (`velmora-noir`, example `bg-velmora-noir`)

Use semantic pairings with strong contrast: espresso text on ivory/pearl, ivory text on noir, espresso text on gold buttons. Avoid pale gold text on light backgrounds.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast.
- Body and UI: Manrope, clean sans-serif.
- Product names: uppercase with wide letter spacing, never casual casing.
- Use restrained type scale and generous line-height for editorial calm.

## Layout and Spacing
- Mobile-first with comfortable padding; expand to multi-column editorial layouts from medium screens upward.
- Use generous vertical spacing and whitespace.
- Use thin hairline borders in muted champagne/taupe tones.
- Prefer balanced grids and image-led sections.

## Components
- Buttons: premium solid champagne-gold or outlined espresso/noir, rounded-full, subtle hover lift.
- Cards: soft pearl/ivory surfaces, fine borders, subdued shadows only on hover.
- Navigation: transparent over hero, solid ivory with blur after scrolling.
- Product cards: image-forward, elegant hover image transition, quick add overlay.
- Cart drawer: pearl surface, readable espresso text, clear quantity controls.

## Do
- Keep gold jewelry imagery warm, tactile, and editorial.
- Use subtle transitions and opacity shifts.
- Make all visible text explicitly readable.
- Keep accent usage restrained.

## Don’t
- Do not use discount colors, bright sale badges, neon accents, heavy shadows, chunky borders, or generic marketplace styling.
- Do not hardcode arbitrary hex colors in JSX class strings; use Tailwind theme tokens.
