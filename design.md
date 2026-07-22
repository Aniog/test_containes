# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic e-commerce clutter.

## Color palette
- Base / background: `#F7F4F0` warm off-white (almond milk)
- Surface: `#FFFFFF` pure white for cards and drawers
- Primary text: `#2B211E` deep espresso brown
- Secondary / muted text: `#7D6F68` warm taupe
- Accent: `#A8643E` burnt terracotta / copper (CTAs, newsletter, hover)
- Accent dark: `#8A4F30` hover states
- Metallic gold: `#C9A46A` for stars, highlights, foil details
- Hairline border: `#E8E0D9` warm stone
- Dark feature background: `#241C19` for newsletter and footer

## Typography
- Headings / serif: `Cormorant Garamond` (300–700). Elegant, high contrast.
- Body / UI: `Inter` or `Manrope` (400–600). Clean and neutral.
- Product names: uppercase, `tracking-[0.18em]`, `font-normal`, `text-sm`.

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max: `max-w-7xl mx-auto px-6 md:px-10`
- Grid gaps: `gap-6 md:gap-8`

## Components
- Buttons: premium solid accent (`bg-accent text-white`) or outlined dark (`border-espresso text-espresso`). Subtle transition.
- Cards: minimal, white or transparent, thin hairline borders, soft image zoom on hover.
- Inputs: hairline border, rounded-sm, focus ring accent.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` and `data-strk-bg` with unique IDs; load via `ImageHelper.loadImages`.

## Accessibility
- Strong contrast text on all surfaces.
- Focus outlines on interactive elements.
