# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — dark, moody backgrounds that make gold pop, generous whitespace, restrained color use.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface, footer
- `mink`: #3D3530 — card backgrounds, subtle surfaces

### Warm Neutrals
- `parchment`: #F5F0E8 — primary light background, page base
- `linen`: #EDE7DA — section alternates, subtle dividers
- `ivory`: #FAF7F2 — card surfaces, input backgrounds

### Gold Accent
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, warm highlights
- `gold-dark`: #A8854A — pressed states, deep accents

### Text
- `ink`: #1A1714 — primary body text on light backgrounds
- `ash`: #6B6560 — secondary/muted text
- `dust`: #9E9690 — placeholder, disabled

### Utility
- `divider`: #E8E2D9 — hairline borders

## Typography

### Fonts
- **Serif**: Cormorant Garamond (headings, product names, editorial text)
- **Sans**: Manrope (body, UI, labels, prices)

### Scale
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-divider` or `border-[#E8E2D9]`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.12)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.18)]`

## Buttons
- Primary (solid): `bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-light transition-colors`
- Outlined: `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-ash hover:text-ink transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use gold accent sparingly — only for CTAs and key highlights
- Generous whitespace between sections
- Dark obsidian backgrounds for hero and editorial sections
- Warm parchment/linen for product and content sections

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial images
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No more than 2 font families
