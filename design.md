# Strikingly Generators Hub - Design Tokens

## Typography

- **Headings**: Josefin Sans, weight 700, ALL UPPERCASE, line-height 1.2
  - H1: 40-48px desktop, 28-32px mobile
  - H2: 26-32px desktop
  - H3: 18-22px
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase, 14px

## Colors

- Brand purple: `#8159BB` (badges, accents)
- AI gradient: `linear-gradient(135deg, #7671FF, #CB0C9F)` (primary CTAs, H1 line 2 only)
- Body text: `#636972`
- Headings: `#4B5056` (section headings), `#2E2E2F` (hero H1 line 1)
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)
- Never use `#000000`

## Buttons

- Standard: 36px height, 4px border-radius, 14px Josefin Sans uppercase, 9px 15px padding
- Big variant: 44px height
- Primary CTA: AI gradient fill, white text (#FFFFFF)
- Ghost button: transparent bg, 1px brand-purple border, brand-purple text

## Cards

- White background, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle elevation (small box-shadow), 1px brand-purple border
- No scale or rotation transforms on hover

## Tags (category badges)

- 11px Josefin Sans uppercase, 2px 6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing

- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's

- Use AI gradient ONLY for primary CTAs and H1 line 2
- Use white text on all filled/gradient buttons
- Use semantic HTML throughout
- Ensure WCAG AA contrast (4.5:1 normal text, 3:1 large text)

## Don'ts

- Don't splash AI gradient on backgrounds or section headers
- Don't use dark text on gradient/solid-color fill buttons
- Don't use #000000 anywhere
- Don't use fake social proof, testimonials, or ratings
- Don't use scale/rotation transforms on card hover
