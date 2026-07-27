# SSourcing China - Design Specification

## Project Overview
- **Project Name**: SSourcing China Website
- **Type**: B2B Corporate Website
- **Core Functionality**: Professional China sourcing agent website to generate qualified sourcing inquiries
- **Target Users**: Overseas buyers, procurement managers, business owners looking to source products from China

## Visual Style

### Overall Aesthetic
- Clean, professional, trustworthy, international B2B style
- Minimalist design with clear information hierarchy
- Focus on clarity and readability
- No exaggerated claims - practical and results-oriented

### Color Palette
- **Primary**: `#2563EB` (Blue 600) - Trust, professionalism
- **Primary Dark**: `#1D4ED8` (Blue 700) - Hover states
- **Secondary**: `#0F172A` (Slate 900) - Headers, important text
- **Background**: `#FFFFFF` (White) - Main background
- **Background Alt**: `#F8FAFC` (Slate 50) - Section backgrounds
- **Text Primary**: `#0F172A` (Slate 900)
- **Text Secondary**: `#475569` (Slate 600)
- **Text Muted**: `#64748B` (Slate 500)
- **Success**: `#22C55E` (Green 500)
- **Border**: `#E2E8F0` (Slate 200)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 
  - H1: 48px/56px (mobile: 36px), font-weight: 700
  - H2: 36px/44px (mobile: 28px), font-weight: 700
  - H3: 24px/32px, font-weight: 600
  - H4: 20px/28px, font-weight: 600
- **Body**: 16px/24px, font-weight: 400
- **Small**: 14px/20px

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (mobile: 48px)
- Container max-width: 1280px (7xl)
- Grid gap: 32px (8)

### Visual Effects
- Border radius: 8px (small), 12px (medium), 16px (large)
- Box shadows: Light, subtle shadows for cards
- Transitions: 200ms ease-in-out for hover states
- No heavy gradients or flashy animations

## Layout Structure

### Header (Fixed)
- Logo on left (SSourcing China with blue accent)
- Navigation links centered
- "Get a Free Quote" CTA button on right
- Mobile: Hamburger menu

### Footer
- Company info and description
- Quick links navigation
- Contact information
- Copyright

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Page Specifications

### 1. Home Page
- **Hero Section**: Dark gradient background, headline, subtext, dual CTAs
- **Trust Points Bar**: Statistics (500+ projects, 8+ years, 50+ industries, 98% satisfaction)
- **Services Overview**: 4-column grid of main services
- **Problems We Solve**: 4-column grid of common challenges
- **Sourcing Process**: 7-step process visualization
- **Products We Source**: Grid of product categories
- **Case Studies**: 2-column success stories
- **FAQ Section**: Accordion-style common questions
- **Inquiry Form**: Full contact form with validation

### 2. Services Page
- **Hero**: Dark gradient, page title
- **Services Grid**: 8 detailed services with features lists
- **Process Steps**: 7-step service workflow
- **Why Choose Us**: Benefits + CTA

### 3. How It Works Page
- **Hero**: Dark gradient, page title
- **Process Steps**: Detailed 7-step explanation with icons
- **Timeline Table**: Typical project duration
- **Benefits**: 4 key advantages
- **CTA Section**

### 4. Products We Source Page
- **Hero**: Dark gradient, page title
- **Categories Grid**: 8 product categories with details
- **Capabilities**: List of sourcing capabilities
- **CTA Section**

### 5. Case Studies Page
- **Hero**: Dark gradient, page title
- **Stats Bar**: Key performance metrics
- **Case Studies**: Detailed success stories with testimonials
- **Testimonials Grid**: Client reviews
- **CTA Section**

### 6. Blog Page
- **Hero**: Dark gradient, page title
- **Featured Post**: Large featured article
- **Sidebar**: Categories, search, newsletter
- **Posts Grid**: Blog article cards
- **CTA Section**

### 7. Contact Page
- **Hero**: Dark gradient, page title
- **Contact Info Cards**: 4 info blocks
- **Contact Form**: Full form with validation
- **Next Steps**: Process explanation
- **Map Section**: Location placeholder

## Components

### Buttons
- Primary: Blue background, white text, rounded-lg
- Secondary: White background, blue text, border
- Hover: Darker shade, subtle transition

### Cards
- Background: White or slate-50
- Border radius: 12px-16px
- Padding: 24px-32px
- Hover: Subtle shadow increase

### Forms
- Input fields: Full width, rounded-lg, border
- Focus state: Blue ring
- Error state: Red border, error message
- Labels: Above inputs, medium weight

### Icons
- Lucide React icons
- Consistent sizing (w-5, w-6, w-12, etc.)
- Blue or slate colors

## Acceptance Criteria

### Visual
- [ ] All text is clearly readable against backgrounds
- [ ] Consistent spacing and alignment
- [ ] Professional, trustworthy appearance
- [ ] Responsive on all device sizes
- [ ] No layout breaks or overflow issues

### Functional
- [ ] All navigation links work
- [ ] Mobile menu opens/closes properly
- [ ] Forms validate required fields
- [ ] Form submission shows success state
- [ ] FAQ accordion expands/collapses

### Content
- [ ] All pages have proper content
- [ ] No placeholder text visible
- [ ] Professional tone throughout
- [ ] SEO title and meta description set