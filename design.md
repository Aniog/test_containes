# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Obsidian | #1C1917 | `bg-obsidian` | Primary dark background, nav solid |
| Ivory | #FAF7F2 | `bg-ivory` | Page background, light sections |
| Cream | #F0EBE1 | `bg-cream` | Alternate section bg, cards |
| Gold | #C9A96E | `text-gold` / `bg-gold` | Primary accent, CTAs, dividers |
| Gold Light | #E8D5B0 | `text-gold-light` | Hover states, subtle accents |
| Warm Gray | #8A8178 | `text-warm-gray` | Secondary text, captions |
| Charcoal | #3D3530 | `text-charcoal` | Body text on light bg |
| White | #FFFFFF | `text-white` | Text on dark bg |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest`
- Price: `font-inter text-lg font-medium`
- Body: `font-inter text-sm text-charcoal leading-relaxed`
- Caption / label: `font-inter text-xs uppercase tracking-widest text-warm-gray`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-gold/20`
- Card border: `border border-cream`
- Subtle shadow: `shadow-sm` or `shadow-[0_2px_20px_rgba(0,0,0,0.06)]`

## Buttons
- Primary (solid): `bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold hover:text-white transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover image scale: `transition-transform duration-500 group-hover:scale-105`
- Fade in: `transition-opacity duration-300`
- Cart drawer slide: `translate-x-full → translate-x-0 transition-transform duration-300`

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE with wide letter-spacing
- Use thin gold hairline dividers between sections
- Warm, editorial photography (gold on dark/neutral)
- Subtle hover states — never jarring

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded pill buttons (prefer sharp or very slightly rounded)
- No generic e-commerce blue/red CTAs
- No cluttered layouts
