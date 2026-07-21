# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark surface
- `velmora-stone`: #3D3830 — muted dark surface

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — primary light background, page base
- `velmora-cream`: #FAF7F2 — card backgrounds, hero overlay
- `velmora-parchment`: #EDE6D8 — subtle section backgrounds

### Gold Accents
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover states, lighter gold
- `velmora-gold-muted`: #A8895A — darker gold, pressed states

### Text
- `velmora-ink`: #1A1714 — primary body text on light backgrounds
- `velmora-mist`: #7A7068 — secondary/muted text
- `velmora-whisper`: #B0A898 — placeholder, disabled text

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl md:text-2xl font-medium uppercase tracking-widest`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm leading-relaxed`
- UI Labels: `font-manrope text-xs uppercase tracking-widest`
- Prices: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-parchment` (1px)
- Card border: `border border-velmora-parchment`
- Rounded: `rounded-none` for editorial feel, `rounded-sm` for pills

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-ink font-manrope text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors`

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/20`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold tones that complement jewelry photography

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No bold/heavy serif weights (keep it light and elegant)
