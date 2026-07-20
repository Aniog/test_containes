# Velmora Fine Jewelry - Design System

## Typography
- **Headings & Product Names**: Playfair Display (Serif) - Elegant, premium. Product names should be UPPERCASE with wide letter-spacing (`tracking-widest`).
- **Body & UI**: Inter (Sans-Serif) - Clean, accessible.

## Colors (Warm Editorial / Quiet Luxury)
- **Background**: Soft cream/warm white (`#faf9f6`)
- **Surface/Card**: Pure white or very light warm beige (`#ffffff` or `#f2efeb`)
- **Primary Text**: Deep espresso/charcoal (`#1a1918`)
- **Secondary Text (Muted)**: Soft taupe/gray (`#73706c`)
- **Accent (Buttons, Highlights)**: Warm subtle gold (`#c2a77a`) - metallic feel
- **Accent Hover**: Slightly darker gold/bronze (`#a38a60`)

## Layout & Effects
- **Whitespace**: Generous padding and margins. Let elements breathe.
- **Imagery**: Large, editorial focus.
- **Dividers**: Thin hairline dividers (`border-gray-200` or custom soft color).
- **Shadows**: Soft, luxurious drop shadows on hover for cards.
- **Buttons**: Solid accent color or outlined accent. Premium feel.

## Tailwind Configuration Details
- Extend fonts: `font-serif` -> 'Playfair Display', `font-sans` -> 'Inter'
- Custom colors:
  - `brand-light`: `#faf9f6`
  - `brand-dark`: `#1a1918`
  - `brand-accent`: `#c2a77a`
  - `brand-accent-hover`: `#a38a60`
  - `brand-muted`: `#73706c`
  - `brand-surface`: `#f2efeb`