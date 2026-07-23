# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.

## Color Palette

### Base Colors
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `linen`: #EDE8DF — subtle dividers, borders

### Accent Colors
- `gold`: #C9A96E — primary accent, CTAs, highlights (warm gold)
- `gold-light`: #DFC08A — hover state for gold
- `gold-dark`: #A8854A — pressed/active gold

### Text Colors
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6259 — secondary text, captions
- `whisper`: #9E9189 — placeholder, tertiary text
- `ivory`: #FAF7F2 — text on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Label: `font-manrope text-xs font-medium tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-obsidian/10`
- Drawer: `shadow-2xl shadow-obsidian/20`

## Buttons
- Primary (solid gold): `bg-gold text-ivory font-manrope text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-ink font-manrope text-xs tracking-widest uppercase hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- UPPERCASE product names with wide letter-spacing
- Warm, muted tones — never stark white or cold grey

## Don'ts
- No bright/neon colors
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue links
- No crowded layouts — breathe
- No bold/heavy serif weights (keep light/regular)
