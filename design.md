# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (page bg) | #FAF7F2 | bg-ivory | Main page background |
| Charcoal (deep bg) | #1C1917 | bg-charcoal | Dark sections, footer |
| Gold (accent) | #B8935A | bg-gold / text-gold | CTAs, accents, highlights |
| Gold Light | #D4AF7A | text-gold-light | Hover states, star ratings |
| Warm Taupe | #8C7B6B | text-taupe | Secondary body text |
| Stone | #E8E0D5 | bg-stone | Subtle dividers, card bg |
| Ink | #2C2420 | text-ink | Primary body text |
| White | #FFFFFF | bg-white | Cards, overlays |

## Typography

### Fonts
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest`
- Price: `font-inter text-lg font-medium text-ink`
- Body: `font-inter text-sm text-taupe leading-relaxed`
- Nav links: `font-inter text-xs uppercase tracking-widest`
- Button: `font-inter text-xs uppercase tracking-widest`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-stone`
- Card border: `border border-stone`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-charcoal/10`
- Drawer: `shadow-2xl`

## Buttons
- Primary (filled): `bg-gold text-white text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-gold text-gold text-xs uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-white transition-colors`
- Ghost: `text-ink text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and nav
- Warm gold tones for all accents

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep square/rectangular)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
