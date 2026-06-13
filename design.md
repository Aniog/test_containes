# Strikingly Generators Hub Design

## Visual direction
A clean Strikingly-style marketing page with a white canvas, subtle dividers, compact card borders, and selective AI gradient accents. The page should feel like a polished product directory, not a search-engine landing page.

## Typography
- Headings: Brandon Grotesque 700 when available; fallback to Josefin Sans 700; acceptable final fallback Poppins 700
- Headings are uppercase with line-height 1.2
- Body: Open Sans 400, 14px base, line-height 1.5
- Buttons use the heading font at 700, uppercase

## Color tokens
- Brand purple: `#8159BB`
- AI gradient start: `#7671FF`
- AI gradient end: `#CB0C9F`
- Body text: `#636972`
- Section heading text: `#4B5056`
- Hero line 1 text: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light surface: `#F4F6F8`
- White surface: `#FFFFFF`

## Layout and spacing
- Max content width: 1200px centered
- Use 40px between major sections
- Use 20px between local blocks and cards
- Hero vertical padding: 60px to 80px
- Keep spacing in multiples of 10px where practical
- Mobile layouts stack cleanly without horizontal scrolling

## Components
### Buttons
- Standard height: 36px
- Large CTA height: 44px
- Radius: 4px
- Filled buttons use the AI gradient with white text only
- Ghost buttons use white background, 1px purple border, purple text

### Cards
- White background
- 1px border in `#C6C9CD`
- 3px border-radius
- 20px padding
- Hover: small shadow and purple border, no scale transform

### Tags
- 11px uppercase heading font
- 2px by 6px padding
- 3px radius
- Purple text and border with no fill

## Do
- Keep all text highly legible on white and light-gray surfaces
- Use the AI gradient only for hero emphasis and primary CTAs
- Preserve semantic HTML structure and keyboard focus states
- Make directory cards feel useful and descriptive

## Don’t
- Do not use fake testimonials, star ratings, or inflated counters
- Do not use dark text on a gradient button
- Do not overuse tinted backgrounds or decorative gradients
- Do not turn directory lists into bare text links
