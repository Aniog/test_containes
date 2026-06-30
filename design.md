# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream (background):** `bg-brand-cream` (#FAF7F2)
- **Ivory (cards/sections):** `bg-brand-ivory` (#F5F0E8)
- **Warm (hover/accent bg):** `bg-brand-warm` (#EDE6DA)
- **Gold (primary accent):** `text-brand-gold` / `bg-brand-gold` (#B8860B)
- **Gold Light:** `text-brand-gold-light` (#D4A843)
- **Gold Dark:** `text-brand-gold-dark` (#8B6508)
- **Charcoal (text):** `text-brand-charcoal` (#1A1A1A)
- **Graphite (secondary text):** `text-brand-graphite` (#2D2D2D)
- **Muted (body text):** `text-brand-muted` (#6B6B6B)
- **Muted Light (captions):** `text-brand-muted-light` (#9A9A9A)

## Typography
- **Headings / Product names:** `font-serif` (Cormorant Garamond)
- **Body / UI:** `font-sans` (Inter)
- **Product names:** uppercase + `tracking-product` (0.2em letter-spacing)
- **Section headings:** `text-3xl md:text-4xl lg:text-5xl font-serif font-light`
- **Body text:** `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24 lg:py-32`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no border, subtle shadow `shadow-sm`, rounded `rounded-sm`

## Borders & Dividers
- Hairline dividers: `border-t border-black/[0.08]`
- No heavy borders anywhere

## Buttons
- Primary: `bg-brand-charcoal text-white px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-graphite transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-charcoal hover:text-white transition-colors`
- Gold accent: `bg-brand-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-brand-gold-dark transition-colors`

## Hover & Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Image hover: `scale-105` with overflow hidden
- Links: opacity change or underline reveal

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use serif for emotional/brand text
- Use sans-serif for functional UI
- Maintain warm, golden tone throughout

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-lg or rounded-full on cards
- No dense, cluttered layouts
- No discount/sale-style badges
