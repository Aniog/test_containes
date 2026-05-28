# Strikingly /generators Hub Page - Design Tokens

## Typography
- Headings: Brandon Grotesque (fallback: Josefin Sans, Poppins), weight 700, ALL UPPERCASE, line-height 1.2
- Body: Open Sans, weight 400, 14px base, line-height 1.5
- Buttons: same heading font, weight 700, uppercase

### Heading Sizes
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- H3: 18-22px desktop
- Body: 14px base

## Colors
- Brand purple: #8159BB (badges, accents)
- AI gradient: linear-gradient(135deg, #7671FF, #CB0C9F) (primary CTAs, H1 line 2)
- Body text: #636972
- Headings: #4B5056 (section), #2E2E2F (hero H1 line 1)
- Card border: #C6C9CD
- Subtle divider: #E2E4E7
- Light background: #F4F6F8
- White: #FFFFFF (default page background)
- Avoid #000000

## Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9px 15px padding
- Big variant: 44px height
- Filled (gradient or solid): white text (#FFFFFF)
- Ghost: transparent bg, 1px brand-purple border, brand-purple text

## Cards
- White bg, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle box-shadow elevation, 1px brand-purple border
- No scale/rotation transforms

## Tags
- 11px uppercase, 2px 6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing
- Multiples of 10px (5px for tight pairs)
- 20px between blocks, 40px between sections
- Hero: 60-80px top/bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use CSS logical properties (margin-inline-start, etc.)
- Use semantic HTML (nav, main, section, article, footer)
- All interactive elements keyboard-usable with visible focus states
- Real <a> and <button> elements only
- WCAG AA contrast (4.5:1 normal, 3:1 large)

## Don'ts
- No fake social proof (star ratings, customer counts, testimonials)
- No embedded builder form
- No clickable <div> elements
- No scale/rotation hover transforms
- No #000000
- No dark text on gradient/solid fills
