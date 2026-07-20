# Velmora Fine Jewelry - Design Specification

## Brand Overview
- **Brand Name**: Velmora Fine Jewelry
- **Type**: Direct-to-consumer (B2C) demi-fine jewelry e-commerce
- **Target Audience**: Women 25-45, gifting and self-purchase
- **Price Range**: $30–$120 (premium-but-accessible)
- **Mood**: Quiet luxury, warm, editorial

---

## Visual Identity

### Color Palette
- **Primary Background**: `#0D0D0D` (rich black)
- **Secondary Background**: `#1A1A1A` (soft black)
- **Tertiary/Cards**: `#242424` (charcoal)
- **Primary Text**: `#F5F5F0` (warm white)
- **Secondary Text**: `#A8A8A0` (muted warm gray)
- **Accent Gold**: `#C9A962` (warm champagne gold)
- **Accent Gold Hover**: `#D4B978` (lighter gold)
- **Border/Divider**: `#333333` (subtle hairline)
- **Success**: `#4A7C59` (muted green)
- **Error**: `#9C4146` (muted red)

### Typography
- **Headings/Product Names**: `Cormorant Garamond` (serif)
  - Font weights: 400, 500, 600
  - Product names: UPPERCASE, letter-spacing: 0.15em
- **Body/UI**: `Manrope` (sans-serif)
  - Font weights: 400, 500, 600
- **Font Sizes**:
  - Hero headline: 56px (desktop), 36px (mobile)
  - Section titles: 40px (desktop), 28px (mobile)
  - Product names: 14px
  - Body: 15px
  - Small/UI: 13px

### Spacing System
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop), 16px (mobile)
- Card padding: 16px
- Button padding: 14px 28px

### Visual Effects
- **Shadows**: `0 4px 20px rgba(0,0,0,0.3)` (subtle, soft)
- **Hover transitions**: 300ms ease-out
- **Image hover**: Scale 1.05, opacity change
- **Border radius**: 0px (sharp, editorial) for buttons, 4px for cards
- **Dividers**: 1px solid #333333 (hairline)

---

## Component Specifications

### 1. Navigation (Sticky)
- **Initial state**: Transparent background, fixed top
- **Scrolled state**: Solid #0D0D0D background with subtle shadow
- **Logo**: "VELMORA" in Cormorant Garamond, 24px, letter-spacing: 0.3em
- **Links**: Shop, Collections, About, Journal (Manrope, 13px, uppercase, letter-spacing: 0.1em)
- **Icons**: Search, Cart (20px, stroke width 1.5)
- **Cart badge**: Small gold circle with count

### 2. Hero Section
- **Layout**: Full-bleed, full viewport height minus nav
- **Background**: Dark with warm lighting effect (gradient overlay)
- **Headline**: "Crafted to be Treasured" (Cormorant Garamond, 56px)
- **Subhead**: "Demi-fine jewelry for the modern woman" (Manrope, 18px, secondary text)
- **CTA Button**: "Shop the Collection" - solid gold background, dark text, uppercase

### 3. Trust Bar
- **Layout**: Horizontal strip, centered text
- **Items**: Free Worldwide Shipping · 30-Day Returns · 18K Gold Plated · Hypoallergenic
- **Style**: Manrope, 12px, uppercase, letter-spacing: 0.1em, secondary text color
- **Divider**: Hairline above and below

### 4. Bestsellers Grid
- **Layout**: 5 columns (desktop), 2-3 columns (tablet), 1-2 (mobile)
- **Card**:
  - Image container with aspect-ratio 3:4
  - Hover: reveal second image with crossfade
  - Product name (serif, uppercase, 14px)
  - Price ($)
  - Quick "Add to Cart" button appears on hover
- **Products**: Use seed data provided

### 5. UGC Reel Strip
- **Layout**: Horizontal scroll, 9:16 aspect ratio cards
- **Cards**: 180px wide, rounded corners (8px)
- **Overlay**: Soft gradient at bottom, serif caption
- **Scroll**: Smooth horizontal with hidden scrollbar

### 6. Category Tiles
- **Layout**: 3 columns (desktop), stacked (mobile)
- **Tile**: 
  - Full-bleed image with dark overlay on hover
  - Label: Earrings / Necklaces / Huggies
  - Hover: scale image, reveal "Shop Now" text
- **Aspect ratio**: 3:4

### 7. Brand Story Section
- **Layout**: 50/50 split (image left, text right)
- **Image**: Editorial portrait or jewelry detail
- **Text**: 
  - Headline: "Our Story" (Cormorant Garamond, 40px)
  - Body: 2-3 paragraphs about craftsmanship
  - Link: "Read More" with arrow

### 8. Testimonials
- **Layout**: 3 columns (desktop), stacked (mobile)
- **Card**:
  - 5 gold stars
  - Quote text (italic)
  - Customer name: "Sarah M." format
- **Background**: Slightly elevated (#1A1A1A)

### 9. Newsletter
- **Layout**: Centered, max-width 500px
- **Headline**: "Join for 10% off your first order"
- **Input**: Dark background, gold border on focus
- **Button**: "Subscribe" - gold accent

### 10. Footer
- **Layout**: 4 columns (desktop), stacked (mobile)
- **Columns**: 
  - Logo + social icons
  - Shop (Earrings, Necklaces, Huggies, All)
  - Help (Shipping, Returns, Care, Contact)
  - Company (About, Journal, Sustainability)
- **Bottom**: Copyright, payment icons (Visa, MC, Amex, PayPal)

---

## Product Detail Page

### Layout
- **Left (60%)**: Image gallery with thumbnails
- **Right (40%)**: Product information

### Product Info
- **Name**: Cormorant Garamond, uppercase, 28px
- **Price**: Manrope, 20px, gold color
- **Rating**: 5 stars + "(42 reviews)" format
- **Description**: 2-3 sentences
- **Variant Selector**: Pill buttons for Gold/Silver tone
- **Quantity**: Number input with +/- buttons
- **Add to Cart**: Full-width, gold background, uppercase

### Accordions (below product info)
- Description
- Materials & Care
- Shipping & Returns

### Related Products
- "You may also like" - 4 product row

---

## Collection/Shop Page

### Layout
- **Sidebar (desktop)**: Filters (Category, Price Range, Material)
- **Main**: Product grid

### Filters
- **Category**: Checkboxes (Earrings, Necklaces, Huggies)
- **Price**: Range ($0-50, $50-100, $100+)
- **Material**: Checkboxes (Gold Plated, Silver Plated, Rose Gold)

### Sort Dropdown
- Options: Featured, Price: Low to High, Price: High to Low, Newest

### Grid
- 3 columns (desktop), 2 columns (tablet), 1-2 (mobile)

---

## Cart Drawer

### Layout
- Slide-in from right, overlay backdrop
- **Header**: "Your Cart" + item count + close button
- **Items**: Image, name, variant, quantity controls, price, remove
- **Subtotal**: Calculated total
- **CTA**: "Checkout" button (full-width, gold)
- **Empty state**: "Your cart is empty" + "Continue Shopping" link

---

## Animations & Transitions

- **Page load**: Fade in (opacity 0 to 1, 500ms)
- **Scroll**: Subtle fade-up for sections (translateY 20px to 0)
- **Hover**: 
  - Buttons: background color transition (300ms)
  - Cards: image scale (1 to 1.05, 400ms)
  - Links: underline slide-in
- **Cart drawer**: Slide from right (300ms ease-out)
- **Accordion**: Height transition (300ms)

---

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## Seed Products

1. **Vivid Aura Jewels** - Gold ear cuff with crystal accent - $42
2. **Majestic Flora Nectar** - Multicolor floral crystal necklace - $68
3. **Golden Sphere Huggies** - Chunky gold dome huggie earrings - $38
4. **Amber Lace Earrings** - Textured gold filigree drop earrings - $54
5. **Royal Heirloom Set** - Gift-boxed earring + necklace set - $95

---

## Acceptance Criteria

1. ✓ Homepage loads with all 10 sections
2. ✓ Navigation is sticky and transitions on scroll
3. ✓ Product cards show hover effect with second image
4. ✓ Cart drawer opens/closes smoothly
5. ✓ Products can be added to cart
6. ✓ Cart shows correct items and totals
7. ✓ Product detail page displays all information
8. ✓ Collection page shows filters and sorting
9. ✓ All pages are responsive
10. ✓ Typography uses specified fonts
11. ✓ Color palette is consistent throughout
12. ✓ Animations are smooth and subtle