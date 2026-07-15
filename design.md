# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
All colors are defined in `tailwind.config.js` under `brand.*`.

| Token | Hex | Usage |
|-------|-----|-------|
| brand-cream | #FAF7F2 | Page background |
| brand-ivory | #F5F0E8 | Card/section backgrounds |
| brand-sand | #E8DFD3 | Borders, dividers, subtle fills |
| brand-gold | #C9A96E | Primary accent (buttons, links, highlights) |
| brand-gold-dark | #A8854A | Hover/active accent |
| brand-gold-light | #DFC99B | Subtle gold tints |
| brand-charcoal | #2C2C2C | Primary text |
| brand-espresso | #1A1A1A | Headings, nav, darkest text |
| brand-muted | #6B6460 | Secondary/body text |
| brand-warm-gray | #9B9490 | Tertiary text, placeholders |

## Typography
- **Headings**: `font-serif` (Cormorant Garamond), weight 400–600, sizes 2xl–6xl
- **Product names**: `font-serif uppercase tracking-product` (0.2em letter-spacing)
- **Body**: `font-sans` (Inter), weight 300–500, text-sm to text-base
- **UI labels/buttons**: `font-sans text-xs uppercase tracking-wide-xl font-medium`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`

## Components
- **Buttons (primary)**: `bg-brand-gold text-white font-sans text-xs uppercase tracking-wide-xl px-8 py-3 hover:bg-brand-gold-dark transition-colors`
- **Buttons (outline)**: `border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white transition-colors`
- **Dividers**: `border-t border-brand-sand` (hairline)
- **Cards**: No border-radius or very subtle `rounded-sm`, no heavy shadows. Use `shadow-sm` sparingly.
- **Hover transitions**: `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm, golden tone throughout
- Use thin hairline dividers between sections

## Don'ts
- No heavy drop shadows
- No rounded-lg or pill shapes (keep angular/refined)
- No bright/neon colors
- No cluttered layouts
- No discount/sale-style badges or loud CTAs
