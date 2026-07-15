# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| `velvet`     | `#1a1410` | Near-black warm base, nav bg   |
| `obsidian`   | `#0f0d0b` | Deepest backgrounds            |
| `ivory`      | `#f7f3ec` | Primary page background        |
| `cream`      | `#ede8df` | Card backgrounds, sections     |
| `parchment`  | `#d9d2c5` | Dividers, borders              |
| `gold`       | `#c9a96e` | Primary accent — CTA, icons    |
| `gold-light` | `#e0c98a` | Hover state for gold elements  |
| `gold-dark`  | `#a8854a` | Pressed/active gold            |
| `mink`       | `#8a7f72` | Secondary/muted text           |
| `charcoal`   | `#3d3530` | Body text                      |

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond) — elegant, editorial
- **Body / UI**: `font-sans` (Inter) — clean, readable
- **Product names**: UPPERCASE, `tracking-widest2` (0.25em letter-spacing)
- **Section labels**: uppercase, `tracking-widest` Inter, small size

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section heading: `text-3xl md:text-4xl font-serif`
- Product name: `text-lg font-serif uppercase tracking-widest2`
- Body: `text-sm font-sans text-charcoal`
- Caption/label: `text-xs font-sans uppercase tracking-widest text-mink`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border-parchment` (1px)
- Gold accent divider: `.divider-gold` (1px gold, 35% opacity)
- Card border: `border border-parchment`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,20,16,0.08)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,20,16,0.15)]`

## Buttons
- **Primary (solid)**: `bg-velvet text-ivory hover:bg-charcoal` — full-width on product pages
- **Accent (gold)**: `bg-gold text-velvet hover:bg-gold-light` — hero CTA
- **Outlined**: `border border-velvet text-velvet hover:bg-velvet hover:text-ivory`
- All buttons: `tracking-widest text-xs uppercase font-sans font-medium py-3 px-8`

## Transitions
- Default: `transition-all duration-300 ease-luxury`
- Image hover: `transition-opacity duration-500`
- Nav: `transition-all duration-400`

## Do's
- Generous whitespace — let products breathe
- Large editorial imagery
- Thin hairline dividers between sections
- Serif for anything emotional/brand; sans for functional UI
- Gold accent used sparingly — only for key CTAs and accents

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp = premium)
- No drop shadows on text
- No generic stock-photo vibes — warm, editorial, intimate
- No cluttered layouts
