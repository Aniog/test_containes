# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `brand-cream` (#FAF7F2) — warm off-white base
- **Secondary bg**: `brand-ivory` (#F5F0E8) — slightly warmer for sections
- **Warm accent bg**: `brand-warm` (#EDE6DA) — for highlighted blocks
- **Gold accent**: `brand-gold` (#B8860B) — primary accent, CTAs, highlights
- **Gold light**: `brand-gold-light` (#D4A843) — hover states
- **Gold dark**: `brand-gold-dark` (#8B6914) — pressed states
- **Text primary**: `brand-charcoal` (#1A1A1A) — headings, body
- **Text secondary**: `brand-dark` (#2C2C2C) — subheadings
- **Text muted**: `brand-muted` (#6B6B6B) — captions, meta
- **Text light muted**: `brand-light-muted` (#9A9A9A) — placeholders

## Typography
- **Headings**: `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI**: `font-sans` (Inter) — weights 300–600
- **Product names**: uppercase, `tracking-product` (0.2em), font-serif
- **Section titles**: `text-3xl md:text-5xl font-serif font-light`
- **Body text**: `text-sm md:text-base font-sans text-brand-muted`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, use subtle `shadow-sm` or `border border-brand-warm`
- Hairline dividers: `border-t border-brand-warm`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream hover:bg-brand-dark` — solid, premium
- Accent: `bg-brand-gold text-white hover:bg-brand-gold-light` — for CTAs
- Outlined: `border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-brand-cream`
- All buttons: `font-sans text-xs tracking-widest uppercase px-8 py-3 transition-all duration-300`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow-hidden parent
- Links: no underline by default, underline on hover or gold color shift
- Soft shadows: `shadow-sm` or `shadow-md` only where needed

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No heavy drop shadows or gradients
- No bright/neon colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No cluttered layouts
- No generic stock photo feel — keep editorial warmth
