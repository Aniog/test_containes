# Velmora Fine Jewelry Visual Direction

## Mood
Quiet luxury, warm editorial, premium but accessible. The site should feel like a boutique jewelry lookbook with e-commerce clarity, never loud, discounted, or generic.

## Palette
Use a single refined warm-neutral direction:
- Ink: deep espresso-black (`velmora-ink`, example `bg-velmora-ink text-velmora-ivory`) for dramatic hero, nav, footer, and premium surfaces.
- Ivory: warm porcelain (`velmora-ivory`, example `bg-velmora-ivory text-velmora-ink`) for main page background.
- Sand: soft neutral editorial cards (`velmora-sand`).
- Champagne: warm metallic accent (`velmora-champagne`) for CTAs, rules, badges, and subtle emphasis.
- Taupe and stone: restrained secondary text and borders.

Always pair dark backgrounds with ivory/champagne text, and light backgrounds with ink/taupe text. Avoid low-contrast beige-on-white text.

## Typography
- Headings and product names: elegant serif via Cormorant Garamond.
- Body and UI: Inter.
- Product names must be uppercase with wide letter spacing.
- Use generous line heights and editorial spacing.

## Components
- Buttons: premium solid champagne on dark/ink text, or thin outlined buttons with champagne/ink borders.
- Cards: light sand/ivory surfaces, soft shadows, hairline borders.
- Navigation: sticky transparent over hero, solid ivory with hairline border after scroll.
- Product imagery: large, warm, editorial crops with subtle scale transitions on hover.
- Dividers: thin hairline borders in stone/champagne at low opacity.

## Do
- Use generous whitespace and calm layouts.
- Use subtle hover transitions and restrained shadows.
- Keep mobile layouts clear and touch-friendly.

## Don't
- Do not use discount colors, loud gradients, neon accents, or dense merchandising blocks.
- Do not use arbitrary hex values in class strings; use named Tailwind tokens.
- Do not let important text inherit unreadable colors.
