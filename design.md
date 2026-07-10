# Velmora Fine Jewelry — Design System

## Visual Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry brand targeting women 25–45.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white base
- **Foreground (charcoal):** `charcoal` → `#1A1A1A` — near-black for text
- **Accent (gold):** `gold` → `#B8860B` — warm dark gold for CTAs and accents
- **Accent light:** `gold-light` → `#D4A843` — lighter gold for hover states
- **Muted:** `taupe` → `#8C7B6B` — warm taupe for secondary text
- **Surface:** `sand` → `#F0EBE3` — slightly darker cream for cards/sections
- **Border:** `border` → `#E8E0D4` — warm hairline dividers

## Typography
- **Headings / Product names:** Cormorant Garamond (serif), weights 400/500/600
- **Body / UI:** Inter (sans-serif), weights 300/400/500/600
- **Product names:** UPPERCASE, letter-spacing: 0.15em (`tracking-widest` or custom `tracking-[0.15em]`)
- **Heading sizes:** Hero: text-5xl md:text-7xl, Section: text-3xl md:text-4xl, Card: text-lg md:text-xl

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Hairline dividers: border-t border-border

## Components
- **Buttons (primary):** bg-gold text-cream px-8 py-3 uppercase tracking-widest text-sm font-sans hover:bg-gold-light transition-colors
- **Buttons (outline):** border border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm hover:bg-gold hover:text-cream transition-colors
- **Cards:** bg-white border-none, subtle shadow-sm on hover
- **Nav links:** text-sm uppercase tracking-widest font-sans text-charcoal hover:text-gold transition-colors

## Do's
- Use generous whitespace between sections
- Keep imagery large and editorial
- Use thin hairline dividers (1px, border-border color)
- Subtle hover transitions (transition-all duration-300)
- Product names always uppercase with wide tracking

## Don'ts
- No rounded corners on product cards (keep editorial/sharp)
- No bright/saturated colors
- No heavy shadows (keep shadows minimal: shadow-sm only)
- No discount-looking badges or loud sale banners
- No generic e-commerce patterns (no grid overload)
