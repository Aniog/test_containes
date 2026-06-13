# Strikingly Generators Hub Design

## Visual direction
- Build a clean, product-marketing page that feels native to Strikingly.
- Prioritize clarity, lightweight structure, and obvious paths into the AI builder.
- Keep the page white-first with subtle dividers and card surfaces.

## Typography
- Headings: Brandon Grotesque if available; otherwise use Josefin Sans with `font-weight: 700`, uppercase, `line-height: 1.2`.
- Body: Open Sans with `font-weight: 400`, `font-size: 14px`, `line-height: 1.5`.
- Buttons: same family as headings, uppercase, bold.

## Color tokens
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(135deg, #7671FF 0%, #CB0C9F 100%)`
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`

## Components
- Buttons: 4px radius, uppercase, primary uses AI gradient with white text, ghost uses transparent background with purple border and purple text.
- Cards: white background, 1px border, 3px radius, 20px padding, subtle shadow and purple border on hover.
- Tags: small uppercase outline badges with purple border and text.

## Layout and spacing
- Max content width: `1200px` centered.
- Hero spacing: `70px` block padding.
- Section spacing: `40px` block padding.
- Internal block spacing: `20px`.
- Use responsive multi-column grids on desktop and stacked layouts on mobile.

## Do
- Keep all important text high-contrast.
- Use semantic sections and readable card layouts.
- Keep CTA hierarchy simple and obvious.
- Use inline SVG illustrations rather than external images.

## Don't
- Do not use fake ratings, testimonials, or inflated counters.
- Do not use dark text on gradient buttons.
- Do not rely on JavaScript for core content visibility.
- Do not create bare link lists for generator entries.
