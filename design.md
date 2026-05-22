# Handmade Burgers - Design System

## Brand Identity
- **Name**: Burger Craft Co.
- **Concept**: Premium handmade burgers with artisanal quality
- **Tone**: Warm, inviting, authentic, premium yet approachable

## Color Palette
- **Primary Orange**: `#FF6B35` (burger-orange) - Main brand color, warm and appetizing
- **Dark Brown**: `#8B4513` (burger-brown) - Secondary color, earthy and rich
- **Cream**: `#FFF8DC` (burger-cream) - Background accent, warm neutral
- **Dark Gray**: `#2D2D2D` (burger-dark) - Text and contrast
- **Light Gray**: `#F5F5F5` (burger-light) - Light backgrounds
- **Success Green**: `#22C55E` - For success states
- **Warning Red**: `#EF4444` - For alerts and warnings

## Typography
- **Primary Font**: Inter (Google Fonts) - Clean, modern, highly readable
- **Headings**: Font weights 600-800, larger sizes for impact
- **Body Text**: Font weight 400-500, comfortable reading sizes
- **Accent Text**: Font weight 300 for subtle elements

## Component Styles

### Buttons
- **Primary**: `bg-burger-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Secondary**: `bg-burger-brown hover:bg-amber-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors`
- **Outline**: `border-2 border-burger-orange text-burger-orange hover:bg-burger-orange hover:text-white px-6 py-3 rounded-lg transition-all`

### Cards
- **Product Cards**: `bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100`
- **Info Cards**: `bg-burger-cream rounded-lg p-6 border border-orange-100`

### Layout
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Spacing**: `py-16 lg:py-24`
- **Grid**: Use CSS Grid and Flexbox for responsive layouts

### Shadows
- **Card Shadow**: `shadow-lg hover:shadow-xl`
- **Button Shadow**: `shadow-md hover:shadow-lg`
- **Hero Shadow**: `shadow-2xl`

## Visual Style Guidelines

### Do's
- Use warm, appetizing colors that evoke comfort food
- Maintain consistent spacing with Tailwind's spacing scale
- Use rounded corners (rounded-lg, rounded-xl) for a friendly feel
- Apply smooth transitions for interactive elements
- Use high-quality food photography when available
- Maintain good contrast ratios for accessibility

### Don'ts
- Don't use cold colors (blues, purples) as primary colors
- Don't use harsh, angular designs
- Don't overcrowd layouts - maintain generous white space
- Don't use more than 3 font weights in a single component
- Don't ignore mobile responsiveness

## Responsive Breakpoints
- **Mobile**: Default styles, single column layouts
- **Tablet (md:)**: 2-column layouts, larger text
- **Desktop (lg:)**: 3-4 column layouts, full navigation
- **Large (xl:)**: Maximum content width, enhanced spacing

## Accessibility
- Maintain WCAG 2.1 AA contrast ratios
- Use semantic HTML elements
- Include proper ARIA labels
- Ensure keyboard navigation works
- Provide alt text for all images