# Velmora Fine Jewelry Design System

## Brand direction
Velmora uses a quiet-luxury editorial look built around deep espresso backgrounds, warm ivory surfaces, and brushed gold accents. The site should feel intimate, refined, and premium without looking flashy, discount-driven, or generic.

## Typography
- Headings and product names: Cormorant Garamond
- Body, UI, pricing, labels: Inter
- Product names: uppercase with `tracking-widest`

## Color system
Add these as named Tailwind tokens and use them consistently.
- `velvet-950` / `velvet-900` / `velvet-800` / `velvet-700`: deep espresso text, dark sections, overlays
- `velvet-300` / `velvet-200` / `velvet-100`: softened borders and muted supporting text
- `cream-50` / `cream-100` / `cream-200`: page background, cards, soft panels
- `gold-300` / `gold-400` / `gold-500`: metallic accents, CTA backgrounds, highlights
- `rose-100`: restrained warm blush accent for editorial surfaces only

## Surfaces
- Main page background: `bg-cream-50`
- Cards and product surfaces: `bg-cream-100`
- Dark editorial sections and footer: `bg-velvet-950` or `bg-velvet-900`
- Borders: `border-velvet-200/60` on light surfaces, `border-cream-200/20` on dark surfaces

## Spacing and layout
- Use generous vertical rhythm: `py-16`, `py-20`, `py-24` on primary sections
- Limit content width with `max-w-7xl`
- Favor asymmetric editorial compositions on desktop and stacked clarity on mobile

## Components
- Buttons should feel premium: either gold-filled with dark text or velvet-outlined with strong contrast
- Use thin dividers and subtle shadows
- Hover states should be soft: opacity, translate, and shadow transitions only
- Keep icons thin and understated

## Imagery
- Favor warm-lit close-ups of gold jewelry, macro details, and model-worn crops
- Use dark neutral or creamy editorial backgrounds
- Avoid loud lifestyle scenes, harsh contrast, and overly saturated imagery

## Do
- Keep text highly readable on every surface
- Use serif display type for emotional emphasis
- Let whitespace create luxury
- Use muted supporting copy and crisp hierarchy

## Don’t
- Do not use neon, bright sale colors, or bargain-style badges
- Do not mix multiple accent colors
- Do not use dense grids without breathing room
- Do not leave important text color to inheritance on custom backgrounds
