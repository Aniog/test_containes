# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand targeting women 25-45 who appreciate **quiet luxury** — jewelry that whispers rather than shouts. The storefront should feel like flipping through a high-end fashion editorial: warm, intimate, curated. Think *Vogue* meets *Kinfolk* meets a Parisian jeweler's private salon. Every element communicates: *"This is special, and so are you."*

The experience is premium-but-accessible — the sophistication of fine jewelry with the approachability of modern DTC brands.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by high-end fashion magazines, gallery spaces, and the soft glow of candlelit jewelry displays. Cream/ivory backgrounds, warm gold accents, generous breathing room.

### Color Palette
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Background | Warm Cream | `#FAF8F5` | Primary page background |
| Surface | Soft Ivory | `#F5F1EB` | Cards, sections |
| Primary | Rich Cocoa | `#2C2420` | Primary text, buttons |
| Secondary | Warm Taupe | `#8B7E74` | Secondary text, captions |
| Accent | Champagne Gold | `#C9A962` | CTAs, highlights, links |
| Accent Hover | Deep Gold | `#B8943F` | Button hover states |
| Border | Hairline | `#E8E2DB` | Dividers, borders |
| White | Pure | `#FFFFFF` | Nav on scroll, overlays |

### Typography
- **Headings/Brand**: `Cormorant Garamond` (Google Fonts) — elegant serif with editorial presence
  - Product names: UPPERCASE, `tracking-[0.2em]`
  - Hero headlines: 48-72px, `font-weight: 400`
  - Section titles: 32-40px
- **Body/UI**: `Manrope` (Google Fonts) — clean, modern sans-serif
  - Body: 15-16px, `line-height: 1.7`
  - UI elements: 13-14px, `letter-spacing: 0.02em`

### Spatial System
- Base unit: 4px
- Section padding: 80-120px vertical (desktop), 48-64px (mobile)
- Container max-width: 1280px, centered with 24px side padding
- Card gaps: 24-32px
- Generous whitespace between sections creates breathing room

### Motion Philosophy
- **Subtle & Refined**: Animations should feel like silk, not fireworks
- Hover transitions: 300ms ease-out
- Page transitions: 400ms fade
- Scroll reveals: opacity 0→1, translateY 20px→0, 500ms, staggered
- Hover lifts: translateY -4px with soft shadow expansion
- No jarring movements, no bounces, no overshoots

### Visual Assets
- **Images**: Warm-lit product photography on dark neutral backgrounds
- **Icons**: Lucide React — thin, elegant stroke weight
- **Decorative**: Thin hairline dividers, subtle gradient overlays
- **Placeholders**: Warm-toned gradient backgrounds with gold shimmer effect

---

## 3. Layout & Structure

### Page Structure
```
┌─────────────────────────────────────┐
│           STICKY NAVBAR             │ ← Transparent → Solid on scroll
├─────────────────────────────────────┤
│                                     │
│           HERO SECTION              │ ← Full-bleed, 90vh
│                                     │
├─────────────────────────────────────┤
│           TRUST BAR                 │ ← Thin strip, centered text
├─────────────────────────────────────┤
│                                     │
│         BESTSELLERS GRID            │ ← 5 products, hover effects
│                                     │
├─────────────────────────────────────┤
│                                     │
│       UGC REELS STRIP               │ ← Horizontal scroll, 9:16
│                                     │
├─────────────────────────────────────┤
│                                     │
│       CATEGORY TILES                │ ← 3 equal columns, hover reveal
│                                     │
├─────────────────────────────────────┤
│                                     │
│       BRAND STORY SPLIT             │ ← Image 50% | Text 50%
│                                     │
├─────────────────────────────────────┤
│                                     │
│         TESTIMONIALS                │ ← 3 columns, star ratings
│                                     │
├─────────────────────────────────────┤
│                                     │
│        NEWSLETTER CAPTURE           │ ← Accent background block
│                                     │
├─────────────────────────────────────┤
│             FOOTER                  │ ← 4 columns, payment icons
└─────────────────────────────────────┘
```

### Responsive Strategy
- **Mobile-first**: Stack layouts vertically, full-width cards
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- Mobile nav: Hamburger → slide-in drawer
- Product grid: 2 cols mobile → 3 cols tablet → 4-5 cols desktop

---

## 4. Features & Interactions

### Navigation
- **Transparent state**: Logo + links in white/cream over hero image
- **Solid state**: White background, dark text, 1px bottom border
- **Trigger**: Solid after 100px scroll
- **Mobile**: Hamburger icon → full-height slide-in drawer
- **Cart icon**: Shows item count badge when cart has items

### Hero Section
- Full-bleed background image with warm gradient overlay
- Headline: "Crafted to be Treasured" — large serif, fade-in on load
- Subhead: " Demi-fine jewelry for moments that matter"
- CTA: Accent button "Shop the Collection" → links to /shop
- Optional: Subtle parallax on scroll

### Product Cards
- **Default**: Product image, name (uppercase), price
- **Hover**: 
  - Second image fades in (crossfade 300ms)
  - Quick "Add to Cart" button slides up from bottom
  - Card lifts slightly (translateY -4px)
- **Loading**: Skeleton shimmer
- **Added to cart**: Brief checkmark animation

### UGC Reels Strip
- Horizontal scroll container with scroll-snap
- Each card: 9:16 aspect ratio, vertical video/image
- Soft serif caption overlay at bottom
- Smooth scroll momentum
- Gradient fade at edges to indicate scrollability

### Cart Drawer
- Slides in from right
- Shows: Product thumbnail, name, variant, quantity controls, price, remove
- Quantity: +/- buttons with instant update
- Subtotal calculated live
- "Checkout" button (disabled if empty)
- Click outside or X to close
- Backdrop overlay with blur

### Product Detail Page
- **Gallery**: Main image + thumbnail row, click to switch main
- **Info panel**: Name (serif, uppercase), price, star rating, description
- **Variant selector**: Pill buttons for Gold/Silver tone, one selected
- **Quantity**: Number input with +/- controls
- **Add to Cart**: Full-width accent button
- **Accordions**: Description, Materials & Care, Shipping & Returns
- **Related products**: "You may also like" horizontal scroll

### Collection Page
- **Sidebar filters**: Category (checkboxes), Price (range slider or presets), Material
- **Sort dropdown**: Featured, Price Low-High, Price High-Low, Newest
- **Product grid**: Responsive, matches homepage card style
- **Empty state**: "No products match your filters" with clear filters button

---

## 5. Component Inventory

### Navbar
| State | Appearance |
|-------|------------|
| Default (transparent) | White text, no background |
| Scrolled (solid) | White bg, dark text, shadow |
| Mobile open | Full-height drawer, X close |

### Button
| Variant | Appearance |
|---------|------------|
| Primary | `#2C2420` bg, white text, hover darkens |
| Accent | `#C9A962` bg, white text, hover deepens |
| Outline | Transparent bg, `#2C2420` border, hover fills |
| Ghost | No border, hover shows subtle bg |

### Product Card
| State | Appearance |
|-------|------------|
| Default | Image, name, price |
| Hover | Second image, add-to-cart overlay |
| Loading | Skeleton shimmer |
| Added | Brief checkmark flash |

### Input
| State | Appearance |
|-------|------------|
| Default | Light border, placeholder visible |
| Focus | Gold accent border |
| Error | Red border, error message below |
| Disabled | Muted bg, reduced opacity |

### Accordion
| State | Appearance |
|-------|------------|
| Closed | Title + plus icon |
| Open | Title + minus icon, content revealed |
| Hover | Subtle background tint |

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **State**: React Context for cart, local state for UI
- **Icons**: Lucide React
- **Animations**: CSS transitions + Tailwind animate plugin

### Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CartDrawer.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Accordion.jsx
│   │   └── Badge.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGallery.jsx
│   │   └── VariantSelector.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── TrustBar.jsx
│       ├── Bestsellers.jsx
│       ├── UGCStrip.jsx
│       ├── CategoryTiles.jsx
│       ├── BrandStory.jsx
│       ├── Testimonials.jsx
│       └── Newsletter.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── data/
│   └── products.js
├── lib/
│   └── utils.js
├── App.jsx
└── main.jsx
```

### Cart State
```javascript
{
  items: [
    { productId, variant, quantity, price, name, image }
  ],
  isOpen: boolean,
  // Actions: addItem, removeItem, updateQuantity, clearCart, toggleCart
}
```

### Seed Product Data
| ID | Name | Category | Price | Description |
|----|------|----------|-------|-------------|
| 1 | Vivid Aura Jewels | Earrings | $42 | Gold ear cuff with crystal accent |
| 2 | Majestic Flora Nectar | Necklaces | $68 | Multicolor floral crystal necklace |
| 3 | Golden Sphere Huggies | Huggies | $38 | Chunky gold dome huggie earrings |
| 4 | Amber Lace Earrings | Earrings | $54 | Textured gold filigree drop earrings |
| 5 | Royal Heirloom Set | Sets | $95 | Gift-boxed earring + necklace set |

---

## 7. Content & Microcopy

### Navigation
- Logo: VELMORA
- Links: Shop, Collections, About, Journal
- Icons: Search, Cart

### Trust Bar
"Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic"

### Hero
- Headline: "Crafted to be Treasured"
- Subhead: " Demi-fine jewelry for moments that matter"

### Testimonials
Three reviews with 5 stars, first name + initial (e.g., "Sarah M.")

### Newsletter
- Headline: "Join for 10% off your first order"
- Placeholder: "Enter your email"
- Button: "Subscribe"

### Empty Cart
"Your cart is empty" + "Continue Shopping" link

### Product Accordions
- **Description**: Product details, inspiration, styling tips
- **Materials & Care**: 18K gold plated, hypoallergenic, avoid water
- **Shipping & Returns**: Free shipping, 30-day returns, gift packaging
