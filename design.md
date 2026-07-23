# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic marketplace feel.

## Color palette
- Background: `#F8F5F2` (warm off-white / velvet paper)
- Surface: `#FFFFFF` (cards, drawer, inputs)
- Text: `#2E241D` (deep espresso)
- Primary accent: `#B48A5A` (burnished gold)
- Primary accent hover: `#9C7346`
- Muted text: `#8C7E72` (warm taupe)
- Secondary surface: `#EDE7E0` (warm sand)
- Hairline / border: `#D9CFC4` (soft taupe)
- Overlay: `rgba(46, 36, 29, 0.35)`

## Typography
- Headlines: `Playfair Display`, serif, weight 500–600
- Product names & nav logo: `Cormorant Garamond`, serif, uppercase, wide letter-spacing
- Body / UI: `Inter`, sans-serif, weight 300–500
- Sample Tailwind classes: `font-playfair`, `font-cormorant`, `font-sans`

## Spacing & layout
- Generous whitespace; section vertical padding `py-16 md:py-24 lg:py-32`
- Container max-width `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Thin hairline dividers: `border-t border-taupe/40`
- Product grid gap `gap-x-6 gap-y-10`

## Components
- Buttons: solid primary gold with white text; or outlined espresso with hover fill.
- Inputs: light surface, thin border, focus ring in gold.
- Cards: white surface, soft shadow on hover, no heavy borders.
- Accordions: hairline separators, chevron rotate animation.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Editorial model close-ups, 9:16 UGC Reel strip.
- Use the stock-image tagging system (`data-strk-img`, `data-strk-bg`).

## Do’s
- Keep typography elegant and high contrast.
- Use uppercase product names with `tracking-[0.2em]`.
- Add subtle hover transitions (`transition-all duration-300`).
- Maintain mobile-first responsive spacing.

## Don’ts
- No neon or saturated colors.
- No heavy drop shadows or discount-style badges.
- No low-contrast text on light surfaces.
