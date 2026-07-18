# Velmora Fine Jewelry Visual System

## Direction
Velmora uses a quiet-luxury editorial direction: deep espresso and warm ivory surfaces with antique-gold accents. The store should feel premium, calm, tactile, and intimate. It should never feel loud, discount-driven, or like a generic marketplace.

## Palette
Use named Tailwind colors only; no arbitrary hex values in component class strings.

- `velmora-espresso` (`#1B1410`): primary dark base, hero overlays, footer, premium panels.
- `velmora-ink` (`#2D231E`): readable primary text on light surfaces.
- `velmora-cocoa` (`#4F3D33`): secondary warm text and border depth.
- `velmora-ivory` (`#F8F1E8`): page background and soft editorial surfaces.
- `velmora-pearl` (`#FFFDF8`): elevated card surfaces.
- `velmora-linen` (`#E8D9C7`): hairline borders and neutral blocks.
- `velmora-champagne` (`#C9A35F`): primary metallic accent, CTAs, small highlights.
- `velmora-gold` (`#A9792B`): hover states and richer metallic text.
- `velmora-rose` (`#B88678`): restrained newsletter and feminine accent tint.

## Typography
- Headings and product names: `font-serif`, Cormorant Garamond. Use generous line-height and editorial scale.
- Body and UI: `font-sans`, Manrope. Use calm, legible weights.
- Product names: uppercase, wide letter spacing (`tracking-[0.22em]` only if unavoidable; prefer configured `tracking-product`).

## Layout & Spacing
- Mobile-first with airy stacking and generous vertical rhythm.
- Desktop should use editorial multi-column layouts, not mobile-style single columns.
- Use thin hairline dividers with `border-velmora-linen`.
- Cards should use soft shadows (`shadow-velmora`) and warm surfaces.
- Hero and imagery should be large, warm, and immersive.

## Buttons
- Primary: deep espresso or champagne fill, crisp uppercase sans label, subtle hover lift.
- Secondary: transparent or pearl background with thin champagne/linen border.
- Avoid bright sale colors and aggressive discount styling.

## Do
- Keep contrast strong and text explicit on every surface.
- Use warm neutrals and restrained metallic accents consistently.
- Let product imagery and whitespace carry the premium feel.

## Do Not
- Do not use neon colors, heavy gradients, crowded badges, or bargain language.
- Do not place low-contrast text on image overlays.
- Do not use hardcoded image URLs or arbitrary color values in JSX class names.
