# ARTITECT MACHINERY - Design System

## Brand Identity

**Brand Name:** ARTITECT MACHINERY
**Industry:** Industrial machinery manufacturing - Sheet metal folding machines
**Products:** Double folding machine, double folder, sheet metal folder, sheet metal folding machine, metal folder, metal folder machine, metal folding machine

## Design Philosophy

Elegant yet user-friendly - professional industrial aesthetic with approachable warmth. Clean lines and modern typography reflect precision engineering while generous whitespace and intuitive navigation ensure accessibility.

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | #1E3A5F | Primary buttons, headers, key CTAs |
| `primary-dark` | #152C4A | Hover states, dark accents |
| `primary-light` | #2A4A73 | Secondary elements, subtle backgrounds |

### Accent Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `accent` | #C9A962 | Highlights, badges, special elements |
| `accent-dark` | #A88A4A | Accent hover states |
| `accent-light` | #D4BA7A | Light accent backgrounds |

### Neutral Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `neutral-900` | #1A1A1A | Primary text |
| `neutral-800` | #2D2D2D | Headings |
| `neutral-700` | #4A4A4A | Body text |
| `neutral-500` | #737373 | Secondary text |
| `neutral-300` | #D4D4D4 | Borders, dividers |
| `neutral-100` | #F5F5F5 | Light backgrounds |
| `neutral-50` | #FAFAFA | Page background |
| `white` | #FFFFFF | Cards, inputs, overlays |

### Semantic Colors
| Token | Hex | Usage |
|-------|-----|-------|
| `success` | #16A34A | Success states |
| `error` | #DC2626 | Error states |

---

## Typography

### Font Family
**Primary Font:** Inter (for body text and UI elements)
**Heading Font:** Playfair Display (for hero headlines and brand name)

### Type Scale
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| `h1` (Hero) | Playfair Display | 56px / 3.5rem | 700 | 1.1 |
| `h2` (Section) | Playfair Display | 40px / 2.5rem | 600 | 1.2 |
| `h3` (Card) | Inter | 24px / 1.5rem | 600 | 1.3 |
| `h4` (Subsection) | Inter | 20px / 1.25rem | 600 | 1.4 |
| `body-lg` | Inter | 18px / 1.125rem | 400 | 1.6 |
| `body` | Inter | 16px / 1rem | 400 | 1.6 |
| `body-sm` | Inter | 14px / 0.875rem | 400 | 1.5 |
| `caption` | Inter | 12px / 0.75rem | 500 | 1.4 |

### Letter Spacing
- Headings: -0.02em (tight)
- Body: 0 (normal)
- Buttons: 0.02em (slight tracking)

---

## Spacing System

### Baseline Grid
- Base unit: 4px
- Common scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Section Spacing
- Section padding: 96px vertical (desktop), 64px (tablet), 48px (mobile)
- Container max-width: 1280px
- Container padding: 24px (desktop), 16px (mobile)

### Component Spacing
- Card padding: 32px
- Button padding: 16px 32px
- Form field spacing: 24px

---

## Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 12px |
| Inputs | 6px |
| Badges | 4px |
| Images | 8px |

---

## Shadows

| Level | Value | Usage |
|-------|-------|-------|
| `sm` | 0 1px 2px rgba(0,0,0,0.05) | Subtle elevation |
| `md` | 0 4px 6px rgba(0,0,0,0.07) | Cards, dropdowns |
| `lg` | 0 10px 15px rgba(0,0,0,0.1) | Hero elements, modals |
| `xl` | 0 20px 25px rgba(0,0,0,0.15) | Large cards, floating elements |

---

## Breakpoints

| Token | Width | Usage |
|-------|-------|-------|
| `sm` | 640px | Small phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## Component Guidelines

### Buttons
- **Primary:** Navy background (#1E3A5F), white text, 8px radius, hover darkens
- **Secondary:** White background, navy border, navy text, hover fills
- **Ghost:** Transparent, navy text, underline on hover
- **States:** Disabled at 50% opacity, loading shows spinner

### Cards
- White background, 12px radius, subtle shadow (md)
- Hover: elevated shadow (lg), slight transform up
- Content padding: 32px
- Gap between cards: 24px

### Navigation
- Sticky header with transparent-to-white scroll behavior
- Logo left, nav links center, CTA button right
- Mobile: hamburger menu with slide-in drawer
- Active link: underline accent color

### Forms
- Input height: 48px
- Border: 1px solid neutral-300
- Focus: 2px primary outline
- Error: red border + message below
- Labels above inputs with 8px gap

### Images
- Rounded corners (8px) for content images
- Aspect ratios: 16:9 for hero/banners, 4:3 for products, 1:1 for icons
- Lazy loading for below-fold images

---

## Animations

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| `ease-in` | 200ms | ease-in | Hover states |
| `ease-out` | 300ms | ease-out | Page transitions |
| `ease-in-out` | 400ms | ease-in-out | Modal/overlay |
| `spring` | 500ms | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy interactions |

---

## Do's and Don'ts

### Do
✅ Use Inter for body text, Playfair Display for brand/hero headings
✅ Maintain generous whitespace (minimum 48px between sections)
✅ Use navy (#1E3A5F) as primary color for trust and professionalism
✅ Use gold (#C9A962) sparingly for premium feel and CTAs
✅ Create clear hierarchy with size and weight variations
✅ Ensure mobile responsiveness at all breakpoints

### Don't
❌ Use more than 3 colors prominently in a single section
❌ Place text directly on busy images without overlay
❌ Use decorative fonts for body text
❌ Make buttons too small (minimum 48px touch target)
❌ Use color alone to convey information (always add icons/text)

---

## Visual Inspiration

- Clean industrial photography
- Technical product illustrations
- Blueprint-inspired accent patterns
- Precision engineering imagery