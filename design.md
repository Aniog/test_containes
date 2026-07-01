# Visual Identity - Velmora Fine Jewelry

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. Not loud, not discount-looking.

## Color Palette
Confident, elegant direction: Deep Charcoal and Soft Cream with Metallic Gold accents.
- Background: `bg-[#FAFAFA]` (Soft Off-White) or `bg-[#1A1A1A]` (Deep Charcoal for sections)
- Primary Text: `text-[#1A1A1A]` (Deep Charcoal)
- Secondary Text: `text-[#666666]` (Soft Gray)
- Accent: `text-[#C5A059]` (Metallic Gold) / `bg-[#C5A059]`
- Border: `border-[#E5E5E5]` (Light Hairline)

## Typography
- Headings & Product Names: Serif font (Cormorant Garamond or Playfair Display).
  - Tailwind: `font-serif`
  - Style: Product names in UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Body & UI: Clean sans-serif (Inter / Manrope).
  - Tailwind: `font-sans`

## UI Elements
- Generous whitespace.
- Thin hairline dividers (`h-[1px] bg-border`).
- Large editorial imagery.
- Buttons: Solid accent or outlined with subtle hover transitions.
- Shadows: Soft, almost imperceptible.

## Tailwind Classes
- Heading 1: `text-4xl md:text-6xl font-serif uppercase tracking-tight`
- Heading 2: `text-2xl md:text-3xl font-serif`
- Product Name: `text-sm font-serif uppercase tracking-[0.2em]`
- Button (Solid): `bg-[#1A1A1A] text-white px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#C5A059] transition-colors duration-300`
- Button (Outline): `border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-all duration-300`
