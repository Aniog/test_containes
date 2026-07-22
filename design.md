# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Espresso (base) | #1A1208 | `bg-espresso` | Dark backgrounds, hero overlays |
| Ivory (surface) | #FAF7F2 | `bg-ivory` | Page background, cards |
| Warm White | #FFFDF9 | `bg-warm-white` | Section backgrounds |
| Gold (accent) | #C9A96E | `text-gold` / `bg-gold` | CTAs, accents, dividers |
| Gold Light | #E8D5A3 | `text-gold-light` | Hover states, subtle accents |
| Gold Dark | #A07840 | `text-gold-dark` | Active states |
| Charcoal | #2C2416 | `text-charcoal` | Primary text |
| Warm Gray | #8B7D6B | `text-warm-gray` | Secondary text, captions |
| Mist | #E8E2D9 | `bg-mist` | Borders, dividers, hairlines |
| Blush | #F5EDE4 | `bg-blush` | Subtle section tints |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em]`
- Price: `font-inter text-lg font-medium`
- Body: `font-inter text-sm leading-relaxed`
- Caption / label: `font-inter text-xs uppercase tracking-[0.12em]`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-mist`
- Card border: `border border-mist`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Buttons
- Primary (solid): `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter font-medium hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-gold hover:text-espresso transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors`

## Shadows
- Card hover: `shadow-md shadow-espresso/10`
- Drawer: `shadow-2xl shadow-espresso/20`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, slightly desaturated photography tones

## Don'ts
- No bright/saturated colors (no red sale badges, no neon)
- No rounded corners on images (keep them square/rectangular)
- No heavy drop shadows
- No generic e-commerce blue links
- No crowded layouts
