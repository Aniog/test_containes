# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (bg primary) | #FAF7F2 | `bg-ivory` | Page backgrounds, cards |
| Espresso (text primary) | #1C1410 | `text-espresso` | Headings, primary text |
| Gold (accent) | #C9A96E | `text-gold` / `bg-gold` | CTAs, accents, dividers |
| Gold Dark | #A8854A | `text-gold-dark` | Hover states on gold |
| Warm Gray | #8B7D6B | `text-warm-gray` | Secondary text, captions |
| Warm Gray Light | #D4C9BC | `border-warm-gray-light` | Hairline dividers, borders |
| Linen | #F0EBE3 | `bg-linen` | Section alternates, trust bar |
| Charcoal | #2C2420 | `bg-charcoal` | Footer, dark sections |
| White | #FFFFFF | `bg-white` | Cards, nav solid state |

## Typography

### Fonts
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest`
- Price: `font-inter text-lg font-medium`
- Body: `font-inter text-sm text-warm-gray leading-relaxed`
- Caption: `font-inter text-xs tracking-wider uppercase`
- Nav links: `font-inter text-xs tracking-widest uppercase`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-warm-gray-light` (1px)
- Card borders: none (use shadow or spacing instead)
- Subtle card shadow: `shadow-sm hover:shadow-md transition-shadow`

## Buttons
- **Primary (CTA)**: `bg-gold text-white px-8 py-3 text-xs tracking-widest uppercase font-inter hover:bg-gold-dark transition-colors`
- **Outlined**: `border border-espresso text-espresso px-8 py-3 text-xs tracking-widest uppercase hover:bg-espresso hover:text-ivory transition-colors`
- **Ghost**: `text-gold text-xs tracking-widest uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and nav links
- Warm ivory/linen backgrounds — never cold white or gray
- Gold accent sparingly — it should feel precious
- Large editorial imagery with generous padding
- Thin hairline dividers between sections

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No generic e-commerce blue/green CTAs
- No tight spacing or cramped layouts
- No cold grays or blues in backgrounds
