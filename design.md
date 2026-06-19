# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Philosophy
- **Mood**: Quiet luxury, warm, editorial
- **Positioning**: Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- **Target**: Women 25-45, gifting and self-purchase, $30–120 price point

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#FAF7F2` | Primary background, warm neutral |
| `--color-ivory` | `#F5F0E8` | Secondary background, cards |
| `--color-charcoal` | `#1A1A1A` | Primary text, headings |
| `--color-warm-gray` | `#6B6560` | Secondary text, muted |
| `--color-gold` | `#C9A962` | Accent, CTAs, highlights |
| `--color-gold-dark` | `#A88B4A` | Accent hover state |
| `--color-gold-light` | `#E8D9B5` | Subtle accents, borders |
| `--color-white` | `#FFFFFF` | Pure white for contrast |
| `--color-error` | `#C45C5C` | Error states |

### Typography

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Letter Spacing |
|---------|------|--------|----------------|---------------|----------------|
| Logo | Cormorant Garamond | 500 | 28px | 24px | 0.15em |
| H1 | Cormorant Garamond | 500 | 56px | 36px | 0.02em |
| H2 | Cormorant Garamond | 500 | 40px | 28px | 0.02em |
| H3 | Cormorant Garamond | 500 | 28px | 22px | 0.04em |
| Product Name | Cormorant Garamond | 500 | 18px | 16px | 0.12em (uppercase) |
| Body | Inter | 400 | 16px | 15px | 0 |
| Body Small | Inter | 400 | 14px | 13px | 0 |
| Button | Inter | 500 | 14px | 13px | 0.08em |
| Caption | Inter | 400 | 12px | 12px | 0.04em |

### Spacing System
- Base unit: 4px
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Layout
- Max content width: 1400px
- Container padding: 48px (desktop), 24px (mobile)
- Grid gap: 24px (desktop), 16px (mobile)

### Visual Effects
- **Shadows**: 
  - Subtle: `0 2px 8px rgba(26, 26, 26, 0.06)`
  - Medium: `0 4px 16px rgba(26, 26, 26, 0.08)`
  - Elevated: `0 8px 32px rgba(26, 26, 26, 0.12)`
- **Border radius**: 0px (sharp, editorial), 4px (buttons), 8px (cards)
- **Dividers**: 1px solid rgba(107, 101, 96, 0.15)
- **Transitions**: 300ms ease-out (default), 500ms ease-out (page)

### Component States

#### Buttons
- **Primary (Solid)**: 
  - Default: bg-gold, text-white
  - Hover: bg-gold-dark
  - Active: scale(0.98)
- **Primary (Outline)**:
  - Default: border-gold, text-gold, bg-transparent
  - Hover: bg-gold, text-white

#### Form Inputs
- Default: border-warm-gray/30, bg-white
- Focus: border-gold, ring-gold/20
- Error: border-error

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

### Animation Guidelines
- Fade in on scroll: opacity 0 → 1, translateY 20px → 0, 600ms
- Hover transitions: 300ms ease-out
- Page transitions: 500ms ease-out
- Stagger delay for grid items: 100ms increments