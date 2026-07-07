# Velmora Fine Jewelry Design System

## Visual direction
Velmora uses a quiet luxury editorial look: warm ivory surfaces, a deep espresso base, antique gold accents, soft champagne panels, and restrained hairline borders. The site should feel premium and intimate, never loud or discount-driven.

## Palette
- Deep base: `velmora-espresso` (#221814) for nav text, footer, dark panels, and hero overlays.
- Primary surface: `velmora-ivory` (#F8F3EA) for page backgrounds.
- Soft surface: `velmora-champagne` (#EFE3D1) for accent blocks and cards.
- Warm card: `velmora-porcelain` (#FFFCF6) for product cards and forms.
- Metallic accent: `velmora-gold` (#B8894A) for CTAs, active states, dividers, and highlights.
- Dark metallic accent: `velmora-bronze` (#74512F) for hover states and secondary text.
- Muted text: `velmora-mink` (#6E5B4E) for descriptions and metadata.
- Hairline: `velmora-line` (#D8C7AE) for subtle borders.

## Typography
- Headings and logo: Playfair Display, elegant serif, high contrast, generous line-height.
- Product names: Playfair Display, uppercase, wide letter-spacing.
- Body and UI: Manrope, clean sans-serif, precise tracking for buttons and labels.

## Layout and spacing
- Mobile-first with generous whitespace, then wider editorial grids on desktop.
- Use thin dividers, rounded image corners, soft shadows, and centered max-width containers.
- Product grids should breathe: 2 columns on mobile when possible, 3–5 on larger screens.

## Components
- Buttons: refined pill or rectangular shapes, uppercase small text, subtle hover transitions.
- Cards: warm porcelain background, hairline border, soft shadow on hover.
- Nav: transparent over hero; solid ivory with border after scroll.
- Cart drawer: ivory panel, strong readable foreground, clear quantity controls.

## Do
- Use stock image tags with nearby text references for all editorial/product imagery.
- Keep contrast strong on dark overlays and accent blocks.
- Use restrained animations: fade, translate, subtle image scale.

## Don't
- Do not use bright discount colors, heavy gradients, or generic ecommerce blue.
- Do not use low-contrast beige text on beige surfaces.
- Do not hardcode arbitrary one-off colors in JSX; use Tailwind theme tokens.
