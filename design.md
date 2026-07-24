# Velmora Fine Jewelry - Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry.
- **Vibe**: Not loud, not discount-looking, not generic e-commerce.

## Typography
- **Headings & Product Names**: `Cormorant Garamond` (Serif). Elegant, refined.
  - Tailwind class: `font-heading`
- **Body & UI**: `Inter` (Sans-serif). Clean, readable.
  - Tailwind class: `font-sans`
- **Product Names Rule**: Set in UPPERCASE with wide letter-spacing (`uppercase tracking-widest`).

## Color Palette
- **Background**: Soft warm off-white (`bg-[#fafafa]` / `hsl(0 0% 98%)`)
- **Text/Foreground**: Deep espresso/charcoal (`hsl(20 14% 4%)`)
- **Accent**: Warm muted gold/brass (`hsl(38 45% 65%)`) - used for primary CTAs, refined links.
- **Muted/Secondary**: Light warm gray for backgrounds of product images if needed (`hsl(60 5% 96%)`)
- **Borders**: Thin, delicate hairlines (`hsl(20 5.9% 90%)`)

## Styling Rules
- **Whitespace**: Generous paddings (`py-16`, `py-24`, `gap-8`, `gap-12`). Let the imagery and text breathe.
- **Imagery**: Large editorial imagery.
- **Dividers**: Thin hairline dividers (custom class `.hairline`, `.hairline-vertical`).
- **Buttons**: Premium feel. Solid primary dark (`bg-primary text-primary-foreground`) or solid accent (`bg-accent text-primary`). Hover states should be subtle, slightly fading opacity (`hover:opacity-90`) or slight background shift.
- **Borders/Shadows**: Sharp corners (no border-radius / `rounded-none`). No heavy box shadows, keep it flat and editorial. Softest possible shadows only if absolutely necessary for z-index lifting.
- **Hover Transitions**: Subtle opacity fades or slow background color shifts (`transition-all duration-300 ease-in-out`).

## Seed Product Data
1. Vivid Aura Jewels — gold ear cuff with crystal accent — $42
2. Majestic Flora Nectar — multicolor floral crystal necklace — $68
3. Golden Sphere Huggies — chunky gold dome huggie earrings — $38
4. Amber Lace Earrings — textured gold filigree drop earrings — $54
5. Royal Heirloom Set — gift-boxed earring + necklace set — $95
