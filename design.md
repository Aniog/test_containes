# Velmora Fine Jewelry - Design Specification

## Visual Identity

### Mood & Aesthetic
- **Quiet luxury**: Understated elegance, editorial sophistication
- **Warm & Inviting**: Soft lighting, golden warmth, intimate feeling
- **Premium Demi-Fine**: Accessible luxury, NOT discount, NOT loud
- **Modern Editorial**: Clean layouts inspired by high-end fashion magazines

### Color Palette

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary (Champagne Gold) | Gold | `#C9A962` | Accent CTAs, highlights, borders |
| Primary Dark | Deep Gold | `#A68B4B` | Hover states, emphasis |
| Background | Warm Ivory | `#FAF8F5` | Main background |
| Surface | Pure White | `#FFFFFF` | Cards, overlays |
| Surface Alt | Soft Cream | `#F5F2ED` | Alternate sections |
| Text Primary | Warm Charcoal | `#2D2926` | Headlines, primary text |
| Text Secondary | Warm Gray | `#6B6560` | Body text, descriptions |
| Text Muted | Soft Taupe | `#9A9590` | Captions, metadata |
| Border | Hairline Gold | `#E8E4DC` | Dividers, subtle borders |

### Typography

**Headlines & Product Names**
- Font: Cormorant Garamond (Google Fonts)
- Weight: 500-600
- Transform: UPPERCASE for product names
- Letter-spacing: 0.15em (wide)
- Line-height: 1.2

**Body & UI**
- Font: Inter (Google Fonts)
- Weight: 300-500
- Letter-spacing: 0.01em
- Line-height: 1.6

**Scale**
- Hero: 72px / 64px mobile
- H1: 48px / 36px mobile
- H2: 36px / 28px mobile
- H3: 24px / 20px mobile
- Body: 16px
- Small: 14px
- Caption: 12px

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical / 24px horizontal mobile
- Container max-width: 1280px
- Card gap: 24px
- Component padding: 16px-32px

### Motion & Transitions
- Duration: 300ms default, 500ms for larger elements
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Hover: scale(1.02) on cards, color shifts on buttons
- Scroll: fade-up animations with stagger
- Image hover: subtle zoom or swap reveal

### Visual Assets
- **Icons**: Lucide React (thin, elegant strokes)
- **Dividers**: 1px hairline, warm gold tint
- **Shadows**: Soft, diffused (0 4px 20px rgba(45, 41, 38, 0.08))
- **Border radius**: 0px for buttons/cards (sharp), 2px for inputs

## Component Specifications

### Navigation (Sticky Header)
- Height: 72px desktop, 64px mobile
- Transparent over hero, solid ivory on scroll
- Logo: "VELMORA" in Cormorant Garamond, tracking wide
- Links: Inter 14px, uppercase, tracking wide
- Icons: Search, Cart (with count badge)

### Buttons
**Primary CTA**
- Background: #C9A962
- Text: White, uppercase, tracking wide, 14px
- Padding: 16px 32px
- Border: none
- Hover: #A68B4B

**Secondary / Outline**
- Background: transparent
- Border: 1px #C9A962
- Text: #C9A962, uppercase
- Hover: Background #C9A962, Text white

**Text Link**
- Color: #2D2926
- Underline on hover
- Tracking: wide

### Product Cards
- Background: white
- Aspect ratio: 4:5 for images
- Shadow: subtle on hover
- Name: Cormorant uppercase, tracking wide
- Price: Inter, regular weight
- Hover: Second image reveal, quick-add overlay

### Form Inputs
- Border: 1px #E8E4DC
- Focus: 1px #C9A962
- Padding: 14px 16px
- Border-radius: 2px
- Placeholder: #9A9590

### Accordions
- Border-bottom: 1px hairline
- Plus/minus icon rotation
- Smooth height animation

## Page Layouts

### Homepage Sections
1. **Hero**: 100vh, full-bleed image, centered text overlay
2. **Trust Bar**: Thin strip, centered items, uppercase small caps
3. **Bestsellers**: 5-column grid (2 on mobile), horizontal scroll
4. **UGC Reel Strip**: Horizontal scroll, 9:16 aspect cards
5. **Category Tiles**: 3 equal columns, hover reveal labels
6. **Brand Story**: 50/50 split, image + text
7. **Testimonials**: 3 cards in row, star ratings
8. **Newsletter**: Full-width accent block
9. **Footer**: 4-column layout, subtle background

### Product Detail
- Two-column: 55% images / 45% info
- Sticky info panel on scroll
- Accordions below product info
- Related products row

### Collection Page
- Sidebar filter (collapsible on mobile)
- 3-column grid (2 on tablet, 1 on mobile)
- Sort dropdown in header

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility
- Color contrast ratio: minimum 4.5:1
- Focus states visible
- Alt text for all images
- Semantic HTML structure
