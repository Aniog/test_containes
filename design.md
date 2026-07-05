# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background, nav solid |
| `deep-brown` | `#2A2520` | Card backgrounds, dark surfaces |
| `warm-charcoal` | `#3D3630` | Borders, subtle dividers |
| `muted-gold` | `#C4A868` | Primary accent, CTAs, highlights |
| `bright-gold` | `#D4B87A` | Hover states, emphasis |
| `cream` | `#F5F0E8` | Light backgrounds, sections |
| `ivory` | `#FAF7F2` | Page background (light sections) |
| `warm-white` | `#FFFDF9` | Card backgrounds (light) |
| `text-primary` | `#1A1714` | Headings, body on light |
| `text-secondary` | `#6B6158` | Secondary text, captions |
| `text-light` | `#F5F0E8` | Text on dark backgrounds |
| `text-muted` | `#9B9189` | Placeholder, disabled |

## Typography

- **Headings:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing 0.15em, Cormorant Garamond 500
- **Section headings:** UPPERCASE, letter-spacing 0.2em, Cormorant Garamond 500

### Scale
- Hero headline: text-5xl md:text-7xl
- Section heading: text-2xl md:text-3xl
- Product name: text-base md:text-lg
- Body: text-sm md:text-base
- Caption: text-xs

## Spacing & Layout
- Generous whitespace: py-20 md:py-28 for sections
- Max content width: max-w-7xl (80rem)
- Product grid gap: gap-6 md:gap-8
- Hairline dividers: h-px bg-warm-charcoal/20

## Buttons
- **Primary (accent):** bg-muted-gold text-warm-black, hover:bg-bright-gold, px-8 py-3, tracking-widest uppercase text-xs font-medium, transition-all duration-300
- **Secondary (outlined):** border border-muted-gold text-muted-gold, hover:bg-muted-gold hover:text-warm-black, same sizing
- **Pill buttons (variants):** border border-warm-charcoal text-text-secondary, selected: border-muted-gold bg-muted-gold/10 text-muted-gold

## Cards
- Product cards: bg-warm-white, subtle shadow on hover, image aspect 3x4
- Hover: second image fade-in, "Add to Cart" slide-up
- Border radius: rounded-sm (minimal, editorial feel)

## Animations
- Subtle, smooth transitions: transition-all duration-300
- Hover lifts: hover:-translate-y-1
- Image crossfade on product hover
- Cart drawer slide-in from right
- Nav background transition on scroll

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use warm, gold-toned imagery
- Keep UI minimal and refined
- Use thin hairline dividers

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded-full buttons (too playful)
- Don't use heavy shadows
- Don't mix too many font weights
- Don't use generic e-commerce patterns (badges, countdown timers)
