# Velmora Fine Jewelry - Design Specification

## Brand Overview
**Brand:** Velmora Fine Jewelry  
**Type:** Direct-to-consumer (B2C) demi-fine jewelry e-commerce  
**Target:** Women 25-45, gifting and self-purchase  
**Price Point:** Premium-accessible ($30-$120)  
**Mood:** Quiet luxury, warm, editorial

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Rich Black | `#0D0D0D` | Primary background, deep sections |
| Warm Ivory | `#FAF8F5` | Light backgrounds, cards |
| Champagne Gold | `#C9A962` | Primary accent, CTAs, highlights |
| Soft Gold | `#D4B896` | Secondary gold, borders |

### Supporting Colors
| Name | Hex | Usage |
|------|-----|-------|
| Warm Gray 900 | `#1F1F1F` | Primary text on light |
| Warm Gray 600 | `#6B6B6B` | Secondary text |
| Warm Gray 400 | `#9A9A9A` | Muted text, placeholders |
| Warm Gray 100 | `#F0EDE8` | Dividers, subtle backgrounds |

### Accessibility
- All text combinations meet WCAG AA contrast ratios (4.5:1 minimum for body, 3:1 for large text)
- Gold accent (`#C9A962`) provides strong contrast against dark backgrounds
- Ivory (`#FAF8F5`) ensures readability on dark backgrounds

---

## Typography

### Font Stack
- **Headings:** Cormorant Garamond (serif) - elegant, editorial
- **Body:** Inter (sans-serif) - clean, modern, highly readable
- **Product Names:** Inter UPPERCASE with `tracking-widest` (0.15em letter-spacing)

### Type Scale
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 (Hero) | Cormorant | 4rem/5rem | 400 | 1.1 |
| H2 (Section) | Cormorant | 2.5rem | 400 | 1.2 |
| H3 (Card) | Cormorant | 1.5rem | 500 | 1.3 |
| Product Name | Inter | 0.875rem | 500 | 1.4 |
| Body | Inter | 1rem | 400 | 1.6 |
| Caption | Inter | 0.75rem | 400 | 1.5 |
| Button | Inter | 0.875rem | 500 | 1 |

---

## Spacing System

Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `space-xs` | 4px | Icon gaps, tight spacing |
| `space-sm` | 8px | Component internal padding |
| `space-md` | 16px | Card padding, section gaps |
| `space-lg` | 32px | Section internal spacing |
| `space-xl` | 64px | Major section separation |
| `space-2xl` | 96px | Hero, major content blocks |

---

## Visual Elements

### Dividers
- Hairline dividers: 1px solid `#F0EDE8`
- Gold accent lines: 1px solid `#C9A962`

### Shadows
- **Card Shadow:** `0 4px 20px rgba(0, 0, 0, 0.06)`
- **Hover Shadow:** `0 8px 30px rgba(0, 0, 0, 0.1)`
- **Modal Shadow:** `0 20px 60px rgba(0, 0, 0, 0.15)`

### Border Radius
- Buttons: 0px (sharp, premium feel)
- Cards: 2px (subtle)
- Images: 0px (editorial)
- Pills: 100px (variant selectors)

### Transitions
- Default: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Hover lifts: `transform 0.3s ease, shadow 0.3s ease`
- Image crossfade: `opacity 0.4s ease`

---

## Components

### Navigation
- Transparent over hero, solid `#FAF8F5` with shadow on scroll
- Logo: "VELMORA" in Cormorant, uppercase, tracking-wide
- Links: Inter 500, uppercase, tracking-wider, 0.1em
- Icons: 24px, stroke 1.5

### Buttons
**Primary (Solid)**
- Background: `#C9A962`
- Text: `#0D0D0D`
- Padding: 16px 40px
- Hover: darken 10%, lift shadow

**Secondary (Outlined)**
- Border: 1px solid `#C9A962`
- Text: `#C9A962`
- Background: transparent
- Hover: fill with gold, text to dark

**Ghost**
- No border, text `#C9A962`
- Hover: subtle background `#C9A96215`

### Product Cards
- Image container: aspect-ratio 4:5
- Primary image, hover reveals secondary
- Quick add button appears on hover
- Product name: uppercase, tracking-widest
- Price: Inter 500, normal weight

### Form Elements
- Input: 1px border `#E0DCD4`, focus border `#C9A962`
- Padding: 14px 16px
- Label: Inter 500, uppercase, tracking-wider

---

## Layout

### Container
- Max-width: 1400px
- Padding: 24px (mobile), 48px (desktop)
- Centered with auto margins

### Grid
- 4 columns mobile
- 8 columns tablet
- 12 columns desktop
- Gutter: 24px

### Section Spacing
- Section padding: 80px vertical (mobile: 48px)
- Component gaps: 48px

---

## Pages

### Homepage
1. Sticky nav (transparent → solid on scroll)
2. Full-bleed hero with overlay
3. Trust bar (4 features, inline on desktop)
4. Bestsellers grid (5 products)
5. UGC Reels strip (horizontal scroll)
6. Category tiles (3: Earrings, Necklaces, Huggies)
7. Brand story split (image | text)
8. Testimonials (3 reviews)
9. Newsletter capture
10. Footer

### Product Detail
- Two-column layout (image gallery | product info)
- Image thumbnails vertical strip
- Product name uppercase, price, rating
- Variant pills (gold/silver)
- Quantity selector, Add to Cart
- Accordion sections below
- Related products row

### Collection/Shop
- Sidebar filters (desktop), drawer (mobile)
- Grid: 2 cols mobile, 3 cols tablet, 4 cols desktop
- Sort dropdown top-right

---

## Animations

### Page Load
- Fade in content sections: `opacity 0→1, translateY 20px→0, 0.6s ease-out`
- Stagger: 100ms between elements

### Scroll Reveals
- Elements fade in when 20% visible
- Single animation, no repeat

### Hover Effects
- Cards: lift 4px, shadow increase
- Images: subtle scale 1.02
- Buttons: slight darken, shadow lift
- Links: gold underline slide in

### Transitions
- All interactive elements: 0.3s ease
- Image swap on product cards: 0.4s crossfade

---

## Responsive Breakpoints

| Name | Min Width | Usage |
|------|-----------|-------|
| Mobile | 0px | 1-2 column grids |
| Tablet | 768px | 3 column grids, sidebar |
| Desktop | 1024px | Full layout |
| Wide | 1280px | Max content width |

---

## Seed Products

1. **Vivid Aura Jewels** - Gold ear cuff with crystal accent - $42
2. **Majestic Flora Nectar** - Multicolor floral crystal necklace - $68
3. **Golden Sphere Huggies** - Chunky gold dome huggie earrings - $38
4. **Amber Lace Earrings** - Textured gold filigree drop earrings - $54
5. **Royal Heirloom Set** - Gift-boxed earring + necklace set - $95

---

## Image Placeholder Strategy

Use elegant placeholder SVGs with:
- Dark charcoal/rich black backgrounds
- Gold gradient shapes representing jewelry silhouettes
- Warm, editorial lighting feel
- Aspect ratios: Hero 16:9, Products 4:5, UGC 9:16
