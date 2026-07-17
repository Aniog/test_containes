# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base background**: `#0a0a0a` (near-black) — deep refined base that makes gold jewelry glow
- **Surface / cards**: `#141414` (dark charcoal)
- **Surface elevated**: `#1a1a1a`
- **Border / dividers**: `#2a2a2a` (thin, hairline)
- **Primary text**: `#f5f0eb` (warm white)
- **Secondary text**: `#a09890` (warm taupe)
- **Accent / gold**: `#c9a96c` (warm, refined gold)
- **Accent hover**: `#d4b87a` (lighter gold)
- **Subtle accent**: `#a08050` (muted gold)
- **Rating stars**: `#c9a96c`
- **Error / sale**: `#b85c4a` (muted rust)

## Typography
- **Headings (serif)**: `Cormorant Garamond` — product names, hero, section titles
- **Body (sans-serif)**: `Inter` — body text, UI, buttons
- **Product names**: UPPERCASE, tracking-wide (tracking-[0.08em]), serif
- **Font sizes**: Hero heading: text-6xl md:text-7xl; Section titles: text-3xl md:text-4xl; Product names: text-sm; Body: text-sm

## Spacing
- Generous whitespace between sections (py-16 md:py-24)
- Section inner padding: px-4 md:px-8 lg:px-12
- Max content width: max-w-7xl mx-auto

## Borders & Dividers
- Thin hairline borders: border border-[#2a2a2a]
- Bottom dividers between sections: border-b border-[#2a2a2a]
- Subtle dividers between elements

## Buttons
- Primary: solid gold bg-[#c9a96c] text-[#0a0a0a] font-medium, hover:bg-[#d4b87a]
- Secondary: transparent border border-[#c9a96c] text-[#c9a96c] hover:bg-[#c9a96c]/10
- Text: uppercase, tracking-wider, text-xs font-medium, px-8 py-3
- Smooth transition: transition-all duration-300

## Cards & Hover Effects
- Card bg: #141414, border #2a2a2a
- Hover: border lightens to #3a3a3a, subtle shadow-lg
- Image hover: scale-105 transition duration-500
- Product card: group with second image reveal on hover

## Navigation
- Sticky, transparent on hero, solid bg-[#0a0a0a]/95 backdrop-blur on scroll
- Logo: serif, uppercase, tracking-[0.15em]
- Link color: text-[#f5f0eb] hover:text-[#c9a96c]
- Thin bottom border on scroll

## Animations
- Subtle fade-in-up on scroll (opacity-0 translate-y-4 -> opacity-100 translate-y-0)
- Image zoom on hover (scale-105)
- Button hover: bg shift
- Cart drawer: slide in from right with transition-all duration-300
- 0.3s ease-out transitions on interactive elements