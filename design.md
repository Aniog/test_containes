# Velmora Fine Jewelry Visual System

## Direction
Quiet luxury with a warm editorial feel. The storefront should feel like a refined jewelry lookbook rather than a discount marketplace: spacious, calm, tactile, and premium-but-accessible.

## Palette
Use one consistent direction: deep espresso/onyx surfaces, warm ivory editorial backgrounds, soft champagne metallic accents, and muted clay neutrals.

- Onyx espresso: `velmora-espresso` / `#17110d` for premium dark surfaces and hero overlays.
- Warm ivory: `velmora-ivory` / `#f7f0e6` for main page backgrounds.
- Porcelain: `velmora-porcelain` / `#fffaf2` for cards and elevated panels.
- Champagne gold: `velmora-champagne` / `#c8a46d` for CTAs, borders, rating stars, and small accents.
- Antique gold: `velmora-antique` / `#8b6b3f` for text accents and hover states.
- Cocoa text: `velmora-cocoa` / `#31251f` for primary text on light surfaces.
- Muted taupe: `velmora-taupe` / `#7c6d62` for secondary copy.
- Blush clay: `velmora-clay` / `#d7b7a0` for soft editorial highlights.

## Typography
- Headings and product names: elegant serif, Cormorant Garamond. Use generous line-height and refined weights.
- Body and UI: Inter. Keep labels, buttons, and nav clean and readable.
- Product names: uppercase with wide letter spacing, never cramped.

## Layout and spacing
- Mobile-first with generous vertical rhythm.
- Desktop uses multi-column editorial compositions; avoid mobile stacking on wide screens.
- Use hairline borders (`border`, `border-velmora-champagne/20`) and soft shadows only.
- Prefer rounded panels (`rounded-[1.5rem]`, `rounded-full`) but keep corners elegant and restrained.

## Components
- Buttons: premium solid champagne on dark or espresso text on champagne; outlined versions use champagne hairline borders.
- Cards: warm porcelain backgrounds with explicit cocoa foreground text.
- Navigation: transparent over hero, then warm ivory/porcelain with subtle blur and hairline border on scroll.
- Imagery: warm gold jewelry on model, neutral/dark backgrounds, editorial crops, not generic product cutouts.

## Do's
- Use strong readable contrast everywhere.
- Keep animations subtle: opacity, translate, scale, shadow, image crossfade.
- Use restrained accent color; gold should feel expensive, not bright yellow.

## Don'ts
- Do not use discount-style red sale badges, loud gradients, neon colors, or crowded product cards.
- Do not use low-contrast taupe text on dark surfaces.
- Do not hardcode arbitrary colors in JSX; use Tailwind named colors from the config.
