# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `brand-cream` (#FAF7F2) — warm off-white base
- **Secondary surface**: `brand-ivory` (#F5F0E8) — slightly warmer for cards/sections
- **Warm accent surface**: `brand-warm` (#EDE6DA) — for highlighted blocks
- **Primary accent**: `brand-gold` (#B8860B) — dark gold for CTAs, links, accents
- **Gold light**: `brand-gold-light` (#D4A843) — hover states, secondary gold
- **Gold dark**: `brand-gold-dark` (#8B6914) — active states
- **Text primary**: `brand-charcoal` (#1A1A1A) — headings, body
- **Text secondary**: `brand-graphite` (#2D2D2D) — subheadings
- **Text muted**: `brand-muted` (#6B6B6B) — captions, meta
- **Text light muted**: `brand-muted-light` (#9A9A9A) — placeholders

## Typography
- **Headings**: `font-serif` (Cormorant Garamond) — weights 300–700
- **Body/UI**: `font-sans` (Inter) — weights 300–600
- **Product names**: UPPERCASE, `tracking-product` (0.2em), font-serif, font-medium
- **Section titles**: font-serif, text-3xl to text-5xl, font-light or font-normal
- **Body text**: font-sans, text-sm to text-base, font-normal, text-brand-muted

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: no heavy borders, use subtle `shadow-sm` or `border border-brand-warm`
- Hairline dividers: `border-t border-brand-warm`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream px-8 py-3 text-sm tracking-wider uppercase font-sans font-medium hover:bg-brand-graphite transition-colors`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-sm tracking-wider uppercase hover:bg-brand-charcoal hover:text-brand-cream transition-colors`
- Gold accent: `bg-brand-gold text-white px-8 py-3 text-sm tracking-wider uppercase hover:bg-brand-gold-dark transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105` with overflow-hidden container
- Links: underline on hover with `hover:underline underline-offset-4`
- Soft shadows on elevated elements: `shadow-sm`

## Do's
- Use generous whitespace between sections
- Keep product imagery large and editorial
- Use thin hairline dividers between sections
- Maintain warm, inviting tone
- Use serif for emotional/brand text, sans for functional UI

## Don'ts
- No heavy drop shadows or 3D effects
- No bright/neon colors
- No rounded-full buttons (use slight rounding: rounded-none or rounded-sm)
- No cluttered layouts — breathe
- No generic stock photo vibes — editorial warmth
