# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
- **Quiet luxury, warm, editorial**
- Premium demi-fine jewelry
- NOT loud, NOT discount-looking, NOT generic e-commerce

### Color Palette
A warm, sophisticated palette that flatters gold jewelry:

| Role | Color | Hex |
|------|-------|-----|
| Background Primary | Warm Ivory | `#FAF8F5` |
| Background Secondary | Soft Cream | `#F5F1EB` |
| Text Primary | Rich Charcoal | `#1A1A1A` |
| Text Secondary | Warm Gray | `#6B6560` |
| Accent Primary | Burnished Gold | `#B8965A` |
| Accent Hover | Deep Gold | `#9A7B48` |
| Border/Divider | Soft Taupe | `#E5E0D8` |
| Card Background | Pure White | `#FFFFFF` |
| Success | Muted Sage | `#7A9E7E` |
| Error | Soft Rose | `#C47A7A` |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) |
|---------|------|--------|----------------|---------------|
| Logo | Cormorant Garamond | 500 | 28px | 24px |
| H1 (Hero) | Cormorant Garamond | 400 | 56px | 36px |
| H2 (Section) | Cormorant Garamond | 400 | 40px | 28px |
| H3 (Product) | Cormorant Garamond | 500 | 20px | 18px |
| Product Name | Cormorant Garamond | 500 | 18px | 16px |
| Body | Manrope | 400 | 16px | 15px |
| Body Small | Manrope | 400 | 14px | 13px |
| Button | Manrope | 500 | 14px | 14px |
| Caption | Manrope | 400 | 12px | 12px |

### Product Names
- **UPPERCASE** with letter-spacing: `0.15em`
- Font: Cormorant Garamond, weight 500

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card padding: 24px
- Grid gap: 24px (desktop), 16px (mobile)

### Visual Effects
- **Shadows**: Soft, subtle (`0 4px 20px rgba(0,0,0,0.06)`)
- **Borders**: Thin hairline dividers (1px solid #E5E0D8)
- **Hover transitions**: 300ms ease-out
- **Border radius**: 0px for buttons (sharp, editorial), 4px for cards
- **Images**: Editorial style, warm-lit, generous whitespace

### Components

#### Buttons
- **Primary**: Burnished Gold background, white text, no border-radius
- **Secondary**: Transparent with Burnished Gold border, Burnished Gold text
- **Hover**: Darken by 10%, subtle lift shadow

#### Cards
- White background
- Subtle shadow on hover
- Image aspect ratio: 4:5 (portrait, editorial)
- Quick "Add to Cart" appears on hover

#### Dividers
- Thin hairline: `1px solid #E5E0D8`
- Used between sections and within components

#### Form Inputs
- Clean border, no border-radius
- Focus: Gold accent border
- Placeholder: Warm Gray

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Animation Guidelines
- **Page transitions**: Fade in (200ms)
- **Hover effects**: 300ms ease-out
- **Scroll animations**: Subtle fade-up for sections
- **Cart drawer**: Slide from right (300ms)
- **Image hover**: Smooth crossfade between images