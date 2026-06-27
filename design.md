# Strikingly /generators Hub — Design Tokens

Single source of truth for visual style. Translate to CSS variables / classes.
This page is a static HTML page (inline `<style>`), not a client-rendered SPA.

## Typography
- Headings: Brandon Grotesque (paid) → fallback Josefin Sans (Google Fonts, 700),
  then Poppins. ALL UPPERCASE, line-height 1.2. Never Inter/system for headings.
- Body: Open Sans (Google Fonts), 400, 14px base, line-height 1.5.
- Buttons: heading font, 700, uppercase.
- H1: 40–48px desktop, 28–32px mobile.
- H2: 26–32px desktop.
- Body: 14px base.

## Colors
- Brand purple: `#8159BB` (badges, accents, ghost button border/text)
- AI gradient: `linear-gradient(90deg, #7671FF, #CB0C9F)` — ONLY primary CTAs + H1 line 2.
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF` (never `#000000`)
- Hero: faint purple→pink wash (low opacity radial/linear). No other tinted sections.

## Buttons
- Standard: 36px height, 4px radius, 14px heading font uppercase, 9px/15px padding.
- Big variant: 44px height.
- Filled (gradient or solid): white text `#FFFFFF` always. Never dark text on fill.
- Ghost: transparent bg, 1px brand-purple border, brand-purple text.
- Visible focus state (outline) on all.

## Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: subtle box-shadow lift + 1px brand-purple border. No scale/rotate.

## Tags (category badges)
- 11px heading font uppercase, 2px/6px padding, 3px radius.
- Ghost: brand-purple text, 1px brand-purple border, no fill.

## Spacing
- Multiples of 10px (5px for tight pairs). 20px between blocks. 40px between sections.
- Hero 60–80px top/bottom. 10px between adjacent buttons.
- Max content width 1200px, centered.

## Do's
- Use CSS logical properties (margin-inline-start etc.) where practical for RTL.
- Inline SVG / CSS for all illustrations; explicit width/height to prevent CLS.
- Semantic HTML: nav, main, section, article, footer, h1/h2/h3.

## Don'ts
- No fake testimonials, ratings, customer counts.
- No gradient on backgrounds or section headers (only CTAs + H1 line 2).
- No dark text on filled buttons.
- No external image dependencies.
