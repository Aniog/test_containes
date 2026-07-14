# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #3D3733 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE7D9 — Warm cream (section alternates)
- `velmora-mist`: #D4CEC4 — Warm gray (muted text, borders)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, highlights)
- `velmora-gold-dark`: #A8854A — Deep gold (pressed states)

### Text
- `velmora-ink`: #1A1714 — Primary text on light backgrounds
- `velmora-warm-gray`: #6B6460 — Secondary/body text
- `velmora-pale`: #F5F0E8 — Text on dark backgrounds

## Typography

### Fonts
- **Serif (headings, product names, logo):** Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI, labels):** Manrope — clean, modern, readable

### Scale
- Display: 72–96px, Cormorant Garamond, weight 300–400
- H1: 48–64px, Cormorant Garamond, weight 400
- H2: 36–48px, Cormorant Garamond, weight 400
- H3: 24–32px, Cormorant Garamond, weight 400
- Product Name: 20–28px, Cormorant Garamond, UPPERCASE, letter-spacing 0.15em
- Body: 14–16px, Manrope, weight 400
- Label/UI: 11–13px, Manrope, weight 500–600, UPPERCASE, letter-spacing 0.1em

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Cards: p-6 to p-8
- Hairline dividers: border-velmora-mist/30, 1px

## Components

### Buttons
- **Primary (CTA):** bg-velmora-gold text-velmora-obsidian px-8 py-3.5 font-manrope text-xs uppercase tracking-widest hover:bg-velmora-gold-light transition-all duration-300
- **Outlined:** border border-velmora-gold text-velmora-gold px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian
- **Ghost (dark bg):** border border-velmora-pale/40 text-velmora-pale hover:border-velmora-gold hover:text-velmora-gold

### Cards
- Product cards: bg-white, subtle shadow on hover (shadow-lg), smooth scale(1.01) on hover
- No rounded corners on product images (editorial feel), slight rounding on cards (rounded-sm)

### Dividers
- `<hr className="border-t border-velmora-mist/30" />`

### Hover Transitions
- All transitions: duration-300 ease-out
- Image zoom: scale-105 on hover
- Opacity reveals: opacity-0 group-hover:opacity-100

## Do's
- Use Cormorant Garamond for ALL headings and product names
- UPPERCASE + wide tracking for product names and labels
- Warm gold (#C9A96E) as the ONLY accent color
- Generous padding — never cramped
- Thin 1px borders, never thick
- Soft shadows, never harsh drop shadows

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No generic blue links
- No tight spacing
- No bold sans-serif headings
- No white backgrounds for hero/dark sections
