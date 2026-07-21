# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry embodies **quiet luxury** — a sanctuary of understated elegance for the modern woman who appreciates craftsmanship over flash. The experience feels like flipping through a high-end fashion magazine: warm, editorial, intentional. Every element whispers quality rather than shouting promotions. This is a destination for women who treat jewelry as art, not accessories.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Minimalism** — Inspired by luxury fashion magazines like Vogue and Harper's Bazaar, with a focus on warm, golden lighting and generous negative space. Think Cartier meets Kinfolk magazine.

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-ivory` | `#FAF7F2` | Primary background — warm, soft, not stark white |
| `--color-cream` | `#F5F0E8` | Secondary background, cards |
| `--color-espresso` | `#2C2420` | Primary text — warm dark brown, never pure black |
| `--color-cocoa` | `#5C4D47` | Secondary text |
| `--color-champagne` | `#C9A962` | Primary accent — warm gold, luxury feel |
| `--color-gold-light` | `#E8D5A3` | Hover states, subtle accents |
| `--color-silk` | `#8B7E74` | Muted elements, placeholders |
| `--color-rose-gold` | `#B76E79` | Secondary accent for special callouts |

### Typography

**Headings & Product Names:**
- Font: `Cormorant Garamond` (Google Fonts)
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Letter-spacing for product names: `0.2em` (wide tracking)
- Transform: UPPERCASE for product names

**Body & UI:**
- Font: `Inter` (Google Fonts)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Clean, readable, modern

**Scale:**
- Hero headline: 4rem (64px) desktop / 2.5rem mobile
- Section headings: 2.5rem (40px) desktop / 1.75rem mobile
- Product names: 0.875rem (14px) with tracking
- Body: 1rem (16px)
- Small/UI: 0.875rem (14px)

### Spatial System

- Base unit: 4px
- Section padding: 80px vertical (desktop) / 48px (mobile)
- Component gaps: 24px default
- Card padding: 24px
- Maximum content width: 1280px

### Motion Philosophy

All animations are **subtle and intentional** — they enhance without distracting:

- **Entrance**: Fade up with slight translate (20px), 600ms ease-out, staggered 100ms
- **Hover transitions**: 300ms ease-out
- **Image reveals**: Scale from 1.02 to 1, opacity 0.95 to 1
- **Drawer slides**: 400ms cubic-bezier(0.32, 0.72, 0, 1)
- **No jarring movements** — everything should feel like silk

### Visual Assets

- **Icons**: Lucide React — thin stroke (1.5px), consistent sizing
- **Images**: Warm-lit product photography on dark neutral backgrounds
- **Dividers**: 1px hairline in champagne gold
- **Shadows**: Soft, warm-tinted (rgba of espresso)

---

## 3. Layout & Structure

### Global Layout

- **Max-width container**: 1280px centered
- **Gutters**: 24px (desktop), 16px (mobile)
- **Grid**: 12-column on desktop, collapsing to 4 on mobile

### Navigation

**Sticky Navbar:**
- Height: 72px desktop / 64px mobile
- Initially transparent over hero, transitions to solid ivory on scroll (after 100px)
- Left: Serif logo "VELMORA" (24px, tracking 0.3em)
- Center: Navigation links (Shop, Collections, About, Journal)
- Right: Search icon + Cart icon with item count badge

### Page Structure

**Homepage Flow:**
1. Hero (100vh - 72px)
2. Trust Bar (48px strip)
3. Bestsellers (product grid)
4. UGC Reel Strip (horizontal scroll)
5. Category Tiles (3-column grid)
6. Brand Story (image + text split)
7. Testimonials (3-column)
8. Newsletter (accent block)
9. Footer

### Responsive Strategy

- **Mobile-first**: Design for 375px first
- **Breakpoints**: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- Mobile: Single column, hamburger menu, bottom-sticky cart CTA

---

## 4. Features & Interactions

### Navigation
- **Transparent → Solid**: Background fades from transparent to ivory/95% opacity after 100px scroll
- **Mobile menu**: Full-screen overlay with centered links, 400ms fade
- **Cart badge**: Shows count, pulses briefly on add

### Product Cards
- **Default state**: Primary image, product name, price
- **Hover state**: 
  - Image scales slightly (1.02)
  - Second image fades in (if available)
  - Quick-add button slides up from bottom
- **Touch devices**: Tap shows quick-add, second tap adds to cart

### Cart Drawer
- Slides in from right (400px width desktop / full-width mobile)
- Backdrop blur overlay
- Line items with quantity adjusters (+/-)
- Remove item with X button
- Running subtotal
- Checkout button (accent color)
- Empty state with "Continue Shopping" CTA

### Product Detail Page
- **Image gallery**: Main image + thumbnail strip, click to switch, lightbox on mobile
- **Variant pills**: Gold / Silver tone — outlined default, filled on selection
- **Quantity**: Stepper with min 1
- **Add to Cart**: Full-width accent button, loading state on click
- **Accordions**: Smooth expand/collapse, only one open at a time
- **Related products**: Horizontal scroll on mobile, 4-column grid desktop

### Collection Page
- **Filters**: Sidebar on desktop (collapsible drawer on mobile)
- **Sort**: Dropdown (Featured, Price Low-High, Price High-Low, Newest)
- **Grid**: 4 columns desktop, 2 columns tablet, 1 column mobile
- **Product count**: "Showing X products"

### Forms
- **Newsletter**: Email input + submit button
- **Validation**: Inline error messages below fields
- **Success state**: "Thank you!" message replaces form

---

## 5. Component Inventory

### Button

**Primary (Accent):**
- Background: champagne (`#C9A962`)
- Text: espresso (`#2C2420`)
- Padding: 16px 32px
- Border-radius: 0 (sharp edges feel premium)
- Hover: Darken 10%, slight scale (1.02)
- Active: Scale 0.98
- Disabled: 50% opacity, no pointer

**Secondary (Outlined):**
- Background: transparent
- Border: 1px espresso
- Text: espresso
- Hover: Background espresso, text ivory

**Ghost:**
- No border, no background
- Text: cocoa
- Hover: Underline

### Product Card

- **Container**: Cream background, subtle shadow on hover
- **Image**: Aspect ratio 3:4, object-cover
- **Name**: 14px, uppercase, tracking-wide, espresso
- **Price**: 16px, regular weight, cocoa
- **Hover overlay**: Gradient from bottom, quick-add button

### Input Field

- **Default**: Border 1px silk, background ivory
- **Focus**: Border champagne, subtle shadow
- **Error**: Border rose-gold, error text below
- **Padding**: 14px 16px

### Badge

- **Count badge** (cart): 18px circle, champagne background, espresso text
- **New badge**: Small pill, rose-gold background, ivory text

### Accordion

- **Header**: Flex between text and chevron
- **Chevron**: Rotates 180° when open
- **Content**: Max-height animation, padding on open

### Trust Bar

- **Background**: espresso
- **Text**: ivory (small, uppercase, tracking-wide)
- **Icons**: Thin, matching stroke weight
- **Layout**: Centered with dot separators

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS 3.4
- **Routing**: React Router v6
- **State**: React Context (cart), useState/useReducer for local
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Cormorant Garamond, Inter)

### File Structure
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
│   │   ├── ProductGrid.jsx
│   │   ├── UGCStrip.jsx
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
│   │   └── ProductGrid.jsx
│   └── ui/
│       ├── Button.jsx
│       ├── Input.jsx
│       └── Badge.jsx
├── context/
│   └── CartContext.jsx
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   └── Collection.jsx
├── data/
│   └── products.js
├── lib/
│   └── utils.js
├── App.jsx
├── main.jsx
└── index.css
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
  images: string[],
  variants: { name: string, value: string }[],
  rating: number,
  reviewCount: number,
  materials: string,
  care: string,
  shipping: string
}
```

**Cart Item:**
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

### Key Implementation Notes

1. **Image Strategy**: Use placeholder images with warm gold jewelry aesthetic
2. **Cart Persistence**: localStorage for cart state
3. **Scroll detection**: IntersectionObserver for navbar transparency
4. **Smooth scroll**: CSS scroll-behavior: smooth
5. **Performance**: Lazy load images below fold

---

## 7. Seed Products

| Name | Price | Category | Description |
|------|-------|----------|-------------|
| Vivid Aura Jewels | $42 | Earrings | Gold ear cuff with crystal accent |
| Majestic Flora Nectar | $68 | Necklaces | Multicolor floral crystal necklace |
| Golden Sphere Huggies | $38 | Huggies | Chunky gold dome huggie earrings |
| Amber Lace Earrings | $54 | Earrings | Textured gold filigree drop earrings |
| Royal Heirloom Set | $95 | Sets | Gift-boxed earring + necklace set |

---

## 8. Accessibility

- All interactive elements keyboard-navigable
- Focus states visible (champagne outline)
- Color contrast minimum 4.5:1 for text
- Alt text for all images
- ARIA labels for icon buttons
- Reduced motion media query respected
