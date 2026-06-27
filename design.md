# Design System - Strikingly Generators Hub

## Typography

- **Headings**: Josefin Sans (Google Fonts fallback for Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

### Sizes
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- H3: 20–24px desktop
- Body: 14px base
- Tags/badges: 11px uppercase

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| brand-purple | #8159BB | Badges, accents, ghost buttons |
| ai-blue | #7671FF | Gradient start |
| ai-pink | #CB0C9F | Gradient end |
| body-text | #636972 | Body copy |
| heading-dark | #2E2E2F | Hero H1 line 1 |
| heading-section | #4B5056 | Section headings |
| card-border | #C6C9CD | Card borders |
| divider | #E2E4E7 | Subtle dividers |
| bg-light | #F4F6F8 | Light section backgrounds |
| white | #FFFFFF | Default page background |

### AI Gradient
`linear-gradient(135deg, #7671FF, #CB0C9F)` — used ONLY for primary CTAs and H1 gradient line.

## Buttons

- Standard: height 36px, border-radius 4px, font 14px Josefin Sans uppercase, padding 9px 15px
- Big variant: height 44px
- Primary (gradient fill): AI gradient background, white (#FFFFFF) text
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards

- White background, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle box-shadow elevation, 1px brand-purple border
- No scale/rotation transforms on hover

## Tags (Category Badges)

- 11px Josefin Sans uppercase, padding 2px 6px, border-radius 3px
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing

- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use Tailwind utility classes for all styling
- Use CSS logical properties where practical (margin-inline-start)
- Keep all text clearly readable against backgrounds
- Use semantic HTML elements
- Maintain consistent spacing rhythm

## Don'ts
- Never use dark text on gradient fills
- Never splash AI gradient on backgrounds or section headers
- Never use #000000 as text color
- Never use scale/rotation transforms on card hover
- Never hardcode arbitrary hex codes inline — use theme tokens
