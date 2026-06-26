# SSourcing China - Design Guidelines

## Brand Overview
**Company:** SSourcing China
**Tagline:** China Sourcing Agent for Global Buyers
**Target Audience:** B2B overseas buyers looking for reliable Chinese suppliers
**Tone:** Professional, trustworthy, practical, clear, no exaggerated claims

## Color Palette

### Primary Colors
- **Primary Blue:** `#1E40AF` - Trust, professionalism, reliability
- **Primary Blue Light:** `#3B82F6` - Interactive elements, links
- **Primary Blue Dark:** `#1E3A8A` - Hover states, emphasis

### Accent Colors
- **Accent Orange:** `#EA580C` - CTAs, urgency, important actions
- **Accent Orange Light:** `#F97316` - Hover states
- **Accent Green:** `#059669` - Success, verification, quality
- **Accent Red:** `#DC2626` - Warnings, errors

### Neutral Colors
- **Neutral 50:** `#F8FAFC` - Background light sections
- **Neutral 100:** `#F1F5F9` - Cards, subtle backgrounds
- **Neutral 200:** `#E2E8F0` - Borders, dividers
- **Neutral 400:** `#94A3B8` - Placeholder text
- **Neutral 600:** `#475569` - Secondary text
- **Neutral 800:** `#1E293B` - Primary text
- **Neutral 900:** `#0F172A` - Headings, emphasis

### White
- **White:** `#FFFFFF` - Primary background

## Typography

### Font Family
- **Primary Font:** Inter (Google Fonts)
- **Fallback:** system-ui, -apple-system, sans-serif

### Font Sizes (Tailwind classes)
- **Display/Hero:** `text-4xl md:text-5xl lg:text-6xl` (font-bold)
- **H1:** `text-3xl md:text-4xl` (font-bold)
- **H2:** `text-2xl md:text-3xl` (font-semibold)
- **H3:** `text-xl md:text-2xl` (font-semibold)
- **H4:** `text-lg md:text-xl` (font-medium)
- **Body Large:** `text-lg` (leading-relaxed)
- **Body:** `text-base` (leading-relaxed)
- **Small:** `text-sm`
- **Caption:** `text-xs`

### Line Heights
- **Tight:** 1.1 - Headlines
- **Normal:** 1.5 - Subheadings
- **Relaxed:** 1.75 - Body text

## Spacing System

### Sections
- **Section Padding:** `py-16 md:py-24`
- **Section Background:** Alternating white and neutral-50

### Container
- **Max Width:** `max-w-7xl`
- **Horizontal Padding:** `px-4 sm:px-6 lg:px-8`

### Components
- **Card Padding:** `p-6 md:p-8`
- **Button Padding:** `px-6 py-3`

## Visual Style

### Card Design
- Background: white
- Border: `border border-neutral-200`
- Border Radius: `rounded-lg` (8px)
- Shadow: `shadow-sm`
- Hover: `shadow-md`, `border-primary-200`

### Button Styles

#### Primary Button
- Background: `#EA580C` (accent orange)
- Text: white
- Padding: `px-6 py-3`
- Border Radius: `rounded-md`
- Hover: `bg-orange-600`
- Font: `font-semibold`

#### Secondary Button
- Background: white
- Border: `border-2 border-primary-600`
- Text: `#1E40AF`
- Hover: `bg-primary-50`

#### Ghost Button
- Background: transparent
- Text: `#1E40AF`
- Hover: `bg-neutral-100`

### Icon Style
- Lucide React icons
- Default size: `w-6 h-6`
- Stroke width: 2
- Color: inherits from text or `text-neutral-600`

### Image Style
- Aspect ratios: 16:9 (hero), 4:3 (cards), 1:1 (avatars)
- Border radius: `rounded-lg`
- Object fit: cover

## Border Radius
- **Small:** `rounded` (4px)
- **Medium:** `rounded-md` (6px)
- **Large:** `rounded-lg` (8px)
- **XL:** `rounded-xl` (12px)
- **Full:** `rounded-full`

## Shadows
- **Small:** `shadow-sm` - Cards at rest
- **Medium:** `shadow-md` - Hovered cards
- **Large:** `shadow-lg` - Elevated elements
- **XL:** `shadow-xl` - Modals, dropdowns

## Responsive Breakpoints
- **Mobile:** Default (no prefix)
- **Tablet:** `md:` (768px+)
- **Desktop:** `lg:` (1024px+)
- **Large Desktop:** `xl:` (1280px+)

## Component Patterns

### Hero Section
- Large headline with gradient or dark background
- Subheadline in neutral-600
- Primary CTA button
- Optional secondary CTA
- Background image or gradient overlay

### Feature Cards
- Icon at top (primary blue)
- Heading (H3)
- Description paragraph
- Optional link
- Hover lift effect

### Process Steps
- Numbered circles
- Connecting lines between steps
- Title and description for each step
- Responsive grid layout

### Testimonial/Trust Badges
- Quote or stat
- Client attribution
- Company logo or avatar

### FAQ Accordion
- Clickable question
- Smooth expand/collapse
- Chevron indicator

### Form Inputs
- Label above input
- Placeholder text
- Focus ring in primary blue
- Error state in red
- Helper text below input

## Animations
- Transitions: 200-300ms ease
- Hover states: scale, shadow, color
- Page transitions: fade-in
- Loading states: skeleton

## Accessibility
- WCAG 2.1 AA compliant
- Focus indicators visible
- Color contrast ratios met
- Semantic HTML
- ARIA labels where needed

## Do's and Don'ts

### Do
- Use professional photography with factory/warehouse/QC imagery
- Keep text concise and scannable
- Use bullet points for lists
- Include trust signals (certifications, client count, years)
- Clear CTAs on every page
- Consistent spacing and alignment

### Don't
- Use stock photos that look fake
- Make exaggerated claims
- Use excessive animations
- Cram too much content
- Use low contrast text
- Use multiple font families
