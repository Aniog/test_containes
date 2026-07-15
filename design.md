# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind named tokens)
- `cream` — #FDFBF7 — main page background
- `surface` — #F5F0EA — card/section backgrounds
- `border` — #E8E2DA — hairline dividers, borders
- `charcoal` — #1C1917 — primary text, headings
- `muted` — #8C7E72 — secondary/body text, captions
- `gold` — #9E7A47 — primary accent (buttons, links, highlights)
- `gold-light` — #C4A265 — hover/lighter accent
- `gold-dark` — #7A5C33 — pressed/darker accent

## Typography
- Headings / product names: `font-serif` → Cormorant Garamond (weight 300–700)
- Body / UI: `font-sans` → Inter (weight 300–600)
- Product names: UPPERCASE, tracking-[0.15em]
- Section headings: text-3xl md:text-5xl font-serif font-light tracking-tight

## Spacing & Layout
- Generous whitespace: section padding py-16 md:py-24
- Container max-w-7xl mx-auto px-4 md:px-8
- Hairline dividers: border-t border-border
- Cards: bg-surface rounded-none (sharp edges for editorial feel)

## Buttons
- Primary: bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-sans font-medium hover:bg-gold-light transition-colors
- Outlined: border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors

## Do's
- Use large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translate-y)
- Soft shadows on product cards (shadow-sm)
- Generous letter-spacing on labels/buttons

## Don'ts
- No rounded corners on cards (keep editorial/sharp)
- No bright/saturated colors
- No heavy drop shadows
- No generic e-commerce patterns (no red sale badges)
- No cramped layouts
