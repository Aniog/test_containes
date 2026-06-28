# Strikingly Generators Hub Design System

## Visual direction
- Clean Strikingly-style marketing layout with a white page background and subtle dividers.
- Use a restrained interface: white surfaces, thin gray borders, uppercase headings, and purple accents.
- The AI gradient is reserved for the hero emphasis line and primary CTA fills only.
- The page should feel like an organized product directory, not an SEO wall of links.

## Typography
- Heading font: "Brandon Grotesque", "Josefin Sans", "Poppins", sans-serif
- Body font: "Open Sans", Arial, sans-serif
- Headings are uppercase, bold, and tight (`font-weight: 700`, `line-height: 1.2`).
- Body copy uses 14px base size with comfortable `line-height: 1.5`.

## Color tokens
- Brand purple: `#8159BB`
- AI gradient start: `#7671FF`
- AI gradient end: `#CB0C9F`
- Body text: `#636972`
- Section heading text: `#4B5056`
- Hero line 1 text: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light utility background: `#F4F6F8`
- White: `#FFFFFF`

## Components
### Buttons
- Standard button height: 36px
- Large CTA button height: 44px
- Border radius: 4px
- Padding: `9px 15px`
- Filled buttons use the AI gradient and white text only.
- Ghost buttons are transparent with a 1px purple border and purple text.

### Cards
- Background: white
- Border: `1px solid #C6C9CD`
- Radius: 3px
- Padding: 20px
- Hover: subtle shadow and purple border only, no scale effect

### Tags
- Uppercase heading font
- 11px size
- Padding: `2px 6px`
- Radius: 3px
- Purple text + purple border, no fill

## Layout and spacing
- Max content width: 1200px centered
- Section spacing: 40px vertical rhythm between major sections
- Hero spacing: 60px to 80px top and bottom
- Standard spacing unit: 10px increments (5px allowed for tight spacing)
- Button groups use 10px gaps
- Desktop layouts remain multi-column; mobile stacks cleanly with no horizontal scroll

## Do
- Keep text contrast high and explicit on all cards, inputs, and buttons.
- Use semantic sections, articles, and real links/buttons.
- Keep directory cards visually substantial with a title and one-line description.
- Preserve a polished Strikingly marketing feel.

## Don’t
- Do not use tinted section backgrounds outside the faint hero wash.
- Do not use fake testimonials, ratings, counts, or social proof.
- Do not render bare text link lists.
- Do not apply the AI gradient to section backgrounds or body text blocks.
- Do not use dark text on filled gradient buttons.
