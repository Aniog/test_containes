# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Name | Usage |
|---|---|---|---|
| Ivory | `#FAF7F2` | `ivory` | Page background, light surfaces |
| Cream | `#F2EDE4` | `cream` | Section alternates, card backgrounds |
| Charcoal | `#1C1917` | `charcoal` | Primary text, nav background (solid) |
| Warm Gray | `#78716C` | `warmgray` | Secondary text, captions |
| Gold | `#B8965A` | `gold` | Primary accent — CTAs, borders, icons |
| Gold Light | `#D4AF7A` | `goldlight` | Hover states, highlights |
| Gold Dark | `#8B6E3A` | `golddark` | Active states |
| Linen | `#E8E0D4` | `linen` | Dividers, borders, subtle backgrounds |
| White | `#FFFFFF` | white | Text on dark backgrounds |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section title: `text-3xl md:text-4xl font-cormorant font-light tracking-wide`
- Product name: `text-sm font-inter font-medium tracking-[0.15em] uppercase`
- Body: `text-sm font-inter font-normal leading-relaxed`
- Caption: `text-xs font-inter text-warmgray tracking-wide`
- Price: `text-base font-inter font-medium text-charcoal`
- Nav links: `text-xs font-inter font-medium tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-linen`
- Card border: `border border-linen`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-charcoal text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-inter hover:bg-gold transition-colors duration-300`
- Secondary (outlined): `border border-charcoal text-charcoal px-8 py-3 text-xs tracking-[0.15em] uppercase font-inter hover:bg-charcoal hover:text-white transition-colors duration-300`
- Accent (gold): `bg-gold text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-inter hover:bg-golddark transition-colors duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for key CTAs and highlights

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep square/rectangular)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
