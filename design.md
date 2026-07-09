# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind tokens)
- `cream` (#FAF8F5) — main page background
- `ivory` (#FFFFFF) — card/surface background
- `charcoal` (#1C1917) — primary text
- `warm` (#57534E) — secondary/body text
- `gold` (#B5894E) — primary accent (buttons, links, highlights)
- `gold-dark` (#96703A) — accent hover state
- `gold-light` (#D4B88C) — light gold for borders/subtle accents
- `taupe` (#F5F0EB) — muted section backgrounds
- `border` (#E7E0D8) — hairline dividers

## Typography
- **Headings / Product names**: `font-serif` → Cormorant Garamond (weights 400, 500, 600, 700)
- **Body / UI**: `font-sans` → Inter (weights 300, 400, 500, 600)
- Product names: UPPERCASE, tracking-widest (letter-spacing: 0.1em)
- Section headings: text-3xl md:text-4xl lg:text-5xl font-serif font-light
- Body: text-sm md:text-base font-sans text-warm

## Spacing & Layout
- Generous whitespace: sections py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Cards: rounded-none or rounded-sm (sharp/editorial)
- Hairline dividers: border-t border-border

## Components
- **Buttons (primary)**: bg-gold text-white px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors
- **Buttons (outline)**: border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-white transition-colors
- **Cards**: bg-ivory, no border-radius, subtle shadow-sm on hover
- **Inputs**: border border-border bg-ivory px-4 py-3 text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (transition-all duration-300)
- Soft shadows only on hover (shadow-sm)

## Don'ts
- No rounded-lg or rounded-xl (too casual)
- No bright/neon colors
- No heavy drop shadows
- No cluttered layouts
- No discount/sale-style badges
