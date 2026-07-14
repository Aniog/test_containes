# Velmora Fine Jewelry - E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry embodies **quiet luxury** — a premium demi-fine jewelry brand that whispers elegance rather than shouting status. The storefront feels like flipping through a high-end fashion magazine: warm, editorial, intimate. Every element communicates craftsmanship and intentionality, making women feel cherished whether they're treating themselves or selecting a meaningful gift.

The experience should feel like stepping into a sunlit jewelry boutique with warm wood tones, soft lighting, and personal attention — translated into digital form.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by high-end fashion editorials and artisanal jewelry ateliers. Think Vogue meets a Parisian jeweler's private studio. Generous whitespace, rich warm tones, and photography-forward layouts.

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Primary | Deep Espresso | `#2C2420` |
| Secondary | Warm Ivory | `#F8F5F0` |
| Accent | Burnished Gold | `#C9A86C` |
| Accent Hover | Rich Gold | `#B8964D` |
| Background | Soft Cream | `#FDFCFA` |
| Text Primary | Deep Espresso | `#2C2420` |
| Text Secondary | Warm Gray | `#6B635B` |
| Border | Soft Taupe | `#E8E2DB` |
| Success | Sage | `#7A9B76` |
| Error | Muted Rose | `#C27B7B` |

### Typography
- **Headings & Product Names**: Cormorant Garamond (serif) — elegant, editorial, timeless
  - H1: 56px / 600 weight / -0.02em tracking
  - H2: 40px / 500 weight
  - H3: 28px / 500 weight
  - Product Names: 18px / 500 weight / 0.15em tracking / UPPERCASE
- **Body & UI**: Inter (sans-serif) — clean, modern, highly readable
  - Body: 16px / 400 weight / 1.6 line-height
  - Small: 14px / 400 weight
  - Caption: 12px / 500 weight / 0.05em tracking

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gaps: 32px (desktop), 16px (mobile)
- Card padding: 24px

### Motion Philosophy
All animations are **subtle and refined** — nothing flashy. Motion should feel like jewelry catching light: gentle, momentary, elegant.
- Hover transitions: 300ms ease-out
- Page elements: fade-in 400ms with subtle upward drift (20px)
- Image hovers: scale 1.03 over 500ms
- Accordion expand: 250ms ease-in-out
- Cart drawer: slide from right, 350ms cubic-bezier(0.4, 0, 0.2, 1)

### Visual Assets
- **Icons**: Lucide React — thin stroke weight (1.5px), minimal style
- **Photography Style**: Warm-lit close-ups, neutral/dark backgrounds, lifestyle imagery showing jewelry on models or styled flat lays
- **Decorative Elements**: Thin hairline dividers (1px), subtle drop shadows (0 4px 20px rgba(44,36,32,0.08))

---

## 3. Layout & Structure

### Page Structure
1. **Sticky Navigation** — Transparent on hero, solid on scroll
2. **Hero Section** — Full-bleed, cinematic
3. **Trust Bar** — Thin informational strip
4. **Content Sections** — Alternating rhythm with generous breathing room
5. **Footer** — Comprehensive, warm, brand-forward

### Visual Pacing
- Hero creates immediate impact
- Trust bar provides quick reassurance
- Product grid creates visual rhythm
- UGC row adds movement and authenticity
- Brand story slows pace for emotional connection
- Testimonials build trust
- Newsletter captures attention before exit
- Footer grounds the experience

### Responsive Strategy
- **Mobile-first** (primary traffic source)
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Mobile: Single column, stacked navigation (hamburger menu)
- Tablet: 2-column grids
- Desktop: Full layouts with sidebars

---

## 4. Features & Interactions

### Navigation
- **Transparent state**: Logo + links in white/light over hero images
- **Solid state**: Background #FDFCFA, text #2C2420, subtle shadow
- **Mobile**: Hamburger menu, full-screen overlay with centered links
- **Scroll trigger**: Transition at 100px scroll

### Product Cards
- **Default**: Primary image, product name, price
- **Hover**: Second image fades in, "Add to Cart" button slides up from bottom
- **Click**: Navigate to product detail page

### Cart
- **Cart Icon**: Shows item count badge (gold background)
- **Cart Drawer**: Slides from right, shows all items, subtotal, checkout button
- **Add to Cart**: Button shows loading state, then success checkmark, then resets
- **Quantity Controls**: +/- buttons, minimum 1
- **Remove Item**: X icon, item slides out

### Product Detail
- **Image Gallery**: Main image + thumbnail strip, click to switch
- **Variant Selector**: Gold/Silver pill buttons, selected state is filled
- **Quantity Selector**: Number input with +/- controls
- **Add to Cart**: Full-width accent button
- **Accordions**: Click to expand/collapse, smooth animation

### Filters (Collection Page)
- **Sidebar**: Category checkboxes, price range, material filters
- **Mobile**: Slide-out filter drawer
- **Active Filters**: Displayed as removable chips
- **Sort**: Dropdown with options (Featured, Price Low-High, Price High-Low, Newest)

### Newsletter
- **Email Validation**: Format check on blur
- **Submit**: Loading state, success message "Welcome to Velmora!"
- **Error**: Inline error message

---

## 5. Component Inventory

### Navbar
- States: transparent (over hero), solid (scrolled), mobile-open
- Logo: "VELMORA" in Cormorant Garamond, tracked out
- Links: Inter medium, subtle underline hover animation
- Icons: Search, Shopping Bag (with count)

### ProductCard
- States: default, hover (image swap + CTA reveal), loading
- Image aspect ratio: 4:5 (portrait)
- Name: uppercase, 0.15em letter-spacing
- Price: regular weight, gold accent
- Hover CTA: "Add to Cart" with smooth reveal

### Button (Primary)
- Default: Gold background (#C9A86C), white text, subtle shadow
- Hover: Darker gold (#B8964D), slight lift
- Active: Scale 0.98
- Disabled: 50% opacity, no pointer
- Loading: Spinner replaces text

### Button (Secondary)
- Default: Transparent, gold border, gold text
- Hover: Gold background, white text
- Same states as primary

### Input
- Default: Cream background, taupe border, espresso text
- Focus: Gold border, subtle gold glow
- Error: Rose border, rose helper text
- Placeholder: Warm gray, italic

### Accordion
- Header: Full-width, flex between, plus/minus icon
- Content: Smooth height transition
- Divider: Hairline taupe between items

### Trust Badge
- Icon + text inline
- Subtle background tint
- Responsive: horizontal on desktop, 2x2 grid on mobile

### Testimonial Card
- Star rating (5 gold stars)
- Quote in serif italic
- Customer name + initial
- Subtle cream background

### Cart Drawer
- Overlay: Black 40% opacity
- Panel: Slide from right, 400px width (100% on mobile)
- Header: "Your Bag" + close button
- Items: Image, name, variant, quantity, price, remove
- Footer: Subtotal + Checkout button

---

## 6. Technical Approach

### Stack
- React 18 with Vite
- React Router v6 for navigation
- Tailwind CSS for styling
- Lucide React for icons
- Context API for cart state management
- Local state for UI interactions

### Project Structure
```
src/
├── components/
│   ├── ui/           # Reusable UI primitives
│   ├── layout/       # Navbar, Footer, Layout wrapper
│   ├── home/         # Homepage section components
│   ├── product/      # Product-related components
│   └── cart/         # Cart components
├── pages/            # Page-level components
├── context/          # React Context providers
├── data/             # Static seed data
├── hooks/            # Custom hooks
└── styles/           # Global styles
```

### Data Model
```typescript
interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  description: string;
  category: 'earrings' | 'necklaces' | 'huggies';
  material: 'gold' | 'silver' | 'mixed';
  images: string[];
  variants?: { name: string; value: string }[];
  rating: number;
  reviewCount: number;
}

interface CartItem {
  product: Product;
  quantity: number;
  variant?: string;
}
```

### Cart Context
- Add item (with optional variant)
- Remove item
- Update quantity
- Clear cart
- Computed: total items, subtotal
- Persisted to localStorage

### Performance Considerations
- Lazy load images below fold
- Debounce search input
- Memoize expensive computations
- Use CSS transforms for animations (GPU accelerated)

---

## 7. Seed Product Data

| Name | Category | Price | Description |
|------|----------|-------|-------------|
| Vivid Aura Jewels | Earrings | $42 | Gold ear cuff with crystal accent |
| Majestic Flora Nectar | Necklaces | $68 | Multicolor floral crystal necklace |
| Golden Sphere Huggies | Huggies | $38 | Chunky gold dome huggie earrings |
| Amber Lace Earrings | Earrings | $54 | Textured gold filigree drop earrings |
| Royal Heirloom Set | Sets | $95 | Gift-boxed earring + necklace set |

---

## 8. Page Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | HomePage | Full storefront homepage |
| `/collections/all` | CollectionPage | Shop all products |
| `/products/:slug` | ProductPage | Individual product detail |

---

## 9. Accessibility Requirements

- All images have descriptive alt text
- Focus states visible on all interactive elements
- ARIA labels on icon-only buttons
- Keyboard navigation support
- Color contrast ratio minimum 4.5:1
- Form inputs have associated labels
- Error messages announced to screen readers
