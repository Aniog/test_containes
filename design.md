# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso contrast, softly aged gold accents, airy spacing, and refined typography. The store should feel premium, calm, and intimate rather than promotional.

## Color Palette
- **Ink Espresso** (`velmora-espresso`, example `bg-velmora-espresso text-velmora-ivory`): primary dark base for hero overlays, footer, cart drawer headers, and high-contrast text.
- **Warm Ivory** (`velmora-ivory`, example `bg-velmora-ivory text-velmora-espresso`): main page background, product cards, editorial sections.
- **Champagne** (`velmora-champagne`, example `bg-velmora-champagne`): soft elevated surfaces, trust strip, muted blocks.
- **Antique Gold** (`velmora-gold`, example `bg-velmora-gold text-velmora-espresso`): primary CTAs, refined accents, stars, focused states.
- **Burnished Gold** (`velmora-burnished`, example `text-velmora-burnished border-velmora-burnished`): hover states and secondary accents.
- **Rose Taupe** (`velmora-taupe`, example `bg-velmora-taupe text-velmora-ivory`): newsletter and editorial contrast block.
- **Mist** (`velmora-mist`, example `border-velmora-mist`): hairline borders and dividers.

## Typography
- Headings and product names: Cormorant Garamond serif from Google Fonts. Use elegant, high-contrast scale, e.g. `font-serif text-5xl md:text-7xl leading-none`.
- Body and UI: Manrope sans-serif from Google Fonts, e.g. `font-sans text-sm tracking-wide`.
- Product names must be uppercase with generous tracking: `font-serif uppercase tracking-[0.18em]`.

## Layout & Spacing
- Mobile-first with generous whitespace. Use `px-5 sm:px-8 lg:px-12` and section spacing `py-16 md:py-24`.
- Desktop layouts should not collapse into mobile stacking; use two-column or grid layouts from `lg:` upward.
- Use thin hairline dividers: `border border-velmora-mist/70` or `border-t border-velmora-mist`.

## Components
- Buttons: quiet premium shapes, uppercase small labels, `rounded-full`, thin borders, and smooth transitions. Primary: `bg-velmora-gold text-velmora-espresso hover:bg-velmora-burnished`. Secondary: `border border-velmora-espresso/25 text-velmora-espresso hover:border-velmora-gold`.
- Cards: ivory/champagne backgrounds, soft shadows only on hover: `shadow-[0_24px_80px_rgba(44,31,24,0.08)]`.
- Navigation: transparent over hero; solid warm ivory after scroll with hairline bottom border.
- Imagery: warm gold jewelry on model or dark/neutral editorial backgrounds. Use the Strikingly image tagging system for all placeholders.

## Do's
- Keep contrast strong and text explicit on every surface.
- Favor restraint, editorial cropping, thin lines, and slow subtle hover transitions.
- Use gold as an accent, not as a dominant background everywhere.

## Don'ts
- Do not use loud sale colors, discount badges, neon tones, or generic marketplace styling.
- Do not overcrowd cards with excessive labels.
- Do not hardcode raw hex values in JSX; use named Tailwind colors.
