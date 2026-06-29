# Design System Notes

## Visual direction
A clean, editorial Strikingly-style marketing page with generous white space, thin gray borders, uppercase geometric headings, and purple accents. The experience should feel calm, useful, and product-led rather than flashy or SEO-heavy.

## Typography
- Headings: Brandon Grotesque if available, otherwise Josefin Sans, then Poppins. Use `font-["Josefin Sans",Poppins,sans-serif]`, weight 700, uppercase, tracking slightly expanded.
- Body: Open Sans, 14px base, comfortable line height. Use `font-["Open Sans",sans-serif]`.
- Buttons: same family as headings, uppercase, weight 700.

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)`
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero heading dark: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Default background: white

## Components
- Cards: white background, 1px neutral border, 3px radius, 20px padding, subtle hover shadow, purple border on hover/focus.
- Filled buttons: gradient background with white text only.
- Ghost buttons: transparent background, 1px purple border, purple text.
- Tags: uppercase outlined purple badges, compact padding.

## Layout
- Max content width: 1200px centered.
- Section spacing: 40px between major sections.
- Internal spacing uses 10px increments where practical.
- Desktop layouts can use 2- and 3-column grids; mobile stacks cleanly without horizontal scroll.

## Do
- Keep visible text contrast high on white and tinted surfaces.
- Use semantic HTML with clear heading hierarchy.
- Favor inline SVG illustrations and lightweight progressive enhancement.
- Keep directory cards descriptive and useful.

## Don't
- Do not use gradient section backgrounds outside hero accents and filled CTAs.
- Do not add fake ratings, testimonials, or vanity metrics.
- Do not rely on JavaScript for critical content visibility.
- Do not introduce arbitrary neon colors, oversized shadows, or playful motion.
