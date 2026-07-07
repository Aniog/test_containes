# Velmora Fine Jewelry — E-Commerce Storefront Specification

## 1. Concept & Vision

Velmora Fine Jewelry is a direct-to-consumer demi-fine jewelry brand selling 18K gold-plated earrings, necklaces, and huggies at an accessible premium price point ($30–$120). The storefront embodies **quiet luxury** — warm, editorial, and refined — evoking the feeling of discovering a cherished heirloom rather than shopping a discount site. Every interaction should feel intentional, unhurried, and elevated. The brand speaks to women 25–45 who appreciate quality craftsmanship for gifting and self-purchase.

---

## 2. Design Language

### Aesthetic Direction
**Warm Editorial Luxury** — Inspired by high-end fashion magazines and jewelry campaigns. Think Bvlgari meets Reformation: rich warm neutrals, editorial photography, generous whitespace, and typography that whispers rather than shouts. No loud CTAs, no countdown timers, no "sale" banners.

### Color Palette
```
--color-bg-primary:      #FDFBF7    /* Warm cream — main background */
--color-bg-secondary:    #F5F1EA    /* Soft sand — alternate sections */
--color-bg-dark:         #1A1814    /* Deep espresso — footer, contrast sections */
--color-text-primary:    #1A1814    /* Deep espresso — body text */
--color-text-secondary:  #6B5D4D    /* Warm taupe — secondary text */
--color-text-muted:      #9C8B78    /* Muted bronze — captions, labels */
--color-accent:          #C9A962    /* Warm gold — primary accent */
--color-accent-hover:    #B8943F    /* Deeper gold — hover state */
--color-accent-light:    #E8DCC4    /* Light gold — subtle highlights */
--color-white:           #FFFFFF    /* Pure white — cards, overlays */
--color-border:          #E5DED3    /* Hairline — dividers */
```

### Typography
- **Headings & Product Names**: Cormorant Garamond (serif) — elegant, editorial, with old-world charm
- **Body & UI**: Manrope (sans-serif) — clean, modern, highly legible
- **Product Names**: UPPERCASE with `letter-spacing: 0.15em` (2.4px)

**Type Scale**:
- Hero headline: 72px / 80px mobile: 44px
- Section headings: 40px / mobile: 28px
- Product names: 14px uppercase
- Body text: 16px / line-height: 1.7
- Small text: 13px
- Button text: 13px uppercase, letter-spacing: 0.1em

### Spatial System
- Base unit: 8px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (products), 32px (sections)
- Card padding: 24px

### Motion Philosophy
All animations are **subtle and refined** — nothing bouncy or playful. Think slow fade, gentle lift, elegant ease.
- Hover transitions: 300ms ease-out
- Page transitions: 400ms ease-out
- Scroll reveals: 600ms ease-out with 100ms stagger
- Button hover: subtle scale(1.02) + shadow elevation
- Image hover: smooth zoom(1.05) within container
- Cart drawer: slide from right, 350ms cubic-bezier(0.4, 0, 0.2, 1)

### Visual Assets
- **Icons**: Lucide React — thin, elegant strokes (1.5px)
- **Images**: Warm-lit, editorial jewelry photography on dark or neutral backgrounds
- **Dividers**: 1px hairline in `--color-border`
- **Shadows**: Very soft, warm-tinted: `0 4px 20px rgba(26, 24, 20, 0.08)`

---

## 3. Layout & Structure

### Global Layout
- **Navigation**: Sticky, 72px height. Transparent over hero (text white), solid cream on scroll.
- **Content**: Full-width sections with contained inner content (max 1280px)
- **Footer**: Dark espresso background, warm gold accents

### Page Structure

#### Homepage Flow
1. **Sticky Nav** — Transparent → solid on scroll
2. **Hero** — Full-bleed, 100vh, editorial jewelry image
3. **Trust Bar** — Thin strip, centered, 4 trust points
4. **Bestsellers** — 5-column grid (2 on mobile), product cards
5. **UGC Reel Strip** — Horizontal scroll, 9:16 vertical cards
6. **Shop by Category** — 3 image tiles (Earrings, Necklaces, Huggies)
7. **Brand Story** — Split layout (image | text)
8. **Testimonials** — 3 review cards
9. **Newsletter** — Full-width accent block
10. **Footer** — Logo, columns, social, payment

#### Product Detail Page
- Two-column layout (60% gallery | 40% details) on desktop
- Stacked on mobile (gallery → details)
- Accordion sections below product info
- "You may also like" row at bottom

#### Collection Page
- Sidebar filter (desktop) → collapsible filter (mobile)
- 3-column product grid (2 on tablet, 1 on mobile)
- Sort dropdown top-right

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px – 1024px
- Desktop: > 1024px

---

## 4. Features & Interactions

### Navigation
- Logo left, links center, icons right
- Search icon opens overlay search
- Cart icon shows item count badge
- Mobile: hamburger menu → full-screen overlay

### Hero
- Full-bleed background image
- Headline + subhead + CTA button
- CTA: solid gold background, white text, subtle hover lift

### Product Cards
- Primary image with product name below
- Hover: second image crossfades in, "Quick Add" button slides up
- Click: navigates to product detail page
- Quick Add: opens variant selector modal or adds directly to cart

### Cart Drawer
- Slides in from right
- Shows cart items with image, name, variant, quantity controls, remove
- Subtotal + "View Cart" + "Checkout" buttons
- Empty state: elegant message + "Continue Shopping" link
- Close: X button or click outside

### Product Detail
- Image gallery: main image + thumbnails, click to swap
- Variant pills: gold tone / silver tone (if applicable)
- Quantity selector: -/+ buttons
- Add to Cart: full-width button
- Accordions: Description, Materials & Care, Shipping & Returns
- Related products: horizontal scroll row

### Collection Page
- Filter by: Category (Earrings, Necklaces, Huggies, Sets), Price range, Material
- Sort by: Featured, Price low-high, Price high-low, Newest
- Mobile: filter button opens slide-out panel

### Newsletter
- Email input + "Subscribe" button
- Success state: "Welcome! Check your inbox for 10% off."
- Error state: "Please enter a valid email."

---

## 5. Component Inventory

### Button
- **Primary**: Gold background (#C9A962), white text, uppercase
- **Secondary**: Transparent, gold border, gold text
- **States**: Default, hover (darker + shadow), active (pressed), disabled (50% opacity)

### ProductCard
- Image container with aspect-ratio 4:5
- Product name (uppercase, serif)
- Price (regular weight)
- Hover: second image + Quick Add overlay
- Badge: "Bestseller" or "New" (optional)

### Input
- Clean border-bottom style or full border
- Placeholder in muted color
- Focus: gold underline/border
- Error: red border + message below

### Accordion
- Gold accent bar on active
- Smooth height animation
- Plus/minus icon rotation

### Rating
- 5 gold stars (filled/empty)
- Review count in parentheses

### Badge
- Small pill, uppercase text
- Colors: gold (accent), cream (neutral)

---

## 6. Technical Approach

### Stack
- **React 18** with functional components and hooks
- **React Router v6** for client-side routing
- **Tailwind CSS** for styling (utility-first)
- **Lucide React** for icons
- **Context API** for cart state management

### Project Structure
```
src/
  components/
    ui/           # Reusable UI primitives
    layout/       # Nav, Footer, Layout
    home/         # Homepage section components
    product/      # Product-related components
    cart/         # Cart components
  pages/          # Page-level components
  context/        # React Context (Cart)
  hooks/          # Custom hooks
  data/           # Seed product data
  styles/         # Global styles
```

### State Management
- **Cart Context**: items array, add/remove/update functions, total calculation
- **Local state**: UI interactions, form inputs, accordion states

### Cart Data Shape
```javascript
{
  id: string,
  name: string,
  price: number,
  variant: string,
  quantity: number,
  image: string
}
```

### Seed Products
1. Vivid Aura Jewels — Ear cuff with crystal — $42
2. Majestic Flora Nectar — Floral crystal necklace — $68
3. Golden Sphere Huggies — Chunky dome huggie — $38
4. Amber Lace Earrings — Filigree drop earrings — $54
5. Royal Heirloom Set — Earring + necklace set — $95

---

## 7. Seed Product Data

| Name | Description | Price | Category | Image Theme |
|------|-------------|-------|----------|-------------|
| Vivid Aura Jewels | Delicate gold ear cuff adorned with a shimmering crystal accent | $42 | Earrings | Ear cuff on dark background |
| Majestic Flora Nectar | Multicolor floral crystal pendant necklace with delicate chain | $68 | Necklaces | Crystal necklace editorial |
| Golden Sphere Huggies | Chunky solid dome huggie earrings in polished gold | $38 | Huggies | Gold huggies close-up |
| Amber Lace Earrings | Intricate textured gold filigree drop earrings | $54 | Earrings | Gold drops on marble |
| Royal Heirloom Set | Elegant gift-boxed earring and necklace combination | $95 | Sets | Jewelry set flat lay |
