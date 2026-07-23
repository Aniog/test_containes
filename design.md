# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: `#2C2825` — secondary dark surface
- `velmora-ivory`: `#FAF7F2` — primary light background (warm white)
- `velmora-cream`: `#F2EDE4` — secondary light surface, cards

### Accent (Gold)
- `velmora-gold`: `#C9A96E` — primary accent, CTAs, highlights
- `velmora-gold-light`: `#E8D5A3` — hover states, subtle tints
- `velmora-gold-dark`: `#A07840` — pressed states, borders

### Text
- `velmora-text`: `#1A1714` — primary text on light backgrounds
- `velmora-muted`: `#7A6E64` — secondary/muted text
- `velmora-subtle`: `#B5A99A` — placeholder, dividers

### UI
- `velmora-border`: `#E8E0D5` — hairline dividers
- `velmora-surface`: `#FFFFFF` — card surfaces

## Typography

### Fonts
- **Serif (headings, product names)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI)**: Manrope — clean, modern

### Scale
- Hero headline: `text-5xl md:text-7xl` font-cormorant font-light tracking-wide
- Section heading: `text-3xl md:text-4xl` font-cormorant font-light
- Product name: `text-lg md:text-xl` font-cormorant uppercase tracking-widest
- Body: `text-sm md:text-base` font-manrope font-normal
- Caption/label: `text-xs` font-manrope uppercase tracking-widest

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-velmora-border` (1px, warm gray)
- Divider: `h-px bg-velmora-border`

## Shadows
- Card: `shadow-sm` with warm tint
- Elevated: `shadow-md`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs uppercase tracking-widest font-manrope font-medium hover:bg-velmora-gold-dark transition-colors duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-muted hover:text-velmora-text text-xs uppercase tracking-widest`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for CTAs and key highlights
- Warm ivory/cream backgrounds for light sections

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on buttons (sharp or very subtle)
- No heavy drop shadows
- No generic stock photo aesthetics
- No crowded layouts
