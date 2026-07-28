# SSourcing China - Design System

## Brand Overview
Professional B2B China sourcing agent website. Clean, trustworthy, international aesthetic that appeals to overseas buyers seeking reliable supplier verification, quality control, and shipping coordination services.

## Color Palette

### Primary Colors
- **Primary Blue**: `#1E40AF` (Trust, professionalism) - Main CTA buttons, key headings
- **Primary Blue Dark**: `#1E3A8A` (Hover states) - Button hover, emphasis
- **Primary Blue Light**: `#DBEAFE` (Backgrounds) - Section backgrounds, cards

### Secondary Colors
- **Secondary Teal**: `#0D9488` (Success, action) - Accents, checkmarks, highlights
- **Secondary Teal Light**: `#CCFBF1` (Success backgrounds) - Success states, positive indicators

### Neutral Colors
- **Dark Gray**: `#111827` (Text) - Primary text, headings
- **Medium Gray**: `#4B5563` (Body) - Body text, descriptions
- **Light Gray**: `#9CA3AF` (Muted) - Secondary text, placeholders
- **Border Gray**: `#E5E7EB` (Borders) - Dividers, card borders
- **Background Light**: `#F9FAFB` (Page bg) - Main background
- **White**: `#FFFFFF` (Cards) - Card backgrounds, contrast areas

### Accent Colors
- **Orange Accent**: `#F97316` (CTA) - Call-to-action buttons
- **Orange Hover**: `#EA580C` - CTA hover state

## Typography

### Font Family
- **Primary Font**: Inter (Google Fonts)
- **Fallback**: system-ui, -apple-system, sans-serif
- **Weights**: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

### Type Scale
- **Hero/H1**: 48px / 56px line-height, font-weight: 800
- **H2**: 36px / 44px line-height, font-weight: 700
- **H3**: 24px / 32px line-height, font-weight: 600
- **H4**: 20px / 28px line-height, font-weight: 600
- **Body Large**: 18px / 28px line-height, font-weight: 400
- **Body**: 16px / 24px line-height, font-weight: 400
- **Small**: 14px / 20px line-height, font-weight: 400
- **Caption**: 12px / 16px line-height, font-weight: 500

## Spacing System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Section padding: 96px vertical (desktop), 64px (tablet), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop), 16px (mobile)

## Border Radius
- **Small**: 6px (buttons, inputs)
- **Medium**: 8px (cards)
- **Large**: 12px (large cards, modals)
- **Full**: 9999px (badges, pills)

## Shadows
- **Small**: 0 1px 2px rgba(0, 0, 0, 0.05)
- **Medium**: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)
- **Large**: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)

## Component Guidelines

### Buttons
- **Primary CTA**: Orange background (#F97316), white text, rounded-md, px-6 py-3
- **Primary Hover**: Orange-700 (#EA580C)
- **Secondary**: Blue background (#1E40AF), white text
- **Secondary Hover**: Blue-800 (#1E3A8A)
- **Outline**: Border-2 border-blue-600, blue text
- **Ghost**: Transparent, blue text, hover blue-50 bg

### Cards
- White background, rounded-lg (8px), shadow-sm border border-gray-100
- Hover: shadow-md, translate-y-[-2px]
- Padding: 24px (desktop), 16px (mobile)

### Navigation
- Fixed header with white background
- Shadow on scroll
- Logo left, nav links center/right
- Mobile: hamburger menu with slide-out drawer

### Form Inputs
- Border: 1px solid #E5E7EB
- Focus: 2px ring-2 ring-blue-500
- Rounded-md
- Padding: 12px 16px
- Placeholder: text-gray-400

### Badges/Pills
- Background: primary-blue-light for info, teal-light for success
- Text: matching darker shade
- Rounded-full, px-3 py-1

## Visual Style Guidelines

### Images
- Use professional stock imagery depicting:
  - Factory floors and manufacturing
  - Quality control inspection
  - Shipping containers and logistics
  - Business handshakes and meetings
  - Modern industrial equipment
- Aspect ratios: 16:9 for hero, 4:3 for cards, 3:2 for galleries
- Always include descriptive alt text

### Icons
- Use Lucide React icons
- Size: 20px (inline), 24px (features), 32px (hero)
- Color: inherit from parent or specific brand color

### Background Patterns
- Subtle geometric patterns for hero sections
- Gradient overlays on dark sections
- Light grid patterns for alternating sections

## Layout Principles

### Page Structure
1. Hero Section (full-width, 80vh max height)
2. Trust Bar / Logos (optional)
3. Main Content Sections (alternating white/gray backgrounds)
4. CTA Section (blue gradient background)
5. Footer (dark gray)

### Grid System
- 12-column grid
- Content max-width: 1280px
- Padding: 24px (desktop), 16px (mobile)

### Responsive Breakpoints
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

## Animations
- Page transitions: none (keep simple for B2B)
- Hover effects: subtle scale (1.02) and shadow lift
- Loading states: simple spinners
- Scroll reveals: fade-up with 50px translate, 400ms duration

## Accessibility
- Minimum contrast ratio: 4.5:1 for body text
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels on icons and buttons
