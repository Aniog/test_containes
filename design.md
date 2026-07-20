# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (defined in tailwind.config.js as `brand-*`)
- **cream** `#FAF7F2` — page background
- **ivory** `#F5F0E8` — card/section backgrounds
- **sand** `#E8DFD3` — borders, dividers, subtle fills
- **gold** `#B8860B` — primary accent (CTAs, highlights)
- **gold-light** `#D4A843` — hover states, secondary accent
- **gold-dark** `#8B6508` — active/pressed states
- **charcoal** `#1A1A1A` — primary text, headings
- **espresso** `#2C2420` — nav, footer backgrounds
- **warm** `#3D3330` — secondary dark text
- **muted** `#6B5E57` — body text, descriptions
- **text-light** `#8C7E76` — captions, metadata

## Typography
- **Headings**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body/UI**: `font-sans` (Inter), weights 300–600
- **Product names**: uppercase, `tracking-product` (0.2em)
- **Section labels**: uppercase, `tracking-wide-xl` (0.15em), `text-xs` or `text-sm`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`
- Dividers: `border-brand-sand` with `border-t` (hairline)

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-warm` — solid dark
- Accent: `bg-brand-gold text-white hover:bg-brand-gold-light` — gold CTA
- Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream`
- All buttons: `font-sans text-xs uppercase tracking-wide-xl py-3 px-8 transition-all duration-300`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow hidden
- Links: no underline, opacity change on hover
- Shadows: minimal, `shadow-sm` only on elevated cards

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers (`border-brand-sand`)
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on product cards
- No cluttered layouts
- No discount/sale-style badges or banners
