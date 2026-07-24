# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand that embodies **quiet luxury** — understated elegance that whispers rather than shouts. The storefront feels like stepping into a curated editorial spread: warm, intimate, and deeply considered. Every pixel communicates that this jewelry is meant to be treasured, not trend-chased. The experience bridges high-end boutique warmth with the convenience of modern e-commerce.

## 2. Design Language

### Aesthetic Direction
**Reference**: Editorial luxury magazine meets intimate boutique — think the visual language of Byredo, Mejuri, or a refined Kinfolk spread. Warm-lit photography, generous negative space, and typography that feels hand-selected.

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary (Deep Base) | Rich Charcoal | `#1C1917` |
| Secondary (Warm Cream) | Champagne | `#FAF8F5` |
| Accent (Gold) | Warm Gold | `#C9A962` |
| Accent Hover | Deep Gold | `#B8944E` |
| Text Primary | Near Black | `#1C1917` |
| Text Secondary | Warm Gray | `#78716C` |
| Border/Divider | Hairline | `#E8E4DF` |
| White | Pure | `#FFFFFF` |

### Typography
- **Display/Headings**: Cormorant Garamond (Google Fonts) — elegant, high-contrast serif with refined personality
- **Body/UI**: Inter (Google Fonts) — clean, modern sans-serif with excellent readability
- **Product Names**: Uppercase with `tracking-[0.2em]` — editorial, intentional
- **Scale**: 
  - Hero: 56-72px (Cormorant, 300-400 weight)
  - Section titles: 36-48px (Cormorant, 400 weight)
  - Product names: 14-16px (Inter, 500 weight, uppercase)
  - Body: 15-16px (Inter, 400 weight)
  - Small/UI: 12-14px (Inter, 400 weight)

### Spatial System
- **Base unit**: 8px
- **Section padding**: 80-120px vertical (desktop), 48-64px (mobile)
- **Container max-width**: 1280px with 24-48px horizontal padding
- **Card gaps**: 24-32px
- **Generous whitespace**: minimum 40px between major content blocks

### Motion Philosophy
- **Transitions**: 300-400ms ease-out for hover states
- **Scroll reveals**: Subtle fade-up on intersection (400ms)
- **Image hovers**: Smooth opacity crossfade (300ms)
- **Buttons**: Gentle scale (1.02) and shadow lift on hover
- **Navigation**: 200ms background color transition on scroll
- **Cart drawer**: Slide from right with 300ms ease-out

### Visual Assets
- **Icons**: Lucide React — 1.5px stroke weight, minimal style
- **Images**: Warm-lit jewelry photography on neutral/dark backgrounds
- **Dividers**: 1px hairline in `#E8E4DF`, used sparingly
- **Shadows**: Subtle, warm-tinted (e.g., `rgba(28, 25, 23, 0.08)`)

## 3. Layout & Structure

### Page Architecture

#### Homepage Flow
1. **Sticky Navigation** (64px height) — transparent → solid on scroll
2. **Hero Section** (100vh minus nav) — full-bleed, editorial feel
3. **Trust Bar** (48px) — thin informational strip
4. **Bestsellers Grid** — 5 products, editorial spacing
5. **UGC Reel Strip** — horizontal scroll, 9:16 vertical cards
6. **Category Tiles** — 3 equal columns, hover reveals
7. **Brand Story Split** — asymmetric 50/50 image + text
8. **Testimonials** — 3-column, centered
9. **Newsletter** — full-width accent block
10. **Footer** — 4-column layout

#### Product Detail Layout
- **Desktop**: 55/45 split (gallery left, details right)
- **Mobile**: Stacked, gallery first
- **Gallery**: Main image + thumbnail strip below
- **Details**: Name, price, rating, description, variants, add-to-cart
- **Accordions**: Description, Materials & Care, Shipping
- **Related Products**: 4-column horizontal scroll

#### Collection Page
- **Desktop**: Sidebar filter (240px) + product grid (remaining)
- **Mobile**: Filter as modal, full-width grid
- **Grid**: 3 columns desktop, 2 tablet, 2 mobile
- **Sort**: Dropdown top-right of grid

### Responsive Strategy
- Mobile-first breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Navigation collapses to hamburger at md
- Hero text scales down proportionally
- Grid columns reduce gracefully
- Touch targets minimum 44px on mobile

## 4. Features & Interactions

### Navigation
- **Scroll behavior**: Transparent background when at top, solid cream on scroll (threshold: 50px)
- **Logo**: "VELMORA" in Cormorant Garamond, links to home
- **Links**: Shop, Collections, About, Journal — hover underline animation
- **Icons**: Search (opens overlay), Cart (opens drawer) — icon scales on hover
- **Mobile**: Hamburger menu, full-screen overlay navigation

### Hero Section
- Full-bleed warm-lit jewelry image
- Overlay text: Headline + subhead + CTA button
- CTA: Outlined button with hover fill animation
- Subtle parallax or slow Ken Burns effect on image (optional)

### Trust Bar
- Four trust points in a horizontal strip
- Thin divider lines between items
- Icons + text pairs
- Stays static (no animation)

### Product Cards (Bestsellers, Collection)
- **Default**: Product image (1:1 ratio), name (uppercase), price
- **Hover**: 
  - Image crossfades to second angle (300ms)
  - "Add to Cart" button slides up from bottom
  - Subtle shadow lift
- **Click**: Navigates to product detail page
- **Quick add**: Click button → adds to cart, shows toast confirmation

### Cart Drawer
- Slides in from right (300ms ease-out)
- Backdrop overlay (semi-transparent)
- Header: "Your Bag" + close button
- Items: Image thumbnail, name, variant, quantity selector, remove button
- Footer: Subtotal, checkout button
- Empty state: "Your bag is empty" + shop link
- Quantity changes update subtotal immediately

### Product Detail Page
- **Gallery**: Click thumbnail → main image changes with crossfade
- **Variants**: Pill buttons, one selectable at a time, visual indication of selection
- **Quantity**: +/- buttons with number input, min 1
- **Add to Cart**: Full-width button, loading state on click, success confirmation
- **Accordions**: Click header → content expands/collapses with smooth height transition

### Collection/Shop Page
- **Filters**: Checkbox groups for category, price range, material
- **Active filters**: Display as removable tags above grid
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)
- **Results**: Update dynamically on filter/sort change
- **Mobile filters**: "Filters" button opens modal overlay

### Newsletter Signup
- Email input + submit button inline
- Placeholder: "Enter your email"
- Success: Input replaced with "Thank you for subscribing!"
- Validation: Basic email format check

## 5. Component Inventory

### Navigation
- **States**: Default (transparent), Scrolled (solid), Mobile Open
- **Mobile menu**: Full-screen overlay with stacked links

### Button (Primary)
- **Default**: Gold background (#C9A962), dark text, rounded-sm
- **Hover**: Darker gold (#B8944E), subtle scale (1.02)
- **Active**: Slightly darker, scale (0.98)
- **Disabled**: 50% opacity, no pointer events
- **Loading**: Spinner icon replacing text

### Button (Secondary/Outline)
- **Default**: Transparent, gold border, gold text
- **Hover**: Gold fill, dark text
- **Active**: Darker gold fill

### Product Card
- **Default**: Image, name, price visible
- **Hover**: Second image + add button visible
- **Loading**: Skeleton placeholder
- **Sold Out**: "Sold Out" badge overlay

### Input Field
- **Default**: Cream background, thin border, rounded-sm
- **Focus**: Gold border, subtle gold shadow
- **Error**: Red border, error message below
- **Disabled**: Grayed out

### Cart Item
- **Default**: Thumbnail, details, quantity, remove button
- **Updating**: Quantity shows loading spinner
- **Error**: Toast notification for failed update

### Accordion
- **Collapsed**: Header with chevron-down icon
- **Expanded**: Content visible, chevron rotates to up
- **Transition**: Height animation 300ms

### Toast Notification
- **Success**: Green accent, checkmark icon
- **Error**: Red accent, X icon
- **Position**: Bottom-right, stacks if multiple
- **Duration**: 4 seconds auto-dismiss

## 6. Technical Approach

### Stack
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom configuration
- **Icons**: Lucide React
- **State**: React Context for cart, local state for UI
- **Routing**: React Router v6

### Architecture
```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── layout/      # Navigation, Footer, Layout
│   ├── home/        # Homepage sections
│   ├── product/     # Product-related components
│   └── cart/        # Cart components
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js  # Seed product data
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Shop.jsx
├── hooks/
│   └── useScrollPosition.js
└── utils/
    └── cn.js
```

### Data Model

#### Product
```javascript
{
  id: string,
  name: string,
  slug: string,
  price: number,
  description: string,
  category: 'earrings' | 'necklaces' | 'huggies',
  images: string[],       // Array of image URLs
  variants: {
    label: string,
    options: string[]
  }[],
  materials: string,
  rating: number,
  reviewCount: number,
  isBestseller: boolean
}
```

#### Cart Item
```javascript
{
  productId: string,
  variant: string,
  quantity: number,
  price: number
}
```

### Cart State (Context)
- `items`: Array of cart items
- `addItem(product, variant, quantity)`: Add or update item
- `removeItem(productId, variant)`: Remove item
- `updateQuantity(productId, variant, quantity)`: Update quantity
- `clearCart()`: Empty cart
- `itemCount`: Derived total items
- `subtotal`: Derived total price

### Performance Considerations
- Lazy load route components
- Optimize images with proper sizing
- Use React.memo for expensive components
- Debounce filter/sort changes
- Preload critical fonts
