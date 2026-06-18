# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **cream** `#FAF7F2` — page background
- **ivory** `#F5F0E8` — card/section backgrounds
- **sand** `#E8DFD3` — borders, dividers, subtle fills
- **gold** `#B8956A` — primary accent (CTAs, highlights)
- **gold-light** `#D4B896` — hover states, secondary accent
- **gold-dark** `#8B6D47` — active/pressed states
- **charcoal** `#2C2420` — primary text
- **espresso** `#1A1512` — headings, nav on dark
- **muted** `#6B5E54` — secondary text, captions
- **warm-gray** `#9C8E82` — placeholder, disabled

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- Product names: UPPERCASE, `tracking-product` (0.2em)
- Section headings: `text-3xl md:text-5xl font-serif font-light`
- Body: `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Hairline dividers: `border-brand-sand border-t`

## Components
- **Buttons (primary)**: `bg-brand-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- **Buttons (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-widest uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-colors`
- **Cards**: No border-radius, subtle shadow on hover `hover:shadow-lg transition-shadow`
- **Inputs**: `border-b border-brand-sand bg-transparent py-2 text-sm focus:border-brand-gold outline-none transition-colors`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (200–300ms)
- Keep accent color (gold) restrained — CTAs and small highlights only

## Don'ts
- No rounded corners on product cards
- No bright/saturated colors
- No heavy drop shadows
- No discount badges or sale stickers
- No generic e-commerce patterns (cluttered grids, loud banners)
