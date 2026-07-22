# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Ivory | #F7F3EC | bg-ivory | Page background |
| Cream | #EDE8DF | bg-cream | Section alternates, cards |
| Charcoal | #1C1410 | text-charcoal | Primary text, headings |
| Espresso | #2E2118 | bg-espresso | Dark sections, footer |
| Gold | #C9A96E | text-gold / bg-gold | Primary accent, CTAs |
| Gold Light | #E8D5A3 | text-gold-light | Hover states, borders |
| Muted | #8C7B6E | text-muted-warm | Secondary text, captions |
| Divider | #DDD5C8 | border-divider | Hairline dividers |
| White | #FDFAF5 | bg-white-warm | Cards, nav solid |

## Typography

### Fonts
- **Headings**: Cormorant Garamond (serif) — elegant, editorial
- **Body/UI**: Inter (sans-serif) — clean, readable

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond, font-light, tracking-wide
- Section title: `text-3xl md:text-4xl` Cormorant Garamond, font-light
- Product name: `text-xl md:text-2xl` Cormorant Garamond, UPPERCASE, tracking-widest
- Body: `text-sm md:text-base` Inter, font-normal
- Caption/label: `text-xs` Inter, tracking-widest, UPPERCASE

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-divider` (1px, #DDD5C8)
- Thin separator: `h-px bg-divider`

## Shadows
- Card hover: `shadow-md shadow-charcoal/10`
- Nav solid: `shadow-sm shadow-charcoal/5`

## Buttons
- Primary (solid): `bg-gold text-white-warm hover:bg-gold-light hover:text-charcoal` — pill or square, px-8 py-3
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-white-warm`
- Ghost: `text-charcoal hover:text-gold underline-offset-4`

## Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover image: `scale-105 duration-500`

## Do's
- Use generous whitespace between sections
- Keep product names UPPERCASE with wide letter-spacing
- Use Cormorant Garamond for all editorial/headline text
- Maintain warm ivory as the dominant background
- Gold accent used sparingly — CTAs, prices, stars

## Don'ts
- No bright whites (#FFFFFF) — use ivory/cream instead
- No cool grays — all neutrals should be warm-toned
- No more than 2 accent colors per section
- No heavy drop shadows — keep them soft and warm
