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

## AI Gradient
`linear-gradient(135deg, #7671FF, #CB0C9F)` — primary CTAs and H1 line 2 only.

## Buttons
- Standard: h-[36px], rounded-[4px], text-[14px] Josefin Sans uppercase, px-[15px] py-[9px]
- Big: h-[44px]
- Filled (gradient/solid): white text (#FFFFFF) always
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px #C6C9CD border, rounded-[3px], p-[20px]
- Hover: subtle box-shadow, 1px brand-purple border
- No scale/rotation transforms

## Tags (category badges)
- 11px Josefin Sans uppercase, px-[6px] py-[2px], rounded-[3px]
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
- Use semantic HTML (nav, main, section, article, footer)
- Keep all text readable: body-text on white, white on gradient fills
- Use Tailwind utility classes exclusively

## Don'ts
- No #000000 anywhere
- No gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No fake social proof, star ratings, or testimonials
- No dark text on gradient fills
- No scale/rotation hover transforms on cards
