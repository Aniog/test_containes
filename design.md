# Design System - Strikingly Generators Hub

## Typography
- **Headings**: Josefin Sans 700, uppercase, line-height 1.2
  - H1: 40-48px desktop, 28-32px mobile → `text-[40px] md:text-[48px]`
  - H2: 26-32px → `text-[26px] md:text-[32px]`
  - H3: 18-22px → `text-[18px] md:text-[22px]`
- **Body**: Open Sans 400, 14px base, line-height 1.5 → `text-[14px] leading-normal`
- **Buttons**: Josefin Sans 700, uppercase, 14px → `font-heading font-bold uppercase text-[14px]`

## Colors (defined in @theme)
- `brand-purple`: #8159BB — badges, accents
- `ai-blue`: #7671FF — gradient start
- `ai-pink`: #CB0C9F — gradient end
- `body-text`: #636972 — default body text
- `heading-dark`: #2E2E2F — hero H1 line 1
- `heading-section`: #4B5056 — section headings
- `card-border`: #C6C9CD — card borders
- `divider`: #E2E4E7 — subtle dividers
- `bg-light`: #F4F6F8 — light section backgrounds
- `white`: #FFFFFF — page background

## Do's
- Use Tailwind theme colors: `text-body-text`, `text-heading-dark`, `border-card-border`
- Use `ai-gradient-bg` class for primary CTA fills with white text
- Use `ai-gradient-text` class for gradient text effects
- All spacing in multiples of 10px (5px for tight pairs): `p-[10px]`, `p-[20px]`, `gap-[20px]`
- Section spacing: 40px between sections → `py-[40px]`
- Hero spacing: 60-80px → `py-[60px] md:py-[80px]`
- Max content width: 1200px centered → `max-w-[1200px] mx-auto`
- Cards: white bg, 1px card-border, 3px radius, 20px padding
- Tags: 11px Josefin Sans uppercase, 2px/6px padding, 3px radius, ghost style

## Don'ts
- Never use arbitrary hex codes inline; always reference theme colors
- Never use dark text on gradient fills; always white text on gradient
- Never use #000000 as background
- No scale/rotation transforms on card hover
- No gradients on backgrounds or section headers (only CTAs and H1 line 2)
