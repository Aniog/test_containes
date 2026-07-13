# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest background, card surfaces
- `linen`: #EDE8DF — subtle dividers, borders

### Accent / Gold
- `gold`: #C9A96E — primary brand accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deeper gold

### Text
- `ink`: #1A1714 — primary text on light backgrounds
- `muted`: #6B6259 — secondary text, captions
- `whisper`: #9E9189 — placeholder, tertiary text

### Semantic
- `surface`: #FAF7F2 — card/panel background
- `border`: #E8E2D9 — hairline dividers

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels)**: Manrope — weights 300, 400, 500, 600, 700

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, weight 300–400
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, weight 400
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, weight 400
- H3: `text-xl md:text-2xl`, Cormorant Garamond, weight 500
- Product Name: `text-lg md:text-xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Label/UI: `text-xs`, Manrope, weight 500–600, `tracking-wider` UPPERCASE
- Price: `text-base md:text-lg`, Manrope, weight 500

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border-linen` or `border-border` at `border-[0.5px]` or `border`
- Card borders: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for buttons

## Shadows
- Card hover: `shadow-md` with `shadow-obsidian/10`
- Drawer/modal: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-gold text-cream px-8 py-3 text-xs tracking-widest uppercase font-manrope font-semibold hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors`
- Ghost: `text-ink text-xs tracking-wider uppercase hover:text-gold transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions
- No jarring animations — everything is slow and refined

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Generous whitespace — let the jewelry breathe
- Thin hairline borders (0.5px–1px)
- Warm off-white (#F5F0E8) as the primary background

## Don'ts
- No bright whites (#FFFFFF) — use warm parchment instead
- No blue/cool-toned accents
- No rounded pill buttons (keep them sharp/minimal)
- No heavy drop shadows
- No cluttered layouts
- No generic e-commerce blue/orange color schemes
