# Strikingly Generators Hub – Design System

## Typography

### Heading Font
- **Primary**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
- **Fallback 1**: Josefin Sans (Google Fonts, weight 700)
- **Fallback 2**: Poppins (Google Fonts)
- **Do NOT use**: Inter or system-default sans for headings

### Body Font
- Open Sans, weight 400, 14px base, line-height 1.5

### Button Font
- Same as heading font (Brandon Grotesque / Josefin Sans), weight 700, uppercase

### Scale
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- Body: 14px base

## Colors

| Token | Value | Usage |
|---|---|---|
| `brand-purple` | `#8159BB` | Badges, accents, ghost borders |
| `ai-from` | `#7671FF` | AI gradient start |
| `ai-to` | `#CB0C9F` | AI gradient end |
| `body-text` | `#636972` | Body copy |
| `heading-dark` | `#2E2E2F` | Hero H1 line 1 |
| `heading-section` | `#4B5056` | Section headings |
| `card-border` | `#C6C9CD` | Card borders |
| `divider` | `#E2E4E7` | Subtle dividers |
| `bg-light` | `#F4F6F8` | Light section backgrounds |
| `white` | `#FFFFFF` | Default page background |

### AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTAs (fill), H1 line 2 (text clip)
- Do NOT use on: section backgrounds, section headers, decorative elements

## Buttons

### Standard
- Height: 36px
- Border-radius: 4px
- Font: heading font, 14px, uppercase, weight 700
- Padding: 9px 15px

### Large (Big variant)
- Height: 44px

### Primary (AI Gradient Fill)
- Background: AI gradient
- Text: `#FFFFFF` (always white)
- Class: `btn-primary`

### Ghost
- Background: transparent
- Border: 1px solid `#8159BB`
- Text: `#8159BB`
- Class: `btn-ghost`

### Rules
- All filled buttons MUST use white text
- Never dark text on gradient or solid-color fill

## Cards

- Background: `#FFFFFF`
- Border: 1px solid `#C6C9CD`
- Border-radius: 3px
- Padding: 20px
- Hover: `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`, border-color `#8159BB`
- No scale or rotation transforms on hover

## Tags (Category Badges)

- Font: heading font, 11px, uppercase
- Padding: 2px 6px
- Border-radius: 3px
- Ghost style: `#8159BB` text, 1px `#8159BB` border, no fill

## Spacing

- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Layout

- Use CSS logical properties (`margin-inline-start` not `margin-left`) for RTL readiness
- Responsive breakpoints: 375px (mobile), 768px (tablet), 1200px (desktop)
- Grid: 3-col desktop, 2-col tablet, 1-col mobile for cards

## Do's and Don'ts

### Do
- Use `Josefin Sans` from Google Fonts as heading fallback
- Use `Open Sans` from Google Fonts for body
- Use AI gradient only on primary CTAs and H1 line 2
- Use white text on all filled/gradient buttons
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Use `aria-expanded` and `aria-controls` on accordions and toggles

### Don't
- Don't use `#000000` anywhere
- Don't splash gradient on backgrounds or section headers
- Don't use dark text on gradient fills
- Don't use scale/rotation transforms on card hover
- Don't add fake social proof (ratings, testimonials, customer counts)
- Don't embed a builder form on the generators hub page
