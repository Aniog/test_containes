# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand targeting women 25-45 who seek premium gold jewelry at accessible price points ($30-$120). The storefront embodies **quiet luxury** — warm, editorial, and refined — with none of the loud discount aesthetics common in mass-market jewelry sites. Every interaction should feel like browsing a high-end boutique, not scrolling through a marketplace.

The brand promise: "Crafted to be Treasured" — each piece is designed to become a cherished possession, whether purchased as a self-reward or a meaningful gift.

---

## 2. Design Language

### Aesthetic Direction
**Reference**: Aesop meets Mejuri — editorial warmth with quiet confidence. Not stark minimalism, but refined restraint with generous breathing room.

### Color Palette
```
--velmora-cream:      #FAF7F2   (Primary background — warm cream, not stark white)
--velmora-espresso:   #2C2420   (Primary text — warm dark brown, not pure black)
--velmora-gold:       #C4A962   (Primary accent — muted antique gold)
--velmora-gold-light: #E8D9B5   (Secondary gold — soft champagne)
--velmora-warm-gray:  #8A7E74   (Secondary text — taupe)
--velmora-sand:       #E8E2D9   (Borders, dividers — warm sand)
--velmora-charcoal:   #1A1614   (Dark sections, footer — rich dark)
```

### Typography
- **Display/Headings**: Cormorant Garamond (Google Fonts) — elegant serif with editorial feel
  - H1: 56px / 1.1 line-height / 600 weight
  - H2: 40px / 1.2 line-height / 600 weight
  - H3: 28px / 1.3 line-height / 500 weight
  - Product names: UPPERCASE / 14px / 0.15em letter-spacing / 500 weight
  
- **Body/UI**: Inter (Google Fonts) — clean, modern sans-serif
  - Body: 16px / 1.6 line-height / 400 weight
  - Small: 14px / 1.5 line-height / 400 weight
  - UI elements: 13px / 0.02em letter-spacing

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop) / 48px (mobile)
- Component gaps: 24px default
- Card padding: 24px
- Max content width: 1280px

### Motion Philosophy
- **Entrance animations**: Fade-up with 400ms ease-out, staggered 100ms between items
- **Hover transitions**: 300ms ease, scale 1.02 on cards, underline slide-in on links
- **Button states**: 200ms color transitions, subtle shadow lift on hover
- **Page transitions**: Instant navigation (SPA feel), smooth scroll behavior
- **No jarring animations**: Everything should feel organic, never mechanical

### Visual Assets
- **Icons**: Lucide React — thin stroke weight (1.5px), matching the editorial feel
- **Images**: Warm-lit, editorial jewelry photography with dark or neutral backgrounds
- **Dividers**: 1px hairline in --velmora-sand
- **Shadows**: Soft, warm-tinted (rgba(44, 36, 32, 0.08))

---

## 3. Layout & Structure

### Global Layout
- Sticky header with transparent-to-solid scroll behavior
- Full-width sections with contained content (max-width: 1280px, px-6)
- Generous vertical rhythm between sections

### Page Structure

#### Homepage Flow
1. **Sticky Nav** — transparent overlay on hero
2. **Hero** — full-bleed (100vh), editorial image, headline + CTA
3. **Trust Bar** — thin strip, 4 trust signals, center-aligned
4. **Bestsellers** — 5-card grid, section title + "Shop All" link
5. **UGC Reel Strip** — horizontal scroll, vertical 9:16 cards
6. **Category Tiles** — 3 equal tiles, hover reveals label
7. **Brand Story** — 50/50 image-text split
8. **Testimonials** — 3-column grid
9. **Newsletter** — full-width accent block
10. **Footer** — multi-column links + social

#### Product Detail Layout
- 50/50 split: image gallery (left) / product info (right)
- Sticky product info on scroll
- Accordion sections below
- Related products row

#### Collection Layout
- Sidebar filter (collapsible on mobile)
- Responsive product grid (4 col → 2 col → 1 col)
- Sort dropdown, product count

### Responsive Strategy
- Mobile-first breakpoints: base (mobile) / md (768px) / lg (1024px) / xl (1280px)
- Touch-friendly tap targets (min 44px)
- Collapsible mobile nav with slide-in drawer
- Single-column layouts on mobile for all multi-column sections

---

## 4. Features & Interactions

### Navigation
- **Transparent header**: Overlays hero, text in cream/white
- **Solid header**: After 100px scroll, background becomes --velmora-cream with shadow
- **Mobile menu**: Hamburger icon → full-screen overlay with staggered link animation
- **Cart icon**: Shows item count badge when cart has items

### Hero Section
- Full-viewport height
- Background: large editorial jewelry image
- Headline: Cormorant Garamond, centered
- CTA button: outlined accent style
- Subtle parallax on scroll (optional enhancement)

### Product Cards (Bestsellers & Grid)
- Default state: Product image, name (uppercase), price
- Hover state: Second image crossfade, "Add to Cart" button slides up from bottom
- Click: Navigate to product detail page
- Add to Cart: Success feedback (button text changes briefly)

### UGC Reel Strip
- Horizontal overflow scroll with snap points
- 9:16 vertical video/image cards
- Soft serif caption overlay at bottom
- No autoplay — user-controlled scroll

### Category Tiles
- 3 equal columns
- Default: Image only, subtle overlay
- Hover: Label slides up from bottom with backdrop blur

### Brand Story Split
- Left: Large editorial image
- Right: Serif headline, paragraph text, "Our Story" link (underline animation)
- Reverses on mobile (image on top)

### Testimonials
- 3 cards with quote, 5-star rating, customer name + initial
- Subtle card elevation

### Newsletter
- Full-width section with --velmora-charcoal background
- Input field + submit button
- Success state: "Thank you!" message replaces form

### Product Detail Page
- **Image gallery**: Main image + thumbnail strip, click to change
- **Variant selector**: Gold / Silver pill buttons, selected state has accent border
- **Quantity**: Number input with +/- buttons
- **Add to Cart**: Full-width accent button, loading state, success feedback
- **Accordions**: Click to expand/collapse, smooth height animation
- **Related products**: Horizontal scroll row

### Cart Drawer
- Slides in from right
- Shows all cart items with image, name, variant, quantity, price
- Quantity adjusters (+/-)
- Remove item button
- Subtotal calculation
- "Checkout" button (placeholder)
- Empty state: Illustration + "Your cart is empty" + "Continue Shopping" link

### Collection/Shop Page
- **Filters**: Category checkboxes, price range, material checkboxes
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)
- **Grid**: Responsive product cards
- **Mobile filters**: Full-screen overlay with "Apply" button

---

## 5. Component Inventory

### Button
- **Variants**: primary (filled gold), secondary (outlined), ghost (text only)
- **States**: default, hover (slight lift + shadow), active (pressed), disabled (50% opacity), loading (spinner)
- **Sizes**: sm (36px height), md (44px height), lg (52px height)

### Input
- **States**: default (sand border), focus (gold border), error (red border + message), disabled
- **Style**: Clean, minimal, 44px height

### ProductCard
- **States**: default, hover (image swap + CTA reveal), loading (skeleton)
- **Elements**: Image, badge (optional), name, price, quick-add button

### Header
- **States**: transparent (over hero), solid (scrolled), mobile-open
- **Elements**: Logo, nav links, search icon, cart icon with badge

### Footer
- **Layout**: 4-column grid (logo + about, shop links, help links, company links)
- **Bottom bar**: Copyright, payment icons, social links

### Accordion
- **States**: collapsed, expanded
- **Animation**: Smooth height transition, rotate chevron icon

### CartDrawer
- **States**: closed, open, empty, loading
- **Animation**: Slide from right, backdrop fade

### Rating
- **Display**: 5 stars, filled/empty, with review count

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS v3
- **Routing**: React Router v6
- **Icons**: Lucide React
- **State**: React Context (Cart), useState/useReducer for local state
- **Animations**: CSS transitions + Tailwind animation utilities

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Rating.jsx
│   │   └── Accordion.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Bestsellers.jsx
│   │   ├── UGCStrip.jsx
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
├── index.css
├── App.jsx
└── main.jsx
```

### Data Model
Products stored in static JS file with structure:
```js
{
  id: string,
  name: string,
  slug: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies' | 'sets',
  description: string,
  materials: string,
  care: string,
  variants: [{ name: string, hex: string }],
  images: string[],
  rating: number,
  reviewCount: number,
  badge?: string
}
```

### Cart State
```js
{
  items: [
    { productId, variant, quantity, price }
  ],
  isOpen: boolean
}
```

### Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Focus management for drawers and modals
- Keyboard navigation support
- Color contrast ratios meet WCAG AA

---

## 7. Seed Product Data

| ID | Name | Price | Category |
|----|------|-------|----------|
| 1 | Vivid Aura Jewels | $42 | earrings |
| 2 | Majestic Flora Nectar | $68 | necklaces |
| 3 | Golden Sphere Huggies | $38 | huggies |
| 4 | Amber Lace Earrings | $54 | earrings |
| 5 | Royal Heirloom Set | $95 | sets |
