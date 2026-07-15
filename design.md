# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Direction**: Warm neutral base with rich gold accents. Soft, sophisticated, timeless.

## Color Palette
| Token | Hex | Usage |
|-------|-----|-------|
| brand-cream | #FAF7F2 | Page background, light surfaces |
| brand-warm | #F5EDE3 | Alternate section backgrounds, cards |
| brand-gold | #C9A96E | Primary accent, CTAs, highlights, links |
| brand-gold-light | #D4BA8A | Hover states, subtle accents |
| brand-gold-dark | #A8894F | Active/pressed states |
| brand-charcoal | #1C1917 | Hero overlays, dark sections, footer |
| brand-dark | #292524 | Primary text color |
| brand-muted | #78716C | Secondary text, captions |
| brand-border | #E7E0D6 | Dividers, borders, hairlines |

## Typography
- **Headings**: Cormorant Garamond (serif) — elegant, editorial
  - `font-serif` in Tailwind
  - Product names: UPPERCASE + `tracking-ultra-wide` (0.25em)
  - Section headings: normal case, `tracking-wide`
- **Body / UI**: Inter (sans-serif) — clean, readable
  - `font-sans` in Tailwind
  - Buttons, navigation, descriptions, labels

### Type Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section heading: `text-3xl md:text-4xl font-serif font-light`
- Product name: `text-sm font-sans font-medium uppercase tracking-ultra-wide`
- Body: `text-base font-sans`
- Caption: `text-xs font-sans tracking-wide uppercase`

## Spacing & Layout
- Generous whitespace throughout
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6`
- Hairline dividers: `border-t border-brand-border`
- Card gaps: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary (accent)**: `bg-brand-gold text-white font-sans text-xs uppercase tracking-super-wide px-8 py-3.5 hover:bg-brand-gold-dark transition-colors`
- **Secondary (outlined)**: `border border-brand-gold text-brand-gold font-sans text-xs uppercase tracking-super-wide px-8 py-3.5 hover:bg-brand-gold hover:text-white transition-colors`
- No rounded corners — sharp/very slight radius only (`rounded-none` or `rounded-sm`)

### Cards
- Product cards: clean, minimal. Image dominant, name + price below.
- Hover: second image fade-in, subtle "Add to Cart" overlay
- No heavy shadows — `shadow-sm` at most, or border only

### Navigation
- Sticky, transparent over hero → solid cream on scroll
- Logo: serif, `text-xl tracking-ultra-wide`
- Links: sans, `text-xs uppercase tracking-super-wide`

### Dividers
- Thin hairline: `border-brand-border`
- Used between sections, in footers, between nav items on mobile

## Do's
- Use generous whitespace and breathing room
- Keep imagery large and editorial
- Use gold sparingly as an accent — not everywhere
- Ensure strong text contrast on all backgrounds
- Use subtle transitions (0.3s ease) for hovers

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy drop shadows
- Don't round buttons heavily (no rounded-full on CTAs)
- Don't use brand-gold as body text color
- Don't crowd elements — always leave space
