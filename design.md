# Strikingly Generators Hub - Design Guidelines

## Typography
- **Headings**: Brandon Grotesque (weight 700, uppercase, line-height 1.2)
  - Fallback: Josefin Sans (Google Fonts), then Poppins
  - H1: 40-48px desktop, 28-32px mobile
  - H2: 26-32px desktop
  - H3: Used for category subsections in All Generators
- **Body**: Open Sans (weight 400, 14px base, line-height 1.5)
- **Buttons**: Same heading font, weight 700, uppercase

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(90deg, #7671FF, #CB0C9F)`
- Body text: `#636972`
- Headings: `#4B5056` (section), `#2E2E2F` (hero H1 line 1)
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)

## Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9x15px padding
- Big variant: 44px height
- Primary CTA: AI gradient fill, white text
- Ghost button: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding
- Hover: subtle elevation (box-shadow), 1px brand-purple border

## Tags (Category Badges)
- 11px heading font uppercase, 2x6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px border, no fill

## Spacing
- Multiples of 10px (5px for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Layout
- Responsive: 3-col desktop, 2-col tablet, 1-col mobile
- Mobile breakpoint: ~768px
- Use CSS logical properties for RTL readiness