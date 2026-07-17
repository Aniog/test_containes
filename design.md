# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Cream** (`brand-cream` / `#FAF7F2`): Page background
- **Ivory** (`brand-ivory` / `#F5F0E8`): Card backgrounds, alternate sections
- **Sand** (`brand-sand` / `#E8DFD3`): Borders, dividers, subtle fills
- **Gold** (`brand-gold` / `#C9A96E`): Primary accent, CTAs, highlights
- **Gold Dark** (`brand-gold-dark` / `#A8854A`): Hover states for gold
- **Gold Light** (`brand-gold-light` / `#D4BC8B`): Subtle gold accents
- **Charcoal** (`brand-charcoal` / `#2C2C2C`): Primary text
- **Espresso** (`brand-espresso` / `#1A1A1A`): Headings, nav on solid bg
- **Muted** (`brand-muted` / `#6B6560`): Secondary text, descriptions
- **Muted Light** (`brand-muted-light` / `#9A9490`): Tertiary text, placeholders

## Typography
- **Headings**: `font-serif` (Cormorant Garamond), weight 400–600, sizes 2xl–6xl
- **Body**: `font-sans` (Inter), weight 300–500, sizes sm–base
- **Product names**: `font-serif uppercase tracking-product` (0.2em letter-spacing)
- **Navigation links**: `font-sans text-xs uppercase tracking-wide-xl font-medium`
- **Prices**: `font-sans font-medium`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`
- Hairline dividers: `border-brand-sand` (1px)

## Components
- **Buttons (primary)**: `bg-brand-gold text-white px-8 py-3 text-xs uppercase tracking-wide-xl font-medium hover:bg-brand-gold-dark transition-colors`
- **Buttons (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 text-xs uppercase tracking-wide-xl font-medium hover:bg-brand-charcoal hover:text-white transition-colors`
- **Cards**: No border-radius or very subtle (`rounded-sm`), thin border or no border, soft shadow on hover
- **Inputs**: `border border-brand-sand bg-white px-4 py-3 text-sm focus:border-brand-gold focus:outline-none transition-colors`

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Subtle hover transitions (opacity, translateY, color)
- Product names always uppercase with wide letter-spacing

## Don'ts
- No rounded-lg or rounded-xl on cards (too casual)
- No bright/saturated colors
- No heavy drop shadows
- No dense layouts — let content breathe
- No generic e-commerce blue/green CTAs
