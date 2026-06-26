# SSourcing China - Design Specification

## Overview
This document outlines the design system and visual guidelines for the SSourcing China B2B website.

## Color Palette

### Primary Colors
- **Primary**: `#1e40af` (Blue 800) - Main brand color, buttons, links
- **Primary Dark**: `#1e3a8a` (Blue 900) - Hover states
- **Primary Light**: `#3b82f6` (Blue 500) - Secondary accents

### Accent Colors
- **Accent**: `#f59e0b` (Amber 500) - Call-to-action buttons, highlights
- **Accent Dark**: `#d97706` (Amber 600) - Accent hover states

### Neutral Colors
- **Background**: `#ffffff` - Main background
- **Background Alt**: `#f8fafc` (Slate 50) - Alternate sections
- **Text**: `#0f172a` (Slate 900) - Primary text
- **Text Secondary**: `#475569` (Slate 600) - Secondary text
- **Border**: `#e2e8f0` (Slate 200) - Borders and dividers

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700
- **Extra Bold**: 800

### Type Scale
- **H1**: 3rem (48px) - Bold 700
- **H2**: 2.5rem (40px) - Bold 700
- **H3**: 1.875rem (30px) - Bold 700
- **Body Large**: 1.125rem (18px)
- **Body**: 1rem (16px)
- **Small**: 0.875rem (14px)

## Spacing System
- Base unit: 4px
- Common spacing: 8px, 16px, 24px, 32px, 48px, 64px, 80px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px

## Border Radius
- **Small**: 0.25rem (4px) - Inputs, small elements
- **Medium**: 0.5rem (8px) - Buttons, cards
- **Large**: 0.75rem (12px) - Larger cards
- **XL**: 1rem (16px) - Featured sections
- **Full**: 9999px - Circles, pills

## Shadows
- **Small**: `0 1px 2px rgba(0,0,0,0.05)` - Subtle elevation
- **Medium**: `0 4px 6px -1px rgba(0,0,0,0.1)` - Cards
- **Large**: `0 10px 15px -3px rgba(0,0,0,0.1)` - Modals, dropdowns

## Components

### Buttons

#### Primary Button
```css
background-color: var(--color-primary);
color: white;
padding: 0.875rem 1.75rem;
border-radius: 0.5rem;
font-weight: 600;
transition: all 0.2s;
```
- Hover: Darken background, slight lift

#### Secondary Button
```css
background-color: transparent;
color: var(--color-primary);
padding: 0.875rem 1.75rem;
border-radius: 0.5rem;
font-weight: 600;
border: 2px solid var(--color-primary);
```
- Hover: Fill with primary color

#### Accent Button (CTA)
```css
background-color: var(--color-accent);
color: white;
```
- Used for main call-to-action on hero sections

### Cards
- Background: white
- Border radius: 0.75rem (12px)
- Shadow: small
- Border: 1px solid var(--color-border)
- Padding: 1.5rem - 2rem

### Form Inputs
- Height: 48px (py-3)
- Padding: 0.75rem 1rem
- Border radius: 0.5rem
- Border: 1px solid #d1d5db
- Focus ring: 2px solid var(--color-primary)

### Icons
- Size: 20px (default), 24px (medium), 32px (large)
- Stroke width: 2px
- Color: Inherits from parent or specific brand color

## Sections

### Hero Section
- Background: Gradient from slate-900 to blue-900
- Text color: white
- Pattern overlay (optional)
- Bottom fade to white
- Large headline, subtext, CTA buttons

### Trust Stats
- White background with subtle bottom border
- 4 columns on desktop, 2 on mobile
- Large numbers with small labels

### Content Sections
- Alternating white and slate-50 backgrounds
- 80px vertical padding
- Max-width 1200px container

### CTA Section
- Primary blue background
- White text
- Centered layout
- Single CTA button

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Do's and Don'ts

### Do
- Use Inter font for consistent typography
- Maintain sufficient contrast for accessibility
- Use primary blue for links and primary actions
- Use accent amber for main CTAs
- Keep consistent spacing throughout
- Use rounded corners for friendly appearance

### Don't
- Use more than 3 colors in a single section
- Use pure black (#000000) for text
- Use inline styles for repeated components
- Hardcode colors - use CSS variables
- Use excessive bold or uppercase text
- Create busy or cluttered layouts
