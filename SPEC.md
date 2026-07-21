# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand selling gold-plated earrings, necklaces, and huggies at $30–$120. The storefront embodies **quiet luxury** — warm, editorial, and premium without being loud or discount-looking. The experience should feel like browsing a high-end fashion magazine: generous whitespace, beautiful typography, and imagery that makes jewelry the hero. Every interaction should feel intentional and premium.

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by luxury fashion editorials and high-end jewelry campaigns. Think soft shadows, warm lighting, and that intimate moment of admiring a beautiful piece. The aesthetic balances editorial sophistication with approachable warmth.

### Color Palette
```
--color-ivory:        #FAF8F5   (primary background — warm white)
--color-champagne:    #F5EFE6   (secondary background — subtle warmth)
--color-espresso:     #2C2420   (primary text — deep warm brown)
--color-cocoa:        #5C4D47   (secondary text — muted brown)
--color-gold:         #C9A962   (accent — refined warm gold)
--color-gold-light:   #E5D4A1   (gold hover/highlight)
--color-gold-dark:    #A68B4B   (gold pressed/active)
--color-cream:        #FDFBF7   (card backgrounds)
--color-silk:         #EDE6DB   (dividers, borders)
```

### Typography
- **Headings/Brand**: Cormorant Garamond (serif) — elegant, editorial, high-contrast
  - Weight: 400-600
  - Product names: uppercase with `letter-spacing: 0.15em`
- **Body/UI**: Manrope (sans-serif) — modern, clean, highly legible
  - Weight: 300-600
  - Base size: 16px, generous line-height (1.6)
- **Accent Text**: Cormorant Garamond italic for testimonials and editorial captions

### Spatial System
- Base unit: 8px
- Section padding: 80px–120px vertical
- Container max-width: 1400px
- Card gaps: 24px (desktop), 16px (mobile)
- Generous internal padding: 24px–32px

### Motion Philosophy
- **Principle**: Subtle and refined — motion should feel like a gentle breath, not a spotlight
- **Transitions**: 300ms ease-out for hovers, 400ms for reveals
- **Hover states**: Gentle lift (translateY -4px), soft shadow expansion
- **Page transitions**: Fade-in on scroll, staggered for grids
- **No bouncy or playful animations** — this is quiet luxury

### Visual Assets
- **Icons**: Lucide React — thin stroke weight (1.5px), minimal set
- **Images**: Warm-toned jewelry photography, dark/neutral backgrounds
- **Dividers**: 1px hairline in `--color-silk`
- **Decorative**: Subtle grain texture overlay option, thin gold accent lines

## 3. Layout & Structure

### Page Architecture
```
┌─────────────────────────────────────────────┐
│  STICKY NAV (transparent → solid on scroll)  │
├─────────────────────────────────────────────┤
│                                             │
│              HERO SECTION                   │
│         (full-bleed, 90vh height)          │
│                                             │
├─────────────────────────────────────────────┤
│              TRUST BAR                      │
│         (slim, 4 trust signals)              │
├─────────────────────────────────────────────┤
│                                             │
│           BESTSELLERS GRID                  │
│              (5 cards)                      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          UGC REEL STRIP                     │
│         (horizontal scroll)                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         SHOP BY CATEGORY                    │
│          (3 tiles)                          │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│         BRAND STORY SPLIT                   │
│         (image | text)                      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│            TESTIMONIALS                     │
│           (3 cards)                         │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│          NEWSLETTER CAPTURE                 │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│               FOOTER                        │
│                                             │
└─────────────────────────────────────────────┘
```

### Responsive Strategy
- **Mobile-first**: Base styles for 375px+
- **Breakpoints**: 
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- **Mobile**: Single column, stacked sections, hamburger menu
- **Desktop**: Multi-column grids, horizontal navigation

## 4. Features & Interactions

### Navigation
- **Default state**: Transparent background, white text (over hero)
- **Scrolled state**: Solid `--color-ivory` background, dark text, subtle shadow
- **Transition**: 300ms ease on background/shadow change
- **Mobile**: Hamburger menu opens full-screen overlay

### Product Cards
- **Default**: Image, product name, price
- **Hover**: 
  - Image crossfade to second image (300ms)
  - "Add to Cart" button fades in from bottom
  - Card lifts slightly (translateY -4px)
  - Soft shadow expansion
- **Click**: Navigate to product detail page

### Cart Drawer
- **Trigger**: Cart icon click
- **Animation**: Slide in from right, backdrop fade
- **Content**: Item list, quantity controls, subtotal, checkout button
- **Empty state**: Friendly message with CTA to shop

### Product Detail
- **Image gallery**: Main image + thumbnails, click to swap
- **Variant selector**: Pill buttons for gold/silver, selected state with border
- **Quantity**: Stepper with +/- buttons
- **Add to Cart**: Full-width button, loading state on click
- **Accordions**: Smooth expand/collapse, one open at a time

### Filters (Collection Page)
- **Sidebar**: Category, price range, material
- **Mobile**: Slide-out drawer or modal
- **Active filters**: Displayed as removable chips
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)

### Forms
- **Newsletter**: Email validation, success state, loading state
- **Contact**: Required field indicators, inline validation

## 5. Component Inventory

### NavBar
- **States**: transparent (over hero), solid (scrolled), mobile-open
- **Elements**: Logo, nav links, search icon, cart icon with count badge

### ProductCard
- **States**: default, hover, loading
- **Elements**: image container, product name, price, hover overlay with ATC button

### Button
- **Variants**: primary (gold fill), secondary (outlined), ghost
- **States**: default, hover, active, disabled, loading
- **Sizes**: sm, md, lg

### CartDrawer
- **States**: open, closed, empty
- **Elements**: header, item list, footer with total and checkout

### ProductGallery
- **States**: loading, loaded, zoomed
- **Elements**: main image, thumbnail rail

### Accordion
- **States**: collapsed, expanded
- **Animation**: 300ms height transition

### Input
- **States**: default, focus, error, disabled
- **Variants**: text, email, textarea

### TestimonialCard
- **Elements**: stars, quote, author name

### TrustBadge
- **Elements**: icon, text

### UGCard
- **Elements**: vertical image, caption overlay

### CategoryTile
- **States**: default, hover
- **Elements**: background image, label overlay

## 6. Technical Approach

### Stack
- **Framework**: React 18+ with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **Animations**: CSS transitions + Tailwind animate
- **State**: React Context for cart

### Project Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Accordion.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Bestsellers.jsx
│   │   ├── UGCSection.jsx
│   │   ├── CategoryTiles.jsx
│   │   ├── BrandStory.jsx
│   │   ├── Testimonials.jsx
│   │   └── Newsletter.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGallery.jsx
│   │   └── RelatedProducts.jsx
│   └── cart/
│       ├── CartDrawer.jsx
│       └── CartItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
```

### Data Model
```javascript
Product {
  id: string,
  name: string,
  price: number,
  description: string,
  category: 'earrings' | 'necklaces' | 'huggies',
  images: string[],
  variants: { name: string, color: string }[],
  rating: number,
  reviewCount: number,
  materials: string,
  care: string
}
```

### Cart State Shape
```javascript
CartContext {
  items: CartItem[],
  addItem: (product, variant, quantity) => void,
  removeItem: (productId, variantName) => void,
  updateQuantity: (productId, variantName, quantity) => void,
  clearCart: () => void,
  itemCount: number,
  subtotal: number
}
```

### Performance Considerations
- Lazy load images below the fold
- Debounce filter inputs
- Memoize product cards and filtered lists
- Use CSS containment for complex layouts
