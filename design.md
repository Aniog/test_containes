# Velmora Fine Jewelry - Design System

## Mood & Concept
Quiet luxury, warm, editorial. Premium demi-fine jewelry. 
Not loud, not discount-looking, not generic e-commerce.

## Color Palette
- **Background (`velmora-bg`)**: `#FAF9F6` - Soft warm neutral for the main page background. Gives a creamy, elegant feel. Example: `bg-velmora-bg`
- **Primary Text (`velmora-dark`)**: `#2B2B2B` - Deep charcoal/brown instead of pure black for softer contrast. Example: `text-velmora-dark`
- **Accent/Brand Color (`velmora-accent`)**: `#8C7456` - A warm metallic/olive-gold tone. Used for buttons, borders, small highlights. Example: `bg-velmora-accent`, `text-velmora-accent`
- **Accent Hover (`velmora-accent-hover`)**: `#7A6448` - Slightly darker accent for hover states.

## Typography
- **Headings & Product Names (`font-serif`)**: Cormorant Garamond. Elegant, high contrast strokes. Example: `font-serif tracking-wide`
- **Body & UI (`font-sans`)**: Manrope. Clean, modern, legible. Example: `font-sans text-sm`
- **Styling Rules**: Product names should be uppercase with wide letter-spacing (`uppercase tracking-[0.15em]`).

## Layout & Spacing
- **Whitespace**: Generous. Use `py-16 md:py-24` for section padding.
- **Borders**: Thin hairline dividers. Use `border-velmora-accent/20` or similar subtle bounds.
- **Shadows**: Soft, minimal shadows only where necessary (like sticky nav or dropdowns).

## Buttons
- **Primary**: Solid accent block, uppercase serif or sans-serif, wide tracking.
  `px-8 py-3 bg-velmora-accent text-white uppercase tracking-widest text-sm hover:bg-velmora-accent-hover transition-colors`
- **Secondary/Outline**: Outline with accent color.
  `px-8 py-3 border border-velmora-accent text-velmora-accent uppercase tracking-widest text-sm hover:bg-velmora-accent hover:text-white transition-colors`

## Effects
- **Hover**: Subtle opacity changes or soft translations. Avoid jarring movements. Wait `transition-all duration-300`.