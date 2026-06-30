# Velmora Fine Jewelry — Design System

## Visual Identity

### Mood & Direction
**Quiet luxury** — the feeling of understated elegance, warmth, and editorial sophistication. Think luxury magazine meets intimate jewelry boutique. Not loud, not discount-looking, not generic e-commerce. Every element should whisper quality.

### Brand Essence
- Premium demi-fine jewelry for modern women
- Gifting and self-purchase occasions
- Accessible luxury ($30–$120 price point)
- Target: women 25–45

---

## Color Palette

### Primary Palette (Warm Noir)
| Role | Color | Hex |
|------|-------|-----|
| Background | Off-White Cream | `#FAF9F7` |
| Surface | Warm White | `#FFFFFF` |
| Primary Text | Deep Charcoal | `#1A1A1A` |
| Secondary Text | Warm Gray | `#6B6B6B` |
| Muted Text | Light Gray | `#9A9A9A` |

### Accent Colors (Gold & Warmth)
| Role | Color | Hex |
|------|-------|-----|
| Gold Primary | Rich Gold | `#B8956B` |
| Gold Light | Soft Gold | `#D4B896` |
| Gold Dark | Deep Gold | `#8B7355` |
| Gold Hover | Bright Gold | `#C9A87C` |

### Supporting Colors
| Role | Color | Hex |
|------|-------|-----|
| Border | Hairline | `#E8E6E3` |
| Divider | Subtle | `#F0EEEB` |
| Overlay | Dark | `rgba(26, 26, 26, 0.6)` |
| Success | Sage | `#7A9A7A` |
| Error | Muted Rose | `#C47A7A` |

---

## Typography

### Font Families
- **Headings**: Cormorant Garamond (serif) — elegant, editorial, timeless
- **Body/UI**: Inter (sans-serif) — clean, modern, highly legible
- **Accent/Labels**: Inter with letter-spacing

### Type Scale
| Element | Font | Size | Weight | Transform | Letter-Spacing |
|---------|------|------|--------|----------|----------------|
| H1 (Hero) | Cormorant | 56–72px | 400 | none | normal |
| H2 (Section) | Cormorant | 36–48px | 400 | none | normal |
| H3 (Card Title) | Cormorant | 20–24px | 500 | uppercase | 0.1em |
| H4 (Subhead) | Cormorant | 18px | 400 | none | normal |
| Body | Inter | 16px | 400 | none | normal |
| Small | Inter | 14px | 400 | none | normal |
| Caption | Inter | 12px | 500 | uppercase | 0.08em |
| Button | Inter | 14px | 500 | uppercase | 0.1em |

---

## Spacing System

### Base Unit: 4px
- `xs`: 4px
- `sm`: 8px
- `md`: 16px
- `lg`: 24px
- `xl`: 32px
- `2xl`: 48px
- `3xl`: 64px
- `4xl`: 96px
- `5xl`: 128px

### Section Spacing
- Desktop sections: 96px vertical padding
- Mobile sections: 64px vertical padding
- Component internal: 16–24px

---

## Component Styles

### Buttons

#### Primary Button (Accent)
- Background: `#B8956B` (Rich Gold)
- Text: `#FFFFFF` white, uppercase, letter-spacing 0.1em
- Padding: 16px 32px
- Border-radius: 2px (barely rounded, sophisticated)
- Hover: Background `#C9A87C`, subtle lift shadow
- Transition: 300ms ease

#### Secondary Button (Outlined)
- Background: transparent
- Border: 1px solid `#B8956B`
- Text: `#B8956B`, uppercase, letter-spacing 0.1em
- Padding: 16px 32px
- Border-radius: 2px
- Hover: Background `#B8956B`, text `#FFFFFF`

#### Ghost Button (Text)
- Background: transparent
- Text: `#1A1A1A`, uppercase, letter-spacing 0.08em
- Hover: Text `#B8956B`, underline animation

### Cards

#### Product Card
- Background: `#FFFFFF`
- Border: none (or subtle 1px `#F0EEEB`)
- Shadow: none (clean)
- Hover: Second image fade-in, subtle shadow elevation
- Border-radius: 4px

#### Image Tiles
- Aspect ratio: 3:4 (portrait for jewelry)
- Hover: Dark overlay fade, text reveal
- Transition: 400ms ease

### Dividers
- Style: 1px solid `#E8E6E3`
- Or: gradient hairline with opacity fade

### Form Elements
- Input border: 1px solid `#E8E6E3`
- Focus border: `#B8956B`
- Padding: 12px 16px
- Border-radius: 2px

---

## Motion & Animation

### Transitions
- Default: 300ms ease
- Image hover: 400ms ease
- Page transitions: 200ms

### Effects
- Image zoom on hover: scale(1.02) or scale(1.05)
- Fade-in for secondary images: opacity 0 → 1
- Slide-up reveal for content sections
- Smooth scroll behavior

### Loading States
- Skeleton shimmer with warm gray
- Subtle pulse animation

---

## Layout Principles

### Grid
- Max content width: 1400px
- Padding: 24px (mobile), 48px (desktop)
- Product grid: 12-column, gap 24px
- Mobile: 2-column product grid
- Tablet: 3-column
- Desktop: 4-column

### Whitespace
- Generous margins between sections
- Breathing room within components
- Never crowded or cluttered

### Images
- Warm-toned, editorial photography
- Dark or neutral backgrounds
- Gold jewelry as hero
- Lifestyle: worn on model (ear, neck)
- Aspect ratios: 3:4 (products), 16:9 (hero), 9:16 (UGC)

---

## Iconography
- Style: Lucide React (clean, minimal)
- Stroke weight: 1.5px
- Size: 20px default, 24px for nav

---

## Accessibility
- Contrast ratio: minimum 4.5:1 for text
- Focus states: visible outline in gold
- Screen reader friendly labels
- Keyboard navigable

---

## Anti-Patterns (Do NOT Do)
- ❌ Bright discount colors (red sale tags, etc.)
- ❌ Generic stock photo aesthetics
- ❌ Cluttered grids or dense layouts
- ❌ Heavy drop shadows
- ❌ Rounded corners everywhere (keep sharp/sophisticated)
- ❌ Loud hero backgrounds
- ❌ Too many typefaces
- ❌ Decorative flourishes that feel dated
