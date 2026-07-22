# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest surface, card backgrounds
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary text on light backgrounds
- `ink-muted`: #6B6560 — secondary/muted text
- `ink-faint`: #9C9590 — placeholder, captions

## Typography

### Fonts
- Headings/Display: "Cormorant Garamond" (serif) — weight 300, 400, 600
- Body/UI: "Inter" (sans-serif) — weight 400, 500, 600

### Scale
- Display: `text-5xl lg:text-7xl font-cormorant font-light tracking-wide`
- H1: `text-4xl lg:text-5xl font-cormorant font-light`
- H2: `text-3xl lg:text-4xl font-cormorant font-light`
- H3: `text-xl lg:text-2xl font-cormorant`
- Product Name: `text-lg font-cormorant uppercase tracking-widest`
- Body: `text-sm font-inter text-ink-muted leading-relaxed`
- Caption: `text-xs font-inter text-ink-faint tracking-wide uppercase`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Subtle shadow: `shadow-sm` with warm tint

## Buttons
- Primary (solid gold): `bg-gold text-cream hover:bg-gold-dark px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-cream px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium transition-colors duration-300`
- Ghost: `text-ink hover:text-gold text-xs tracking-widest uppercase font-inter`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Serif for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Warm gold accent sparingly — it should feel precious
- Thin hairline borders, never thick borders
- Soft shadows, never harsh drop shadows

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No generic blue links
- No tight spacing or cramped layouts
- No bold/heavy serif weights (keep it light and elegant)
