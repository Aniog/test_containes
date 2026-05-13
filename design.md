# Strikingly Generators Hub — Design System

## Typography

- **Headings**: Josefin Sans 700, ALL UPPERCASE, line-height 1.2. Fallback: Poppins.
  - H1: 40–48px desktop, 28–32px mobile. `font-heading font-bold uppercase`
  - H2: 26–32px desktop. `font-heading font-bold uppercase text-2xl md:text-3xl`
  - H3: 18–22px. `font-heading font-bold uppercase text-lg md:text-xl`
- **Body**: Open Sans 400, 14px base, line-height 1.5. `font-body text-sm`
- **Buttons**: Josefin Sans 700, uppercase, 14px.

## Colors

- Brand purple: `#8159BB` — badges, accents, ghost borders
- AI gradient: `linear-gradient(90deg, #7671FF, #CB0C9F)` — primary CTAs and H1 line 2 only
- Body text: `#636972`
- Section headings: `#4B5056`
- Hero H1 line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- Page background: `#FFFFFF`

## Buttons

- **Primary (gradient)**: `ai-gradient-bg` fill, white text `#FFFFFF`, 4px border-radius, 44px height (big), 36px standard. Padding 9px 15px. Font: heading uppercase.
- **Ghost**: transparent bg, 1px `#8159BB` border, `#8159BB` text. Same sizing.
- Never use dark text on gradient or solid-color fills.

## Cards

- White bg, 1px `#C6C9CD` border, 3px border-radius, 20px padding.
- Hover: `box-shadow: 0 4px 16px rgba(129,89,187,0.12)`, border becomes `#8159BB`.
- No scale/rotation transforms on hover.

## Tags (category badges)

- 11px Josefin Sans uppercase, 2px 6px padding, 3px border-radius.
- Ghost: `#8159BB` text, 1px `#8159BB` border, no fill.

## Spacing

- All margins/paddings in multiples of 10px (5px allowed for tight pairs).
- 20px between blocks, 40px between sections.
- Hero: 60–80px top/bottom.
- Max content width: 1200px, centered.

## Do's

- Use `font-heading` for all headings and button labels.
- Use `font-body` for all body copy.
- Use AI gradient only on primary CTAs and H1 line 2.
- Use white text on all filled buttons.
- Use `gen-card` class for all generator cards.
- Use CSS logical properties where practical.

## Don'ts

- Don't use Inter or system-default sans for headings.
- Don't splash gradient on backgrounds or section headers.
- Don't use `#000000` anywhere.
- Don't use scale/rotation transforms on card hover.
- Don't add fake testimonials, ratings, or customer counts.
