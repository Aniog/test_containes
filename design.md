# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep warm neutrals, gold accents, generous whitespace.

## Color Palette

### Named Colors (added to Tailwind config)
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `espresso`: #2C2420 — secondary dark, footer
- `parchment`: #F5F0E8 — warm off-white, main page background
- `cream`: #FAF7F2 — card backgrounds, section alternates
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — hover states, subtle accents
- `gold-dark`: #A07840 — pressed states, borders
- `mink`: #8B7355 — muted text on light backgrounds
- `stone`: #6B5E52 — secondary text
- `blush`: #E8DDD4 — soft dividers, borders on light bg
- `charcoal`: #3D3530 — body text on light backgrounds

### Usage Rules
- Page background: `parchment` (#F5F0E8)
- Primary text on light: `charcoal` (#3D3530)
- Secondary text on light: `stone` (#6B5E52)
- Accent / CTA: `gold` (#C9A96E)
- Nav transparent: white text; Nav solid: `obsidian` bg + white text
- Footer: `espresso` bg + `parchment` text
- Dividers: `blush` (#E8DDD4) — 1px hairline
- DO NOT use pure black (#000) or pure white (#fff) for backgrounds
- DO NOT use blue, purple, or cool tones anywhere

## Typography

### Fonts
- Heading / Display: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant font-medium uppercase tracking-widest`
- Price: `text-lg font-manrope font-medium`
- Body: `text-sm font-manrope font-normal leading-relaxed`
- Caption / label: `text-xs font-manrope uppercase tracking-widest`
- Nav links: `text-xs font-manrope uppercase tracking-widest`

### Rules
- Product names always UPPERCASE with `tracking-widest`
- Headings use Cormorant Garamond, body uses Manrope
- Never use font-bold for serif headings — use font-light or font-medium

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — err on the side of more padding

## Components

### Buttons
- Primary (solid): `bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-manrope font-medium hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest font-manrope font-medium hover:bg-gold hover:text-obsidian transition-colors`
- Ghost (on dark): `border border-white/40 text-white px-8 py-3 text-xs uppercase tracking-widest hover:border-white transition-colors`

### Cards
- Product card: white/cream bg, soft shadow `shadow-sm hover:shadow-md`, no border radius or very subtle `rounded-sm`
- Hover: image scale `group-hover:scale-105 transition-transform duration-500`

### Dividers
- `border-t border-blush` — hairline divider

### Transitions
- All transitions: `transition-all duration-300 ease-in-out`
- Image zoom: `transition-transform duration-500 ease-out`

## Do's and Don'ts
- DO: generous whitespace, editorial photography, warm tones, serif headings
- DO: thin hairline borders, subtle shadows, restrained gold accents
- DO: UPPERCASE product names with wide letter-spacing
- DON'T: bright colors, discount-looking badges, cluttered layouts
- DON'T: rounded pill buttons (use sharp or very subtle radius)
- DON'T: blue links, cool grays, generic e-commerce patterns
