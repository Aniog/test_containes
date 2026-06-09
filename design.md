# Design System - Strikingly Generators Hub

## Typography
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - H1: 40-48px desktop, 28-32px mobile
  - H2: 26-32px desktop
  - H3: 20-24px desktop
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase, 14px

## Colors (defined in tailwind.config.js as named tokens)
- `brand-purple`: #8159BB — badges, accents
- `ai-blue`: #7671FF — gradient start
- `ai-pink`: #CB0C9F — gradient end
- `body-text`: #636972 — body copy
- `heading-dark`: #2E2E2F — hero H1 line 1
- `heading-section`: #4B5056 — section headings
- `card-border`: #C6C9CD — card borders
- `divider`: #E2E4E7 — subtle dividers
- `bg-light`: #F4F6F8 — light section backgrounds
- `white`: #FFFFFF — default page background

## Buttons
- Standard: h-[36px], rounded (4px), text-[14px] Josefin Sans uppercase, px-[15px] py-[9px]
- Big variant: h-[44px]
- Primary CTA: AI gradient fill (`bg-gradient-to-r from-ai-blue to-ai-pink`), white text
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px card-border, rounded (3px), p-[20px]
- Hover: subtle shadow lift, 1px brand-purple border
- No scale/rotation transforms

## Tags (category badges)
- 11px Josefin Sans uppercase, px-[6px] py-[2px], rounded (3px)
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use CSS logical properties (margin-inline-start) where practical
- Use semantic HTML (nav, main, section, article, footer)
- Ensure WCAG AA contrast (4.5:1 normal text, 3:1 large text)
- All filled buttons use white text

## Don'ts
- No hardcoded hex in class strings (use Tailwind config tokens)
- No #000000 anywhere
- No AI gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No fake social proof, star ratings, or testimonials
- No scale/rotation transforms on hover
