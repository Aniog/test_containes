# ARTITECT MACHINERY - Design System

## Brand Identity
- **Tone**: Industrial precision meets modern elegance
- **Audience**: Manufacturing professionals, engineers, factory owners
- **Keywords**: Precision, Reliability, Innovation, Engineering Excellence

## Color Palette

### Primary Colors
- **Slate 900** (`#0f172a`) - Primary background, headers, strong text
- **Slate 800** (`#1e293b`) - Secondary backgrounds, cards
- **Slate 700** (`#334155`) - Borders, dividers
- **Slate 600** (`#475569`) - Muted text, secondary elements
- **Slate 500** (`#64748b`) - Placeholder text, disabled states
- **Slate 400** (`#94a3b8`) - Light text on dark backgrounds
- **Slate 300** (`#cbd5e1`) - Subtle borders, light text
- **Slate 200** (`#e2e8f0`) - Light backgrounds
- **Slate 100** (`#f1f5f9`) - Card backgrounds, hover states
- **Slate 50** (`#f8fafc`) - Page background, light sections

### Accent Colors
- **Blue 600** (`#2563eb`) - Primary accent, CTAs, links
- **Blue 700** (`#1d4ed8`) - Hover states for primary actions
- **Blue 500** (`#3b82f6`) - Light accents, highlights
- **Amber 500** (`#f59e0b`) - Secondary accent, highlights, warnings
- **Amber 600** (`#d97706`) - Hover states for amber elements

### Semantic Colors
- **Emerald 600** (`#059669`) - Success states
- **Red 600** (`#dc2626`) - Error states
- **Orange 600** (`#ea580c`) - Warning states

## Typography

### Font Families
- **Headings**: `Oswald` - Bold, industrial, authoritative
- **Body**: `Inter` - Clean, modern, highly readable

### Font Sizes
- **Hero Title**: `text-5xl md:text-7xl lg:text-8xl` - Bold, impactful
- **Section Title**: `text-3xl md:text-4xl lg:text-5xl` - Clear hierarchy
- **Card Title**: `text-xl md:text-2xl` - Product names
- **Body Large**: `text-lg` - Lead paragraphs
- **Body**: `text-base` - Standard text
- **Small**: `text-sm` - Captions, metadata
- **Tiny**: `text-xs` - Labels, badges

### Font Weights
- **Bold**: `font-bold` (700) - Headlines, CTAs
- **Semibold**: `font-semibold` (600) - Subheadings, emphasis
- **Medium**: `font-medium` (500) - Navigation, labels
- **Regular**: `font-normal` (400) - Body text
- **Light**: `font-light` (300) - Subtle text

## Spacing System
- **xs**: `0.5rem` (8px) - Tight spacing
- **sm**: `1rem` (16px) - Standard spacing
- **md**: `1.5rem` (24px) - Medium spacing
- **lg**: `2rem` (32px) - Large spacing
- **xl**: `3rem` (48px) - Section spacing
- **2xl**: `4rem` (64px) - Major section breaks
- **3xl**: `6rem` (96px) - Hero spacing

## Border Radius
- **sm**: `rounded-sm` (2px) - Subtle rounding
- **md**: `rounded-md` (6px) - Standard cards
- **lg**: `rounded-lg` (8px) - Buttons, inputs
- **xl**: `rounded-xl` (12px) - Large cards
- **2xl**: `rounded-2xl` (16px) - Hero sections
- **full**: `rounded-full` - Pills, badges

## Shadows
- **sm**: `shadow-sm` - Subtle elevation
- **md**: `shadow-md` - Card elevation
- **lg**: `shadow-lg` - Modal elevation
- **xl**: `shadow-xl` - Hero elevation
- **2xl**: `shadow-2xl` - Maximum elevation

## Component Styles

### Buttons
- **Primary**: Blue 600 background, white text, rounded-lg, hover: Blue 700
- **Secondary**: Slate 800 background, white text, rounded-lg, hover: Slate 700
- **Outline**: Transparent background, Slate 700 border, hover: Slate 800
- **Ghost**: Transparent background, hover: Slate 800

### Cards
- Background: Slate 800 or Slate 50
- Border: Slate 700
- Radius: rounded-xl
- Shadow: shadow-lg
- Padding: p-6 to p-8

### Navigation
- Background: Slate 900 with backdrop blur
- Text: Slate 100
- Hover: Blue 500
- Active: Blue 600

### Forms
- Input background: Slate 800
- Input border: Slate 700
- Input focus: Blue 500 ring
- Label: Slate 300, text-sm, font-medium

## Layout Principles
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Grid**: Use CSS Grid for product showcases
- **Flex**: Use Flexbox for navigation and alignment
- **Responsive**: Mobile-first approach with md: and lg: breakpoints

## Visual Elements
- **Icons**: Lucide React - consistent, clean
- **Images**: High-quality industrial photography
- **Dividers**: Slate 700 borders
- **Gradients**: Subtle Slate gradients for depth

## Do's and Don'ts

### Do
- Use Oswald for all headings
- Maintain consistent spacing
- Use Slate palette for backgrounds
- Add hover states to interactive elements
- Ensure mobile responsiveness
- Use semantic HTML

### Don't
- Mix font families in headings
- Use pure black (#000) or pure white (#fff)
- Overuse accent colors
- Create cluttered layouts
- Use low contrast text
- Skip hover/focus states
