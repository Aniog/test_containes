# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, restrained champagne-gold accents, large lifestyle imagery, thin hairline dividers, soft shadows, and generous whitespace. The site should feel premium and intimate, never loud, sale-heavy, or generic.

## Palette
- Foundation: warm ivory (`velmora-ivory`, e.g. `bg-velmora-ivory`) for the main page background.
- Elevated surfaces: porcelain and warm stone (`velmora-porcelain`, `velmora-stone`) for cards and editorial blocks.
- Deep contrast: refined espresso (`velmora-espresso`) for primary text, nav, footer, and strong buttons.
- Accent: champagne gold (`velmora-gold`) and muted antique gold (`velmora-antique`) for CTAs, borders, icons, and fine details.
- Soft text: taupe (`velmora-taupe`) for secondary copy only where contrast remains readable.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast, editorial scale.
- Body and UI: Inter, clean sans-serif, restrained letter spacing.
- Product names: uppercase with wide tracking (`uppercase tracking-[0.22em]` or theme letter spacing), never casual casing.

## Layout and Spacing
- Use generous section padding (`py-16`, `md:py-24`, `lg:py-28`) and centered max-width containers.
- Prefer airy grids with visible breathing room (`gap-5`, `md:gap-8`, `lg:gap-10`).
- Use thin hairline dividers (`border-velmora-line`) instead of heavy borders.
- Desktop should use editorial multi-column layouts; mobile should stack cleanly.

## Components
- Buttons: premium solid espresso or champagne-gold with smooth transitions; outlined buttons should use thin borders.
- Cards: soft porcelain surfaces, subtle shadows, rounded only slightly (`rounded-sm` to `rounded-2xl` depending on imagery).
- Imagery: warm gold jewelry on model, dark velvet, neutral stone, and gift-ready editorial settings. Use large crops and vertical reel cards where appropriate.
- Cart drawer and overlays: porcelain panels with espresso text and clear contrast.

## Do's
- Keep contrast strong and text clearly readable.
- Use restrained gold accents and whitespace to signal luxury.
- Use smooth hover states (`transition duration-300`) and subtle scale/opacity changes.

## Don'ts
- Do not use bright sale colors, loud gradients, neon tones, or discount badges.
- Do not crowd product grids or use heavy boxed e-commerce styling.
- Do not place low-contrast taupe text on dark surfaces.
