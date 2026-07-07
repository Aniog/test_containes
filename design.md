# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `brand-cream` (#FAF7F2) — warm off-white base
- **Secondary bg**: `brand-ivory` (#F5F0E8) — slightly warmer for sections
- **Accent surface**: `brand-sand` (#E8DFD3) — muted warm for cards/dividers
- **Primary accent**: `brand-gold` (#B8860B) — rich gold for CTAs, highlights
- **Gold light**: `brand-gold-light` (#D4A843) — hover states
- **Gold dark**: `brand-gold-dark` (#8B6508) — active states
- **Text primary**: `brand-charcoal` (#1A1A1A) — headings, body
- **Text secondary**: `brand-graphite` (#2D2D2D) — subheadings
- **Text muted**: `brand-muted` (#6B6B6B) — captions, meta
- **Warm gray**: `brand-warm-gray` (#9A9490) — borders, dividers

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond), weights 300–700
- **Body / UI**: `font-sans` (Inter), weights 300–600
- **Product names**: UPPERCASE, `tracking-widest-plus` (0.2em)
- **Section headings**: font-serif, text-3xl to text-5xl, font-light or font-normal
- **Body text**: font-sans, text-sm to text-base, font-light to font-normal

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: minimal borders, subtle shadows (`shadow-sm`), rounded-none or rounded-sm
- Dividers: 1px `border-brand-sand` or `border-brand-warm-gray/30`

## Buttons
- Primary: `bg-brand-charcoal text-brand-cream` with hover `bg-brand-gold`
- Secondary/Outlined: `border border-brand-charcoal text-brand-charcoal` hover `border-brand-gold text-brand-gold`
- Pill shape for variants: `rounded-full px-4 py-2`
- Transitions: `transition-all duration-300`

## Do's
- Use large editorial imagery with warm tones
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, color)
- Generous padding inside cards and sections
- Uppercase + letter-spacing for product names and nav links

## Don'ts
- No harsh shadows or thick borders
- No bright/neon colors
- No rounded-lg or rounded-xl on cards (keep angular/editorial)
- No cluttered layouts — always prioritize breathing room
- No generic e-commerce blue/green CTAs
