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
- `ink`: #1A1714 — primary body text on light
- `ink-muted`: #6B6560 — secondary/caption text
- `ivory`: #FAF7F2 — primary text on dark
- `ivory-muted`: #C4BDB5 — secondary text on dark

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — elegant, editorial
- Body/UI: "Manrope" (sans-serif) — clean, modern

### Scale
- Display: 72px / Cormorant Garamond / 300 weight / tight leading
- H1: 56px / Cormorant Garamond / 400
- H2: 40px / Cormorant Garamond / 400
- H3: 28px / Cormorant Garamond / 400
- Product Name: 20px / Cormorant Garamond / 500 / UPPERCASE / tracking-widest
- Body: 15px / Manrope / 400
- Caption: 13px / Manrope / 400
- Button: 12px / Manrope / 600 / UPPERCASE / tracking-widest

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Card gap: gap-6 md:gap-8
- Hairline divider: border-linen (1px)

## Components

### Buttons
- Primary (solid): bg-gold text-obsidian px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-gold-light transition-colors
- Secondary (outlined): border border-gold text-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-gold hover:text-obsidian transition-colors
- Ghost (dark bg): border border-ivory/40 text-ivory px-8 py-3.5 text-xs font-semibold uppercase tracking-widest hover:border-gold hover:text-gold transition-colors

### Cards
- Product card: bg-cream, no border, soft shadow on hover (shadow-md), overflow-hidden
- Image aspect: aspect-[3/4]
- Hover: scale-[1.02] on image, reveal second image

### Nav
- Transparent over hero, transitions to bg-obsidian/95 backdrop-blur on scroll
- Logo: Cormorant Garamond, tracking-widest, uppercase
- Links: Manrope, 11px, uppercase, tracking-widest

### Dividers
- Thin hairline: border-t border-linen (on light) or border-t border-stone/30 (on dark)

## Do's
- Use generous whitespace — sections breathe
- Large editorial imagery (full-bleed or 60%+ width)
- Serif for all headings, product names, pull quotes
- Gold accent sparingly — it should feel precious
- Subtle transitions: 200-300ms ease
- Soft shadows: shadow-sm to shadow-md only

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp = premium)
- No heavy drop shadows
- No generic stock photo vibes
- No crowded layouts
- No Comic Sans, no system fonts for headings
