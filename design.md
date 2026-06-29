# ARTITECT MACHINERY Website Design Specification

## 1. Concept & Vision

A sophisticated industrial website that balances engineering precision with approachable elegance. The design conveys technological mastery and reliability while remaining accessible to potential clients seeking sheet metal folding solutions. The visual language bridges the gap between heavy industry and modern, clean aesthetics—professional without being cold.

## 2. Design Language

### Aesthetic Direction
Industrial minimalism meets premium corporate—inspired by high-end manufacturing catalogs and precision engineering brands. Clean lines, generous whitespace, and subtle geometric accents reflect the precision of the machines themselves.

### Color Palette
- **Primary**: `#1a1f2e` (Deep Navy) - Authority, trust, industrial strength
- **Secondary**: `#c4a052` (Brushed Gold) - Premium quality, precision engineering
- **Accent**: `#3b82f6` (Electric Blue) - Innovation, technology, action CTAs
- **Background Light**: `#f8f9fb` (Soft Gray) - Clean, professional canvas
- **Background Dark**: `#0d1117` (Near Black) - Sophistication, contrast sections
- **Text Primary**: `#1f2937` (Charcoal) - Readable, professional
- **Text Light**: `#f1f5f9` (Off-White) - For dark backgrounds
- **Text Muted**: `#64748b` (Slate) - Secondary information

### Typography
- **Headlines**: "Plus Jakarta Sans" (700, 600) - Modern, geometric, confident
- **Body**: "Inter" (400, 500) - Highly readable, professional
- **Accent/Labels**: "Plus Jakarta Sans" (500) - Technical specifications, CTAs

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Component gaps: 24px, 32px, 48px
- Max content width: 1200px
- Border radius: 4px (buttons), 8px (cards), 16px (large containers)

### Motion Philosophy
- Subtle fade-in animations on scroll (opacity + slight Y translate)
- Smooth hover transitions (0.3s ease)
- Button hover: subtle lift with shadow enhancement
- No flashy animations—motion should feel precise and controlled

### Visual Assets
- Hero section with industrial machinery imagery or abstract geometric pattern
- Subtle diagonal line patterns as decorative accents
- Icon style: Lucide React icons (outlined, 1.5px stroke)
- Product cards with hover state elevation

## 3. Layout & Structure

### Page Sections (Single Page)
1. **Navigation Bar** - Fixed, transparent on hero, solid on scroll
2. **Hero Section** - Full viewport height, bold headline, trust indicators
3. **Products Section** - Grid of product categories with icons
4. **Features Section** - Key benefits with iconography
5. **About Section** - Company story with stats/achievements
6. **Contact Section** - Contact form and information
7. **Footer** - Links, social, copyright

### Responsive Strategy
- Desktop: Multi-column layouts, generous spacing
- Tablet (768px): Adjusted grids, reduced padding
- Mobile (640px): Single column, stacked content, hamburger menu

## 4. Features & Interactions

### Navigation
- Smooth scroll to sections on click
- Active section highlighting
- Mobile: Slide-in menu from right

### Hero Section
- Animated text entrance (staggered)
- Dual CTA buttons: "View Products" + "Contact Us"

### Product Cards
- Hover: Elevation + border highlight
- Each card links to product detail concept

### Contact Form
- Fields: Name, Email, Company, Message
- Validation with inline error messages
- Success state after submission
- Form resets on successful submit

### Scroll Animations
- Elements fade in when entering viewport
- Staggered animation for grid items

## 5. Component Inventory

### Button Component
- **Primary**: Blue background, white text, gold hover accent
- **Secondary**: Transparent with border, navy text
- **States**: Default, hover (lift + shadow), active (pressed), disabled (50% opacity)

### Navigation
- Logo (text-based with accent)
- Desktop: Horizontal links with hover underline
- Mobile: Hamburger icon, slide-out panel

### Product Card
- Icon, title, description, subtle "Learn More" link
- Border, shadow on hover
- Background: White on light sections

### Feature Item
- Icon in accent color circle
- Title and description
- Horizontal layout on desktop, vertical on mobile

### Stat Counter
- Large number (gold accent)
- Label below
- Subtle animation on scroll into view

### Form Input
- Label above
- Border on focus (blue)
- Error state (red border + message)
- Placeholder text in muted color

### Footer
- Multi-column layout
- Links grouped by category
- Social icons
- Copyright with current year

## 6. Technical Approach

### Stack
- React 18+ with Vite
- Tailwind CSS v4
- Lucide React icons
- Custom CSS for specific animations

### Key Implementation Details
- Single App.jsx with all components (simple site)
- CSS custom properties for theme values
- Intersection Observer for scroll animations
- Form state management with useState
- Mobile menu state with useState
- Smooth scroll behavior via CSS

### Performance
- Lazy load below-fold images
- Minimal JS bundle
- Optimized font loading with display: swap