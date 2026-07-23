# Velmora Fine Jewelry Design System

## Direction
Quiet luxury with warm editorial restraint. The interface should feel premium, calm, and intimate: soft parchment surfaces, deep espresso text, antique gold accents, fine hairline borders, generous whitespace, and large warm-lit jewelry imagery. Avoid loud sale language, bright discount colors, heavy gradients, or generic marketplace styling.

## Palette
Use these named Tailwind colors only for brand surfaces and accents:
- `velmora-ink` (`#251914`) for primary text and dark panels.
- `velmora-espresso` (`#3A261E`) for deep navigation/footer surfaces.
- `velmora-cream` (`#F7F0E7`) for main page background.
- `velmora-parchment` (`#EFE3D3`) for elevated neutral blocks.
- `velmora-linen` (`#FBF7F0`) for cards and inputs.
- `velmora-gold` (`#B88746`) for primary CTAs, stars, and refined accents.
- `velmora-brass` (`#D4B27A`) for subtle metallic highlights.
- `velmora-clay` (`#8B604A`) for secondary text and editorial captions.
- `velmora-border` (`#D8C7B3`) for hairline dividers.

## Typography
- Headings, logo, product names: `font-serifDisplay` using Playfair Display.
- Body and UI: `font-sans` using Manrope.
- Product names must be uppercase with wide tracking (`uppercase tracking-[0.22em]` or configured equivalents).
- Headlines should be elegant and spacious, not oversized on mobile.

## Layout & spacing
- Mobile-first with comfortable stacked sections.
- Desktop should use editorial two-column layouts where appropriate, never a mobile-style single column when there is room.
- Use generous section padding (`py-16`, `md:py-24`) and max-width containers (`max-w-7xl`).
- Use thin borders (`border-velmora-border`) and restrained shadows (`shadow-softGold`).

## Components
- Buttons: solid antique-gold CTA with dark text, or outlined espresso/gold buttons. Rounded-full or refined small radii.
- Product cards: linen/cream backgrounds, subtle hover image transition, quick add overlay, hairline borders.
- Navigation: transparent over hero, solid linen/espresso text after scroll. Mobile drawer should be readable and calm.
- Cart drawer: linen panel, clear item controls, readable foreground colors.

## Do's
- Use warm jewelry imagery on neutral or deep backgrounds.
- Keep text contrast strong and explicit.
- Use subtle transitions and low-motion animations.
- Use editorial captions, hairline dividers, and ample whitespace.

## Don'ts
- Do not use neon colors, sale badges, loud red accents, or generic marketplace blocks.
- Do not use low-contrast text on parchment or image overlays.
- Do not hardcode hex colors in JSX class strings; use the Tailwind color tokens above.
