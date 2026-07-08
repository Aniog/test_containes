# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest warm white, card backgrounds
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deeper gold
- `gold-muted`: #E8D9B8 — very light gold tint for backgrounds

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `ink-muted`: #6B6560 — secondary/muted text
- `ink-faint`: #9C9590 — placeholder, disabled

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, prices

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for subtle softness on cards

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (solid gold): `bg-gold text-cream font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-cream transition-all duration-300`
- Ghost: `text-ink-muted font-manrope text-xs uppercase tracking-[0.12em] hover:text-ink transition-colors`

## Animations
- Transitions: `duration-300 ease-out`
- Hover scale: `hover:scale-[1.02] transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, muted tones — never pure white or pure black
- Subtle gold accents, not overwhelming

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No heavy drop shadows
- No generic stock photo vibes — editorial warmth only
- No cluttered layouts
