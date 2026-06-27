# Strikingly Generators Hub — Design System

## Fonts
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Fallbacks: Poppins, sans-serif
  - Tailwind: `font-heading`
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
  - Tailwind: `font-body`
- **Buttons**: Josefin Sans, weight 700, uppercase

## Type Scale
- H1 desktop: 44px (`text-[44px]`), mobile: 30px (`text-[30px]`)
- H2 desktop: 28px (`text-[28px]`), mobile: 22px (`text-[22px]`)
- H3 desktop: 18px (`text-[18px]`)
- Body: 14px (`text-sm`)
- Small/tags: 11px (`text-[11px]`)

## Colors
- Brand purple: `#8159BB` — badges, accents, ghost borders
- AI gradient: `linear-gradient(to right, #7671FF, #CB0C9F)` — primary CTAs, H1 line 2
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF`

## Buttons
- Standard: 36px height, 4px radius, 14px Josefin Sans uppercase, padding 9px 15px
- Large (44px): hero and closing CTAs
- Gradient fill: AI gradient background, white text `#FFFFFF`
- Ghost: transparent bg, 1px `#8159BB` border, `#8159BB` text
- Never dark text on gradient or solid fill

## Cards
- White bg, 1px `#C6C9CD` border, 3px radius, 20px padding
- Hover: `box-shadow: 0 4px 16px rgba(0,0,0,0.10)`, 1px `#8159BB` border
- No scale/rotation on hover

## Tags (category badges)
- 11px Josefin Sans uppercase, padding 2px 6px, 3px radius
- Ghost: `#8159BB` text, 1px `#8159BB` border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks, 40px between sections
- Hero: 60–80px top/bottom
- Max content width: 1200px, centered

## Do's
- Use `font-heading` for all headings and button labels
- Use `font-body` for all body copy
- Use white text on all gradient/solid-fill buttons
- Use `#F4F6F8` for alternating section backgrounds
- Use CSS logical properties where practical

## Don'ts
- No `#000000` anywhere
- No gradient on section backgrounds
- No fake social proof (ratings, testimonials, counts)
- No dark text on gradient fills
- No Inter or system-default sans for headings
