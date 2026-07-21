# Velmora Fine Jewelry — E-Commerce Storefront

## Concept & Vision

Velmora Fine Jewelry embodies **quiet luxury** — a sanctuary of refined elegance where demi-fine gold jewelry feels both accessible and aspirational. The experience evokes an intimate jewelry boutique: warm lighting, generous space to breathe, and pieces presented as treasured objects rather than mere merchandise. Every interaction whispers sophistication; nothing shouts.

---

## Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by high-end fashion magazines and intimate jewelry house lookbooks. Think Bottega Veneta meets Mejuri. Warm neutrals create a gallery-like backdrop that lets the gold jewelry glow. Photography is hero; typography is restrained but confident.

### Color Palette

| Role | Name | Hex |
|------|------|-----|
| Background Primary | Warm Ivory | `#FAF8F5` |
| Background Secondary | Soft Cream | `#F5F0E8` |
| Background Dark | Rich Charcoal | `#1A1A1A` |
| Text Primary | Deep Warm Black | `#141414` |
| Text Secondary | Muted Stone | `#6B6460` |
| Accent Primary | Champagne Gold | `#C9A962` |
| Accent Hover | Deep Gold | `#B8943F` |
| Border/Divider | Hairline Warm Gray | `#E8E3DD` |
| White | Pure White | `#FFFFFF` |

### Typography

| Usage | Font | Weight | Size/Transform |
|-------|------|--------|----------------|
| Logo | Cormorant Garamond | 500 | 24px, tracking wide |
| H1 (Hero) | Cormorant Garamond | 400 | 56px (mobile: 36px) |
| H2 (Section Titles) | Cormorant Garamond | 500 | 40px (mobile: 28px) |
| H3 (Product Names) | Cormorant Garamond | 500 | 18px, UPPERCASE, tracking widest |
| Body | Manrope | 400 | 15px, line-height 1.6 |
| UI/Labels | Manrope | 500 | 13px |
| Button | Manrope | 600 | 13px, UPPERCASE, tracking wide |

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (mobile: 48px)
- Container max-width: 1280px
- Grid gap: 24px (mobile: 16px)
- Hairline borders: 1px solid `#E8E3DD`

### Motion Philosophy
- **Entrance animations**: Fade + slight rise (opacity 0→1, translateY 20px→0), 500ms ease-out
- **Hover transitions**: 300ms ease, subtle scale (1.02) or shadow lift
- **Page transitions**: Smooth opacity crossfade
- **Image reveals**: Soft scale from 1.05→1 on scroll into view
- **No jarring movements** — everything flows like silk

### Visual Assets
- **Icons**: Lucide React — thin stroke weight, elegant
- **Photography style**: Warm-lit, close-up jewelry on neutral/stone backgrounds, editorial feel
- **Placeholders**: Elegant SVG placeholders with warm tones
- **Dividers**: Hairline (1px) in warm gray, sometimes with centered decorative element

---

## Layout & Structure

### Page Architecture

**Header (Sticky Nav)**
- Transparent over hero, transitions to solid `#FAF8F5` with subtle shadow on scroll
- Height: 72px
- Left: Serif logo "VELMORA" with gold accent on hover
- Center: Navigation links with underline-on-hover
- Right: Search icon + Cart icon with item count badge

**Footer**
- Dark background `#1A1A1A` with warm text
- Logo, link columns, social icons, payment badges
- Newsletter mini-form

### Responsive Strategy
- Mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile: Single column, hamburger menu, bottom-sticky cart button
- Tablet: 2-column grids, condensed nav
- Desktop: Full layout, 3-4 column grids, expanded navigation

---

## Pages & Features

### 1. Homepage

**1.1 Hero Section**
- Full-bleed (100vh on desktop, 70vh mobile)
- Background: Warm editorial image with subtle overlay
- Headline: "Crafted to be Treasured" — serif, large
- Subhead: "Demi-fine gold jewelry for every moment that matters"
- CTA Button: "Shop the Collection" — solid accent gold

**1.2 Trust Bar**
- Thin strip below hero
- 4 trust badges with icons: Free Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
- Centered, horizontal scroll on mobile

**1.3 Bestsellers Grid**
- Section title: "Our Bestsellers" — centered serif
- 5 product cards in responsive grid
- Card: Image with hover-reveal second image + quick "Add to Cart" overlay
- Product name (uppercase, spaced), price

**1.4 UGC Reel Strip**
- Horizontal scroll of vertical 9:16 cards
- Soft caption overlay: customer name + product
- Smooth momentum scroll, no scrollbar visible
- 6-8 cards

**1.5 Shop by Category**
- 3 tiles: Earrings · Necklaces · Huggies
- Image with label revealed on hover (overlay effect)
- Rounded corners, subtle shadow

**1.6 Brand Story**
- Split layout: Image left (50%), Text right (50%)
- Headline: "Jewelry that tells your story"
- Body text: Brand narrative
- "Our Story" link with arrow

**1.7 Testimonials**
- 3 review cards
- 5-star rating, quote, customer name + initial
- Horizontal layout on desktop, stacked on mobile

**1.8 Newsletter**
- Full-width accent section (light gold background)
- Headline: "Join for 10% off your first order"
- Email input + Subscribe button
- Privacy note

### 2. Product Detail Page

**2.1 Gallery (Left)**
- Main image (large)
- Thumbnail strip below (4 images)
- Click to swap main image

**2.2 Product Info (Right)**
- Product name: Serif, uppercase, wide tracking
- Price: Clear, prominent
- Rating: 5 stars + review count
- Short description paragraph
- Variant selector: Gold/Silver as pill buttons
- Quantity selector
- "Add to Cart" — full-width accent button
- Wishlist icon (optional)

**2.3 Accordions (Below)**
- Description
- Materials & Care
- Shipping & Returns
- Smooth expand/collapse

**2.4 Related Products**
- "You may also like" row
- 4 product cards

### 3. Collection/Shop Page

**3.1 Page Header**
- Category name (serif)
- Product count

**3.2 Filter Sidebar (Desktop)**
- Category (Earrings, Necklaces, Huggies)
- Price range
- Material
- Clear filters button

**3.3 Product Grid**
- Responsive: 2 col mobile, 3 col tablet, 4 col desktop
- Sort dropdown: Featured, Price Low-High, Price High-Low, Newest

**3.4 Mobile Filters**
- Filter button that opens slide-out panel

---

## Component Inventory

### Navigation
- **States**: Transparent (over hero), Solid (scrolled), Mobile menu open
- **Transitions**: Background opacity + shadow on scroll (300ms)

### Product Card
- **Default**: Image, name, price
- **Hover**: Second image fade in, "Add to Cart" overlay appears (bottom of card)
- **Loading**: Skeleton placeholder
- **Added to Cart**: Brief checkmark animation

### Button (Primary)
- **Default**: Gold background `#C9A962`, dark text, uppercase
- **Hover**: Darker gold `#B8943F`, slight scale
- **Active**: Pressed effect
- **Disabled**: Muted, reduced opacity
- **Loading**: Spinner icon

### Button (Secondary)
- **Default**: Transparent with gold border
- **Hover**: Gold background fills in

### Input Field
- **Default**: Warm gray border, ivory background
- **Focus**: Gold border, subtle glow
- **Error**: Red border, error message below
- **Disabled**: Muted background

### Cart Drawer
- **Closed**: Hidden off-screen right
- **Open**: Slides in from right, backdrop overlay
- **Empty state**: Illustration + "Your cart is empty" + CTA

### Accordion
- **Collapsed**: Title + plus icon
- **Expanded**: Content reveals, icon rotates to minus
- **Transition**: Smooth height animation (300ms)

### Toast Notification
- **Success**: Green accent, checkmark
- **Error**: Red accent, X icon
- **Position**: Bottom-right
- **Auto-dismiss**: 3 seconds

---

## Technical Approach

### Stack
- React 18 + Vite
- Tailwind CSS (utility-first)
- React Router v6 (routing)
- Lucide React (icons)
- Context API (cart state)
- Framer Motion or CSS animations

### State Management
- **Cart**: Context API with localStorage persistence
- **UI State**: Local component state
- **Filters**: URL params + local state

### Data
- Seed product data in `/src/data/products.js`
- Static JSON for products (no backend needed for demo)

### File Structure
```
src/
├── components/
│   ├── layout/
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CartDrawer.jsx
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
│   │   ├── ProductInfo.jsx
│   │   └── ProductAccordion.jsx
│   ├── shop/
│   │   ├── FilterSidebar.jsx
│   │   ├── ProductGrid.jsx
│   │   └── SortDropdown.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Toast.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProductPage.jsx
│   └── CollectionPage.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js
├── hooks/
│   └── useScrollPosition.js
├── lib/
│   └── utils.js
└── App.jsx
```

---

## Seed Product Data

| ID | Name | Price | Category | Description |
|----|------|-------|----------|-------------|
| 1 | Vivid Aura Jewels | $42 | Earrings | Gold ear cuff with crystal accent |
| 2 | Majestic Flora Nectar | $68 | Necklaces | Multicolor floral crystal necklace |
| 3 | Golden Sphere Huggies | $38 | Earrings | Chunky gold dome huggie earrings |
| 4 | Amber Lace Earrings | $54 | Earrings | Textured gold filigree drop earrings |
| 5 | Royal Heirloom Set | $95 | Sets | Gift-boxed earring + necklace set |

---

## Accessibility Requirements
- WCAG AA contrast ratios minimum
- Keyboard navigation for all interactive elements
- Focus indicators visible
- Alt text for all images
- ARIA labels where needed
- Reduced motion media query respected
