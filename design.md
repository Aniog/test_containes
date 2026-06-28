# Strikingly Generators Hub — Design System

## Fonts
- **Headings**: Josefin Sans (Google Fonts, weight 700, ALL UPPERCASE, line-height 1.2). Fallback: Poppins, sans-serif. Do NOT use Inter for headings.
- **Body**: Open Sans (Google Fonts, weight 400, 14px base, line-height 1.5).
- **Buttons**: Josefin Sans, weight 700, uppercase.
- H1: 40–48px desktop, 28–32px mobile.
- H2: 26–32px desktop.
- Body: 14px base.

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(to right, #7671FF, #CB0C9F)` — use ONLY for primary CTAs and H1 line 2 gradient text.
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF`
- Never use `#000000`.

## Tailwind custom theme (defined in index.css via @theme)
```css
--color-brand-purple: #8159BB;
--color-ai-from: #7671FF;
--color-ai-to: #CB0C9F;
--color-body-text: #636972;
--color-heading: #4B5056;
--color-hero-h1: #2E2E2F;
--color-card-border: #C6C9CD;
--color-divider: #E2E4E7;
--color-light-bg: #F4F6F8;
```

## Buttons
- Standard: 36px height, 4px border-radius, 14px Josefin Sans uppercase, padding 9px 15px.
- Big variant: 44px height.
- Primary (gradient fill): AI gradient background, white text `#FFFFFF`. NEVER dark text on gradient.
- Ghost: transparent background, 1px `#8159BB` border, `#8159BB` text.
- Focus: visible outline (2px offset, brand-purple color).

## Cards
- Background: white
- Border: 1px `#C6C9CD`, 3px border-radius, 20px padding
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, border-color `#8159BB`
- No scale/rotation transforms on hover.

## Tags (category badges)
- 11px Josefin Sans uppercase, padding 2px 6px, 3px border-radius
- Ghost style: `#8159BB` text, 1px `#8159BB` border, no fill.

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- 20px between blocks, 40px between sections.
- Hero: 60–80px top/bottom.
- Max content width: 1200px, centered.
- 10px between adjacent buttons.

## Do's
- Use `margin-inline-start` / `margin-inline-end` for RTL readiness.
- Use semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- All interactive elements keyboard-accessible with visible focus states.
- White text on all gradient/solid-color filled buttons.
- Decorative SVGs: `aria-hidden="true"`.

## Don'ts
- No fake testimonials, star ratings, or customer counts.
- No embedded builder form on the generators hub page.
- No `href="#"` placeholder links.
- No Inter or system-default sans for headings.
- No gradient backgrounds on sections (only hero may have faint purple-pink wash).
- No scale/rotation transforms on card hover.
