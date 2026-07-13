# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount, NOT generic.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest surface, cards
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary text on light backgrounds
- `ink-muted`: #6B6560 — secondary/body text
- `ink-faint`: #9C9590 — placeholder, captions
- `ivory`: #F5F0E8 — primary text on dark backgrounds
- `ivory-muted`: #C8C0B5 — secondary text on dark

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial)
- **Sans**: Manrope (body, UI, labels, prices)

### Scale
- Display: Cormorant Garamond, 64–80px, weight 300–400, tracking normal
- H1: Cormorant Garamond, 48–56px, weight 400
- H2: Cormorant Garamond, 36–42px, weight 400
- H3: Cormorant Garamond, 24–28px, weight 500
- Product Name: Cormorant Garamond, 20–24px, UPPERCASE, letter-spacing 0.15em
- Body: Manrope, 15–16px, weight 400, line-height 1.7
- Label/UI: Manrope, 12–13px, weight 500–600, UPPERCASE, letter-spacing 0.1em
- Price: Manrope, 18–20px, weight 600

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Cards: p-6 to p-8
- Hairline dividers: border-linen (1px)

## Components

### Buttons
- Primary: `bg-gold text-obsidian px-8 py-3 font-manrope text-sm font-semibold uppercase tracking-widest hover:bg-gold-light transition-all duration-300`
- Outlined: `border border-gold text-gold px-8 py-3 font-manrope text-sm font-semibold uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-ink-muted hover:text-gold transition-colors duration-200`

### Cards
- Product card: `bg-cream rounded-none overflow-hidden` — NO border-radius on product cards (editorial feel)
- Soft shadow: `shadow-[0_2px_20px_rgba(26,23,20,0.06)]`

### Transitions
- Default: `transition-all duration-300 ease-out`
- Hover image: `scale-105 duration-500`
- Nav: `transition-colors duration-200`

## Do's
- Use Cormorant Garamond for ALL headings and product names
- Product names always UPPERCASE with wide letter-spacing
- Hairline dividers (1px, linen color) between sections
- Warm gold (#C9A96E) as the ONLY accent color
- Generous padding — never cramped
- Large editorial imagery
- Subtle hover states (scale, opacity, color shift)

## Don'ts
- No border-radius on product cards or hero images (editorial, not bubbly)
- No bright colors other than gold accent
- No heavy drop shadows
- No generic blue/purple links
- No crowded layouts
- No discount-looking elements (no red sale badges, no "SALE 50% OFF" banners)
