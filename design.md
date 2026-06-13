# ARTITECT MACHINERY — Design System

## Brand Identity
- **Brand Name**: ARTITECT MACHINERY
- **Industry**: Industrial machinery (sheet metal folding machines)
- **Mood**: Precise, professional, elegant yet approachable
- **Positioning**: Premium industrial equipment manufacturer

## Color Palette
- **Background**: `#0B0D10` — Deep charcoal/near-black for primary surfaces
- **Surface**: `#14171C` — Slightly lighter charcoal for cards and sections
- **Primary Accent**: `#C8A264` — Warm gold/amber for CTAs, highlights, and key elements
- **Primary Accent Hover**: `#D4B87A` — Lighter gold for hover states
- **Text Primary**: `#F0EDE8` — Warm off-white for headings
- **Text Secondary**: `#A9ADB5` — Muted silver-grey for body text
- **Text Muted**: `#6B7079` — Dark grey for captions and subtle text
- **Border**: `#242830` — Subtle dark border for dividers
- **Success/Active**: `#C8A264` — Same gold for positive states

## Typography
- **Heading Font**: Playfair Display (serif) — Used for H1, H2, brand name
- **Body Font**: Inter (sans-serif) — Used for body text, navigation, buttons
- **H1**: 48px / 56px line-height, weight 600, letter-spacing -0.02em
- **H2**: 36px / 44px line-height, weight 500, letter-spacing -0.01em
- **H3**: 24px / 32px line-height, weight 500
- **Body**: 16px / 26px line-height, weight 400, color `#A9ADB5`
- **Caption**: 14px / 20px line-height, weight 400, color `#6B7079`
- **Nav Link**: 14px, weight 500, uppercase, letter-spacing 0.08em
- **Button**: 14px, weight 600, uppercase, letter-spacing 0.06em

## Spacing System
- Section padding: 96px vertical (desktop), 64px (mobile)
- Content max-width: 1200px
- Grid gap: 32px standard, 48px for larger gaps
- Component padding: 24px–32px

## Component Styles

### Buttons
- **Primary Button**: Background `#C8A264`, text `#0B0D10`, padding 14px 32px, border-radius 4px, uppercase, font-weight 600
  - Hover: Background `#D4B87A`, subtle scale(1.02)
- **Secondary Button**: Transparent background, border 1px solid `#C8A264`, text `#C8A264`
  - Hover: Background rgba(200,162,100,0.08)
- **Ghost Button**: No border, text `#A9ADB5`, with arrow icon
  - Hover: Text `#C8A264`, translate arrow right 4px

### Cards
- Background: `#14171C`
- Border: 1px solid `#242830`
- Border-radius: 8px
- Padding: 32px
- Shadow: none (flat, clean design)
- Hover: border-color `#3A3F4A`, subtle transform translateY(-4px)

### Navigation
- Fixed top, background transparent (scrolled: `#0B0D10` with backdrop-blur)
- Height: 80px
- Brand name on left, nav links center/right
- Nav links: uppercase, letter-spacing, hover color `#C8A264`
- Mobile: hamburger menu with slide-down panel

## Layout Principles
- Single-column sections with max-width container
- Generous whitespace between sections
- Clear visual hierarchy with gold accents
- Responsive: 2-column grids on desktop, single column on mobile
- Hero is full viewport height with background image
