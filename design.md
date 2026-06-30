# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette (Tailwind config names)

| Token | Hex | Usage |
|-------|-----|-------|
| `espresso` | `#1a1714` | Primary dark background, text on light |
| `espresso-light` | `#2a2520` | Elevated surfaces on dark bg |
| `ivory` | `#faf7f2` | Primary light background, text on dark |
| `ivory-muted` | `#f0ebe4` | Subtle light surface |
| `gold` | `#c9a96e` | Primary accent — buttons, links, highlights |
| `gold-light` | `#d4b87a` | Hover state for gold accent |
| `gold-dark` | `#a8894e` | Active/pressed gold |
| `warm-gray` | `#8a7e72` | Muted text, captions, borders |
| `warm-border` | `#3d3530` | Hairline dividers on dark bg |
| `warm-border-light` | `#e8e2da` | Hairline dividers on light bg |

## Typography

- **Headings / Product names**: `font-serif` → Cormorant Garamond (weights 300–700)
- **Body / UI**: `font-sans` → Inter (weights 300–600)
- Product names: UPPERCASE, `tracking-[0.2em]`
- Section headings: serif, normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: subtle shadow `shadow-sm`, rounded `rounded-sm`
- Hairline dividers: `border-t border-warm-border` or `border-warm-border-light`

## Components
- Buttons: `bg-gold text-espresso font-sans font-medium tracking-wide uppercase text-sm px-8 py-3 hover:bg-gold-light transition-colors`
- Outlined buttons: `border border-gold text-gold hover:bg-gold hover:text-espresso transition-colors`
- Links: `text-gold hover:text-gold-light transition-colors`
- Hover transitions: `transition-all duration-300 ease-in-out`
- Shadows: `shadow-sm` only, never heavy shadows

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers between sections
- Subtle hover transitions (opacity, translate, scale)
- Buttons feel premium (solid gold or outlined)

## Don'ts
- No heavy drop shadows
- No bright/neon colors
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
