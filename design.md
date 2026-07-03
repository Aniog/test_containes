# Velmora Fine Jewelry - Design System

## Visual Identity

### Mood & Aesthetic
- **Style**: Quiet luxury, warm, editorial
- **Positioning**: Premium demi-fine jewelry
- **Attitude**: Refined but approachable, NOT loud, NOT discount-looking, NOT generic e-commerce

### Color Palette

#### Primary Palette
- **Ivory Cream** `#FAF8F5` - Primary background, warm neutral base
- **Deep Charcoal** `#1A1A1A` - Primary text, elegant dark base
- **Warm Gold** `#B8860B` - Primary accent, CTAs, highlights
- **Champagne** `#D4AF37` - Secondary gold accent, hover states
- **Soft Taupe** `#E8E2D9` - Card backgrounds, dividers
- **Warm Gray** `#6B6560` - Secondary text, descriptions
- **Blush Pink** `#E8D4C4` - Subtle accent, hover backgrounds
- **Pure White** `#FFFFFF` - Cards, overlays

#### Usage Guidelines
- Background: Primarily Ivory Cream (#FAF8F5)
- Text: Deep Charcoal (#1A1A1A) for primary, Warm Gray (#6B6560) for secondary
- CTAs: Warm Gold (#B8860B) with white text or outlined variants
- Cards: White with subtle shadows
- Dividers: Soft Taupe (#E8E2D9) hairlines

### Typography

#### Font Families
- **Headings & Product Names**: Cormorant Garamond (Google Fonts)
  - Elegant serif with high contrast
  - Weights: 400 (regular), 500 (medium), 600 (semibold)
  - Use for: Logo, hero headlines, section titles, product names
  
- **Body & UI**: Manrope (Google Fonts)
  - Clean, modern sans-serif
  - Weights: 300 (light), 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
  - Use for: Body text, navigation, buttons, form labels

#### Type Scale
- **Hero Headline**: 48px-72px, Cormorant Garamond 400, uppercase with 0.15em letter-spacing
- **Section Headings**: 32px-40px, Cormorant Garamond 500
- **Product Names**: 14px-16px, Cormorant Garamond 600, UPPERCASE, 0.1em letter-spacing
- **Body Text**: 15px-16px, Manrope 400, 1.6 line-height
- **Small Text/Labels**: 12px-13px, Manrope 500, 0.05em letter-spacing, uppercase
- **Prices**: Manrope 600, 18px-20px

### Spacing System
- **Base unit**: 8px
- **Section padding**: 80px-120px vertical (desktop), 48px-64px (mobile)
- **Container max-width**: 1280px
- **Grid gaps**: 24px-32px
- **Card padding**: 16px-24px
- **Element spacing**: 8px, 16px, 24px, 32px, 48px, 64px

### Component Guidelines

#### Buttons
- **Primary CTA**: 
  - Background: Warm Gold (#B8860B)
  - Text: White, Manrope 600, uppercase, 0.1em letter-spacing
  - Padding: 16px 32px
  - Border-radius: 0px (sharp edges for premium feel)
  - Hover: Champagne (#D4AF37)
  
- **Secondary/Outlined**:
  - Background: transparent
  - Border: 1px solid Warm Gold (#B8860B)
  - Text: Warm Gold, Manrope 600, uppercase
  - Hover: Light gold fill with gold border

#### Cards
- Background: White (#FFFFFF)
- Border-radius: 0px (sharp, architectural)
- Shadow: 0 2px 8px rgba(0,0,0,0.06)
- Hover shadow: 0 8px 24px rgba(0,0,0,0.1)
- Transition: all 0.3s ease

#### Dividers
- Style: 1px solid, Soft Taupe (#E8E2D9)
- Alternative: Hairline gradient fade

#### Form Elements
- Border: 1px solid #E8E2D9
- Focus: 2px solid Warm Gold
- Border-radius: 0px

### Motion & Animation

#### Principles
- Subtle, refined transitions
- Never jarring or playful
- Duration: 200ms-400ms
- Easing: ease-out or cubic-bezier(0.4, 0, 0.2, 1)

#### Specific Animations
- **Hover states**: 0.3s ease
- **Page transitions**: 0.4s ease-out
- **Image reveals**: 0.5s ease with slight scale
- **Cart drawer**: slide from right, 0.3s ease

### Imagery Guidelines

#### Photography Style
- **Lighting**: Warm, soft, editorial
- **Backgrounds**: Dark neutral (#1A1A1A), ivory, or seamless
- **Focus**: Close-up product shots, lifestyle worn shots
- **Aspect ratios**: 
  - Hero: 16:9 or 4:5
  - Product cards: 4:5 or 1:1
  - UGC: 9:16 (vertical)

#### Stock Images Strategy
- Jewelry on dark/ivory backgrounds
- Warm-lit editorial shots
- Close-up detail shots
- Lifestyle/worn imagery

### Responsive Strategy
- **Mobile-first** approach
- **Breakpoints**:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- **Touch targets**: Minimum 44px
- **Images**: Responsive with srcset considerations

### Accessibility
- WCAG AA contrast ratios minimum
- Focus states on all interactive elements
- Screen reader friendly labels
- Keyboard navigation support

## Component Patterns

### Navigation
- Transparent on hero, solid on scroll
- Logo: Cormorant Garamond, uppercase
- Links: Manrope, uppercase, 0.1em letter-spacing
- Icons: Lucide React (Search, ShoppingBag)

### Product Cards
- Square or 4:5 image
- Product name below (serif, uppercase)
- Price below name
- Hover: Second image reveal + "Add to Cart"

### Accordions
- Clean, minimal styling
- Plus/minus or chevron indicator
- Smooth height transitions

### Trust Badges
- Inline icons with text
- Subtle dividers
- Uppercase, small text

### Testimonials
- Star ratings (gold)
- Quote in italic serif
- Customer name + initial
- Subtle card styling

## Do's and Don'ts

### Do
- Use generous whitespace
- Keep design consistent across pages
- Use warm gold accents sparingly
- Show products on quality imagery
- Maintain editorial feel
- Use uppercase for product names

### Don't
- Use harsh contrast colors
- Overcrowd content
- Use generic stock photography
- Add unnecessary decoration
- Use playful animations
- Mix font styles inconsistently
