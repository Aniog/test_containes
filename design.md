# ARTITECT MACHINERY - Design System

## Brand Overview
ARTITECT MACHINERY is a premium manufacturer of sheet metal folding and double folding machines. The design should convey precision engineering, industrial strength, and modern elegance while remaining approachable and user-friendly.

## Color Palette

### Primary Colors
- **Industrial Navy**: `#1a2744` - Primary brand color, headers, navigation
- **Steel Blue**: `#3b5998` - Accent color, buttons, links
- **Warm Gray**: `#f5f5f5` - Backgrounds, light sections
- **Charcoal**: `#2d2d2d` - Text, dark elements

### Secondary Colors
- **Safety Orange**: `#e87722` - CTAs, highlights, important actions
- **Machine Silver**: `#c0c0c0` - Borders, dividers, subtle accents
- **Clean White**: `#ffffff` - Card backgrounds, content areas

### Usage Rules
- Use Industrial Navy for primary navigation and main headings
- Use Safety Orange sparingly for call-to-action buttons only
- Maintain high contrast for all text (minimum 4.5:1 ratio)
- Avoid light gray text on light backgrounds

## Typography

### Font Family
- **Primary**: Inter (Google Fonts) - Clean, modern, highly readable
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale
- **Hero Title**: text-5xl to text-6xl, font-bold, tracking-tight
- **Section Headings**: text-3xl to text-4xl, font-semibold
- **Subheadings**: text-xl to text-2xl, font-medium
- **Body Text**: text-base, font-normal, leading-relaxed
- **Small Text**: text-sm, font-normal

### Line Heights
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.625)
- Buttons: leading-none (1)

## Spacing System

### Base Unit: 8px
- **xs**: 4px (0.25rem)
- **sm**: 8px (0.5rem)
- **md**: 16px (1rem)
- **lg**: 24px (1.5rem)
- **xl**: 32px (2rem)
- **2xl**: 48px (3rem)
- **3xl**: 64px (4rem)
- **4xl**: 96px (6rem)

### Section Padding
- Mobile: py-12 to py-16
- Tablet: py-16 to py-20
- Desktop: py-20 to py-24

## Components

### Buttons
- **Primary**: bg-industrial-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all
- **Secondary**: bg-white text-industrial-navy border-2 border-industrial-navy px-6 py-3 rounded-lg font-medium hover:bg-industrial-navy hover:text-white transition-all
- **CTA**: bg-safety-orange text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all shadow-lg

### Cards
- Background: white
- Border: 1px solid #e5e7eb
- Border-radius: rounded-xl (12px)
- Shadow: shadow-md
- Padding: p-6 to p-8
- Hover: shadow-lg transition-shadow

### Navigation
- Background: Industrial Navy or white with shadow
- Height: h-16 to h-20
- Logo: font-bold text-xl tracking-wide
- Links: text-gray-700 hover:text-industrial-navy with underline animation

## Layout

### Container
- Max width: max-w-7xl (1280px)
- Padding: px-4 sm:px-6 lg:px-8
- Centered: mx-auto

### Grid System
- Product Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Feature Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Gap: gap-6 to gap-8

## Visual Style

### Shadows
- Subtle: shadow-sm (0 1px 2px rgba(0,0,0,0.05))
- Default: shadow-md (0 4px 6px rgba(0,0,0,0.07))
- Elevated: shadow-lg (0 10px 15px rgba(0,0,0,0.1))
- Hover: shadow-xl (0 20px 25px rgba(0,0,0,0.1))

### Borders
- Default: border-gray-200
- Accent: border-industrial-navy
- Subtle: border-gray-100

### Images
- Use industrial machinery photography
- Rounded corners: rounded-lg
- Subtle shadows for depth
- Hover zoom effect for product images

## Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (sm: to lg:)
- **Desktop**: > 1024px (lg:)

## Do's and Don'ts

### Do's
- Use ample white space for a clean, professional look
- Maintain consistent spacing using the 8px grid
- Use the color palette consistently across all components
- Ensure all text has sufficient contrast
- Use subtle animations and transitions for polish

### Don'ts
- Don't use more than 3 colors in a single section
- Don't use pure black (#000000) - use charcoal (#2d2d2d) instead
- Don't overcrowd sections - keep breathing room
- Don't use decorative elements that distract from content
- Don't mix font families - stick to Inter only

## Accessibility
- All interactive elements must have focus states
- Maintain minimum 4.5:1 contrast ratio for text
- Use semantic HTML elements
- Include alt text for all images
- Ensure keyboard navigation works throughout
