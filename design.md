# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic e-commerce energy.

## Color Palette
- **Background**: `#F7F4F0` warm cream (`bg-cream`)
- **Surface**: `#FFFFFF` white (`bg-white`)
- **Primary text**: `#1E1C1A` deep espresso (`text-espresso`)
- **Secondary text**: `#6B6560` warm gray (`text-stone`)
- **Muted text**: `#9B9189` taupe (`text-taupe`)
- **Accent**: `#C5A060` warm gold (`bg-gold`, `text-gold`)
- **Accent hover**: `#B08D50` deeper gold (`hover:bg-gold-dark`)
- **Hairline dividers**: `#E4DCD4` (`border-line`)
- **Soft shadow**: `rgba(30, 28, 26, 0.06)`

## Typography
- **Headings / product names**: `Cormorant Garamond`, serif
- **Body / UI**: `Inter`, sans-serif
- Product names are UPPERCASE with wide `tracking-[0.22em]` letter-spacing.
- Headings use a light-to-normal weight (300–500) for elegance.

## Spacing
- Generous vertical whitespace between sections (py-16 md:py-24 lg:py-32)
- Container max-width: max-w-7xl (1280px)
- Section horizontal padding: px-4 sm:px-6 lg:px-8

## Components
- Buttons: premium solid gold with dark text, or outlined dark with transparent fill. Rounded-sm, px-8 py-3, uppercase tracking-widest text-xs.
- Cards: white or cream background, subtle shadow, hairline borders optional.
- Inputs: border-b only or full bordered; focus ring in gold accent.

## Imagery
- Warm gold jewelry on dark charcoal, warm cream, or neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` tags with rich contextual queries.
- Placeholder: 1x1 transparent SVG.

## Motion
- Subtle transitions: 300ms ease for color, transform, opacity.
- Hover reveals: second product image, quick-add button slide-up.
- Scroll nav transition: background opacity / backdrop blur.
