# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-espresso`: #2C2420 — secondary dark surface, footer
- `velmora-stone`: #3D3530 — card backgrounds, subtle surfaces

### Warm Neutrals
- `velmora-linen`: #F5F0E8 — primary light background, page base
- `velmora-cream`: #FAF7F2 — card surfaces, hero overlay
- `velmora-sand`: #E8DDD0 — dividers, borders, muted surfaces

### Gold Accents
- `velmora-gold`: #C9A96E — primary accent, CTAs, highlights
- `velmora-gold-light`: #DFC08A — hover states, warm highlights
- `velmora-gold-muted`: #A8895A — secondary accent, icons

### Text
- `velmora-text-dark`: #1A1714 — primary text on light backgrounds
- `velmora-text-mid`: #5C4F45 — secondary text, captions
- `velmora-text-light`: #F5F0E8 — text on dark backgrounds
- `velmora-text-muted`: #9C8B7E — placeholder, muted labels

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, navigation

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-base font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-velmora-sand` (1px)
- Card borders: `border border-velmora-sand`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Soft card shadow: `shadow-[0_4px_24px_rgba(26,23,20,0.08)]`
- Hover lift: `shadow-[0_8px_32px_rgba(26,23,20,0.14)]`

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3 hover:bg-velmora-gold-light transition-colors`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-text-mid hover:text-velmora-gold transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]`
- Fade in: subtle opacity transitions
- No jarring or bouncy animations — everything is smooth and restrained

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Large editorial imagery with generous whitespace
- Thin hairline dividers (1px, velmora-sand)
- Soft, warm shadows

## Don'ts
- No bright/saturated colors
- No rounded-full on rectangular buttons
- No generic e-commerce blue/green CTAs
- No tight spacing or cramped layouts
- No bold/heavy serif weights — keep it light and elegant
