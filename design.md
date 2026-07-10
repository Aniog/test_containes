# Velmora Fine Jewelry - Design Specification

## Visual Identity

### Brand Essence
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry aesthetic.
- **Personality**: Sophisticated, approachable, timeless. NOT loud, NOT discount-looking, NOT generic.

### Color Palette
A warm, sophisticated palette that flatters gold jewelry:

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Warm Black | `#1A1815` | Primary text, backgrounds |
| Secondary | Cream | `#FAF8F5` | Page background, cards |
| Accent | Antique Gold | `#C9A962` | CTAs, highlights, borders |
| Text Primary | Charcoal | `#2C2A27` | Body text |
| Text Secondary | Warm Gray | `#7A756D` | Captions, metadata |
| Border | Hairline | `#E8E4DF` | Dividers, borders |
| White | Pure White | `#FFFFFF` | Cards, overlays |

### Typography
- **Headings**: Cormorant Garamond (serif) - elegant, editorial feel
- **Body/UI**: Inter (sans-serif) - clean, modern readability
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing: 0.15em
- **Price/Accents**: Inter, semi-bold

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Generous whitespace throughout
- Thin hairline dividers (1px, #E8E4DF)

### Motion & Interaction
- Subtle hover transitions: 300ms ease-out
- Product image swap on hover: fade transition
- Soft shadows on cards: `0 4px 20px rgba(26, 24, 21, 0.08)`
- Scroll-triggered fade-in for sections
- Cart drawer slide-in from right

## Component Patterns

### Buttons
- **Primary**: Antique Gold background, warm black text, full-width on mobile
- **Outline**: Transparent with antique gold border, gold text
- States: hover darkens slightly, disabled opacity 0.5

### Cards
- White background, subtle shadow
- Hover: slight lift effect, second image reveals
- Product image 3:4 aspect ratio

### Forms
- Clean input borders (#E8E4DF)
- Focus: antique gold border
- Labels above inputs

### Navigation
- Transparent on hero, solid cream on scroll
- Smooth 200ms transition

## Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Assets
- Product images: 3:4 ratio, warm/neutral backgrounds
- Hero: Full-bleed, editorial photography feel
- UGC: 9:16 vertical format
- Icons: Lucide React, 1.5px stroke
