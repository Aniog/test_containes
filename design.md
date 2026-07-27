# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Ivory | `#F7F3EE` | `bg-ivory` | Primary page background |
| Parchment | `#EDE7DC` | `bg-parchment` | Section alternates, cards |
| Charcoal | `#1C1917` | `text-charcoal` | Primary text, headings |
| Warm Taupe | `#7C6F64` | `text-taupe` | Secondary text, captions |
| Gold | `#B8935A` | `text-gold` / `bg-gold` | Primary accent, CTAs, stars |
| Gold Light | `#D4A96A` | `text-gold-light` | Hover states, highlights |
| Gold Dark | `#8B6B3D` | `text-gold-dark` | Active states |
| Mist | `#C8BFB5` | `text-mist` | Hairline dividers, borders |
| White | `#FFFFFF` | `bg-white` | Cards, nav solid state |
| Ink | `#0F0D0C` | `bg-ink` | Dark hero overlays, footer |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light tracking-wide`
- Product name: `text-xl font-cormorant uppercase tracking-widest`
- Body: `text-sm font-inter text-taupe leading-relaxed`
- Caption: `text-xs font-inter uppercase tracking-widest text-taupe`
- Price: `text-lg font-inter font-medium text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-mist` or `divide-mist`
- Card border: `border border-mist/60`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-charcoal/8`
- Drawer: `shadow-2xl shadow-charcoal/20`

## Buttons
- Primary (solid): `bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold hover:text-white transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-widest font-inter hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm gold accents sparingly — they should feel precious

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep them square/rectangular)
- No generic e-commerce blue/green CTAs
- No crowded layouts — breathe
- No bold body text (keep it light and airy)
