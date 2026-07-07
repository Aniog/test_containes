# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce. The design conveys warmth, sophistication, and approachable elegance.

## Color Palette

### Primary Colors
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| `cream` | `#FAF8F5` | `bg-cream` / `text-cream` | Primary background, card backgrounds |
| `charcoal` | `#1A1A1A` | `bg-charcoal` / `text-charcoal` | Primary text, headings, dark backgrounds |
| `gold` | `#B8924B` | `bg-gold` / `text-gold` | Accent color, CTAs, star ratings, decorative elements |

### Secondary Colors
| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| `warm-gray` | `#6B6B6B` | `text-warm-gray` | Body text, descriptions, secondary text |
| `warm-gray-light` | `#9CA3AF` | `text-warm-gray-light` | Placeholders, disabled states, subtle text |
| `cream-dark` | `#F0EDEA` | `bg-cream-dark` | Image placeholder backgrounds, subtle section backgrounds |
| `border` | `#E8E4DF` | `border-border` | Dividers, card borders, input borders |

### Color Rules
- **DO**: Use `cream` for backgrounds, `charcoal` for text, `gold` for accents
- **DO**: Ensure all text meets WCAG AA contrast against backgrounds
- **DON'T**: Use bright colors, gradients (except subtle gold), neon, or saturated hues
- **DON'T**: Use `text-warm-gray-light` on `bg-cream-dark` — insufficient contrast

## Typography

### Font Families
| Token | Font | Tailwind Class | Usage |
|-------|------|----------------|-------|
| Serif | Cormorant Garamond | `font-serif` | Headings, product names, hero text |
| Sans | Inter | `font-sans` | Body text, UI elements, labels |

### Type Scale
| Class | Size | Tailwind | Usage |
|-------|------|----------|-------|
| `heading-display` | 3rem (48px) | `text-5xl font-serif tracking-widest-plus uppercase` | Hero headline |
| `heading-section` | 2rem (32px) | `font-serif text-2xl md:text-3xl tracking-widest-plus uppercase` | Section headings |
| `heading-product` | 1.5rem (24px) | `font-serif text-xl md:text-2xl tracking-widest-plus uppercase` | Product names |
| `body-text` | 0.875rem (14px) | `font-sans text-sm text-warm-gray leading-relaxed` | Body copy, descriptions |

### Letter Spacing
- `tracking-wider`: Standard for labels and buttons
- `tracking-widest`: Section subtitles
- `tracking-widest-plus` (0.2em): Product names, section headings — uppercase serif
- `tracking-ultra-wide` (0.3em): Category labels, small caps

### Text Rules
- **DO**: Use uppercase + wide tracking for product names and section headings
- **DO**: Use serif for headings and display text, sans-serif for body
- **DON'T**: Use sans-serif for product names or headings
- **DON'T**: Use tight letter-spacing on serif text

## Spacing & Layout

### Spacing
- Section padding: `py-16 md:py-24` (vertical), `px-4 sm:px-6 lg:px-8` (horizontal)
- Max width: `max-w-7xl mx-auto` for content containers
- Card gap: `gap-6 md:gap-8`
- Component padding: `px-6 py-5` (cards, drawers)

### Grid System
- Products grid: `grid-cols-2 md:grid-cols-3 lg:grid-cols-5` (bestsellers)
- Shop grid: `grid-cols-2 md:grid-cols-3` with sidebar filter
- Category tiles: `grid-cols-1 md:grid-cols-3`

## Components

### Buttons
- **Primary (accent)**: `btn-primary` — Gold background, charcoal text, uppercase tracking, solid
  - Hover: Darken gold, subtle shadow
- **Secondary (outline)**: Charcoal border, charcoal text, transparent background
  - Hover: Fill charcoal, cream text
- **Ghost**: No border, warm-gray text, hover charcoal

### Cards (Product)
- Cream background, rounded-sm, subtle hover shadow
- Image: 3:4 aspect ratio, overflow-hidden
- Hover: Show second image + "QUICK ADD" overlay
- Product name: Uppercase, serif, tracking-widest-plus
- Price: Serif, charcoal
- Rating: Gold stars, warm-gray count

### Dividers
- Thin hairline: `h-px bg-border` or `border-b border-border`
- Section divider: `section-divider` class (thin gold-accent line)
- Generous space above/below dividers

### Inputs
- Border: `border border-border`
- Focus: Gold ring or charcoal border
- Placeholder: warm-gray-light
- Background: cream or cream-dark

## Shadows & Effects
- `shadow-sm`: Subtle card elevation
- `shadow-lg`: Dropdown menus, drawers
- `shadow-2xl`: Cart drawer, modals
- Hover transitions: `transition-all duration-300`
- No excessive animations — keep transitions subtle and smooth

## Images
- Aspect ratios: `aspect-[3/4]` for product images, `aspect-[16/9]` for hero, `aspect-[9/16]` for UGC reels
- Backgrounds: `bg-cream-dark` for image placeholders
- Overflow: `overflow-hidden rounded-sm`
- Object fit: `object-cover`

## Responsive Breakpoints
| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, stacked layouts |
| `sm` | 640px | Minor spacing adjustments |
| `md` | 768px | 2-column grids, larger text |
| `lg` | 1024px | 3-column grids, sidebar filters |
| `xl` | 1280px | Max-width container, generous whitespace |

## Do's and Don'ts

### Do
- Use generous whitespace between sections
- Keep UI minimal and editorial
- Use thin hairline dividers for visual separation
- Ensure all text is clearly readable (WCAG AA minimum)
- Use subtle hover transitions (300ms ease)
- Keep the gold accent consistent sitewide

### Don't
- Use loud colors or heavy gradients
- Overuse animations or flashy effects
- Use generic stock-photo-heavy layouts
- Use dark backgrounds for primary content areas
- Mix too many font weights or styles
- Use discount/sale language styling
