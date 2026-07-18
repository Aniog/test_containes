# Velmora Fine Jewelry Design System

## Direction
Quiet luxury, warm editorial, premium-but-accessible demi-fine jewelry. The interface should feel calm, tactile, and refined rather than promotional or loud.

## Palette
Use one cohesive soft-neutral direction with a deep espresso base and restrained antique-gold accent.

- `velmora-ink` (`#241A16`): primary text and deep sections.
- `velmora-espresso` (`#3A2923`): navigation, footer, drawer surfaces.
- `velmora-cream` (`#F7F0E7`): page background.
- `velmora-parchment` (`#EFE2D3`): section panels and trust strips.
- `velmora-linen` (`#FBF7F1`): cards and elevated surfaces.
- `velmora-gold` (`#B88945`): primary CTA/accent.
- `velmora-champagne` (`#D8B982`): fine lines, hover states.
- `velmora-rose` (`#8D5D4F`): subtle secondary accent.
- `velmora-muted` (`#75665F`): secondary body copy.

Always pair dark backgrounds with cream/linen text and light backgrounds with ink text. Never place muted text on gold or champagne surfaces.

## Typography
- Headings and product names: Cormorant Garamond, elegant serif, generous line-height.
- Body/UI: Manrope, clean sans-serif.
- Product names: uppercase, wide letter spacing, refined scale.

Example classes: `font-serif text-5xl tracking-tight`, `font-sans text-sm tracking-[0.18em] uppercase`.

## Layout and spacing
- Mobile-first with generous whitespace.
- Desktop layouts should use editorial multi-column compositions, not stacked mobile layouts.
- Use thin hairline dividers: `border-velmora-champagne/40`.
- Cards should have soft shadows and rounded corners only where subtle.

## Buttons
- Primary: antique gold background, espresso text, subtle hover lift.
- Secondary: transparent/outline with champagne border.
- Avoid bright sale colors, gradients that feel generic, or heavy shadows.

## Imagery
Warm-lit gold jewelry, model closeups, dark/neutral editorial backgrounds. Use large imagery, slow hover scale, and soft overlays for legibility.

## Do
- Use restrained animations (`transition-all duration-300`).
- Keep text contrast strong.
- Use soft borders, whitespace, and calm editorial rhythm.

## Don’t
- Do not use discount banners, red sale badges, loud colors, or dense marketplace layouts.
- Do not hardcode random colors in components; use the named Tailwind colors above.
