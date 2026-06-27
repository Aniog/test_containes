# Strikingly Generators Hub - Design System

## Typography
- **Headings**: Brandon Grotesque (commercial) → Josefin Sans (Google Fonts fallback) → Poppins (secondary fallback). Weight 700, ALL UPPERCASE, line-height 1.2.
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5.
- **Buttons**: Same heading font, weight 700, uppercase.
- **H1**: 40-48px desktop, 28-32px mobile.
- **H2**: 26-32px desktop.
- **Body**: 14px base.

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(135deg, #7671FF, #CB0C9F)` — use only for primary CTAs and H1 line 2.
- Body text: `#636972`
- Headings: `#4B5056` (section), `#2E2E2F` (hero H1 line 1)
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White: `#FFFFFF` (default page background)
- Avoid `#000000`.

## Buttons
- Standard: 36px height, 4px border-radius, 14px uppercase, 9px 15px padding.
- Big variant: 44px height.
- Filled (gradient/solid): white text `#FFFFFF` always.
- Ghost: transparent bg, 1px brand-purple border, brand-purple text.

## Cards
- White background, 1px `#C6C9CD` border, 3px border-radius, 20px padding.
- Hover: subtle box-shadow elevation, 1px brand-purple border. No scale/rotation.

## Tags (category badges)
- 11px uppercase heading font, 2px 6px padding, 3px border-radius.
- Ghost style: brand-purple text, 1px brand-purple border, no fill.

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- 20px between blocks, 40px between sections.
- Hero: 60-80px top/bottom.
- 10px between adjacent buttons.
- Max content width: 1200px, centered.

## Layout
- Use CSS logical properties (`margin-inline-start` instead of `margin-left`) for RTL readiness.
- Responsive grids: 3-col desktop, 2-col tablet, 1-col mobile.
- Hero: 2-col desktop, stacked mobile (headline/CTAs first, illustration second).

## Do's and Don'ts
- DO use the AI gradient only on primary CTAs and H1 line 2.
- DO use white text on all filled buttons.
- DO use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- DO ensure all interactive elements are keyboard accessible with visible focus states.
- DON'T use Inter or system-default sans for headings.
- DON'T use fake social proof, ratings, or testimonials.
- DON'T embed the builder form on this page.
- DON'T use `display: none` for progressive collapse; use CSS height transitions.
- DON'T add any JSON-LD besides BreadcrumbList.
