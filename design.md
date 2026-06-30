# Velmora Fine Jewelry — Design Specification

## Visual Identity

### Concept
Quiet luxury meets editorial warmth. Premium demi-fine jewelry presented as art, not commodity. Every element should feel intentional, refined, and understated.

### Color Palette
- **Background/Cream** `#fdfaf6` — warm off-white, primary surface
- **Charcoal** `#1f1f23` — near-black, primary text and CTAs
- **Gold Accent** `#d4962a` — warm gold, key accent for highlights
- **Gold Light** `#f4cb7d` — soft champagne, hover states
- **Gold Dark** `#95511e` — deeper gold, pressed states
- **Neutral Tints** `#f5ece0`, `#eddfcc` — section backgrounds
- **Charcoal Tints** `#65656f`, `#858590` — secondary text

### Typography
- **Headings**: Cormorant Garamond (serif) — elegant, editorial, weight 400-600
- **Body/UI**: Inter (sans-serif) — clean, modern, weight 300-600
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing 0.15em
- **Labels/Caps**: Inter, uppercase, letter-spacing 0.25em, size 11-12px

### Spatial System
- Generous whitespace: sections use 80-120px vertical padding on desktop
- Content max-width: 1280px, centered
- Grid: 12-column, 24px gutters
- Card spacing: 24-32px gaps

### Visual Elements
- Hairline dividers: 1px `#e8e8ea`
- Soft shadows: `0 4px 20px rgba(0,0,0,0.06)`
- Hover card shadows: `0 8px 30px rgba(0,0,0,0.1)`
- Border radius: 0-2px (sharp, editorial)
- Buttons: rectangular, no radius

### Motion Philosophy
- Subtle, refined transitions (300-400ms ease)
- Fade-in on scroll for sections
- Image zoom on hover (scale 1.05)
- Smooth drawer/modal transitions
- No jarring or playful animations

## Component Patterns

### Navigation
- Transparent on hero, solid cream on scroll
- Logo left (Cormorant Garamond, tracked out)
- Center links: 12px uppercase tracked
- Right: minimal icons (search, cart)
- Mobile: hamburger with slide-out menu

### Product Cards
- Image with aspect ratio 3:4
- Hover: second image fades in
- Product name below: serif, uppercase, tracked
- Price: Inter, regular weight
- Quick-add appears on hover

### Buttons
- Primary: charcoal background, cream text
- Accent: gold background, white text
- Outline: charcoal border, transparent bg
- All: uppercase, tracked, 300ms transitions

### Typography Scale
- Hero: 64-80px, Cormorant Garamond
- Section titles: 48px
- Subheadings: 32px
- Product names: 18px
- Body: 15px, Inter
- Labels: 11px uppercase

## Accessibility
- All text meets WCAG AA contrast (4.5:1 minimum)
- Focus states visible on all interactive elements
- Alt text for all images
- Keyboard navigation support
