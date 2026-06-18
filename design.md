# SSourcing China - Design Guidelines

## Project Overview
- **Project Name**: SSourcing China - B2B Sourcing Agent Website
- **Type**: Multi-page B2B website
- **Core Functionality**: Professional website for a China-based sourcing agent helping overseas buyers find suppliers, verify factories, inspect quality, and coordinate shipping
- **Target Users**: Overseas B2B buyers, procurement managers, business owners looking to source products from China

## Visual Style

### Color Palette
- **Primary**: `#1a365d` (Deep Navy Blue - trust, professionalism)
- **Primary Light**: `#2c5282` (Medium Blue)
- **Secondary**: `#c53030` (Professional Red - accent for CTAs)
- **Secondary Light**: `#e53e3e` (Bright Red for hover states)
- **Accent**: `#38a169` (Green - success, trust)
- **Background Primary**: `#ffffff` (White)
- **Background Secondary**: `#f7fafc` (Light Gray)
- **Background Tertiary**: `#edf2f7` (Slightly darker gray)
- **Text Primary**: `#1a202c` (Near Black)
- **Text Secondary**: `#4a5568` (Dark Gray)
- **Text Muted**: `#718096` (Medium Gray)
- **Border**: `#e2e8f0` (Light Border)

### Typography
- **Font Family**: "Inter", system-ui, sans-serif
- **Headings**: 
  - H1: 48px/56px, font-weight 800
  - H2: 36px/44px, font-weight 700
  - H3: 24px/32px, font-weight 600
  - H4: 20px/28px, font-weight 600
- **Body**: 16px/24px, font-weight 400
- **Small**: 14px/20px, font-weight 400

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Grid gap: 32px

### Visual Effects
- Card shadows: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- Hover shadows: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- Border radius: 8px (cards), 4px (buttons), 50% (avatars)
- Transitions: 200ms ease-in-out

## Layout Structure

### Header
- Fixed navigation bar
- Logo (left): "SSourcing China" with icon
- Navigation links (center): Home, Services, How It Works, Products, Case Studies, Blog, Contact
- CTA button (right): "Get a Free Quote"
- Mobile: Hamburger menu

### Footer
- 4-column layout
- Column 1: Logo, company description, contact info
- Column 2: Services links
- Column 3: Company links
- Column 4: Newsletter signup
- Bottom bar: Copyright, privacy policy, terms

## Page Sections

### Homepage
1. **Hero Section**
   - Large headline: "China Sourcing Agent for Global Buyers"
   - Subheadline: Supporting overseas businesses with supplier verification, quality control, and end-to-end logistics
   - Primary CTA: "Get a Free Sourcing Quote" (red button)
   - Secondary CTA: "View Our Services" (outlined button)
   - Background: Professional factory/warehouse image with overlay

2. **Services Section**
   - Section title: "Our Sourcing Services"
   - 6 service cards in 3x2 grid:
     - Supplier Identification & Verification
     - Factory Audits & Compliance Checks
     - Quality Control & Pre-shipment Inspection
     - Production Follow-up & Monitoring
     - Shipping & Logistics Coordination
     - Sample Management & Testing

3. **Sourcing Process Section**
   - Section title: "How We Work"
   - 5-step horizontal timeline:
     1. Submit Requirements
     2. Supplier Matching
     3. Verification & Negotiation
     4. Production Monitoring
     5. Shipping & Delivery

4. **Products We Source Section**
   - Section title: "Products We Source"
   - Category grid with icons:
     - Electronics & Consumer Electronics
     - Home & Kitchen Appliances
     - Furniture & Home Decor
     - Textile & Garments
     - Industrial Equipment
     - Packaging Materials
     - Toys & Gifts
     - Automotive Parts

5. **Problems We Solve Section**
   - Section title: "Why Work With Us"
   - 4 problem/solution cards:
     - Language & Cultural Barriers
     - Quality & Reliability Risks
     - Logistics & Shipping Complexities
     - Fraud & Scam Prevention

6. **Trust Points Section**
   - Statistics/credentials:
     - 500+ Suppliers Verified
     - 10+ Years Experience
     - 98% Client Satisfaction
     - 50+ Countries Served

7. **Case Studies Preview**
   - Section title: "Success Stories"
   - 3 featured case study cards with results

8. **FAQ Section**
   - 6-8 common questions with expandable answers

9. **CTA Section**
   - "Ready to Start Sourcing?"
   - Contact form or button to contact page

10. **Footer**
    - Complete footer as defined

### Services Page
- Detailed service descriptions
- Process breakdowns for each service
- Pricing transparency where applicable

### How It Works Page
- Detailed step-by-step process
- Timeline visualization
- FAQ specific to the process

### Products We Source Page
- Full category listing
- Sourcing capabilities
- Minimum order quantities

### Case Studies Page
- Detailed case studies with results
- Industry examples
- Client testimonials

### Blog Page
- Industry insights
- Sourcing tips
- China market updates

### Contact Page
- Contact form with fields:
  - Name (required)
  - Company (required)
  - Email (required)
  - Phone (optional)
  - Product Interest (dropdown)
  - Message (required)
- Office location information
- Response time expectations

## Components

### Buttons
- **Primary**: Red background (#c53030), white text, hover darken
- **Secondary**: White background, navy border, navy text
- **Outline**: Transparent, navy border, navy text

### Cards
- White background
- Subtle shadow
- 8px border radius
- Hover: elevated shadow

### Form Inputs
- Full width
- 48px height
- Border: 1px solid #e2e8f0
- Focus: navy border
- Error: red border

### Icons
- Lucide React icons
- Consistent sizing (24px standard)

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Do's and Don'ts
- DO: Use professional, clean design
- DO: Include realistic factory/QC/shipping imagery
- DO: Keep text concise and scannable
- DO: Use clear CTAs
- DON'T: Use exaggerated claims
- DON'T: Use overly flashy animations
- DON'T: Use low-quality or stock-photo-heavy imagery
- DON'T: Make text too small or hard to read