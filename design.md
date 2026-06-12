# Strikingly Design System

## Typography
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Poppins, then sans-serif
  - H1: 40–48px desktop, 28–32px mobile (`text-4xl md:text-5xl`)
  - H2: 26–32px desktop (`text-2xl md:text-3xl`)
  - H3: 20–24px (`text-xl md:text-2xl`)
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

## Colors
- Brand purple: `#8159BB` — badges, accents, ghost borders
- AI gradient: `linear-gradient(to right, #7671FF, #CB0C9F)` — primary CTAs and H1 line 2 only
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF`

## Buttons
- Standard: 36px height, 4px border-radius, 14px font, 9px/15px padding
- Large (44px): hero and closing CTAs
- Gradient fill: AI gradient background, white text (#FFFFFF) — NEVER dark text on gradient
- Ghost: transparent bg, 1px brand-purple border, brand-purple text
- Spacing between adjacent buttons: 10px

## Cards
- Background: white
- Border: 1px `#C6C9CD`, 3px border-radius
- Padding: 20px
- Hover: box-shadow elevation, 1px brand-purple border
- No scale/rotation transforms on hover

## Tags (category badges)
- 11px Josefin Sans, uppercase
- 2px/6px padding, 3px border-radius
- Ghost: brand-purple text, 1px brand-purple border, no fill

## Spacing
- All margins/paddings in multiples of 10px (5px allowed for tight pairs)
- 20px between blocks
- 40px between sections
- Hero: 60–80px top/bottom
- Max content width: 1200px, centered

## Do's
- Use `font-heading` class for all headings (Josefin Sans)
- Use `font-body` class for body text (Open Sans)
- Use AI gradient only on primary CTAs and H1 line 2
- White text on all filled/gradient buttons
- Semantic HTML: nav, main, section, article, footer
- CSS logical properties for RTL readiness

## Don'ts
- No Inter or system-default sans for headings
- No gradient on section backgrounds or headers
- No fake social proof (ratings, testimonials, customer counts)
- No dark text on gradient or solid-color button fills
- No `href="#"` placeholder links
