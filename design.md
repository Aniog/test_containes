# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (cream):** `cream` → `#FAF7F2` — warm off-white page base
- **Foreground (charcoal):** `charcoal` → `#1C1917` — primary text
- **Accent (gold):** `gold` → `#B8860B` — CTA buttons, links, highlights
- **Accent hover:** `gold-dark` → `#996F09`
- **Muted:** `muted` → `#F5F0E8` — subtle backgrounds, cards
- **Muted foreground:** `muted-fg` → `#78716C` — secondary text, captions
- **Border:** `border` → `#E7E0D5` — hairline dividers

## Typography
- **Headings / Product names:** `font-serif` → Cormorant Garamond (400, 500, 600)
- **Body / UI:** `font-sans` → Inter (300, 400, 500, 600)
- **Product names:** UPPERCASE, tracking-[0.15em]
- **Heading sizes:** Hero h1: text-5xl md:text-7xl; Section h2: text-3xl md:text-4xl

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp, editorial)
- Hairline dividers: border-t border-border

## Components
- **Buttons (primary):** bg-gold text-white px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-dark transition-colors
- **Buttons (outline):** border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-white transition-colors
- **Cards:** bg-white, no border-radius, subtle shadow-sm on hover
- **Inputs:** border border-border bg-white px-4 py-3 text-sm focus:border-gold focus:ring-0 outline-none

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers (border-border)
- Subtle hover transitions (transition-all duration-300)
- Soft shadows on hover only

## Don'ts
- No rounded-lg or rounded-xl (too casual)
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale badges
