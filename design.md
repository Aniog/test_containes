# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — primary light background
- `cream`: #FAF7F2 — card/section background
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary text on light
- `ink-muted`: #6B6560 — secondary/body text
- `ink-faint`: #9C9590 — placeholder, captions

### Utility
- `white`: #FFFFFF
- `overlay`: rgba(26,23,20,0.55) — hero overlay

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — weights 300, 400, 500, 600
- Body/UI: "Manrope" (sans-serif) — weights 300, 400, 500, 600

### Scale
- `text-display`: 4xl–6xl, Cormorant Garamond, font-light, tracking-wide
- `text-heading`: 2xl–3xl, Cormorant Garamond, font-normal
- `text-subheading`: xl, Cormorant Garamond, font-light, italic
- `text-product-name`: sm–base, Manrope, font-medium, UPPERCASE, tracking-widest
- `text-body`: sm–base, Manrope, font-normal
- `text-caption`: xs, Manrope, font-light, tracking-wide

## Spacing & Layout
- Max content width: 1280px
- Section padding: py-20 md:py-28
- Card gap: gap-6 md:gap-8
- Generous whitespace — never cramped

## Components

### Buttons
- Primary: bg-gold text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-all
- Outlined: border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian
- Ghost: text-ink-muted hover:text-gold text-xs tracking-widest uppercase

### Cards
- Product card: bg-cream, no border, soft shadow on hover, overflow-hidden
- Hover: scale-[1.01] shadow-md transition-all duration-300

### Dividers
- Hairline: border-t border-linen (1px, very subtle)
- Accent divider: w-12 h-px bg-gold mx-auto (short gold line under headings)

### Inputs
- border border-linen bg-cream text-ink px-4 py-3 text-sm focus:border-gold focus:outline-none

## Do's
- Use Cormorant Garamond for all headings, product names, hero text
- Use UPPERCASE + wide tracking for product names and nav links
- Use gold sparingly as a true accent — not everywhere
- Generous padding, never cramped
- Thin hairline borders, not thick borders
- Subtle hover transitions (200–300ms ease)

## Don'ts
- No bright/neon colors
- No thick borders or heavy shadows
- No generic e-commerce blue/red CTAs
- No crowded layouts
- No Comic Sans, Roboto, or generic fonts
