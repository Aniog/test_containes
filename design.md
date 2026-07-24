# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount, NOT generic.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: `#2C2825` — secondary dark surface
- `velmora-ivory`: `#FAF7F2` — primary light background (warm white)
- `velmora-cream`: `#F2EDE4` — secondary light surface, cards

### Accent (Gold)
- `velmora-gold`: `#C9A96E` — primary brand accent, CTAs, highlights
- `velmora-gold-light`: `#E8D5A3` — hover states, subtle tints
- `velmora-gold-dark`: `#A07840` — pressed states, deep accents

### Text
- `velmora-text`: `#1A1714` — primary body text on light backgrounds
- `velmora-muted`: `#7A6E63` — secondary/muted text
- `velmora-subtle`: `#B5A99A` — placeholder, captions

### UI
- `velmora-border`: `#E0D8CE` — hairline dividers, card borders
- `velmora-surface`: `#FFFFFF` — pure white surfaces

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl md:text-2xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)
- Card Title: `text-base font-medium tracking-[0.12em] uppercase`

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Price: `text-base font-medium` (Manrope 500)
- Nav Links: `text-xs font-medium tracking-[0.12em] uppercase` (Manrope 500)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-velmora-border` (1px, warm beige)
- Divider: `border-t border-velmora-border`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold-dark transition-colors duration-200`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs font-medium tracking-widest uppercase hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200`
- Ghost: `text-velmora-text text-xs font-medium tracking-widest uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use Manrope for all body copy, labels, nav, buttons
- Product names always UPPERCASE with wide letter-spacing
- Generous whitespace between sections
- Warm gold (#C9A96E) as the single accent color
- Hairline borders only — never thick borders
- Subtle hover states — scale, shadow, color shift

## Don'ts
- No bright/neon colors
- No thick borders or heavy shadows
- No generic sans-serif headings
- No crowded layouts
- No discount-looking badges (no "SALE!" in red)
- No stock-photo generic backgrounds
