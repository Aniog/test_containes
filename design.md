# Velmora Fine Jewelry — Design System

## Visual Direction
**Mood:** Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background for dark sections, nav solid state |
| `warm-charcoal` | `#2C2825` | Card backgrounds on dark sections |
| `cream` | `#FAF7F2` | Primary light background, page body |
| `ivory` | `#F5F0E8` | Alternate warm light, hover states |
| `sand` | `#E8DFD1` | Borders, dividers, subtle backgrounds |
| `gold` | `#C9A96E` | Primary accent — buttons, links, highlights |
| `gold-light` | `#D4BA8A` | Hover state for gold |
| `gold-dark` | `#A8894F` | Active/pressed state for gold |
| `text-primary` | `#1A1714` | Main body text on light backgrounds |
| `text-secondary` | `#6B6560` | Secondary/muted text |
| `text-light` | `#FAF7F2` | Text on dark backgrounds |
| `text-muted` | `#9B9590` | Placeholder, disabled text |

## Typography

- **Headings & Product Names:** Cormorant Garamond (serif), weight 400–600
  - Product names: UPPERCASE, letter-spacing 0.15em–0.2em
  - Section headings: UPPERCASE, letter-spacing 0.12em
- **Body & UI:** Inter (sans-serif), weight 300–500
  - Body: 400 weight, 16px base
  - Buttons/labels: 500 weight, UPPERCASE, letter-spacing 0.08em–0.12em
  - Small text: 300 weight

### Font Sizes
- Hero headline: text-5xl md:text-7xl
- Section heading: text-2xl md:text-4xl
- Product name: text-base md:text-lg
- Body: text-sm md:text-base
- Caption/label: text-xs md:text-sm

## Spacing & Layout
- Generous whitespace: section py-20 md:py-28
- Container max-width: max-w-7xl (1280px)
- Grid gaps: gap-6 md:gap-8
- Hairline dividers: border-t border-sand

## Component Styles

### Buttons
- **Primary (accent):** bg-gold text-warm-black, uppercase, tracking-wider, px-8 py-3, hover:bg-gold-light, transition-all duration-300
- **Secondary (outlined):** border border-gold text-gold, uppercase, tracking-wider, px-8 py-3, hover:bg-gold hover:text-warm-black, transition-all duration-300
- **Small/CTA:** Same style, px-6 py-2.5, text-xs

### Cards
- Product cards: bg-cream, subtle shadow on hover, rounded-none (sharp corners for editorial feel)
- Hover: second image fade-in, slight scale on image

### Navigation
- Transparent over hero, solid warm-black on scroll
- Logo: serif, tracking-[0.25em], text-lg
- Links: sans-serif, uppercase, tracking-widest, text-xs

### Inputs
- Border-b border-sand, bg-transparent, focus:border-gold
- Newsletter: full-width input with accent button

## Animations
- Subtle hover transitions: duration-300
- Image crossfade on product hover
- Smooth scroll for navigation
- Cart drawer slide-in from right

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE serif with wide letter-spacing
- Use gold accent sparingly — for CTAs and key highlights only
- Ensure strong contrast on all text (WCAG AA minimum)
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded buttons or cards (keep editorial/sharp)
- Don't use heavy shadows or gradients
- Don't mix too many font weights
- Don't use generic e-commerce patterns (no star-burst badges, no aggressive sale tags)
