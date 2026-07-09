# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Page background |
| `parchment` | `#F2EDE6` | Card / surface background |
| `border` | `#E8E0D5` | Hairline dividers, borders |
| `muted` | `#C4B5A5` | Placeholder text, subtle labels |
| `taupe` | `#8C7B6B` | Secondary body text |
| `ink` | `#2A1F14` | Primary text, headings |
| `gold` | `#B8965A` | Primary accent — CTAs, highlights |
| `gold-light` | `#D4AF7A` | Hover states, lighter accents |
| `gold-dark` | `#8A6E3A` | Pressed states |
| `obsidian` | `#1C1410` | Dark sections, footer |

## Typography

### Fonts
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI / Labels**: Manrope (sans-serif) — loaded via Google Fonts

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, `font-light`, tracking-wide
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, `font-light`
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, `font-light`
- H3: `text-xl md:text-2xl`, Cormorant Garamond, `font-normal`
- Product name: `text-lg md:text-xl`, Cormorant Garamond, `uppercase tracking-widest`
- Body: `text-sm md:text-base`, Manrope, `font-normal`
- Label / UI: `text-xs`, Manrope, `uppercase tracking-widest font-medium`
- Price: `text-lg`, Manrope, `font-medium`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline: `border border-border` (1px, `#E8E0D5`)
- Rounded cards: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)
- No heavy drop shadows — use `shadow-sm` at most

## Buttons
- Primary (CTA): `bg-gold text-cream px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-gold-dark transition-colors`
- Outlined: `border border-ink text-ink px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-ink hover:text-cream transition-colors`
- Ghost: `text-gold text-xs uppercase tracking-widest font-medium hover:text-gold-dark`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Warm cream/parchment backgrounds — never pure white or cold grey
- Thin hairline borders only
- Large editorial imagery with generous whitespace
- Gold accent used sparingly for maximum impact

## Don'ts
- No bright/saturated colors
- No heavy drop shadows or thick borders
- No generic e-commerce blue/green CTAs
- No cramped layouts
- No cold grey tones
