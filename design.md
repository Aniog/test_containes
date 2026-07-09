# MicroCosmos Design System

## Theme Overview
MicroCosmos is a visually rich, immersive website exploring the microscopic universe. The design blends cosmic and microscopic aesthetics - deep space colors meet bioluminescent organisms.

## Color Palette

### Primary Colors
- **Cosmos Deep**: `#0a0a1a` - Main background (near-black with blue undertone)
- **Cosmos Medium**: `#1a1a3e` - Card/section backgrounds
- **Cosmos Light**: `#2d2d5e` - Hover states, borders

### Accent Colors
- **Micro Teal**: `#20c997` - Primary accent, CTAs, highlights
- **Micro Teal Light**: `#63e6be` - Hover states
- **Nebula Pink**: `#eb2f96` - Secondary accent, decorative elements
- **Nebula Pink Light**: `#ff85c0` - Hover states

### Text Colors
- **Primary Text**: `#e2e8f0` - Main body text (light gray)
- **Secondary Text**: `#94a3b8` - Descriptions, captions
- **Heading Text**: `#ffffff` - Headings (pure white)

## Typography

### Font Families
- **Headings**: Space Grotesk - Modern, geometric sans-serif
- **Body**: Inter - Clean, readable sans-serif

### Font Sizes
- Hero Title: 4rem (mobile: 2.5rem)
- Section Title: 2.5rem (mobile: 1.75rem)
- Card Title: 1.25rem
- Body Text: 1rem
- Small Text: 0.875rem

## Layout

### Spacing
- Section Padding: 6rem vertical (mobile: 3rem)
- Card Padding: 2rem
- Component Gap: 1.5rem

### Grid System
- Desktop: 3-column grid for image galleries
- Tablet: 2-column grid
- Mobile: Single column with full-width cards

## Visual Effects

### Glass Morphism
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.1);
```

### Animations
- Float: Subtle vertical movement (6s ease-in-out)
- Fade In Up: Elements appearing from below (0.8s ease-out)
- Pulse Glow: Breathing effect for accents (3s ease-in-out)

### Image Treatments
- Rounded corners: 0.75rem (12px)
- Hover scale: 1.05 with smooth transition
- Overlay gradient: Dark bottom for text readability

## Component Styles

### Cards
- Glass background with subtle border
- Hover: slight lift and glow effect
- Image: rounded top corners, object-fit cover

### Buttons
- Primary: Micro Teal background, white text
- Secondary: Transparent with border
- Hover: Slight brightness increase

### Navigation
- Fixed top, glass background
- Semi-transparent with backdrop blur
- Smooth scroll to sections

## Do's
- Use stock images extensively with data-strk-img
- Apply glass morphism for depth
- Use gradient overlays on images
- Keep text readable with proper contrast
- Use animations sparingly for emphasis

## Don'ts
- Don't use pure black (#000) - use cosmos deep instead
- Don't overload animations - keep it subtle
- Don't use low-contrast text on dark backgrounds
- Don't use more than 3 accent colors per section
