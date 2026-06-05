# Strikingly Generators Hub — Design System

## Fonts
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback chain: 'Josefin Sans', 'Poppins', sans-serif
  - Do NOT use Inter or system-default sans for headings
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

### Font Sizes
- H1: 40–48px desktop, 28–32px mobile (`text-4xl` → `text-5xl` / `text-3xl`)
- H2: 26–32px desktop (`text-2xl` → `text-3xl`)
- H3: 20px (`text-xl`)
- Body: 14px (`text-sm`)
- Tags: 11px

## Colors
| Token | Hex | Usage |
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
- Use ONLY for: primary CTAs, H1 line 2 text clip
- Do NOT use on section backgrounds or headers

## Buttons
- Standard: 36px height, 4px border-radius, 14px Josefin Sans uppercase, padding 9px 15px
- Large (44px): hero CTA and closing CTA
- **Gradient fill**: AI gradient background, white text `#FFFFFF` — ALWAYS white text on fills
- **Ghost**: transparent bg, 1px `#8159BB` border, `#8159BB` text
- Spacing between adjacent buttons: 10px

## Cards
- Background: `#FFFFFF`
- Border: 1px `#C6C9CD`, 3px border-radius
- Padding: 20px
- Hover: small box-shadow elevation, border changes to 1px `#8159BB`
- No scale/rotation transforms on hover

## Tags (category badges)
- 11px Josefin Sans uppercase
- Padding: 2px 6px, 3px border-radius
- Ghost style: `#8159BB` text, 1px `#8159BB` border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- Max content width: 1200px, centered
- Button gap: 10px

## Do's
- Use `margin-inline-start` / `padding-inline-start` for RTL readiness
- White text on all gradient/solid-color fills
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- One `<h1>` per page; `<h2>` per major section; `<h3>` for subsections

## Don'ts
- No dark text on gradient fills
- No AI gradient on backgrounds or section headers
- No fake testimonials, ratings, or customer counts
- No `href="#"` placeholder links
- No `<div>` as interactive element
