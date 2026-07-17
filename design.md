# Velmora Fine Jewelry - Design System

## Visual Identity

### Brand Mood
**Quiet luxury, warm, editorial.** Premium demi-fine jewelry that speaks through subtlety and elegance — never loud, never discount-looking, never generic.

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `velvet` | `#1A1815` | Deep warm black - primary backgrounds, text |
| `espresso` | `#2D2825` | Rich brown-black - secondary backgrounds, cards |
| `mocha` | `#4A4039` | Warm medium brown - borders, subtle elements |
| `champagne` | `#C9A962` | Warm gold - primary accent, CTAs, highlights |
| `gold-light` | `#D4BA7A` | Lighter gold - hover states, secondary accents |

### Neutral Palette
| Token | Hex | Usage |
|-------|-----|-------|
| `ivory` | `#FAF8F5` | Warm off-white - primary background |
| `cream` | `#F5F1EB` | Cream - secondary background, cards |
| `linen` | `#E8E2D9` | Warm light gray - dividers, borders |
| `taupe` | `#9C9183` | Muted warm gray - secondary text |

### Functional Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | `#4A7C59` | Muted forest green |
| `error` | `#9C4A4A` | Muted burgundy red |

---

## Typography

### Font Families
- **Headings**: Cormorant Garamond (serif) - elegant, editorial
- **Body**: Inter (sans-serif) - clean, modern readability
- **Fallbacks**: Georgia, serif / system-ui, sans-serif

### Type Scale
| Element | Font | Weight | Size | Line Height | Letter Spacing |
|---------|------|--------|------|-------------|----------------|
| Hero H1 | Cormorant Garamond | 400 | 72px / 4.5rem | 1.1 | 0.02em |
| Section H2 | Cormorant Garamond | 500 | 48px / 3rem | 1.2 | 0.01em |
| Section H3 | Cormorant Garamond | 500 | 32px / 2rem | 1.3 | 0.01em |
| Product Name | Cormorant Garamond | 500 | 18px / 1.125rem | 1.4 | 0.15em (uppercase) |
| Body | Inter | 400 | 16px / 1rem | 1.6 | 0 |
| Body Small | Inter | 400 | 14px / 0.875rem | 1.5 | 0.01em |
| UI Text | Inter | 500 | 14px / 0.875rem | 1 | 0.05em |
| Button | Inter | 500 | 14px / 0.875rem | 1 | 0.1em |
| Caption | Inter | 400 | 12px / 0.75rem | 1.5 | 0.02em |

---

## Spacing System

Based on 8px grid:
- `xs`: 4px / 0.25rem
- `sm`: 8px / 0.5rem
- `md`: 16px / 1rem
- `lg`: 24px / 1.5rem
- `xl`: 32px / 2rem
- `2xl`: 48px / 3rem
- `3xl`: 64px / 4rem
- `4xl`: 96px / 6rem
- `5xl`: 128px / 8rem

### Section Spacing
- Mobile sections: 64px vertical padding
- Desktop sections: 96px vertical padding
- Component internal spacing: 24px
- Card padding: 24px

---

## Borders & Shadows

### Border Radius
| Token | Value |
|-------|-------|
| `none` | 0 |
| `sm` | 2px |
| `md` | 4px |
| `lg` | 8px |
| `xl` | 12px |
| `full` | 9999px |

### Dividers
- Hairline dividers: 1px solid `linen`
- Soft dividers: 1px solid `mocha` at 20% opacity

### Shadows
| Token | Value |
|-------|-------|
| `sm` | `0 1px 2px rgba(26, 24, 21, 0.05)` |
| `md` | `0 4px 12px rgba(26, 24, 21, 0.08)` |
| `lg` | `0 8px 24px rgba(26, 24, 21, 0.12)` |
| `xl` | `0 16px 48px rgba(26, 24, 21, 0.16)` |

---

## Component Specifications

### Buttons

**Primary Button (Solid)**
- Background: `champagne`
- Text: `velvet`
- Padding: 14px 32px
- Border radius: 2px
- Hover: Background `gold-light`, subtle lift shadow
- Transition: 200ms ease-out

**Primary Button (Outlined)**
- Background: transparent
- Border: 1px solid `champagne`
- Text: `champagne`
- Padding: 14px 32px
- Border radius: 2px
- Hover: Background `champagne`, text `velvet`
- Transition: 200ms ease-out

**Ghost Button**
- Background: transparent
- Text: `velvet`
- Padding: 8px 16px
- Hover: Background `cream`
- Transition: 150ms ease

### Navigation

**Sticky Nav**
- Transparent background on hero
- Solid `ivory` background on scroll
- Shadow appears on scroll
- Height: 72px
- Transition: 300ms ease

### Cards

**Product Card**
- Background: `cream`
- Padding: 0 (image flush)
- Border radius: 4px
- Shadow: `sm`
- Hover: Shadow `md`, image scale 1.02
- Second image revealed on hover with crossfade

### Form Elements

**Text Input**
- Background: white
- Border: 1px solid `linen`
- Border radius: 2px
- Padding: 12px 16px
- Focus: Border `champagne`, ring `champagne` at 20%
- Placeholder: `taupe`

**Pill Buttons (Variants)**
- Background: transparent
- Border: 1px solid `linen`
- Padding: 8px 20px
- Border radius: full
- Selected: Background `velvet`, text white

---

## Motion & Animation

### Timing
| Token | Duration |
|-------|----------|
| `fast` | 150ms |
| `base` | 200ms |
| `slow` | 300ms |
| `slower` | 500ms |

### Easing
- Default: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out)
- Enter: `cubic-bezier(0, 0, 0.2, 1)` (ease-out)
- Exit: `cubic-bezier(0.4, 0, 1, 1)` (ease-in)

### Hover Effects
- Buttons: Background shift + subtle lift (translateY -1px)
- Cards: Shadow increase + image scale
- Links: Underline animation (width 0 to 100%)
- Nav links: Color transition to `champagne`

### Page Transitions
- Fade in on route change: 300ms
- Stagger children: 100ms delay between items

---

## Imagery

### Style Guidelines
- **Lighting**: Warm, natural, editorial
- **Backgrounds**: Dark neutral (velvet, espresso) or clean linen/cream
- **Composition**: Close-up, lifestyle-driven, aspirational
- **Mood**: Intimate, luxurious, approachable

### Image Ratios
| Context | Ratio |
|---------|-------|
| Hero | 16:9 or full-bleed |
| Product cards | 3:4 (portrait) |
| UGC/Reels | 9:16 (vertical) |
| Category tiles | 1:1 or 3:4 |
| Brand story | 4:5 or 3:4 |

### Placeholder Approach
Use warm-toned gradient placeholders that complement gold jewelry:
- Base: Warm gradient from `#2D2825` to `#1A1815`
- Accent: Subtle shimmer or grain texture
- Consistent aspect ratios maintained

---

## Layout

### Container
- Max width: 1400px
- Padding: 24px mobile, 48px desktop
- Centered with auto margins

### Grid
- 12-column system
- Gutter: 24px
- Breakpoints: 
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px

### Responsive Strategy
- Mobile-first approach
- Stack to side-by-side at `md` breakpoint
- Product grids: 1 col → 2 col → 3 col → 4 col
- Navigation: Hamburger at `md`, full at `lg`

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for body text
- Focus states visible on all interactive elements
- Keyboard navigable
- ARIA labels on icon buttons
- Reduced motion support via `prefers-reduced-motion`
