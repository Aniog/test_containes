# Strikingly Generators Hub Design System

## Visual Direction
A clean Strikingly-style marketing page with white surfaces, subtle gray dividers, restrained purple accents, and a focused AI gradient used only for primary CTAs and the hero headline accent. The page should feel like a polished product directory, not an SEO trap.

## Typography
- Headings and buttons: Josefin Sans 700 as the Brandon Grotesque fallback, always uppercase.
- Body: Open Sans 400, 14px base, 1.5 line-height.
- Example classes: `font-["Josefin_Sans",sans-serif] font-bold uppercase`, `font-["Open_Sans",sans-serif] text-sm leading-6`

## Colors
- Brand purple: `#8159BB`
- AI gradient: `linear-gradient(90deg, #7671FF 0%, #CB0C9F 100%)`
- Body text: `#636972`
- Section heading text: `#4B5056`
- Hero line 1: `#2E2E2F`
- Card border: `#C6C9CD`
- Subtle divider: `#E2E4E7`
- Light background: `#F4F6F8`
- White surface: `#FFFFFF`

## Layout
- Max content width: 1200px centered.
- Horizontal padding: 20px mobile, 30px tablet/desktop.
- Vertical section spacing: 40px between sections.
- Hero spacing: 60px to 80px vertical.
- Internal card padding: 20px.
- Use 10px increments for gaps and spacing, with 5px only for tight text/icon pairs.

## Components
### Buttons
- Height: 36px standard, 44px large.
- Radius: 4px.
- Primary buttons: AI gradient fill with white text.
- Ghost buttons: transparent background, 1px brand purple border, brand purple text.
- Example classes: `rounded-[4px] px-[15px] py-[9px] text-sm uppercase font-bold`

### Cards
- White background, 1px `#C6C9CD` border, 3px radius.
- Hover: subtle shadow and purple border.
- No scale transforms.
- Example classes: `rounded-[3px] border border-[var(--border)] bg-white p-5 transition-shadow`

### Tags
- 11px uppercase heading font.
- 2px vertical and 6px horizontal padding.
- 3px radius.
- Purple border, transparent fill.

## Do
- Keep all key content readable with explicit foreground colors.
- Use semantic sections and calm visual hierarchy.
- Keep illustrations as simple line art.
- Preserve generous whitespace and tidy grid alignment.

## Don’t
- Do not use tinted section backgrounds outside the hero wash.
- Do not use black text or black fills.
- Do not add fake ratings, testimonial avatars, or SEO-stuffed link lists.
- Do not use dark text on gradient buttons.
