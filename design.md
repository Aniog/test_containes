# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Background**: `bg-cream` (#FAF7F2) — warm off-white
- **Surface**: `bg-surface` (#FFFFFF) — pure white cards
- **Primary text**: `text-charcoal` (#1A1A1A) — near-black
- **Secondary text**: `text-warm-gray` (#6B6360) — warm medium gray
- **Accent**: `text-gold` / `bg-gold` (#B8860B) — dark goldenrod, premium feel
- **Accent hover**: `bg-gold-dark` (#96700A) — deeper gold
- **Accent light**: `bg-gold-light` (#F5ECD7) — soft gold tint for backgrounds
- **Border**: `border-hairline` (#E8E2DA) — warm hairline dividers
- **Dark section**: `bg-charcoal` (#1A1A1A) — footer, dark blocks

## Typography
- **Headings / Product names**: Cormorant Garamond (serif), weights 400/500/600
- **Body / UI**: Inter (sans-serif), weights 300/400/500/600
- **Product names**: UPPERCASE, letter-spacing: 0.12em
- **Section headings**: Cormorant Garamond, normal case or uppercase depending on context

## Tailwind Classes (common)
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-warm-gray`
- Product name: `font-serif uppercase tracking-widest text-charcoal`
- Accent button: `bg-gold text-white hover:bg-gold-dark transition-colors`
- Outlined button: `border border-gold text-gold hover:bg-gold hover:text-white transition-colors`
- Hairline divider: `border-t border-hairline`
- Card: `bg-surface rounded-none shadow-sm`

## Spacing
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Container max-width: `max-w-7xl mx-auto`
- Card gap: `gap-4 md:gap-6`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers
- Subtle hover transitions (opacity, translate-y)
- Soft shadows on cards
- Buttons feel premium (solid accent or outlined)

## Don'ts
- No rounded corners on product cards (use sharp edges)
- No heavy drop shadows
- No bright/neon colors
- No discount badges or sale stickers
- No cluttered layouts
- No generic stock photo feel
