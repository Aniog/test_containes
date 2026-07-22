# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (bg) | #FAF8F5 | `bg-ivory` | Page background |
| Charcoal (text) | #1C1A18 | `text-charcoal` | Primary text, headings |
| Gold (accent) | #C9A96E | `text-gold` / `bg-gold` | CTAs, accents, borders |
| Gold Dark | #A8854A | `text-gold-dark` | Hover states on gold |
| Warm Gray | #8A8178 | `text-warm-gray` | Secondary text, captions |
| Blush | #F2EDE6 | `bg-blush` | Card backgrounds, subtle fills |
| Linen | #E8E0D5 | `bg-linen` | Dividers, borders |
| Deep | #0F0E0C | `bg-deep` | Footer, dark sections |

## Typography

### Headings (Cormorant Garamond — serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body (Inter — sans-serif)
- Body: `font-inter text-sm text-warm-gray leading-relaxed`
- UI Labels: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-base font-medium text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Card border: `border border-linen/60`

## Buttons
- Primary (solid gold): `bg-gold text-ivory hover:bg-gold-dark px-8 py-3 text-xs uppercase tracking-widest font-inter transition-colors duration-300`
- Outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory px-8 py-3 text-xs uppercase tracking-widest font-inter transition-colors duration-300`
- Ghost: `text-charcoal hover:text-gold text-xs uppercase tracking-widest font-inter transition-colors duration-300`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and UI labels
- Keep whitespace generous — don't crowd elements
- Use gold sparingly as a true accent
- Warm, editorial photography feel

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic e-commerce blue/red CTAs
- No tight spacing
