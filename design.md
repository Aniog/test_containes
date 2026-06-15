# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| `velvet`     | #1A1410   | Near-black warm base, hero bg  |
| `espresso`   | #2C1F14   | Deep brown, footer bg          |
| `bark`       | #4A3728   | Mid brown, secondary elements  |
| `sand`       | #C8A97E   | Warm champagne gold, accents   |
| `champagne`  | #E8D5B0   | Light champagne, highlights    |
| `cream`      | #FAF6F0   | Off-white page background      |
| `ivory`      | #F5EFE6   | Card backgrounds               |
| `mist`       | #EDE6DC   | Hairline dividers              |
| `gold`       | #B8924A   | Primary accent (CTAs, borders) |
| `gold-light` | #D4AF6E   | Hover state for gold           |
| `gold-dark`  | #8B6B35   | Active/pressed gold            |
| `charcoal`   | #3D3530   | Primary body text              |
| `stone`      | #7A6A5A   | Muted/secondary text           |
| `pebble`     | #A89880   | Placeholder text               |

## Typography
- **Headings / Product names**: Cormorant Garamond (serif), weights 300–600
- **Body / UI**: Manrope (sans-serif), weights 300–700
- **Product names**: UPPERCASE, letter-spacing: 0.25em (widest2)
- **Section labels**: UPPERCASE, letter-spacing: 0.35em (widest3), small size

## Spacing & Layout
- Generous whitespace — sections have py-16 to py-24 on desktop
- Max content width: max-w-7xl centered
- Hairline dividers: 1px solid #EDE6DC
- Cards: bg-ivory, subtle shadow (shadow-sm), no harsh borders

## Buttons
- **Primary CTA**: bg-gold text-cream px-8 py-3 uppercase tracking-widest2 text-sm font-sans font-medium hover:bg-gold-light transition-all duration-300
- **Outlined**: border border-gold text-gold px-8 py-3 uppercase tracking-widest2 text-sm hover:bg-gold hover:text-cream transition-all duration-300
- **Ghost/text**: text-gold underline-offset-4 hover:underline

## Do's
- Use Cormorant Garamond for all headings, product names, pull quotes
- Use generous line-height (1.3–1.5) for serif headings
- Thin gold borders/accents sparingly
- Soft box shadows (shadow-sm, shadow-md) — never harsh
- Subtle hover transitions (300–400ms ease)
- Large editorial imagery with warm tones

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No generic blue links
- No heavy drop shadows
- No crowded layouts — always breathe
