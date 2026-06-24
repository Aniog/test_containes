# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-obsidian` | `#1a1714` | Primary dark background, nav solid |
| `velmora-charcoal` | `#2c2825` | Secondary dark surface, footer |
| `velmora-stone` | `#4a4540` | Muted text on dark |
| `velmora-gold` | `#c9a96e` | Primary accent — CTAs, highlights, borders |
| `velmora-gold-light` | `#e0c898` | Hover state for gold |
| `velmora-cream` | `#f5f0e8` | Light page background |
| `velmora-ivory` | `#faf7f2` | Card surfaces, inputs |
| `velmora-blush` | `#e8ddd0` | Secondary surface, trust bar |
| `velmora-text` | `#2c2825` | Body text on light |
| `velmora-muted` | `#7a7068` | Muted/secondary text |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl md:text-2xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)
- Card Title: `text-base font-medium tracking-[0.12em] uppercase`

### Body — Inter (sans-serif)
- Body: `text-sm font-normal leading-relaxed`
- UI Labels: `text-xs font-medium tracking-widest uppercase`
- Price: `text-base font-medium`
- Nav Links: `text-xs font-medium tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-velmora-gold/20`
- Card border: `border border-velmora-gold/15`
- Input border: `border border-velmora-gold/30 focus:border-velmora-gold`

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/30`

## Buttons
- Primary (accent): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light px-8 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300`
- Ghost dark: `text-velmora-cream hover:text-velmora-gold text-xs tracking-widest uppercase transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300`
- Image scale on hover: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for ALL product names and headings
- Wide letter-spacing on uppercase labels
- Generous whitespace between sections
- Warm gold as the ONLY accent color
- Hairline borders (1px, low opacity gold)
- Large editorial imagery

## Don'ts
- No bright/saturated colors
- No rounded corners > `rounded-sm` on cards (keep it sharp/editorial)
- No generic blue links
- No heavy drop shadows
- No crowded layouts
