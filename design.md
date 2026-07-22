# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind named colors in `tailwind.config.js`)
- **brand-cream** `#FAF7F2` — page background, light surfaces
- **brand-ivory** `#F5F0E8` — card backgrounds, subtle sections
- **brand-sand** `#E8DFD3` — borders, dividers, muted backgrounds
- **brand-gold** `#B8860B` — primary accent, CTAs, highlights
- **brand-gold-light** `#D4A843` — hover states, secondary gold
- **brand-gold-dark** `#8B6914` — active states
- **brand-charcoal** `#1A1A1A` — primary text, headings
- **brand-dark** `#0D0D0D` — hero overlays, footer background
- **brand-warm-gray** `#6B5E53` — body text, secondary text
- **brand-muted** `#9C8E82` — captions, placeholders

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.2em)
- **Section headings**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-warm-gray`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, use `bg-brand-ivory` or subtle shadow `shadow-sm`
- Dividers: `border-brand-sand` with `border-t` (hairline)

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-gold transition-colors duration-300`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wide-xl uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-colors duration-300`
- Gold accent: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wide-xl uppercase hover:bg-brand-gold-dark transition-colors duration-300`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with `overflow-hidden` parent
- Links: underline on hover with `hover:text-brand-gold`
- Shadows: `shadow-sm` for cards, no heavy drop shadows

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright neon colors
- No heavy borders or box shadows
- No discount/sale badges or loud promotional elements
- No generic stock photo feel — keep editorial warmth
- No rounded corners on cards (use sharp or very subtle rounding)
