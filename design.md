# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Page background, primary surface |
| `ivory` | `#F5F1EB` | Section alternates, card backgrounds |
| `charcoal` | `#1C1917` | Primary text, dark sections, nav solid |
| `espresso` | `#292524` | Dark section backgrounds |
| `gold` | `#C9A96E` | Primary accent — CTAs, borders, highlights |
| `gold-light` | `#E8D5B0` | Hover states, subtle tints |
| `gold-dark` | `#A07840` | Pressed states |
| `taupe` | `#78716C` | Secondary/muted text |
| `warm-gray` | `#A8A29E` | Placeholder, disabled |
| `border` | `#E8E3DC` | Hairline dividers, card borders |
| `white` | `#FFFFFF` | Cards, overlays |

## Typography

### Fonts
- **Headings**: Cormorant Garamond (serif) — loaded from Google Fonts
- **Body/UI**: Manrope (sans-serif) — loaded from Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond, font-light, tracking-wide
- Section title: `text-3xl md:text-4xl` Cormorant Garamond, font-light
- Product name: `text-xl md:text-2xl` Cormorant Garamond, UPPERCASE, tracking-widest
- Body: `text-sm md:text-base` Manrope, font-normal
- Caption/label: `text-xs` Manrope, uppercase, tracking-widest
- Price: `text-lg` Manrope, font-medium

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Components

### Buttons
- **Primary (Accent)**: `bg-gold text-charcoal px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-dark transition-colors`
- **Outlined**: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-colors`
- **Ghost/Dark**: `border border-charcoal text-charcoal px-8 py-3 text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors`

### Cards
- Subtle shadow: `shadow-sm hover:shadow-md transition-shadow`
- Border: `border border-border`
- Radius: `rounded-none` (editorial, sharp) or `rounded-sm` for softness

### Dividers
- Hairline: `border-t border-border` (1px, warm gray)

### Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover image: `scale-105 duration-500`
- Nav: `transition-colors duration-200`

## Do's
- Use Cormorant Garamond for all display text
- UPPERCASE + wide tracking for product names and labels
- Generous padding — let content breathe
- Warm gold (#C9A96E) as the single accent color
- Hairline borders, not thick borders
- Soft shadows, not harsh drop shadows

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No generic blue links
- No tight spacing
- No more than 2 font families
- No white text on gold (low contrast) — use charcoal on gold
