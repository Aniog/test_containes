# Artitect Machinery - Design System

## Overview
Elegant, professional, and user-friendly design for an industrial machinery brand. The aesthetic balances technical credibility with approachable clarity.

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking for authority
- **Body**: Regular weight, comfortable line height for readability
- **Scale**: Use Tailwind's default type scale (text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl, text-6xl)

## Color Palette
- **Primary**: Blue-900 (#1e3a8a) - Trust, professionalism, industrial strength
- **Primary Light**: Blue-100 (#dbeafe) - Accents, highlights
- **Secondary**: Gray-900 (#111827) - Text, strong contrasts
- **Neutral**: Gray-50 through Gray-100 - Backgrounds, cards
- **Text Primary**: Gray-900
- **Text Secondary**: Gray-600
- **Text Muted**: Gray-500
- **Success**: Green-600
- **Error**: Red-600
- **White**: #ffffff

## Spacing
- Use Tailwind's spacing scale (4, 6, 8, 12, 16, 20, 24, 32, 48, 64)
- Generous whitespace to convey premium quality
- Consistent padding in cards and sections

## Components

### Buttons
- **Primary**: Blue-900 background, white text, rounded-lg, hover: Blue-800
- **Secondary**: White background, blue-900 text, border-2 border-white, hover: white background with blue-900 text
- **Sizes**: px-6 py-3 (default), px-8 py-4 (large)
- **States**: disabled:opacity-50, transition-all duration-200

### Cards
- White background, rounded-xl, shadow-md
- Hover: shadow-xl transition
- Border: border-gray-200 for subtle definition
- Padding: p-6 to p-8

### Navigation
- Sticky header, white background, border-b border-gray-200
- Logo: Factory icon + brand name
- Links: text-sm font-medium, hover:text-blue-900
- Active state: text-blue-900 with border-b-2 border-blue-900

### Forms
- Input fields: border border-gray-300, rounded-lg, focus:ring-2 focus:ring-blue-500
- Labels: text-sm font-medium text-gray-700
- Error states: red-50 background, red-200 border, red-800 text

## Layout
- Max width container: max-w-7xl
- Section padding: py-20
- Grid gaps: gap-8 (default), gap-12 (large)
- Responsive breakpoints: sm, md, lg

## Visual Style Rules
- Clean, minimal design with ample whitespace
- Subtle shadows for depth (shadow-md, shadow-lg, shadow-xl)
- Rounded corners (rounded-lg, rounded-xl) for modern feel
- Gradient backgrounds for hero sections (from-gray-900 via-blue-900 to-gray-900)
- Icons from Lucide React for consistency
- No magic values - use Tailwind classes exclusively
- All text must be clearly readable against backgrounds

## Do's
- Use blue-900 as the primary brand color
- Maintain generous whitespace
- Use consistent spacing scale
- Apply hover states for interactivity
- Keep typography hierarchy clear

## Don'ts
- Don't use low-contrast text
- Don't overcrowd layouts
- Don't mix too many colors
- Don't use inline styles
- Don't hardcode arbitrary values