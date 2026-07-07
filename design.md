# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark surface
- `velmora-stone`: #4A4540 — muted text on dark
- `velmora-cream`: #FAF7F2 — primary light background
- `velmora-linen`: #F2EDE5 — secondary light surface, cards
- `velmora-sand`: #E8E0D4 — borders, dividers, hairlines

### Accent (Gold)
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover state for gold
- `velmora-gold-dark`: #A8854A — pressed/active state

### Text
- `velmora-ink`: #1A1714 — primary body text on light
- `velmora-muted`: #7A7068 — secondary/caption text
- `velmora-whisper`: #B0A89E — placeholder, disabled

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-2xl font-medium tracking-widest uppercase`
- Card Title: `font-cormorant text-lg font-medium tracking-widest uppercase`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wider uppercase`
- Button: `font-manrope text-xs tracking-widest uppercase font-medium`
- Nav Link: `font-manrope text-xs tracking-widest uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-velmora-sand` (1px)
- Divider: `h-px bg-velmora-sand`
- Card radius: `rounded-none` (sharp, editorial)
- Button radius: `rounded-none`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.12)]`

## Buttons
- Primary (filled): `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-light transition-colors duration-300 px-8 py-3 text-xs tracking-widest uppercase font-manrope font-medium rounded-none`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors duration-300 px-8 py-3 text-xs tracking-widest uppercase font-manrope font-medium rounded-none`
- Ghost: `text-velmora-muted hover:text-velmora-ink transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Cream/linen backgrounds for light sections

## Don'ts
- No rounded corners on cards or buttons (sharp = editorial)
- No bright colors other than gold accent
- No heavy drop shadows
- No generic blue/purple CTA colors
- No tight spacing or cluttered layouts
