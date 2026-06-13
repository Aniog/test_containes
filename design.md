# SSourcing China — Visual Style Guide

## Brand Personality
Professional, trustworthy, international B2B. Clean and clear. No exaggerated claims. Practical and solution-oriented.

## Typography
- **Primary font**: Inter (Google Fonts, weights 400/500/600/700)
- **Headings**: Inter 600/700, tracking tight
- **Body**: Inter 400, leading relaxed
- **Small/labels**: Inter 500, uppercase tracking-wide for section labels

## Color Palette
- **Primary**: `#1E3A5F` (deep navy) — trust, authority, B2B professionalism
- **Primary hover**: `#2A4F7A` (lighter navy)
- **Accent**: `#E8A838` (warm gold) — CTAs, highlights, warmth
- **Accent hover**: `#D4952E`
- **Background**: `#FFFFFF` (white)
- **Surface**: `#F8F9FB` (light gray for alternating sections)
- **Text primary**: `#1A1A2E` (near-black)
- **Text secondary**: `#4A5568` (gray)
- **Text muted**: `#718096` (lighter gray)
- **Border**: `#E2E8F0`
- **Success**: `#38A169`
- **Error**: `#E53E3E`

## Tailwind Custom Colors
Map in tailwind.config.js:
- `navy`: #1E3A5F
- `navy-light`: #2A4F7A
- `gold`: #E8A838
- `gold-dark`: #D4952E
- `surface`: #F8F9FB

## Spacing & Layout
- Max content width: 1200px (max-w-6xl)
- Section padding: py-16 md:py-24
- Card padding: p-6 md:p-8
- Grid gap: gap-6 md:gap-8
- Consistent use of Tailwind spacing scale

## Cards
- White background, subtle border (`border border-gray-200`), rounded-xl
- Hover: shadow-lg transition
- No heavy shadows at rest

## Buttons
- **Primary CTA**: bg-gold text-white hover:bg-gold-dark, rounded-lg, px-6 py-3, font-semibold
- **Secondary**: bg-navy text-white hover:bg-navy-light, rounded-lg, px-6 py-3, font-semibold
- **Outline**: border-2 border-navy text-navy hover:bg-navy hover:text-white, rounded-lg, px-6 py-3

## Images
- Use `data-strk-img` for stock images (factory, QC, shipping, containers, warehouse)
- Ratios: 16x9 for heroes, 4x3 for cards, 3x2 for features
- Professional, realistic photography — no illustrations or cartoons

## Section Pattern
- Alternating white (#FFFFFF) and surface (#F8F9FB) backgrounds
- Each section has a label (uppercase, gold, small), heading (navy, bold), and optional subtitle (gray)
- Content centered or left-aligned depending on section

## Do's
- Use generous whitespace
- Keep copy concise and scannable
- Use icons from Lucide React for service/process steps
- Ensure high contrast for readability
- Use responsive design (mobile-first with md: breakpoints)

## Don'ts
- Don't use gradients or flashy animations
- Don't use cartoon/illustration style images
- Don't use light text on light backgrounds
- Don't hardcode hex colors in JSX — use Tailwind custom colors
- Don't use exaggerated marketing language
