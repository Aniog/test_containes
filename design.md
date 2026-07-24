# Velmora Fine Jewelry — Design System

## Brand Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette

### Base Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-bg` | `#FAF8F5` | Page background (warm cream) |
| `velmora-surface` | `#FFFFFF` | Cards, panels, modals |
| `velmora-surface-hover` | `#F5F0EB` | Hover state for cards |
| `velmora-text` | `#1A1A1A` | Primary text |
| `velmora-text-secondary` | `#6B6358` | Secondary/muted text |
| `velmora-text-light` | `#9A948C` | Placeholder, disabled text |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-gold` | `#C9A96E` | Primary accent — buttons, links, highlights |
| `velmora-gold-dark` | `#A68A4B` | Hover state for gold elements |
| `velmora-gold-light` | `#E8D5A8` | Subtle gold tints, borders |
| `velmora-gold-muted` | `#F5EDD8` | Gold background tints |

### UI Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-border` | `#E8E0D6` | Hairline dividers, card borders |
| `velmora-border-dark` | `#D4C8B8` | Emphasized borders |
| `velmora-overlay` | `rgba(26, 26, 26, 0.5)` | Modal/drawer overlay |
| `velmora-success` | `#4A7C59` | Success states |
| `velmora-error` | `#C44536` | Error states |

## Typography

### Font Families
- **Headings/Brand**: `'Cormorant Garamond', Georgia, serif`
- **Body/UI**: `'Inter', system-ui, sans-serif`

### Type Scale
| Class | Size | Weight | Letter-spacing | Usage |
|-------|------|--------|----------------|-------|
| `heading-1` | 3rem / 48px | 300 | 0.04em | Hero headlines |
| `heading-2` | 2.25rem / 36px | 400 | 0.03em | Section headings |
| `heading-3` | 1.5rem / 24px | 500 | 0.02em | Card titles |
| `heading-4` | 1.125rem / 18px | 500 | 0.01em | Subheadings |
| `body` | 1rem / 16px | 400 | 0 | Body text |
| `body-sm` | 0.875rem / 14px | 400 | 0 | Small body text |
| `caption` | 0.75rem / 12px | 500 | 0.05em | Labels, captions (UPPERCASE) |
| `product-name` | 1rem / 16px | 500 | 0.15em | Product titles (UPPERCASE) |

### Special Text Styles
- **Product names**: Uppercase, wide letter-spacing (0.15em), serif font
- **Navigation links**: Uppercase, letter-spacing 0.08em, sans-serif
- **Prices**: Sans-serif, medium weight
- **Buttons**: Sans-serif, uppercase, letter-spacing 0.08em

## Spacing
- **Section padding**: 80px top/bottom desktop, 48px mobile
- **Card padding**: 24px
- **Container max-width**: 1280px
- **Grid gap**: 24px desktop, 16px mobile

## Components

### Buttons
- **Primary**: Gold background (`velmora-gold`), white text, uppercase, letter-spacing 0.08em
- **Primary Hover**: `velmora-gold-dark` background
- **Secondary**: Transparent with gold border, gold text
- **Secondary Hover**: Gold background, white text
- **Border-radius**: 0 (sharp corners for premium feel)
- **Padding**: 14px 32px

### Cards
- **Background**: White
- **Border**: 1px `velmora-border`
- **Border-radius**: 0 (sharp corners)
- **Shadow**: None (flat design)
- **Hover**: Subtle shadow lift + image zoom effect

### Dividers
- **Style**: 1px solid `velmora-border`
- **Usage**: Between sections, in navigation

### Inputs
- **Border**: 1px `velmora-border`
- **Border-radius**: 0
- **Focus**: `velmora-gold` border
- **Padding**: 12px 16px

## Animations
- **Duration**: 200-300ms for micro-interactions, 400-600ms for page transitions
- **Easing**: ease-out for most transitions
- **Image hover**: Scale 1.05, subtle zoom
- **Button hover**: Background color transition

## Shadows
- **Subtle**: `0 2px 8px rgba(0, 0, 0, 0.06)`
- **Medium**: `0 4px 16px rgba(0, 0, 0, 0.08)`
- **Elevated**: `0 8px 32px rgba(0, 0, 0, 0.12)`
- **Gold glow**: `0 4px 16px rgba(201, 169, 110, 0.2)`

## Image Style
- **Aspect ratios**: 1:1 for product cards, 3:2 for editorial, 16:9 for hero
- **Background**: Warm neutral (#F5F0EB) for product photography
- **Lighting**: Warm, soft — golden hour aesthetic
- **Treatment**: Clean, minimal, jewelry as hero focus

## Layout Rules
1. Generous whitespace — let content breathe
2. Thin hairline dividers between sections
3. Full-bleed hero images with overlay text
4. Centered content with max-width container
5. Grid-based product displays (2 mobile, 3-4 desktop)
6. Sticky navigation that transitions from transparent to solid

## Don'ts
- No bright/neon colors
- No rounded corners on cards/buttons (use 0px)
- No heavy shadows or 3D effects
- No busy patterns or textures
- No discount/sale badges (premium positioning)
- No stock placeholder-looking imagery
