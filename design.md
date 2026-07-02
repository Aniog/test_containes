# Velmora Fine Jewelry — Visual Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud sales language, no discount styling, no generic marketplace UI.

## Color Palette
- Background primary: `#F6F3EF` (warm cream)
- Background secondary: `#FFFFFF` (pure white)
- Background dark: `#1A1512` (deep espresso, used for footer, hero overlays, accent blocks)
- Text primary: `#1A1512` (deep espresso)
- Text secondary: `#6B6259` (warm taupe)
- Text inverse: `#F6F3EF` (cream, on dark surfaces)
- Accent / metallic: `#C49A6C` (warm antiqued gold)
- Accent hover: `#A67C52` (deeper gold)
- Muted / divider: `#E4DDD4` (warm hairline)
- Soft highlight: `#F0EAE3` (blush sand)

All backgrounds must set explicit foreground color to keep text readable.

## Typography
- Headings: `Cormorant Garamond`, serif. Elegant, high contrast.
- Body / UI: `Inter`, sans-serif.
- Product names: UPPERCASE, `tracking-[0.2em]`, Cormorant Garamond, font-weight 500.
- H1: `text-4xl md:text-6xl lg:text-7xl`
- H2: `text-3xl md:text-4xl lg:text-5xl`
- Body: `text-sm md:text-base leading-relaxed text-stone-600`

## Spacing & Layout
- Generous whitespace. Section padding: `py-16 md:py-24 lg:py-32`.
- Max container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Thin hairline dividers: `border-t border-[#E4DDD4]`.
- Cards: soft white backgrounds with subtle shadow `shadow-sm`, hover lift `hover:-translate-y-0.5`.

## Components
- Buttons:
  - Primary: solid `#C49A6C` background, cream text, rounded-none, uppercase tracking-widest, hover to `#A67C52`.
  - Secondary / outlined: 1px `#C49A6C` border, transparent bg, gold text, hover fills with gold and cream text.
- Pills: rounded-full, 1px border, selected state uses gold bg + cream text.
- Inputs: 1px bottom border only, no rounded corners, warm placeholder text.
- Nav: transparent over hero, solid cream after scroll.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use stock-image tagging system with data-strk-img where appropriate.
- Placeholder: 1x1 SVG transparent placeholder for all content images.

## Animations
- Subtle hover transitions: `transition-all duration-300 ease-out`.
- Nav background transition on scroll.
- Image hover scale: `group-hover:scale-105`.
