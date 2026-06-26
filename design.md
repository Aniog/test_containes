# ARTITECT MACHINERY Website Design Specification

## Concept & Vision

A sophisticated, professional website for ARTITECT MACHINERY that conveys precision engineering and industrial excellence. The design balances elegant minimalism with warmth and approachability—making heavy machinery feel accessible while maintaining a premium, trustworthy impression. The site should feel like walking into a modern, well-lit showroom where precision tools are displayed as works of art.

## Design Language

### Aesthetic Direction
Industrial elegance meets Scandinavian warmth. Clean lines, generous whitespace, and subtle geometric accents that echo the precision of metal fabrication. Think high-end architectural firm meets precision tool manufacturer.

### Color Palette
- **Primary**: `#1A1A2E` (Deep Navy) - Authority, trust, industrial strength
- **Secondary**: `#16213E` (Dark Blue) - Depth, professionalism
- **Accent**: `#E94560` (Industrial Red) - Energy, action, key CTAs
- **Background Light**: `#F8F9FA` (Off-white) - Clean, spacious feel
- **Background Dark**: `#0F0F1A` (Near Black) - Premium sections
- **Text Primary**: `#1A1A2E` (Deep Navy)
- **Text Secondary**: `#6B7280` (Muted Gray)
- **Text Light**: `#F8F9FA` (Off-white for dark backgrounds)
- **Border/Divider**: `#E5E7EB` (Light Gray)
- **Success**: `#10B981` (Emerald)

### Typography
- **Headings**: "Plus Jakarta Sans" (Google Fonts) - Modern, geometric, confident
  - H1: 64px/72px, weight 800
  - H2: 48px/56px, weight 700
  - H3: 32px/40px, weight 600
  - H4: 24px/32px, weight 600
- **Body**: "Inter" (Google Fonts) - Clean, highly readable
  - Body: 16px/24px, weight 400
  - Small: 14px/20px, weight 400
- **Accent/Labels**: 12px/16px, weight 600, uppercase, letter-spacing 0.1em

### Spatial System
- Base unit: 8px
- Section padding: 96px (desktop), 64px (tablet), 48px (mobile)
- Container max-width: 1280px
- Grid: 12-column with 24px gutters
- Card border-radius: 16px
- Button border-radius: 8px

### Motion Philosophy
- Subtle, purposeful animations that convey precision
- Fade-in with slight upward motion: opacity 0→1, translateY 20px→0, 600ms ease-out
- Hover states: 200ms ease transitions
- No jarring or playful animations—everything should feel controlled and intentional

### Visual Assets
- Icons: Lucide React - clean, consistent stroke weight
- Images: Industrial photography with clean backgrounds, focus on machine details
- Decorative: Subtle geometric lines, angular accents reflecting sheet metal

## Layout & Structure

### Page Flow
1. **Navigation** - Fixed, transparent on hero, solid on scroll
2. **Hero** - Full viewport, bold statement, clear CTA
3. **Products** - Grid showcase of machinery
4. **Features** - Why choose ARTITECT (3-4 key differentiators)
5. **About/Stats** - Company credibility section
6. **Contact** - Clean contact form with company info
7. **Footer** - Navigation, social links, legal

### Responsive Strategy
- Desktop: Full multi-column layouts, generous spacing
- Tablet (768px): 2-column grids, adjusted typography
- Mobile (480px): Single column, stacked layouts, touch-friendly CTAs

## Features & Interactions

### Navigation
- Smooth scroll to sections on nav click
- Active section highlighting
- Mobile hamburger menu with slide-in drawer
- Logo click returns to top

### Hero Section
- Large headline with gradient text accent
- Subheadline explaining value proposition
- Primary CTA button
- Subtle animated background element (gradient shift or geometric pattern)

### Products Grid
- 3-column grid (2 on tablet, 1 on mobile)
- Each product card:
  - Image placeholder with gradient background
  - Product name
  - Brief description
  - "Learn More" link
- Hover: Card lifts slightly with shadow

### Features Section
- Icon + headline + description pattern
- 4 features in grid
- Subtle dividers between items

### Stats Section
- Dark background for contrast
- 4 key numbers (years experience, machines sold, countries, etc.)
- Animated count-up on scroll into view

### Contact Form
- Name, email, phone, message fields
- Product interest dropdown
- Submit button with loading state
- Success/error feedback

### Footer
- 4-column layout (logo+about, products, company, contact)
- Social media icons
- Copyright and legal links

## Component Inventory

### Button
- Primary: Accent background, white text, hover darkens
- Secondary: Transparent with border, hover fills
- States: Default, hover, active, disabled, loading

### Card
- White background, subtle shadow
- 16px border radius
- Hover: elevated shadow, slight translateY

### Input Fields
- Clean border style
- Focus: accent color border
- Error: red border with message
- 8px border radius

### Section Headers
- Eyebrow text (small caps, accent color)
- Main heading (large, primary color)
- Subheading (secondary text color)

## Technical Approach

- React with functional components and hooks
- Tailwind CSS v4 for styling
- Lucide React for icons
- React Router not needed (single page with sections)
- Smooth scroll behavior via CSS
- Intersection Observer for scroll animations
