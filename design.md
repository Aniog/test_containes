# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- `obsidian`: #1A1714 — Deep warm black, primary background for hero/dark sections
- `ivory`: #FAF7F2 — Warm off-white, main page background
- `champagne`: #C9A96E — Warm gold accent, CTAs, highlights
- `champagne-light`: #E8D5A3 — Lighter gold for hover states
- `champagne-dark`: #A8854A — Darker gold for pressed states

### Neutral Colors
- `stone-50`: #FDFCFA — Near-white surface
- `stone-100`: #F5F1EB — Light warm gray, card backgrounds
- `stone-200`: #E8E0D5 — Hairline dividers
- `stone-300`: #D4C9B8 — Muted borders
- `stone-500`: #8C7B6B — Muted text, captions
- `stone-700`: #4A3F35 — Secondary text
- `stone-900`: #1A1714 — Primary text (same as obsidian)

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, labels

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl lg:text-6xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm text-stone-700 leading-relaxed`
- Caption: `font-manrope text-xs text-stone-500 tracking-wide uppercase`
- Nav Link: `font-manrope text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Borders & Dividers
- Hairline: `border border-stone-200`
- Divider: `h-px bg-stone-200`
- Thin accent: `border border-champagne`

## Shadows
- Card: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Elevated: `shadow-lg`

## Buttons
- Primary (filled): `bg-champagne text-obsidian font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-champagne-dark transition-colors duration-200`
- Secondary (outlined): `border border-obsidian text-obsidian font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-obsidian hover:text-ivory transition-colors duration-200`
- Ghost: `text-stone-700 font-manrope text-xs tracking-[0.12em] uppercase hover:text-obsidian transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE with wide letter-spacing
- Use serif for all editorial/emotional copy
- Use hairline dividers, never thick borders
- Gold accent only for key CTAs and highlights

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp or very subtle)
- No generic stock photo vibes — warm, editorial, intimate
- No more than 2 font families
- No heavy drop shadows
