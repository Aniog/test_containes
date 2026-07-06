# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF7F2` | Page background, primary surface |
| `charcoal` | `#1C1917` | Primary text, dark sections, nav solid |
| `gold` | `#C9A96E` | Brand accent, CTAs, highlights |
| `gold-light` | `#E8D5B0` | Hover states, subtle tints |
| `taupe` | `#78716C` | Secondary/body text |
| `sand` | `#F0EAE0` | Card backgrounds, subtle fills |
| `divider` | `#E8E0D5` | Hairline borders, separators |
| `white` | `#FFFFFF` | Cards, overlays |

**Do:** Use cream as the default page bg. Use charcoal for all primary text. Use gold sparingly as the accent — buttons, underlines, icons.
**Don't:** Use pure white (#fff) as page bg. Don't use gold for large text blocks. Never use low-contrast combos (e.g. taupe on cream for important text).

## Typography

### Fonts
- **Headings / Product Names:** Cormorant Garamond (serif) — weights 300, 400, 500, 600
- **Body / UI:** Inter (sans-serif) — weights 300, 400, 500, 600

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant font-medium uppercase tracking-widest`
- Body: `text-sm font-inter text-taupe leading-relaxed`
- UI labels: `text-xs font-inter uppercase tracking-widest`
- Price: `text-lg font-inter font-medium text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between elements

## Borders & Shadows
- Hairline divider: `border-divider` (1px)
- Card shadow: `shadow-sm hover:shadow-md transition-shadow`
- No heavy drop shadows — keep it airy

## Buttons
- **Primary (solid):** `bg-charcoal text-cream hover:bg-gold transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- **Accent (gold):** `bg-gold text-charcoal hover:bg-gold-light transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- **Outlined:** `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- No border-radius on buttons (sharp, editorial) or very subtle `rounded-none`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade-in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right

## Do's and Don'ts
- DO use wide letter-spacing on product names and labels
- DO use thin hairline dividers between sections
- DO keep imagery large and editorial
- DON'T use rounded corners on primary buttons
- DON'T use bright/saturated colors
- DON'T crowd elements — whitespace is luxury
