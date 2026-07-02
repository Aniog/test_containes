# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.

## Color Palette

### Base Colors
- `velmora-obsidian`: `#1A1714` — Deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: `#2C2825` — Secondary dark surface
- `velmora-stone`: `#F5F0EB` — Warm off-white, primary light background
- `velmora-cream`: `#FAF7F4` — Lightest surface, card backgrounds
- `velmora-linen`: `#EDE8E1` — Subtle dividers, borders

### Accent Colors
- `velmora-gold`: `#C9A96E` — Primary accent, CTAs, highlights (warm gold)
- `velmora-gold-light`: `#E2C98A` — Hover state for gold
- `velmora-gold-dark`: `#A8854A` — Active/pressed gold
- `velmora-bronze`: `#8B6914` — Deep gold for text on light backgrounds

### Text Colors
- `velmora-ink`: `#1A1714` — Primary text on light backgrounds
- `velmora-muted`: `#6B6560` — Secondary/muted text
- `velmora-subtle`: `#9E9690` — Placeholder, captions

## Typography

### Fonts
- **Serif (headings, product names)**: Cormorant Garamond — elegant, editorial
- **Sans-serif (body, UI)**: Manrope — clean, modern, readable

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, `font-light` or `font-normal`
- H1: `text-4xl md:text-5xl`, Cormorant Garamond
- H2: `text-3xl md:text-4xl`, Cormorant Garamond
- H3: `text-xl md:text-2xl`, Cormorant Garamond
- Product names: `text-lg md:text-xl`, Cormorant Garamond, `uppercase tracking-widest`
- Body: `text-sm md:text-base`, Manrope
- Caption: `text-xs`, Manrope, `tracking-wider uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-linen` (1px)
- Card border: `border border-velmora-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for subtle softness on inputs/buttons

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/20`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian uppercase tracking-widest text-xs font-semibold px-8 py-4 hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold uppercase tracking-widest text-xs font-semibold px-8 py-4 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-muted hover:text-velmora-ink transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]`
- Fade in: `opacity-0 → opacity-100 duration-500`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (too casual)
- No heavy drop shadows
- No generic blue links
- No crowded layouts
