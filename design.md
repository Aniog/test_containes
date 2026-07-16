# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
All colors are defined in `tailwind.config.js` under `brand.*`.

| Token | Hex | Usage |
|-------|-----|-------|
| brand-cream | #FAF7F2 | Page background |
| brand-ivory | #F5F0E8 | Card/section backgrounds |
| brand-sand | #E8DFD3 | Borders, dividers, hover states |
| brand-gold | #B8956A | Primary accent, CTAs, highlights |
| brand-gold-light | #D4B896 | Hover states, secondary accent |
| brand-gold-dark | #8B6914 | Active states |
| brand-charcoal | #1A1A1A | Primary text, headings |
| brand-graphite | #2D2D2D | Secondary text |
| brand-muted | #6B6B6B | Tertiary text, captions |
| brand-warm-gray | #9A9490 | Placeholder text, disabled |

## Typography
- **Headings**: `font-serif` → Cormorant Garamond (300–700)
- **Body/UI**: `font-sans` → Inter (300–700)
- **Product names**: `font-serif uppercase tracking-product` (0.2em letter-spacing)
- **Section titles**: `font-serif text-3xl md:text-4xl font-light`
- **Body text**: `font-sans text-sm md:text-base font-normal text-brand-graphite`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`

## Borders & Dividers
- Hairline dividers: `border-brand-sand border-t` (1px)
- Card borders: none by default, subtle on hover `hover:shadow-sm`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm font-sans uppercase tracking-wide-xl hover:bg-brand-gold-dark transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm font-sans uppercase tracking-wide-xl hover:bg-brand-charcoal hover:text-white transition-colors`
- No border-radius (sharp edges for premium feel) or very subtle `rounded-none`

## Shadows & Effects
- Soft shadows on hover: `hover:shadow-md transition-shadow`
- Image hover: `scale-105 transition-transform duration-500`
- Fade-in animations: `opacity-0 → opacity-100 transition-opacity duration-700`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (300–500ms)
- Product names always uppercase with wide letter-spacing
- Gold accent sparingly — for CTAs and key highlights only

## Don'ts
- No rounded corners on buttons (keep sharp/premium)
- No heavy drop shadows
- No bright/saturated colors
- No discount badges or sale stickers
- No cluttered layouts
- No generic stock photos — always warm, editorial jewelry imagery
