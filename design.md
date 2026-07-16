# Velmora Fine Jewelry — Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
- **Target**: Women 25–45, gifting and self-purchase, $30–$120 price point.

## Color Palette

| Token              | Hex       | Usage                                    |
|--------------------|-----------|------------------------------------------|
| `warm-black`       | `#1A1714` | Primary background (deep warm black)     |
| `warm-charcoal`    | `#2A2520` | Card backgrounds, elevated surfaces      |
| `warm-cream`       | `#F5F0E8` | Light backgrounds, text on dark          |
| `ivory`            | `#FAF7F2` | Page background (light mode)             |
| `gold`             | `#C9A96E` | Primary accent, CTAs, highlights         |
| `gold-light`       | `#D4BA8A` | Hover states, secondary gold             |
| `gold-dark`        | `#A88B52` | Active/pressed gold                      |
| `warm-gray`        | `#8A8279` | Muted text, secondary info               |
| `warm-gray-light`  | `#B5AFA7` | Placeholders, disabled states            |
| `divider`          | `#3A3530` | Hairline dividers on dark                |
| `divider-light`    | `#E8E2D8` | Hairline dividers on light               |

**Primary direction**: Dark editorial — warm-black base with gold accents and cream text. Light pages (shop, product) use ivory base with warm-charcoal text.

## Typography

- **Headings**: Cormorant Garamond (serif), weights 400/500/600
  - Product names: UPPERCASE, letter-spacing 0.15em
  - Section headings: Normal case, letter-spacing 0.02em
- **Body / UI**: Inter (sans-serif), weights 300/400/500/600
  - Buttons: 500 weight, letter-spacing 0.08em, uppercase
  - Body text: 400 weight, letter-spacing normal

### Scale
- Hero headline: text-5xl md:text-7xl
- Section heading: text-3xl md:text-4xl
- Product name: text-lg md:text-xl
- Body: text-sm md:text-base
- Caption/label: text-xs

## Spacing & Layout
- Generous whitespace: section py-20 md:py-28
- Container max-width: 1280px, px-4 md:px-8
- Grid gaps: gap-6 md:gap-8
- Hairline dividers: h-px bg-divider or bg-divider-light

## Components

### Buttons
- **Primary (accent)**: bg-gold text-warm-black, hover:bg-gold-light, uppercase, tracking-wider, px-8 py-3, text-sm font-medium
- **Secondary (outlined)**: border border-gold text-gold, hover:bg-gold hover:text-warm-black, same sizing
- **Ghost**: text-gold underline, hover:text-gold-light

### Cards
- Product cards: bg-warm-charcoal (dark) or bg-white (light), overflow-hidden, group hover effects
- Image hover: scale-105 transition-transform duration-700
- Subtle shadow on hover: shadow-lg shadow-black/10

### Navigation
- Sticky, transparent over hero → solid bg on scroll
- Logo: serif, text-xl tracking-[0.2em]
- Links: sans-serif, text-sm tracking-wider uppercase

### Inputs
- Clean, minimal: border-b border-warm-gray, focus:border-gold
- Newsletter: bg-transparent with gold accent button

## Animations
- Subtle and smooth: transition-all duration-300 or duration-500
- Hover lifts: translate-y-[-2px]
- Image reveals: opacity 0→1 with slight scale
- No bouncy or playful animations

## Do's
- Use generous whitespace between sections
- Keep product names in uppercase serif with wide tracking
- Use gold sparingly as accent — not as large background fills
- Ensure strong contrast: cream on warm-black, charcoal on ivory
- Use thin hairline dividers between sections

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded/bubbly UI elements (keep corners minimal or sharp)
- Don't use heavy shadows or thick borders
- Don't mix warm and cool tones
- Don't use generic e-commerce patterns (badges, countdown timers, aggressive CTAs)
