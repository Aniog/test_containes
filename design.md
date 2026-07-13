# SSourcing China - Design System

## Color Palette
- **Primary Blue**: `#1B4D8E` - Trust, professionalism (headings, CTAs, primary buttons)
- **Primary Dark**: `#0F2D5A` - Deep blue for hero backgrounds, strong headings
- **Accent Orange**: `#E8762E` - Action-oriented elements, CTAs, highlights
- **Accent Light Orange**: `#F4A261` - Hover states, secondary accents
- **Background Light**: `#F7F9FC` - Page background, cards
- **Background White**: `#FFFFFF` - Cards, forms, content areas
- **Text Primary**: `#1A1A2E` - Main body text, headings
- **Text Secondary**: `#5A6377` - Descriptions, captions, subtle text
- **Text Light**: `#8B95A5` - Muted text, placeholders
- **Border Light**: `#E2E8F0` - Dividers, card borders, input borders
- **Success Green**: `#22C55E` - Success states, completed steps
- **Neutral Gray**: `#64748B` - Secondary elements

## Typography
- **Font Family**: Inter (Google Fonts) - Professional, clean, international
- **Hero Heading**: `text-4xl md:text-5xl lg:text-6xl font-bold` - Bold, commanding
- **Section Heading**: `text-3xl md:text-4xl font-bold` - Clear section breaks
- **Sub Heading**: `text-xl md:text-2xl font-semibold` - Card titles, feature headings
- **Body Large**: `text-lg` - Introductions, key paragraphs
- **Body**: `text-base` - Standard body text
- **Small**: `text-sm` - Captions, metadata, fine print

## Spacing & Layout
- **Section Padding**: `py-16 md:py-24` - Consistent vertical rhythm
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` - Standard content width
- **Card Padding**: `p-6 md:p-8` - Comfortable internal spacing
- **Grid Gaps**: `gap-6 md:gap-8` - Card and element spacing

## Component Styles

### Buttons
- **Primary**: `bg-accent hover:bg-accent-light text-white font-semibold px-6 py-3 rounded-lg shadow-md`
- **Secondary**: `bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white`
- **Ghost**: `text-primary hover:bg-primary/5`

### Cards
- **Standard**: `bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow`
- **Feature**: `bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center`

### Navigation
- **Header**: Sticky, white background, subtle shadow on scroll
- **Links**: `text-text-secondary hover:text-primary font-medium`
- **Active**: `text-primary font-semibold` with bottom border indicator

## Visual Guidelines
- Use stock images for: factory scenes, warehouse operations, shipping containers, quality inspection, team meetings
- Background patterns: Subtle geometric patterns for hero sections
- Icons: Lucide React icons for consistency
- Shadows: `shadow-sm` for cards, `shadow-lg` for elevated elements
- Border radius: `rounded-lg` (8px) for cards, `rounded-xl` (12px) for larger containers
- Transitions: `transition-all duration-200` for interactive elements

## B2B Trust Elements
- Client logos carousel
- Certification badges
- Statistics counters with animation
- Testimonial cards with company names
- Process step indicators with progress
- FAQ accordion with clear typography

## Responsive Breakpoints
- Mobile: < 640px - Single column, stacked layouts
- Tablet: 640px - 1024px - Two column grids
- Desktop: > 1024px - Full multi-column layouts, side-by-side sections
