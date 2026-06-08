# Design System — Strikingly Generators Hub

## Fonts
- **Headings**: Josefin Sans (Google Fonts), weight 700, ALL UPPERCASE, line-height 1.2
  - Fallback: Poppins, sans-serif
- **Body**: Open Sans (Google Fonts), weight 400, 14px base, line-height 1.5
- **Buttons**: Josefin Sans, weight 700, uppercase

### Sizes
- H1: 40–48px desktop, 28–32px mobile (`text-5xl` / `text-3xl`)
- H2: 26–32px desktop (`text-3xl` / `text-2xl`)
- H3: 20–24px desktop (`text-xl`)
- Body: 14px base (`text-sm`)
- Button: 14px (`text-sm`)
- Tag: 11px (`text-xs`)

## Colors (defined in tailwind.config.js as named tokens)
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

## Do's
- Use Tailwind classes exclusively for spacing, color, layout
- Use `font-heading` for headings and buttons, `font-body` for body text
- Use `bg-gradient-to-r from-ai-blue to-ai-pink` for AI gradient fills
- Use `bg-clip-text text-transparent` for gradient text
- Use multiples of 10px for spacing (p-5 = 20px, gap-5 = 20px, etc.)
- Use `rounded` (4px) for buttons and cards (border-radius: 3–4px)
- Cards: white bg, 1px card-border, rounded, p-5, hover:shadow-md hover:border-brand-purple
- Tags: text-xs uppercase, px-1.5 py-0.5, rounded, border border-brand-purple text-brand-purple

## Don'ts
- No hardcoded hex in JSX — always use named Tailwind tokens
- No Inter or system-default for headings
- No #000000 anywhere
- No scale/rotation transforms on hover
- No gradient backgrounds on sections (only CTAs and H1 line 2)
- No inline styles
