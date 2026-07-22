# Velmora Fine Jewelry - Design Specification

## Brand Identity
- **Brand Name**: Velmora Fine Jewelry
- **Tagline**: Crafted to be Treasured
- **Target Audience**: Women 25-45, gifting and self-purchase
- **Price Range**: $30–$120 (premium-but-accessible)
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

---

## Color Palette

### Primary Colors
- **Background Primary**: `#FAF9F7` (warm off-white/cream)
- **Background Secondary**: `#F3F1EE` (warm light gray)
- **Background Dark**: `#1A1918` (rich charcoal for dark sections)

### Accent Colors
- **Gold Accent**: `#C9A962` (warm champagne gold)
- **Gold Hover**: `#B8954A` (deeper gold)
- **Gold Light**: `#E8DCC4` (soft gold for backgrounds)

### Text Colors
- **Text Primary**: `#1A1918` (rich charcoal)
- **Text Secondary**: `#6B6560` (warm gray)
- **Text Light**: `#FAF9F7` (cream for dark backgrounds)
- **Text Muted**: `#9A9590` (muted warm gray)

### UI Colors
- **Border**: `#E5E2DD` (warm light border)
- **Border Dark**: `#3D3A37` (dark border for dark sections)
- **Success**: `#4A7C59` (muted forest green)
- **Error**: `#A65D57` (muted terracotta)

---

## Typography

### Font Families
- **Heading Serif**: "Cormorant Garamond", Georgia, serif
- **Body Sans**: "Manrope", -apple-system, sans-serif

### Font Sizes
- **Display**: 56px / 3.5rem (hero headlines)
- **H1**: 42px / 2.625rem
- **H2**: 32px / 2rem
- **H3**: 24px / 1.5rem
- **H4**: 18px / 1.125rem
- **Body Large**: 16px / 1rem
- **Body**: 14px / 0.875rem
- **Small**: 12px / 0.75rem
- **Caption**: 11px / 0.6875rem

### Font Weights
- **Light**: 300
- **Regular**: 400
- **Medium**: 500
- **SemiBold**: 600

### Letter Spacing
- **Product Names**: 0.15em (wide)
- **Navigation**: 0.05em
- **Buttons**: 0.1em

---

## Spacing System
- **Base Unit**: 4px
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

---

## Visual Effects

### Shadows
- **Card**: `0 2px 12px rgba(26, 25, 24, 0.06)`
- **Card Hover**: `0 8px 24px rgba(26, 25, 24, 0.1)`
- **Button**: `0 2px 8px rgba(201, 169, 98, 0.3)`
- **Modal**: `0 16px 48px rgba(26, 25, 24, 0.15)`

### Borders
- **Hairline**: 1px solid #E5E2DD
- **Radius Small**: 2px
- **Radius Medium**: 4px
- **Radius Large**: 8px

### Animations
- **Transition Default**: 0.3s ease
- **Transition Fast**: 0.15s ease
- **Transition Slow**: 0.5s ease
- **Fade In**: opacity 0 to 1, 0.4s
- **Slide Up**: translateY 20px to 0, 0.4s

---

## Components

### Buttons
- **Primary**: 
  - Background: #C9A962
  - Text: #1A1918
  - Padding: 14px 32px
  - Border-radius: 2px
  - Font-weight: 500
  - Letter-spacing: 0.1em
  - Uppercase text
  - Hover: background #B8954A

- **Secondary**:
  - Background: transparent
  - Border: 1px solid #C9A962
  - Text: #1A1918
  - Same padding as primary
  - Hover: background #C9A962

- **Ghost**:
  - Background: transparent
  - Text: #1A1918
  - No border
  - Hover: text #C9A962

### Navigation
- Transparent over hero, solid #FAF9F7 on scroll
- Logo: serif, uppercase, letter-spacing 0.2em
- Links: sans-serif, 14px, letter-spacing 0.05em
- Icons: 20px, stroke width 1.5

### Product Cards
- Aspect ratio: 4:5 for images
- Second image on hover with crossfade
- Quick "Add to Cart" button appears on hover
- Product name: serif, uppercase, 14px, letter-spacing 0.15em
- Price: sans-serif, 14px, font-weight 500

### Form Inputs
- Border: 1px solid #E5E2DD
- Border-radius: 2px
- Padding: 12px 16px
- Focus: border-color #C9A962
- Placeholder: #9A9590

### Dividers
- Hairline: 1px solid #E5E2DD
- Max-width: 1200px centered

---

## Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## Page Sections

### Homepage
1. **Sticky Nav** - Transparent → solid on scroll
2. **Hero** - Full-bleed, warm-lit jewelry image, headline, CTA
3. **Trust Bar** - Thin strip with trust badges
4. **Bestsellers** - 5 product grid
5. **UGC Row** - Horizontal scroll of 9:16 cards
6. **Category Tiles** - 3 tiles (Earrings, Necklaces, Huggies)
7. **Brand Story** - Split section
8. **Testimonials** - 3 reviews with stars
9. **Newsletter** - Email capture block
10. **Footer** - Logo, columns, payment icons

### Product Detail Page
- Image gallery with thumbnails
- Product name, price, rating
- Variant selector (gold/silver)
- Quantity selector
- Add to Cart button
- Accordions: Description, Materials & Care, Shipping & Returns
- Related products

### Collection Page
- Filter sidebar
- Product grid
- Sort dropdown

---

## Seed Products
1. Vivid Aura Jewels — gold ear cuff with crystal accent — $42
2. Majestic Flora Nectar — multicolor floral crystal necklace — $68
3. Golden Sphere Huggies — chunky gold dome huggie earrings — $38
4. Amber Lace Earrings — textured gold filigree drop earrings — $54
5. Royal Heirloom Set — gift-boxed earring + necklace set — $95