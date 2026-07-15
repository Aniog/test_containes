# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1614 — deep warm black, primary background for hero/dark sections
- `velmora-charcoal`: #2C2420 — secondary dark surface
- `velmora-ivory`: #FAF7F2 — warm off-white, primary light background
- `velmora-cream`: #F2EDE4 — slightly deeper warm cream, card backgrounds

### Accent / Gold
- `velmora-gold`: #C9A96E — warm antique gold, primary accent
- `velmora-gold-light`: #E2C98A — lighter gold for hover states
- `velmora-gold-muted`: #A8895A — deeper gold for text on light backgrounds

### Text
- `velmora-text`: #1A1614 — primary text on light backgrounds
- `velmora-text-muted`: #6B5E54 — secondary/muted text
- `velmora-text-light`: #FAF7F2 — text on dark backgrounds

### UI
- `velmora-border`: #E8E0D5 — hairline dividers on light backgrounds
- `velmora-border-dark`: #3A2E28 — dividers on dark backgrounds

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body copy, UI labels, navigation, prices

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-widest uppercase`
- Price: `font-manrope text-base font-medium`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline: `border border-velmora-border` (1px)
- Divider: `h-px bg-velmora-border`
- Rounded cards: `rounded-none` (sharp, editorial)
- Rounded buttons: `rounded-none` (sharp)
- Rounded pills: `rounded-full` (variant selectors)

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/20`

## Buttons
- Primary (dark): `bg-velmora-obsidian text-velmora-ivory px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-charcoal transition-colors`
- Primary (gold): `bg-velmora-gold text-velmora-obsidian px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-obsidian text-velmora-obsidian px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-obsidian hover:text-velmora-ivory transition-colors`
- Outlined light: `border border-velmora-ivory text-velmora-ivory px-8 py-3 font-manrope text-xs tracking-widest uppercase hover:bg-velmora-ivory hover:text-velmora-obsidian transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold accents sparingly — they should feel precious
- Serif for anything emotional/editorial, sans for functional UI

## Don'ts
- No bright/saturated colors
- No rounded corners on cards or buttons (sharp = editorial)
- No heavy drop shadows
- No generic stock-photo vibes
- No crowded layouts
- No blue links
