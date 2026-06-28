# Strikingly Generators Hub Design System

## Visual direction
Build the page to feel like a polished Strikingly marketing page: clean white surfaces, restrained borders, generous spacing, uppercase geometric headings, and selective use of the AI gradient only for primary calls to action and the hero highlight line.

## Typography
- Headings: Josefin Sans 700 as the fallback for Brandon Grotesque, uppercase, line-height 1.2.
- Body: Open Sans 400, 14px base, line-height 1.5.
- Buttons: same family as headings, uppercase, 14px, bold.

## Color tokens
- Brand purple: `#8159BB`
- AI gradient start: `#7671FF`
- AI gradient end: `#CB0C9F`
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero heading dark line: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light neutral background: `#F4F6F8`
- White surface: `#FFFFFF`

## Surfaces and components
- Default page background is white.
- Cards use white fill, 1px border, 3px radius, 20px padding.
- Hover states use a slightly stronger border and a subtle shadow lift. No scale or rotation.
- Primary buttons use the AI gradient with white text.
- Secondary and ghost treatments use transparent backgrounds with a purple border and purple text.
- Category tags are small uppercase ghost badges.

## Layout and spacing
- Max content width: 1200px, centered.
- Section spacing: 40px vertical rhythm between sections.
- Hero spacing: 60px to 80px top and bottom.
- Internal component spacing should use 10px, 20px, and 40px increments.
- Mobile layouts stack cleanly with no horizontal scrolling; desktop keeps multi-column layouts where specified.

## Illustration style
- Use only inline SVG or CSS-drawn illustrations.
- Keep illustrations simple, line-based, and softly purple.
- Do not use external photos or decorative image backgrounds on this page.

## Do
- Keep all important text high contrast and explicitly readable.
- Use semantic HTML and visible focus states.
- Make the directory feel curated and useful, not SEO-stuffed.
- Keep all generator entries visible in the source HTML.

## Don't
- Do not use fake testimonials, ratings, or counters.
- Do not embed the AI builder on this page.
- Do not use tinted section backgrounds beyond the subtle hero wash.
- Do not hide content behind JavaScript-only rendering.
