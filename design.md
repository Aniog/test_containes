# Artitect Machinery - Design System

## Overview
This document defines the visual style for the Artitect Machinery website. The design should feel elegant, professional, and user-friendly while conveying industrial strength and precision engineering.

## Color Palette

### Primary Colors
- **Slate 950** (`#020617`) - Main background, dark sections
- **Slate 900** (`#0f172a`) - Card backgrounds, elevated surfaces
- **Slate 800** (`#1e293b`) - Borders, dividers, secondary backgrounds
- **Slate 700** (`#334155`) - Hover states, subtle borders

### Accent Colors
- **Amber 500** (`#f59e0b`) - Primary accent, CTAs, highlights
- **Amber 400** (`#fbbf24`) - Hover states, active elements
- **Amber 600** (`#d97706`) - Pressed/active states
- **Amber 700** (`#b45309`) - Darker accent variant

### Text Colors
- **White** - Primary headings, important text
- **Slate 300** (`#cbd5e1`) - Body text on dark backgrounds
- **Slate 400** (`#94a3b8`) - Secondary text, descriptions
- **Slate 500** (`#64748b`) - Tertiary text, placeholders

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800

### Type Scale
- **Hero Title**: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl` - Bold (800)
- **Section Title**: `text-3xl sm:text-4xl lg:text-5xl` - Bold (700)
- **Card Title**: `text-xl` - Bold (700)
- **Body Large**: `text-lg` - Regular (400)
- **Body**: `text-base` - Regular (400)
- **Small**: `text-sm` - Medium (500)

### Line Heights
- Headings: `leading-tight` (1.25)
- Body: `leading-relaxed` (1.625)

## Spacing

### Section Padding
- Large sections: `py-24` (6rem / 96px)
- Medium sections: `py-16` (4rem / 64px)
- Small sections: `py-12` (3rem / 48px)

### Container
- Max width: `max-w-7xl` (80rem / 1280px)
- Horizontal padding: `px-4 sm:px-6 lg:px-8`

### Component Spacing
- Card padding: `p-6` to `p-8`
- Grid gaps: `gap-6` to `gap-8`
- Element gaps: `gap-2` to `gap-4`

## Components

### Buttons
- **Primary**: Amber 500 background, white text, rounded-lg, shadow-lg
- **Secondary**: Slate 800 background, white text, border border-slate-700
- **Hover**: Slightly lighter shade, increased shadow
- **Padding**: `px-6 py-2.5` to `px-8 py-4`
- **Font**: Semibold (600), tracking-wide

### Cards
- Background: Slate 900
- Border: Slate 800 (default), Amber 500/30 (hover)
- Border radius: `rounded-2xl` (1rem)
- Shadow: `shadow-xl` on hover
- Transition: `transition-all duration-300`

### Inputs
- Background: Slate 800
- Border: Slate 700 (default), Amber 500 (focus)
- Border radius: `rounded-lg`
- Focus ring: `focus:ring-1 focus:ring-amber-500`

### Navigation
- Background: Transparent (top), Slate 900/95 with backdrop-blur (scrolled)
- Height: `h-20` (5rem)
- Links: Slate 300 (default), Amber 400 (hover)
- Mobile: Full-screen overlay with Slate 900/98 background

## Visual Effects

### Gradients
- Text gradient: `bg-gradient-to-r from-amber-400 to-amber-600` with `bg-clip-text text-transparent`
- Background overlays: Slate 900/80 to Slate 900/95 with backdrop-blur

### Shadows
- Default: `shadow-lg`
- Accent: `shadow-amber-500/25` (amber glow)
- Card hover: `shadow-xl hover:shadow-amber-500/5`

### Transitions
- Standard: `transition-all duration-300`
- Fast: `duration-200`
- Slow: `duration-500`

### Animations
- Pulse: `animate-pulse` for status indicators
- Bounce: `animate-bounce` for scroll indicators
- Spin: `animate-spin` for loading states

## Layout

### Grid Systems
- Products: 3 columns on large, 2 on medium, 1 on small
- Features: 3 columns on large, 2 on medium, 1 on small
- Contact: 2 columns (form + sidebar) on large, 1 on small

### Responsive Breakpoints
- Mobile: Default (< 768px)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)
- Large: `xl:` (1280px+)

## Icons
- Library: Lucide React
- Size: 18px - 28px depending on context
- Color: Amber 500 for accent icons, Slate 400 for neutral

## Images
- Use stock image system with `data-strk-img` and `data-strk-bg` attributes
- Ratios: 4x3 for products, 16x9 for hero backgrounds
- Placeholder: SVG data URI for layout stability

## Do's and Don'ts

### Do
- Use amber accents sparingly for emphasis
- Maintain consistent spacing using Tailwind scale
- Use slate tones for backgrounds and structure
- Ensure text contrast meets accessibility standards
- Use smooth transitions for interactive elements

### Don't
- Use pure black (#000) or pure white (#fff) directly
- Mix multiple accent colors
- Use more than 2-3 font weights in one section
- Create layouts that feel cramped on mobile
- Use low-contrast text that's hard to read
