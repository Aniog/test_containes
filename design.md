# Velmora Fine Jewelry - Design System

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial
- **Target**: Women 25-45, gifting and self-purchase
- **Price Point**: Premium-but-accessible ($30-$120)

## Color Palette

### Primary Colors
- **Deep Base**: `#1a1a1a` (near-black for hero backgrounds, footer)
- **Warm Gold Accent**: `#c9a96e` (buttons, links, hover states, jewelry accent)
- **Cream Background**: `#faf8f5` (warm off-white, main background)
- **Charcoal Text**: `#2d2d2d` (primary text)
- **Muted Gold**: `#b8956a` (secondary accent, thin dividers)

### Secondary Colors
- **Soft White**: `#ffffff` (cards, overlays)
- **Warm Gray**: `#8a8580` (secondary text, captions)
- **Light Cream**: `#f5f0eb` (alternate section backgrounds)
- **Border Light**: `#e8e2db` (subtle dividers)

## Typography

### Headings (Serif - Elegant)
- **Font**: Cormorant Garamond (Google Fonts)
- **Weights**: 300 (light), 400 (regular), 600 (semibold)
- **Product Names**: UPPERCASE, wide letter-spacing `tracking-[0.2em]`
- **Sizes**:
  - H1: `text-5xl md:text-7xl` (hero headline)
  - H2: `text-4xl md:text-5xl` (section titles)
  - H3: `text-2xl md:text-3xl` (product names)
  - H4: `text-xl` (subsections)

### Body (Sans-serif - Clean)
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500
- **Sizes**:
  - Body: `text-base` (16px)
  - Small: `text-sm` (14px)
  - Caption: `text-xs` (12px)

## Spacing & Layout
- **Whitespace**: Generous padding `py-20 md:py-32`
- **Section Spacing**: `py-16 md:py-24`
- **Container**: `max-w-7xl mx-auto px-6 md:px-8`
- **Grid Gap**: `gap-6 md:gap-8`

## Components

### Buttons
- **Primary**: Solid gold `bg-[#c9a96e] hover:bg-[#b8956a] text-white`
- **Secondary**: Outlined `border-2 border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white`
- **Text**: `text-[#c9a96e] hover:text-[#b8956a] underline-offset-4 hover:underline`
- **Padding**: `px-8 py-3 md:px-10 md:py-4`
- **Transitions**: `transition-all duration-300`

### Product Cards
- **Container**: `group relative overflow-hidden bg-white`
- **Image**: Aspect ratio 1:1 or 4:5, object-cover
- **Hover**: Reveal second image, show "Add to Cart" button overlay
- **Title**: Uppercase, tracking-wide, serif
- **Price**: `text-[#8a8580] text-sm`

### Dividers
- **Hairline**: `h-px bg-[#e8e2db]` or `border-t border-[#e8e2db]`
- **Accent**: `h-px bg-[#c9a96e]` (thin gold line)

## Imagery
- **Style**: Warm, editorial, close-up jewelry photography
- **Background**: Dark/neutral to flatter gold jewelry
- **Overlay**: Soft dark gradient for text readability
- **Placeholder**: Elegant SVG patterns or solid cream background

## Animations & Transitions
- **Hover**: `transition-all duration-300 ease-out`
- **Fade In**: `opacity-0 translate-y-4` to `opacity-100 translate-y-0`
- **Image Hover**: `scale-105` on image, overlay fade
- **Button Hover**: Subtle lift `hover:-translate-y-0.5`

## Accessibility
- **Contrast**: Ensure 4.5:1 minimum for text on backgrounds
- **Focus**: `focus:outline-none focus:ring-2 focus:ring-[#c9a96e]`
- **Alt Text**: Descriptive for all product images

## Do's
✓ Use generous whitespace
✓ Keep color palette consistent
✓ Uppercase product names with wide spacing
✓ Thin, elegant dividers
✓ Warm gold as primary accent
✓ Serif for elegance, sans-serif for readability

## Don'ts
✗ Avoid bright/loud colors
✗ No heavy drop shadows
✗ Don't crowd elements
✗ Avoid generic e-commerce patterns
✗ No discount/badge aesthetics
