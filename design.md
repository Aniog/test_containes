# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Essence
**Quiet luxury** — the kind of understated elegance that whispers rather than shouts. Think editorial fashion magazine meets intimate jewelry boutique. Every element should feel intentional, refined, and warm.

### Color Palette

#### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Ivory | `#FAF7F2` | Primary background, cards |
| Warm White | `#FFFFFF` | Clean surfaces, modals |
| Charcoal | `#1A1A1A` | Primary text, dark backgrounds |
| Warm Gray | `#4A4543` | Secondary text |
| Soft Gray | `#8A8583` | Muted text, borders |
| Hairline | `#E8E4DF` | Dividers, subtle borders |

#### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Gold Primary | `#C9A962` | Primary accent, CTAs, highlights |
| Gold Light | `#D4BC7E` | Hover states, secondary accents |
| Gold Dark | `#A68B4B` | Active states, pressed buttons |
| Blush | `#E8D5C4` | Subtle warmth, backgrounds |

### Typography

#### Font Families
- **Display/Headings**: Cormorant Garamond (400, 500, 600) — elegant serif with editorial presence
- **Body/UI**: Inter (300, 400, 500, 600) — clean, highly legible sans-serif
- **Fallbacks**: Georgia, serif / system-ui, sans-serif

#### Type Scale
| Element | Font | Size | Weight | Letter-spacing |
|---------|------|------|--------|----------------|
| Logo | Cormorant Garamond | 28px | 500 | 0.15em |
| H1 (Hero) | Cormorant Garamond | 56px | 400 | 0.02em |
| H2 (Section) | Cormorant Garamond | 42px | 400 | 0.02em |
| H3 (Card) | Cormorant Garamond | 24px | 400 | 0.02em |
| Product Name | Cormorant Garamond | 18px | 500 | 0.12em UPPERCASE |
| Body | Inter | 16px | 400 | 0 |
| Small | Inter | 14px | 400 | 0 |
| Caption | Inter | 12px | 400 | 0.02em |
| Button | Inter | 14px | 500 | 0.08em uppercase |

### Spacing System
Base unit: 4px
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px
- 4xl: 96px

### Borders & Radii
- Hairline dividers: 1px `#E8E4DF`
- Button borders: 1.5px solid
- Border radius: 0px (sharp) for buttons, 2px for inputs, 4px for cards
- Focus ring: 2px offset, gold accent

### Shadows
| Name | Value | Usage |
|------|-------|-------|
| Subtle | `0 1px 3px rgba(26,26,26,0.06)` | Cards at rest |
| Medium | `0 4px 12px rgba(26,26,26,0.08)` | Cards hover, dropdowns |
| Elevated | `0 8px 24px rgba(26,26,26,0.12)` | Modals, drawers |

### Motion Philosophy
Transitions should feel **liquid and unhurried** — never jarring. Everything eases in gently.
- Default ease: `cubic-bezier(0.4, 0, 0.2, 1)`
- Duration: 200ms for micro-interactions, 400ms for reveals
- Hover transforms: subtle scale (1.02-1.05) or opacity shifts
- Scroll reveals: fade-up with 30px offset

## Component Specifications

### Navigation
- **Default state**: Transparent with white/dark text over hero imagery
- **Scrolled state**: White background with soft shadow, transitions over 200ms
- **Logo**: "VELMORA" in Cormorant Garamond, uppercase, letter-spaced
- **Links**: Inter 500, uppercase, 0.08em tracking, hover underline offset animation
- **Icons**: 24px, stroke-width 1.5, current text color

### Buttons
#### Primary Button
- Background: `#C9A962` (Gold Primary)
- Text: `#FFFFFF` or `#1A1A1A` (for lighter gold variants)
- Padding: 14px 32px
- Border: none
- Hover: `#D4BC7E` with slight lift shadow
- Active: `#A68B4B` with pressed shadow

#### Secondary/Outline Button
- Background: transparent
- Border: 1.5px solid `#C9A962`
- Text: `#C9A962`
- Hover: filled background `#C9A962`, text becomes white
- Active: `#A68B4B` border

#### Ghost Button
- Background: transparent
- Border: none
- Text: `#1A1A1A`
- Hover: underline offset animation

### Product Cards
- Background: white
- Border: none (clean)
- Shadow: subtle at rest, medium on hover
- Image aspect ratio: 4:5 (portrait)
- Second image reveals on hover with crossfade (300ms)
- Quick add button: appears on hover, full-width bottom overlay
- Product name: uppercase, letter-spaced, Cormorant Garamond
- Price: Inter, standard weight

### Form Elements
- Input border: 1px `#E8E4DF`
- Focus border: 1.5px `#C9A962`
- Placeholder: `#8A8583`
- Error state: subtle red tint, error message below
- Border radius: 2px

### Trust Bar
- Background: `#FAF7F2`
- Border-top: 1px `#E8E4DF`
- Icons: 16px, gold accent
- Text: Inter 14px, `#4A4543`

### Testimonial Cards
- Background: white with subtle shadow
- Stars: `#C9A962` filled
- Quote: Inter italic
- Attribution: Inter, initial + last name

### Accordions
- Border-bottom: 1px `#E8E4DF`
- Icon: Plus/Minus, rotates on open
- Content: fade-in reveal
- Padding: generous (24px vertical)

## Page Layouts

### Homepage
- Full-bleed hero: 100vh on desktop, auto on mobile
- Section spacing: 80-120px between major sections
- Container max-width: 1400px, centered with 40px padding
- Grid gutters: 24px

### Product Grid
- Desktop: 4 columns
- Tablet: 3 columns  
- Mobile: 2 columns
- Gap: 24px

### Product Detail
- 50/50 split desktop, stacked mobile
- Gallery left, details right
- Sticky details on scroll (desktop)

## Imagery Guidelines
- Background colors for jewelry: deep charcoal `#1A1A1A`, warm charcoal `#2D2926`, or neutral `#F5F3EF`
- Lighting style: warm, soft, editorial — think high-end fashion
- Aspect ratios: Hero 16:9, Product 4:5, UGC 9:16

## Accessibility
- Minimum contrast ratio: 4.5:1 for body text
- Focus states: visible gold outline
- Touch targets: minimum 44px
- Screen reader: semantic HTML, proper ARIA labels

## Do's and Don'ts

### Do
- Use generous whitespace — let content breathe
- Keep animations subtle and purposeful
- Use gold accent sparingly for maximum impact
- Maintain consistent type hierarchy
- Create visual rhythm with varied section heights

### Don't
- Use more than 2 font weights per element
- Overcrowd with decorative elements
- Use bright/discount-feeling colors
- Add drop shadows that are too heavy
- Use aggressive animations or movements
- Mix serif and sans-serif randomly — follow the hierarchy
