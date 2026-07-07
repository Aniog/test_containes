# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — Deep warm black. Primary background for hero, footer, dark sections.
- `charcoal`: #2C2825 — Secondary dark surface.
- `ivory`: #FAF7F2 — Warm off-white. Main page background.
- `parchment`: #F2EDE4 — Slightly deeper warm neutral. Card backgrounds, section alternates.
- `stone`: #E8E0D4 — Hairline dividers, borders.

### Accent / Gold
- `gold`: #C9A96E — Warm antique gold. Primary accent. Buttons, highlights, icons.
- `gold-light`: #E2C98A — Lighter gold for hover states.
- `gold-dark`: #A8854A — Deeper gold for pressed states.

### Text
- `ink`: #1A1714 — Primary body text on light backgrounds.
- `muted`: #7A6E63 — Secondary text, captions, labels.
- `whisper`: #B5A99A — Placeholder, disabled text.

## Typography

### Fonts
- Heading / Display: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-6xl` to `text-8xl`, Cormorant Garamond, weight 300–400, tracking-wide
- H1: `text-4xl md:text-5xl lg:text-6xl`, Cormorant Garamond
- H2: `text-3xl md:text-4xl`, Cormorant Garamond
- H3: `text-xl md:text-2xl`, Cormorant Garamond
- Product Name: `text-2xl`, Cormorant Garamond, UPPERCASE, `tracking-widest`
- Body: `text-sm md:text-base`, Manrope, weight 400
- Caption / Label: `text-xs`, Manrope, weight 500, `tracking-wider`, UPPERCASE

## Spacing
- Section padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone` or `divide-stone`
- Radius: `rounded-none` for product cards (editorial), `rounded-sm` for buttons
- Subtle shadow: `shadow-sm` with warm tint

## Buttons
- Primary (solid): `bg-gold text-ivory px-8 py-3 text-xs tracking-widest uppercase font-manrope font-medium hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-ivory transition-all duration-300`
- Ghost: `text-ink underline-offset-4 hover:underline text-xs tracking-wider uppercase`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right, `translate-x-full` → `translate-x-0`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — it should feel precious
- Serif for all emotional/brand copy; sans-serif for functional UI

## Don'ts
- No bright white (#FFFFFF) backgrounds — use ivory/parchment instead
- No generic blue links
- No rounded pill buttons (use sharp or very subtle radius)
- No drop shadows heavier than `shadow-md`
- No more than 2 font families
- No neon or saturated colors
