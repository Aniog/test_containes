# ARTITECT MACHINERY Design System

## Brand Overview
ARTITECT MACHINERY is a premium industrial machinery manufacturer specializing in sheet metal folding solutions. The design should convey precision engineering, reliability, and modern industrial elegance.

## Color Palette

### Primary Colors
- **Industrial Navy**: `#1a2744` - Primary brand color, headers, navigation
- **Steel Blue**: `#3b5998` - Accent color, buttons, links
- **Machinery Orange**: `#e85d04` - CTA buttons, highlights, important elements
- **Light Steel**: `#f5f7fa` - Backgrounds, cards, sections

### Neutral Colors
- **Dark Gray**: `#2d3748` - Body text
- **Medium Gray**: `#718096` - Secondary text
- **Light Gray**: `#e2e8f0` - Borders, dividers
- **White**: `#ffffff` - Clean backgrounds

### Usage Rules
- Use Industrial Navy for primary navigation, main headings, and footer
- Use Machinery Orange sparingly for CTAs and key actions only
- Maintain high contrast for all text (minimum 4.5:1 ratio)
- Never use light text on light backgrounds

## Typography

### Font Family
- **Primary**: Inter (Google Fonts) - Clean, modern, highly readable
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Type Scale
- **Hero Title**: `text-5xl md:text-6xl lg:text-7xl font-bold`
- **Section Title**: `text-3xl md:text-4xl font-semibold`
- **Card Title**: `text-xl md:text-2xl font-semibold`
- **Body**: `text-base md:text-lg`
- **Small**: `text-sm`
- **Caption**: `text-xs`

### Line Heights
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)
- Buttons: `leading-none` (1)

## Spacing System

### Base Unit: 8px
- **xs**: 4px (0.5rem)
- **sm**: 8px (1rem)
- **md**: 16px (2rem)
- **lg**: 24px (3rem)
- **xl**: 32px (4rem)
- **2xl**: 48px (6rem)
- **3xl**: 64px (8rem)

### Component Spacing
- Section padding: `py-16 md:py-24 lg:py-32`
- Card padding: `p-6 md:p-8`
- Button padding: `px-6 py-3`
- Grid gap: `gap-6 md:gap-8`

## Layout

### Container
- Max width: `max-w-7xl` (1280px)
- Padding: `px-4 md:px-6 lg:px-8`
- Centered: `mx-auto`

### Grid System
- Use Tailwind's grid utilities
- Product grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Feature grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

## Components

### Buttons
- **Primary**: Industrial Navy background, white text, hover to Steel Blue
- **Secondary**: White background, Industrial Navy border, Industrial Navy text
- **CTA**: Machinery Orange background, white text, hover to darker orange
- Rounded: `rounded-lg` (8px)
- Shadow: `shadow-md hover:shadow-lg`
- Transition: `transition-all duration-200`

### Cards
- Background: White
- Border: `border border-gray-200`
- Shadow: `shadow-sm hover:shadow-md`
- Rounded: `rounded-xl` (12px)
- Hover: `hover:-translate-y-1 transition-transform duration-200`

### Navigation
- Background: Industrial Navy with slight transparency
- Height: `h-16 md:h-20`
- Logo: White text, bold
- Links: White text, hover to Machinery Orange
- Mobile: Hamburger menu with slide-in drawer

## Visual Style

### Do's
- Use clean, ample white space
- Apply subtle shadows for depth
- Use rounded corners (8-12px) for modern feel
- Include subtle hover animations
- Use high-quality imagery
- Maintain consistent spacing

### Don'ts
- Don't use cluttered layouts
- Don't use low-contrast text
- Don't mix more than 3 colors in one section
- Don't use harsh shadows or borders
- Don't overcrowd sections
- Don't use decorative elements that distract from content

## Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large**: `xl:` (1280px+)

## Imagery
- Use industrial photography style
- Prefer clean, well-lit product shots
- Use subtle gradients for backgrounds
- Maintain consistent aspect ratios
