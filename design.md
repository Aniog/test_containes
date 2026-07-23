# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind named colors under `brand-*`)
- **cream** `#FAF7F2` — page background, light surfaces
- **ivory** `#F5F0E8` — card backgrounds, subtle sections
- **sand** `#E8DFD3` — borders, dividers, muted backgrounds
- **gold** `#C9A96E` — primary accent, CTAs, highlights
- **gold-dark** `#A8854A` — hover state for gold accent
- **gold-light** `#D4BC8A` — subtle gold tints
- **charcoal** `#2C2C2C` — primary text, headings
- **espresso** `#1A1A1A` — darkest text, nav on scroll
- **muted** `#6B6560` — secondary text, descriptions
- **warm-gray** `#9B9490` — placeholder text, disabled states

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.15em)
- **Section headings**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Hairline dividers: `border-t border-brand-sand`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-white transition-colors`

## Shadows & Effects
- Cards: no shadow or very subtle `shadow-sm`
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: slight scale `hover:scale-105` with overflow hidden

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, golden tones throughout
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on cards (keep angular/editorial)
- No cluttered layouts
- No discount/sale-style badges or banners
