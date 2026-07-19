# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base / Background**: `#F7F4F0` — warm off-white, editorial paper tone
- **Surface / Card**: `#FFFFFF` — pure white for product cards
- **Primary Text**: `#1A1A1A` — near-black for headings and body
- **Secondary Text**: `#6B6560` — warm gray for captions, meta text
- **Accent**: `#8B5E3C` — warm bronze / cognac for CTAs, highlights
- **Accent Hover**: `#6F4A2E` — deeper bronze on hover
- **Divider**: `#E2DCD6` — warm hairline divider
- **Dark Section**: `#1C1917` — deep espresso for contrast blocks (newsletter, footer)
- **Dark Section Text**: `#F7F4F0` — warm off-white on dark backgrounds
- **Star / Rating**: `#C8956C` — warm gold for star ratings

## Typography
- **Headings / Product Names**: `Cormorant Garamond`, serif, weight 400–600. Product names in UPPERCASE with wide `letter-spacing: 0.12em`.
- **Body / UI**: `Inter`, sans-serif, weight 300–500.
- **Scale**: Hero headline `clamp(2.5rem, 5vw, 4.5rem)`, section titles `clamp(1.75rem, 3vw, 2.5rem)`, body `0.9375rem` (15px), captions `0.8125rem` (13px).

## Spacing
- Generous whitespace. Section padding: `py-20 md:py-28`.
- Container max-width: `max-w-7xl` (1280px) centered with `px-6 md:px-10`.
- Thin hairline dividers: `border-b border-[#E2DCD6]`.

## Buttons
- **Primary (solid accent)**: `bg-[#8B5E3C] text-white` — rounded-none or `rounded-sm`, uppercase tracking-wide, py-3.5 px-8. Hover: `bg-[#6F4A2E]`.
- **Secondary (outlined)**: `border border-[#1A1A1A] text-[#1A1A1A]` — hover fills with `bg-[#1A1A1A] text-white`.
- Transitions: `transition-all duration-300 ease-out`.

## Shadows
- Subtle: `shadow-[0_2px_12px_rgba(0,0,0,0.06)]` on product cards.
- Hover lift: `hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Editorial, soft lighting, generous crops.
- Use stock image system with `data-strk-img` attributes.
