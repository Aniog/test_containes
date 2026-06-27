# Strikingly Generators Hub - Visual Style

## Typography
- Headings: Brandon Grotesque (fallback: Josefin Sans, weight 700), ALL UPPERCASE, line-height 1.2
- Body: Open Sans, weight 400, 14px base, line-height 1.5
- Buttons: Same as headings (Brandon Grotesque / Josefin Sans), weight 700, uppercase
- H1: 40-48px desktop, 28-32px mobile
- H2: 26-32px desktop
- Body text: 14px base

## Colors
- Brand purple: #8159BB (badges, accents)
- AI gradient: linear-gradient from #7671FF (blue-AI) to #CB0C9F (pink-AI) - primary CTAs and H1 line 2 only
- Body text: #636972
- Section headings: #4B5056
- Hero H1 line 1: #2E2E2F
- Card border: #C6C9CD
- Subtle divider: #E2E4E7
- Light background: #F4F6F8
- White: #FFFFFF (default page background)

## Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9px 15px padding
- Big variant: 44px height
- Primary CTAs: AI gradient fill, white text (#FFFFFF)
- Ghost button: transparent background, 1px brand-purple border, brand-purple text

## Cards
- White background, 1px #C6C9CD border, 3px border-radius, 20px padding
- Hover: subtle elevation lift (small box-shadow), 1px brand-purple border
- No scale or rotation transforms on hover

## Tags (category badges)
- 11px uppercase, 2px 6px padding, 3px border-radius
- Ghost style: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60-80px top and bottom
- 10px between adjacent buttons
- Max content width: 1200px, centered

## Do's
- Use uppercase for all headings and button text
- Apply AI gradient only to primary CTAs and H1 line 2
- Keep cards simple with white background and subtle borders
- Use semantic HTML: nav, main, section, article, footer
- Ensure all cards are in the initial HTML source

## Don'ts
- Do not use Inter or system-default sans for headings
- Do not splash AI gradient on backgrounds or section headers
- Do not add fake social proof, ratings, or testimonials
- Do not embed builder forms on this page
- Do not use display:none for collapsed sections (use height transition)