# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **cream** (`brand-cream` / `#FAF7F2`): Page background
- **ivory** (`brand-ivory` / `#F5F0E8`): Card backgrounds, alternate sections
- **sand** (`brand-sand` / `#E8DFD3`): Borders, dividers, subtle backgrounds
- **gold** (`brand-gold` / `#C9A96E`): Primary accent — CTAs, highlights, hover states
- **gold-dark** (`brand-gold-dark` / `#A8854A`): Hover state for gold buttons
- **gold-light** (`brand-gold-light` / `#DFC89A`): Subtle gold accents
- **charcoal** (`brand-charcoal` / `#2C2C2C`): Primary text
- **espresso** (`brand-espresso` / `#1A1A1A`): Headings, nav, darkest text
- **muted** (`brand-muted` / `#6B6560`): Secondary text, descriptions
- **muted-light** (`brand-muted-light` / `#9B9590`): Tertiary text, placeholders

## Typography
- **Headings**: `font-serif` (Cormorant Garamond), weight 400–600
- **Body/UI**: `font-sans` (Inter), weight 300–500
- **Product names**: `font-serif uppercase tracking-product` (0.2em letter-spacing)
- **Section labels**: `font-sans uppercase tracking-wide-xl text-xs font-medium`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-0` (image fills), content area `p-4 md:p-6`
- Hairline dividers: `border-t border-brand-sand`

## Components
- **Buttons (primary)**: `bg-brand-gold text-white px-8 py-3 font-sans text-sm tracking-wide-xl uppercase hover:bg-brand-gold-dark transition-colors`
- **Buttons (outlined)**: `border border-brand-charcoal text-brand-charcoal px-8 py-3 font-sans text-sm tracking-wide-xl uppercase hover:bg-brand-charcoal hover:text-white transition-colors`
- **Cards**: No border-radius or very subtle (`rounded-sm`). Soft shadow on hover only.
- **Images**: Object-cover, aspect ratios maintained. Warm gold tones.

## Do's
- Use generous whitespace between sections
- Keep text minimal and elegant
- Use thin hairline dividers (1px, brand-sand color)
- Subtle hover transitions (0.3s ease)
- Large editorial imagery
- Uppercase + wide letter-spacing for product names and labels

## Don'ts
- No rounded corners larger than `rounded-sm`
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
