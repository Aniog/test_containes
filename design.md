# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Direction**: Warm neutral base with gold metallic accents. Deep refined palette that flatters gold jewelry.

## Color Palette
| Token | Hex | Usage |
|---|---|---|
| brand-cream | #FAF7F2 | Page background, cards |
| brand-warm | #F5EDE3 | Alternate section backgrounds |
| brand-sand | #E8DDD0 | Borders, dividers, subtle backgrounds |
| brand-gold | #C9A96E | Primary accent, CTAs, highlights |
| brand-gold-light | #D4BA8A | Hover states, secondary gold |
| brand-gold-dark | #A8863F | Active/pressed gold states |
| brand-charcoal | #2C2C2C | Primary text, dark buttons |
| brand-charcoal-light | #3D3D3D | Secondary dark text |
| brand-espresso | #1A1A1A | Footer, darkest backgrounds |
| brand-muted | #8A8278 | Secondary text, descriptions |
| brand-muted-light | #B5AFA7 | Tertiary text, placeholders |

## Typography
- **Headings**: Cormorant Garamond (serif), weights 300-600
- **Body/UI**: Inter (sans-serif), weights 300-600
- **Product names**: UPPERCASE with `tracking-super-wide` (0.2em) or `tracking-ultra-wide` (0.25em)
- **Section headings**: serif, 3xl-4xl on desktop, 2xl-3xl on mobile
- **Body text**: sans, text-sm, text-brand-muted, leading-relaxed

## Spacing & Layout
- Generous whitespace: py-20 md:py-28 for sections
- Max width: max-w-7xl for content containers
- Hairline dividers: h-px bg-brand-sand or h-px bg-brand-gold
- Section dividers: w-12 h-px bg-brand-gold mx-auto (centered accent line)

## Buttons
- Primary: bg-brand-charcoal text-white, hover:bg-brand-espresso, text-xs tracking-ultra-wide uppercase, py-4
- Accent: bg-brand-gold text-white, hover:bg-brand-gold-dark
- Outlined: border border-brand-sand, hover:border-brand-charcoal
- All buttons: transition-colors duration-300

## Cards
- Product cards: aspect-[3x4] image, serif uppercase name, muted description, price
- Hover: second image fades in, "Add to Cart" slides up from bottom
- Transitions: duration-500 for image crossfade, duration-300 for buttons

## Images
- Product shots: 3x4 ratio, warm gold jewelry on dark/neutral backgrounds
- Category tiles: 3x4 ratio, dark overlay with white serif label
- UGC reel: 9x16 ratio, vertical cards with caption overlay
- Hero: 16x9 background, gradient overlay

## Animations
- Subtle and refined: fade-in, slide-up
- Hover transitions: 300-500ms ease
- No bouncy or playful animations
- Cart drawer: slide-in from right, 300ms

## Do's
- Use serif for all headings and product names
- Use generous whitespace between sections
- Keep accent color (gold) restrained — for CTAs, dividers, icons
- Ensure strong text contrast on all backgrounds
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright or saturated colors
- Don't use playful/bouncy animations
- Don't crowd sections with too much content
- Don't use sans-serif for headings
- Don't use discount/sale visual language
- Don't place light text on light backgrounds without sufficient contrast
