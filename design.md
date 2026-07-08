# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest warm white, card backgrounds
- `linen`: #EDE8DF — subtle dividers, borders

### Accent Colors
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold
- `champagne`: #E8D5A3 — soft gold tint for backgrounds

### Text Colors
- `ink`: #1A1714 — primary body text on light backgrounds
- `stone`: #6B6560 — secondary/muted text
- `dust`: #9E9890 — placeholder, disabled text
- `ivory`: #F5F0E8 — text on dark backgrounds

## Typography

### Fonts
- Headings: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Inter" (sans-serif) — clean, readable

### Scale
- Display: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- H1: `text-4xl md:text-5xl font-cormorant font-light`
- H2: `text-3xl md:text-4xl font-cormorant font-light`
- H3: `text-xl md:text-2xl font-cormorant`
- Product Name: `text-lg font-cormorant uppercase tracking-widest`
- Body: `text-sm font-inter text-stone`
- Caption: `text-xs font-inter tracking-wider uppercase text-dust`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for subtle softness

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow`
- Drawer: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-gold text-cream px-8 py-3 text-xs tracking-widest uppercase font-inter hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors`
- Ghost: `text-ink text-xs tracking-widest uppercase hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, muted tones — never pure white or pure black

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No generic stock photo vibes — warm, editorial, intimate
- No cluttered layouts — restraint is luxury
