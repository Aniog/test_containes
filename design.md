# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud discounts, no generic marketplace feel.

## Color palette
- Background: `#F7F4F0` (warm off-white / rice paper)
- Surface: `#FFFFFF` (clean white cards)
- Primary text: `#1E1A17` (near-black espresso)
- Secondary text: `#6D6460` (warm taupe)
- Muted text: `#9E9490` (soft stone)
- Accent: `#A86B48` (warm terracotta / bronze)
- Accent hover: `#8C5639`
- Metallic gold: `#CBAF87` (subtle gold highlights)
- Border / hairline: `#E9E2DC`
- Footer background: `#1E1A17` with `#F7F4F0` text
- Newsletter block: `#A86B48` background with white text

## Typography
- Headings / product names: `Cormorant Garamond`, serif. Weight 500–600.
- Body / UI: `Inter`, sans-serif. Weight 400–500.
- Product names: uppercase, tracking-widest (`tracking-[0.18em]`), small size (`text-xs`).
- H1 hero: `text-5xl md:text-7xl` Cormorant, leading-tight.
- Section titles: `text-3xl md:text-4xl` Cormorant.

## Spacing & layout
- Page max-width: `max-w-7xl mx-auto`.
- Section vertical padding: `py-16 md:py-24`.
- Container horizontal padding: `px-6 md:px-10 lg:px-14`.
- Hairline divider: `border-b border-[#E9E2DC]`.
- Card radius: `rounded-none` (sharp editorial) or subtle `rounded-sm`.

## Components
- Buttons: solid accent fill, white text, uppercase tracking-wider, `px-8 py-3`, hover `bg-[#8C5639]`.
- Outlined buttons: `border border-[#1E1A17] text-[#1E1A17]`, hover `bg-[#1E1A17] text-white`.
- Cards: white surface, no heavy shadow. Hover shows second image + add-to-cart overlay.
- Inputs: `bg-white border border-[#E9E2DC]`, focus `ring-1 ring-[#A86B48]`.

## Imagery
Warm gold jewelry on dark or neutral backgrounds. Large editorial crops. Use `data-strk-img` tags where appropriate, with generic SVG placeholder.

## Motion
- Smooth transitions: `transition-all duration-300 ease-out`.
- Nav solidifies on scroll.
- Image hover crossfade.
- Accordions slide open.
- Cart drawer slides in from right.
