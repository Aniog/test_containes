# SSourcing China - Design Specification

## Project Overview
- **Project Name**: SSourcing China Website
- **Type**: B2B Corporate Website
- **Purpose**: Generate qualified sourcing inquiries for China sourcing agent services
- **Target Audience**: Overseas buyers, procurement managers, business owners looking to source products from China

## Visual Style

### Color Palette
- **Primary**: Blue (#2563EB / blue-600) - Trust, professionalism
- **Primary Dark**: Blue-700 (#1D4ED8) - Hover states
- **Primary Light**: Blue-100 (#DBEAFE) - Backgrounds, accents
- **Secondary**: Slate (#475569 / slate-600) - Body text
- **Dark**: Slate-900 (#0F172A) - Headings, dark backgrounds
- **Light**: Slate-50 (#F8FAFC) - Section backgrounds
- **Success**: Green (#22C55E) - Success indicators
- **Error**: Red (#EF4444) - Error states

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, Slate-900
  - H1: 4xl-5xl (36px-48px)
  - H2: 3xl-4xl (30px-36px)
  - H3: xl-2xl (20px-24px)
- **Body**: Regular, Slate-600, 16px-18px
- **Small**: 14px for secondary information

### Layout
- **Max Width**: 7xl (1280px) for main content
- **Spacing**: 8px base unit (Tailwind default)
- **Section Padding**: py-24 (96px) vertical
- **Container Padding**: px-4 sm:px-6 lg:px-8

### Visual Effects
- **Shadows**: Subtle shadows on cards (shadow-sm, shadow-lg)
- **Border Radius**: 
  - Buttons: rounded-lg (8px)
  - Cards: rounded-xl (12px), rounded-2xl (16px)
- **Transitions**: 200-300ms for hover states
- **Gradients**: Subtle gradient backgrounds for hero sections

## Components

### Header
- Fixed position with backdrop blur
- Logo (left): "SSourcing China" with blue accent
- Navigation (center): Home, Services, How It Works, Products, Case Studies, Blog, Contact
- CTA Button (right): "Get a Free Quote"
- Mobile: Hamburger menu with slide-out navigation

### Footer
- Dark background (Slate-900)
- Company info, quick links, contact details
- Copyright notice

### Buttons
- Primary: Blue background, white text, rounded-lg
- Secondary: White/light background, dark text
- Hover: Darker shade, subtle shadow

### Cards
- White background with subtle border
- Rounded corners (rounded-xl or rounded-2xl)
- Hover: Shadow elevation

### Forms
- Input fields: Full width, rounded-lg, border-gray-300
- Focus state: Blue ring
- Labels: Medium weight, slate-700
- Error state: Red border and error message

## Pages

### 1. Home Page
- Hero section with headline and CTA
- Trust stats bar
- Services overview (4 cards)
- Process steps (5 steps)
- Products grid (6 categories)
- Problems/Solutions section
- Case studies (3 cards)
- FAQ accordion
- Final CTA section

### 2. Services Page
- Service detail sections with features and process
- Additional services
- Why choose us

### 3. How It Works Page
- 5 detailed process steps
- Timeline visualization
- Benefits section

### 4. Products Page
- Product category grid (10 categories)
- Capabilities section

### 5. Case Studies Page
- Featured case studies with metrics
- Testimonials

### 6. Blog Page
- Featured post
- Blog grid
- Newsletter signup

### 7. Contact Page
- Contact information
- Full inquiry form with validation

## Responsive Breakpoints
- **Mobile**: < 640px (default)
- **Tablet**: sm: 640px
- **Desktop**: lg: 1024px
- **Large Desktop**: xl: 1280px

## Animations
- Fade-in-up for hero content
- Smooth transitions on hover
- Accordion expand/collapse for FAQ

## Accessibility
- Semantic HTML
- Proper heading hierarchy
- Form labels and error messages
- Keyboard navigation support
- Sufficient color contrast