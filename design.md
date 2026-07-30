# SSourcing China - Design System

## Brand Identity
- **Company**: SSourcing China
- **Industry**: B2B Sourcing Agent
- **Target**: International buyers, importers, Amazon/e-commerce sellers
- **Personality**: Trustworthy, professional, efficient, global

## Color Palette

### Primary Colors
- **Deep Navy**: `#0F2B5B` - Headers, primary buttons, trust elements
- **Trust Blue**: `#1E5BB8` - Links, accents, CTAs
- **Success Green**: `#28A745` - Trust badges, positive indicators

### Neutral Colors
- **Dark Text**: `#1A1A2E` - Body text, headings
- **Medium Gray**: `#4A5568` - Secondary text, descriptions
- **Light Gray**: `#F7F8FA` - Backgrounds, cards, sections
- **White**: `#FFFFFF` - Primary backgrounds, cards

### Accent Colors
- **Warning Orange**: `#E67E22` - Highlights, important notices
- **Light Blue Accent**: `#E8F4FD` - Subtle backgrounds, info boxes

## Typography

### Font Stack
```
font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

### Font Sizes (Mobile First)
- **H1 Hero**: text-3xl md:text-4xl lg:text-5xl font-bold
- **H2 Section**: text-2xl md:text-3xl font-bold
- **H3 Card**: text-xl md:text-2xl font-semibold
- **Body**: text-base md:text-lg
- **Small/Caption**: text-sm

### Line Heights
- Headings: leading-tight (1.25)
- Body: leading-relaxed (1.75)

## Spacing System

### Section Padding
- **Mobile**: py-16 px-4
- **Desktop**: py-20 lg:py-24

### Container
- `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`

### Component Spacing
- Card padding: p-6 md:p-8
- Button padding: px-6 py-3 (standard), px-8 py-4 (large CTA)
- Grid gaps: gap-6 md:gap-8

## Components

### Buttons
- **Primary**: bg-[#1E5BB8] hover:bg-[#0F2B5B] text-white rounded-lg font-medium
- **Secondary**: border-2 border-[#1E5BB8] text-[#1E5BB8] hover:bg-[#1E5BB8] hover:text-white rounded-lg
- **CTA Large**: px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl

### Cards
- **Standard**: bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 md:p-8
- **Feature Card**: bg-white rounded-xl border border-gray-100 p-6 text-center
- **Stat Card**: bg-[#0F2B5B] text-white rounded-xl p-6 text-center

### Section Backgrounds
- **White Section**: bg-white
- **Light Section**: bg-[#F7F8FA]
- **Dark Section**: bg-[#0F2B5B] text-white
- **Accent Section**: bg-[#E8F4FD]

## Layout Patterns

### Hero Section
- Full-width with subtle gradient or image background
- Centered content with max-w-4xl
- Primary headline + subheadline + CTA button
- Optional trust badges below CTA

### Feature Grid
- 2 columns mobile, 3 columns tablet, 4 columns desktop
- Icon + title + description pattern
- Consistent card heights

### Process Steps
- Horizontal timeline on desktop (3-4 steps)
- Vertical stack on mobile
- Numbered circles with connecting lines
- Icon + step title + description

### Stats Bar
- 4 stats in a row on desktop
- 2x2 grid on mobile
- Large numbers with descriptive labels
- Dark background with white text

## Trust Elements

### Trust Badges
- Years in business
- Countries served
- Orders completed
- Client satisfaction rate

### Social Proof
- Client logos carousel
- Testimonial cards with photos
- Case study summaries
- Industry certifications

## Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: sm: 640px+
- **Desktop**: md: 768px+
- **Large Desktop**: lg: 1024px+
- **Extra Large**: xl: 1280px+

## Image Guidelines
- Use stock images for factory, warehouse, shipping, quality control
- Hero images: 16x9 ratio, 1200-1600px width
- Card images: 4x3 ratio, 600-800px width
- Always use data-strk-img system for stock images
- Alt text must be descriptive and relevant

## Animation & Transitions
- Hover transitions: transition-all duration-300
- Card hover: hover:shadow-md, hover:-translate-y-1
- Button hover: smooth color transitions
- Avoid excessive animations - keep it professional

## Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- Focus states visible on all interactive elements
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support

## Do's
- Use clean whitespace between sections
- Maintain consistent spacing
- Use professional, realistic imagery
- Keep content scannable with bullet points
- Include clear CTAs on every page section
- Use data-driven numbers for credibility

## Don'ts
- Don't use excessive colors or gradients
- Don't use stock photos with visible watermarks
- Don't make exaggerated claims
- Don't use informal language
- Don't overcrowd sections with too much text
- Don't use low-contrast text combinations
