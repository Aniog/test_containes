# Velmora Fine Jewelry - Design System

## Brand Essence
**Quiet luxury, warm editorial aesthetic.** Premium demi-fine jewelry that feels treasured rather than trend-driven. The design language should evoke the feeling of opening a jewelry box — intimate, precious, timeless.

---

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ivory | `#FDFBF7` | Primary background - warm, not stark white |
| Cream | `#F7F3ED` | Secondary background, cards |
| Sand | `#E8E2D9` | Borders, dividers, subtle elements |
| Stone | `#C4B9A8` | Muted text, placeholders |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Gold | `#B8956E` | Primary accent, CTAs, links, active states |
| Gold Dark | `#96734D` | Hover states for gold elements |
| Gold Light | `#D4B896` | Subtle gold tints, gradients |

### Text Colors
| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#1A1A1A` | Primary text, headings |
| Slate | `#4A4A4A` | Body text |
| Warm Gray | `#6B6560` | Secondary text, captions |

### Functional Colors
| Name | Hex | Usage |
|------|-----|-------|
| Success | `#4A7C59` | Success states |
| Error | `#9B4D4D` | Error states |

---

## Typography

### Font Families
- **Headings**: Cormorant Garamond (Google Fonts)
  - Weights: 400, 500, 600, 700
  - Italic variants: 400i, 500i
  - Use for: Logo, H1-H4, product names, section titles
  
- **Body & UI**: Inter (Google Fonts)
  - Weights: 300, 400, 500, 600
  - Use for: Body text, buttons, navigation, form elements

### Type Scale
| Element | Font | Size | Weight | Letter Spacing |
|---------|------|------|--------|----------------|
| Logo | Cormorant Garamond | 28px | 500 | 0.15em |
| H1 (Hero) | Cormorant Garamond | 64px / 48px mobile | 400 | 0.02em |
| H2 (Section) | Cormorant Garamond | 42px / 32px mobile | 400 | 0.02em |
| H3 (Card) | Cormorant Garamond | 24px / 20px mobile | 500 | 0.05em |
| H4 | Cormorant Garamond | 18px | 500 | 0.08em |
| Body | Inter | 16px | 400 | 0 |
| Body Small | Inter | 14px | 400 | 0 |
| Caption | Inter | 12px | 400 | 0.02em |
| Button | Inter | 14px | 500 | 0.08em |
| Nav Link | Inter | 13px | 400 | 0.06em |
| Product Name | Cormorant Garamond | 18px | 500 | 0.12em (UPPERCASE) |

---

## Spacing System

Base unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, icon gaps |
| sm | 8px | Small gaps, inline elements |
| md | 16px | Standard padding, gaps |
| lg | 24px | Section internal spacing |
| xl | 32px | Between sections |
| 2xl | 48px | Large section spacing |
| 3xl | 64px | Hero spacing |
| 4xl | 96px | Major section breaks |

---

## Visual Elements

### Borders & Dividers
- **Hairline divider**: 1px solid `#E8E2D9`
- **Card border**: 1px solid `#E8E2D9`
- **Focus ring**: 2px solid `#B8956E` with 2px offset

### Shadows
- **Subtle**: `0 2px 8px rgba(26, 26, 26, 0.04)`
- **Card hover**: `0 8px 24px rgba(26, 26, 26, 0.08)`
- **Modal/Drawer**: `0 16px 48px rgba(26, 26, 26, 0.12)`

### Border Radius
- **Pill (buttons)**: 2px (nearly rectangular for premium feel)
- **Card**: 4px
- **Input**: 2px
- **Image**: 2px

### Transitions
- **Default**: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Hover lift**: `transform 0.3s ease, box-shadow 0.3s ease`
- **Image swap**: `opacity 0.4s ease`

---

## Components

### Buttons

#### Primary Button (Accent CTA)
- Background: `#B8956E`
- Text: `#FFFFFF`
- Padding: 16px 32px
- Font: Inter 500, 14px, uppercase, letter-spacing 0.08em
- Border-radius: 2px
- Hover: Background `#96734D`, slight lift with shadow
- Active: Scale 0.98
- Disabled: Opacity 0.5, cursor not-allowed

#### Secondary Button (Outlined)
- Background: transparent
- Border: 1px solid `#B8956E`
- Text: `#B8956E`
- Same padding, font, radius as primary
- Hover: Background `#B8956E`, text `#FFFFFF`

#### Ghost Button
- Background: transparent
- Text: `#B8956E`
- No border
- Hover: Underline with gold color

### Product Card
- Background: `#FDFBF7`
- Border: 1px solid `#E8E2D9`
- Border-radius: 4px
- Image aspect ratio: 4:5 (portrait for jewelry)
- Product name: Cormorant Garamond, uppercase, letter-spacing 0.12em
- Price: Inter, regular weight
- Hover: 
  - Second image fades in
  - Card lifts with subtle shadow
  - "Add to Cart" button slides up from bottom

### Navigation
- Background (scrolled): `#FDFBF7` with subtle shadow
- Background (transparent/hero): No background, text white or light
- Links: Inter 13px, uppercase, letter-spacing 0.06em
- Hover: Gold color `#B8956E`
- Active: Gold color with subtle underline

### Form Inputs
- Background: `#FFFFFF`
- Border: 1px solid `#E8E2D9`
- Border-radius: 2px
- Padding: 14px 16px
- Focus: Border color `#B8956E`
- Placeholder: Color `#C4B9A8`

### Pills/Variants
- Background: transparent
- Border: 1px solid `#E8E2D9`
- Selected: Background `#B8956E`, text white, border `#B8956E`
- Padding: 10px 20px
- Border-radius: 2px

---

## Layout

### Container
- Max-width: 1400px
- Padding: 0 48px (desktop), 0 24px (tablet), 0 16px (mobile)
- Margin: 0 auto

### Grid
- Product grid: 5 columns (desktop), 3 (tablet), 2 (mobile)
- Section gaps: 96px (desktop), 64px (mobile)

### Breakpoints
| Name | Width | Usage |
|------|-------|-------|
| Mobile | < 640px | Phone |
| Tablet | 640px - 1024px | Small tablets |
| Desktop | > 1024px | Standard desktop |
| Large | > 1280px | Wide screens |

---

## Imagery

### Product Images
- Background: Dark neutral (#1A1A1A) or soft cream gradient
- Lighting: Warm, editorial, close-up
- Style: Clean, minimal props, focus on jewelry
- Aspect ratio: 4:5 (portrait) for grid, 1:1 for thumbnails

### Hero Images
- Full-bleed, edge-to-edge
- Warm lighting, lifestyle context
- Jewelry as hero element

### UGC/Reels Style
- Vertical 9:16 ratio
- Jewelry worn on model (ear, neck)
- Soft serif caption overlay
- Subtle gradient at bottom for text legibility

---

## Motion Philosophy

All animations should feel **quiet and confident**, never flashy:
- Ease: `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard)
- Duration: 200-400ms for interactions, 600-800ms for reveals
- Direction: Subtle fades, gentle lifts, refined slides
- No bouncing, no elastic, no overshoot

### Animation Types
1. **Page load**: Staggered fade-in, 100ms delay between elements
2. **Scroll reveal**: Fade up with slight translation (20px)
3. **Hover**: Subtle scale (1.02), shadow lift
4. **Image swap**: Crossfade opacity
5. **Drawer**: Slide in from right with backdrop fade
6. **Accordion**: Smooth height transition

---

## Accessibility

- Color contrast ratio: Minimum 4.5:1 for body text, 3:1 for large text
- Focus states: Visible gold outline on all interactive elements
- Reduced motion: Respect `prefers-reduced-motion`
- Screen reader: Proper ARIA labels, semantic HTML

---

## Do's and Don'ts

### Do
- Use generous whitespace to let jewelry breathe
- Maintain consistent gold accent throughout
- Use warm, editorial photography
- Keep CTAs prominent but not aggressive
- Ensure mobile-first responsive design
- Use subtle animations that feel premium

### Don't
- Use loud discount-style designs
- Apply too many colors competing with gold
- Use generic stock photography
- Cram too many elements on screen
- Use aggressive animations or bright colors
- Make CTAs look cheap or urgent
