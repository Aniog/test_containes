# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base / background**: `#0F0D0D` — deep warm black, used as primary background
- **Surface / card**: `#1A1717` — slightly lighter warm black for cards, nav solid state
- **Accent**: `#C9A87C` — warm muted gold for CTAs, highlights, stars
- **Accent hover**: `#D4BA94` — lighter gold for hover states
- **Text primary**: `#F5F0EB` — warm off-white
- **Text secondary**: `#B8AEA4` — warm muted gray for body copy, captions
- **Text muted**: `#7A7269` — darker warm gray for placeholders, dividers
- **Hairline**: `#2A2624` — warm dark divider
- **Light surface**: `#FAF7F4` — warm off-white for newsletter block (reversed)

## Typography
- **Headings**: Cormorant Garamond, 300–700 weight. Elegant, editorial.
- **Body / UI**: Inter, 300–600 weight. Clean, modern.
- **Product names**: Cormorant Garamond, uppercase, wide letter-spacing (tracking-[0.2em]).
- **Scale**: Hero headline 4xl–5xl (mobile) to 7xl (desktop). Section titles 3xl–4xl. Body text base.

## Spacing
- Generous whitespace. Section padding: py-20 to py-28 on desktop, py-12 to py-16 on mobile.
- Container max-width: max-w-7xl with mx-auto and px-4 sm:px-6 lg:px-8.
- Card gaps: gap-6 to gap-8.

## Components
- **Buttons**: 
  - Primary: bg-accent text-base hover:bg-accent-hover, px-8 py-3, font-medium tracking-wide, transition-colors
  - Outline: border border-accent text-accent hover:bg-accent hover:text-base, px-8 py-3
- **Cards**: bg-surface, no border-radius or subtle rounded-sm, thin hairline border on hover.
- **Dividers**: border-hairline, 1px.
- **Form inputs**: bg-transparent border-b border-hairline, focus:border-accent, text-primary, placeholder:text-muted.

## Effects
- Subtle hover transitions: transition-all duration-300 ease-out
- Soft shadows: shadow-lg with low opacity on cards (hover only)
- Image hover: slight scale (scale-105) with overflow-hidden container

## Do's and Don'ts
- DO use generous whitespace and large imagery.
- DO keep typography hierarchical and consistent.
- DO use uppercase + wide tracking for product names and nav links.
- DON'T use bright/neon colors.
- DON'T use heavy drop shadows on everything.
- DON'T use generic e-commerce patterns like loud sale badges.
