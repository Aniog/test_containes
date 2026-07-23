# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (defined in tailwind.config.js)
- **brand-cream** `#FAF7F2` — page background
- **brand-ivory** `#F5F0E8` — card/section backgrounds
- **brand-sand** `#E8DFD3` — borders, dividers, subtle fills
- **brand-gold** `#B8956A` — primary accent (CTAs, highlights)
- **brand-gold-light** `#D4B896` — hover states, secondary accent
- **brand-gold-dark** `#8B6914` — active/pressed states
- **brand-charcoal** `#2C2C2C` — primary text
- **brand-espresso** `#1A1A1A` — headings, nav
- **brand-muted** `#6B6B6B` — secondary text, captions
- **brand-warm** `#3D3530` — dark section backgrounds

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- Product names: UPPERCASE with `tracking-product` (0.15em)
- Section headings: `text-3xl md:text-5xl font-serif font-light`
- Body text: `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Hairline dividers: `border-t border-brand-sand`

## Components
- **Buttons (primary)**: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- **Buttons (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase hover:bg-brand-charcoal hover:text-white transition-colors`
- **Cards**: No border-radius, subtle shadow on hover `hover:shadow-lg transition-shadow`
- **Inputs**: `border border-brand-sand bg-white px-4 py-3 text-sm focus:border-brand-gold focus:outline-none`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (300ms)
- Soft shadows only on hover

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
