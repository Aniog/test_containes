# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `bg-cream` → #FDFBF7
- **Surface (warm muted):** `bg-muted` → #F5F0EB
- **Text primary (charcoal):** `text-charcoal` → #1C1917
- **Text secondary:** `text-warm-gray` → #6B5E54
- **Accent (antique gold):** `text-gold` / `bg-gold` → #9E7C4C
- **Accent hover:** `hover:bg-gold-dark` → #7D6139
- **Border (hairline):** `border-warm` → #E8E0D8
- **Dark surface (for hero/footer):** `bg-dark` → #1C1917

## Typography
- **Headings / Product names:** font-serif → Cormorant Garamond (400, 500, 600)
- **Body / UI:** font-sans → Inter (300, 400, 500, 600)
- **Product names:** UPPERCASE, tracking-[0.15em]
- **Section headings:** text-3xl md:text-4xl font-serif font-light
- **Body text:** text-sm md:text-base font-sans text-warm-gray

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Hairline dividers: border-t border-warm

## Components
- **Buttons (primary):** bg-gold text-cream px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors
- **Buttons (outlined):** border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-cream transition-colors
- **Cards:** no border-radius, subtle shadow-sm on hover, transition-shadow
- **Inputs:** border border-warm bg-transparent px-4 py-3 text-sm focus:border-gold focus:outline-none

## Do's
- Use generous whitespace between sections
- Use serif for all headings and product names
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, shadow, translate)
- Keep accent color (gold) restrained — CTAs and highlights only

## Don'ts
- No rounded-lg or rounded-full on cards/containers
- No bright/saturated colors
- No heavy drop shadows
- No busy patterns or gradients
- No discount-style badges or loud sale banners
- No generic stock photo feel
