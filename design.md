# ARTITECT MACHINERY - Visual Design System

## Brand Overview
ARTITECT MACHINERY specializes in premium sheet metal folding equipment. The design should convey precision engineering, industrial excellence, and professional reliability while remaining approachable.

## Color Palette

### Primary Colors
- **Deep Charcoal** (#1a252f) - Primary text, headers, navigation
- **Steel Blue** (#2c5f7c) - Accent color, CTAs, highlights
- **Warm Silver** (#e8ebed) - Backgrounds, subtle dividers

### Secondary Colors
- **Industrial Gray** (#4a5568) - Body text, secondary information
- **Pure White** (#ffffff) - Cards, content areas, contrast
- **Accent Copper** (#b87333) - Subtle highlights, premium touches

## Typography

### Font Family
- Primary: Inter (system-ui fallback)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale
- Hero Title: 3.5rem (56px), line-height 1.1, font-weight 700
- Section Title: 2.5rem (40px), line-height 1.2, font-weight 600
- Subsection Title: 1.5rem (24px), line-height 1.3, font-weight 600
- Body Text: 1rem (16px), line-height 1.7, font-weight 400
- Small Text: 0.875rem (14px), line-height 1.6, font-weight 400

## Layout & Spacing

### Container
- Max width: 1280px
- Horizontal padding: 1.5rem (mobile), 2rem (desktop)
- Centered content

### Spacing Scale (using Tailwind)
- Section padding: py-16 md:py-24
- Component gap: gap-6 md:gap-8
- Card padding: p-6 md:p-8
- Element spacing: space-y-4

## Component Styles

### Navigation
- Fixed position at top
- Background: rgba(255,255,255,0.95) with blur
- Border bottom: 1px solid #e8ebed
- Logo: Bold, uppercase, tracking-widest
- Links: Medium weight, hover to Steel Blue

### Buttons
- Primary: Deep Charcoal bg, white text, rounded-lg, px-8 py-3
- Secondary: Transparent bg, Deep Charcoal border, hover fill
- Hover: Smooth transition, subtle scale (1.02)

### Cards
- Background: Pure White
- Border: 1px solid #e8ebed
- Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))
- Hover: Lift effect with shadow increase
- Border radius: 12px (rounded-xl)

### Hero Section
- Full viewport height (min-h-screen)
- Centered content
- Subtle gradient overlay
- Large, impactful typography

### Product Cards
- Image placeholder area with aspect ratio
- Title in Deep Charcoal
- Description in Industrial Gray
- Key specs in compact list
- CTA button at bottom

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked)
- Tablet: 768px - 1024px (2 columns where appropriate)
- Desktop: > 1024px (full multi-column layouts)

## Visual Hierarchy
1. Deep Charcoal for all primary headings
2. Steel Blue for interactive elements and accents
3. Industrial Gray for supporting text
4. Consistent left alignment for text blocks
5. Generous whitespace for breathing room

## Do's
- Use generous padding and margins
- Maintain consistent icon sizing (24px for nav, 32px for features)
- Apply subtle transitions (200-300ms)
- Keep text concise and scannable
- Use Steel Blue sparingly for emphasis

## Don'ts
- Avoid overly bright or saturated colors
- Don't use decorative elements that feel cheap
- Avoid cramped layouts
- Don't use more than 2 accent colors
- Avoid text that's too small to read comfortably