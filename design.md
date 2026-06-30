# Velmora Fine Jewelry Design System

Velmora uses a quiet-luxury editorial direction: warm ivory surfaces, deep espresso text, champagne-gold accents, hairline borders, and generous whitespace. The design should feel premium and intimate, never loud, sale-driven, or generic.

## Palette
- `velmora-ivory` (`#F8F3EA`): primary page background.
- `velmora-cream` (`#EFE4D3`): secondary warm panels and soft cards.
- `velmora-linen` (`#FBF8F2`): elevated card surfaces and inputs.
- `velmora-espresso` (`#1F1712`): main text and dark surfaces.
- `velmora-cacao` (`#4B372B`): secondary text and outlined controls.
- `velmora-champagne` (`#C6A15B`): primary accent, metallic detail, buttons.
- `velmora-bronze` (`#8B673A`): hover/active accent.
- `velmora-blush` (`#E8D7C8`): subtle highlights.

## Typography
- Headings and product names: `Cormorant Garamond`, elegant serif, high contrast, generous line height.
- Body/UI: `Manrope`, clean sans-serif.
- Product names: uppercase, wide letter spacing (`tracking-[0.22em]` or `tracking-[0.18em]`), refined weight.

## Layout and spacing
- Mobile-first with comfortable stacked sections.
- Desktop layouts use editorial two-column and three/five-card grids where appropriate.
- Use large vertical padding (`py-16`, `md:py-24`) and contained widths (`max-w-7xl`).
- Use thin dividers (`border-velmora-champagne/20`) instead of heavy boxes.

## Components
- Buttons: pill or softly squared, solid champagne on espresso text for primary; outlined cacao/champagne for secondary. Use subtle hover transitions.
- Cards: warm linen/ivory backgrounds, fine borders, soft shadows, and image-first composition.
- Navigation: transparent over hero, solid warm ivory on scroll.
- Cart drawer: dark espresso overlay/surface with readable ivory text.

## Do
- Keep imagery warm, close-up, editorial, and jewelry-focused.
- Maintain strong contrast on every text surface.
- Use restrained gold accents and quiet animations.

## Don’t
- Do not use bright discount colors, loud banners, or generic marketplace styling.
- Do not place low-contrast tan text on ivory without sufficient weight/contrast.
- Do not hardcode arbitrary colors in JSX; use Tailwind theme names.
