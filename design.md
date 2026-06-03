# Strikingly /generators Hub Page - Design Tokens

## Typography
- **Headings**: Josefin Sans (Brandon Grotesque fallback), weight 700, ALL UPPERCASE, line-height 1.2
  - H1: 40-48px desktop, 28-32px mobile
  - H2: 26-32px desktop
  - H3: 18-22px desktop
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase, 14px

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(135deg, #7671FF, #CB0C9F)`
- Body text: `#636972`
- Headings: `#4B5056` (section), `#2E2E2F` (hero H1 line 1)
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`
- Never use `#000000`

## Buttons
- Height: 36px standard, 44px big
- Border-radius: 4px
- Padding: 9px 15px
- Filled: AI gradient bg, white text
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px `#C6C9CD` border, 3px border-radius, 20px padding
- Hover: subtle box-shadow, 1px brand-purple border
- No scale/rotation transforms

## Tags
- 11px Josefin Sans uppercase, 2px 6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border

## Spacing
- Multiples of 10px (5px for tight pairs)
- 20px between blocks, 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use white text on all filled buttons
- Use semantic HTML (nav, main, section, article, footer)
- Use CSS logical properties for RTL readiness
- Keep all content in initial HTML source

## Don'ts
- No fake social proof (stars, counts, testimonials)
- No embedded builder form
- No dark text on gradient/solid fills
- No `#000000`
- No scale/rotation on hover
- No client-only rendered directory cards
