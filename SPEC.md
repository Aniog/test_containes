# Velmora Fine Jewelry - Design Specification

## Visual Identity

### Brand Essence
**Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

### Color Palette
A refined palette inspired by warm ivory, champagne gold, and deep charcoal:

| Name | Hex | Usage |
|------|-----|-------|
| **Champagne** | `#C9A962` | Primary accent, CTAs, hover states |
| **Deep Charcoal** | `#1A1A1A` | Primary text, headers |
| **Warm Ivory** | `#FAF7F2` | Primary background |
| **Soft Cream** | `#F5F0E8` | Card backgrounds, secondary surfaces |
| **Muted Gold** | `#B8956C` | Secondary accent, borders |
| **Stone** | `#8B8178` | Body text, muted elements |
| **Pure White** | `#FFFFFF` | Cards, overlays |

### Typography
- **Headings**: Cormorant Garamond (serif) — elegant, editorial feel
- **Body/UI**: Inter (sans-serif) — clean, modern readability
- **Product Names**: UPPERCASE with `0.15em` letter-spacing

### Spatial System
- **Base unit**: 4px
- **Section padding**: 80px (desktop), 48px (mobile)
- **Container max-width**: 1280px
- **Grid gap**: 24px (desktop), 16px (mobile)

### Motion Philosophy
- Subtle, refined transitions (300ms ease-out default)
- Fade-in reveals on scroll
- Hover: scale(1.02) for cards, opacity shifts for buttons
- Cart drawer slides from right
- No jarring or playful animations

### Visual Elements
- Thin hairline dividers (1px, muted gold)
- Soft shadows: `0 4px 20px rgba(0,0,0,0.06)`
- Large editorial imagery (16:9 hero, 4:5 products)
- Rounded corners: 2px (buttons), 4px (cards)

---

## Pages & Sections

### 1. Homepage

#### Sticky Navigation
- **Default state**: Transparent background, white text over hero
- **Scrolled state**: Solid warm ivory background, charcoal text
- **Left**: "VELMORA" logo (serif, 24px)
- **Center**: Shop, Collections, About, Journal (16px, uppercase)
- **Right**: Search icon, Cart icon with count badge

#### Hero Section
- Full-bleed (100vh), warm-lit jewelry imagery
- Headline: "Crafted to be Treasured" (Cormorant, 72px)
- Subheadline: "Demi-fine jewelry for the moments that matter"
- CTA: "Shop the Collection" (accent button)

#### Trust Bar
- Thin strip (48px height)
- Four items: Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
- Muted gold text, hairline dividers between items

#### Bestsellers Grid
- 5 product cards in responsive grid
- Card: Product image (hover reveals second image), name, price
- Hover: Quick "Add to Cart" overlay button
- Section heading: "Our Bestsellers" (serif, 36px)

#### UGC Reel Strip
- Horizontal scroll of 9:16 vertical cards
- Jewelry worn on ear/neck (Instagram Reels style)
- Soft serif caption overlay at bottom
- 4-6 cards visible, smooth horizontal scroll

#### Shop by Category
- 3 tiles: Earrings, Necklaces, Huggies
- Image fills tile, label appears on hover (centered overlay)
- Aspect ratio: 3:4

#### Brand Story Split
- 50/50 split: Image left, text right
- Heading: "Our Story" (Cormorant, 48px)
- Paragraph: Brief brand story (2-3 sentences)
- Link: "Discover More" (underline on hover)
- Background: Soft cream

#### Testimonials
- 3 cards in row
- 5 gold stars, quote, customer name + initial
- Subtle card background

#### Newsletter Capture
- Full-width accent block (champagne background)
- "Join for 10% off your first order"
- Email input + "Subscribe" button

#### Footer
- Logo, columns: Shop / Help / Company
- Payment icons row
- Social links: Instagram, Pinterest, TikTok
- Copyright text

### 2. Product Detail Page

#### Layout
- 2-column: Images left (60%), Details right (40%)
- Sticky details on scroll

#### Image Gallery
- Main image (large)
- 4 thumbnail row below
- Click thumbnail to swap main image

#### Product Details
- Name: UPPERCASE, serif, 32px
- Price: 28px, charcoal
- Rating: 5 stars, "(128 reviews)"
- Description: 2-3 sentences
- Variant selector: Gold / Silver tone (pill buttons)
- Quantity: Number input
- "Add to Cart" button (full-width, accent color)

#### Accordions
- Description · Materials & Care · Shipping & Returns
- Smooth expand/collapse animation

#### Related Products
- "You may also like" row
- 4 product cards

### 3. Collection/Shop Page

#### Layout
- Sidebar filters (left, 25%)
- Product grid (right, 75%)

#### Filters
- Category: Earrings, Necklaces, Huggies, Sets
- Price: $30-50, $50-80, $80-120
- Material: Gold Plated, Silver Plated
- "Clear All" link

#### Product Grid
- 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Sort dropdown: Featured, Price Low-High, Price High-Low, Newest

---

## Seed Product Data

| Name | Description | Price | Category |
|------|-------------|-------|----------|
| Vivid Aura Jewels | Gold ear cuff with crystal accent | $42 | Earrings |
| Majestic Flora Nectar | Multicolor floral crystal necklace | $68 | Necklaces |
| Golden Sphere Huggies | Chunky gold dome huggie earrings | $38 | Huggies |
| Amber Lace Earrings | Textured gold filigree drop earrings | $54 | Earrings |
| Royal Heirloom Set | Gift-boxed earring + necklace set | $95 | Sets |

---

## Component Inventory

### Button
- **Primary**: Champagne background, charcoal text, 2px radius
- **Secondary**: Transparent, champagne border, champagne text
- **States**: Hover (darken 10%), Active (scale 0.98), Disabled (50% opacity)

### Product Card
- Image container with aspect-ratio: 4/5
- Hover: Second image fades in, "Add to Cart" button appears
- Product name: Uppercase, serif
- Price: Regular weight

### Input
- Border: 1px stone
- Focus: Champagne border
- Border-radius: 2px

### Cart Drawer
- Slides from right
- Overlay: Semi-transparent black
- Header: "Your Cart" + close button
- Item rows: Image, name, quantity controls, remove button
- Footer: Subtotal, "Checkout" button

### Accordion
- Header: Chevron icon rotates on open
- Content: Smooth height animation
- Border-bottom divider

---

## Technical Approach

### Framework
- React 18 + Vite
- React Router v6 for routing
- Tailwind CSS for styling
- Framer Motion for animations

### State Management
- React Context for cart state
- Local state for UI interactions

### Performance
- Lazy load images
- Debounced scroll handlers
- Optimized re-renders

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
