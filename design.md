# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **brand-cream** `#FAF7F2` — page background, light surfaces
- **brand-ivory** `#F5F0E8` — card backgrounds, subtle sections
- **brand-sand** `#E8DFD3` — borders, dividers, muted backgrounds
- **brand-gold** `#B8860B` — primary accent, CTAs, highlights
- **brand-gold-light** `#D4A843` — hover states, secondary gold
- **brand-gold-dark** `#8B6508` — active states, pressed buttons
- **brand-charcoal** `#1A1A1A` — primary text, headings
- **brand-graphite** `#2D2D2D` — secondary text, nav
- **brand-slate** `#4A4A4A` — body text
- **brand-muted** `#7A7A7A` — captions, placeholders

## Typography
- **Headings / Product Names**: `font-serif` (Cormorant Garamond), weight 400–600
- **Body / UI**: `font-sans` (Inter), weight 300–500
- **Product names**: UPPERCASE, `tracking-product` (0.2em)
- **Section headings**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-slate`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal border, subtle shadow `shadow-sm`, rounded `rounded-none` or `rounded-sm`

## Borders & Dividers
- Hairline dividers: `border-brand-sand` with `border-t`
- No heavy borders. Thin 1px lines only.

## Buttons
- Primary: `bg-brand-charcoal text-white px-8 py-3 text-xs tracking-widest uppercase font-sans font-medium hover:bg-brand-gold transition-colors duration-300`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors duration-300`
- Gold accent: `bg-brand-gold text-white px-8 py-3 text-xs tracking-widest uppercase hover:bg-brand-gold-dark transition-colors duration-300`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Links: underline on hover with `hover:underline`
- Opacity reveals: `opacity-0 group-hover:opacity-100 transition-opacity`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Maintain warm, golden tones
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product cards
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
