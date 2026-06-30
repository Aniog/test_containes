# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velvet` (#1A1410) — Deep warm near-black. Primary background for hero, footer, dark sections.
- `obsidian` (#0F0D0B) — Deepest dark, used for text on light backgrounds.
- `ivory` (#FAF7F2) — Warm off-white. Primary light background.
- `cream` (#F2EDE4) — Slightly deeper warm cream. Card backgrounds, section alternates.
- `linen` (#E8E0D4) — Hairline dividers, borders, subtle separators.

### Accent / Gold
- `gold` (#C9A96E) — Primary brand accent. CTAs, highlights, hover states.
- `gold-light` (#E2C98A) — Lighter gold for hover states, gradients.
- `gold-dark` (#A8854A) — Deeper gold for pressed states.

### Text
- `text-primary` (#1A1410) — Main body text on light backgrounds.
- `text-secondary` (#6B5E4E) — Muted body text, captions, metadata.
- `text-tertiary` (#9C8E7E) — Placeholder, disabled, very muted.
- `text-on-dark` (#FAF7F2) — Text on dark/velvet backgrounds.
- `text-on-dark-muted` (#C4B49E) — Muted text on dark backgrounds.

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, navigation, captions

### Scale
- Display: `font-cormorant text-6xl md:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl md:text-6xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Nav: `font-manrope text-xs tracking-[0.12em] uppercase`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline: `border border-linen` or `divide-linen`
- Radius: `rounded-none` for product cards (editorial), `rounded-sm` for buttons/pills

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,20,16,0.08)]`
- Drawer: `shadow-[-4px_0_24px_rgba(26,20,16,0.12)]`

## Buttons
- Primary (solid gold): `bg-gold text-velvet font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold-light transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-manrope text-xs tracking-[0.12em] uppercase px-8 py-3.5 hover:bg-gold hover:text-velvet transition-all duration-300`
- Ghost: `text-text-secondary hover:text-gold transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and nav
- Warm gold accents sparingly — they should feel precious
- Serif for anything emotional/editorial, sans for functional UI

## Don'ts
- No bright/saturated colors
- No rounded corners on product images
- No generic blue links
- No heavy drop shadows
- No busy patterns or textures
- No discount-style badges (no "SALE!" in red)
