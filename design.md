# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-ivory`: #FAF7F2 — Warm off-white (page background, cards)
- `velmora-cream`: #F2EDE4 — Warm cream (section backgrounds, trust bar)
- `velmora-gold`: #C9A96E — Warm gold accent (CTAs, accents, borders)
- `velmora-gold-light`: #E8D5A3 — Light gold (hover states, subtle accents)
- `velmora-gold-dark`: #A07840 — Deep gold (active states)
- `velmora-mink`: #8B7355 — Warm mink brown (secondary text, captions)
- `velmora-stone`: #D4C9B8 — Stone/taupe (dividers, borders)
- `velmora-charcoal`: #3D3530 — Warm charcoal (body text)

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — elegant, high-fashion
- **Sans-serif (body, UI, labels)**: Manrope — clean, modern, readable

### Scale
- Hero headline: `text-5xl md:text-7xl` font-cormorant font-light tracking-wide
- Section headline: `text-3xl md:text-4xl` font-cormorant font-light
- Product name: `text-xl md:text-2xl` font-cormorant uppercase tracking-widest
- Body: `text-sm md:text-base` font-manrope text-velmora-charcoal
- Caption/label: `text-xs` font-manrope uppercase tracking-widest

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-velmora-stone` (1px)
- Card border: `border border-velmora-stone/50`
- Rounded: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/20`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-dark` — solid gold
- Secondary (outlined): `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian`
- Ghost: `text-velmora-charcoal hover:text-velmora-gold`
- All buttons: `font-manrope text-xs uppercase tracking-widest px-6 py-3 transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names in UPPERCASE with wide letter-spacing
- Warm, editorial photography tones

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue/red color schemes
- No cluttered layouts
