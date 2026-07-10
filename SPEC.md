# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand positioned at the intersection of quiet luxury and accessible elegance. The storefront embodies warmth, editorial sophistication, and refined minimalism — a digital jewelry box experience that feels intimate rather than transactional. Every interaction should feel like leafing through a high-end fashion magazine while having the ease of modern e-commerce.

**Brand Promise:** Premium jewelry at approachable prices, meant to be worn and treasured daily.

---

## 2. Design Language

### Aesthetic Direction
Quiet luxury meets editorial warmth. References: Cartier's digital presence meets Reformation's approachability. The aesthetic is restrained, confident, and unhurried — gold jewelry deserves space to breathe.

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Background Primary | Warm Cream | `#FAF8F5` | Page backgrounds, cards |
| Background Secondary | Soft Ivory | `#F5F0EA` | Alternate sections, inputs |
| Background Dark | Deep Charcoal | `#1A1814` | Footer, dark sections |
| Text Primary | Rich Espresso | `#2D2926` | Headlines, body text |
| Text Secondary | Warm Stone | `#6B635A` | Captions, secondary text |
| Accent Primary | Burnished Gold | `#C9A962` | CTAs, highlights, active states |
| Accent Hover | Deep Gold | `#B8943F` | Button hovers |
| Border | Soft Taupe | `#E8E2D9` | Dividers, card borders |
| White | Pure White | `#FFFFFF` | Nav backgrounds (scrolled), overlays |

### Typography

**Headings & Display:**
- Font Family: `Cormorant Garamond` (Google Fonts) — elegant, high-contrast serif
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Letter-spacing: `0.02em` for display text, `0.15em` for UPPERCASE product names
- Sizes: Hero `clamp(3rem, 8vw, 5rem)`, Section titles `clamp(2rem, 4vw, 3rem)`, Cards `1.5rem`

**Body & UI:**
- Font Family: `Manrope` (Google Fonts) — clean, modern sans-serif with warmth
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Letter-spacing: `0` (normal) for body, `0.05em` for labels
- Sizes: Body `1rem` (16px), Small `0.875rem`, Caption `0.75rem`

### Spatial System

- Base unit: `8px`
- Section padding: `clamp(4rem, 10vw, 8rem)` vertical
- Container max-width: `1400px` with `2rem` horizontal padding
- Card gaps: `1.5rem` (mobile), `2rem` (desktop)
- Component internal padding: `1.5rem`

### Motion Philosophy

Transitions communicate quality through restraint:
- **Timing:** `300ms ease-out` for most transitions, `500ms` for larger reveals
- **Hover transforms:** Subtle `translateY(-4px)` for cards, opacity shifts for images
- **Page transitions:** Fade-in on mount, staggered content reveals
- **Scroll-triggered:** Elements fade in as they enter viewport, no dramatic slides
- **Hover states:** Soft shadows deepen, images reveal secondary angle, buttons shift color

### Visual Assets

- **Photography Style:** Warm-lit close-ups on neutral/dark backgrounds, lifestyle shots with models showing jewelry in context
- **Icons:** Lucide React — thin stroke weight (`1.5px`), minimal set (search, cart, menu, chevrons, stars)
- **Dividers:** `1px` hairlines in `#E8E2D9`, generous whitespace around them
- **Decorative:** Minimal — the jewelry is the decoration

---

## 3. Layout & Structure

### Page Architecture

```
┌─────────────────────────────────────────────┐
│ NAVIGATION (sticky, transparent → solid)     │
├─────────────────────────────────────────────┤
│ HERO (full-bleed, 100vh or 90vh)            │
├─────────────────────────────────────────────┤
│ TRUST BAR (thin strip, centered icons)      │
├─────────────────────────────────────────────┤
│ BESTSELLERS (5-card grid, 3/2 on desktop)  │
├─────────────────────────────────────────────┤
│ UGC REEL STRIP (horizontal scroll, 9:16)     │
├─────────────────────────────────────────────┤
│ CATEGORY TILES (3 equal columns)            │
├─────────────────────────────────────────────┤
│ BRAND STORY (50/50 split, image + text)     │
├─────────────────────────────────────────────┤
│ TESTIMONIALS (3 cards, centered)            │
├─────────────────────────────────────────────┤
│ NEWSLETTER (accent block, centered form)    │
├─────────────────────────────────────────────┤
│ FOOTER (dark, 4-column layout)              │
└─────────────────────────────────────────────┘
```

### Responsive Strategy

- **Mobile-first:** Base styles target 320px+
- **Breakpoints:** 
  - `sm`: 640px (landscape phones, small tablets)
  - `md`: 768px (tablets)
  - `lg`: 1024px (small laptops)
  - `xl`: 1280px (desktops)
- **Grid adjustments:** 
  - Products: 1 col (mobile) → 2 col (md) → 3 col (lg) → 4-5 col (xl)
  - Hero text: Full width (mobile) → inset position (desktop)
- **Navigation:** Hamburger menu on mobile, full links on desktop

---

## 4. Features & Interactions

### Navigation
- **Default state:** Transparent background, white text (over hero image)
- **Scrolled state (>100px):** Solid cream background, dark text, subtle shadow
- **Mobile menu:** Slide-in drawer from right, full-screen overlay
- **Cart indicator:** Badge shows item count, pulses on add

### Product Cards
- **Default:** Product image, name (uppercase, tracked), price
- **Hover:** Secondary image fades in, "Add to Cart" button slides up from bottom
- **Click:** Navigate to product detail page

### Cart Drawer
- **Trigger:** Click cart icon
- **Animation:** Slide in from right, backdrop fade
- **Contents:** Line items with image, name, variant, quantity controls, remove button
- **Footer:** Subtotal, "Checkout" CTA (accent button)
- **Empty state:** Elegant message with "Continue Shopping" link

### Product Detail Page
- **Image gallery:** Main image with thumbnail strip below, click to change
- **Variant pills:** Toggle between Gold/Silver tone, selected state highlighted
- **Quantity:** Increment/decrement buttons, input field
- **Add to Cart:** Full-width accent button, success feedback (brief)
- **Accordions:** Click to expand, smooth height animation, only one open at a time

### Forms
- **Newsletter:** Email input + submit button, inline validation, success message
- **Validation:** Real-time on blur, clear error messages below fields

### Loading & Empty States
- **Loading:** Subtle skeleton shimmer on cards
- **Empty cart:** Illustration + "Your bag is empty" + CTA
- **No results:** "No products found" with filter reset suggestion

---

## 5. Component Inventory

### Header / Navigation
- **States:** Default (transparent), Scrolled (solid), Mobile menu open
- **Elements:** Logo, nav links, search icon, cart icon with badge
- **Behavior:** Sticky on scroll, background transitions at 100px

### ProductCard
- **States:** Default, Hover (secondary image + add button), Loading (skeleton)
- **Elements:** Image container, product name, price, optional badge
- **Hover effect:** Image swap, button reveal, subtle lift

### Button
- **Variants:** Primary (accent fill), Secondary (outline), Ghost (text only)
- **States:** Default, Hover, Active, Disabled, Loading
- **Sizes:** Small (h-9), Medium (h-11), Large (h-14)

### CartDrawer
- **States:** Open, Closed, Empty
- **Elements:** Header with close button, line items, quantity controls, totals, checkout CTA

### Input
- **States:** Default, Focus, Error, Disabled
- **Variants:** Text, Email, Search

### Accordion
- **States:** Collapsed, Expanded
- **Animation:** Smooth height transition, chevron rotation

### Star Rating
- **Display:** Filled stars, half-star support, readonly

### Testimonial Card
- **Elements:** 5 stars, quote text, customer name + initial

### UGC Card (Reel-style)
- **Aspect ratio:** 9:16
- **Elements:** Vertical image/video placeholder, serif caption overlay

### Category Tile
- **States:** Default, Hover (overlay darkens, text visible)
- **Elements:** Background image, category name overlay

---

## 6. Technical Approach

### Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS 3.4 with custom configuration
- **Routing:** React Router v6
- **State:** React Context (CartContext, UIContext)
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cormorant Garamond, Manrope)

### File Structure
```
src/
├── components/
│   ├── ui/              # Base components (Button, Input, etc.)
│   ├── layout/          # Header, Footer, CartDrawer
│   ├── home/            # Homepage sections
│   ├── product/         # ProductCard, ProductGallery, etc.
│   └── shared/          # Accordion, StarRating, etc.
├── context/
│   ├── CartContext.jsx
│   └── UIContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── data/
│   └── products.js      # Seed product data
├── lib/
│   └── utils.js         # Helper functions
└── App.jsx
```

### Data Model

**Product:**
```javascript
{
  id: string,
  name: string,
  price: number,
  description: string,
  category: 'earrings' | 'necklaces' | 'huggies',
  images: string[],
  variants: { name: string, value: string }[],
  rating: number,
  reviewCount: number,
  materials: string,
  care: string,
  shipping: string
}
```

**CartItem:**
```javascript
{
  productId: string,
  variant: string,
  quantity: number,
  price: number
}
```

### Performance Considerations
- Lazy load images below the fold
- Use CSS transforms for animations (GPU accelerated)
- Minimize re-renders with proper context splitting
- Debounce search input
- Use React.memo for product cards

---

## 7. Seed Products

| ID | Name | Price | Category | Description |
|----|------|-------|----------|-------------|
| 1 | VIVID AURA JEWELS | $42 | earrings | Gold ear cuff with crystal accent |
| 2 | MAJESTIC FLORA NECTAR | $68 | necklaces | Multicolor floral crystal necklace |
| 3 | GOLDEN SPHERE HUGGIES | $38 | huggies | Chunky gold dome huggie earrings |
| 4 | AMBER LACE EARRINGS | $54 | earrings | Textured gold filigree drop earrings |
| 5 | ROYAL HEIRLOOM SET | $95 | sets | Gift-boxed earring + necklace set |

---

## 8. Accessibility

- All interactive elements keyboard navigable
- Focus states visible and styled
- Color contrast minimum 4.5:1 for body text, 3:1 for large text
- Alt text for all images
- ARIA labels on icon-only buttons
- Reduced motion media query respected
