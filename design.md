# Velmora Fine Jewelry — Design System

## Brand Palette

Deep, warm editorial scheme. Dark charcoal base with warm ivory/cream surfaces, gold metallic accents.

| Token | Hex | Tailwind Name | Usage |
|---|---|---|---|
| Obsidian | `#1a1714` | `obsidian` | Primary background, nav solid |
| Charcoal | `#2c2825` | `charcoal` | Secondary dark bg |
| Warm Ivory | `#f5f0e8` | `ivory` | Page background, cards |
| Cream | `#faf7f2` | `cream` | Section backgrounds |
| Gold | `#c9a96e` | `gold` | Primary accent, CTAs, borders |
| Gold Light | `#e2c98a` | `gold-light` | Hover states, highlights |
| Gold Dark | `#a8854a` | `gold-dark` | Active states |
| Warm White | `#fefcf8` | `warm-white` | Text on dark |
| Stone | `#8c8278` | `stone` | Muted text, captions |
| Blush | `#e8ddd4` | `blush` | Dividers, subtle borders |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Manrope (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl` Cormorant Garamond, font-light, tracking-wide
- Section titles: `text-3xl md:text-4xl` Cormorant Garamond, font-normal
- Product names: `text-xl` Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base` Manrope, font-normal, leading-relaxed
- Captions / labels: `text-xs` Manrope, `tracking-wider`, uppercase

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Components

### Buttons
- **Primary (CTA)**: `bg-gold text-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gold-light transition-colors duration-300`
- **Outlined**: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-obsidian transition-all duration-300`
- **Ghost**: `text-stone text-xs tracking-wider uppercase hover:text-gold transition-colors`

### Cards
- Product card: `bg-cream` with `shadow-sm hover:shadow-md transition-shadow`
- Thin `border border-blush` on hover

### Dividers
- `border-t border-blush` — hairline, warm tone

### Animations
- Hover transitions: `duration-300 ease-out`
- Image zoom on hover: `scale-105 transition-transform duration-500`
- Fade-in on scroll: subtle opacity + translateY

## Do's
- Use Cormorant Garamond for ALL product names and section headings
- Product names always UPPERCASE with `tracking-widest`
- Gold accent used sparingly — borders, CTAs, highlights only
- Warm ivory/cream backgrounds — never pure white or cold gray
- Large editorial imagery with generous padding
- Thin hairline dividers (`border-blush`)

## Don'ts
- No bright/neon colors
- No cold grays or pure whites
- No heavy drop shadows
- No rounded corners on buttons (sharp = premium)
- No generic e-commerce blue links
- No crowded layouts
