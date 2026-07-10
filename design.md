# Velmora Fine Jewelry — Design System

## Brand Personality
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: #1A1714 — primary dark background, nav solid state
- `velmora-charcoal`: #2C2825 — secondary dark, footer
- `velmora-stone`: #4A4540 — muted text, borders

### Warm Neutrals (primary surface)
- `velmora-cream`: #FAF7F2 — page background, cards
- `velmora-linen`: #F2EDE4 — section alternates, trust bar
- `velmora-sand`: #E8DFD0 — dividers, subtle borders

### Gold Accent
- `velmora-gold`: #C9A96E — primary accent, CTAs, stars, highlights
- `velmora-gold-light`: #DFC08A — hover states, lighter gold
- `velmora-gold-dark`: #A8854A — pressed states, deep gold

### Text
- `velmora-ink`: #1A1714 — primary body text on light backgrounds
- `velmora-muted`: #7A6E65 — secondary text, captions
- `velmora-whisper`: #B5A99A — placeholder, disabled

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product Name: `font-cormorant text-xl md:text-2xl font-medium uppercase tracking-widest`
- Card Title: `font-cormorant text-lg font-medium uppercase tracking-widest`

### Body — Manrope (sans-serif)
- Body: `font-manrope text-sm md:text-base font-normal`
- UI Labels: `font-manrope text-xs font-medium uppercase tracking-widest`
- Price: `font-manrope text-base font-semibold`
- Nav Links: `font-manrope text-xs font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-velmora-sand` (1px)
- Card border: `border border-velmora-sand`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-velmora-sand/50`
- Drawer: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold-light transition-colors`
- Outlined: `border border-velmora-gold text-velmora-gold font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-ink font-manrope text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-in-out`
- Hover scale: `hover:scale-[1.02]`
- Image zoom: `group-hover:scale-105 transition-transform duration-500`

## Do's
- Use Cormorant Garamond for all headings and product names
- Use UPPERCASE + wide letter-spacing for product names and nav links
- Generous whitespace between sections
- Warm gold (#C9A96E) as the single accent color
- Hairline borders (1px) for dividers
- Large editorial imagery

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep them square/rectangular)
- No generic blue links
- No heavy drop shadows
- No crowded layouts
