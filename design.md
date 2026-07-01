# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1614` — Deep warm black (primary background for hero/dark sections)
- `velmora-charcoal`: `#2C2420` — Rich dark brown-black (secondary dark)
- `velmora-stone`: `#F5F0EB` — Warm off-white (primary light background)
- `velmora-cream`: `#FAF7F4` — Softest cream (card backgrounds, page bg)

### Accent / Gold
- `velmora-gold`: `#C9A96E` — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: `#E8D5A3` — Pale gold (hover states, subtle accents)
- `velmora-gold-dark`: `#A07840` — Deep gold (pressed states)

### Text
- `velmora-ink`: `#1A1614` — Primary text on light backgrounds
- `velmora-muted`: `#7A6E68` — Secondary/muted text
- `velmora-whisper`: `#B8AFA9` — Placeholder, disabled text

### UI
- `velmora-border`: `#E8E0D8` — Hairline dividers, card borders
- `velmora-surface`: `#FFFFFF` — Pure white surfaces (modals, drawers)

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — `font-serif`
- **Sans-serif (body, UI, labels)**: Manrope — `font-sans`

### Scale
- Hero headline: `text-5xl md:text-7xl lg:text-8xl` serif, `font-light`, tracking-wide
- Section headline: `text-3xl md:text-4xl` serif, `font-light`
- Product name: `text-xl md:text-2xl` serif, `uppercase`, `tracking-widest`
- Body: `text-sm md:text-base` sans, `font-normal`
- Label/UI: `text-xs` sans, `uppercase`, `tracking-wider`

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-velmora-border` (1px)
- Divider: `h-px bg-velmora-border`

## Shadows
- Card: `shadow-sm` with warm tint
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian uppercase tracking-widest text-xs font-semibold px-8 py-4 hover:bg-velmora-gold-dark transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold uppercase tracking-widest text-xs font-semibold px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-ink uppercase tracking-widest text-xs font-semibold hover:text-velmora-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline borders, never thick
- Serif for anything emotional/brand; sans for functional UI
- Product names always UPPERCASE with wide tracking
- Gold accent used sparingly — not everywhere

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No drop shadows that look "web 2.0"
- No generic stock photo vibes — warm, editorial, intimate
- No cluttered layouts — breathe
