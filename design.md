# Velmora Fine Jewelry Visual System

## Direction
Velmora uses a quiet-luxury editorial direction: warm parchment neutrals, deep espresso contrast, and restrained antique-gold accents. The experience should feel premium, intimate, and calm rather than promotional or loud.

## Color Palette
Use named Tailwind colors from `tailwind.config.js` only.
- `velmora-espresso` (`#231A16`): primary text, solid navigation, footer, premium dark surfaces.
- `velmora-ink` (`#3A2A24`): secondary dark text and borders on light surfaces.
- `velmora-parchment` (`#F7F0E6`): main page background.
- `velmora-ivory` (`#FFF9F0`): cards, form fields, elevated panels.
- `velmora-champagne` (`#D8B36A`): primary accent, CTA backgrounds, star ratings, subtle highlights.
- `velmora-brass` (`#A87A32`): darker accent for outlines and hover states.
- `velmora-blush` (`#E8D2C2`): soft editorial blocks and newsletter surfaces.
- `velmora-mist` (`#CFC4B6`): hairline dividers and muted borders.

## Typography
- Headings and brand wordmark: elegant serif, `Cormorant Garamond` via `font-serifDisplay`.
- Body and UI: clean sans-serif, `Manrope` via `font-sans`.
- Product names: uppercase, wide tracking (`tracking-[0.22em]` or `tracking-[0.18em]`) with serif styling.

## Layout & Spacing
- Mobile-first layouts with generous vertical rhythm.
- Desktop uses editorial two-column sections and multi-column product grids.
- Use thin hairline dividers (`border-velmora-mist/60`) and rounded cards sparingly.
- Prefer large image surfaces with soft shadows and subtle transitions.

## Components
- Buttons: premium solid champagne on espresso text, or transparent outlined champagne/espresso variants.
- Cards: ivory backgrounds on parchment with subtle border and warm shadow.
- Navigation: transparent over hero, transitions to espresso/ivory solid state after scroll.
- Forms: ivory or parchment fields with explicit espresso text and brass/champagne focus rings.

## Do
- Keep contrast strong and text explicitly colored on every surface.
- Use restrained hover motion: opacity, translate, scale, shadow.
- Let imagery and whitespace carry the premium feeling.

## Don’t
- Do not use discount colors, loud reds, generic blues, heavy gradients, or crowded sale badges.
- Do not hardcode arbitrary hex values in JSX/CSS; use configured Tailwind colors.
- Do not make desktop layouts look like stretched mobile layouts.
