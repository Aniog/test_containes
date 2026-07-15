# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on dark/neutral backgrounds. Never loud, never discount-looking.

## Color Palette

### Primary Colors
- **Cream** `#fdfaf5` — page background, light surfaces
- **Parchment** `#f7f3ec` — section alternates, subtle warmth
- **Velvet 500** `#b8924a` — warm gold accent, CTAs, highlights
- **Obsidian 800** `#1e1c1a` — dark backgrounds (footer, dark sections), primary text

### Supporting Palette
- `velvet-100` `#f4efe6` — hover states, light gold tints
- `velvet-200` `#e8dcc8` — borders, dividers, empty star fill
- `velvet-300` `#d9c5a0` — champagne accents
- `velvet-400` `#c9a96e` — secondary gold
- `velvet-600` `#9e7a38` — gold hover state
- `obsidian-400` `#857d72` — muted text, captions
- `obsidian-500` `#635c52` — body text secondary
- `obsidian-600` `#4a4440` — body text primary
- `obsidian-700` `#332f2c` — strong body text

### DO NOT use
- Pure black `#000000` — too harsh
- Pure white `#ffffff` — too cold
- Any blue, purple, or cool-toned accent
- Bright/saturated colors

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light leading-none`
- Section H2: `font-serif text-4xl md:text-5xl font-light`
- Product name: `font-serif text-3xl uppercase tracking-widest2 font-light`
- Card title: `font-serif text-sm uppercase tracking-widest`

### Body — Manrope (sans-serif)
- Body text: `font-sans text-sm text-obsidian-500 leading-relaxed`
- Labels/eyebrows: `font-sans text-xs uppercase tracking-widest text-velvet-500`
- UI text: `font-sans text-xs uppercase tracking-widest`
- Captions: `font-sans text-[11px] text-obsidian-400`

### Letter Spacing
- `tracking-widest` (0.1em) — standard UI labels
- `tracking-widest2` (0.25em) — product names, logo
- `tracking-widest3` (0.35em) — hero eyebrows

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border border-velvet-200` or `border-t border-velvet-200`
- Section dividers: `w-12 h-px bg-velvet-400 mx-auto mt-5`
- No thick borders, no rounded corners on key elements (sharp = premium)

## Buttons
- **Primary (solid)**: `bg-velvet-500 text-cream` — main CTAs
- **Dark**: `bg-obsidian-800 text-cream` — Add to Cart, checkout
- **Outline**: `border border-velvet-500 text-velvet-500` — secondary actions
- All buttons: `uppercase tracking-widest text-xs font-medium`
- No border-radius on buttons (sharp edges = luxury)

## Shadows
- Soft, warm: `shadow-sm` only — never harsh drop shadows
- Cart drawer: `shadow-2xl`

## Animations
- Duration: 300–500ms
- Easing: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (luxury ease)
- Hover image swap: opacity transition 500ms
- Quick-add reveal: translateY + opacity 300ms
- No bouncy or springy animations

## Images
- Product cards: `aspect-[3/4]` (portrait)
- Hero: full-bleed 16:9 or cover
- UGC reels: `9:16` vertical
- Category tiles: `aspect-[3/4]`
- All images: `object-cover`, warm jewelry on neutral/dark backgrounds

## DO's
- Generous whitespace
- Serif for all headings and product names
- Uppercase + wide letter-spacing for all UI labels
- Warm gold (#b8924a) as the single accent color
- Thin hairline borders
- Subtle hover transitions

## DON'Ts
- No rounded pill buttons (use sharp rectangles)
- No bright/saturated colors
- No heavy drop shadows
- No generic e-commerce blue
- No crowded layouts
- No text smaller than 11px
