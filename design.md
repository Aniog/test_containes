# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (defined in tailwind.config.js as `brand-*`)
- **cream** `#FAF7F2` — page background, light surfaces
- **ivory** `#F5F0E8` — card backgrounds, subtle sections
- **sand** `#E8DFD3` — borders, dividers, hover states
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
- **Section headings**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no border-radius or very subtle `rounded-sm`
- Hairline dividers: `border-t border-brand-sand`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-white transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Opacity reveals on hover for overlays

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, golden tones throughout
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No rounded corners larger than `rounded-sm`
- No bright/neon colors
- No heavy drop shadows (use `shadow-sm` max)
- No cluttered layouts
- No discount/sale-style badges or loud CTAs
