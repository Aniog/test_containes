# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velvet` (#1A1410) — Deep warm near-black. Primary background for hero, footer, dark sections.
- `espresso` (#2C2118) — Slightly lighter dark warm brown. Secondary dark surfaces.
- `parchment` (#F7F3EE) — Warm off-white. Primary light background.
- `linen` (#EDE8E1) — Slightly deeper warm neutral. Cards, alternating sections.
- `stone` (#C8BFB4) — Muted warm gray. Borders, dividers, hairlines.

### Accent / Gold
- `gold` (#C9A96E) — Warm antique gold. Primary accent. Buttons, highlights, icons.
- `gold-light` (#E2C98A) — Lighter gold. Hover states, shimmer.
- `gold-dark` (#A07840) — Deeper gold. Active states.

### Text
- `ink` (#1A1410) — Primary text on light backgrounds.
- `muted` (#7A6E65) — Secondary text, captions, metadata.
- `cream` (#F7F3EE) — Text on dark backgrounds.
- `cream-muted` (#C8BFB4) — Secondary text on dark backgrounds.

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, captions

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone/30`
- Divider: `h-px bg-stone/30`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card: `shadow-sm` with warm tint
- Elevated: `shadow-md`

## Buttons
- Primary (solid gold): `bg-gold text-velvet font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold font-manrope text-xs tracking-[0.15em] uppercase px-8 py-3 hover:bg-gold hover:text-velvet transition-colors`
- Ghost: `text-muted hover:text-ink transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep them square/rectangular)
- No generic e-commerce blue buttons
- No tight, cramped layouts
- No more than 2 font families
