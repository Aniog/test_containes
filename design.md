# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2825 — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: #3D3733 — Warm dark stone (borders, dividers)

### Neutrals
- `velmora-linen`: #F5F0E8 — Warm off-white (page background, light sections)
- `velmora-cream`: #EDE8DF — Slightly deeper cream (section alternates)
- `velmora-mist`: #D4CFC6 — Warm gray (muted text, borders)
- `velmora-ash`: #9A9490 — Medium warm gray (secondary text)

### Accent — Gold
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #DFC08A — Lighter gold (hover states)
- `velmora-gold-pale`: #F0E4C8 — Pale gold tint (subtle backgrounds)

### Text
- `velmora-ink`: #1A1714 — Primary text on light backgrounds
- `velmora-warm-white`: #FAF7F2 — Primary text on dark backgrounds

## Typography

### Fonts
- Heading / Display: "Cormorant Garamond" (serif) — weights 300, 400, 500, 600
- Body / UI: "Inter" (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, font-light, tracking-wide
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, font-normal
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, font-normal
- H3: `text-xl md:text-2xl`, Cormorant Garamond, font-normal
- Product Name: `text-lg md:text-xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Inter, font-normal, `text-velmora-ash`
- Caption: `text-xs`, Inter, `tracking-wider`, UPPERCASE

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-velmora-mist/40` (1px)
- Card border: `border border-velmora-mist/30`
- Rounded: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/30`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light` — uppercase, tracking-widest, text-xs, py-3 px-8
- Outlined: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian`
- Ghost: `text-velmora-ash hover:text-velmora-ink`

## Transitions
- Default: `transition-all duration-300 ease-out`
- Hover image: `scale-105` on image wrapper
- Nav: opacity + transform on scroll

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and labels
- Use generous whitespace between sections
- Use warm gold (#C9A96E) as the single accent color
- Keep imagery large and editorial

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial images
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No more than 2 font families
