# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream (background):** `brand-cream` (#FAF7F2)
- **Ivory (cards/sections):** `brand-ivory` (#F5F0E8)
- **Sand (borders/dividers):** `brand-sand` (#E8DFD3)
- **Taupe (muted text):** `brand-taupe` (#B8A99A)
- **Gold (accent/CTA):** `brand-gold` (#C9A96E)
- **Gold Dark (hover):** `brand-gold-dark` (#A8863C)
- **Charcoal (body text):** `brand-charcoal` (#2C2825)
- **Espresso (headings):** `brand-espresso` (#1A1714)
- **Muted (secondary text):** `brand-muted` (#6B5E54)

## Typography
- **Headings:** `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI:** `font-sans` (Inter) — weights 300–600
- **Product names:** uppercase, `tracking-product` (0.2em)
- **Section labels:** uppercase, `tracking-wide-xl` (0.15em), `text-xs`, `font-sans`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal border, soft shadow `shadow-sm`, rounded `rounded-sm`

## Borders & Dividers
- Hairline dividers: `border-brand-sand` with `border-t`
- Card borders: `border border-brand-sand/50`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-espresso` — `px-8 py-3 text-sm tracking-wide-xl uppercase font-sans`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream`
- Gold accent: `bg-brand-gold text-white hover:bg-brand-gold-dark`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105`
- Links: `hover:text-brand-gold`

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions
- Restrained accent color usage

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
