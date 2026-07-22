# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, refined espresso text, burnished champagne accents, and soft shadowing that flatters gold jewelry. The experience should feel premium and calm, never loud, discount-driven, or generic.

## Palette
- Base background: warm ivory (`velmora-ivory`, example `bg-velmora-ivory`)
- Editorial section background: porcelain (`velmora-porcelain`, example `bg-velmora-porcelain`)
- Primary text/deep surfaces: espresso (`velmora-espresso`, example `text-velmora-espresso`, `bg-velmora-espresso`)
- Secondary text: taupe (`velmora-taupe`, example `text-velmora-taupe`)
- Hairlines: mist (`velmora-mist`, example `border-velmora-mist`)
- Metallic accent: champagne (`velmora-champagne`, example `bg-velmora-champagne`, `text-velmora-champagne`)
- Soft accent surface: blush (`velmora-blush`, example `bg-velmora-blush`)

## Typography
- Headings and product names use Cormorant Garamond, elegant and editorial (`font-serif`).
- Body and UI use Manrope, clean and contemporary (`font-sans`).
- Product names are uppercase with wide tracking (`uppercase tracking-[0.22em]` only where a product label needs the brand treatment).

## Layout and spacing
- Use generous whitespace: section padding `py-16 md:py-24`, content width `max-w-7xl mx-auto px-5 sm:px-8`.
- Use thin hairline dividers (`border-velmora-mist`) and restrained shadows.
- Desktop layouts should be editorial and spacious; mobile layouts should stack cleanly without crowding.

## Components
- Buttons: solid espresso or champagne with refined letter spacing and soft hover transitions.
- Cards: warm surfaces, subtle border, soft shadow on hover, no heavy outlines.
- Navigation: transparent over hero, solid ivory after scroll, readable in both states.
- Imagery: warm gold jewelry, model close-ups, neutral/dark editorial backgrounds.

## Do's
- Keep contrast strong and text explicit on every surface.
- Use soft transitions (`duration-300`, `ease-out`) and subtle scale/opacity changes.
- Let gold accents appear intentional and sparse.

## Don'ts
- Do not use bright sale colors, heavy badges, loud gradients, or dense discount-style layouts.
- Do not place low-contrast taupe text on dark surfaces.
- Do not hardcode arbitrary hex colors in component class strings; use named Tailwind colors.
