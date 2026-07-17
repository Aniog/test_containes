# Velmora Fine Jewelry — Design System

## Visual Identity

### Brand Essence
**Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

### Color Palette

#### Primary Colors
- **Champagne Gold** (accent): `#C9A96E` — Warm metallic accent for CTAs, highlights
- **Deep Charcoal** (base): `#1A1A1A` — Primary text, headers
- **Warm Ivory** (background): `#FAF8F5` — Primary background, cards

#### Secondary Colors
- **Soft Cream**: `#F5F2ED` — Secondary background, sections
- **Taupe**: `#8B7E6A` — Secondary text, muted elements
- **Muted Gold**: `#D4C4A8` — Subtle accents, borders

#### Neutrals
- **Pure White**: `#FFFFFF` — Cards, overlays
- **Light Gray**: `#E8E4DE` — Dividers, borders
- **Medium Gray**: `#9A948A` — Placeholder text, disabled states

#### Semantic
- **Success**: `#4A7C59` — Success states
- **Error**: `#9B4D4D` — Error states

### Typography

#### Headings & Display
- **Primary Font**: Cormorant Garamond (serif)
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Use for: Logo, hero headlines, product names, section titles
  - Letter-spacing: 0.08em for uppercase product names
  - Line-height: 1.1-1.2 for headlines

#### Body & UI
- **Secondary Font**: Inter (sans-serif)
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
  - Use for: Body text, navigation, buttons, form elements
  - Letter-spacing: 0.02em for body text
  - Line-height: 1.5-1.6 for readability

### Spacing System
Based on 8px grid:
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `5xl`: 128px

### Component Specifications

#### Buttons
- **Primary Button**
  - Background: `#C9A96E`
  - Text: `#FFFFFF` (white)
  - Padding: 16px 32px
  - Border-radius: 0px (sharp edges for premium feel)
  - Font: Inter Medium, 14px, uppercase, letter-spacing 0.1em
  - Hover: Background darkens to `#B8955A`
  - Transition: 200ms ease

- **Secondary/Outline Button**
  - Background: transparent
  - Border: 1px solid `#C9A96E`
  - Text: `#C9A96E`
  - Same padding and typography as primary
  - Hover: Background fills with `#C9A96E`, text becomes white

- **Ghost Button**
  - Background: transparent
  - Border: none
  - Text: `#1A1A1A`
  - Hover: Underline appears

#### Cards
- Background: `#FFFFFF`
- Border-radius: 0px (sharp for premium)
- Shadow: `0 2px 8px rgba(26, 26, 26, 0.06)`
- Hover shadow: `0 8px 24px rgba(26, 26, 26, 0.1)`
- Transition: shadow 300ms ease

#### Dividers
- Hairline: 1px solid `#E8E4DE`
- Used for section separation

#### Form Inputs
- Border: 1px solid `#E8E4DE`
- Border-radius: 0px
- Padding: 12px 16px
- Focus: Border color `#C9A96E`, no outline
- Placeholder: `#9A948A`

#### Pills/Tags
- Background: `#F5F2ED`
- Border-radius: 100px (pill shape)
- Padding: 6px 16px
- Font: Inter, 12px, uppercase, letter-spacing 0.05em

### Shadows
- `shadow-sm`: `0 1px 2px rgba(26, 26, 26, 0.05)`
- `shadow-md`: `0 2px 8px rgba(26, 26, 26, 0.06)`
- `shadow-lg`: `0 8px 24px rgba(26, 26, 26, 0.1)`
- `shadow-xl`: `0 16px 48px rgba(26, 26, 26, 0.12)`

### Transitions
- Default: 200ms ease
- Slow: 300ms ease
- Hover lift: translateY(-2px)

### Border Radius
- `rounded-none`: 0px (premium, editorial feel)
- `rounded-full`: 9999px (for pills/badges)

## Layout Specifications

### Container
- Max-width: 1280px
- Padding: 24px (mobile), 48px (desktop)
- Centered with auto margins

### Grid
- Product grid: 2 columns (mobile), 3-4 columns (tablet), 4-5 columns (desktop)
- Section spacing: 96px vertical (desktop), 64px (mobile)

### Navigation
- Height: 72px (desktop), 64px (mobile)
- Transparent over hero with white text
- Solid on scroll: Background `#FAF8F5` with shadow
- Logo: Cormorant Garamond, 24px, uppercase

## Image Guidelines

### Product Photography
- Background: Dark charcoal `#2A2A2A` or warm neutral `#E8E4DE`
- Aspect ratio: 4:5 (portrait)
- Warm lighting with gold reflections
- Clean, minimal props

### Hero Imagery
- Full-bleed
- Lifestyle shots with models
- Warm, editorial lighting
- Close-ups of jewelry details

### UGC/Reel Style
- Vertical 9:16 aspect ratio
- Real people wearing jewelry
- Soft caption overlay
- Subtle branding

## Accessibility

### Color Contrast
- All text meets WCAG AA standards
- Primary text on backgrounds: minimum 4.5:1
- Large text (18px+): minimum 3:1
- Interactive elements: minimum 3:1

### Focus States
- Visible focus indicators
- 2px solid `#C9A96E` outline
- Offset 2px from element

## Motion & Animation

### Micro-interactions
- Button hover: scale(1.02) + color shift
- Card hover: shadow increase + subtle lift
- Image hover on products: crossfade to alternate image
- Navigation links: underline slides in from left

### Page Transitions
- Fade in on scroll (Intersection Observer)
- Staggered animations for grid items
- Smooth scroll behavior

### Loading States
- Skeleton screens with shimmer effect
- Opacity pulse for pending content

## Do's and Don'ts

### DO
- Use generous whitespace
- Keep design minimal and editorial
- Use warm, inviting imagery
- Maintain consistent spacing
- Use uppercase for product names with wide letter-spacing
- Create premium-feeling buttons with solid or outlined accent

### DON'T
- Use loud, discount-looking elements
- Use generic stock imagery
- Add excessive decorative elements
- Use rounded corners everywhere (keep it sharp/premium)
- Overcrowd layouts
- Use too many accent colors
