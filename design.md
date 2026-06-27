# Strikingly Generators Hub — Design System

## Brand Identity
Strikingly AI-powered website builder. Clean, modern, professional. White-dominant with purple accents and an AI gradient for primary actions.

## Typography

### Heading Font
- **Primary**: Brandon Grotesque, weight 700, ALL UPPERCASE, line-height 1.2
- **Fallback 1**: Josefin Sans (Google Fonts, weight 700, geometric sans-serif) — preferred fallback
- **Fallback 2**: Poppins (Google Fonts)
- **Do NOT use**: Inter or system-default sans for headings

### Body Font
- Open Sans, weight 400, 14px base, line-height 1.5 (Google Fonts)

### Button Font
- Same as heading font (Brandon Grotesque / Josefin Sans), weight 700, uppercase

### Scale
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- H3: 20–24px desktop
- Body: 14px base
- Tags/badges: 11px

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand-purple` | `#8159BB` | Badges, accents, ghost button borders |
| `ai-blue` | `#7671FF` | AI gradient start |
| `ai-pink` | `#CB0C9F` | AI gradient end |
| `body-text` | `#636972` | Body copy, subheadings |
| `heading-dark` | `#2E2E2F` | Hero H1 line 1 |
| `heading-section` | `#4B5056` | Section headings |
| `card-border` | `#C6C9CD` | Card borders |
| `divider` | `#E2E4E7` | Subtle dividers |
| `bg-light` | `#F4F6F8` | Light section backgrounds |
| `white` | `#FFFFFF` | Default page background |

### AI Gradient
`linear-gradient(to right, #7671FF, #CB0C9F)`
- Use ONLY for: primary CTAs, H1 line 2 text gradient
- Do NOT use for: backgrounds, section headers, decorative elements

## Buttons

### Primary (AI Gradient Fill)
- Height: 36px standard, 44px large variant
- Border-radius: 4px
- Padding: 9px 15px
- Font: heading font, 14px, uppercase, weight 700
- Background: AI gradient
- Text: `#FFFFFF` (always white on gradient)
- Tailwind: `bg-gradient-to-r from-[#7671FF] to-[#CB0C9F] text-white font-bold uppercase rounded`

### Ghost Button
- Transparent background
- 1px border: `#8159BB`
- Text: `#8159BB`
- Same sizing as primary
- Tailwind: `border border-[#8159BB] text-[#8159BB] bg-transparent font-bold uppercase rounded`

### Focus State
- Visible outline on all interactive elements
- `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8159BB]`

## Cards

- Background: `#FFFFFF`
- Border: `1px solid #C6C9CD`
- Border-radius: 3px
- Padding: 20px
- Hover: `box-shadow: 0 4px 12px rgba(0,0,0,0.08)`, border changes to `#8159BB`
- No scale or rotation transforms on hover
- Tailwind: `bg-white border border-[#C6C9CD] rounded p-5 hover:shadow-md hover:border-[#8159BB] transition-all`

## Tags / Category Badges

- Font: heading font, 11px, uppercase
- Padding: 2px 6px
- Border-radius: 3px
- Ghost style: `#8159BB` text, `1px solid #8159BB` border, no fill
- Tailwind: `text-[#8159BB] border border-[#8159BB] text-[11px] font-bold uppercase px-1.5 py-0.5 rounded`

## Spacing

- Base unit: 10px
- Between adjacent buttons: 10px
- Between blocks: 20px
- Between sections: 40px
- Hero padding: 60–80px top/bottom
- Max content width: 1200px, centered
- Use multiples of 10px for all margins/padding (5px allowed for tight pairs)

## Layout

- Max content width: 1200px
- Centered with `mx-auto px-5`
- Grid: 3-col desktop, 2-col tablet, 1-col mobile
- Use CSS logical properties where practical (`margin-inline-start` vs `margin-left`)

## Do's and Don'ts

### Do
- Use white text on all gradient/filled buttons
- Use `#4B5056` for section headings
- Use `#636972` for body text
- Keep AI gradient only on primary CTAs and H1 line 2
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Ensure WCAG AA contrast (4.5:1 normal text, 3:1 large text)

### Don't
- Don't use `#000000` black
- Don't splash AI gradient on backgrounds or section headers
- Don't use dark text on gradient fills
- Don't use Inter for headings
- Don't add fake social proof (ratings, testimonials, customer counts)
- Don't use `href="#"` placeholder links
- Don't add scale/rotation transforms on card hover
