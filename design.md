# Velmora Fine Jewelry - Design System

## Brand Identity
- **Brand Name**: VELMORA Fine Jewelry
- **Mood**: Quiet luxury, warm, editorial
- **Positioning**: Premium-but-accessible demi-fine jewelry

## Color Palette

### Primary Colors
- **Deep Base**: `#1a1a1a` (near-black with warm undertones)
- **Warm Gold Accent**: `#c9a96e` (sophisticated gold, not brassy)
- **Cream Background**: `#faf8f5` (warm off-white)

### Secondary Colors
- **Charcoal**: `#4a4a4a` (for secondary text)
- **Light Gold**: `#e8d5b7` (subtle accents, borders)
- **White**: `#ffffff`
- **Soft Gray**: `#f5f5f5` (alternate background)

### Text Colors
- **Primary Text**: `#1a1a1a`
- **Secondary Text**: `#4a4a4a`
- **Muted Text**: `#8a8a8a`

## Typography

### Headings (Serif)
- **Font**: Cormorant Garamond (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 600 (semi-bold)
- **Letter Spacing**: `0.02em` for headings
- **Product Names**: UPPERCASE, wide letter-spacing `0.15em`

### Body (Sans-serif)
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500
- **Letter Spacing**: `0.01em`

### Font Sizes
- **H1**: `3.5rem` (56px) - Hero headline
- **H2**: `2.5rem` (40px) - Section headings
- **H3**: `1.875rem` (30px) - Product names
- **Body**: `1rem` (16px)
- **Small**: `0.875rem` (14px)

## Spacing
- **Section Padding**: `120px` desktop, `80px` tablet, `60px` mobile
- **Component Spacing**: `40px` between elements
- **Grid Gap**: `24px` to `32px`

## Borders & Dividers
- **Hairline**: `1px solid #e8d5b7` (light gold)
- **Button Border**: `1px solid #c9a96e`
- **Border Radius**: 
  - Buttons: `2px` (sharp, premium feel)
  - Cards: `4px`
  - Inputs: `2px`

## Buttons

### Primary Button (Accent)
- **Background**: `#c9a96e`
- **Text**: `#ffffff`
- **Hover**: Darken background by 10%
- **Padding**: `16px 40px`
- **Font**: Inter, 500, 0.05em letter-spacing

### Secondary Button (Outlined)
- **Border**: `1px solid #c9a96e`
- **Text**: `#c9a96e`
- **Background**: Transparent
- **Hover**: Fill with `#c9a96e`, text becomes `#ffffff`

## Shadows
- **Card Hover**: `0 8px 24px rgba(0,0,0,0.08)`
- **Button Hover**: `0 4px 12px rgba(201, 169, 110, 0.3)`
- **Drawer**: `0 0 40px rgba(0,0,0,0.15)`

## Transitions
- **Duration**: `300ms`
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **Properties**: opacity, transform, background-color, box-shadow

## Layout
- **Max Width**: `1400px` centered
- **Content Padding**: `40px` desktop, `24px` tablet, `16px` mobile
- **Grid**: CSS Grid with auto-fill, minmax(280px, 1fr)

## Product Cards
- **Image Ratio**: 1:1 (square) or 3:4 (portrait)
- **Hover**: Reveal second image, show "Add to Cart" button
- **Title**: UppERCASE, 0.15em letter-spacing
- **Price**: Inter, 400, no decimal for whole numbers

## Navigation
- **Height**: `80px` (scroll state), `100px` (transparent state)
- **Background**: Transparent (initial), `#ffffff` (scrolled)
- **Logo**: Serif, uppercase, letter-spacing `0.2em`
- **Links**: Inter, 400, 0.08em letter-spacing
