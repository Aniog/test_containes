# Velmora Fine Jewelry - Design System

## Brand Overview
- **Brand Name:** Velmora Fine Jewelry
- **Tagline:** Crafted to be Treasured
- **Target Audience:** Women 25-45, gifting and self-purchase
- **Price Point:** Premium-but-accessible ($30–$120)
- **Product Category:** Demi-fine gold jewelry (earrings, necklaces, huggies)

## Visual Identity

### Mood & Aesthetic
- **Style:** Quiet luxury, warm, editorial
- **Characteristics:** Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- **Feel:** Understated elegance, timeless sophistication

### Color Palette

#### Primary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Ivory | #FFFEF9 | Main background |
| Cream 50 | #FDFBF7 | Lightest cream |
| Cream 100 | #FAF6ED | Card backgrounds, sections |
| Cream 200 | #F5EDD8 | Borders, dividers |
| Cream 300 | #EFE3C4 | Hover states |

#### Gold Accent
| Name | Hex Code | Usage |
|------|----------|-------|
| Gold 50 | #FDF9F0 | Light backgrounds |
| Gold 100 | #F9EDDA | Tinted backgrounds |
| Gold 400 | #D4A84B | Primary accent |
| Gold 500 | #C49A3A | Primary buttons, CTAs |
| Gold 600 | #A67C2E | Button hover |
| Gold 700 | #8B6429 | Dark accent |

#### Charcoal Neutrals
| Name | Hex Code | Usage |
|------|----------|-------|
| Charcoal 50 | #F5F5F5 | Light gray |
| Charcoal 200 | #D1D1D1 | Borders |
| Charcoal 300 | #B0B0B0 | Placeholder text |
| Charcoal 400 | #888888 | Secondary text |
| Charcoal 500 | #666666 | Muted text |
| Charcoal 600 | #4A4A4A | Body text |
| Charcoal 700 | #333333 | Headings |
| Charcoal 800 | #1F1F1F | Dark headings |
| Charcoal 900 | #141414 | Near black |

### Typography

#### Font Families
- **Headings:** Cormorant Garamond (serif) — elegant, editorial
- **Body & UI:** Inter (sans-serif) — clean, modern, readable

#### Type Scale
| Element | Font | Size | Weight | Letter Spacing |
|---------|------|------|--------|----------------|
| Hero Title | Serif | 4xl-7xl | 400 | Normal |
| Section Title | Serif | 3xl-5xl | 400 | Normal |
| Product Name | Serif | sm-lg | 400 | 0.25em (ultra-wide) |
| Eyebrow | Sans | xs | 500 | 0.35em (mega-wide) |
| Body | Sans | base | 400 | Normal |
| Button | Sans | xs | 500 | 0.25em (ultra-wide) |
| Caption | Sans | xs-sm | 400 | Normal |

#### Product Names
- UPPERCASE with wide letter-spacing (0.25em)
- Font: Cormorant Garamond

### Spacing System
- Base unit: 4px
- Common spacing: 4, 8, 12, 16, 24, 32, 48, 64, 96px
- Section padding: 16-24 (mobile), 24-32 (desktop)

### Visual Elements

#### Hairline Dividers
- Height: 1px
- Color: Charcoal 200 (#D1D1D1)

#### Shadows
- Cards: `shadow-sm` (subtle)
- Modals: `shadow-2xl` (prominent)

#### Border Radius
- Cards: `rounded-lg` (8px)
- Buttons: `rounded` (4px)
- Pills: `rounded-full`

#### Hover Transitions
- Duration: 300ms (fast), 600ms (slow)
- Image zoom: scale(1.05)
- Button: scale(0.98)

## Components

### Buttons

#### Primary Button
- Background: Gold 500
- Text: White
- Padding: px-8 py-4
- Font: Sans, xs, uppercase, tracking-ultra-wide
- Hover: Gold 600
- Active: scale(0.98)

#### Secondary Button
- Background: Transparent
- Border: Gold 500
- Text: Gold 600
- Hover: Gold 500 background, white text

### Product Card
- Aspect ratio: 3:4
- Image zoom on hover
- Secondary image reveal on hover
- Quick Add button slides up from bottom
- Bestseller badge on top left
- Product name uppercase with letter-spacing
- Star rating with review count

### Navigation

#### Desktop
- Height: 16-20px
- Links: Centered, uppercase, xs
- Icons: Right aligned (search, cart)

#### Mobile
- Hamburger menu
- Full-screen overlay menu
- Slide-in cart drawer

### Forms
- Input: Light background with subtle border
- Focus: Border darkens, subtle background change
- Error: Red text below input

## Animations

### Transitions
- Default: 300ms ease
- Slow (images): 600ms ease
- Page elements: fade-in, slide-up

### Keyframes
```css
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideInRight {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
}
```

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 768px
- Desktop: 768px - 1024px
- Large Desktop: > 1024px

## Do's and Don'ts

### Do
- Use generous whitespace
- Keep content minimal and elegant
- Use warm photography with dark/neutral backgrounds
- Apply gold accent sparingly for maximum impact
- Use serif fonts for all headings and product names
- Keep animations subtle and smooth

### Don't
- Use loud colors or busy patterns
- Apply too many accent colors
- Use generic e-commerce imagery
- Overcrowd sections with too much content
- Use decorative fonts for body text
- Add unnecessary animations or effects
