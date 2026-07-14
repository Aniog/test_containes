# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand that embodies **quiet luxury** — the aesthetic of understated elegance where quality speaks louder than branding. The experience should feel like stepping into a high-end boutique: warm lighting, curated displays, attentive service without pressure. Every interaction whispers "timeless" and "treasured."

The visual language draws from editorial fashion magazines and high-end jewelry campaigns — generous whitespace, editorial photography, restrained typography — creating an aspirational yet accessible atmosphere for women 25-45 seeking gold jewelry for self-purchase or gifting.

## 2. Design Language

### Aesthetic Direction
**"Warm Editorial Minimalism"** — Inspired by the quiet sophistication of Bottega Veneta campaigns, Aesop's retail spaces, and Vogue editorial spreads. Rich warmth meets refined restraint.

### Color Palette
```
--velmora-ivory:      #FAF7F5   (primary background - warm white)
--velmora-cream:      #F5F0EB   (secondary background - soft cream)
--velmora-sand:       #E8E0D8   (dividers, subtle borders)
--velmora-taupe:      #9B8B7A   (muted text, secondary elements)
--velmora-espresso:   #3D3229   (primary text - warm dark brown)
--velmora-charcoal:   #2A2420   (headings, emphasis)
--velmora-gold:       #C4A05A   (accent - warm antique gold)
--velmora-gold-light: #D4B876   (hover states, highlights)
--velmora-gold-dark:  #A88B4A   (pressed states)
```

### Typography
- **Display/Headings**: Cormorant Garamond (serif) — elegant, editorial, with beautiful italics
  - Weight: 400 (regular), 500 (medium), 600 (semibold)
  - Use uppercase with `letter-spacing: 0.15em` for product names
- **Body/UI**: Inter (sans-serif) — clean, highly legible, modern
  - Weight: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- **Scale**: 
  - Hero headline: 64px / 72px mobile/desktop
  - Section headings: 36px / 42px
  - Product names: 14px uppercase
  - Body: 15px / 1.6 line-height

### Spatial System
- **Base unit**: 8px
- **Section padding**: 80px vertical (desktop), 48px (mobile)
- **Container max-width**: 1280px
- **Grid**: 12-column with 24px gutters
- **Card gaps**: 24px desktop, 16px mobile
- **Generous whitespace** — let content breathe

### Motion Philosophy
- **Principle**: Motion should feel like silk — smooth, unhurried, natural
- **Timing**: 300ms default for interactions, 500ms for page elements
- **Easing**: `cubic-bezier(0.4, 0, 0.2, 1)` for most transitions
- **Hover states**: Subtle scale (1.02), soft shadow lift
- **Page transitions**: Fade-in with slight upward movement
- **Scroll reveals**: Staggered fade-in for product grids (100ms delay between items)
- **Cart drawer**: Slide from right with backdrop fade

### Visual Assets
- **Icons**: Lucide React — thin stroke weight (1.5px), minimal style
- **Images**: Warm-lit editorial jewelry photography on dark/neutral backgrounds
- **Decorative**: Thin hairline dividers (1px --velmora-sand), subtle grain texture overlay
- **Patterns**: None — let photography and typography carry the visual weight

## 3. Layout & Structure

### Global Structure
```
┌─────────────────────────────────────────┐
│  Sticky Navigation (transparent → solid)│
├─────────────────────────────────────────┤
│                                         │
│           Page Content                   │
│                                         │
├─────────────────────────────────────────┤
│              Footer                     │
└─────────────────────────────────────────┘

[Cart Drawer - slides from right]
```

### Navigation Behavior
- **Default state**: Transparent background, white logo/links over hero images
- **Scrolled state (>100px)**: Solid --velmora-ivory background, espresso text, subtle shadow
- **Transition**: 300ms background/color fade

### Responsive Strategy
- **Breakpoints**: 
  - Mobile: < 640px (primary concern)
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Mobile-first**: Stack layouts, full-width CTAs, hamburger menu
- **Desktop**: Multi-column grids, side-by-side layouts

## 4. Features & Interactions

### Navigation
- Logo (left): Serif "VELMORA" — links to homepage
- Links (center): Shop, Collections, About, Journal
- Icons (right): Search (opens overlay), Cart (opens drawer with count badge)
- Mobile: Hamburger menu → full-screen overlay with stacked links

### Homepage Flow
1. **Hero**: Full-viewport height, centered content, accent CTA
2. **Trust Bar**: Single row with centered trust icons/text
3. **Bestsellers**: 5-column grid (2 on mobile), hover reveals quick-add
4. **UGC Strip**: Horizontal scroll of vertical cards
5. **Category Tiles**: 3 equal columns, hover shows label overlay
6. **Brand Story**: 50/50 split, clickable "Our Story" link
7. **Testimonials**: 3-column grid of review cards
8. **Newsletter**: Full-width accent block with centered form
9. **Footer**: Multi-column links, payment icons, social

### Product Card Behavior
- **Default**: Primary image, name, price
- **Hover**: Secondary image crossfade, quick-add button appears
- **Quick-add**: Single click adds to cart with success feedback
- **Mobile**: Tap shows quick-add below image

### Product Detail Page
- **Gallery**: Main image with thumbnail strip below, click to switch
- **Info panel**: Name, price, rating, description, variant selector, quantity, add-to-cart
- **Variants**: Pill-style toggle buttons (Gold / Silver)
- **Quantity**: Number input with +/- buttons
- **Accordions**: Click to expand/collapse (Description, Materials, Shipping)
- **Related products**: Horizontal scroll of 4 product cards

### Cart Drawer
- **Trigger**: Cart icon click
- **Animation**: Slide from right, backdrop fade
- **Contents**: Product list with image, name, variant, quantity controls, remove
- **Footer**: Subtotal, checkout button
- **Empty state**: "Your cart is empty" with shop link

### Collection Page
- **Layout**: Sidebar (desktop) or top filters (mobile) + product grid
- **Filters**: Category (checkboxes), Price (range), Material (checkboxes)
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)
- **Grid**: 3 columns (desktop), 2 columns (mobile)
- **Pagination**: Load more button or infinite scroll

## 5. Component Inventory

### Button
- **Variants**: Primary (solid gold), Secondary (outlined), Ghost (text only)
- **Sizes**: sm (36px), md (44px), lg (52px)
- **States**: Default, Hover (lighten), Active (darken), Disabled (50% opacity)
- **Style**: Rounded corners (4px), uppercase text with letter-spacing

### Product Card
- **Container**: Aspect-ratio 3:4, overflow hidden
- **Image**: Object-fit cover, hover crossfade to second image
- **Overlay**: Quick-add button fades in on hover
- **Info**: Product name (serif, uppercase), price (sans)

### Input Field
- **Style**: Border-bottom only (hairline), focus expands to gold
- **States**: Default (sand border), Focus (gold border), Error (red border)
- **Label**: Above input, small caps

### Accordion
- **Trigger**: Full-width, flex between title and chevron icon
- **Chevron**: Rotates 180° when expanded
- **Panel**: Animated height transition

### Modal/Drawer
- **Overlay**: Black 50% opacity
- **Container**: White/cream background, subtle shadow
- **Close**: X button top-right, escape key, backdrop click

### Rating Stars
- **Display**: 5 stars, filled gold for rating, sand for empty
- **Text**: "(128 reviews)" in muted color

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **State**: React Context for cart, useState for local UI
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

### Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── CartDrawer.jsx
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── TrustBar.jsx
│   │   ├── Bestsellers.jsx
│   │   ├── UGCRow.jsx
│   │   ├── CategoryTiles.jsx
│   │   ├── BrandStory.jsx
│   │   ├── Testimonials.jsx
│   │   └── Newsletter.jsx
│   ├── product/
│   │   ├── ProductCard.jsx
│   │   ├── ProductGallery.jsx
│   │   ├── VariantSelector.jsx
│   │   └── ProductAccordion.jsx
│   ├── collection/
│   │   ├── FilterSidebar.jsx
│   │   ├── ProductGrid.jsx
│   │   └── SortDropdown.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       ├── StarRating.jsx
│       └── QuantitySelector.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── data/
│   └── products.js
└── lib/
    └── utils.js
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
  rating: number,
  reviewCount: number,
  variants: ['gold', 'silver'],
  isBestseller: boolean
}

CartItem {
  product: Product,
  variant: 'gold' | 'silver',
  quantity: number
}
```

### Performance Considerations
- Lazy load images below the fold
- Preload hero image
- Code-split collection/product pages
- Minimize re-renders with React.memo on product cards
- Use CSS transitions over JS animations where possible

## 7. Seed Products

1. **Vivid Aura Jewels** — $42
   - Gold ear cuff with crystal accent
   - Category: Earrings
   
2. **Majestic Flora Nectar** — $68
   - Multicolor floral crystal necklace
   - Category: Necklaces
   
3. **Golden Sphere Huggies** — $38
   - Chunky gold dome huggie earrings
   - Category: Huggies
   
4. **Amber Lace Earrings** — $54
   - Textured gold filigree drop earrings
   - Category: Earrings
   
5. **Royal Heirloom Set** — $95
   - Gift-boxed earring + necklace set
   - Category: Sets
