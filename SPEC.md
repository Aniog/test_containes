# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand targeting women 25–45 who seek premium gold jewelry without luxury price tags. The storefront embodies **quiet luxury** — warm, editorial, and refined. Every interaction should feel unhurried and considered, like flipping through a high-end fashion magazine rather than scrolling a discount site.

The experience is intimate and aspirational: customers should feel they're discovering something special, not being sold to.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by luxury fashion editorials, high-end department store jewelry counters, and the visual language of brands like Mejuri, Missoma, and Aritzia. Deep, warm neutrals create a backdrop that lets gold jewelry glow.

### Color Palette
```
Primary Background:    #0D0D0D (Rich Black)
Secondary Background:  #1A1A1A (Soft Black)
Surface:              #252525 (Card Surface)
Warm Gold Accent:     #C9A96E (Antique Gold)
Light Gold:           #E8D5B5 (Champagne)
Text Primary:         #F5F3EF (Warm White)
Text Secondary:       #A39E99 (Warm Gray)
Text Muted:           #6B6660 (Muted Brown)
Border:               #2E2E2E (Subtle Divider)
Success:              #4A7C59 (Sage Green)
```

### Typography
- **Headings & Product Names:** Cormorant Garamond (serif), weight 400-600
  - Product names: UPPERCASE, letter-spacing: 0.15em
  - Section headings: sentence case, elegant
- **Body & UI:** Inter (sans-serif), weight 300-500
  - Body text: 400, line-height 1.6
  - UI elements: 500, smaller size

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop) / 48px (mobile)
- Component spacing: 24px / 32px
- Card padding: 24px
- Generous whitespace throughout — let content breathe

### Motion Philosophy
- **Subtle and refined** — motion should feel like silk, not a bounce house
- Hover transitions: 300ms ease-out
- Page transitions: fade 200ms
- Scroll reveals: fade-up, 400ms ease-out, staggered 100ms
- No jarring movements; everything eases gently

### Visual Assets
- **Photography:** Warm-lit, editorial-style jewelry shots on dark or neutral backgrounds
- **Dividers:** Thin hairline borders (1px, #2E2E2E)
- **Icons:** Lucide icons, 1.5px stroke weight
- **Shadows:** Subtle, warm-toned (rgba(0,0,0,0.3))

---

## 3. Layout & Structure

### Global Structure
```
┌─────────────────────────────────────────┐
│  Navigation (sticky, transparent→solid) │
├─────────────────────────────────────────┤
│  Page Content (varies by page)          │
├─────────────────────────────────────────┤
│  Footer                                 │
└─────────────────────────────────────────┘
```

### Responsive Breakpoints
- Mobile: < 640px (primary design target)
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Page Flow
- Homepage: Hero → Trust → Bestsellers → UGC → Categories → Story → Testimonials → Newsletter → Footer
- Collection: Header → Filters → Grid → Footer
- Product: Gallery → Details → Accordions → Related → Footer

---

## 4. Features & Interactions

### Navigation
- **Transparent state:** Over hero images, white text, logo + nav links visible
- **Solid state:** On scroll (past 100px), background becomes #0D0D0D with subtle shadow
- **Mobile:** Hamburger menu with slide-in drawer from right
- **Hover:** Links get gold underline animation (left to right)

### Hero Section
- Full-bleed image with warm editorial jewelry photography
- Serif headline with staggered letter reveal on load
- CTA button with gold background, scale-up on hover

### Product Cards
- **Default:** Product image, name, price
- **Hover:** Second image slides in, "Quick Add" button fades in at bottom
- **Active:** Subtle scale (1.02) and shadow lift
- **Loading:** Skeleton with shimmer animation

### Cart Drawer
- Slides in from right, 400px width (full width mobile)
- Backdrop blur overlay
- Item list with quantity controls (+/-)
- Remove button (trash icon) on hover
- Subtotal calculation
- Checkout button (gold accent)

### Forms
- Inputs: transparent background, bottom border only
- Focus: gold bottom border glow
- Error: warm red (#B85450) border + message
- Success: subtle green checkmark

### Accordions (Product Detail)
- Single open at a time
- Smooth height animation (300ms)
- Gold accent on open state
- Plus/minus icon rotation

---

## 5. Component Inventory

### Button
- **Primary:** Gold background (#C9A96E), dark text, hover darkens
- **Secondary:** Transparent, gold border, gold text, hover fills
- **Ghost:** Text only with underline on hover
- **States:** disabled (50% opacity), loading (spinner), active (scale 0.98)

### ProductCard
- Image container (aspect-ratio: 3/4)
- Product name (serif, uppercase)
- Price (sans-serif, muted)
- Hover overlay with second image + quick add

### Navbar
- Logo (serif, 24px)
- Nav links (sans-serif, 14px, uppercase)
- Icons: Search, Cart with badge
- Mobile: Hamburger trigger

### Input
- Label (above, small)
- Field (transparent bg, bottom border)
- Helper text (below, muted)
- Error state (red border + message)

### Badge
- Small pill shape
- Categories: "New", "Bestseller", "Sale"

### StarRating
- 5 stars, filled/empty states
- Gold fill color
- Optional review count

---

## 6. Technical Approach

### Stack
- React 18 with Vite
- React Router v6 for navigation
- Tailwind CSS for styling
- Context API for cart state
- Lucide React for icons

### State Management
- **Cart State:** React Context with localStorage persistence
- **UI State:** Local component state
- **No external state library needed** for this scope

### Data Model
```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: 'earrings' | 'necklaces' | 'huggies';
  images: string[];
  variants?: { name: string; color: string }[];
  materials: string;
  care: string;
  rating: number;
  reviewCount: number;
  badge?: 'bestseller' | 'new';
}

interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product, quantity: number, variant?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}
```

### File Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI primitives
│   ├── layout/       # Navbar, Footer, Layout
│   ├── home/         # Homepage sections
│   ├── product/      # Product-specific components
│   └── cart/         # Cart components
├── context/          # React Context providers
├── pages/            # Page-level components
├── data/             # Seed product data
├── hooks/            # Custom hooks
└── lib/              # Utilities
```

### Performance Considerations
- Lazy load images below the fold
- Debounce search input
- Memoize expensive computations
- Use CSS transforms for animations (GPU accelerated)

---

## 7. Seed Product Data

1. **Vivid Aura Jewels** — Gold ear cuff with crystal accent — $42
2. **Majestic Flora Nectar** — Multicolor floral crystal necklace — $68
3. **Golden Sphere Huggies** — Chunky gold dome huggie earrings — $38
4. **Amber Lace Earrings** — Textured gold filigree drop earrings — $54
5. **Royal Heirloom Set** — Gift-boxed earring + necklace set — $95

---

## 8. Pages

### Homepage (`/`)
Full experience with all sections as specified.

### Collection (`/collection`)
- Filter sidebar: Category (Earrings, Necklaces, Huggies), Price range, Material
- Sort dropdown: Featured, Price Low-High, Price High-Low, Newest
- Responsive grid: 2 columns mobile, 3 tablet, 4 desktop

### Product Detail (`/product/:slug`)
- Image gallery with thumbnails
- Product info panel
- Accordion sections
- Related products row

---

## 9. Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML throughout
- Proper heading hierarchy
- Focus states visible
- Alt text for all images
- Keyboard navigation
- Screen reader friendly cart updates
