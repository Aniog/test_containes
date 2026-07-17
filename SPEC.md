# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

A refined, editorial DTC jewelry storefront that embodies **quiet luxury** — warm, inviting, and effortlessly premium. The experience should feel like flipping through a high-end fashion magazine: generous whitespace, large photography, elegant typography, and restrained interactions. Every detail communicates quality without shouting it.

---

## 2. Design Language

### Aesthetic Direction
**Reference**: The Row meets Mejuri — editorial restraint with warm, accessible luxury. Clean but not cold. Gold jewelry photographed on cream, taupe, and warm charcoal backgrounds.

### Color Palette
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Warm Cream | `#FAF7F2` | Primary page background |
| Surface | Ivory | `#FFFEF9` | Cards, modals |
| Dark | Deep Charcoal | `#1C1917` | Primary text, dark sections |
| Secondary | Warm Stone | `#78716C` | Secondary text, muted elements |
| Accent | Antique Gold | `#C9A962` | CTAs, highlights, active states |
| Accent Dark | Rich Gold | `#A68B3D` | Hover states on gold elements |
| Border | Soft Taupe | `#E7E2DA` | Dividers, borders |
| Success | Sage | `#84A98C` | Success states |

### Typography
- **Headings**: Cormorant Garamond (Google Fonts) — elegant serif with high contrast, 400-600 weight
- **Body/UI**: Inter (Google Fonts) — clean, highly legible sans-serif, 300-500 weight
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing: 0.15em
- **Scale**: 
  - H1: 3.5rem/4rem (mobile/desktop)
  - H2: 2rem/2.5rem
  - H3: 1.5rem/1.75rem
  - Body: 1rem
  - Small: 0.875rem

### Spatial System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Container max-width: 1440px
- Content max-width: 1200px
- Generous vertical rhythm: sections have 80-120px padding on desktop

### Motion Philosophy
- **Entrance**: Subtle fade-up (opacity 0→1, translateY 20px→0), 500ms ease-out, staggered 100ms
- **Hover**: Scale 1→1.02 for cards, color transitions 200ms
- **Page transitions**: Smooth fade, 300ms
- **Micro-interactions**: Button press scale 0.98, cart drawer slide 300ms ease-out
- All motion should feel effortless, never jarring

### Visual Assets
- **Photography**: Warm-lit product shots, lifestyle images showing jewelry on models, editorial flat lays
- **Icons**: Lucide React — minimal stroke weight (1.5px), consistent sizing
- **Dividers**: 1px hairlines in `--border-color`, occasionally thicker decorative lines
- **Placeholders**: Warm gradient backgrounds (cream to taupe) for images

---

## 3. Layout & Structure

### Page Architecture
```
┌─────────────────────────────────────────┐
│ Navigation (sticky, transparent→solid)  │
├─────────────────────────────────────────┤
│ Hero (full-bleed, 90vh)                │
├─────────────────────────────────────────┤
│ Trust Bar (thin strip)                  │
├─────────────────────────────────────────┤
│ Bestsellers Grid (5 products)           │
├─────────────────────────────────────────┤
│ UGC Reel Strip (horizontal scroll)      │
├─────────────────────────────────────────┤
│ Category Tiles (3-column grid)           │
├─────────────────────────────────────────┤
│ Brand Story (image + text split)        │
├─────────────────────────────────────────┤
│ Testimonials (3-column)                 │
├─────────────────────────────────────────┤
│ Newsletter Capture                      │
├─────────────────────────────────────────┤
│ Footer                                 │
└─────────────────────────────────────────┘
```

### Responsive Strategy
- **Mobile-first**: Base styles for 375px+
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Grid**: Single column mobile → 2 columns tablet → 3-4 columns desktop
- **Navigation**: Hamburger menu on mobile, full nav on desktop

---

## 4. Features & Interactions

### Navigation
- **Default**: Transparent background, white/dark text depending on hero
- **On scroll (>100px)**: Solid cream background, shadow appears
- **Mobile**: Hamburger icon → full-screen overlay menu
- **Cart icon**: Shows item count badge, opens cart drawer

### Hero Section
- Full-bleed image, 90vh height
- Headline + subhead centered or left-aligned
- Single CTA button with hover lift effect
- Subtle parallax on scroll (optional)

### Trust Bar
- Horizontal strip with icons + text
- Icons: Truck, RotateCcw, Gem, Heart (Lucide)
- Subtle background tint

### Product Cards
- **Default**: Product image, name, price
- **Hover**: Second image fades in, "Add to Cart" button appears at bottom
- **Click**: Navigates to product detail page
- **Loading**: Skeleton with pulse animation

### Cart Drawer
- Slides in from right, 300ms ease-out
- Backdrop overlay with click-to-close
- Shows: Product thumbnail, name, variant, quantity controls, price
- Remove button per item
- Subtotal + checkout button at bottom
- Empty state: "Your cart is empty" with CTA to shop

### Product Detail Page
- **Gallery**: Large main image, thumbnail row below, click to switch
- **Info panel**: Name (serif uppercase), price, rating, description
- **Variants**: Pill buttons for color/gold tone selection
- **Quantity**: Minus/plus buttons with input
- **Add to Cart**: Full-width button, loading state on click
- **Accordions**: Description, Materials & Care, Shipping & Returns

### Collection Page
- **Sidebar filters**: Category, Price range, Material (collapsible on mobile)
- **Grid**: 2 columns mobile, 3-4 desktop
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)
- **Pagination**: Load more button

---

## 5. Component Inventory

### Button
| Variant | Default | Hover | Active | Disabled |
|---------|---------|-------|--------|----------|
| Primary | Gold bg, white text | Darker gold, slight lift | Scale 0.98 | 50% opacity |
| Secondary | Transparent, gold border | Gold bg fills | Scale 0.98 | 50% opacity |
| Ghost | No border, gold text | Underline appears | — | 50% opacity |

### Input
- **Default**: Bottom border, label above
- **Focus**: Gold border, label shifts up
- **Error**: Red border, error message below
- **Filled**: Label stays floated

### Rating
- 5 star icons
- Filled stars in gold, empty in gray
- Shows review count in parentheses

### Accordion
- **Closed**: Plus icon, title visible
- **Open**: Minus icon, content slides down (300ms)
- **Border**: Bottom border only when closed

### ProductCard
- **Default**: Image, name, price stacked
- **Hover**: Second image crossfade, Add to Cart overlay
- **Loading**: Skeleton placeholder

### Badge
- Small rounded pill
- Variants: gold (accent), gray (neutral)

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 + Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS + custom CSS variables
- **State**: React Context for cart
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

### Architecture
```
src/
├── components/
│   ├── ui/           # Button, Input, Rating, Accordion, Badge
│   ├── layout/        # Navigation, Footer, CartDrawer
│   └── sections/      # Hero, TrustBar, ProductGrid, etc.
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
└── main.jsx
```

### Data Model
```javascript
Product {
  id: string,
  name: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies',
  description: string,
  materials: string,
  images: string[],
  variants: { name: string, color: string }[],
  rating: number,
  reviewCount: number
}

CartItem {
  product: Product,
  variant: string,
  quantity: number
}
```

### Performance
- Lazy load images below fold
- Skeleton loading states
- Optimized asset delivery via Vite
