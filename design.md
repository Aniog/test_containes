# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry — restrained, elegant, never loud.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Cream | `#FAF7F2` | `bg-cream` | Page background |
| Ivory | `#F5F0E8` | `bg-ivory` | Section alternates |
| White | `#FFFFFF` | `bg-white` | Cards, surfaces |
| Charcoal | `#1C1917` | `text-charcoal` | Primary text, headings |
| Warm Gray | `#78716C` | `text-warm-gray` | Body text, captions |
| Light Gray | `#A8A29E` | `text-light-gray` | Placeholders, disabled |
| Border | `#E7E0D5` | `border-border` | Hairline dividers |
| Gold | `#C9A96E` | `text-gold` / `bg-gold` | Primary accent |
| Gold Light | `#E8D5B0` | `bg-gold-light` | Hover states, backgrounds |
| Gold Dark | `#A8854A` | `text-gold-dark` | Hover on gold elements |

## Typography

### Fonts
- **Headings**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-inter text-base text-warm-gray leading-relaxed`
- Caption: `font-inter text-sm text-light-gray`
- Label/UI: `font-inter text-xs uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-border` (1px, warm beige)
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer: `shadow-2xl shadow-charcoal/20`

## Buttons
- Primary (solid): `bg-charcoal text-cream hover:bg-gold transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- Secondary (outlined): `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`
- Accent (gold): `bg-gold text-white hover:bg-gold-dark transition-colors px-8 py-3 text-xs uppercase tracking-widest font-inter`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Serif for all headings and product names
- Restrained use of gold — accent only, not overwhelming

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep square/rectangular)
- No heavy drop shadows
- No generic e-commerce patterns (no rainbow sale banners, no cluttered layouts)
- No small, cramped typography
