# Design System — Strikingly Generators Hub

## Typography
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Tailwind: `font-heading font-bold uppercase leading-tight`
  - H1: `text-3xl md:text-5xl` (28–48px)
  - H2: `text-2xl md:text-3xl` (26–32px)
  - H3: `text-xl md:text-2xl`
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
  - Tailwind: `font-body text-sm leading-normal`
- **Buttons**: Josefin Sans, weight 700, uppercase
  - Tailwind: `font-heading font-bold uppercase text-sm`

## Colors (named in Tailwind config)
- `brand-purple`: #8159BB — badges, accents
- `ai-blue`: #7671FF — gradient start
- `ai-pink`: #CB0C9F — gradient end
- `body-text`: #636972 — body copy
- `heading-dark`: #2E2E2F — hero H1 line 1
- `heading-section`: #4B5056 — section headings
- `card-border`: #C6C9CD — card borders
- `divider`: #E2E4E7 — subtle dividers
- `bg-light`: #F4F6F8 — light section backgrounds
- `white`: #FFFFFF — default page background

## Buttons
- Standard: h-9 (36px), rounded (4px border-radius), px-4 py-2, text-sm uppercase
- Big: h-11 (44px), px-6 py-3
- Primary (AI gradient): `bg-gradient-to-r from-ai-blue to-ai-pink text-white`
- Ghost: `bg-transparent border border-brand-purple text-brand-purple`
- All filled buttons use white text. Never dark text on gradient.

## Cards
- `bg-white border border-card-border rounded` (3px radius)
- Padding: p-5 (20px)
- Hover: `hover:shadow-md hover:border-brand-purple` transition
- No scale/rotation transforms on hover

## Tags (category badges)
- `text-xs font-heading uppercase px-1.5 py-0.5 rounded border border-brand-purple text-brand-purple`

## Spacing
- All margins/paddings in multiples of 10px (Tailwind: 2.5 = 10px, 5 = 20px, 10 = 40px)
- Between blocks: gap-5 (20px)
- Between sections: py-10 (40px)
- Hero: py-16 md:py-20 (60–80px)
- Between adjacent buttons: gap-2.5 (10px)
- Max content width: max-w-[1200px] mx-auto

## Do's
- Use CSS logical properties where practical (margin-inline-start)
- Use semantic HTML (nav, main, section, article, footer)
- Keep all content in source HTML (no client-only rendering)
- Use inline SVG for illustrations

## Don'ts
- No hardcoded hex in class strings (use named colors)
- No fake social proof
- No #000000 text
- No gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No scale/rotation transforms on hover
