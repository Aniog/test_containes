# SSourcing China - Design Guidelines

## Project Overview
- **Project Name**: SSourcing China - B2B Sourcing Agent Website
- **Type**: Multi-page corporate website
- **Core Functionality**: Professional B2B website for a China-based sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, and coordinate shipping
- **Target Users**: Overseas B2B buyers, procurement managers, business owners looking to source products from China

## Visual Style

### Color Palette
- **Primary**: `#1a365d` (Deep Navy Blue - trust, professionalism)
- **Primary Light**: `#2c5282` (Medium Blue)
- **Secondary**: `#c53030` (Professional Red - action, China connection)
- **Accent**: `#d69e2e` (Gold - premium, quality)
- **Background**: `#f7fafc` (Light Gray)
- **White**: `#ffffff`
- **Text Primary**: `#1a202c` (Near Black)
- **Text Secondary**: `#4a5568` (Gray)
- **Text Muted**: `#718096` (Light Gray)
- **Border**: `#e2e8f0` (Light Border)
- **Success**: `#38a169` (Green)
- **Warning**: `#dd6b20` (Orange)

### Typography
- **Font Family**: "Inter", system-ui, sans-serif
- **Headings**: 
  - H1: 48px/56px, font-weight 700
  - H2: 36px/44px, font-weight 700
  - H3: 24px/32px, font-weight 600
  - H4: 20px/28px, font-weight 600
- **Body**: 16px/24px, font-weight 400
- **Small**: 14px/20px, font-weight 400

### Layout
- **Max Width**: 1280px
- **Container Padding**: 24px (mobile), 48px (desktop)
- **Section Spacing**: 80px (mobile), 120px (desktop)
- **Grid**: 12-column grid system

### Spacing System
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

### Visual Effects
- **Border Radius**: 8px (cards), 4px (buttons), 50% (avatars)
- **Shadows**: 
  - sm: `0 1px 2px rgba(0,0,0,0.05)`
  - md: `0 4px 6px rgba(0,0,0,0.1)`
  - lg: `0 10px 15px rgba(0,0,0,0.1)`
- **Transitions**: 200ms ease-in-out

## Components

### Navigation
- Fixed header with white background
- Logo on left, navigation links center, CTA button right
- Mobile: hamburger menu with slide-out drawer
- Active state: primary color underline

### Buttons
- **Primary**: Navy background, white text, red hover
- **Secondary**: White background, navy border, navy text
- **CTA**: Red background, white text, darker red hover
- **Sizes**: sm (32px), md (40px), lg (48px)

### Cards
- White background
- Subtle shadow
- 8px border radius
- 24px padding

### Icons
- Lucide React icons
- Size: 20px (small), 24px (medium), 32px (large)

### Form Elements
- Input height: 48px
- Border: 1px solid #e2e8f0
- Focus: 2px primary color ring
- Error: red border, error message below

## Page Sections

### Homepage
1. **Hero Section**
   - Full-width background with subtle pattern
   - Headline: "China Sourcing Agent for Global Buyers"
   - Subheadline: Brief value proposition
   - CTA: "Get a Free Sourcing Quote"
   - Trust badges below CTA

2. **Services Section**
   - 6 service cards in 3-column grid
   - Services: Supplier Discovery, Factory Verification, Quality Inspection, Production Follow-up, Shipping & Logistics, Sample Management

3. **Problems We Solve Section**
   - 4 problem cards with icons
   - Problems: Language barriers, Quality issues, Scam prevention, Logistics complexity

4. **Sourcing Process Section**
   - 5-step horizontal timeline
   - Steps: Submit Request → Supplier Matching → Sample Evaluation → Order & Production → Shipping & Delivery

5. **Products We Source Section**
   - Category grid (6-8 categories)
   - Categories: Electronics, Furniture, Textiles, Machinery, Packaging, Toys, Food Equipment, Medical Supplies

6. **Trust Points Section**
   - Statistics: Years in business, Suppliers verified, Orders completed, Client satisfaction
   - Trust badges and certifications

7. **Case Studies Section**
   - 3 featured case study cards
   - Each with: Company, Challenge, Solution, Result

8. **FAQ Section**
   - Accordion with 6-8 common questions

9. **CTA Section**
   - Final call to action with inquiry form
   - "Ready to Start Sourcing?"

10. **Footer**
    - Company info, Quick links, Services, Contact info
    - Social links, Copyright

### Services Page
- Hero with page title
- Detailed service cards (6 services)
- Why choose us section
- CTA section

### How It Works Page
- Hero with page title
- Step-by-step process (5 steps)
- Timeline visualization
- FAQ section

### Products We Source Page
- Hero with page title
- Category grid with images
- Product examples per category

### Case Studies Page
- Hero with page title
- Case study cards (6+ cases)
- Results/impact metrics

### Blog Page
- Hero with page title
- Blog post grid
- Categories filter
- Search functionality

### Contact Page
- Hero with page title
- Contact form (full inquiry form)
- Contact information
- Map placeholder
- FAQ section

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## Animations
- Fade-in on scroll for sections
- Hover effects on cards (slight lift)
- Button hover transitions
- Smooth scroll between sections

## Images
- Use stock images for: factory floors, QC inspections, shipping containers, warehouse, business meetings
- Aspect ratios: 16:9 (hero), 4:3 (cards), 1:1 (avatars)
- Placeholder: gray background with icon

## Do's and Don'ts
- **Do**: Use professional, clean design; Include real statistics; Show actual process steps; Use clear CTAs
- **Don't**: Use exaggerated claims; Overly flashy animations; Cluttered layouts; Unreadable text colors