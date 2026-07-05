# Velmora Fine Jewelry Design System

## Brand direction
Velmora uses a quiet-luxury editorial direction: warm, intimate, polished, and restrained. The store should feel premium and calm, never loud, overly promotional, or generic.

## Palette
Use one cohesive dark editorial palette that flatters gold jewelry.

- Ink: deep refined base for hero/nav/footer surfaces. Tailwind: `velmora-ink`.
- Espresso: warm dark secondary surface. Tailwind: `velmora-espresso`.
- Cream: warm page background and light cards. Tailwind: `velmora-cream`.
- Pearl: soft neutral panel surface. Tailwind: `velmora-pearl`.
- Champagne: muted metallic accent for premium CTAs and dividers. Tailwind: `velmora-champagne`.
- Antique: deeper gold accent for hover and small details. Tailwind: `velmora-antique`.
- Cocoa: readable body text on light surfaces. Tailwind: `velmora-cocoa`.
- Mist: subtle borders and muted fills. Tailwind: `velmora-mist`.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, high contrast, generous line-height.
- Body and UI: Manrope, clean sans-serif.
- Product names are uppercase with wide letter spacing: `uppercase tracking-[0.24em]` or the closest responsive Tailwind value.

## Layout and spacing
- Mobile-first, with generous whitespace and editorial section spacing.
- Use wide containers on desktop with balanced grids, not cramped product cards.
- Prefer thin hairline borders (`border-velmora-mist` or `border-white/15`) and soft shadows.

## Components
- Buttons should feel premium: solid champagne on dark, or hairline outline on light.
- Hover effects should be subtle: slight image scale, soft opacity changes, and smooth color transitions.
- Cards should avoid heavy outlines and loud badges. Use calm labels and restrained accents.

## Do
- Keep strong text contrast on every surface.
- Use warm gold imagery, editorial closeups, and model-worn jewelry moments.
- Maintain consistent serif/sans pairing across pages.

## Don't
- Do not use discount colors, bright sale badges, neon accents, or crowded layouts.
- Do not place important text on imagery without a dark overlay.
- Do not introduce arbitrary hex colors in JSX class strings; use the named Tailwind palette.
