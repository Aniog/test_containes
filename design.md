# Velmora Fine Jewelry — Design System

## Visual Identity

### Brand Essence
- **Mood**: Quiet luxury, warm, editorial
- **Positioning**: Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce
- **Target Audience**: Women 25–45, gifting and self-purchase
- **Price Point**: Premium-but-accessible ($30–$120)

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-champagne` | `#E8DCC4` | Warm neutral backgrounds, cards |
| `--color-sand` | `#F5F0E8` | Page background, light sections |
| `--color-cream` | `#FDFBF7` | Pure white alternative, cards |
| `--color-espresso` | `#2C2420` | Primary text, dark backgrounds |
| `--color-walnut` | `#4A3F35` | Secondary text, dark elements |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-gold` | `#C9A961` | Primary accent, CTAs, highlights |
| `--color-gold-light` | `#D4B978` | Hover states, subtle accents |
| `--color-gold-dark` | `#A88B4A` | Active states, borders |

### Neutral Scale
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-charcoal` | `#3D3630` | Body text |
| `--color-stone` | `#8B7E74` | Muted text, placeholders |
| `--color-linen` | `#D9D2C7` | Borders, dividers |
| `--color-ivory` | `#FAF8F5` | Alt background |

### Functional Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#4A7C59` | Success states |
| `--color-error` | `#A65D57` | Error states |

---

## Typography

### Font Families
- **Headings**: Cormorant Garamond (Google Fonts) — elegant serif
- **Body/UI**: Inter (Google Fonts) — clean, modern sans-serif

### Type Scale
| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Display | Cormorant Garamond | 400 | 4rem (64px) | 1.1 | 0.02em |
| H1 | Cormorant Garamond | 500 | 3rem (48px) | 1.15 | 0.02em |
| H2 | Cormorant Garamond | 500 | 2.25rem (36px) | 1.2 | 0.02em |
| H3 | Cormorant Garamond | 500 | 1.75rem (28px) | 1.25 | 0.02em |
| H4 | Cormorant Garamond | 500 | 1.375rem (22px) | 1.3 | 0.02em |
| Product Name | Cormorant Garamond | 500 | 1.125rem (18px) | 1.4 | 0.15em (uppercase) |
| Body Large | Inter | 400 | 1.125rem (18px) | 1.6 | 0 |
| Body | Inter | 400 | 1rem (16px) | 1.6 | 0 |
| Body Small | Inter | 400 | 0.875rem (14px) | 1.5 | 0 |
| Caption | Inter | 400 | 0.75rem (12px) | 1.4 | 0.02em |
| Button | Inter | 500 | 0.875rem (14px) | 1 | 0.1em (uppercase) |

---

## Spacing System

Based on 8px grid:
- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-5`: 1.25rem (20px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-10`: 2.5rem (40px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-20`: 5rem (80px)
- `--space-24`: 6rem (96px)
- `--space-32`: 8rem (128px)

---

## Components

### Buttons

**Primary Button**
- Background: `--color-gold`
- Text: `#FFFFFF`
- Padding: 1rem 2rem
- Border Radius: 0 (sharp edges)
- Hover: `--color-gold-light`, subtle lift shadow
- Active: `--color-gold-dark`

**Secondary Button (Outlined)**
- Background: transparent
- Border: 1px solid `--color-gold`
- Text: `--color-gold`
- Padding: 1rem 2rem
- Hover: Background `--color-gold` at 10% opacity

**Ghost Button**
- Background: transparent
- Text: `--color-espresso`
- Hover: Underline

### Product Cards
- Background: `--color-cream`
- Border: none
- Shadow: 0 2px 8px rgba(44, 36, 32, 0.06)
- Hover Shadow: 0 8px 24px rgba(44, 36, 32, 0.1)
- Border Radius: 0 (editorial feel)
- Image Aspect Ratio: 4:5
- Padding: 0 (full-bleed image)

### Form Inputs
- Background: `#FFFFFF`
- Border: 1px solid `--color-linen`
- Border Radius: 0
- Padding: 0.875rem 1rem
- Focus: Border `--color-gold`, outline none
- Placeholder: `--color-stone`

### Dividers
- Height: 1px
- Color: `--color-linen`
- Style: solid

---

## Shadows

- `--shadow-sm`: 0 1px 2px rgba(44, 36, 32, 0.05)
- `--shadow-md`: 0 4px 12px rgba(44, 36, 32, 0.08)
- `--shadow-lg`: 0 8px 24px rgba(44, 36, 32, 0.12)
- `--shadow-xl`: 0 16px 48px rgba(44, 36, 32, 0.16)

---

## Animations & Transitions

### Timing
- `--transition-fast`: 150ms ease
- `--transition-base`: 250ms ease
- `--transition-slow`: 400ms ease

### Hover Effects
- Product images: scale(1.03) over 400ms
- Buttons: translateY(-2px) + shadow increase
- Links: opacity shift

### Scroll Animations
- Fade in on scroll: opacity 0→1, translateY(20px→0), 600ms

---

## Layout

### Container
- Max Width: 1400px
- Padding: 1.5rem (mobile), 2rem (tablet), 4rem (desktop)
- Margin: 0 auto

### Grid
- Product Grid: 2 columns (mobile), 3 columns (tablet), 4-5 columns (desktop)
- Section Spacing: 6rem (desktop), 4rem (tablet), 3rem (mobile)

### Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

---

## Accessibility

- Color contrast ratios meet WCAG AA for all text combinations
- Focus states visible with gold outline
- Alt text required for all images
- Semantic HTML structure
- Keyboard navigable

---

## Imagery Style

### Product Photography
- Warm-lit, close-up shots
- Dark or neutral backgrounds (#2C2420, #4A3F35, #F5F0E8)
- Focus on gold details and craftsmanship
- Lifestyle shots with model wearing jewelry

### UGC/Reel Cards
- Vertical 9:16 aspect ratio
- Soft serif caption overlay
- Warm, intimate mood
- Jewelry worn in real contexts

---

## Do's and Don'ts

### Do
- Use generous whitespace
- Keep imagery warm and editorial
- Use uppercase with letter-spacing for product names
- Add subtle shadows and hover effects
- Maintain consistent gold accent color
- Use hairline dividers

### Don't
- Use loud, flashy colors
- Add heavy drop shadows
- Use rounded corners (except buttons sparingly)
- Mix multiple accent colors
- Use generic stock photography
- Crowd content with too many elements
