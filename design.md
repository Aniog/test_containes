# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `warm-black` | `#1C1917` | Primary dark background, nav solid, footer |
| `warm-cream` | `#F5F0EB` | Light backgrounds, card surfaces, body text on dark |
| `gold` | `#C9A96E` | Primary accent — buttons, links, highlights, CTA |
| `gold-light` | `#D4BA8A` | Hover state for gold, secondary accent |
| `gold-dark` | `#A68B4B` | Active/pressed state for gold |
| `stone-500` | `#78716C` | Muted text, secondary info |
| `stone-300` | `#D6D3D1` | Hairline dividers, borders |
| `stone-100` | `#F5F5F4` | Alternate light background |
| `white` | `#FFFFFF` | Pure white for contrast areas |

## Typography

- **Headings & Product Names**: `Cormorant Garamond` (serif) — weights 400, 500, 600, 700
- **Body & UI**: `Inter` (sans-serif) — weights 300, 400, 500, 600
- **Product names**: UPPERCASE with `tracking-[0.15em]` letter-spacing
- **Nav logo**: `Cormorant Garamond`, uppercase, `tracking-[0.3em]`, weight 600

## Spacing & Layout

- Generous whitespace — sections padded `py-20 md:py-28`
- Content max-width `max-w-7xl` with `mx-auto px-4 md:px-6 lg:px-8`
- Hairline dividers: `border-t border-stone-300` or `h-px bg-stone-300`
- Card padding: `p-6`
- Section gaps: `gap-8 md:gap-12`

## Buttons

- **Primary CTA**: Solid gold background (`bg-gold text-warm-black`), uppercase, `tracking-[0.1em]`, `px-8 py-3`, `font-semibold`, hover `bg-gold-light`
- **Secondary**: Outlined (`border border-gold text-gold`), same typography, hover `bg-gold text-warm-black`
- **Pill/Tag**: Small rounded (`rounded-full`), `px-4 py-1.5`, `text-sm`

## Cards & Surfaces

- Product cards: `bg-warm-cream` or `bg-white`, subtle shadow `shadow-sm`, hover `shadow-md`
- Hover transition: `transition-all duration-300`
- Image hover: scale slightly `hover:scale-[1.02]` or reveal second image with opacity transition

## Shadows & Effects

- Subtle: `shadow-sm` for cards
- Medium: `shadow-md` on hover
- No heavy drop shadows
- Soft inner glow on gold elements

## Animations

- Smooth, subtle. `transition-all duration-300 ease-out`
- Nav: transparent → solid on scroll with `transition-colors duration-500`
- Cart drawer: slide in from right
- Product image: fade transition on hover/swap
- No jarring or bouncy animations

## Do's
- Use generous whitespace
- Keep gold as the ONLY accent color
- Use serif for all headings and product names
- Use uppercase + wide tracking for product names
- Ensure strong contrast (warm-cream on warm-black, warm-black on warm-cream)
- Keep imagery large and editorial

## Don'ts
- Don't use multiple accent colors
- Don't use heavy shadows or gradients
- Don't use sans-serif for headings
- Don't crowd sections with too much content
- Don't use discount/sale visual language
- Don't use low-contrast text (stone-500 on stone-100 is forbidden)
