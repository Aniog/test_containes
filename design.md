# Design — Strikingly /generators Hub

Single source of truth for visual style on the AI Generators hub page.
Mirrors Strikingly's component kit. Translate descriptions to CSS values
(this page uses a single inline `<style>` block, not Tailwind utilities).

## Typography
- Headings: Brandon Grotesque 700, ALL UPPERCASE, line-height 1.2.
  Fallback chain: Josefin Sans (Google Fonts) -> Poppins -> system.
  Never use Inter or system-default sans for headings.
- Body: Open Sans 400, 14px base, line-height 1.5.
- Buttons: heading font, 700, uppercase.
- H1: 40-48px desktop, 28-32px mobile.
- H2: 26-32px desktop. H3: ~20px. Body: 14px.

## Colors
- Brand purple: `#8159BB` (badges, accents, ghost button border/text).
- AI gradient: `linear-gradient(135deg, #7671FF, #CB0C9F)`.
  Use ONLY for primary CTAs and the second line of the H1. Never on
  section headers or large backgrounds.
- Body text: `#636972`.
- Section headings: `#4B5056`. Hero H1 line 1: `#2E2E2F`.
- Card border: `#C6C9CD`. Subtle divider: `#E2E4E7`.
- Light background: `#F4F6F8`. Page background: `#FFFFFF`. Avoid `#000000`.
- Hero may have a faint purple-to-pink radial wash (low opacity). No other
  section gets a tinted background.

## Buttons
- Standard: 36px height, 4px radius, 14px heading font uppercase, 9px 15px padding.
- Big variant: 44px height.
- Filled/gradient buttons: white text `#FFFFFF` always. Never dark text on a fill.
- Ghost: transparent bg, 1px brand-purple border, brand-purple text.
- Visible focus state required (outline).

## Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding.
- Hover: subtle box-shadow elevation + 1px brand-purple border. No scale/rotate.

## Tags (category badges)
- 11px heading font uppercase, 2px 6px padding, 3px radius.
- Ghost style: brand-purple text, 1px brand-purple border, no fill.

## Spacing
- Multiples of 10px (5px allowed for tight pairs). 20px between blocks.
- 40px between sections. Hero 60-80px top/bottom. 10px between adjacent buttons.
- Max content width 1200px, centered.

## Do's
- Use semantic HTML (`nav`, `main`, `section`, `article`, `footer`).
- White text on every filled/gradient button.
- Inline SVG (aria-hidden) for all illustrations; explicit width/height.
- CSS logical properties (margin-inline-start etc.) where practical for RTL.

## Don'ts
- No dark text on gradient/solid fills.
- No scale/rotate hover transforms on cards.
- No external image dependencies. No fake ratings/testimonials/counts.
- No tinted backgrounds outside the hero.
