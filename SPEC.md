# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a premium demi-fine jewelry brand targeting sophisticated women aged 25-45 who appreciate quiet luxury—elegant, understated pieces that feel precious without being ostentatious. The digital experience should evoke the feeling of walking into a high-end jewelry boutique: warm lighting, curated displays, personal attention. Every interaction whispers quality rather than shouting for attention.

The visual language draws from editorial fashion magazines and luxury hospitality spaces—warm neutrals, generous negative space, and imagery that celebrates the artistry of the jewelry.

---

## 2. Design Language

### Aesthetic Direction
**"Warm Editorial Luxury"** — Inspired by high-end fashion editorials, fine jewelry advertising, and boutique hotel aesthetics. Think Kinfolk meets Cartier's digital presence. Soft shadows, warm metallics, and restraint.

### Color Palette

| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary | Champagne Cream | `#FAF7F2` | Main background |
| Secondary | Warm Ivory | `#F5F0E8` | Section backgrounds, cards |
| Accent | Antique Gold | `#C4A265` | CTAs, highlights, borders |
| Accent Dark | Deep Bronze | `#8B6914` | Hover states, active elements |
| Text Primary | Rich Espresso | `#2C2420` | Headlines, primary text |
| Text Secondary | Warm Taupe | `#6B5B4F` | Body text, secondary labels |
| Border | Soft Linen | `#E8E0D5` | Dividers, subtle borders |
| Dark | Deep Charcoal | `#1A1816` | Footer, contrast sections |
| White | Pure White | `#FFFFFF` | Cards, overlays |

### Typography

**Headlines & Product Names:**
- Font: Cormorant Garamond (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semi-bold)
- Style: UPPERCASE with `letter-spacing: 0.15em` for product names
- Line-height: 1.2

**Body & UI:**
- Font: Inter (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semi-bold)
- Line-height: 1.6 for body, 1.4 for UI elements

### Spatial System

- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Container max-width: 1400px
- Section padding: 96px vertical (desktop), 64px (tablet), 48px (mobile)
- Card padding: 24px
- Grid gaps: 32px (desktop), 24px (tablet), 16px (mobile)

### Motion Philosophy

All animations serve to enhance perceived quality and create a sense of gentle refinement:

- **Page transitions**: Fade in 400ms ease-out
- **Hover states**: 300ms ease transitions
- **Micro-interactions**: 200ms for immediate feedback
- **Scroll reveals**: Fade up with 20px translate, 600ms ease-out, staggered 100ms
- **Image reveals**: Scale from 1.02 to 1.0 with opacity, 500ms
- **Drawer slides**: 400ms cubic-bezier(0.4, 0, 0.2, 1)

### Visual Assets

- **Icons**: Lucide React (thin stroke weight for elegance)
- **Images**: Warm, editorial jewelry photography with dark/neutral backgrounds
- **Decorative elements**: Thin hairline dividers (1px), subtle drop shadows, no heavy borders
- **Placeholder strategy**: Use elegant SVG patterns and warm gradients

---

## 3. Layout & Structure

### Page Hierarchy

```
├── Homepage (/)
│   ├── Sticky Navigation (transparent → solid)
│   ├── Hero Section (full-bleed)
│   ├── Trust Bar (thin strip)
│   ├── Bestsellers Grid (5 products)
│   ├── UGC Reel Strip (horizontal scroll)
│   ├── Category Tiles (3 tiles)
│   ├── Brand Story (image + text split)
│   ├── Testimonials (3 cards)
│   ├── Newsletter (accent background)
│   └── Footer
│
├── Collection (/collection)
│   ├── Collection Header
│   ├── Filter Sidebar
│   └── Product Grid
│
├── Product Detail (/product/:id)
│   ├── Product Gallery (left)
│   ├── Product Info (right)
│   ├── Accordion Details
│   └── Related Products
│
└── Cart (drawer overlay)
```

### Responsive Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Mobile | < 640px | 2 grid |
| Tablet | 640px - 1024px | 3 grid |
| Desktop | 1024px - 1280px | 4 grid |
| Large | 1280px+ | 4 grid |

### Navigation

- **Mobile**: Hamburger menu → full-screen overlay
- **Desktop**: Logo left, links center, icons right
- **Behavior**: Transparent over hero, transitions to cream background on scroll (scrollY > 80)

---

## 4. Features & Interactions

### Navigation
- Logo click → homepage
- Links: Shop (dropdown with categories), Collections, About, Journal
- Search icon → expands search overlay
- Cart icon → opens cart drawer
- Cart badge shows item count with subtle bounce animation on add

### Hero Section
- Full-viewport height with parallax-lite effect (subtle)
- CTA button hover: background fills from left
- Scroll indicator pulses gently

### Product Cards
- **Default state**: Primary product image, name, price
- **Hover state**: Image crossfade to second angle, quick-add button slides up
- **Click**: Navigate to product detail page
- **Quick add**: Adds to cart with success toast notification

### Cart Drawer
- Slides in from right, 400px width (desktop), full width (mobile)
- Backdrop blur with dark overlay
- Line items with quantity controls
- Subtotal and checkout button
- Empty state with "Continue Shopping" link

### Product Detail Page
- **Gallery**: Main image with thumbnail strip below, click to change
- **Variants**: Pill buttons for gold/silver toggle
- **Quantity**: Minus/plus with input
- **Add to Cart**: Full-width button, loading state, success feedback
- **Accordions**: Smooth expand/collapse, one open at a time

### Collection Page
- **Filters**: Checkbox groups (collapsible on mobile)
- **Sort**: Dropdown (Price low-high, high-low, Newest)
- **Grid**: Responsive product cards
- **Empty state**: Friendly message with "clear filters" link

### Newsletter
- Email validation
- Success state transforms form into thank you message
- Error state with inline message

---

## 5. Component Inventory

### Navigation (`<Nav />`)
| State | Appearance |
|-------|------------|
| Transparent (top) | White text, transparent bg, subtle shadow |
| Solid (scrolled) | Dark text, cream bg, hairline bottom border |
| Mobile open | Full-screen overlay, centered links, staggered fade-in |
| Link hover | Underline animates from left |

### Product Card (`<ProductCard />`)
| State | Appearance |
|-------|------------|
| Default | Image, name (uppercase), price |
| Hover | Second image, "Quick Add" button slides up |
| Loading | Skeleton with shimmer |
| Added | Brief checkmark flash |

### Button (`<Button />`)
| Variant | Appearance |
|---------|------------|
| Primary | Gold bg (#C4A265), white text, solid fill |
| Secondary | Transparent, gold border, gold text |
| Ghost | No border, gold text, underline on hover |
| Disabled | 50% opacity, cursor not-allowed |

### Cart Item (`<CartItem />`)
| State | Appearance |
|-------|------------|
| Default | Image, name, variant, quantity controls, price, remove button |
| Updating | Subtle opacity reduction |
| Removing | Slide out left with fade |

### Accordion (`<Accordion />`)
| State | Appearance |
|-------|------------|
| Collapsed | Title, plus icon |
| Expanded | Title, minus icon, content fades in |
| Hover | Title color shifts to gold |

### Toast Notification (`<Toast />`)
| State | Appearance |
|-------|------------|
| Success | Green left border, checkmark icon |
| Error | Red left border, X icon |
| Info | Gold left border, info icon |

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS with custom configuration
- **State**: React Context for cart
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

### Component Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI primitives
│   ├── layout/       # Nav, Footer, Layout wrapper
│   ├── home/         # Homepage sections
│   ├── product/      # Product-related components
│   └── cart/         # Cart components
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── pages/
│   ├── Home.jsx
│   ├── Collection.jsx
│   └── ProductDetail.jsx
├── hooks/
│   └── useCart.js
├── lib/
│   └── utils.js
└── App.jsx
```

### Cart State Shape
```javascript
{
  items: [
    {
      id: string,
      productId: string,
      name: string,
      price: number,
      variant: string,
      quantity: number,
      image: string
    }
  ],
  isOpen: boolean
}
```

### Performance Targets
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 7. Seed Product Data

| ID | Name | Price | Category | Description |
|----|------|-------|----------|-------------|
| 1 | VIVID AURA JEWELS | $42 | Earrings | Gold ear cuff with crystal accent. A single statement piece that catches the light. |
| 2 | MAJESTIC FLORA NECTAR | $68 | Necklaces | Multicolor floral crystal necklace. Delicate blooms in an earthy palette. |
| 3 | GOLDEN SPHERE HUGGIES | $38 | Huggies | Chunky gold dome huggie earrings. Modern curves, timeless appeal. |
| 4 | AMBER LACE EARRINGS | $54 | Earrings | Textured gold filigree drop earrings. Handcrafted detail, every angle different. |
| 5 | ROYAL HEIRLOOM SET | $95 | Sets | Gift-boxed earring + necklace set. Complete your collection or gift it. |

---

## 8. Accessibility Requirements

- Color contrast ratio minimum 4.5:1 for text
- Focus visible states on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- ARIA labels for icon buttons
- Reduced motion support via `prefers-reduced-motion`
