# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand selling gold-plated earrings, necklaces, and huggies at an accessible premium price point ($30-$120). The storefront embodies **quiet luxury** — warm, editorial, and refined. It feels like browsing a high-end fashion magazine rather than a typical e-commerce site. Every detail communicates quality without being loud or discount-like.

---

## 2. Design Language

### Aesthetic Direction
**"Warm Editorial Luxury"** — Inspired by luxury fashion editorials, the visual language combines warm neutrals with rich gold accents. Think cream paper textures, warm tungsten lighting in photography, and the understated elegance of brands likeMejuri,Mejuri, or Aritzia's accessories.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--cream` | `#FAF8F5` | Primary background, warm white |
| `--warm-white` | `#FFFDF9` | Cards, elevated surfaces |
| `--ivory` | `#F5F0E8` | Section backgrounds, alternating |
| `--charcoal` | `#1A1A1A` | Primary text, dark backgrounds |
| `--warm-gray` | `#6B6560` | Secondary text, descriptions |
| `--light-gray` | `#E8E4DE` | Borders, dividers |
| `--gold` | `#C9A962` | Primary accent, CTAs, highlights |
| `--gold-dark` | `#A88B4A` | Gold hover state |
| `--gold-light` | `#E5D4A8` | Subtle gold tints |

### Typography

| Element | Font | Weight | Size | Transform | Letter-Spacing |
|---------|------|--------|------|-----------|----------------|
| Logo | Cormorant Garamond | 500 | 28px | None | 0.15em |
| H1 (Hero) | Cormorant Garamond | 400 | 64px | None | 0.02em |
| H2 (Section) | Cormorant Garamond | 400 | 42px | None | 0.02em |
| H3 (Card Title) | Cormorant Garamond | 500 | 24px | Uppercase | 0.12em |
| H4 (Subtitle) | Cormorant Garamond | 400 | 18px | None | 0.02em |
| Body | Inter | 400 | 15px | None | 0 |
| Body Small | Inter | 400 | 13px | None | 0.01em |
| UI Elements | Inter | 500 | 13px | Uppercase | 0.08em |
| Button | Inter | 500 | 13px | Uppercase | 0.1em |

**Google Fonts Import:**
```
Cormorant Garamond: 300, 400, 500, 600
Inter: 300, 400, 500, 600
```

### Spatial System

- **Base unit:** 4px
- **Section padding:** 96px (desktop), 64px (tablet), 48px (mobile)
- **Container max-width:** 1400px
- **Grid gap:** 24px (desktop), 16px (mobile)
- **Card padding:** 24px
- **Component spacing:** 8px, 16px, 24px, 32px, 48px

### Motion Philosophy

Animations are **subtle and purposeful** — they enhance the editorial feel without feeling digital or gimmicky.

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| Fade in | 400ms | ease-out | Page transitions, image reveals |
| Slide up | 500ms | cubic-bezier(0.25, 0.46, 0.45, 0.94) | Content reveals on scroll |
| Hover lift | 300ms | ease-out | Cards, buttons |
| Image swap | 400ms | ease-in-out | Product hover state |
| Drawer slide | 350ms | cubic-bezier(0.4, 0, 0.2, 1) | Cart drawer |

### Visual Assets

- **Dividers:** 1px hairline, `--light-gray` color
- **Shadows:** Soft, warm-tinted (0 4px 20px rgba(26, 26, 26, 0.06))
- **Border radius:** 0px (cards), 2px (buttons), 4px (inputs)
- **Icons:** Lucide React, 1.5px stroke weight, `--charcoal` color

---

## 3. Layout & Structure

### Page Architecture

```
[ Navigation - Sticky ]
[ Hero - Full viewport height ]
[ Trust Bar - Slim strip ]
[ Bestsellers - 5-column grid ]
[ UGC Reel Strip - Horizontal scroll ]
[ Category Tiles - 3 columns ]
[ Brand Story - 50/50 split ]
[ Testimonials - 3-column ]
[ Newsletter - Full-width accent ]
[ Footer - 4-column ]
```

### Responsive Breakpoints

| Breakpoint | Width | Columns | Navigation |
|------------|-------|---------|------------|
| Mobile | < 640px | 2 | Hamburger menu |
| Tablet | 640px - 1024px | 3 | Hamburger menu |
| Desktop | > 1024px | 4-5 | Full nav |

### Visual Pacing

- Hero section creates immediate impact with large typography and imagery
- Trust bar provides reassurance without interrupting flow
- Product sections alternate between dense grids and editorial spacing
- UGC strip adds visual movement and social proof
- Brand story section slows the pace with generous whitespace
- Newsletter captures attention with contrasting background
- Footer provides grounding with organized links

---

## 4. Features & Interactions

### Navigation
- **Initial state:** Transparent background, white text (over hero image)
- **Scrolled state:** Solid `--cream` background, shadow, `--charcoal` text
- **Transition:** 300ms ease background-color and box-shadow
- **Mobile:** Full-screen overlay menu with staggered link animation
- **Cart icon:** Badge shows item count with gold background

### Hero Section
- Full-bleed background with warm-toned jewelry photography
- Text positioned center-left for visual balance
- CTA button with hover: background shifts to `--gold-dark`
- Subtle parallax on background image (optional enhancement)

### Product Cards
- **Default:** Primary product image, product name, price
- **Hover:** Secondary image crossfades in, "Add to Cart" button slides up from bottom
- **Click:** Navigates to product detail page
- **Quick add:** Adds to cart without page navigation, shows toast notification

### Cart Drawer
- Slides in from right, 400px width (100% on mobile)
- Backdrop overlay with 50% opacity
- Product thumbnails with quantity controls
- Running total with shipping threshold indicator
- "Checkout" button (links to placeholder)
- Close on backdrop click or X button

### Newsletter Form
- Email validation with inline error message
- Success state transforms input area into confirmation message
- Submit button shows loading spinner during submission

### Accordions (Product Detail)
- Smooth height animation on expand/collapse
- Plus/minus icon rotation
- Only one open at a time

---

## 5. Component Inventory

### Button (Primary)
- **Default:** `--gold` background, `--charcoal` text, uppercase, 0.1em letter-spacing
- **Hover:** `--gold-dark` background
- **Active:** Scale 0.98
- **Disabled:** 50% opacity, no pointer events
- **Loading:** Spinner replaces text

### Button (Secondary/Outline)
- **Default:** Transparent background, 1px `--gold` border, `--gold` text
- **Hover:** `--gold` background, `--charcoal` text
- **Active:** Scale 0.98

### Product Card
- **Container:** No border, subtle shadow on hover
- **Image:** Aspect ratio 4:5, object-fit cover
- **Title:** Cormorant Garamond, uppercase, 0.12em letter-spacing
- **Price:** Inter, 500 weight, `--charcoal`
- **Quick add:** Fixed to bottom of card, full width on hover

### Input Field
- **Default:** 1px `--light-gray` border, `--warm-white` background
- **Focus:** 1px `--gold` border, subtle gold glow
- **Error:** 1px `#C75D5D` border, error message below
- **Disabled:** `--ivory` background, 50% opacity

### Badge
- **Cart count:** `--gold` background, `--charcoal` text, 18px circle, positioned top-right

### Star Rating
- 5 stars, filled with `--gold`, unfilled with `--light-gray`
- Size: 14px

### Accordion Item
- **Header:** Inter 500, uppercase, flex between title and icon
- **Content:** Padding top 16px, `--warm-gray` body text
- **Icon:** Plus rotates 45deg to X when open

### Testimonial Card
- 5 stars at top
- Quote in Cormorant Garamond italic
- Author name + initial in Inter 500
- Subtle quote mark decoration

---

## 6. Technical Approach

### Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS 3.4 with custom config
- **Routing:** React Router v6
- **State:** React Context for cart
- **Icons:** Lucide React
- **Animations:** CSS transitions + Tailwind animate utilities

### Project Structure

```
src/
├── components/
│   ├── ui/              # Buttons, inputs, badges
│   ├── layout/          # Navigation, Footer, Layout wrapper
│   ├── home/            # Home page sections
│   ├── product/         # Product card, gallery, accordions
│   └── cart/            # Cart drawer, cart item
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js      # Seed product data
├── lib/
│   └── utils.js         # cn() helper
└── App.jsx
```

### Data Model

```javascript
Product {
  id: string,
  name: string,           // Uppercase display name
  slug: string,
  price: number,
  category: 'earrings' | 'necklaces' | 'huggies',
  description: string,
  materials: string,
  images: string[],       // Array of image URLs
  rating: number,         // 1-5
  reviews: number,
  variants?: { name: string, value: string }[],
}

CartItem {
  product: Product,
  quantity: number,
  variant?: string,
}
```

### Key Implementation Notes

1. **Image Strategy:** Use warm-toned placeholder images from Unsplash with jewelry/fashion keywords
2. **Scroll Detection:** useEffect with scroll listener for nav transparency
3. **Cart Persistence:** localStorage for cart state persistence
4. **Responsive Images:** srcset for product images (optional enhancement)
5. **Accessibility:** ARIA labels on all interactive elements, keyboard navigation for drawer

---

## 7. Seed Products

| ID | Name | Category | Price | Description |
|----|------|----------|-------|-------------|
| 1 | VIVID AURA JEWELS | earrings | $42 | Gold ear cuff with crystal accent |
| 2 | MAJESTIC FLORA NECTAR | necklaces | $68 | Multicolor floral crystal necklace |
| 3 | GOLDEN SPHERE HUGGIES | huggies | $38 | Chunky gold dome huggie earrings |
| 4 | AMBER LACE EARRINGS | earrings | $54 | Textured gold filigree drop earrings |
| 5 | ROYAL HEIRLOOM SET | necklaces | $95 | Gift-boxed earring + necklace set |

---

## 8. Content

### Trust Bar
"Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic"

### Hero
- Headline: "Crafted to be Treasured"
- Subhead: "Demi-fine jewelry for the moments worth remembering"

### Newsletter
- Heading: "Join the Velmora Circle"
- Subtext: "Subscribe for 10% off your first order and early access to new collections"

### Footer Columns
- **Shop:** All Jewelry, Earrings, Necklaces, Huggies, Gift Sets
- **Help:** Contact Us, Shipping & Returns, FAQ, Size Guide
- **Company:** Our Story, Sustainability, Careers, Press
