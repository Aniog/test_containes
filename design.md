# SSourcing China - Design Guidelines

## Project Overview
- **Project Name**: SSourcing China Website
- **Type**: B2B Corporate Website
- **Purpose**: Generate qualified sourcing inquiries for China sourcing agent services
- **Target Audience**: Overseas buyers, procurement managers, business owners looking to source products from China

## Visual Style

### Color Palette
- **Primary**: `#1a365d` (Deep Navy Blue - trust, professionalism)
- **Primary Light**: `#2c5282` (Medium Blue)
- **Secondary**: `#c53030` (Professional Red - action, China connection)
- **Accent**: `#d69e2e` (Gold - premium, quality)
- **Background**: `#f7fafc` (Light Gray)
- **Surface**: `#ffffff` (White)
- **Text Primary**: `#1a202c` (Near Black)
- **Text Secondary**: `#4a5568` (Gray)
- **Text Muted**: `#718096` (Light Gray)
- **Border**: `#e2e8f0` (Light Border)
- **Success**: `#38a169` (Green)
- **Warning**: `#d69e2e` (Gold)

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

## Layout Guidelines

### Header
- Fixed position, white background with subtle shadow on scroll
- Logo on left, navigation center, CTA button right
- Mobile: hamburger menu

### Footer
- Dark background (#1a365d)
- 4 columns: About, Services, Resources, Contact
- Copyright and social links

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Component Guidelines

### Buttons
- **Primary**: Navy background, white text, red hover
- **Secondary**: White background, navy border, navy text
- **CTA**: Red background, white text, prominent size

### Cards
- White background
- Subtle shadow
- 8px border radius
- Hover: elevated shadow

### Icons
- Lucide React icons
- Size: 24px default, 20px for inline
- Color: inherit or primary

### Images
- Use stock images for: factory floors, QC inspection, shipping containers, warehouse, meeting场景
- Aspect ratios: 16:9 for hero, 4:3 for cards, 1:1 for team
- Lazy loading enabled

## Page Structure

### Home Page Sections
1. **Hero**: Full-width, headline, subheadline, CTA, background image
2. **Services Overview**: 4-6 service cards in grid
3. **Sourcing Process**: 5-step process with icons
4. **Products We Source**: Category grid with images
5. **Problems We Solve**: Pain points and solutions
6. **Trust Points**: Stats, certifications, testimonials
7. **Case Studies Preview**: 3 featured cases
8. **FAQ**: Common questions with accordion
9. **CTA Section**: Final call to action
10. **Footer**: Links and contact info

### Tone & Voice
- Professional and confident
- Practical, not exaggerated
- Clear and direct
- Use "we" for company, "you" for visitor
- Avoid: "best", "guaranteed", "100%"
- Use: "helping", "ensuring", "reducing risk"

## Do's and Don'ts

### Do
- Use high-quality professional imagery
- Maintain consistent spacing
- Use clear, scannable content
- Include trust signals
- Make CTAs prominent
- Ensure mobile responsiveness

### Don't
- Use overly salesy language
- Clutter with too many elements
- Use low-quality or generic images
- Mix different font styles
- Use too many colors