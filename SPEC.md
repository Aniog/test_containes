# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora is a direct-to-consumer demi-fine jewelry brand targeting women 25-45 seeking premium quality at accessible price points ($30-120). The digital experience should evoke **quiet luxury** — warm, editorial, and intimate rather than loud or promotional. Every interaction should feel like leafing through a high-end fashion magazine: generous white space, rich photography, restrained typography, and transitions that whisper rather than shout.

The brand promise: "Crafted to be Treasured" — this sentiment should permeate every pixel and interaction.

---

## 2. Design Language

### Aesthetic Direction
**Quiet Editorial Luxury** — Inspired by high-end fashion editorials and fine jewelry advertising. Think Bottega Veneta's digital presence meets Cartier's heritage warmth. Sophisticated restraint with moments of golden warmth.

### Color Palette
```
Primary:        #1A1A1A (Rich Black)       — Primary text, deep backgrounds
Secondary:      #2C2C2C (Charcoal)         — Secondary text, subtle containers
Accent:         #C9A962 (Warm Gold)        — CTAs, highlights, interactive states
Accent Hover:   #B8943F (Deep Gold)        — Hover states for accent elements
Background:     #FAFAF8 (Warm White)       — Primary page background
Surface:        #F5F4F0 (Cream)            — Card backgrounds, alternating sections
Surface Dark:   #E8E6E1 (Warm Gray)        — Dividers, subtle borders
Text Primary:   #1A1A1A (Rich Black)       — Headlines, primary content
Text Secondary: #5C5C5C (Warm Gray)        — Body text, descriptions
Text Muted:     #8A8A8A (Muted Gray)       — Captions, placeholders
White:          #FFFFFF                    — Cards, overlays, contrast elements
```

### Typography
**Headings & Display:** Cormorant Garamond (400, 500, 600) — Elegant, editorial serif
- Product names, section headlines, brand messaging
- Letter-spacing: 0.08em for uppercase headings

**Body & UI:** Inter (300, 400, 500, 600) — Clean, modern, highly legible
- Navigation, body text, buttons, form elements
- Base size: 16px, line-height: 1.6

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Component gaps: 16px, 24px, 32px, 48px
- Maximum content width: 1280px
- Generous negative space — let elements breathe

### Motion Philosophy
All animations are **subtle and purposeful** — enhancing the premium feel:
- **Page transitions:** Fade, 300ms ease-out
- **Hover states:** Scale 1.02, 200ms ease-out; opacity shifts, 150ms
- **Scroll reveals:** Fade up 20px, 400ms ease-out, staggered 80ms
- **Cart interactions:** Smooth drawer slide, 350ms ease-out
- **No bounce, no overshoot** — movements should feel refined, not playful

### Visual Assets
- **Icons:** Lucide React — thin, minimal stroke (1.5px), elegant
- **Images:** High-contrast jewelry photography on dark or neutral backgrounds
- **Dividers:** 1px hairlines in Surface Dark (#E8E6E1)
- **Shadows:** Soft, diffused — `0 4px 20px rgba(0,0,0,0.06)`
- **Border radius:** Subtle — 2px for cards, 4px for buttons, 0px for inputs

---

## 3. Layout & Structure

### Global Layout
- **Navbar:** Sticky, 72px height, transparent → solid white on scroll
- **Content:** Max-width 1280px, centered, 24px horizontal padding (mobile: 16px)
- **Footer:** Full-width, dark background (#1A1A1A), cream text

### Page Structure

#### Homepage Flow
1. **Hero** — 100vh, full-bleed image, centered text overlay
2. **Trust Bar** — Full-width, thin strip (48px), centered icons
3. **Bestsellers** — Section with 5-card grid, section title
4. **UGC Reel Strip** — Horizontal scroll, 9:16 vertical cards
5. **Category Tiles** — 3-column grid, image tiles with overlay labels
6. **Brand Story** — Split section, image left / text right
7. **Testimonials** — 3-column grid of review cards
8. **Newsletter** — Full-width accent block
9. **Footer** — 4-column layout with links

#### Product Detail Flow
1. **Gallery + Info** — 2-column layout (60/40 split)
2. **Accordions** — Description, Materials, Shipping
3. **Related Products** — Horizontal scroll or grid

#### Collection Flow
1. **Page Header** — Title, product count
2. **Filter Bar** — Sticky, horizontal filters + sort dropdown
3. **Product Grid** — 4-column (desktop), 2-column (mobile)

### Responsive Strategy
- **Mobile-first** — Base styles target 375px+
- **Breakpoints:** 
  - sm: 640px, md: 768px, lg: 1024px, xl: 1280px
- **Navigation:** Hamburger menu on mobile, full nav on desktop
- **Grid columns:** 2 → 3 → 4 as viewport expands
- **Touch targets:** Minimum 44px for all interactive elements

---

## 4. Features & Interactions

### Navigation
- **Transparent state:** On hero, logo and links in white
- **Solid state:** White background, black text, subtle shadow on scroll
- **Mobile menu:** Full-screen overlay, staggered link animation
- **Active states:** Gold underline on current page link

### Hero Section
- **Image:** Full-bleed, object-cover, slight vignette overlay
- **Content:** Centered, max-width 600px
- **CTA:** Outlined button with gold border, fills on hover

### Product Cards
- **Default state:** Primary product image, name, price
- **Hover state:** Secondary image fades in, "Add to Cart" button slides up
- **Click:** Navigate to product detail page
- **Add to Cart:** Button press effect, icon animation, toast notification

### Cart Drawer
- **Trigger:** Cart icon in navbar, shows item count badge
- **Animation:** Slides in from right, 350ms ease-out
- **Backdrop:** Semi-transparent overlay with blur
- **Contents:** Product thumbnails, quantities, subtotal, checkout CTA
- **Empty state:** Friendly message with shop link

### Product Detail Page
- **Gallery:** Main image + thumbnail strip, click to zoom
- **Variants:** Pill buttons for Gold/Silver toggle
- **Quantity:** +/- stepper with min 1, max 10
- **Add to Cart:** Full-width gold button, loading state on click
- **Accordions:** Smooth expand/collapse, one open at a time

### Filters (Collection Page)
- **Categories:** Earrings, Necklaces, Huggies
- **Price range:** Under $40, $40-60, $60-80, $80+
- **Material:** Gold Tone, Silver Tone
- **Sort:** Featured, Price Low-High, Price High-Low, Newest

### Forms
- **Newsletter:** Email input + submit button, success/error states
- **Validation:** Inline error messages below fields
- **Focus states:** Gold border, subtle glow

### Error States
- **Empty cart:** Illustration + "Your bag is empty" + shop CTA
- **No results:** "No products found" + clear filters option
- **Form errors:** Red text below field, shake animation

---

## 5. Component Inventory

### Navbar
- **States:** Transparent (over hero), Solid (scrolled), Mobile menu open
- **Elements:** Logo, nav links, search icon, cart icon with badge
- **Interactions:** Scroll detection for style change, hamburger toggle

### Button
- **Variants:** Primary (gold fill), Secondary (outlined), Ghost (text only)
- **Sizes:** sm (36px), md (44px), lg (52px)
- **States:** Default, Hover, Active, Disabled, Loading
- **Loading:** Spinner replaces text, maintains width

### ProductCard
- **Elements:** Image container, product name, price, quick-add button
- **States:** Default, Hover (shows alternate image + button)
- **Image aspect ratio:** 4:5 (portrait, common for jewelry)

### CartDrawer
- **Elements:** Header with close, product list, totals, checkout button
- **States:** Open, Closed, Empty, Loading
- **Product item:** Thumbnail, name, variant, quantity controls, remove

### Accordion
- **Elements:** Header with title + icon, collapsible content
- **States:** Collapsed, Expanded (icon rotates)
- **Animation:** Height transition, 200ms ease-out

### Input
- **Elements:** Label, input field, error message slot
- **States:** Default, Focus, Error, Disabled
- **Variants:** Text, Email, Search

### Badge
- **Elements:** Text, optional icon
- **Variants:** Solid, Outlined
- **Usage:** Cart count, sale tags

### Toast
- **Elements:** Icon, message text, optional action, close
- **Variants:** Success (green), Error (red), Info (neutral)
- **Animation:** Slide in from bottom, auto-dismiss after 3s

### Testimonial Card
- **Elements:** Stars, quote text, customer name + initial
- **States:** Default only
- **Layout:** Centered text, max-width 400px

### UGC Card
- **Elements:** Vertical image (9:16), overlay caption
- **States:** Default, Hover (caption visible)
- **Scroll:** Horizontal scroll with snap points

---

## 6. Technical Approach

### Framework & Architecture
- **React 18** with functional components and hooks
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling
- **Context API** for cart state management
- **LocalStorage** for cart persistence

### State Management
- **CartContext:** Products array, add/remove/update functions
- **UI Context:** Drawer open states, mobile menu state
- **Local state:** Form inputs, accordion states, filters

### Component Structure
```
src/
├── components/
│   ├── ui/           # Base components (Button, Input, Badge, etc.)
│   ├── layout/       # Navbar, Footer, CartDrawer
│   ├── home/         # HomePage sections
│   └── product/      # Product-related components
├── context/          # React contexts (Cart, UI)
├── hooks/            # Custom hooks (useCart, useScrolled, etc.)
├── pages/            # Page components
├── data/             # Static product data
└── styles/           # Global CSS
```

### Performance Considerations
- Lazy load images below the fold
- Use React.memo for product cards
- Debounce filter changes
- Minimize re-renders with proper state structure

### Accessibility
- Semantic HTML elements
- ARIA labels for interactive elements
- Focus management for drawers and modals
- Keyboard navigation support
- Color contrast WCAG AA compliant

---

## 7. Seed Product Data

```javascript
const products = [
  {
    id: 'vivid-aura-jewels',
    name: 'VIVID AURA JEWELS',
    price: 42,
    category: 'earrings',
    description: 'A delicate gold ear cuff adorned with a sparkling crystal accent. Effortlessly elevates any look from day to evening.',
    materials: '18K Gold Plated, Hypoallergenic, Crystal Accent',
    care: 'Avoid contact with water and perfumes. Store in the provided pouch when not wearing.',
    variants: ['Gold Tone'],
    images: ['/products/vivid-aura-1.jpg', '/products/vivid-aura-2.jpg'],
    rating: 4.8,
    reviews: 124,
    bestseller: true
  },
  {
    id: 'majestic-flora-nectar',
    name: 'MAJESTIC FLORA NECTAR',
    price: 68,
    category: 'necklaces',
    description: 'A stunning multicolor floral crystal pendant necklace that captures light from every angle. The perfect statement piece.',
    materials: '18K Gold Plated, Multicolor Crystals, Adjustable Chain',
    care: 'Gently wipe with soft cloth. Avoid swimming and applying perfume directly.',
    variants: ['Gold Tone'],
    images: ['/products/majestic-flora-1.jpg', '/products/majestic-flora-2.jpg'],
    rating: 4.9,
    reviews: 89,
    bestseller: true
  },
  {
    id: 'golden-sphere-huggies',
    name: 'GOLDEN SPHERE HUGGIES',
    price: 38,
    category: 'huggies',
    description: 'Chunky gold dome huggie earrings with a smooth, polished finish. Comfortable click-back closure.',
    materials: '18K Gold Plated, Hypoallergenic Post',
    care: 'Store separately to prevent scratching. Clean with jewelry polishing cloth.',
    variants: ['Gold Tone'],
    images: ['/products/golden-sphere-1.jpg', '/products/golden-sphere-2.jpg'],
    rating: 4.7,
    reviews: 203,
    bestseller: true
  },
  {
    id: 'amber-lace-earrings',
    name: 'AMBER LACE EARRINGS',
    price: 54,
    category: 'earrings',
    description: 'Elegant textured gold filigree drop earrings with intricate lace-like detailing. Timeless and sophisticated.',
    materials: '18K Gold Plated, Hypoallergenic',
    care: 'Keep dry and store in cool place. Avoid exposure to harsh chemicals.',
    variants: ['Gold Tone'],
    images: ['/products/amber-lace-1.jpg', '/products/amber-lace-2.jpg'],
    rating: 4.9,
    reviews: 67,
    bestseller: true
  },
  {
    id: 'royal-heirloom-set',
    name: 'ROYAL HEIRLOOM SET',
    price: 95,
    category: 'sets',
    description: 'A luxurious gift-boxed set featuring matching earrings and necklace. Perfect for gifting or treating yourself.',
    materials: '18K Gold Plated, Gift Box Included, Hypoallergenic',
    care: 'Store in original box. Polish gently with jewelry cloth as needed.',
    variants: ['Gold Tone'],
    images: ['/products/royal-heirloom-1.jpg', '/products/royal-heirloom-2.jpg'],
    rating: 5.0,
    reviews: 156,
    bestseller: true
  }
];
```

---

## 8. File Checklist

- [ ] index.html — Google Fonts, meta tags, favicon
- [ ] tailwind.config.js — Custom colors, fonts
- [ ] src/index.css — Global styles, animations
- [ ] src/App.jsx — Router setup
- [ ] src/context/CartContext.jsx — Cart state
- [ ] src/data/products.js — Seed product data
- [ ] src/components/ui/Button.jsx
- [ ] src/components/ui/Input.jsx
- [ ] src/components/ui/Accordion.jsx
- [ ] src/components/ui/Badge.jsx
- [ ] src/components/ui/Toast.jsx
- [ ] src/components/layout/Navbar.jsx
- [ ] src/components/layout/Footer.jsx
- [ ] src/components/layout/CartDrawer.jsx
- [ ] src/components/home/Hero.jsx
- [ ] src/components/home/TrustBar.jsx
- [ ] src/components/home/Bestsellers.jsx
- [ ] src/components/home/UGCStrip.jsx
- [ ] src/components/home/CategoryTiles.jsx
- [ ] src/components/home/BrandStory.jsx
- [ ] src/components/home/Testimonials.jsx
- [ ] src/components/home/Newsletter.jsx
- [ ] src/components/product/ProductCard.jsx
- [ ] src/components/product/ProductGallery.jsx
- [ ] src/pages/HomePage.jsx
- [ ] src/pages/ProductPage.jsx
- [ ] src/pages/CollectionPage.jsx
