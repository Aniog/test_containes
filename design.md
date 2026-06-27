# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

### Color Palette
A refined, warm palette that flatters gold jewelry:

| Role | Color | Hex |
|------|-------|-----|
| Background | Warm Cream | `#FAF8F5` |
| Surface | Soft Ivory | `#F5F2ED` |
| Primary Text | Deep Charcoal | `#1A1A1A` |
| Secondary Text | Warm Gray | `#6B6560` |
| Accent | Warm Gold | `#C9A962` |
| Accent Dark | Rich Gold | `#B8956A` |
| Border | Hairline | `#E8E4DE` |
| Overlay | Dark | `#1A1A1A` with 60% opacity |

### Typography
- **Headings**: Cormorant Garamond (serif) - elegant, editorial feel
- **Body/UI**: Inter (sans-serif) - clean, modern readability
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing: 0.15em

### Spacing & Layout
- Generous whitespace throughout
- Large editorial imagery (hero: full-bleed)
- Thin hairline dividers (1px, border color)
- Container max-width: 1400px
- Section padding: 80px vertical (desktop), 48px (mobile)

### Buttons
- **Primary**: Solid warm gold background, white text, subtle shadow
- **Secondary**: Outlined with gold border, gold text, transparent background
- **Hover**: Slight lift with shadow, color shift
- **Border radius**: 2px (minimal, premium feel)

### Motion & Transitions
- Subtle hover transitions (0.3s ease)
- Image hover: gentle scale (1.02) + second image fade-in
- Buttons: lift effect with shadow on hover
- Page elements: fade-in on scroll (optional enhancement)

## Component Specifications

### Navigation
- Transparent over hero, turns solid cream on scroll
- Logo: VELMORA in Cormorant Garamond, tracking wide
- Links: Inter, uppercase, letter-spacing 0.1em, 12px
- Icons: Search, Shopping Bag (Lucide icons)
- Mobile: Hamburger menu with slide-out drawer

### Product Cards
- Image aspect ratio: 4:5
- On hover: second image reveals with crossfade
- Quick "Add to Cart" button appears on hover
- Product name: uppercase, tracking wide
- Price: displayed below name

### Trust Bar
- Thin strip (48px height)
- 4 trust badges separated by dots
- Icons + text inline
- Background: Soft Ivory

### UGC Row
- Horizontal scroll, 9:16 aspect ratio cards
- Soft serif caption overlay at bottom
- Snap scrolling behavior
- Subtle vignette on images

### Category Tiles
- Large image tiles (Earrings, Necklaces, Huggies)
- Label appears on hover with dark overlay
- Hover transition: 0.4s ease

### Footer
- 4 columns: Logo+about, Shop, Help, Company
- Payment icons row
- Social links with subtle hover

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Accessibility
- WCAG AA contrast ratios minimum
- Focus states on all interactive elements
- Alt text for all images
- Keyboard navigation support
