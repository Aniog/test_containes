# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **brand-cream** `#FAF7F2` — page background, primary surface
- **brand-ivory** `#F5F0E8` — secondary surface, card backgrounds
- **brand-sand** `#E8DFD3` — borders, hairline dividers
- **brand-gold** `#B8860B` — primary accent, CTAs, hover states
- **brand-gold-light** `#D4A843` — hover/lighter accent
- **brand-gold-dark** `#8B6508` — pressed/darker accent
- **brand-charcoal** `#1A1A1A` — primary text, headings
- **brand-graphite** `#2D2D2D` — secondary text
- **brand-slate** `#4A4A4A` — body text
- **brand-muted** `#7A7A7A` — captions, meta text
- **brand-rose** `#C9A96E` — warm metallic accent

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–600
- **Body / UI**: `font-sans` (Inter), weights 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.2em letter-spacing)
- **Section headings**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-slate`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, subtle `shadow-sm` or `border border-brand-sand`
- Hairline dividers: `border-t border-brand-sand`

## Buttons
- **Primary**: `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-widest uppercase font-sans hover:bg-brand-gold transition-colors`
- **Secondary/Outlined**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-colors`
- **Accent**: `bg-brand-gold text-white px-8 py-3 text-sm tracking-widest uppercase hover:bg-brand-gold-dark transition-colors`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions (300ms)
- Soft shadows only where needed
- Maintain warm, inviting tone

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (use slight rounding: rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
