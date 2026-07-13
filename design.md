# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `velmora-obsidian`: #1A1614 — Deep warm black (primary background, nav solid)
- `velmora-ivory`: #FAF7F2 — Warm off-white (page background, cards)
- `velmora-cream`: #F2EDE4 — Warm cream (section backgrounds, trust bar)
- `velmora-gold`: #C9A96E — Warm gold accent (CTAs, accents, borders)
- `velmora-gold-light`: #E8D5A3 — Light gold (hover states, subtle highlights)
- `velmora-gold-dark`: #A07840 — Deep gold (pressed states)
- `velmora-stone`: #8C7B6B — Warm taupe (secondary text, muted)
- `velmora-charcoal`: #3D3530 — Dark warm brown (body text)

### Usage
- Page background: `velmora-ivory`
- Primary text: `velmora-charcoal`
- Headings: `velmora-obsidian`
- Accent / CTA: `velmora-gold`
- Muted text: `velmora-stone`
- Section alt bg: `velmora-cream`

## Typography

### Fonts
- Serif (headings, product names, logo): Cormorant Garamond — elegant, editorial
- Sans-serif (body, UI, labels): Manrope — clean, modern

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-wide`
- H1: `font-cormorant text-4xl lg:text-6xl font-light tracking-wide`
- H2: `font-cormorant text-3xl lg:text-4xl font-light tracking-wide`
- H3: `font-cormorant text-2xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-widest`
- Price: `font-manrope text-lg font-medium`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-gold/20`
- Card border: `border border-velmora-gold/15`
- Input border: `border border-velmora-stone/30`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-gold-dark transition-colors duration-200`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-200`
- Ghost: `text-velmora-charcoal font-manrope text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold accents sparingly — they should feel precious
- Subtle hover states (scale, opacity, color shift)

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp = premium)
- No generic stock photo aesthetics
- No crowded layouts
- No more than 2 font families
