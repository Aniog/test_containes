# Strikingly Generators Hub Design System

## Purpose
This project should visually match Strikingly marketing pages: clean, airy, trustworthy, and conversion-focused.

## Typography
- Heading font: Josefin Sans as the fallback for Brandon Grotesque, weight 700, uppercase.
- Body font: Open Sans, weight 400.
- Buttons use the same font family as headings.
- Recommended Tailwind equivalents:
  - Headings: `font-['Josefin_Sans'] font-bold uppercase tracking-[0.08em]`
  - Body: `font-['Open_Sans'] text-sm leading-6`

## Color Tokens
- Brand purple: `#8159BB`
- AI gradient start: `#7671FF`
- AI gradient end: `#CB0C9F`
- Heading dark: `#2E2E2F`
- Section heading: `#4B5056`
- Body text: `#636972`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`

## Components
### Buttons
- Filled CTA: gradient background, white text, 4px radius.
- Ghost CTA: white background, 1px purple border, purple text.
- Focus state must be clearly visible.

### Cards
- White surface, 1px border in `#C6C9CD`, 3px radius.
- 20px internal spacing.
- Hover state: subtle shadow and purple border.
- Do not scale or rotate on hover.

### Tags
- Uppercase heading font at 11px.
- Purple text, 1px purple border, transparent fill.

## Layout
- Max content width: 1200px.
- Section spacing: 40px.
- Internal block spacing: 20px.
- Use multiples of 10px whenever possible.
- Desktop layouts should remain multi-column; do not collapse everything into a single mobile layout on large screens.

## Do
- Keep text contrast high and readable on every surface.
- Use semantic HTML structure.
- Keep hero light with only a faint purple or pink wash.
- Use clean line-art SVG illustrations.

## Don’t
- Do not use dark backgrounds for major sections.
- Do not introduce fake ratings, testimonials, or inflated metrics.
- Do not use arbitrary extra accent colors outside the defined palette.
- Do not rely on JavaScript for core page content visibility.
