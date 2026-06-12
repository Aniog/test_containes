# Design System — Strikingly Generators Hub

## Fonts
- **Headings**: Josefin Sans (Google Fonts fallback for Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

## Typography Scale
- H1: 40–48px desktop, 28–32px mobile
- H2: 26–32px desktop
- H3: 20–24px desktop
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

## AI Gradient
`linear-gradient(135deg, #7671FF, #CB0C9F)` — used ONLY for primary CTAs and H1 line 2.

## Buttons
- Standard: 36px height, 4px border-radius, 14px Josefin Sans uppercase, px-[15px] py-[9px]
- Big: 44px height
- Primary: AI gradient fill, white text
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px card-border, 3px border-radius, 20px padding
- Hover: subtle box-shadow, 1px brand-purple border

## Tags (category badges)
- 11px Josefin Sans uppercase, px-[6px] py-[2px], 3px border-radius
- Ghost: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use Tailwind classes mapped to these named colors
- Use CSS logical properties where practical (margin-inline-start)
- Keep all text clearly readable against backgrounds
- White text on gradient/filled buttons always

## Don'ts
- No hardcoded hex in JSX — use Tailwind config names
- No gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No #000000 anywhere
- No scale/rotation transforms on hover
- No fake social proof
