# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (page bg) | `#faf7f2` | `bg-ivory` | Page background |
| Charcoal (deep base) | `#1c1714` | `bg-charcoal` | Nav, footer, dark sections |
| Gold (accent) | `#b8965a` | `text-gold` / `bg-gold` | CTAs, accents, highlights |
| Gold Light | `#d4b483` | `text-gold-light` | Hover states, subtle accents |
| Warm Mist | `#f0ebe2` | `bg-warm-mist` | Card backgrounds, subtle sections |
| Stone | `#e8e0d5` | `border-stone` | Hairline dividers, borders |
| Bark | `#6b5f54` | `text-bark` | Secondary/muted text |
| Ink | `#2d2520` | `text-ink` | Primary body text |

## Typography

### Headings — Cormorant Garamond
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light`
- Product Name: `font-cormorant text-xl font-medium uppercase tracking-widest`
- Subheadings: `font-cormorant text-lg italic font-light`

### Body — Inter
- Body: `font-inter text-sm font-normal`
- UI Labels: `font-inter text-xs font-medium uppercase tracking-widest`
- Prices: `font-inter text-base font-medium`
- Nav links: `font-inter text-xs uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone` (1px, warm stone color)
- Divider: `h-px bg-stone`

## Shadows
- Card hover: `shadow-md shadow-charcoal/10`
- Drawer: `shadow-2xl shadow-charcoal/20`

## Buttons
- Primary (solid): `bg-charcoal text-ivory px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-ink transition-colors`
- Accent (gold outline): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-bark text-xs uppercase tracking-widest hover:text-ink transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fade-in`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and labels
- Italic serif for editorial captions and subheads
- Warm, muted tones — never pure white or pure black

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded corners on buttons (sharp edges feel more premium)
- No generic stock-photo vibes — editorial warmth only
- No cluttered layouts — breathe
