# Velmora Fine Jewelry — Design System

## Color Palette

- **Cream** `#FAF7F2` — Primary background, warm and inviting
- **Cream Dark** `#F5F0E8` — Secondary backgrounds, cards, subtle sections
- **Charcoal** `#1C1917` — Primary text, dark sections, footer
- **Charcoal Soft** `#292524` — Slightly lighter dark for hover states
- **Gold** `#C9A96E` — Primary accent, CTAs, highlights, hover states
- **Gold Light** `#D4BA8A` — Hover on gold elements
- **Gold Dark** `#A68A55` — Active/pressed gold states
- **Stone** `#78716C` — Secondary text, captions, muted content
- **Stone Light** `#A8A29E` — Placeholders, disabled states
- **Border** `#E7E5E4` — Hairline dividers, card borders

## Typography

- **Headings**: Cormorant Garamond, 300–600 weight. Elegant, editorial feel.
  - H1: 48–64px, weight 400
  - H2: 36–48px, weight 400
  - H3: 24–32px, weight 500
  - Product names: uppercase, letter-spacing 0.15em, weight 500
- **Body**: Inter, 300–600 weight. Clean, modern, readable.
  - Body: 16px, weight 400, line-height 1.6
  - Small/caption: 14px, weight 400
  - UI/labels: 12–14px, weight 500, uppercase with letter-spacing

## Spacing

- Generous whitespace: sections have 80–120px vertical padding
- Content max-width: 1280px centered
- Card gaps: 24px
- Hairline dividers: 1px solid `#E7E5E4`

## Components

### Buttons
- **Primary (solid)**: bg-gold, text-charcoal, px-8 py-3, uppercase tracking-wide, hover:bg-gold-light, transition 300ms
- **Secondary (outlined)**: border-charcoal, text-charcoal, px-8 py-3, uppercase tracking-wide, hover:bg-charcoal hover:text-cream, transition 300ms
- **Ghost**: text-charcoal, underline offset-4, hover:text-gold

### Cards
- Product cards: no border-radius, subtle shadow on hover, image swap on hover
- Clean, minimal — let the product imagery speak

### Inputs
- border-b hairline, no border-radius, bg-transparent
- Focus: border-gold, ring-0

## Animations
- All transitions: 300–400ms ease
- Hover image swap: opacity crossfade 400ms
- Nav scroll: background transition 300ms
- Cart drawer: slide-in from right 300ms

## Images
- Use `data-strk-img` system for all product and editorial images
- Warm gold jewelry on dark/neutral backgrounds
- Editorial, soft-lit, high-end feel

## Responsive
- Mobile-first: single column → grid at md and lg
- Nav collapses to hamburger on mobile
- Product grid: 2 cols mobile, 3 cols tablet, 4–5 cols desktop
