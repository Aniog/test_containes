# Velmora Fine Jewelry - Design System

## Visual Identity

### Color Palette
- **Primary Background**: `#FAF9F7` (warm off-white/cream)
- **Secondary Background**: `#F5F3EF` (warm light gray)
- **Dark Background**: `#1A1815` (warm charcoal)
- **Primary Text**: `#1A1815` (warm charcoal)
- **Secondary Text**: `#6B6560` (warm gray)
- **Accent Gold**: `#C9A962` (warm gold)
- **Accent Gold Hover**: `#B8954F` (darker gold)
- **Border Color**: `#E8E4DE` (warm light border)
- **White**: `#FFFFFF`

### Typography
- **Headings**: Cormorant Garamond (serif)
  - H1: 56px / 64px line-height / font-weight 500
  - H2: 40px / 48px line-height / font-weight 500
  - H3: 28px / 36px line-height / font-weight 500
  - H4: 20px / 28px line-height / font-weight 500
- **Body**: Manrope (sans-serif)
  - Body: 16px / 24px line-height / font-weight 400
  - Small: 14px / 20px line-height / font-weight 400
  - Caption: 12px / 16px line-height / font-weight 500
- **Product Names**: Cormorant Garamond, UPPERCASE, letter-spacing 0.15em

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop), 16px (mobile)

### Visual Effects
- **Shadows**: 
  - Card: `0 4px 20px rgba(26, 24, 21, 0.08)`
  - Hover: `0 8px 30px rgba(26, 24, 21, 0.12)`
  - Button: `0 4px 12px rgba(201, 169, 98, 0.3)`
- **Border Radius**: 0px (sharp, editorial) for buttons, 4px for cards
- **Dividers**: 1px solid #E8E4DE (hairline)
- **Transitions**: 300ms ease-out for all interactive elements

### Components

#### Buttons
- **Primary**: 
  - Background: #C9A962
  - Text: #FFFFFF, uppercase, letter-spacing 0.1em, font-size 13px
  - Padding: 16px 32px
  - Hover: #B8954F, slight shadow
- **Secondary**:
  - Background: transparent
  - Border: 1px solid #C9A962
  - Text: #1A1815
  - Hover: background #C9A962, text white

#### Product Card
- Image aspect ratio: 4:5
- Hover: reveal second image with fade
- Quick add button appears on hover
- Product name: uppercase, letter-spacing 0.15em

#### Navigation
- Transparent over hero, solid #FAF9F7 on scroll
- Logo: serif, letter-spacing 0.2em
- Links: sans-serif, 14px, letter-spacing 0.05em

#### Form Inputs
- Border: 1px solid #E8E4DE
- Focus: border-color #C9A962
- Padding: 14px 16px
- Font: Manrope 14px

## Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px