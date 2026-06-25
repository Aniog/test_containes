# Design System - Strikingly Generators Hub

## Fonts
- Headings: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
- Body: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- Buttons: Josefin Sans, weight 700, uppercase

## Typography Scale
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 20-24px desktop
- Body: 14px base

## Colors
- Brand purple: `#8159BB` (badges, accents)
- AI gradient: `linear-gradient(135deg, #7671FF, #CB0C9F)` (primary CTAs, H1 line 2)
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)
- No black (#000000)

## Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9px/15px padding
- Big variant: 44px height
- Primary CTA: AI gradient fill, white text (#FFFFFF)
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle box-shadow, 1px brand-purple border
- No scale/rotation transforms

## Tags (category badges)
- 11px Josefin Sans uppercase, 2px/6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use Tailwind utility classes
- Use CSS logical properties where practical
- Keep all text readable against backgrounds (WCAG AA)
- Use semantic HTML elements

## Don'ts
- No #000000 anywhere
- No gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No fake social proof
- No scale/rotation transforms on hover
- No arbitrary hex codes outside this system
