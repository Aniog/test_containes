# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream (bg):** `bg-brand-cream` (#FAF7F2) — primary background
- **Ivory:** `bg-brand-ivory` (#F5F0E8) — secondary/card backgrounds
- **Sand:** `bg-brand-sand` (#E8DFD3) — borders, dividers, subtle fills
- **Gold:** `text-brand-gold` / `bg-brand-gold` (#B8956A) — primary accent, CTAs
- **Gold Light:** `text-brand-gold-light` (#D4B896) — hover states, secondary accent
- **Charcoal:** `text-brand-charcoal` (#2C2C2C) — primary text
- **Espresso:** `bg-brand-espresso` (#1A1A1A) — dark sections, footer
- **Muted:** `text-brand-muted` (#6B6B6B) — secondary text
- **Warm Gray:** `text-brand-warm-gray` (#9C9488) — tertiary text, captions

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–600
- **Product names:** `font-serif uppercase tracking-product` — always uppercase with wide letter-spacing
- **Section headings:** `font-serif text-3xl md:text-5xl font-light`
- **Body text:** `font-sans text-sm md:text-base text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, subtle shadows `shadow-sm`, rounded `rounded-sm`

## Borders & Dividers
- Hairline dividers: `border-brand-sand` with `border-t` (1px)
- Card borders: `border border-brand-sand/50`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wide-xl uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wide-xl uppercase hover:bg-brand-charcoal hover:text-white transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: scale slightly `hover:scale-105` with overflow hidden
- Links: underline on hover with `hover:underline underline-offset-4`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text, sans for functional UI
- Maintain warm, golden tone throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
