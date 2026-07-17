# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry embodies **quiet luxury** — the quiet confidence of jewelry that feels both precious and approachable. The experience should feel like flipping through a high-end fashion magazine: generous whitespace, warm editorial photography, and restrained elegance. Every interaction whispers quality rather than shouting for attention. The brand speaks to women who appreciate craftsmanship, invest in timeless pieces, and treat jewelry as self-expression, not status display.

## 2. Design Language

### Aesthetic Direction
**Reference:** Editorial luxury meets intimate boutique. Think Vogue's jewelry editorials, Bottega Veneta's restrained confidence, and Mejuri's warm accessibility. Not stark minimalism, not flashy luxury — warm, inviting premium.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ivory` | `#FAF8F5` | Primary background, creates warmth |
| `--color-cream` | `#F5F0E8` | Secondary surfaces, cards |
| `--color-champagne` | `#E8DFD0` | Subtle borders, dividers |
| `--color-gold` | `#C9A962` | Primary accent, CTAs, highlights |
| `--color-gold-light` | `#D4BC7D` | Hover states, secondary accents |
| `--color-gold-dark` | `#8B7340` | Pressed states, shadows |
| `--color-charcoal` | `#2C2824` | Primary text, dark backgrounds |
| `--color-stone` | `#6B635A` | Secondary text, captions |
| `--color-mist` | `#9A938A` | Tertiary text, placeholders |
| `--color-white` | `#FFFFFF` | Cards, overlays |

### Typography

**Headings:** Cormorant Garamond (Google Fonts)
- Display: 56-72px, weight 500, letter-spacing 0.02em
- H1: 42-48px, weight 500, letter-spacing 0.01em
- H2: 32-36px, weight 500
- H3: 24-28px, weight 500
- Product names: uppercase, weight 400, letter-spacing 0.15em

**Body:** Inter (Google Fonts)
- Body large: 18px, weight 400, line-height 1.7
- Body: 16px, weight 400, line-height 1.6
- Small: 14px, weight 400
- Caption: 12px, weight 500, letter-spacing 0.05em

### Spatial System

- Base unit: 4px
- Section padding: 80-120px vertical (desktop), 48-64px (mobile)
- Component spacing: 24-32px
- Grid gap: 24-32px
- Max content width: 1280px
- Generous negative space — let elements breathe

### Motion Philosophy

- **Principle:** Motion should feel like silk — smooth, unhurried, elegant
- **Duration:** 200-400ms for micro-interactions, 500-700ms for reveals
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` for most, subtle spring for playful elements
- **Usage:**
  - Fade-in on scroll (opacity 0→1, translateY 20px→0)
  - Image zoom on hover (scale 1→1.05, 600ms)
  - Smooth color transitions on interactive elements (200ms)
  - Cart drawer slides from right (transform, 300ms)
  - Accordion expand/collapse (max-height, 300ms)

### Visual Assets

- **Icons:** Lucide React — thin stroke weight (1-1.5px), consistent 24px
- **Images:** Warm-toned jewelry photography, dark neutral backgrounds (charcoal, deep taupe), lifestyle shots with models showing earrings/necklaces
- **Dividers:** 1px hairlines in `--color-champagne`, used sparingly
- **Decorative:** Minimal — let photography and typography do the work

## 3. Layout & Structure

### Page Architecture

```
├── Sticky Navigation (transparent → solid on scroll)
├── Page Content
│   ├── Hero / Page Header
│   ├── Sections (generous padding, alternating rhythms)
│   └── Footer
└── Cart Drawer (overlay, right side)
```

### Grid System

- Desktop: 12-column grid, 24px gutters
- Tablet: 8-column grid
- Mobile: 4-column grid, 16px gutters
- Product grids: 4-5 columns desktop, 2 columns tablet, 2 columns mobile

### Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Visual Pacing

- Hero: Full viewport height, immersive
- Trust bar: Compact, 48px height
- Product grids: Breathable, not cramped
- Story sections: Alternating image/text, generous padding
- Newsletter: Full-width accent block, centered content

## 4. Features & Interactions

### Navigation

**States:**
- Default: Transparent background, white text over hero
- Scrolled: Ivory background with subtle shadow, charcoal text
- Mobile: Hamburger menu, full-screen overlay

**Behavior:**
- Logo click → Homepage
- Links: Shop, Collections, About, Journal
- Icons: Search (opens modal), Cart (opens drawer)
- Smooth scroll on same-page anchors

### Hero Section

- Full-bleed warm photography background
- Headline centered or left-aligned, serif typography
- Subheading in body font, muted color
- CTA button with gold background, dark text
- Subtle parallax or fixed background attachment

### Product Cards

**Default State:**
- Square or 4:5 ratio image container
- Product name (uppercase, serif, tracked)
- Price (body font, gold accent)
- Subtle shadow on hover

**Hover State:**
- Second image fades in (if available)
- "Quick Add" button slides up from bottom
- Image zooms subtly (scale 1.05)
- Transition: 400ms ease

**Loading State:**
- Skeleton with shimmer animation
- Matches card dimensions

### Cart Drawer

**Trigger:** Cart icon click
**Animation:** Slide from right, backdrop fade
**Contents:**
- Header with close button
- Item list with thumbnails, names, prices
- Quantity controls (+/- buttons)
- Remove item button (X icon)
- Subtotal
- "Checkout" CTA button
- "Continue Shopping" link

**Empty State:**
- Illustration or icon
- "Your cart is empty"
- "Start Shopping" CTA

### Product Detail Page

**Gallery:**
- Main image (zoom on hover)
- Thumbnail strip below
- Click thumbnail → updates main image
- Mobile: Swipeable carousel

**Product Info:**
- Name (uppercase, serif)
- Price (prominent)
- Rating (stars + review count)
- Short description
- Variant pills (gold/silver)
- Quantity selector
- "Add to Cart" button

**Accordions:**
- Description (expanded by default)
- Materials & Care
- Shipping & Returns
- Smooth expand/collapse animation

### Collection Page

**Filters:**
- Category (checkboxes)
- Price range (slider or dropdown)
- Material (checkboxes)
- Clear all button

**Sorting:**
- Dropdown: Featured, Price Low-High, Price High-Low, Newest

**Grid:**
- Responsive product cards
- Pagination or infinite scroll
- "X products" count

### Newsletter Signup

**States:**
- Default: Email input + "Subscribe" button
- Loading: Button shows spinner
- Success: "Thank you!" message replaces form
- Error: Red border on input, error message below

### Forms

**Input States:**
- Default: Thin border, transparent background
- Focus: Gold border, subtle gold shadow
- Error: Red border, error message below
- Disabled: Muted background, reduced opacity

## 5. Component Inventory

### Button

**Variants:**
- Primary: Gold background, charcoal text
- Secondary: Transparent, gold border, gold text
- Ghost: No border, gold text

**States:**
- Default: As designed
- Hover: Slightly lighter/darker
- Active: Pressed effect (scale 0.98)
- Disabled: 50% opacity, no pointer
- Loading: Spinner, disabled

**Sizes:**
- Small: 36px height, 14px font
- Medium: 44px height, 16px font
- Large: 52px height, 18px font

### Input

**Types:**
- Text input
- Email input
- Textarea

**States:** As described above

### ProductCard

- Image container with hover effects
- Product name (uppercase, serif)
- Price display
- Quick add button (appears on hover)

### Rating

- 5 stars (filled, half, or empty)
- Review count in parentheses
- Gold color for filled stars

### Accordion

- Trigger button with chevron icon
- Animated expand/collapse
- Content area with padding

### ImageGallery

- Main image display
- Thumbnail navigation
- Mobile-friendly

### CartItem

- Thumbnail
- Product info
- Quantity controls
- Remove button

### Modal/Drawer

- Backdrop overlay
- Animated entry/exit
- Close button
- Focus trap

## 6. Technical Approach

### Framework
- React 18 with Vite
- React Router v6 for routing
- Tailwind CSS for styling
- Lucide React for icons

### State Management
- React Context for cart state
- localStorage persistence for cart
- useState/useReducer for local component state

### Project Structure

```
src/
├── components/
│   ├── ui/           # Button, Input, Accordion, etc.
│   ├── layout/       # Navbar, Footer, CartDrawer
│   ├── product/      # ProductCard, ProductGallery
│   └── sections/     # Homepage sections
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Collection.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js   # Seed product data
├── lib/
│   └── utils.js      # cn() helper
└── styles/
    └── index.css     # Tailwind + custom styles
```

### Seed Data

```javascript
products = [
  {
    id: "vivid-aura-jewels",
    name: "Vivid Aura Jewels",
    price: 42,
    category: "earrings",
    description: "...",
    materials: "18K gold plated, cubic zirconia",
    images: ["warm gold ear cuff", "crystal accent jewelry"],
    rating: 4.8,
    reviews: 124
  },
  // ... 4 more products
]
```

### Animation Approach
- CSS transitions for simple interactions
- Framer Motion or CSS keyframes for complex animations
- Intersection Observer for scroll-triggered reveals
- CSS transform for performance (GPU acceleration)

### Accessibility
- Semantic HTML
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management in modals/drawers
- Color contrast ratios meet WCAG AA

---

*Last updated: 2026-07-17*
