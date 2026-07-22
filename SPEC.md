# Velmora Fine Jewelry — E-Commerce Storefront

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand targeting women 25-45. The store embodies **quiet luxury** — warm, editorial, and premium without being ostentatious. Every interaction should feel like browsing a high-end fashion magazine: generous whitespace, rich photography, and refined typography that elevates rather than shouts.

The experience balances accessibility with aspiration — customers should feel they're investing in quality, not chasing discounts.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by high-end fashion magazines (Vogue, Harper's Bazaar) and luxury jewelry houses. Dark, warm neutrals as base; gold as the hero accent. Photography-forward with generous breathing room.

### Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Background Primary | Rich Black | `#0A0A09` |
| Background Secondary | Warm Charcoal | `#1A1A18` |
| Background Elevated | Dark Taupe | `#2A2825` |
| Text Primary | Warm White | `#F7F5F0` |
| Text Secondary | Muted Cream | `#A8A49C` |
| Accent Gold | Antique Gold | `#C9A962` |
| Accent Gold Hover | Bright Gold | `#D4B876` |
| Accent Gold Muted | Dusty Gold | `#8B7A4C` |
| Border | Hairline Gold | `#3D3A33` |
| Success | Sage | `#7A8B6F` |
| Error | Dusty Rose | `#A66B6B` |

### Typography

| Element | Font | Weight | Size | Transform | Letter-Spacing |
|---------|------|--------|------|-----------|----------------|
| Logo | Cormorant Garamond | 500 | 28px | Normal | 0.15em |
| H1 (Hero) | Cormorant Garamond | 400 | 64px (desktop) / 40px (mobile) | Normal | 0.02em |
| H2 (Section) | Cormorant Garamond | 400 | 42px (desktop) / 28px (mobile) | Normal | 0.02em |
| H3 (Card) | Cormorant Garamond | 500 | 22px | Normal | 0.01em |
| Product Name | Inter | 500 | 14px | UPPERCASE | 0.12em |
| Body | Inter | 400 | 15px | Normal | 0 |
| Body Small | Inter | 400 | 13px | Normal | 0 |
| Button | Inter | 500 | 13px | UPPERCASE | 0.15em |
| Caption | Inter | 400 | 12px | Normal | 0.02em |

### Spatial System

- **Base unit**: 4px
- **Section padding**: 80px vertical (desktop), 48px (mobile)
- **Component gaps**: 16px, 24px, 32px
- **Max content width**: 1400px
- **Grid**: 12-column, 24px gutters

### Motion Philosophy

All animations are **subtle and intentional** — they enhance elegance, never distract.

- **Entrance**: Fade up with 0.6s ease-out, staggered 80ms between items
- **Hover**: Scale 1.02, 0.3s ease-out; color transitions 0.2s
- **Page transitions**: Crossfade 0.3s
- **Cart drawer**: Slide from right, 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- **Image hover**: Subtle zoom 1.05 over 0.5s
- **Button hover**: Background lightens, subtle lift with shadow

### Visual Assets

- **Icons**: Lucide React — thin stroke weight (1.5px), consistent sizing
- **Images**: Dark/neutral backgrounds with warm lighting; jewelry as hero
- **Decorative**: Thin hairline dividers (1px), subtle gradients, no heavy borders
- **Patterns**: None — photography and typography carry the visual weight

---

## 3. Layout & Structure

### Page Architecture

```
┌─────────────────────────────────────────────┐
│  Sticky Navigation (transparent → solid)    │
├─────────────────────────────────────────────┤
│                                             │
│  Full-Bleed Hero Section                    │
│  (100vh, image background, centered text)   │
│                                             │
├─────────────────────────────────────────────┤
│  Trust Bar (thin strip, centered)          │
├─────────────────────────────────────────────┤
│                                             │
│  Bestsellers Grid                           │
│  (5 cards, hover reveals second image)      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  UGC Reel Strip                             │
│  (horizontal scroll, 9:16 vertical cards)  │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Category Tiles                             │
│  (3 equal tiles, hover reveals label)       │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Brand Story Split                          │
│  (50/50 image + text)                      │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Testimonials                               │
│  (3 cards, centered)                        │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  Newsletter Capture                         │
│  (accent background, centered)             │
│                                             │
├─────────────────────────────────────────────┤
│  Footer                                     │
│  (4 columns + social + payment)             │
└─────────────────────────────────────────────┘
```

### Responsive Strategy

- **Mobile-first**: Base styles for 320px+
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Navigation**: Hamburger menu below md, full nav at md+
- **Grids**: 1 column mobile → 2 column tablet → 3-4 column desktop
- **Typography**: Fluid scaling with clamp()

---

## 4. Features & Interactions

### Navigation
- **Default state**: Transparent background, white text
- **Scrolled state**: Solid dark background with blur, transition after 100px scroll
- **Mobile**: Slide-out drawer from right
- **Logo**: Left-aligned, serif, links to home
- **Links**: Shop, Collections, About, Journal — hover underline animation
- **Icons**: Search (opens overlay), Cart (opens drawer) — badge shows item count

### Hero Section
- **Background**: Full-bleed image with subtle dark overlay gradient
- **Content**: Centered text block — headline, subhead, CTA button
- **CTA**: Outlined button with gold border, fills on hover

### Trust Bar
- **Layout**: Horizontal row of 4 trust points, evenly spaced
- **Style**: Small icons + text, muted color, 1px dividers between

### Product Card (Bestsellers)
- **Default**: Primary image, product name (uppercase), price
- **Hover**: Secondary image fades in, "Add to Cart" button slides up
- **Quick add**: Click adds to cart, brief success toast
- **Wishlist**: Heart icon top-right, toggleable

### UGC Reel Strip
- **Layout**: Horizontal scroll container, snap-to-card behavior
- **Cards**: 9:16 aspect ratio, image fills card, caption overlay at bottom
- **Caption**: Semi-transparent dark gradient, serif text, customer name
- **Interaction**: Click could open modal (future), subtle scale on hover

### Category Tiles
- **Layout**: 3 equal-width tiles in row
- **Default**: Image with subtle overlay
- **Hover**: Overlay darkens, category label appears (fade + slide up)
- **Labels**: "Earrings", "Necklaces", "Huggies"

### Brand Story Section
- **Layout**: 50/50 split — image left, text right
- **Image**: Editorial photography, subtle parallax on scroll
- **Text**: Serif heading, body paragraph, text link with arrow
- **Link**: "Our Story →" — hover animates arrow

### Testimonials
- **Layout**: 3 cards in a row (stacked on mobile)
- **Card**: Star rating (5 stars), quote text, customer name + initial
- **Style**: Subtle border, elevated background

### Newsletter
- **Layout**: Full-width section, centered content
- **Background**: Accent gold gradient or solid accent
- **Content**: Heading, subhead, email input + submit button
- **Input**: Dark field with light text, gold focus ring
- **Success**: Replaces form with confirmation message

### Footer
- **Layout**: 4 columns — Logo+about, Shop links, Help links, Company links
- **Bottom**: Copyright, payment icons, social links
- **Style**: Muted text, gold hover states on links

### Cart Drawer
- **Trigger**: Cart icon click
- **Animation**: Slides from right, backdrop dims
- **Content**: Item list (image, name, price, quantity controls), subtotal
- **Actions**: Update quantity, remove item, checkout button
- **Empty state**: Illustration + "Your cart is empty" + shop link
- **Close**: Click outside, X button, or ESC key

### Product Detail Page
- **Gallery**: Main image + thumbnail strip, click to swap
- **Info**: Name (uppercase), price, rating stars, description
- **Variants**: Pill buttons for gold/silver options
- **Quantity**: Number input with +/- controls
- **Add to Cart**: Full-width button, loading state, success feedback
- **Accordions**: Description, Materials & Care, Shipping & Returns
- **Related**: "You may also like" horizontal scroll of product cards

### Collection Page
- **Layout**: Sidebar filters + main grid
- **Filters**: Category (checkboxes), Price (range), Material (checkboxes)
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile
- **Sort**: Dropdown — Featured, Price Low-High, Price High-Low, Newest
- **Mobile**: Filters in slide-out drawer

---

## 5. Component Inventory

### Button
- **Variants**: Primary (gold fill), Secondary (gold outline), Ghost (text only)
- **Sizes**: sm (32px), md (44px), lg (52px)
- **States**: Default, hover (lift + lighten), active (press), disabled (50% opacity), loading (spinner)

### ProductCard
- **Default**: Image container (4:5 ratio), name, price
- **Hover**: Second image crossfade, quick-add overlay
- **States**: Default, hover, loading (skeleton), out-of-stock (grayed, "Sold Out" badge)

### Input
- **Variants**: Text, email, number
- **States**: Default, focus (gold ring), error (red ring + message), disabled

### Badge
- **Variants**: Default (gold), Sale (muted red), New (muted green), Bestseller (accent)

### Accordion
- **Default**: Closed, shows title + chevron
- **Expanded**: Shows content, chevron rotates
- **Animation**: Height auto with 0.3s ease

### StarRating
- **Display**: 5 stars, filled/empty based on rating
- **Interactive**: Clickable for review submission (future)

### QuantitySelector
- **Controls**: Minus button, number display, plus button
- **States**: Default, min reached (minus disabled), max reached (plus disabled)

### CartItem
- **Layout**: Image (square), details (name, variant, price), quantity, remove
- **States**: Default, updating (spinner), removing (fade out)

### Modal/Drawer
- **Animation**: Fade + scale (modal) or slide (drawer)
- **Backdrop**: Semi-transparent black with blur
- **Close**: X button, backdrop click, ESC key

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router v6
- **State**: React Context (cart, UI) + local state
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

### Architecture
```
src/
├── components/
│   ├── ui/           # Reusable primitives (Button, Input, Badge, etc.)
│   ├── layout/       # Navigation, Footer, CartDrawer
│   ├── sections/     # Homepage sections (Hero, TrustBar, etc.)
│   └── product/      # Product-related components
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Collection.jsx
├── context/
│   ├── CartContext.jsx
│   └── UIContext.jsx
├── data/
│   └── products.js   # Seed product data
├── hooks/
│   └── useScrollPosition.js
├── lib/
│   └── utils.js      # cn() helper
└── styles/
    └── index.css     # Global styles + Tailwind
```

### Data Model

**Product**
```js
{
  id: string,
  name: string,
  slug: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies',
  description: string,
  materials: string,
  care: string,
  images: string[],      // Primary, secondary, etc.
  variants: string[],    // ['gold', 'silver']
  rating: number,         // 0-5
  reviewCount: number,
  bestseller: boolean,
  tags: string[]
}
```

**CartItem**
```js
{
  productId: string,
  variant: string,
  quantity: number,
  price: number
}
```

### Performance Considerations
- Lazy load images below fold
- Memoize expensive calculations
- Debounce search input
- Optimistic UI updates for cart
