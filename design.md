# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest surface, cards on light bg
- `linen`: #EDE8DF — subtle dividers, borders on light

### Accent (Gold)
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deeper gold

### Text
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6560 — secondary/muted text
- `ink-faint`: #9E9892 — placeholder, captions

### Semantic
- `success`: #4A7C59
- `error`: #9B3A3A

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- `text-display`: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- `text-heading`: 2xl–3xl, Cormorant Garamond, font-normal
- `text-subheading`: xl, Cormorant Garamond, font-normal
- `text-product-name`: sm–base, Cormorant Garamond, UPPERCASE, tracking-widest
- `text-body`: sm–base, Manrope, font-normal
- `text-label`: xs–sm, Manrope, font-medium, tracking-wider, UPPERCASE

## Spacing
- Generous whitespace: sections use py-20 to py-32
- Cards: p-6 to p-8
- Hairline dividers: border-linen (1px)

## Buttons
- **Primary (CTA)**: bg-gold text-obsidian px-8 py-3 font-medium tracking-widest uppercase text-sm hover:bg-gold-light transition-all
- **Outlined**: border border-gold text-gold px-8 py-3 hover:bg-gold hover:text-obsidian
- **Ghost**: text-ink-muted hover:text-ink underline-offset-4 hover:underline

## Components

### Cards
- Product card: bg-cream, no border, soft shadow on hover (shadow-md), overflow-hidden
- Hover: scale-[1.01] transition-transform duration-300

### Nav
- Transparent over hero, transitions to bg-obsidian/95 backdrop-blur on scroll
- Logo: Cormorant Garamond, tracking-widest, uppercase
- Links: Manrope, text-sm, tracking-wider, uppercase

### Dividers
- `border-t border-linen` — hairline, warm neutral

### Animations
- Transitions: duration-300 ease-out
- Hover scale: scale-[1.02]
- Fade in: opacity-0 → opacity-100

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide tracking for product names and labels
- Keep backgrounds warm (parchment, cream, obsidian)
- Gold accent sparingly — CTAs, prices, stars, highlights
- Large editorial imagery with generous whitespace

## Don'ts
- No bright white (#FFFFFF) backgrounds — use parchment/cream
- No cool grays — keep everything warm-toned
- No rounded-full buttons (use rounded-none or rounded-sm for premium feel)
- No generic blue links
- No cluttered layouts
