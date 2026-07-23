# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

**Velmora Fine Jewelry** embodies **quiet luxury** — a warm, editorial aesthetic that whispers premium rather than shouting it. The experience feels like flipping through a high-end fashion magazine: generous whitespace, large editorial imagery, and restrained elegance. Every element communicates that this jewelry is meant to be treasured, not rushed. The target woman (25–45) is sophisticated, values craftsmanship, and sees jewelry as self-expression — not status signaling.

---

## 2. Design Language

### Aesthetic Direction
**Reference:** Editorial luxury meets warm minimalism — akin toMejuri meets Kinfolk magazine. Soft, muted warmth with editorial photography sensibilities. Gold jewelry should feel at home against these tones.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ivory` | `#FAF8F5` | Primary background |
| `--color-cream` | `#F5F0E8` | Secondary backgrounds, cards |
| `--color-sand` | `#E8E0D4` | Borders, dividers, subtle accents |
| `--color-taupe` | `#9B8E7D` | Muted text, icons |
| `--color-charcoal` | `#2C2825` | Primary text |
| `--color-espresso` | `#1A1614` | Deep text, overlays |
| `--color-gold` | `#C9A962` | Primary accent (buttons, links, highlights) |
| `--color-gold-deep` | `#8B7355` | Secondary accent (hover states) |
| `--color-gold-light` | `#E8DCC8` | Subtle gold tints |

### Typography

**Headings:** Cormorant Garamond (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Usage: Hero headlines, product names, section titles
- Style: Uppercase with `letter-spacing: 0.15em` for product names

**Body & UI:** Inter (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Usage: Body copy, navigation, buttons, form labels

**Fallback Stack:**
```
font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Spatial System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight inline spacing |
| `--space-sm` | 8px | Icon gaps, small margins |
| `--space-md` | 16px | Component internal padding |
| `--space-lg` | 24px | Section internal spacing |
| `--space-xl` | 48px | Section gaps |
| `--space-2xl` | 80px | Large section separators |
| `--space-3xl` | 120px | Hero sections |

### Motion Philosophy

- **Entrance animations:** Fade up with 600ms ease-out, staggered 100ms between siblings
- **Hover transitions:** 300ms ease-out for color/shadow changes
- **Image reveals:** Scale from 1.02 to 1 over 500ms
- **Cart drawer:** Slide from right, 400ms cubic-bezier(0.4, 0, 0.2, 1)
- **Accordion:** Height expand with 300ms ease

### Visual Assets

- **Photography style:** Warm-lit, close-up jewelry shots on neutral/dark backgrounds, editorial fashion styling
- **Dividers:** 1px `--color-sand` hairlines
- **Shadows:** Soft, warm-tinted: `0 4px 20px rgba(44, 40, 37, 0.08)`
- **Border radius:** 0px for product cards (sharp, editorial), 4px for buttons/inputs
- **Icons:** Lucide React, 1.5px stroke weight, `--color-taupe` default

---

## 3. Layout & Structure

### Page Architecture

**Navigation:**
- Fixed position, z-index: 100
- Transparent background over hero, transitions to `--color-ivory` with subtle shadow on scroll
- Height: 72px desktop, 64px mobile
- Logo centered with nav links split left/right

**Hero Section:**
- Full viewport height (100vh) minus nav
- Full-bleed background image with subtle warm overlay
- Content centered vertically with left alignment
- Max content width: 600px

**Content Widths:**
- Text content: max-width 720px, centered
- Product grids: max-width 1280px
- Full-width sections break to edge

**Grid System:**
- 12-column grid on desktop
- Product cards: 4-up on desktop, 2-up on tablet, 1-up on mobile
- Sidebar + content: 280px sidebar + fluid content

### Responsive Strategy

| Breakpoint | Width | Layout Adjustments |
|------------|-------|---------------------|
| Mobile | < 640px | Single column, hamburger nav, bottom sticky cart |
| Tablet | 640–1024px | 2-column grids, condensed nav |
| Desktop | > 1024px | Full layout, hover states, expanded nav |

---

## 4. Features & Interactions

### Navigation
- Logo click → Homepage
- Nav links: Shop (→ /shop), Collections (dropdown), About (→ /about), Journal (→ /journal)
- Search icon → expands inline search bar
- Cart icon → opens cart drawer, shows item count badge

### Hero
- Background: warm editorial image of jewelry on model
- CTA "Shop the Collection" → /shop with 300ms fade transition

### Product Cards
- Default: Product image, name, price
- Hover: Second image crossfade, "Quick Add" button slides up from bottom
- Click: Navigate to product detail page
- Add to Cart: Opens cart drawer, shows success toast

### Cart Drawer
- Slides from right edge
- Backdrop overlay with 50% opacity dark
- Line items: thumbnail, name, variant, quantity stepper, remove button
- Footer: subtotal, "Checkout" button (accent), "Continue Shopping" link
- Empty state: illustration + "Your cart is empty" + "Start Shopping" CTA

### Product Detail Page
- Image gallery: Main image + 4 thumbnails, click to switch main
- Variant pills: Gold / Silver toggle, selected state has gold border + background tint
- Quantity: Stepper with +/- buttons, min 1, max 10
- Add to Cart: Full-width button, disabled if out of stock
- Accordions: Click to expand/collapse, smooth height animation
- Related products: Horizontal scroll of 4 product cards

### Collection Page
- Filter sidebar: Category checkboxes, price range slider, material toggles
- Active filters shown as removable chips above grid
- Sort dropdown: Featured, Price Low-High, Price High-Low, Newest
- Product grid with pagination or infinite scroll
- Mobile: Filters in slide-up modal

### Newsletter
- Email input with inline validation
- Submit button "Get 10% Off"
- Success state: "You're in! Check your inbox."
- Error state: "Something went wrong. Try again."

---

## 5. Component Inventory

### Button
| State | Appearance |
|-------|------------|
| Primary Default | `--color-gold` bg, `--color-espresso` text, 48px height |
| Primary Hover | `--color-gold-deep` bg, subtle lift shadow |
| Primary Disabled | 50% opacity, no pointer events |
| Secondary Default | Transparent bg, `--color-gold` border, `--color-gold` text |
| Secondary Hover | `--color-gold-light` bg fill |
| Loading | Spinner icon replaces text |

### ProductCard
| State | Appearance |
|-------|------------|
| Default | Image top, 16:9 aspect, name (serif, uppercase, centered), price below |
| Hover | Second image crossfades in, quick-add button appears, subtle shadow lift |
| Added to Cart | Brief gold pulse animation on card border |

### Rating
| State | Appearance |
|-------|------------|
| Filled | `--color-gold` star icon |
| Empty | `--color-sand` star outline |
| With Count | "(128 reviews)" in `--color-taupe` beside stars |

### Accordion
| State | Appearance |
|-------|------------|
| Collapsed | Header with title + chevron-down icon |
| Expanded | Header with chevron-up, content slides down |
| Hover | Header text darkens slightly |

### CartDrawer
| State | Appearance |
|-------|------------|
| Open | Slides from right, backdrop appears |
| Empty | Illustration + message + CTA |
| With Items | Scrollable item list, sticky footer with total |

### Input
| State | Appearance |
|-------|------------|
| Default | `--color-sand` border, `--color-ivory` bg |
| Focus | `--color-gold` border, subtle gold glow |
| Error | `--color-red` border, error message below |
| Disabled | 50% opacity |

---

## 6. Technical Approach

### Stack
- **Framework:** React 18 with Vite
- **Styling:** Tailwind CSS 3.4 with custom configuration
- **Routing:** React Router v6
- **State:** React Context (CartContext) + useState/useReducer
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cormorant Garamond, Inter)

### Architecture

```
src/
├── components/
│   ├── ui/           # Button, Input, Rating, Accordion, etc.
│   ├── layout/       # Navigation, Footer, CartDrawer
│   └── sections/     # Hero, TrustBar, Bestsellers, etc.
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── context/
│   └── CartContext.jsx
├── data/
│   └── products.js   # Seed product data
├── hooks/
│   └── useScrollPosition.js
└── lib/
    └── utils.js      # cn() helper
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
  images: string[],        // Array of image URLs
  variants: string[],      // ['Gold', 'Silver']
  rating: number,         // 1-5
  reviewCount: number,
  materials: string,
  care: string,
  bestseller: boolean
}
```

**CartItem:**
```javascript
{
  productId: string,
  variant: string,
  quantity: number,
  price: number,
  name: string,
  image: string
}
```

### Performance
- Images: Lazy loading with `loading="lazy"` and blur placeholder
- Code splitting: Route-based lazy loading
- Animations: CSS transforms and opacity only (GPU-accelerated)

---

## 7. Seed Product Data

| ID | Name | Price | Category | Description |
|----|------|-------|----------|-------------|
| 1 | Vivid Aura Jewels | $42 | Earrings | Delicate gold ear cuff with floating crystal accent. Effortlessly elevates any look from day to evening. |
| 2 | Majestic Flora Nectar | $68 | Necklaces | Multicolor floral crystal pendant on delicate gold chain. A garden of sparkle around your neck. |
| 3 | Golden Sphere Huggies | $38 | Huggies | Chunky gold dome huggie earrings with high-shine finish. Modern classics you'll reach for daily. |
| 4 | Amber Lace Earrings | $54 | Earrings | Textured gold filigree drop earrings with intricate lace pattern. Victorian elegance meets modern ease. |
| 5 | Royal Heirloom Set | $95 | Sets | Gift-boxed earring and necklace set in keepsake packaging. The perfect present (including for yourself). |
