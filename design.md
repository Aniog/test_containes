# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount-looking.

## Color Palette
- Background: `#FAF7F2` (warm ivory/cream)
- Dark surface: `#1C1917` (warm near-black)
- Gold accent: `#C8A45C` (warm gold)
- Gold hover: `#B8924A` (deeper gold)
- Text primary: `#1C1917`
- Text secondary: `#787168` (warm grey)
- Card background: `#FFFFFF`
- Border: `#E5DDD4` (warm beige)
- Muted: `#F0EBE3`
- Error: `#C44646`

## Tailwind Config Colors
- brand.cream / brand.warm / brand.gold / brand.gold-dark / brand.charcoal / brand.stone / brand.muted / brand.border

## Typography
- Headings & product names: "Playfair Display", serif. Product names in uppercase with tracking-widest.
- Body & UI: "Manrope", sans-serif.
- Base font-size: 16px, line-height 1.6.

## Spacing & Layout
- Page max-width: 1280px, centered.
- Section padding: py-16 md:py-24.
- Generous whitespace between elements.
- Thin hairline dividers: border-b border-brand-border.

## Borders & Shadows
- Borders: thin, using brand-border color.
- Card hover shadow: subtle shadow-lg with warm tint.
- Buttons: no border-radius overflow (rounded-none) for sharp editorial look, or very subtle rounded-sm.

## Buttons
- Primary: bg-brand-gold text-white, hover:bg-brand-gold-dark, uppercase tracking-widest text-xs py-3 px-8.
- Outline: border border-brand-gold text-brand-gold, hover:bg-brand-gold hover:text-white.

## Transitions
- 300ms ease for all interactive elements.
- Hover: subtle scale or opacity shifts.

## Do's
- Use uppercase with wide letter-spacing for product names
- Large editorial imagery
- Generous whitespace
- Serif for elegance
- Thin lines as dividers

## Don'ts
- Don't use bright/neon colors
- Don't use large border-radius
- Don't use heavy shadows
- Don't clutter the layout
- Don't use loud sale/discount styling