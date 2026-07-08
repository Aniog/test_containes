# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — primary dark background, nav solid state
- `velmora-charcoal`: `#2C2825` — secondary dark surface
- `velmora-stone`: `#4A4540` — muted text on dark

### Warm Neutrals (primary surfaces)
- `velmora-cream`: `#FAF7F2` — main page background
- `velmora-linen`: `#F2EDE4` — card backgrounds, section alternates
- `velmora-sand`: `#E8DFD0` — borders, dividers, subtle fills

### Gold Accent (brand accent)
- `velmora-gold`: `#C9A96E` — primary accent, CTAs, highlights
- `velmora-gold-light`: `#DFC08A` — hover states, lighter gold
- `velmora-gold-dark`: `#A8854A` — pressed states, deep gold

### Text
- `velmora-ink`: `#1A1714` — primary body text on light backgrounds
- `velmora-muted`: `#7A6E65` — secondary/caption text
- `velmora-subtle`: `#B0A89E` — placeholder, disabled

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)
- Quote/Pull: `text-2xl font-light italic` (Cormorant Garamond 300 italic)

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Price: `text-base font-medium` (Manrope 500)
- Nav Links: `text-xs font-medium tracking-[0.12em] uppercase` (Manrope 500)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-sand` (1px)
- Card border: `border border-velmora-sand`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid): `bg-velmora-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-dark transition-colors duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold hover:text-white transition-all duration-300`
- Ghost: `text-velmora-ink text-xs tracking-widest uppercase font-medium underline-offset-4 hover:underline`

## Animations
- Transitions: `duration-300 ease-out`
- Image hover scale: `hover:scale-105 transition-transform duration-500`
- Nav scroll: smooth background transition `transition-all duration-300`
- Cart drawer: slide from right `translate-x-full → translate-x-0`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase tracking-widest for all UI labels and nav
- Warm gold accent sparingly — it should feel precious
- Serif for all product names and headings
- Sans-serif for all body copy, prices, UI

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts — always breathe
- No bold/heavy serif weights (keep it light/medium)
