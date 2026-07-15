# Velmora Fine Jewelry Visual System

## Direction
Velmora is quiet-luxury demi-fine jewelry: warm, editorial, premium-but-accessible. The site should feel like a refined magazine storefront, not a discount shop.

## Palette
Use a deep espresso base with soft ivory surfaces and restrained warm metallic accents.

- Ink Espresso: `velmora-espresso` (`#211713`) for main text, dark surfaces, premium buttons.
- Deep Cocoa: `velmora-cocoa` (`#33231C`) for hero overlays, footer, and dark cards.
- Warm Ivory: `velmora-ivory` (`#F8F1E7`) for page backgrounds.
- Porcelain: `velmora-porcelain` (`#FFFDF8`) for elevated cards.
- Champagne: `velmora-champagne` (`#D8B06A`) for accents, hairlines, stars, and CTA highlights.
- Antique Gold: `velmora-gold` (`#A87833`) for hover and secondary accent states.
- Soft Taupe: `velmora-taupe` (`#B7A18E`) for supporting text and borders.
- Blush Clay: `velmora-clay` (`#C98F7B`) for newsletter warmth and subtle highlights.

## Typography
- Headings and product names: elegant serif, use Playfair Display from Google Fonts.
- Body and UI: Manrope from Google Fonts.
- Product names are uppercase with wide letter-spacing.

Example Tailwind classes:
- Hero headline: `font-serif text-5xl md:text-7xl tracking-tight`
- Product name: `font-serif uppercase tracking-[0.18em] text-sm`
- UI labels: `font-sans uppercase tracking-[0.22em] text-xs`

## Layout and Spacing
- Use generous whitespace: large section padding (`py-16 md:py-24`) and roomy cards.
- Use thin hairline borders: `border border-velmora-champagne/25` or `border-velmora-taupe/30`.
- Use full-bleed editorial imagery in hero and category/story blocks.
- On mobile, prioritize clear stacking, touch-friendly controls, and horizontal scroll rows where appropriate.

## Components
- Primary button: espresso or champagne fill with high-contrast text, rounded-full, wide tracking.
- Secondary button: transparent with champagne or espresso border.
- Product cards: porcelain/ivory surface, image-first, soft shadow on hover, quick-add reveal.
- Cart drawer: porcelain panel over dark translucent scrim, clear readable text.

## Do
- Keep motion subtle: opacity, translate-y, image scale, and color transitions.
- Use gold accents sparingly.
- Explicitly set foreground colors on every dark or custom background.

## Don't
- Do not use bright sale colors, loud badges, or discount styling.
- Do not mix additional arbitrary colors.
- Do not use low-contrast taupe text for important content.
