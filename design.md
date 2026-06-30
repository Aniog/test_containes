# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surfaces
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white page background
- `cream`: #FAF7F2 — card/section backgrounds
- `linen`: #EDE8DF — borders, dividers, hairlines

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A7068 — secondary/caption text
- `ghost`: #B0A89E — placeholder, disabled

## Typography

### Fonts
- Headings/Display: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body/UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl` to `text-7xl`, Cormorant Garamond, font-light, tracking-wide
- H1: `text-4xl md:text-5xl`, Cormorant Garamond, font-normal
- H2: `text-3xl md:text-4xl`, Cormorant Garamond, font-normal
- H3: `text-xl md:text-2xl`, Cormorant Garamond, font-normal
- Product Name: `text-lg md:text-xl`, Cormorant Garamond, UPPERCASE, `tracking-[0.15em]`
- Body: `text-sm md:text-base`, Manrope, font-normal, leading-relaxed
- Caption/Label: `text-xs`, Manrope, `tracking-[0.1em]`, UPPERCASE

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline divider: `border-linen` (1px)
- Card border: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md` with warm tint
- Drawer: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-gold text-obsidian px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs tracking-[0.15em] uppercase hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ink text-xs tracking-[0.1em] uppercase underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Fade in: `opacity-0 → opacity-100` with `transition-opacity duration-500`
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all product names, headings, hero text
- Use UPPERCASE + wide letter-spacing for product names and labels
- Keep backgrounds warm (parchment, cream) — never pure white
- Use gold accent sparingly — it should feel precious
- Generous padding around all content
- Thin hairline borders, never thick borders

## Don'ts
- No bright/saturated colors
- No rounded-full on rectangular buttons
- No generic blue links
- No dense layouts — always breathe
- No pure black (#000) — use obsidian (#1A1714)
- No pure white (#fff) — use parchment or cream
