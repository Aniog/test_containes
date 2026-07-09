# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals (primary surfaces)
- `ivory`: #FAF7F2 — page background, light surfaces
- `linen`: #F2EDE5 — card backgrounds, section alternates
- `sand`: #E8DFD0 — borders, dividers, subtle fills

### Gold Accent (brand identity)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, lighter gold
- `gold-dark`: #A8854A — pressed states, deep gold

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A6E65 — secondary text, captions
- `whisper`: #B5A99A — placeholder, disabled

## Typography

### Fonts
- Headings / Product Names: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl md:text-7xl` Cormorant, weight 300, tracking-wide
- H1: `text-4xl md:text-6xl` Cormorant, weight 400
- H2: `text-3xl md:text-4xl` Cormorant, weight 400
- H3: `text-xl md:text-2xl` Cormorant, weight 500
- Product Name: `text-lg md:text-xl` Cormorant, UPPERCASE, `tracking-[0.15em]`
- Body: `text-sm md:text-base` Manrope, weight 400
- Caption: `text-xs` Manrope, weight 400, color muted
- Button: `text-xs` Manrope, UPPERCASE, `tracking-[0.12em]`, weight 500

## Spacing
- Section padding: `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-sand` (1px)
- Card border: `border border-sand`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (CTA): `bg-gold text-ivory uppercase tracking-[0.12em] text-xs font-medium px-8 py-3.5 hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold uppercase tracking-[0.12em] text-xs font-medium px-8 py-3.5 hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-ink uppercase tracking-[0.12em] text-xs font-medium hover:text-gold transition-colors`

## Animations
- Transition default: `transition-all duration-300 ease-out`
- Image hover scale: `hover:scale-105 transition-transform duration-500`
- Nav scroll: opacity + background transition 300ms
- Cart drawer: slide-in from right 350ms ease-out

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — only for CTAs and key highlights

## Don'ts
- No bright/saturated colors other than gold
- No rounded corners on hero images or editorial tiles
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts — always breathe
