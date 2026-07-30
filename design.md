# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark, footer
- `stone`: #4A4540 — body text on light
- `pebble`: #8A8078 — muted text, captions

### Warm Neutrals (primary surfaces)
- `ivory`: #FAF7F2 — page background, cards
- `cream`: #F2EDE4 — section alternates, trust bar
- `linen`: #E8E0D4 — borders, dividers

### Gold Accent (THE brand color)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover states, shimmer
- `gold-dark`: #A8854A — pressed states, deep accents

### Utility
- `white`: #FFFFFF
- `error`: #C0392B

## Typography

### Fonts
- **Serif (headings, product names, logo):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans (body, UI, labels):** Manrope — weights 300, 400, 500, 600

### Scale
- Display: `text-5xl md:text-7xl` Cormorant Garamond 300, tracking-wide
- H1: `text-4xl md:text-6xl` Cormorant Garamond 400
- H2: `text-3xl md:text-4xl` Cormorant Garamond 400
- H3: `text-xl md:text-2xl` Cormorant Garamond 500
- Product Name: `text-lg md:text-xl` Cormorant Garamond 500, UPPERCASE, tracking-widest
- Body: `text-sm md:text-base` Manrope 400, stone
- Caption/Label: `text-xs` Manrope 500, pebble, tracking-wider UPPERCASE
- Price: `text-lg` Manrope 500, obsidian

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border border-linen`
- Rounded corners: `rounded-none` for editorial feel (or `rounded-sm` max)

## Shadows
- Card hover: `shadow-md` with `shadow-stone/10`
- Drawer: `shadow-2xl`

## Buttons
- **Primary (CTA):** `bg-gold text-white hover:bg-gold-dark` — solid, no radius or `rounded-sm`
- **Outlined:** `border border-gold text-gold hover:bg-gold hover:text-white`
- **Ghost:** `text-stone hover:text-obsidian`
- Padding: `px-8 py-3` for full CTAs, `px-4 py-2` for small
- Letter-spacing: `tracking-widest` uppercase labels on buttons

## Animations
- Transitions: `transition-all duration-300 ease-in-out`
- Image hover scale: `hover:scale-105`
- Overlay fade: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`

## Do's
- Use Cormorant Garamond for ALL headings and product names
- UPPERCASE + wide tracking for product names and button labels
- Warm ivory/cream backgrounds — never pure white for large surfaces
- Gold accent sparingly — it should feel precious, not garish
- Thin hairline borders, generous padding
- Editorial image crops — close-up, warm-lit, model-worn

## Don'ts
- No bright/saturated colors other than gold
- No rounded pill buttons (keep it sharp/editorial)
- No generic stock-photo vibes
- No cramped layouts
- No dark text on dark backgrounds
- No pure black (#000) — use obsidian (#1A1714)
