# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Cream (bg) | #FAF7F2 | bg-cream | Page background |
| Espresso (base) | #1A1410 | bg-espresso | Dark sections, footer |
| Gold (accent) | #C9A96E | text-gold / bg-gold | CTAs, accents, highlights |
| Gold Light | #E8D5B0 | text-gold-light | Hover states, borders |
| Charcoal | #2C2420 | text-charcoal | Primary text |
| Warm Gray | #8B7D74 | text-warm-gray | Secondary text, captions |
| Stone | #F0EBE3 | bg-stone | Card backgrounds, subtle surfaces |
| Divider | #E2D9CF | border-divider | Hairline dividers |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl md:text-2xl font-medium tracking-widest uppercase`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm leading-relaxed text-charcoal`
- Caption: `font-inter text-xs tracking-wider uppercase text-warm-gray`
- Button: `font-inter text-xs tracking-widest uppercase font-medium`
- Price: `font-inter text-base font-medium text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-divider` (1px, #E2D9CF)
- Card border: `border border-stone`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,20,16,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,20,16,0.12)]`

## Buttons
- Primary (solid): `bg-espresso text-cream text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-charcoal transition-colors`
- Accent (gold): `bg-gold text-espresso text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-gold-light transition-colors`
- Outlined: `border border-espresso text-espresso text-xs tracking-widest uppercase px-8 py-3.5 hover:bg-espresso hover:text-cream transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No drop shadows on text
- No generic stock photo vibes — warm, editorial, intimate
- No more than 2 font families
