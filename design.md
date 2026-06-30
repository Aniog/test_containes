# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic e-commerce noise. Soft light, refined restraint, confident minimalism.

## Color palette
- Background primary: `#F7F4F0` (warm off-white, used for page canvas)
- Background secondary: `#1A1714` (deep espresso, used for footer, nav solid, and accent blocks)
- Text primary: `#1A1714` (on light surfaces)
- Text secondary: `#6B6560` (muted body captions)
- Text inverted: `#F7F4F0` (on dark surfaces)
- Accent: `#B08968` (warm antique gold — CTA, links, hover states)
- Accent dark: `#8C6B4F` (pressed / hover darken)
- Hairline: `#DED8D1` (thin borders on light surfaces)
- Hairline inverted: `#3A3530` (thin borders on dark surfaces)
- Star: `#C9A227` (rating stars)

## Typography
- Headings / product names: `Cormorant Garamond`, serif. Weight 400–600.
- Product names are UPPERCASE with wide `letter-spacing: 0.18em`.
- Body / UI: `Inter`, sans-serif. Weight 300–500.
- Large hero headline: `text-4xl md:text-6xl lg:text-7xl`.
- Section titles: `text-3xl md:text-4xl`.

## Spacing
- Generous whitespace. Section vertical padding `py-16 md:py-24 lg:py-32`.
- Container max-width `max-w-7xl`, centered with `px-4 sm:px-6 lg:px-8`.
- Product grid gaps `gap-4 md:gap-6`.
- Hairline dividers are `h-px` or `border-b`.

## Components
- Buttons:
  - Primary: solid accent `#B08968`, text `#FFFFFF`, uppercase tracking, px-8 py-3. Hover `bg-accent-dark`.
  - Secondary / outline: transparent with `1px` border `#1A1714`, hover fills background `#1A1714` text inverted.
- Cards: no border-radius or very subtle `rounded-sm`, soft shadow on hover.
- Inputs: `border-b` hairline, transparent background, focus border accent.
- Accordion: hairline top/bottom, plus/minus icon.

## Imagery
- Warm gold jewelry on dark charcoal, taupe, or creamy neutral backgrounds.
- Editorial crops: close-up ear shots, layered necklines, hand detail.
- All product/hero images use the stock-image tagging system (`data-strk-img`, `data-strk-bg`).

## Motion
- Subtle `transition duration-300 ease-out`.
- Hover lifts: `-translate-y-0.5` and soft shadow.
- Image cross-fades on product cards.
- Nav background transitions on scroll.
