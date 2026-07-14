# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **brand-cream** `#FAF7F2` — page background
- **brand-ivory** `#F5F0E8` — card/section backgrounds
- **brand-sand** `#E8DFD3` — borders, dividers
- **brand-taupe** `#B8A99A` — muted text, secondary elements
- **brand-charcoal** `#2C2825` — primary text, headings
- **brand-espresso** `#1A1714` — darkest text, nav on scroll
- **brand-gold** `#C9A96E` — primary accent (buttons, highlights)
- **brand-gold-light** `#D4B87A` — hover state for gold
- **brand-gold-dark** `#A8874F` — active/pressed state

## Typography
- **Headings / Product Names**: `font-serif` (Cormorant Garamond), weights 300–600
- **Body / UI**: `font-sans` (Inter), weights 300–500
- **Product names**: UPPERCASE with `tracking-widest-plus` (0.2em)
- **Section headings**: `text-display` or `text-display-sm`, serif

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Thin hairline dividers: `border-brand-sand` with `border-t`

## Components
- **Buttons (primary)**: `bg-brand-gold text-white px-8 py-3 text-sm font-sans tracking-wider uppercase hover:bg-brand-gold-light transition-colors`
- **Buttons (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase hover:bg-brand-charcoal hover:text-white transition-colors`
- **Cards**: No border-radius or very subtle (rounded-sm). Soft shadow on hover.
- **Hover transitions**: `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, shadow)
- Restrained use of gold accent

## Don'ts
- No rounded-lg or rounded-full on cards
- No bright/saturated colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale badges or loud CTAs
