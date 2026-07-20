# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: deep espresso and warm ivory surfaces with restrained champagne-gold accents. The design should feel premium, calm, tactile, and warm rather than loud or discount-oriented.

## Palette
- Deep base: `velmora-ink` (`#18110d`) for primary text and dark editorial sections.
- Rich dark surface: `velmora-espresso` (`#241812`) for nav, footer, drawers, and dramatic panels.
- Page background: `velmora-ivory` (`#f8f1e7`) for warm editorial whitespace.
- Card surface: `velmora-pearl` (`#fffaf3`) for product cards and form areas.
- Soft neutral: `velmora-sand` (`#dccab4`) for dividers and secondary borders.
- Metallic accent: `velmora-gold` (`#c9a15b`) for primary buttons, highlights, and rating stars.
- Dark accent: `velmora-bronze` (`#7b5a33`) for secondary text and outlined controls.
- Soft blush: `velmora-blush` (`#ead8cc`) for newsletter and editorial blocks.

## Typography
- Headings and product names use Cormorant Garamond: elegant, high contrast, refined.
- Body and UI use Inter: clean, readable, modern.
- Product names are uppercase with wide letter spacing using classes like `font-serif uppercase tracking-[0.18em]`.

## Layout and spacing
- Use generous vertical spacing: `py-16`, `py-20`, `lg:py-28`.
- Keep maximum content width around `max-w-7xl` with responsive padding `px-4 sm:px-6 lg:px-8`.
- Use thin hairline borders in `border-velmora-sand/60`.
- Maintain editorial asymmetry with large imagery and calm negative space.

## Components
- Primary buttons: solid `bg-velmora-gold text-velmora-ink`, rounded-full, uppercase tracking, subtle hover lift.
- Secondary buttons: transparent or ivory with `border-velmora-gold text-velmora-ink`.
- Cards: warm pearl background, thin sand border, soft shadow, image-first composition.
- Navigation: transparent over hero on homepage, then solid espresso with readable ivory text after scroll.

## Do
- Use warm jewelry-friendly backgrounds.
- Keep interactions subtle: opacity changes, soft transforms, thin underlines.
- Ensure every visible text element has strong contrast.
- Use stock-image tags for jewelry/editorial imagery with text-reference queries.

## Don't
- Do not use bright sale colors, generic blue links, harsh black-and-white ecommerce styling, or discount badges.
- Do not hardcode random hex values in JSX classes; use named Tailwind tokens.
- Do not overcrowd product cards or homepage sections.
