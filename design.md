# ARTITECT MACHINERY - Design System

## Overview
Elegant industrial design language for a precision machinery manufacturer. Clean, professional, and trustworthy aesthetic that conveys engineering excellence.

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Headings**: Bold, tight tracking, slate-900 color
- **Body**: Regular weight, slate-700 for readability
- **Scale**: 
  - H1: text-4xl md:text-5xl (2.25rem / 3rem)
  - H2: text-3xl md:text-4xl (1.875rem / 2.25rem)
  - H3: text-xl (1.25rem)
  - Body: text-base (1rem)
  - Small: text-sm (0.875rem)

## Color Palette

### Primary Colors
- **Slate 900**: `#0f172a` - Primary text, headings, icons
- **Slate 700**: `#334155` - Secondary text
- **Slate 600**: `#475569` - Muted text
- **Slate 500**: `#64748b` - Placeholder text
- **Slate 400**: `#94a3b8` - Disabled text
- **Slate 300**: `#cbd5e1` - Borders, dividers
- **Slate 200**: `#e2e8f0` - Light backgrounds
- **Slate 100**: `#f1f5f9` - Card backgrounds
- **Slate 50**: `#f8fafc` - Page backgrounds

### Accent Colors
- **White**: `#ffffff` - Cards, buttons, footer
- **Green 600**: `#16a34a` - Success indicators, checkmarks

## Spacing
- **Section padding**: py-20 (5rem)
- **Container max-width**: max-w-7xl (80rem)
- **Container padding**: px-4 sm:px-6 lg:px-8
- **Element gaps**: gap-6 to gap-12
- **Card padding**: p-6 to p-8

## Components

### Buttons
- **Primary**: Dark background (slate-900), white text, rounded-md, px-6 py-3
- **Secondary**: White background, border, slate-900 text, hover:bg-slate-50
- **Hover states**: Subtle color transitions (150-300ms)

### Cards
- White background with subtle border (border-slate-200)
- Rounded corners: rounded-2xl (1rem)
- Shadow: shadow-sm default, shadow-lg on hover
- Transition: duration-300 for hover effects

### Navigation
- Sticky header with backdrop blur
- White background with 95% opacity
- Border bottom: border-slate-200
- Height: h-16 (4rem)

### Forms
- Input fields: rounded-lg, border-slate-300, focus:ring-2 focus:ring-slate-900
- Labels: text-sm font-medium text-slate-700
- Error states: red-50 background, red-200 border, red-600 text

## Layout
- **Container**: Centered with consistent side padding
- **Grid**: Responsive 1/2/3/4 column layouts
- **Max content width**: 7xl (80rem / 1280px)
- **Section spacing**: Generous vertical rhythm (py-20)

## Visual Style Guidelines

### Do's
- Use slate color family for a professional, industrial feel
- Maintain generous white space for elegance
- Use subtle shadows and borders for depth
- Apply smooth transitions (150-300ms) for interactions
- Keep typography clean and well-spaced
- Use rounded corners (rounded-lg to rounded-2xl) for modern feel

### Don'ts
- Avoid harsh colors or high saturation
- Don't use pure black (#000) - use slate-900 instead
- Avoid cluttered layouts - embrace whitespace
- Don't mix multiple font families
- Avoid jarring animations or transitions
- Don't use thin borders or weak contrast

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Stack layouts vertically on mobile
- Expand to multi-column on larger screens
- Maintain readable font sizes at all viewports

## Imagery
- Use stock images for machinery/industrial contexts
- Aspect ratios: 4x3 for cards, 16x9 for banners, 1x1 for portraits
- Subtle zoom effect on hover (scale-105)
- Rounded containers for images

## Icons
- Lucide React icons
- Consistent sizing (h-4 w-4 to h-8 w-8)
- Slate-900 color for primary icons
- White color on dark backgrounds
