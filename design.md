# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, hero)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (cards, nav solid)
- `velmora-stone`: #3D3733 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE7D9 — Warm cream (card backgrounds, subtle fills)
- `velmora-sand`: #D4C9B5 — Warm sand (muted text on light, dividers)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Lighter gold (hover states, shimmer)
- `velmora-gold-dark`: #A8854A — Deeper gold (pressed states)

### Text
- `velmora-text-dark`: #1A1714 — Primary text on light backgrounds
- `velmora-text-mid`: #5C5248 — Secondary text, captions
- `velmora-text-muted`: #8C7E72 — Muted text, placeholders
- `velmora-text-light`: #F5F0E8 — Text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-wide`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Label: `font-manrope text-xs font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-sand/30`
- Divider: `h-px bg-velmora-sand/40`
- Card border: `border border-velmora-cream`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Elevated: `shadow-lg`

## Buttons
- Primary (accent): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold-light transition-colors duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Dark: `bg-velmora-obsidian text-velmora-text-light font-manrope text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-velmora-charcoal transition-colors duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Product names always UPPERCASE with wide letter-spacing
- Generous whitespace — let the jewelry breathe
- Warm gold accents sparingly for maximum impact
- Hairline borders, never thick borders
- Soft shadows, never harsh drop shadows

## Don'ts
- No bright white (#FFFFFF) — use warm off-white (#F5F0E8)
- No cool grays — everything has a warm undertone
- No bold/heavy serif weights — keep it light and elegant
- No generic blue links — use gold or dark text
- No rounded corners on buttons — sharp or very subtle (2px max)
