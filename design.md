# SSourcing China - Design System

## Overview
Professional B2B website for a China-based sourcing agent. Clean, trustworthy, international aesthetic targeting overseas buyers.

## Color Palette

### Primary Colors
- **Primary Blue**: `#1d4ed8` (blue-700) - Main brand color, CTAs, links, active states
- **Primary Blue Hover**: `#1e40af` (blue-800) - Hover states for primary buttons
- **Primary Blue Light**: `#dbeafe` (blue-100) - Icon backgrounds, badges, subtle highlights
- **Primary Blue 50**: `#eff6ff` (blue-50) - Very light backgrounds, active nav items

### Neutral Colors
- **Slate 900**: `#0f172a` - Dark backgrounds (hero sections, footer), headings
- **Slate 800**: `#1e293b` - Card backgrounds on dark sections
- **Slate 700**: `#334155` - Borders on dark sections
- **Slate 400**: `#94a3b8` - Muted text on dark backgrounds
- **Slate 300**: `#cbd5e1` - Subtle borders
- **Gray 50**: `#f9fafb` - Light section backgrounds, card backgrounds
- **Gray 100**: `#f3f4f6` - Card borders, subtle backgrounds
- **Gray 200**: `#e5e7eb` - Placeholder backgrounds
- **Gray 300**: `#d1d5db` - Input borders
- **Gray 500**: `#6b7280` - Secondary text, labels
- **Gray 600**: `#4b5563` - Body text
- **Gray 700**: `#374151` - Headings, strong text
- **Gray 900**: `#111827` - Primary text

### Accent Colors
- **Green 500**: `#22c55e` - Success indicators, checkmarks
- **Green 600**: `#16a34a` - Success text
- **Green 700**: `#15803d` - Success backgrounds
- **Green 50**: `#f0fdf4` - Success message backgrounds
- **Red 400**: `#f87171` - Problem indicators
- **Red 500/20**: `rgba(239, 68, 68, 0.2)` - Problem icon backgrounds

## Typography

### Font Family
- **Primary**: Inter (Google Fonts) - All text
- **Fallback**: system-ui, Avenir, Helvetica, Arial, sans-serif

### Font Weights
- **300**: Light - Rarely used
- **400**: Regular - Body text, descriptions
- **500**: Medium - Navigation, labels, buttons
- **600**: Semibold - Section titles, card titles
- **700**: Bold - Page headings, stats, metrics
- **800**: Extra Bold - Hero headings (optional)

### Font Sizes
- **xs**: 0.75rem (12px) - Labels, badges, timestamps
- **sm**: 0.875rem (14px) - Body text, descriptions, navigation
- **base**: 1rem (16px) - Default body text
- **lg**: 1.125rem (18px) - Lead paragraphs
- **xl**: 1.25rem (20px) - Card titles
- **2xl**: 1.5rem (24px) - Section headings
- **3xl**: 1.875rem (30px) - Page headings (mobile)
- **4xl**: 2.25rem (36px) - Page headings (desktop)
- **5xl**: 3rem (48px) - Hero headings (desktop)
- **6xl**: 3.75rem (60px) - Hero headings (large screens)

### Line Heights
- **tight**: 1.1 - Hero headings
- **normal**: 1.5 - Body text
- **relaxed**: 1.625 - Descriptions, paragraphs

## Spacing

### Section Padding
- **Mobile**: `py-16` (4rem / 64px)
- **Desktop**: `py-24` (6rem / 96px)

### Container
- **Max Width**: `max-w-7xl` (80rem / 1280px)
- **Horizontal Padding**: `px-4` (1rem / 16px)

### Component Spacing
- **Card Padding**: `p-5` to `p-8` (1.25rem to 2rem)
- **Grid Gap**: `gap-4` to `gap-8` (1rem to 2rem)
- **Element Gap**: `gap-2` to `gap-6` (0.5rem to 1.5rem)

## Border Radius
- **Small**: `rounded` (0.25rem / 4px) - Badges, small elements
- **Medium**: `rounded-lg` (0.5rem / 8px) - Buttons, inputs, cards
- **Large**: `rounded-xl` (0.75rem / 12px) - Cards, sections
- **Full**: `rounded-full` - Avatars, badges, pills

## Shadows
- **None**: Default for most cards (border-based)
- **Small**: `shadow-sm` - Subtle card elevation
- **Medium**: `shadow-lg` - Hover states, modals
- **Large**: `shadow-xl` - Dropdowns, popovers

## Layout Patterns

### Grid Systems
- **4 columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` - Services, stats
- **3 columns**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` - Case studies, products
- **2 columns**: `grid-cols-1 lg:grid-cols-2` - Contact form, alternating sections

### Navigation
- **Desktop**: Horizontal nav with active state highlighting
- **Mobile**: Hamburger menu with full-width dropdown
- **Top Bar**: Contact info bar above main navigation (desktop only)

## Component Styles

### Buttons
- **Primary**: `bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold`
- **Secondary**: `border border-slate-600 hover:border-slate-400 text-white px-6 py-3 rounded-lg`
- **Link**: `text-blue-700 font-medium inline-flex items-center gap-1`

### Cards
- **Light**: `bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-lg`
- **Dark**: `bg-slate-800 rounded-xl p-6 border border-slate-700`
- **White**: `bg-white rounded-xl p-6 shadow-sm border border-gray-100`

### Forms
- **Input**: `w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500`
- **Label**: `block text-sm font-medium text-gray-700 mb-1`
- **Error**: `text-red-600 text-sm flex items-center gap-2`

### Badges/Tags
- **Blue**: `text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full`
- **Industry**: Same as blue badge

## Visual Hierarchy

1. **Hero Section**: Dark background (slate-900), large white text, blue CTA
2. **Section Headers**: Centered, with blue accent label above
3. **Cards**: Light backgrounds with subtle borders, hover shadows
4. **CTA Sections**: Blue background (blue-700), white text
5. **Footer**: Dark background (slate-900), muted text

## Do's and Don'ts

### Do
- Use blue-700 for all primary actions and links
- Keep text readable with proper contrast (gray-600+ on white, white on dark)
- Use consistent spacing (multiples of 4px)
- Include icons from Lucide React for visual interest
- Use hover states for interactive elements
- Maintain responsive design with mobile-first approach

### Don't
- Use colors outside the defined palette
- Mix border-radius styles inconsistently
- Use shadows where borders suffice
- Create custom animations without purpose
- Use emojis in professional B2B context
- Overuse stock images - keep it clean and professional

## Responsive Breakpoints
- **sm**: 640px - Small tablets
- **md**: 768px - Tablets
- **lg**: 1024px - Desktop
- **xl**: 1280px - Large desktop

## Icon Usage
- **Size**: `w-4 h-4` to `w-7 h-7` depending on context
- **Color**: Match parent text color or use blue-700 for emphasis
- **Style**: Lucide React icons, outline style
