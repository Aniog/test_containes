# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry embodies quiet luxury — the kind of understated elegance that whispers rather than shouts. The storefront should feel like stepping into a curated editorial spread from a high-end fashion magazine: warm, intimate, and aspirational. Every interaction should feel intentional and premium, reflecting the craftsmanship of the jewelry itself.

## 2. Design Language

### Aesthetic Direction
"Modern Editorial Luxury" — inspired by Vogue editorial spreads and high-end boutique interiors. Warm, intimate lighting. Generous negative space that lets the jewelry breathe. Restrained but confident.

### Color Palette
```
Primary Background:    #FDFBF9 (Warm Cream)
Secondary Background:  #F5F0EB (Soft Linen)
Dark Accent:           #1A1915 (Warm Black)
Primary Text:          #2C2825 (Espresso)
Secondary Text:        #6B635A (Warm Gray)
Gold Accent:           #C4A882 (Champagne Gold)
Gold Hover:            #B8956E (Antique Gold)
Border/Divider:        #E8E2DB (Pearl)
Success:               #7A9A6D (Sage)
Error:                 #C27070 (Dusty Rose)
```

### Typography
- **Headings**: Cormorant Garamond (serif) — elegant, editorial, timeless
  - Hero: 56px/64px, weight 500
  - Section titles: 36px/40px, weight 500
  - Product names: 18px, UPPERCASE, letter-spacing: 0.15em
- **Body/UI**: Inter (sans-serif) — clean, readable, modern
  - Body: 15px/24px, weight 400
  - UI elements: 13px/20px, weight 500
  - Buttons: 12px, UPPERCASE, letter-spacing: 0.1em

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Grid gap: 24px (desktop), 16px (mobile)
- Max content width: 1280px

### Motion Philosophy
- All transitions: 300ms ease-out (default)
- Hover transforms: subtle scale 1.02 or translateY(-4px)
- Opacity fades: 200ms
- Staggered animations on scroll: 100ms delay between items
- No jarring or playful animations — everything should feel smooth and intentional

### Visual Assets
- **Icons**: Lucide React — thin stroke weight (1.5px), matching the hairline aesthetic
- **Images**: Warm-lit editorial jewelry photography, dark/neutral backgrounds
- **Decorative**: Thin hairline dividers (1px), subtle drop shadows (0 4px 20px rgba(0,0,0,0.06))

## 3. Layout & Structure

### Page Structure
- **Sticky Navigation**: Transparent → solid on scroll (background transition)
- **Sections**: Alternating rhythm — full-bleed hero, contained grids, full-bleed accents
- **Visual pacing**: Hero (dramatic) → Trust bar (functional) → Products (dense) → Editorial breaks → Products again

### Responsive Strategy
- Mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile: Single column, hamburger menu, stacked CTAs
- Desktop: Multi-column grids, inline navigation, hover states

## 4. Features & Interactions

### Navigation
- **Default state**: Transparent with light text over hero
- **Scrolled state**: Solid cream background with dark text
- **Mobile**: Hamburger menu → full-screen overlay
- **Cart icon**: Shows item count badge

### Product Cards
- **Default**: Primary image, name, price
- **Hover**: Second image fade-in, "Quick Add" button slides up
- **Click**: Navigate to product detail page

### Cart Drawer
- **Trigger**: Cart icon click
- **Animation**: Slide in from right, backdrop overlay
- **Contents**: Product thumbnails, quantities, subtotal
- **Actions**: Update quantity, remove items, checkout CTA

### Product Detail
- **Gallery**: Click thumbnails to swap main image
- **Variants**: Pill buttons for gold/silver selection
- **Add to Cart**: Full-width button, loading state on click
- **Accordions**: Smooth expand/collapse

### Forms
- **Newsletter**: Email validation, success state, error handling
- **Contact/Checkout**: Standard validation with inline errors

## 5. Component Inventory

### Header/Navigation
- Logo (serif text)
- Nav links (desktop) / hamburger (mobile)
- Search icon, cart icon with badge
- States: transparent, solid, mobile-open

### ProductCard
- Image container with hover swap
- Product name (uppercase serif)
- Price
- Quick add button (appears on hover)
- States: default, hover, loading

### Button
- Primary: Solid gold background, dark text
- Secondary: Outlined gold border
- Ghost: Text only with underline on hover
- States: default, hover, active, disabled, loading

### CartDrawer
- Overlay backdrop
- Drawer panel
- Product list items with quantity controls
- Subtotal section
- Checkout button

### Accordion
- Header with title and expand icon
- Content area with smooth height transition
- States: collapsed, expanded

### Input
- Label, input field, error message slot
- States: default, focus, error, disabled

### ProductGallery
- Main image display
- Thumbnail strip
- States: loading, active thumbnail

## 6. Technical Approach

### Stack
- React 19 with Vite
- React Router v6 for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Context API for cart state
- Local storage for cart persistence

### Architecture
```
src/
├── components/
│   ├── ui/              # Base UI components
│   ├── layout/           # Header, Footer, Layout
│   ├── home/            # Homepage sections
│   ├── product/         # Product-related components
│   └── cart/            # Cart components
├── context/             # React contexts (Cart)
├── data/                # Seed product data
├── hooks/               # Custom hooks
├── pages/               # Page components
└── lib/                 # Utilities
```

### State Management
- Cart: React Context with reducer pattern
- Persisted to localStorage
- Optimistic UI updates

### Data Model
```javascript
Product {
  id: string,
  name: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies',
  images: string[],
  description: string,
  materials: string,
  rating: number,
  variants?: ['gold', 'silver']
}

CartItem {
  product: Product,
  quantity: number,
  variant: string
}
```

## 7. Seed Products

1. **Vivid Aura Jewels** — Gold ear cuff with crystal accent — $42 — Earrings
2. **Majestic Flora Nectar** — Multicolor floral crystal necklace — $68 — Necklaces
3. **Golden Sphere Huggies** — Chunky gold dome huggie earrings — $38 — Huggies
4. **Amber Lace Earrings** — Textured gold filigree drop earrings — $54 — Earrings
5. **Royal Heirloom Set** — Gift-boxed earring + necklace set — $95 — Sets
