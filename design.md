# ARTITECT MACHINERY - Website Design Specification

## 1. Brand Overview

**Brand Name:** ARTITECT MACHINERY
**Industry:** Industrial Manufacturing - Sheet Metal Folding Machines
**Core Products:** Double folding machines, double folders, sheet metal folders, sheet metal folding machines, metal folders, metal folder machines, metal folding machines
**Brand Personality:** Professional, reliable, precise, elegant yet approachable
**Target Audience:** Manufacturing professionals, metalworking shops, industrial engineers, factory owners

## 2. Design Philosophy

**Style:** Elegant industrial - clean lines, professional aesthetics, user-friendly navigation
**Core Principles:**
- Clean, uncluttered layouts that convey precision and professionalism
- Strong visual hierarchy emphasizing product quality
- Easy navigation with clear calls-to-action
- Balance between industrial strength and modern elegance

## 3. Color Palette

### Primary Colors
- **Primary Navy:** `#1B2A4A` - Main brand color, headers, CTAs
- **Primary Gold:** `#C9A961` - Accent highlights, premium feel
- **Primary Steel:** `#64748B` - Secondary text, subtle accents

### Background Colors
- **Light Background:** `#FAFBFC` - Main page background
- **Card Background:** `#FFFFFF` - Content cards
- **Dark Section:** `#0F172A` - Footer, contrast sections
- **Subtle Gray:** `#F1F5F9` - Alternating sections

### Text Colors
- **Primary Text:** `#1E293B` - Headlines, important content
- **Secondary Text:** `#475569` - Body text, descriptions
- **Light Text:** `#94A3B8` - Captions, meta info
- **White Text:** `#FFFFFF` - On dark backgrounds

### Accent Colors
- **Accent Gold:** `#D4AF37` - Hover states, highlights
- **Success Green:** `#10B981` - Positive indicators
- **Link Blue:** `#3B82F6` - Interactive elements

## 4. Typography

### Font Family
- **Primary Font:** Inter (via Google Fonts)
- **Headings:** Inter, 700-800 weight
- **Body:** Inter, 400-500 weight

### Type Scale
- **Hero Title:** 3.5rem - 4rem (56-64px), 800 weight
- **Section Title:** 2.25rem - 3rem (36-48px), 700 weight
- **Card Title:** 1.25rem - 1.5rem (20-24px), 600 weight
- **Body Text:** 1rem - 1.125rem (16-18px), 400-500 weight
- **Small Text:** 0.875rem (14px), 400 weight

### Line Heights
- Headlines: 1.1 - 1.2
- Body: 1.5 - 1.7

## 5. Spacing System

- **Section Padding:** 80px - 120px vertical
- **Container Max Width:** 1280px (max-w-7xl)
- **Card Padding:** 24px - 32px
- **Element Gap:** 16px - 32px
- **Grid Gap:** 24px - 32px

## 6. Component Guidelines

### Buttons
- **Primary Button:** Navy background (#1B2A4A), white text, rounded-lg (8px)
- **Secondary Button:** White background, navy border, navy text
- **Hover State:** Slight scale (1.02), shadow enhancement
- **Padding:** 12px - 20px horizontal, 10px - 14px vertical

### Cards
- White background with subtle shadow
- Border radius: 12px - 16px
- Shadow: 0 4px 6px -1px rgba(0,0,0,0.1)
- Hover: Shadow enhancement, slight lift

### Navigation
- Fixed header with blur backdrop
- Logo on left, nav links center/right
- Mobile: Hamburger menu with slide-out drawer

### Icons
- Lucide React icons
- Stroke width: 1.5 - 2
- Color: Inherit from parent or use brand colors

## 7. Section Layouts

### Header/Navigation
- Fixed position with backdrop blur
- Logo + nav links + CTA button
- Height: 72px - 80px

### Hero Section
- Large background area (50vh minimum)
- Bold headline + subheadline
- CTA buttons
- Optional product image or illustration

### Products Section
- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Product cards with image, title, brief description
- "View All Products" CTA

### Features/Benefits Section
- Icon + text layout
- 3-4 columns
- Highlight key advantages

### About Section
- Company story/brief
- Key statistics (years in business, clients, etc.)
- Optional image

### Contact Section
- Contact form or contact info
- Clear CTA to get in touch

### Footer
- Dark background
- Company info, quick links, social links
- Copyright

## 8. Motion & Interactions

### Hover Effects
- Scale: 1.02 - 1.05
- Shadow enhancement
- Transition: 200-300ms ease

### Scroll Animations
- Fade in on scroll (optional)
- Staggered animations for lists

### Loading States
- Skeleton loaders for content
- Spinner for actions

## 9. Responsive Breakpoints

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 1024px (md, lg)
- **Desktop:** > 1024px (xl, 2xl)

## 10. Accessibility

- WCAG 2.1 AA compliance
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Sufficient color contrast (4.5:1 minimum)

## 11. File Structure

```
src/
  components/
    ui/
      Button.jsx
      Card.jsx
    Header.jsx
    Hero.jsx
    Products.jsx
    Features.jsx
    About.jsx
    Contact.jsx
    Footer.jsx
  App.jsx
  index.css
```

## 12. Do's and Don'ts

### Do
- Use clean, professional imagery
- Maintain consistent spacing
- Use the gold accent sparingly for emphasis
- Keep navigation simple and intuitive
- Ensure mobile responsiveness
- Use high contrast for readability

### Don't
- Use too many colors
- Overcrowd layouts
- Use flashy animations
- Make text too small
- Use low-quality images
- Create complex navigation structures