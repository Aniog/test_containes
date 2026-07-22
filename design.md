# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Essence
- **Mood**: Quiet luxury, warm, editorial
- **Positioning**: Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- **Target Audience**: Women 25–45, gifting and self-purchase
- **Price Point**: Premium-but-accessible ($30–$120)

### Color Palette

#### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ivory Cream | `#FAF8F5` | Primary background |
| Warm White | `#FFFFFF` | Cards, elevated surfaces |
| Deep Charcoal | `#1A1A1A` | Primary text, headings |
| Warm Gray | `#6B6560` | Secondary text, muted elements |
| Light Taupe | `#E8E4DF` | Borders, dividers, subtle backgrounds |

#### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Antique Gold | `#C9A962` | Primary accent, CTAs, highlights |
| Rich Gold | `#B8860B` | Hover states, active elements |
| Pale Gold | `#F5F0E6` | Subtle gold tints, hover backgrounds |

### Typography

#### Font Families
- **Headings**: Cormorant Garamond (serif) - elegant, editorial
- **Body/UI**: Inter (sans-serif) - clean, modern, readable

#### Type Scale
| Element | Font | Size | Weight | Letter Spacing |
|---------|------|------|--------|----------------|
| Logo | Cormorant Garamond | 24px | 500 | 0.15em |
| H1 | Cormorant Garamond | 48px | 400 | 0.02em |
| H2 | Cormorant Garamond | 36px | 400 | 0.02em |
| H3 | Cormorant Garamond | 24px | 500 | 0.05em |
| Product Name | Cormorant Garamond | 18px | 500 | 0.12em UPPERCASE |
| Body | Inter | 16px | 400 | 0 |
| Small | Inter | 14px | 400 | 0 |
| Caption | Inter | 12px | 500 | 0.05em |
| Button | Inter | 14px | 500 | 0.08em |

### Spacing System
- Base unit: 4px
- Common spacings: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px
- Section padding: 80px (desktop), 48px (mobile)
- Component gaps: 16-24px

### Visual Elements
- **Borders**: 1px solid #E8E4DF (hairline dividers)
- **Border Radius**: 0px (sharp corners for editorial feel)
- **Shadows**: 
  - Subtle: `0 2px 8px rgba(26, 26, 26, 0.04)`
  - Card: `0 4px 20px rgba(26, 26, 26, 0.08)`
  - Hover: `0 8px 30px rgba(26, 26, 26, 0.12)`
- **Transitions**: 300ms ease-out (subtle, premium feel)

## Components

### Buttons

#### Primary Button (Accent)
- Background: `#C9A962` (Antique Gold)
- Text: `#FFFFFF` (White)
- Padding: 16px 32px
- Font: Inter 14px 500, letter-spacing 0.08em, UPPERCASE
- Hover: `#B8860B` (Rich Gold)
- Transition: all 300ms ease-out

#### Secondary Button (Outlined)
- Background: transparent
- Border: 1px solid `#1A1A1A`
- Text: `#1A1A1A`
- Padding: 14px 30px
- Hover: Background `#1A1A1A`, Text `#FFFFFF`

#### Ghost Button
- Background: transparent
- Text: `#1A1A1A`
- Padding: 8px 16px
- Hover: Background `#F5F0E6`

### Navigation
- Background: transparent over hero, solid `#FAF8F5` on scroll
- Height: 72px
- Logo: Left aligned, serif "VELMORA"
- Links: Center, Inter 14px 500, letter-spacing 0.08em, UPPERCASE
- Icons: Right aligned, search + cart

### Cards

#### Product Card
- Background: `#FFFFFF`
- Image: 4:5 aspect ratio
- Hover: Second image reveal, slight scale (1.02)
- Shadow: Subtle on hover
- Quick Add: Appears on hover

#### Category Tile
- Aspect ratio: 3:4
- Overlay: Gradient from bottom
- Label: Centered, serif, white text
- Hover: Scale 1.03, overlay lightens

### Form Elements
- Input border: 1px solid `#E8E4DF`
- Focus border: 1px solid `#C9A962`
- Padding: 14px 16px
- Border radius: 0px

### Trust Bar
- Background: `#F5F0E6` (Pale Gold)
- Height: 48px
- Items separated by: "·" character
- Text: Inter 12px 500, letter-spacing 0.1em, UPPERCASE, Warm Gray

## Layouts

### Page Structure
- Max width: 1440px
- Content max width: 1200px
- Side padding: 48px (desktop), 24px (mobile)
- Grid: 12 columns, 24px gap

### Section Spacing
- Section gap: 80px (desktop), 48px (mobile)
- Components within section: 32-48px gap

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Animations

### Transitions
- Default: `all 300ms ease-out`
- Image hover: `transform 500ms ease-out`
- Fade: `opacity 300ms ease-out`

### Hover Effects
- Cards: Scale 1.02, shadow increase
- Buttons: Color shift, slight lift
- Links: Underline reveal
- Images: Subtle zoom on container hover

## Iconography
- Style: Lucide React (thin stroke weight)
- Size: 20px (nav), 24px (features)
- Color: `#1A1A1A` (default), `#C9A962` (active/hover)

## Image Treatment
- Product images: Dark/neutral backgrounds
- Lifestyle images: Warm-lit, editorial feel
- Placeholder style: Subtle warm gray `#E8E4DF`

## Do's and Don'ts

### Do
- Use generous whitespace
- Keep CTAs subtle but clear
- Use high-quality editorial imagery
- Maintain consistent typography hierarchy
- Apply subtle animations that enhance UX
- Use the warm gold accent strategically

### Don't
- Use discount-style aggressive CTAs
- Add clutter or unnecessary elements
- Use generic stock photo aesthetics
- Apply harsh colors or jarring contrasts
- Overcrowd sections with too many elements
- Use rounded corners on cards/buttons (editorial feel)
