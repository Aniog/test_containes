# Velmora Fine Jewelry - Design Specification

## Brand Overview
A premium DTC jewelry e-commerce storefront for demi-fine gold jewelry targeting women 25-45. The design embodies "quiet luxury" - editorial, warm, and refined without being loud or discount-looking.

## Design Language

### Color Palette
- **Ivory** (Primary Background): `#fffdf5` - Warm off-white, flatters gold jewelry photography
- **Charcoal** (Text & Dark): `#1f1f1f` - Deep charcoal for contrast and elegance
- **Champagne** (Accent): `#d9ad78` - Warm gold tone matching jewelry aesthetic
- **Velvet** (Warm Accent): `#693c37` - Deep warm red-brown for variety
- **Charcoal-50**: `#f6f6f6` - Light gray for section backgrounds

### Typography
- **Headings & Product Names**: Cormorant Garamond (serif) - elegant, editorial feel
- **Body & UI**: Manrope (sans-serif) - clean, modern, readable
- **Product Names**: UPPERCASE with wide letter-spacing (0.2em)
- **Section Labels**: Small caps with mega-wide letter-spacing (0.3em)

### Spacing & Layout
- Generous whitespace throughout
- Max container width: 1280px (7xl)
- Section padding: 5rem vertical on desktop, 3rem on mobile
- Product grid gaps: 1rem mobile, 1.5rem desktop

### Visual Elements
- Thin hairline dividers using champagne-300 at 30% opacity
- Subtle hover transitions (300ms ease)
- Soft shadows on cards and drawers
- Large editorial imagery
- Premium-feeling buttons (solid charcoal or outlined)

## Component States

### Buttons
- **Primary**: Solid charcoal-900 background, ivory-100 text, uppercase tracking
- **Outline**: Charcoal border with transparent background
- **Hover**: Slight background shift and shadow elevation
- **Disabled**: Reduced opacity

### Product Cards
- Aspect ratio: 3:4 (portrait, flattering for jewelry)
- Image hover: Scale 105% transform
- Secondary image fade-in on hover
- Quick Add button slides up from bottom on hover

### Navigation
- Transparent over hero, turns solid on scroll (with backdrop blur)
- Mobile: Full-screen overlay menu
- Cart: Slide-in drawer from right

## Pages & Features

### Homepage Sections
1. **Hero**: Full-bleed image with gradient overlay, serif headline, CTA
2. **Trust Bar**: Thin strip with shipping/quality icons
3. **Bestsellers**: 5-product grid with hover effects
4. **UGC Strip**: Horizontal scroll of 9:16 vertical cards
5. **Category Tiles**: 3-up image tiles with hover reveals
6. **Brand Story**: Split image/text section
7. **Testimonials**: 3-card grid
8. **Newsletter**: Accent background CTA
9. **Footer**: Multi-column with links and social

### Product Detail Page
- Image gallery with thumbnail navigation
- Product info: name (serif uppercase), price, rating, description
- Variant selector (pill buttons)
- Quantity controls
- Full-width Add to Cart
- Accordion accordions: Description, Materials & Care, Shipping

### Collection Page
- Filter sidebar (desktop) / modal (mobile)
- Category and price filters
- Sort dropdown
- Responsive product grid (2-3-4 columns)
- Quick Add hover functionality

### Cart
- Slide-in drawer
- Item list with quantity controls
- Remove functionality
- Subtotal calculation
- Checkout CTA

## Interactions & Animations
- Fade-in-up animations on scroll (using CSS keyframes)
- Smooth page transitions
- Hover transitions on all interactive elements
- Mobile menu slide animation
- Cart drawer slide-in animation

## Responsive Strategy
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Touch-friendly tap targets (minimum 44px)
- Simplified grid layouts on mobile
- Full-screen mobile menu
