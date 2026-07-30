# SSourcing China - Visual Style Guide

## Brand Identity
- **Company**: SSourcing China
- **Industry**: B2B Sourcing Agent
- **Target**: International buyers sourcing from China
- **Tone**: Professional, trustworthy, clear, practical
- **Style**: Clean, international, corporate B2B

## Color Palette

### Primary Colors
- **Primary Blue**: `#1E40AF` (Deep professional blue - trust, reliability)
- **Primary Dark**: `#1E3A8A` (Darker blue for hover states)
- **Primary Light**: `#3B82F6` (Lighter blue for accents)

### Secondary Colors
- **Accent Orange**: `#F97316` (CTA buttons, highlights - action-oriented)
- **Accent Orange Dark**: `#EA580C` (Hover state for orange)
- **Accent Orange Light**: `#FB923C` (Light accents)

### Neutral Colors
- **Text Primary**: `#111827` (Almost black - main headings)
- **Text Secondary**: `#4B5563` (Dark gray - body text)
- **Text Muted**: `#9CA3AF` (Medium gray - placeholder, captions)
- **Background White**: `#FFFFFF` (Clean backgrounds)
- **Background Light**: `#F9FAFB` (Light gray sections)
- **Background Gray**: `#F3F4F6` (Alternate sections)
- **Border Light**: `#E5E7EB` (Subtle borders)
- **Border Medium**: `#D1D5DB` (More visible borders)

### Success/Status Colors
- **Success Green**: `#059669` (Confirmations, positive metrics)
- **Warning Yellow**: `#D97706` (Attention, caution)
- **Error Red**: `#DC2626` (Errors, critical alerts)

## Typography

### Font Stack
- **Primary Font**: Inter (Clean, modern, highly readable)
- **Fallback**: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif

### Font Weights
- **Regular**: 400 (Body text)
- **Medium**: 500 (Emphasis, buttons)
- **Semibold**: 600 (Sub-headings, navigation)
- **Bold**: 700 (Main headings, strong emphasis)

### Font Sizes (using Tailwind defaults)
- **Display**: `text-5xl` / `text-6xl` (Hero headlines - 48px/60px)
- **H1**: `text-4xl` / `text-5xl` (Page titles - 36px/48px)
- **H2**: `text-3xl` / `text-4xl` (Section headings - 30px/36px)
- **H3**: `text-2xl` (Sub-section headings - 24px)
- **H4**: `text-xl` (Card titles - 20px)
- **Body Large**: `text-lg` (Lead paragraphs - 18px)
- **Body**: `text-base` (Regular text - 16px)
- **Small**: `text-sm` (Captions, meta - 14px)
- **Extra Small**: `text-xs` (Labels, badges - 12px)

### Line Heights
- **Tight**: `leading-tight` (Headings - 1.25)
- **Normal**: `leading-normal` (Body - 1.5)
- **Relaxed**: `leading-relaxed` (Long paragraphs - 1.625)

## Spacing System

### Section Spacing
- **Section Padding Y**: `py-16` to `py-24` (64px to 96px)
- **Section Padding X**: `px-4` to `px-8` (16px to 32px)
- **Container Max Width**: `max-w-7xl` (1280px)
- **Container Margin**: `mx-auto`

### Component Spacing
- **Card Padding**: `p-6` to `p-8` (24px to 32px)
- **Button Padding**: `px-6 py-3` (24px horizontal, 12px vertical)
- **Input Padding**: `px-4 py-2` (16px horizontal, 8px vertical)
- **Gap (Grid/Flex)**: `gap-6` to `gap-8` (24px to 32px)

### Vertical Rhythm
- **Between sections**: `space-y-16` to `space-y-20`
- **Between components**: `space-y-6` to `space-y-8`
- **Between text elements**: `space-y-2` to `space-y-4`

## Border Radius
- **Small**: `rounded` (4px) - Inputs, small buttons
- **Medium**: `rounded-lg` (8px) - Cards, containers
- **Large**: `rounded-xl` (12px) - Hero sections, feature cards
- **Full**: `rounded-full` (9999px) - Badges, avatars, pills

## Shadows
- **Small**: `shadow-sm` - Subtle elevation
- **Medium**: `shadow-md` - Cards, dropdowns
- **Large**: `shadow-lg` - Modals, popovers
- **Extra Large**: `shadow-xl` - Hero sections, prominent cards

## Component Styles

### Buttons
**Primary Button (CTA)**:
- Background: `bg-orange-500`
- Hover: `bg-orange-600`
- Text: `text-white font-semibold`
- Padding: `px-6 py-3`
- Radius: `rounded-lg`
- Shadow: `shadow-md hover:shadow-lg`
- Transition: `transition-all duration-200`

**Secondary Button**:
- Background: `bg-blue-600`
- Hover: `bg-blue-700`
- Text: `text-white font-semibold`
- Style: Same as primary but with blue

**Outline Button**:
- Background: `bg-transparent`
- Border: `border-2 border-blue-600`
- Text: `text-blue-600`
- Hover: `bg-blue-600 text-white`

### Cards
- Background: `bg-white`
- Border: `border border-gray-200`
- Radius: `rounded-xl`
- Shadow: `shadow-md hover:shadow-lg`
- Padding: `p-6` to `p-8`
- Transition: `transition-shadow duration-200`

### Inputs/Forms
- Background: `bg-white`
- Border: `border border-gray-300`
- Radius: `rounded-lg`
- Padding: `px-4 py-3`
- Focus: `focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
- Placeholder: `placeholder-gray-400`

### Navigation
- Background: `bg-white`
- Shadow: `shadow-sm`
- Height: `h-16` to `h-20`
- Link hover: `text-blue-600`
- Active link: `text-blue-600 font-medium`

### Section Backgrounds
**White Section**:
- Background: `bg-white`
- Text: `text-gray-900`

**Light Gray Section**:
- Background: `bg-gray-50`
- Text: `text-gray-900`

**Dark Section**:
- Background: `bg-blue-900`
- Text: `text-white`

**Gradient Section**:
- Background: `bg-gradient-to-br from-blue-600 to-blue-800`
- Text: `text-white`

## Icons
- **Library**: Lucide React
- **Size**: `w-5 h-5` to `w-6 h-6` (standard), `w-8 h-8` to `w-12 h-12` (feature icons)
- **Color**: Inherit from text or use `text-blue-600` for accent

## Images
- **Stock Images**: Use `data-strk-img` system for factory, QC, shipping, product images
- **Aspect Ratios**: 
  - Hero: `16x9` or `3x2`
  - Cards: `4x3` or `3x2`
  - Thumbnails: `1x1` or `4x3`
- **Width**: `800` to `1600` for hero, `400` to `600` for cards

## Layout Patterns

### Hero Section
- Full-width background (image or gradient)
- Centered or left-aligned content
- Large headline + subtitle + CTA buttons
- Minimum height: `min-h-[600px]`

### Feature Grid
- 2-3 columns on desktop, 1 on mobile
- Icon + title + description
- Consistent card heights

### Process Steps
- Horizontal timeline on desktop
- Vertical on mobile
- Numbered steps with icons
- Connecting lines or arrows

### Testimonials/Case Studies
- Card layout with client info
- Quote or result metrics
- Company logo if available

### Contact Form
- Two-column layout (form + contact info)
- Clean input styling
- Prominent submit button

## Do's and Don'ts

### Do's
- Use plenty of whitespace
- Keep text readable (minimum 16px body)
- Use consistent spacing throughout
- Make CTAs highly visible
- Use professional stock images
- Maintain visual hierarchy
- Use shadows sparingly for depth
- Keep mobile responsive

### Don'ts
- Don't use too many colors
- Don't overcrowd sections
- Don't use low contrast text
- Don't use decorative fonts for body text
- Don't use large blocks of centered text
- Don't use pure black (#000) for text
- Don't add animations that distract from content
- Don't use placeholder images in final design

## Responsive Breakpoints
- **Mobile**: < 640px (`sm:`)
- **Tablet**: 640px - 1024px (`md:`)
- **Desktop**: > 1024px (`lg:`)
- **Large Desktop**: > 1280px (`xl:`)

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Focus states visible on all interactive elements
- Alt text on all images
- Semantic HTML structure
- Keyboard navigation support
