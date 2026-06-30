# Velmora Fine Jewelry Visual System

Velmora uses a quiet-luxury editorial direction: deep espresso foundations, warm ivory surfaces, champagne-gold accents, thin dividers, and generous whitespace. The storefront should feel intimate, premium, and warm rather than flashy or discount-led.

## Palette
- Base: `velmora-espresso` (`#17100d`) for deep luxury backgrounds and dark text.
- Ink: `velmora-ink` (`#2b211d`) for primary copy on light surfaces.
- Ivory: `velmora-ivory` (`#fbf7ef`) for page backgrounds and high-contrast text on dark sections.
- Sand: `velmora-sand` (`#efe3d1`) for soft blocks and cards.
- Champagne: `velmora-champagne` (`#c9a35c`) for CTAs, details, and metallic accents.
- Taupe: `velmora-taupe` (`#8c7a68`) for muted secondary text.
- Rose: `velmora-rose` (`#d8b8a7`) for subtle warmth in editorial panels.

## Typography
- Headings and product names: `font-serifDisplay`, using Cormorant Garamond. Large, elegant, high contrast.
- Body and UI: `font-sans`, using Manrope. Clean, calm, readable.
- Product names: uppercase with wide tracking (`tracking-[0.22em]` or `tracking-widest`) and measured line-height.

## Layout and surfaces
- Use generous vertical spacing (`py-16`, `lg:py-24`) and large editorial imagery.
- Use thin hairline borders with `border-velmora-champagne/20` or `border-velmora-espresso/10`.
- Cards should use `bg-velmora-ivory`, soft shadows (`shadow-velmoraSoft`), and subtle hover transitions.
- Buttons should be either solid champagne on espresso/ivory or outlined hairline buttons with calm hover fills.

## Do
- Keep contrast strong and set text colors explicitly on every major surface.
- Use warm, jewelry-focused images with the Strikingly image tagging system.
- Keep animations subtle: soft fades, small translate movements, opacity changes.
- Preserve whitespace and avoid overcrowding on mobile.

## Don't
- Do not use loud sale colors, discount badges, generic ecommerce blue, or neon accents.
- Do not use heavy shadows, thick borders, or crowded grids.
- Do not hardcode arbitrary color hex values in JSX class strings; use Tailwind tokens from this design system.
