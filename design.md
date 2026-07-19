# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE4 — secondary background, section alternates
- `obsidian`: #1A1714 — primary text, deep warm black
- `obsidian-light`: #2E2A26 — secondary dark surface
- `gold`: #C9A96E — primary accent, warm gold
- `gold-light`: #E2C98A — lighter gold for hover states
- `gold-dark`: #A8854A — darker gold for pressed states
- `mink`: #8C7B6B — muted warm brown, secondary text
- `mink-light`: #B5A898 — lighter mink, placeholder text
- `blush`: #E8D5C4 — soft warm blush, subtle backgrounds
- `charcoal`: #3D3530 — dark text on light backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-wide`
- H1: `font-cormorant text-4xl lg:text-6xl font-light tracking-wide`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm text-charcoal leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-lg font-medium text-obsidian`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-mink-light/30`
- Card border: `border border-blush`
- Subtle shadow: `shadow-sm`
- Hover shadow: `shadow-md`

## Buttons
- Primary (solid): `bg-obsidian text-ivory font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-charcoal transition-colors`
- Accent (gold): `bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold-light transition-colors`
- Outlined: `border border-obsidian text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors`
- Ghost: `text-obsidian font-manrope text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase product names with wide letter-spacing
- Warm gold accents sparingly
- Soft hover states (no jarring color changes)

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded corners on buttons (sharp = premium)
- No generic stock photo vibes
- No cluttered layouts
