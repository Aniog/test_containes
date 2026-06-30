# Velmora Fine Jewelry - E-Commerce Storefront Specification

## Brand Overview

**Brand Name:** Velmora Fine Jewelry  
**Tagline:** "Crafted to be Treasured"  
**Target Audience:** Women 25-45, gifting and self-purchase  
**Price Point:** Premium demi-fine ($30-$120), 18K gold plated, hypoallergenic  
**Category:** DTC jewelry - earrings, necklaces, huggies

---

## Visual Identity

### Design Philosophy
- **Mood:** Quiet luxury, warm, editorial
- **Aesthetic:** Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- **Feel:** Like flipping through a high-end fashion magazine

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Ivory** | `#FDFBF7` | Primary background - warm white |
| **Warm Cream** | `#F5F0E8` | Secondary background, cards |
| **Deep Charcoal** | `#1A1A1A` | Primary text, dark backgrounds |
| **Warm Black** | `#2D2A26` | Navigation, footer backgrounds |
| **Soft Gold** | `#C9A962` | Primary accent - CTAs, highlights |
| **Rich Gold** | `#B8860B` | Hover states, active elements |
| **Muted Gold** | `#D4C4A8` | Subtle accents, borders |
| **Warm Gray** | `#6B6560` | Secondary text |
| **Light Gray** | `#E8E4DE` | Borders, dividers |

### Typography

**Serif (Headings & Product Names):**
- Font: Cormorant Garamond
- Weights: 400, 500, 600, 700
- Product names: UPPERCASE, letter-spacing: 0.15em
- Headings: Normal case, letter-spacing: normal

**Sans-Serif (Body & UI):**
- Font: Inter
- Weights: 300, 400, 500, 600
- Body text: 16px, line-height: 1.6
- UI elements: 14px

### Spatial System
- Base unit: 4px
- Section padding: 80px (desktop), 48px (mobile)
- Component spacing: 24px
- Card padding: 16px-24px
- Grid gap: 24px (desktop), 16px (mobile)

### Visual Elements
- **Dividers:** 1px, `#E8E4DE`, hairline thin
- **Shadows:** Soft, warm-tinted (e.g., `0 4px 20px rgba(26, 26, 26, 0.06)`)
- **Border Radius:** Subtle (4px for buttons, 8px for cards)
- **Hover transitions:** 300ms ease-out
- **Image style:** Editorial, warm-lit, close-up jewelry shots

---

## Component Specifications

### Navigation (Header)

**Structure:**
- Left: Serif logo "VELMORA" (26px, letter-spacing: 0.2em)
- Center: Navigation links (Shop, Collections, About, Journal)
- Right: Search icon, Cart icon with count badge

**Behavior:**
- Transparent over hero section
- Turns solid white/ivory on scroll past 100px
- Mobile: Hamburger menu with slide-out drawer
- Cart icon shows item count badge (gold circle)

**States:**
- Default: Transparent (over hero)
- Scrolled: `bg-[#FDFBF7]/95 backdrop-blur-sm shadow-sm`
- Hover on links: Gold underline animation

### Hero Section

**Layout:**
- Full viewport height (100vh)
- Background: Editorial jewelry image (warm-lit, dark/neutral)
- Overlay: Subtle dark gradient for text legibility

**Content:**
- Headline: Cormorant Garamond, 64px (desktop), 40px (mobile)
- Subheadline: Inter, 18px, max-width 500px
- CTA: Gold outlined button with fill on hover

### Trust Bar

**Layout:**
- Full-width strip, 48px height
- Background: `#F5F0E8`
- 4 trust badges with thin dividers

**Content:**
- Free Worldwide Shipping
- 30-Day Returns
- 18K Gold Plated
- Hypoallergenic

### Product Card

**Layout:**
- Aspect ratio: 4:5 (portrait)
- Image container with overflow hidden
- Hover reveals second image (crossfade)

**States:**
- Default: Primary product image
- Hover: Second image, Add to Cart button slides up
- Add to Cart visible on mobile always

**Information:**
- Product name: Serif, uppercase, 14px, letter-spacing: 0.1em
- Price: Sans-serif, 16px
- Rating: 5 stars (gold filled)

### UGC Reels Strip

**Layout:**
- Horizontal scroll, no scrollbar visible
- 9:16 aspect ratio cards
- Soft overlay gradient at bottom

**Content:**
- Jewelry worn photos
- Serif caption overlay (first name, product reference)
- Subtle play icon

### Category Tiles

**Layout:**
- 3 equal-width tiles
- Aspect ratio: 3:4
- Dark overlay with label on hover

**Categories:**
- Earrings
- Necklaces
- Huggies

### Brand Story Section

**Layout:**
- 50/50 split (image left, text right)
- Reverse on mobile (image top, text bottom)

**Content:**
- Editorial image (lifestyle/jewelry crafting)
- Headline: Cormorant Garamond, 36px
- Body: 2-3 paragraphs about brand
- Link: "Our Story" with arrow

### Testimonials

**Layout:**
- 3 cards in a row (stack on mobile)
- Subtle card backgrounds

**Content:**
- 5 gold stars
- Quote text
- Customer name + initial (e.g., "Sarah M.")

### Newsletter Section

**Layout:**
- Full-width accent block
- Background: `#2D2A26` (dark) or gold tint
- Centered content

**Elements:**
- Headline: Cormorant Garamond
- Subtext: 10% off promise
- Email input: Minimal, outlined
- Button: Gold filled

### Footer

**Layout:**
- 4-column grid (Shop, Help, Company, Social)
- Logo above columns
- Payment icons row

**Content:**
- Shop: All Products, New Arrivals, Bestsellers, Gift Cards
- Help: Shipping, Returns, Sizing, Contact
- Company: Our Story, Journal, Sustainability
- Social: Instagram, Pinterest, TikTok

---

## Pages

### Homepage (/)

Components in order:
1. Header (sticky, transparent → solid)
2. Hero Section
3. Trust Bar
4. Bestsellers Grid (5 products)
5. UGC Reels Strip
6. Shop by Category (3 tiles)
7. Brand Story Split
8. Testimonials (3 reviews)
9. Newsletter Capture
10. Footer

### Product Detail (/product/:slug)

**Layout:** 2-column (60/40)

**Left Column:**
- Main image (large)
- Thumbnail gallery (4 images horizontal)
- Click to enlarge

**Right Column:**
- Product name: Serif, uppercase, 24px
- Price: 28px
- Rating: 5 stars + review count
- Short description
- Variant selector (Gold Tone / Silver Tone) - pill buttons
- Quantity selector
- "Add to Cart" button (full width, gold)
- Accordions below: Description, Materials & Care, Shipping & Returns

**Below fold:**
- "You May Also Like" - 4 product carousel

### Collection Page (/shop)

**Layout:**
- Filter sidebar (left, collapsible on mobile)
- Product grid (right, 3 columns desktop, 2 mobile)

**Filters:**
- Category (Earrings, Necklaces, Huggies)
- Price range ($30-$50, $50-$75, $75-$120)
- Material (Gold Plated, Silver Plated)

**Sort:**
- Dropdown: Featured, Price Low-High, Price High-Low, Newest

---

## Product Seed Data

```javascript
const products = [
  {
    id: 1,
    slug: 'vivid-aura-jewels',
    name: 'Vivid Aura Jewels',
    category: 'earrings',
    price: 42,
    rating: 4.9,
    reviews: 127,
    description: 'A stunning gold ear cuff adorned with a delicate crystal accent. This piece effortlessly elevates any look, from casual daytime to elegant evening wear.',
    materials: '18K Gold Plated, Cubic Zirconia crystal, Hypoallergenic stainless steel',
    images: ['ear-cuff-crystal-1.jpg', 'ear-cuff-crystal-2.jpg'],
    variants: ['gold'],
    bestseller: true
  },
  {
    id: 2,
    slug: 'majestic-flora-nectar',
    name: 'Majestic Flora Nectar',
    category: 'necklaces',
    price: 68,
    rating: 4.8,
    reviews: 89,
    description: 'A multicolor floral crystal necklace that captures the essence of spring. Each crystal is carefully selected for its brilliance and unique color gradient.',
    materials: '18K Gold Plated, Austrian Crystals, Hypoallergenic stainless steel chain',
    images: ['floral-crystal-necklace-1.jpg', 'floral-crystal-necklace-2.jpg'],
    variants: ['gold'],
    bestseller: true
  },
  {
    id: 3,
    slug: 'golden-sphere-huggies',
    name: 'Golden Sphere Huggies',
    category: 'huggies',
    price: 38,
    rating: 4.9,
    reviews: 203,
    description: 'Our bestselling chunky gold dome huggie earrings. The perfect everyday essential that adds just the right amount of sparkle to your look.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    images: ['golden-huggies-1.jpg', 'golden-huggies-2.jpg'],
    variants: ['gold', 'silver'],
    bestseller: true
  },
  {
    id: 4,
    slug: 'amber-lace-earrings',
    name: 'Amber Lace Earrings',
    category: 'earrings',
    price: 54,
    rating: 4.7,
    reviews: 64,
    description: 'Exquisite textured gold filigree drop earrings featuring intricate lace-like patterns. These statement pieces are perfect for special occasions.',
    materials: '18K Gold Plated, Hypoallergenic stainless steel',
    images: ['filigree-earrings-1.jpg', 'filigree-earrings-2.jpg'],
    variants: ['gold'],
    bestseller: true
  },
  {
    id: 5,
    slug: 'royal-heirloom-set',
    name: 'Royal Heirloom Set',
    category: 'sets',
    price: 95,
    rating: 4.9,
    reviews: 156,
    description: 'The ultimate gift presentation. This luxurious gift-boxed set includes a pair of classic gold huggie earrings and a matching delicate chain necklace.',
    materials: '18K Gold Plated, Luxury gift box included, Hypoallergenic stainless steel',
    images: ['gift-set-1.jpg', 'gift-set-2.jpg'],
    variants: ['gold'],
    bestseller: true,
    isSet: true
  }
];
```

---

## Technical Specifications

### Stack
- React 18 with Vite
- Tailwind CSS 3.4
- React Router v6
- Context API for cart state
- Framer Motion for animations

### State Management
- CartContext: items, addToCart, removeFromCart, updateQuantity, cartTotal
- Persisted to localStorage

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Performance
- Lazy load images below fold
- Optimized image sizes
- Minimal bundle size
- Smooth 60fps animations

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states visible
- Color contrast WCAG AA compliant

---

## Animations & Interactions

### Hover States
- Product images: Scale 1.02, 300ms ease-out
- Buttons: Background color transition, 200ms
- Links: Gold underline slides in from left, 200ms
- Cards: Subtle shadow lift, translateY(-4px)

### Page Transitions
- Fade in on route change, 300ms
- Staggered reveal for grid items, 100ms delay between

### Scroll Animations
- Fade up on scroll into view
- Parallax on hero image (subtle)

### Micro-interactions
- Cart icon bounce on add
- Quantity selector smooth increment
- Accordion smooth expand/collapse
