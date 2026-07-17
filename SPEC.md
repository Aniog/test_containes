# Velmora Fine Jewelry — E-Commerce Storefront

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand that embodies **quiet luxury** — understated elegance that whispers rather than shouts. The digital experience mirrors the jewelry itself: warm, intimate, editorial, and meticulously crafted. Every interaction should feel like opening a velvet jewelry box in a sunlit boutique. This is not a discount marketplace; it's a destination for women who appreciate quality and want to feel seen, not sold to.

## 2. Design Language

### Aesthetic Direction
**Reference:** Aesop meetsMejuri — warm minimalism with editorial photography sensibility. Think soft studio lighting, rich textures, and the confidence of restraint.

### Color Palette
```
Primary Background:   #FAF8F5 (warm cream)
Secondary Background: #F2EDE7 (soft beige)
Dark Accent:          #1A1A1A (near-black)
Gold Accent:          #B8860B (dark goldenrod — not brassy)
Warm Gray:            #8B8178 (muted taupe)
Light Gold:            #D4AF37 (metallic gold for borders/accents)
White:                #FFFFFF
```

### Typography
- **Headings:** Cormorant Garamond (serif) — elegant, editorial, high contrast
  - Product names: uppercase, letter-spacing: 0.15em, weight 500
- **Body/UI:** Inter (sans-serif) — clean, readable, modern
  - Body: weight 400, line-height 1.6
  - UI elements: weight 500

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Card padding: 24px
- Component gaps: 16px, 24px, 32px, 48px
- Max content width: 1280px
- Generous whitespace — let elements breathe

### Motion Philosophy
- **Duration:** 200-400ms, ease-out
- **Hover states:** Subtle scale (1.02), soft shadow lift
- **Page transitions:** Fade, 300ms
- **Image reveals:** Subtle opacity fade-in
- **Cart drawer:** Slide from right, 300ms ease-out
- All motion is restrained — elegance, not showiness

### Visual Assets
- **Icons:** Lucide React (thin stroke weight, minimal)
- **Images:** Placeholder jewelry images on warm neutral backgrounds
- **Decorative:** Thin hairlines (1px), subtle shadows (0 4px 20px rgba(0,0,0,0.08))
- **Dividers:** 1px warm-gray hairlines

## 3. Layout & Structure

### Page Structure
```
Header (sticky nav)
├── Homepage
│   ├── Hero (full-bleed)
│   ├── Trust Bar
│   ├── Bestsellers Grid
│   ├── UGC Reels Strip
│   ├── Category Tiles
│   ├── Brand Story
│   ├── Testimonials
│   └── Newsletter
├── Shop/Collection Page
│   ├── Filter Sidebar
│   └── Product Grid
├── Product Detail Page
│   ├── Image Gallery
│   ├── Product Info
│   ├── Accordions
│   └── Related Products
└── Footer
```

### Responsive Strategy
- Mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile: Single column, stacked navigation
- Tablet: 2-column grids
- Desktop: Full layouts with sidebars

### Visual Pacing
- Hero creates immediate impact
- Trust bar provides reassurance
- Product grid invites exploration
- Editorial sections break up commerce
- Newsletter captures attention before exit

## 4. Features & Interactions

### Navigation
- Transparent background over hero, transitions to solid cream on scroll (60px threshold)
- Logo: "VELMORA" in Cormorant Garamond
- Links: Shop, Collections, About, Journal
- Icons: Search, Cart (with badge count)
- Mobile: Hamburger menu with slide-out drawer

### Product Cards
- Image container with aspect-ratio 4:5
- Primary image always visible
- Hover: Secondary image crossfade + "Quick Add" overlay
- Product name: Uppercase, letter-spaced
- Price: Below name, clean format
- Subtle shadow on hover, lifts card slightly

### Cart Drawer
- Slides from right, 400px width (100% on mobile)
- Backdrop overlay with blur
- Line items with quantity controls
- Remove item button (X icon)
- Subtotal calculation
- "Checkout" CTA button
- Empty state with "Continue Shopping" link

### Product Detail
- Image gallery: Main image + thumbnail strip
- Variant selectors: Gold / Silver pill buttons
- Quantity: Number input with +/- buttons
- Add to Cart: Full-width button, accent color
- Accordions: Description, Materials & Care, Shipping & Returns

### Collection Page
- Sidebar filters: Category, Price range, Material
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Sort dropdown: Featured, Price Low-High, Price High-Low

### Error States
- Form validation: Inline error messages
- Empty cart: Friendly message + CTA to shop
- Loading: Skeleton placeholders

## 5. Component Inventory

### Button
- Primary: Gold background (#B8860B), white text, 48px height
- Secondary: Transparent, gold border, gold text
- States: Default, hover (darken 10%), active (scale 0.98), disabled (50% opacity)

### ProductCard
- Default: Image, name, price
- Hover: Secondary image, "Add to Cart" overlay
- Loading: Skeleton pulse

### Input
- Default: 48px height, 1px warm-gray border, rounded-sm
- Focus: Gold border
- Error: Red border, error message below

### Badge
- Small: 20px circle, gold background, white text
- Used for cart count

### Accordion
- Header: Flex between label + chevron
- Content: Smooth height transition
- Divider between items

### Navigation
- Desktop: Horizontal links, icon buttons
- Mobile: Hamburger trigger, slide-out drawer

## 6. Technical Approach

### Stack
- React 18 with Vite
- React Router v6 for routing
- Tailwind CSS for styling
- Context API for cart state
- Lucide React for icons

### Architecture
```
src/
├── components/
│   ├── ui/           # Reusable primitives
│   ├── layout/       # Header, Footer, Navigation
│   ├── home/         # Homepage sections
│   ├── product/      # Product-related components
│   └── cart/         # Cart components
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   └── ProductDetail.jsx
├── hooks/
│   └── useScrollPosition.js
└── lib/
    └── utils.js
```

### Data Model
```javascript
Product {
  id: string,
  name: string,
  slug: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies',
  description: string,
  materials: string,
  care: string,
  images: string[],
  rating: number,
  reviews: number
}

CartItem {
  product: Product,
  quantity: number,
  variant: 'gold' | 'silver'
}
```

### Seed Products
1. Vivid Aura Jewels — $42 — Ear cuff with crystal accent — earrings
2. Majestic Flora Nectar — $68 — Multicolor floral crystal necklace — necklaces
3. Golden Sphere Huggies — $38 — Chunky gold dome huggie earrings — huggies
4. Amber Lace Earrings — $54 — Textured gold filigree drop earrings — earrings
5. Royal Heirloom Set — $95 — Gift-boxed earring + necklace set — sets
