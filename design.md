# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (defined in tailwind.config.js as `brand-*`)
- **Cream** (`brand-cream` / #FAF7F2): Primary background
- **Ivory** (`brand-ivory` / #F5F0E8): Secondary background, cards
- **Sand** (`brand-sand` / #E8DFD3): Borders, dividers, subtle fills
- **Gold** (`brand-gold` / #B8956A): Primary accent, CTAs, highlights
- **Gold Light** (`brand-gold-light` / #D4B896): Hover states, secondary accent
- **Gold Dark** (`brand-gold-dark` / #8B6914): Active states
- **Charcoal** (`brand-charcoal` / #1A1A1A): Primary text, headings
- **Graphite** (`brand-graphite` / #2D2D2D): Secondary text
- **Muted** (`brand-muted` / #6B6B6B): Tertiary text, captions
- **Warm Gray** (`brand-warm-gray` / #9A9490): Placeholder text, disabled

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- Product names: UPPERCASE with `tracking-product` (0.2em)
- Section headings: `text-3xl md:text-5xl font-serif font-light`
- Body text: `text-sm md:text-base font-sans font-normal`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), text below with `p-4`
- Grid gaps: `gap-4 md:gap-6`

## Components
- **Buttons (primary)**: `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-graphite transition-colors`
- **Buttons (outline)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wide-xl uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-colors`
- **Buttons (gold)**: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- **Dividers**: `border-t border-brand-sand` (thin hairline)
- **Cards**: No border-radius or very subtle (`rounded-none` or `rounded-sm`), soft shadow on hover
- **Hover transitions**: `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions (opacity, translate, shadow)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded corners on product cards
- No bright/neon colors
- No heavy drop shadows
- No discount-style badges or starburst graphics
- No generic stock photo feel — warm, editorial tone
