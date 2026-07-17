# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on deep neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface, footer
- `stone`: #3D3835 — card backgrounds, subtle surfaces

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background, page base
- `linen`: #EDE7D9 — section alternates, card fills
- `cream`: #FAF7F2 — hero overlay, modal backgrounds

### Gold Accents
- `gold`: #C9A96E — primary accent, CTA buttons, star ratings, borders
- `gold-light`: #DFC08A — hover states, highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `muted`: #6B6560 — secondary text, captions, labels
- `ghost`: #9E9690 — placeholder, disabled text

### Utility
- `divider`: #E8E2D8 — hairline borders, separators
- `white`: #FFFFFF

## Typography

### Fonts
- **Serif (headings, product names, brand):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels):** Manrope — weights 300, 400, 500, 600, 700

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide` — hero headlines
- H1: `font-cormorant text-4xl md:text-5xl font-light tracking-wide`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-normal`
- Product Name: `font-cormorant text-xl font-medium tracking-[0.15em] uppercase`
- Body: `font-manrope text-sm font-normal leading-relaxed`
- Caption: `font-manrope text-xs font-light tracking-wide`
- Button: `font-manrope text-xs font-semibold tracking-[0.12em] uppercase`
- Nav Link: `font-manrope text-xs font-medium tracking-[0.1em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline: `border border-divider` or `border-[#E8E2D8]`
- Accent border: `border border-gold`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card: `shadow-[0_2px_20px_rgba(0,0,0,0.06)]`
- Elevated: `shadow-[0_8px_40px_rgba(0,0,0,0.12)]`
- No harsh box shadows — always soft and diffuse

## Buttons
- Primary (CTA): `bg-gold text-obsidian font-manrope text-xs font-semibold tracking-[0.12em] uppercase px-8 py-3 hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold font-manrope text-xs font-semibold tracking-[0.12em] uppercase px-8 py-3 hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ink font-manrope text-xs font-medium tracking-wide underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-300`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and nav links
- Keep backgrounds warm (parchment, linen, cream) or deep (obsidian, charcoal)
- Use gold sparingly as a true accent — borders, CTAs, stars, underlines
- Generous padding and whitespace — never cramped
- Thin hairline dividers between sections
- Large, editorial imagery — full-bleed or near full-bleed

## Don'ts
- No bright/saturated colors (no red, blue, green accents)
- No rounded corners on images or main cards (editorial = sharp)
- No generic sans-serif headings
- No discount-looking badges (no "SALE!" in red)
- No dense, cramped layouts
- No dark text on dark backgrounds or light text on light backgrounds
