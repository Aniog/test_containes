# Design System — Strikingly Generators Hub

## Fonts
- **Headings**: Josefin Sans (Google Fonts fallback for Brandon Grotesque), weight 700, ALL UPPERCASE, line-height 1.2. Tailwind: `font-heading font-bold uppercase leading-tight`
- **Body**: Open Sans, weight 400, 14px base, line-height 1.5. Tailwind: `font-body font-normal text-sm leading-normal`
- **Buttons**: Josefin Sans, weight 700, uppercase. Tailwind: `font-heading font-bold uppercase`

### Sizes
- H1: 40–48px desktop (`text-5xl`), 28–32px mobile (`text-3xl`)
- H2: 26–32px desktop (`text-3xl`)
- Body: 14px base (`text-sm`)
- Tags: 11px (`text-xs`)

## Colors (named in tailwind.config.js)
- `brand-purple`: #8159BB — badges, accents
- `ai-blue`: #7671FF — gradient start
- `ai-pink`: #CB0C9F — gradient end
- `body-text`: #636972 — body copy
- `heading-dark`: #2E2E2F — hero H1 line 1
- `heading-section`: #4B5056 — section headings
- `card-border`: #C6C9CD — card borders
- `divider`: #E2E4E7 — subtle dividers
- `bg-light`: #F4F6F8 — light background sections
- `white`: #FFFFFF — default page background

## Buttons
- Standard: h-9 (36px), rounded (4px border-radius), text-sm font-heading uppercase, px-4 py-2
- Big: h-11 (44px)
- Primary (AI gradient): `bg-gradient-to-r from-ai-blue to-ai-pink text-white`
- Ghost: `bg-transparent border border-brand-purple text-brand-purple`
- All filled buttons use white text. Never dark text on gradient.

## Cards
- `bg-white border border-card-border rounded` (3px radius)
- Padding: p-5 (20px)
- Hover: `hover:shadow-md hover:border-brand-purple` transition
- No scale or rotation transforms on hover

## Tags (category badges)
- text-xs font-heading uppercase, px-1.5 py-0.5, rounded (3px)
- Ghost: `text-brand-purple border border-brand-purple`

## Spacing
- All margins/paddings in multiples of 10px (use Tailwind spacing scale: 2.5=10px, 5=20px, 10=40px)
- 20px between blocks (gap-5, space-y-5)
- 40px between sections (py-10)
- Hero: 60–80px top/bottom (py-16 to py-20)
- 10px between adjacent buttons (gap-2.5)
- Max content width: 1200px centered (`max-w-[1200px] mx-auto`)

## Do's
- Use CSS logical properties where practical (margin-inline-start)
- Use semantic HTML (nav, main, section, article, footer)
- All interactive elements keyboard-accessible with visible focus states
- Use real `<a>` and `<button>` elements
- Inline SVG for illustrations, no external images

## Don'ts
- No #000000 text
- No fake testimonials, ratings, or customer counts
- No scale/rotation transforms on hover
- No AI gradient on backgrounds or section headers (only CTAs and H1 line 2)
- No dark text on gradient fills
