# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Value | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background (deep warm black) |
| `warm-charcoal` | `#2A2520` | Card backgrounds, nav solid |
| `warm-dark` | `#3D3630` | Borders, subtle dividers |
| `warm-brown` | `#5C4F42` | Muted text, secondary elements |
| `warm-tan` | `#8B7D6B` | Body text on dark, secondary text |
| `warm-sand` | `#B8A99A` | Muted labels, placeholder text |
| `warm-cream` | `#E8DDD0` | Light text, headings on dark |
| `warm-ivory` | `#F5F0EA` | Page background (light sections) |
| `pure-white` | `#FFFFFF` | Bright text, card backgrounds |
| `gold` | `#C9A96E` | Primary accent, CTAs, highlights |
| `gold-light` | `#D4BA8A` | Hover state for gold |
| `gold-dark` | `#A88B52` | Active/pressed state for gold |

## Typography

- **Headings**: `Cormorant Garamond`, serif — weights 400, 500, 600
- **Body / UI**: `Inter`, sans-serif — weights 300, 400, 500, 600
- **Product names**: UPPERCASE, `letter-spacing: 0.15em`, Cormorant Garamond
- **Nav links**: UPPERCASE, `letter-spacing: 0.12em`, Inter 500, small size

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond 400
- Section heading: `text-3xl md:text-4xl` Cormorant Garamond 500
- Product name: `text-lg md:text-xl` Cormorant Garamond 500 uppercase tracking-widest
- Body: `text-sm md:text-base` Inter 400
- Small/label: `text-xs` Inter 500 uppercase tracking-wider

## Spacing & Layout
- Generous whitespace — sections `py-20 md:py-28`
- Max content width: `max-w-7xl mx-auto px-5 md:px-8`
- Hairline dividers: `border-t border-warm-dark` or `border-warm-brown/30`
- Grid gaps: `gap-6 md:gap-8`

## Buttons
- **Primary (accent)**: `bg-gold text-warm-black` hover `bg-gold-light`, Inter 500, uppercase, tracking-wider, `px-8 py-3`
- **Secondary (outlined)**: `border border-gold text-gold` hover `bg-gold/10`, same typography
- **Subtle**: `text-warm-sand underline` hover `text-gold`

## Cards
- Product cards: no visible border, subtle `shadow` on hover, rounded-none (sharp corners for editorial feel)
- Image aspect ratio: 3:4 for product shots
- Hover: second image fade-in, quick "Add to Cart" overlay

## Animations
- Subtle, smooth: `transition-all duration-300 ease-out`
- Hover lifts: `hover:-translate-y-1`
- Image crossfade on hover
- Nav background transition on scroll

## Do's
- Use generous whitespace
- Use Cormorant Garamond for all headings and product names
- Use warm, gold-accented palette consistently
- Keep product names uppercase with wide letter-spacing
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons (keep sharp/editorial)
- Don't use heavy shadows or thick borders
- Don't mix serif and sans-serif roles
- Don't use generic e-commerce patterns (no star-bursts, no red sale tags)
