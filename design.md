# Velmora Fine Jewelry - Design System

## Brand Identity
**Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — not loud, not discount-looking, not generic e-commerce.

## Color Palette

### Primary Colors
| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#FAF7F2` | Primary background |
| Ivory | `#F5F1EB` | Secondary background, cards |
| Warm White | `#FFFDF9` | Highlights, contrast areas |
| Sand | `#E8E2D9` | Borders, dividers, subtle backgrounds |
| Taupe | `#C4B8A9` | Muted elements, placeholders |

### Neutral Colors
| Name | Hex | Usage |
|------|-----|-------|
| Warm Gray | `#9A8E82` | Secondary text, icons |
| Charcoal | `#3D3833` | Primary text, buttons |
| Espresso | `#2A2520` | Dark backgrounds, footer |

### Accent Colors
| Name | Hex | Usage |
|------|-----|-------|
| Gold Light | `#D4AF7A` | Hover states, highlights |
| Gold | `#C9A66B` | Primary accent, CTAs, badges |
| Gold Dark | `#A68B5B` | Hover states on gold |
| Gold Deep | `#8B7355` | Subtle gold accents |

## Typography

### Font Families
- **Headings**: Cormorant Garamond (serif) — elegant, editorial
- **Body/UI**: Manrope (sans-serif) — clean, modern, readable

### Type Scale
- **Logo**: 2xl-3xl, serif, tracking-wide
- **H1**: 5xl-7xl, serif
- **H2**: 3xl-4xl, serif
- **H3**: 2xl-3xl, serif
- **Body**: base-lg, sans-serif
- **Small**: sm-xs, sans-serif
- **Product Names**: uppercase, tracking-[0.15em]

## Spacing System
- Section padding: `clamp(4rem, 8vw, 8rem)`
- Container padding: `clamp(1rem, 5vw, 2rem)`
- Gap between elements: 4, 6, 8, 12, 16

## Visual Elements

### Buttons
- **Primary** (filled): bg-charcoal, text-white, px-8 py-4
- **Outline**: border-charcoal, text-charcoal, hover fills
- **Gold Accent**: bg-gold, text-white

### Dividers
- Hairline: 1px solid sand (`#E8E2D9`)

### Shadows
- Card hover: `shadow-xl` with `translateY(-4px)`
- Buttons hover: `shadow-lg`

### Animations
- Transition duration: 300ms (standard), 500-700ms (images)
- Fade-in: opacity 0→1, translateY 20px→0

## Component Patterns

### Product Cards
- Image aspect ratio: 3:4
- Hover reveals secondary image
- Quick add button slides up on hover

### Navigation
- Transparent on hero, solid on scroll
- Center links with underline hover animation
- Cart icon with item count badge

### Cart Drawer
- Slides in from right
- Backdrop overlay
- Quantity controls with +/- buttons

## Do's and Don'ts

### Do
- Use generous whitespace throughout
- Use warm cream backgrounds (not white)
- Use gold accents sparingly for emphasis
- Use serif fonts for headings, sans for UI
- Use uppercase with letter-spacing for product names
- Use hairline dividers for separation
- Use soft shadows and transitions

### Don't
- Don't use bright whites (#FFFFFF) as primary background
- Don't use multiple accent colors together
- Don't use harsh shadows or borders
- Don't use decorative fonts for body text
- Don't overcrowd sections with content
- Don't use discount or sale styling
- Don't use generic e-commerce patterns
