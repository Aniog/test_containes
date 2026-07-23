# Velmora Fine Jewelry — Design System

## Philosophy
Quiet luxury. Warm, editorial, refined. Premium demi-fine jewelry for women 25–45.
No loud colors, no discount aesthetics, no generic e-commerce feel.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `velvet` | `#1A1410` | Primary background, dark sections, text on light |
| `cream` | `#F7F3EE` | Primary surface, light backgrounds |
| `warm-white` | `#FAF8F5` | Cards, subtle surfaces |
| `gold` | `#C5A06D` | Primary accent — CTAs, highlights, hover states, links |
| `gold-hover` | `#B08D5C` | Gold hover / pressed state |
| `taupe` | `#9E9488` | Muted text, secondary labels, dividers |
| `linen` | `#EDE8E0` | Hairline dividers, borders, subtle backgrounds |
| `blush` | `#F2ECE4` | Soft accent backgrounds (newsletter block) |
| `charcoal` | `#2D2420` | Darker text, nav solid background |

## Typography

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display / Headings | Cormorant Garamond | 400, 500, 600 | Hero headlines, section titles, product names |
| Body / UI | Inter | 300, 400, 500, 600 | Body text, buttons, navigation, labels |

Product names: UPPERCASE, `tracking-[0.2em]`, `font-medium`

## Spacing
- Section vertical padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gaps: `gap-6 md:gap-8`
- Hairline divider: `h-px bg-linen`

## Elevation
- No heavy shadows. Subtle: `shadow-sm` or `shadow-md` on cards
- Hover lift: `hover:shadow-md transition-shadow duration-300`

## Buttons
- Primary: solid `bg-gold text-velvet` with `hover:bg-gold-hover`
- Secondary: outlined `border-linen text-velvet` with `hover:bg-linen`
- Border-radius: `rounded-none` (sharp, editorial) or `rounded-sm`
- Uppercase labels, `tracking-widest`, `text-xs`

## Transitions
- All interactive elements: `transition-all duration-300 ease-out`
- Image hover scale: `hover:scale-105 duration-500`
