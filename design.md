# Strikingly Generators Hub Design System

## Visual direction
- Clean, product-led marketing page that feels native to Strikingly.
- White page background with subtle gray dividers and restrained purple accents.
- AI gradient is reserved for the hero highlight text and filled primary buttons only.
- Layout should feel structured, scannable, and directory-first rather than promotional clutter.

## Typography
- Heading font: Josefin Sans, 700, uppercase. Intended fallback for Brandon Grotesque.
- Body font: Open Sans, 400, 14px base, 1.5 line-height.
- Buttons use the heading font in uppercase.
- Example Tailwind equivalents:
  - headings: `font-['Josefin_Sans'] font-bold uppercase tracking-[0.08em]`
  - body: `font-['Open_Sans'] text-sm leading-6`

## Color tokens
- Heading dark: `#2E2E2F`
- Section heading gray: `#4B5056`
- Body text: `#636972`
- Brand purple: `#8159BB`
- Gradient start: `#7671FF`
- Gradient end: `#CB0C9F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF`

## Surfaces and cards
- Cards: white background, 1px border, 3px radius, 20px padding.
- Hover: subtle shadow and purple border, no scaling.
- Tags: outline style only, purple text and border.

## Spacing
- Use a 10px spacing rhythm.
- 20px between stacked blocks inside cards and content groups.
- 40px between major sections.
- Hero spacing: 60px to 80px vertically.
- Max content width: 1200px, centered.

## Do
- Keep every text label visibly readable against its background.
- Use semantic sections and obvious hierarchy.
- Keep CTA styling consistent across hero and closing section.
- Preserve generous whitespace on desktop and comfortable stacking on mobile.

## Don't
- Do not use the AI gradient as a section background.
- Do not add fake testimonials, ratings, or counters.
- Do not rely on low-contrast muted text for important content.
- Do not create bare link lists where the brief asks for cards.
