# Velmora Fine Jewelry - Design System

## Visual Direction
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry aesthetic.
- **Reference**: High-end fashion magazines, luxury boutique interiors, editorial product photography

## Color Palette

### Primary Colors
- **Deep Charcoal** (base): `#1a1814` - Rich, warm dark background
- **Warm Ivory** (light): `#f8f6f3` - Soft cream for light sections
- **Antique Gold** (accent): `#c9a962` - Sophisticated gold accent

### Secondary Colors
- **Soft Sand**: `#e8e4de` - Neutral borders and dividers
- **Warm Gray**: `#6b6560` - Muted text and secondary elements
- **Deep Brown**: `#2d2926` - Rich secondary dark

### Text Colors
- **Primary Text (light bg)**: `#1a1814`
- **Secondary Text**: `#6b6560`
- **Primary Text (dark bg)**: `#f8f6f3`
- **Accent Text**: `#c9a962`

## Typography

### Font Families
- **Headings**: Cormorant Garamond (serif) - elegant, editorial
- **Body/UI**: Inter (sans-serif) - clean, modern readability

### Type Scale
- **Display**: 4rem/5rem, Cormorant Garamond, tracking-widest
- **H1**: 3rem, Cormorant Garamond
- **H2**: 2rem, Cormorant Garamond
- **H3**: 1.5rem, Cormorant Garamond
- **Product Name**: 0.875rem, uppercase, tracking-[0.2em], Inter Semi-bold
- **Body**: 1rem/1.125rem, Inter Regular
- **Small**: 0.875rem, Inter Regular
- **Caption**: 0.75rem, Inter Medium, tracking-wide

## Spacing & Layout
- **Container max-width**: 1440px
- **Section padding**: 80px vertical (desktop), 48px (mobile)
- **Grid gap**: 24px standard, 16px tight
- **Generous whitespace**: minimum 40px padding on all containers

## UI Elements

### Buttons
- **Primary**: Solid Antique Gold (#c9a962), white text, rounded-sm
- **Secondary**: Outlined with Antique Gold border, gold text
- **Hover**: Subtle brightness increase, 200ms transition
- **Padding**: 16px 32px standard, 12px 24px compact

### Cards
- **Product cards**: White/light bg, subtle shadow on hover
- **Border radius**: 4px (subtle, not rounded)
- **Shadow (hover)**: 0 8px 30px rgba(0,0,0,0.08)

### Dividers
- **Hairline dividers**: 1px #e8e4de
- **Used for**: section separation, trust bar, footer

### Navigation
- **Transparent on hero**: Text white, blend with image
- **Solid on scroll**: Deep charcoal background
- **Links**: Subtle uppercase, tracking-wide, hover underline animation

## Animations & Transitions
- **Duration**: 300ms standard, 200ms for micro-interactions
- **Easing**: ease-out for most transitions
- **Hover effects**: Opacity shifts, subtle scale (1.02), image crossfade
- **Page transitions**: Fade-in on scroll (optional)

## Images
- **Aspect ratios**: 
  - Hero: 16:9 or full viewport
  - Product cards: 4:5 (portrait)
  - UGC/Reels: 9:16 (vertical)
  - Category tiles: 1:1 or 4:3
- **Treatment**: Warm lighting, neutral/dark backgrounds, editorial feel

## Component Patterns

### Product Card
- Image container with hover overlay showing second image
- Product name in uppercase with letter-spacing
- Price in accent color
- Quick "Add to Cart" button reveals on hover
- Rating stars (small)

### Trust Bar
- Horizontal strip with icons and text
- Thin top/bottom borders
- Subtle background

### Accordions
- Clean expand/collapse with rotation arrow
- Minimal borders
- Smooth height animation

### Newsletter Form
- Inline email + button
- Accent background block
- Placeholder text styling

## Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## Do's
- Use generous whitespace throughout
- Keep images warm and editorial
- Maintain consistent letter-spacing on headings
- Use thin, elegant dividers
- Ensure strong contrast for accessibility

## Don'ts
- Don't use bright/neon accent colors
- Don't overcrowd layouts
- Don't use generic e-commerce styling
- Don't use harsh shadows or rounded corners
- Don't use ALL CAPS body text
