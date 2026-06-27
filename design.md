# Design System — Strikingly Generators Hub

## Fonts
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

### Sizes
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- Body: 14px base

## Colors (Tailwind config names)
- `brand-purple`: #8159BB — badges, accents
- `ai-blue`: #7671FF — gradient start
- `ai-pink`: #CB0C9F — gradient end
- `body-text`: #636972
- `heading-dark`: #2E2E2F — hero H1 line 1
- `heading-section`: #4B5056 — section headings
- `card-border`: #C6C9CD
- `divider`: #E2E4E7
- `bg-light`: #F4F6F8
- `white`: #FFFFFF — default page background

### AI Gradient
`linear-gradient(135deg, #7671FF, #CB0C9F)` — primary CTAs and H1 line 2 only.

## Buttons
- Standard: 36px height, 4px border-radius, 14px Josefin Sans uppercase, 9px/15px padding
- Big: 44px height
- Filled: AI gradient background, white (#FFFFFF) text
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle box-shadow, 1px brand-purple border
- No scale/rotation transforms

## Tags (category badges)
- 11px Josefin Sans uppercase, 2px/6px padding, 3px border-radius
- Ghost: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use CSS logical properties (margin-inline-start, padding-inline-end)
- Use Tailwind utility classes
- Keep white as default page background
- Use semantic HTML (nav, main, section, article, footer)

## Don'ts
- No #000000 anywhere
- No gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No dark text on gradient fills
- No scale/rotation transforms on hover
- No arbitrary hex codes in class strings — use named colors from Tailwind config
