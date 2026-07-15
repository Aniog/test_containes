# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `bg-brand-cream` (#FAF7F2)
- **Secondary surface (ivory):** `bg-brand-ivory` (#F5F0E8)
- **Warm accent surface:** `bg-brand-warm` (#E8DFD3)
- **Gold accent (primary CTA):** `bg-brand-gold` / `text-brand-gold` (#B8956A)
- **Gold light:** `text-brand-gold-light` (#D4B896)
- **Gold dark:** `text-brand-gold-dark` (#8B6914)
- **Charcoal (text primary):** `text-brand-charcoal` (#1A1A1A)
- **Dark (text secondary):** `text-brand-dark` (#2C2C2C)
- **Muted (body text):** `text-brand-muted` (#6B6B6B)
- **Light muted (captions):** `text-brand-light-muted` (#9A9A9A)

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–600
- **Product names:** `font-serif uppercase tracking-product` (0.15em letter-spacing)
- **Section headings:** `font-serif text-3xl md:text-5xl font-light`
- **Body text:** `font-sans text-sm md:text-base text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, soft shadows `shadow-sm hover:shadow-md`
- Hairline dividers: `border-t border-brand-warm`

## Buttons
- Primary: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-gold-dark transition-colors`
- Secondary/outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-charcoal hover:text-white transition-colors`

## Transitions
- All interactive elements: `transition-all duration-300`
- Hover image zoom: `hover:scale-105 transition-transform duration-400`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, scale, shadow)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product cards (use `rounded-none` or very subtle `rounded-sm`)
- No discount badges or sale stickers
- No cluttered layouts
