# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (defined in tailwind.config.js)
- **brand-cream** `#FAF7F2` — page background
- **brand-ivory** `#F5F0E8` — card/section backgrounds
- **brand-sand** `#E8DFD3` — borders, dividers, subtle fills
- **brand-gold** `#B8956A` — primary accent (CTAs, highlights)
- **brand-gold-light** `#D4B896` — hover states, secondary accent
- **brand-gold-dark** `#8B6D47` — active/pressed states
- **brand-charcoal** `#2C2420` — primary text
- **brand-espresso** `#1A1512` — headings, nav on solid bg
- **brand-warm** `#3D3330` — secondary text
- **brand-muted** `#7A6E66` — tertiary text, captions

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–600
- **Body / UI**: `font-sans` (Inter), weights 300–500
- Product names: UPPERCASE with `tracking-product` (0.2em)
- Section headings: `text-3xl md:text-5xl font-serif font-light`
- Body text: `text-sm md:text-base font-sans font-light text-brand-warm`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Hairline dividers: `border-t border-brand-sand`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-white transition-colors`

## Do's
- Use large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate-y)
- Soft shadows on cards (`shadow-sm`)
- Generous letter-spacing on product names

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount-style badges or starburst shapes
