# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background
- `linen`: #EDE8DF — card backgrounds, subtle surfaces
- `sand`: #D4C9B8 — borders, hairline dividers

### Gold Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm glow
- `gold-dark`: #A8854A — pressed states, deep accent

### Text
- `ink`: #1A1714 — primary body text on light
- `muted`: #7A7068 — secondary text, captions
- `whisper`: #A89E94 — placeholder, disabled

### Utility
- `white`: #FFFFFF
- `overlay`: rgba(26,23,20,0.6) — image overlays

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, captions

### Scale
- Display: Cormorant Garamond 64px / 1.1 lh, light (300)
- H1: Cormorant Garamond 48px / 1.15 lh, regular (400)
- H2: Cormorant Garamond 36px / 1.2 lh, regular (400)
- H3: Cormorant Garamond 28px / 1.3 lh, regular (400)
- Product Name: Cormorant Garamond 20px, UPPERCASE, letter-spacing 0.15em
- Body: Manrope 15px / 1.7 lh, regular (400)
- Small: Manrope 13px / 1.6 lh
- Caption: Manrope 11px, UPPERCASE, letter-spacing 0.1em

## Spacing
- Section padding: py-20 md:py-28
- Container: max-w-7xl mx-auto px-6 md:px-10
- Card gap: gap-6 md:gap-8
- Hairline divider: border-sand (1px)

## Components

### Buttons
- Primary: bg-gold text-obsidian px-8 py-3.5 font-manrope text-sm uppercase tracking-widest hover:bg-gold-light transition-colors
- Outlined: border border-gold text-gold px-8 py-3.5 hover:bg-gold hover:text-obsidian
- Ghost: text-gold underline-offset-4 hover:underline

### Cards
- Product card: bg-linen, no border, soft shadow on hover (shadow-md)
- Hover: scale-[1.01] transition-transform duration-300

### Dividers
- Hairline: border-t border-sand

### Animations
- Transitions: duration-300 ease-out
- Hover scale: scale-[1.02]
- Fade in: opacity-0 → opacity-100

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or 2/3 width)
- Thin hairline dividers between sections
- Gold accent used sparingly — not everywhere
- Product names always UPPERCASE with wide tracking
- Serif for all headings and editorial copy
- Sans for all UI, body, navigation

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic e-commerce blue/red CTAs
- No crowded layouts
- No small imagery
