# Velmora Fine Jewelry — Design System

## Philosophy
Quiet luxury, warm, editorial. Premium demi-fine jewelry that feels accessible but elevated. No loud discounts, no generic e-commerce patterns.

## Color Palette
- **Cream** `#F7F5F0` — Primary background, warm and inviting
- **Ivory** `#FAF9F6` — Card/surface backgrounds, slightly lighter
- **Espresso** `#1A1714` — Primary text, dark elements, footer bg
- **Warm Gray** `#6B6560` — Secondary text, captions, muted content
- **Gold** `#C9A96E` — Accent color: CTAs, highlights, hover states, stars
- **Gold Dark** `#B8945A` — Hover states for gold elements
- **Muted** `#E8E4DE` — Placeholder backgrounds, dividers
- **Border** `#D5CFC6` — Hairline borders, input borders
- **Surface** `#FFFFFF` — Pure white for cards on dark sections

## Typography
- **Headings**: Cormorant Garamond, 300-700 weight. Elegant, editorial feel.
- **Body/UI**: Inter, 300-700 weight. Clean, readable, modern.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.15em]` to `tracking-[0.25em]`)

## Spacing
- Generous whitespace. Sections have `py-16` to `py-24` (64-96px)
- Content max-width: `max-w-7xl` (1280px)
- Mobile-first: padding `px-4` mobile, `px-6` tablet, `px-8` desktop

## Components
- **Buttons**: Minimal radius (`rounded-sm`), uppercase tracking, solid espresso or outlined
- **Cards**: No heavy shadows. Subtle borders or clean whitespace separation
- **Dividers**: Hairline `1px` in border color

## Interactions
- Smooth transitions: `duration-300` with `cubic-bezier(0.4, 0, 0.2, 1)`
- Hover on images: subtle scale `scale-105`
- Quick-add buttons: slide up from bottom on product card hover
- Nav: transparent over hero, solid cream on scroll

## Do's
- Use warm cream backgrounds throughout
- Keep typography elegant and spacious
- Use gold sparingly as an accent
- Ensure strong contrast for accessibility
- Mobile-first responsive design

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No discount badges or urgency tactics
- No clutter — embrace whitespace
