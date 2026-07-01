# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury. Warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
Think: warm candlelight, aged parchment, polished gold on dark velvet.

## Color Palette
| Token        | Hex       | Usage                                      |
|--------------|-----------|--------------------------------------------|
| `velvet`     | `#1C1410` | Primary text, nav background (solid), hero overlay |
| `cream`      | `#F5F0E8` | Page background, light surfaces            |
| `parchment`  | `#EDE5D8` | Card backgrounds, section alternates       |
| `gold`       | `#C9A96E` | Primary accent — CTAs, icons, highlights   |
| `gold-light` | `#E8D5A3` | Hover states, subtle tints                 |
| `gold-dark`  | `#A8854A` | Pressed/active states                      |
| `mink`       | `#6B5E4E` | Secondary/body text, captions              |
| `linen`      | `#E0D5C5` | Hairline dividers, borders                 |
| `off-white`  | `#FAF7F2` | Elevated surfaces (modals, drawers)        |

## Typography
- **Headings / Product names**: `font-serif` (Cormorant Garamond) — elegant, editorial
- **Body / UI / Labels**: `font-sans` (Inter) — clean, readable
- **Product names**: UPPERCASE + `tracking-widest2` (0.25em letter-spacing)
- **Section labels**: small caps, `tracking-widest` (0.15em), `text-mink`

### Scale
- Hero headline: `text-5xl md:text-7xl font-serif font-light`
- Section title: `text-3xl md:text-4xl font-serif`
- Product name: `text-sm font-sans uppercase tracking-widest2`
- Body: `text-sm font-sans text-mink`
- Price: `text-base font-sans font-medium text-velvet`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Buttons
- **Primary (CTA)**: `bg-gold text-velvet px-8 py-3 text-xs uppercase tracking-widest2 font-sans font-medium hover:bg-gold-dark transition-colors`
- **Outlined**: `border border-velvet text-velvet px-8 py-3 text-xs uppercase tracking-widest2 hover:bg-velvet hover:text-cream transition-colors`
- **Ghost/text**: `text-mink text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Borders & Dividers
- Hairline: `border-linen` (1px solid #E0D5C5)
- Cards: no border, soft shadow `shadow-sm` or `shadow-md`
- Rounded: `rounded-none` for editorial feel (no pill shapes on cards)

## Shadows
- Card hover: `shadow-lg` with warm tint
- Drawer: `shadow-2xl`

## Animations
- Hover transitions: `transition-all duration-300 ease-luxury`
- Image zoom: scale(1.05) on hover, 0.6s ease
- Cart drawer: slide in from right, 0.35s
- Fade-in-up: for section reveals

## Do's
- Use generous whitespace
- Large editorial imagery (full-bleed or near full-bleed)
- Thin hairline dividers between sections
- Serif for anything emotional/brand; sans for functional UI
- Gold accent sparingly — it should feel precious, not garish

## Don'ts
- No bright/saturated colors
- No rounded pill buttons on primary CTAs
- No generic e-commerce blue/purple
- No tight spacing or cluttered layouts
- No bold/heavy serif weights (use light/regular)
