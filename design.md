# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Obsidian | #1C1917 | `bg-obsidian` | Primary dark background, nav solid |
| Ivory | #FAF7F2 | `bg-ivory` | Page background, light sections |
| Cream | #F0EBE1 | `bg-cream` | Cards, subtle section bg |
| Gold | #C9A96E | `text-gold` / `bg-gold` | Primary accent, CTAs, borders |
| Gold Light | #E8D5B0 | `text-gold-light` | Hover states, subtle accents |
| Warm Gray | #8A8178 | `text-warm-gray` | Secondary text, captions |
| Charcoal | #3D3530 | `text-charcoal` | Body text on light bg |
| White | #FFFFFF | `text-white` | Text on dark bg |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm text-charcoal leading-relaxed`
- Caption: `font-inter text-xs text-warm-gray tracking-wide uppercase`
- Button: `font-inter text-xs tracking-[0.12em] uppercase font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-gold/20`
- Card border: `border border-cream`
- Accent border: `border border-gold`

## Buttons
- Primary (solid): `bg-gold text-obsidian text-xs tracking-[0.12em] uppercase font-medium px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold text-xs tracking-[0.12em] uppercase font-medium px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-all duration-300`
- Ghost: `text-charcoal text-xs tracking-[0.1em] uppercase underline-offset-4 hover:underline`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Drawer: `shadow-2xl`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all product names and headings
- Wide letter-spacing on product names (tracking-[0.15em])
- Generous whitespace between sections
- Gold (#C9A96E) as the ONLY accent color
- Warm ivory/cream backgrounds — never pure white or cold gray
- Thin hairline dividers (border-gold/20)

## Don'ts
- No bright colors, no neon, no blue/purple accents
- No rounded corners on buttons (keep them sharp/square)
- No heavy drop shadows
- No generic e-commerce blue "Add to Cart" buttons
- No cold grays or blue-tinted neutrals
