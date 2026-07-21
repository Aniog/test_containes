# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Essence
"Quiet luxury" - premium demi-fine jewelry brand that feels editorial, warm, and sophisticated. NOT discount-looking, NOT generic e-commerce, NOT loud.

### Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Warm Cream** | `#F8F5F0` | Primary background - soft, warm white |
| **Ivory** | `#FFFEF9` | Cards, elevated surfaces |
| **Espresso** | `#2C2420` | Primary text, headings |
| **Mocha** | `#5C4F47` | Secondary text, descriptions |
| **Gold Accent** | `#C9A962` | CTAs, highlights, accents |
| **Gold Hover** | `#B8943F` | Hover states for gold elements |
| **Warm Gray** | `#A89F99` | Muted text, placeholders |
| **Divider** | `#E8E3DD` | Hairline dividers, borders |
| **Charcoal** | `#1A1715` | Footer, dark sections |

### Typography

**Headings & Product Names:**
- Font: Cormorant Garamond (serif)
- Weights: 400 (regular), 500 (medium), 600 (semibold)
- Letter-spacing: 0.02em for display, 0.15em UPPERCASE for product names
- Line-height: 1.2

**Body & UI:**
- Font: Inter (sans-serif)
- Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold)
- Letter-spacing: 0.01em
- Line-height: 1.6

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px

### Visual Elements

**Dividers:**
- Hairline style: 1px solid #E8E3DD
- Generous whitespace around dividers

**Shadows:**
- Cards: `0 2px 12px rgba(44, 36, 32, 0.06)`
- Hover cards: `0 8px 24px rgba(44, 36, 32, 0.1)`
- Modals/drawers: `0 12px 40px rgba(44, 36, 32, 0.15)`

**Buttons:**
- Primary: Gold background (#C9A962), dark text, 12px 32px padding
- Secondary: Transparent, gold border, gold text
- Border-radius: 0 (sharp corners for premium feel)
- Transitions: 200ms ease

**Images:**
- Warm-toned jewelry photography
- Dark/neutral backgrounds
- Editorial feel - close-ups, lifestyle shots

## Component Guidelines

### Navigation
- Transparent over hero, solid cream (#FFFEF9) on scroll
- Logo: VELMORA in Cormorant Garamond, tracking wide
- Links: Inter, uppercase, 0.1em tracking
- Icons: Lucide, 20px

### Product Cards
- Aspect ratio: 4:5
- Hover: Second image reveal with fade transition
- Quick add button appears on hover
- Product name: Cormorant Garamond, uppercase, 0.15em tracking
- Price: Inter, medium weight
- Subtle shadow, no border

### Form Elements
- Clean, minimal inputs
- Border: 1px solid #E8E3DD
- Focus: 2px gold outline
- Padding: 12px 16px
- Border-radius: 0

## Animations
- Page transitions: None (fast load priority)
- Hover effects: 200-300ms ease
- Scroll reveals: Subtle fade-up, 400ms
- Cart drawer: Slide from right, 300ms

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Don'ts
- No gradients on large areas
- No loud colors (neon, saturated)
- No rounded corners on main elements
- No discount badges or sale screaming
- No generic stock photo aesthetics
