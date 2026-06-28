# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--cream` | `#FAF7F2` | Main page background |
| `--dark` | `#1C1814` | Hero bg, footer bg, primary text |
| `--gold` | `#C4973A` | Primary accent (CTAs, highlights) |
| `--gold-light` | `#E8D5A3` | Hover states, subtle fills |
| `--gold-pale` | `#F5EDD8` | Section backgrounds, trust bar |
| `--text-primary` | `#1C1814` | Body text on light bg |
| `--text-secondary` | `#6B5E4E` | Muted text, captions |
| `--border` | `#E0D8CC` | Hairline dividers |
| `--white` | `#FFFFFF` | Cards, nav solid state |

### Tailwind custom colors (defined in index.css @theme):
- `cream` → #FAF7F2
- `dark` → #1C1814
- `gold` → #C4973A
- `gold-light` → #E8D5A3
- `gold-pale` → #F5EDD8
- `stone-warm` → #6B5E4E
- `border-warm` → #E0D8CC

## Typography

### Headings / Editorial (Cormorant Garamond)
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section titles: `font-cormorant text-3xl md:text-4xl font-light`
- Product names: `font-cormorant text-xl uppercase tracking-widest font-medium`

### Body / UI (Inter)
- Body text: `font-inter text-sm font-normal`
- Nav links: `font-inter text-xs uppercase tracking-widest`
- Buttons: `font-inter text-xs uppercase tracking-widest font-medium`
- Prices: `font-inter text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-border-warm` or `border-t border-border-warm`
- Card: no border, soft shadow `shadow-sm`

## Shadows
- Card hover: `shadow-md`
- Nav solid: `shadow-sm`

## Buttons
- Primary (solid gold): `bg-gold text-white hover:bg-dark transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- Secondary (outlined): `border border-dark text-dark hover:bg-dark hover:text-white transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- Ghost: `text-dark underline-offset-4 hover:underline text-xs uppercase tracking-widest font-inter`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Opacity fade: `transition-opacity duration-200`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and nav
- Warm gold (#C4973A) as the ONLY accent color

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp edges feel more premium)
- No heavy drop shadows
- No generic stock-photo blue/white palettes
- No small, cramped layouts
