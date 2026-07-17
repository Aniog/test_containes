# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Direction**: Warm neutral base with gold metallic accents. Soft, sophisticated, and timeless.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| cream | #FAF7F2 | Page background |
| warm | #F5EDE3 | Section backgrounds, cards |
| sand | #E8DDD0 | Borders, dividers |
| gold | #C9A96E | Primary accent, CTAs, highlights |
| gold-light | #D4BA8A | Hover states |
| gold-dark | #A8864E | Active/pressed states |
| charcoal | #2C2C2C | Primary text |
| ink | #1A1A1A | Headings, nav |
| muted | #8A8278 | Secondary text |
| muted-light | #B5AFA7 | Placeholder text |
| border | #E5DDD3 | Hairline dividers |

## Typography
- **Headings**: Cormorant Garamond (serif), weights 400-600
- **Body/UI**: Inter (sans-serif), weights 300-500
- **Product names**: UPPERCASE, letter-spacing 0.25em, serif
- **Nav links**: UPPERCASE, letter-spacing 0.15em, sans-serif, text-xs

## Spacing
- Section padding: py-20 md:py-28
- Container max-width: max-w-7xl mx-auto px-4 md:px-8
- Card gaps: gap-6 md:gap-8
- Hairline dividers: h-px bg-velmora-border

## Buttons
- **Primary (accent)**: bg-velmora-gold text-white font-sans uppercase tracking-wide text-xs px-8 py-3.5 hover:bg-velmora-gold-dark transition-colors
- **Secondary (outlined)**: border border-velmora-gold text-velmora-gold uppercase tracking-wide text-xs px-8 py-3.5 hover:bg-velmora-gold hover:text-white transition-colors
- **Pill buttons (variants)**: border border-velmora-border px-5 py-2 text-xs uppercase tracking-wide, active: border-velmora-gold bg-velmora-gold text-white

## Cards
- Product cards: bg-white rounded-none, hover shadow subtle
- Image aspect ratio: 4x5 for product, 3x2 for category tiles
- Hover: second image fade-in, "Add to Cart" slide-up

## Animations
- Subtle, smooth transitions (300ms ease)
- Hover image crossfade
- Cart drawer slide-in from right
- Section fade-in on scroll

## Do's
- Generous whitespace
- Large editorial imagery
- Thin hairline dividers
- Restrained use of gold accent
- Serif for emotional/editorial moments

## Don'ts
- Never use bright/saturated colors
- Never use rounded buttons (keep sharp/minimal radius)
- Never crowd sections — always breathe
- Never use sans-serif for product names
- Never use more than 2 typefaces
