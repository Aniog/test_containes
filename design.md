# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood
- Quiet luxury, warm, editorial
- Premium demi-fine jewelry aesthetic
- NOT loud, NOT discount-looking, NOT generic e-commerce

### Color Palette
- **Primary Background**: `#FAF9F7` (warm off-white/cream)
- **Secondary Background**: `#1A1814` (deep warm charcoal)
- **Text Primary**: `#1A1814` (deep warm charcoal)
- **Text Secondary**: `#6B6560` (warm gray)
- **Text on Dark**: `#FAF9F7` (cream)
- **Accent Gold**: `#C9A962` (warm muted gold)
- **Accent Gold Hover**: `#B8954F` (deeper gold)
- **Border/Divider**: `#E8E5E0` (warm light gray)
- **Success**: `#4A7C59` (muted green)
- **Error**: `#A65D57` (muted terracotta)

### Typography
- **Headings**: Cormorant Garamond (serif)
  - H1: 56px / 64px line-height / font-weight 500
  - H2: 40px / 48px line-height / font-weight 500
  - H3: 28px / 36px line-height / font-weight 500
  - Product names: 18px / uppercase / 0.15em letter-spacing / font-weight 500
- **Body**: Manrope (sans-serif)
  - Body: 16px / 26px line-height / font-weight 400
  - Small: 14px / 22px line-height
  - Caption: 12px / 18px line-height / font-weight 500 / uppercase / 0.1em letter-spacing

### Spacing System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1280px
- Grid gap: 24px (desktop), 16px (mobile)

### Visual Effects
- **Shadows**: 
  - Card: `0 4px 20px rgba(26, 24, 20, 0.08)`
  - Hover: `0 8px 30px rgba(26, 24, 20, 0.12)`
  - Button: `0 2px 8px rgba(201, 169, 98, 0.3)`
- **Border radius**: 0px (sharp, editorial) for buttons, 4px for cards
- **Dividers**: 1px solid #E8E5E0 (hairline)
- **Transitions**: 300ms ease-out for all interactive elements

### Components

#### Buttons
- **Primary**: 
  - Background: #C9A962
  - Text: #1A1814
  - Padding: 16px 32px
  - Font: 14px uppercase, 0.1em letter-spacing, font-weight 600
  - Hover: background #B8954F
- **Secondary/Outline**:
  - Border: 1px solid #1A1814
  - Text: #1A1814
  - Background: transparent
  - Hover: background #1A1814, text #FAF9F7

#### Product Cards
- Image aspect ratio: 4:5 (portrait)
- Hover: reveal second image with 300ms fade
- Quick add button appears on hover
- Product name: uppercase, wide letter-spacing

#### Form Inputs
- Border: 1px solid #E8E5E0
- Focus: border-color #C9A962
- Padding: 14px 16px
- Font: 16px (prevent zoom on mobile)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Do's and Don'ts
- DO: Use generous whitespace, large imagery, thin dividers
- DO: Keep accent color restrained, use for CTAs only
- DO: Use subtle hover transitions and soft shadows
- DON'T: Use bright/chunky colors, loud discount badges
- DON'T: Use rounded corners on buttons (keep sharp/editorial)
- DON'T: Overcrowd layouts - let content breathe