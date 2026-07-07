# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: #2C2825 — secondary dark surface
- `velmora-ivory`: #FAF7F2 — warm off-white, primary light background
- `velmora-cream`: #F2EDE4 — slightly deeper warm cream, card backgrounds

### Accent
- `velmora-gold`: #C9A96E — warm muted gold, primary accent
- `velmora-gold-light`: #E2C98A — lighter gold for hover states
- `velmora-gold-dark`: #A8854A — deeper gold for pressed states

### Text
- `velmora-text`: #1A1714 — primary text on light backgrounds
- `velmora-muted`: #7A6E64 — secondary/muted text
- `velmora-subtle`: #B5A99A — placeholder, dividers

### UI
- `velmora-border`: #E8E0D5 — hairline dividers
- `velmora-surface`: #FFFFFF — pure white cards

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm text-velmora-muted`
- UI Labels: `font-manrope text-xs uppercase tracking-widest`
- Price: `font-manrope text-base font-medium text-velmora-text`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-border`
- Divider: `h-px bg-velmora-border`

## Buttons
- Primary (solid): `bg-velmora-gold text-white font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-gold-dark transition-colors duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-gold hover:text-white transition-all duration-300`
- Ghost: `text-velmora-text font-manrope text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Animations
- Hover scale: `hover:scale-[1.02] transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Transition default: `transition-all duration-300 ease-in-out`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline borders, never thick
- Serif for all product names and headings
- Gold accent used sparingly — not everywhere
- Uppercase + wide tracking for labels and product names

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No drop shadows on text
- No generic blue links
- No crowded layouts
