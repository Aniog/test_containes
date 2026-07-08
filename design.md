# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind tokens: `brand-*`)
- **cream** `#FAF7F2` — page background, light surfaces
- **ivory** `#F5F0E8` — card backgrounds, subtle sections
- **sand** `#E8DFD3` — borders, dividers, muted backgrounds
- **gold** `#C9A96E` — primary accent, CTAs, highlights
- **gold-dark** `#A8854A` — hover state for gold accent
- **charcoal** `#2C2C2C` — primary text, headings
- **espresso** `#1A1A1A` — darkest text, nav on scroll, footer bg
- **muted** `#6B6B6B` — secondary text, descriptions
- **warm-gray** `#9A9490` — tertiary text, placeholders

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weight 400–600
- **Body / UI**: `font-sans` (Inter), weight 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.2em)
- **Nav links**: UPPERCASE, `tracking-wide-nav` (0.12em), `text-xs` or `text-sm`, `font-medium`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Thin hairline dividers: `border-brand-sand` with `border-t`
- Cards: no heavy shadows; use `shadow-sm` or none, with `border border-brand-sand/50`

## Buttons
- **Primary (accent)**: `bg-brand-gold text-white px-8 py-3 text-sm font-medium tracking-wide-nav uppercase hover:bg-brand-gold-dark transition-colors`
- **Secondary (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm font-medium tracking-wide-nav uppercase hover:bg-brand-charcoal hover:text-white transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105` with overflow hidden
- Opacity reveals: `opacity-0 group-hover:opacity-100 transition-opacity`

## Do's
- Use generous padding and whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm, golden tone throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows or rounded corners on cards
- No discount badges or sale stickers
- No cluttered layouts
- No dark mode (brand is warm/light)
