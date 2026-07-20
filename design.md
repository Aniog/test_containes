# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest surface, cards
- `linen`: #EDE8DF — borders, dividers, subtle backgrounds

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary text on light
- `ink-muted`: #6B6560 — secondary text, captions
- `ink-faint`: #9E9890 — placeholder, disabled

### Semantic
- `success`: #4A7C59
- `error`: #8B3A3A

## Typography

### Fonts
- Headings / Product Names: **Cormorant Garamond** (serif) — weights 300, 400, 500, 600
- Body / UI: **Manrope** (sans-serif) — weights 300, 400, 500, 600

### Scale
- `text-xs`: 11px — labels, badges
- `text-sm`: 13px — captions, meta
- `text-base`: 15px — body copy
- `text-lg`: 17px — lead text
- `text-xl`: 20px — subheadings
- `text-2xl`: 24px — section titles
- `text-3xl`: 30px — page titles
- `text-4xl`: 36px — hero subhead
- `text-5xl`: 48px — hero headline
- `text-6xl`: 60px — large editorial

### Product Names
Always UPPERCASE, tracking-widest (letter-spacing: 0.15em+), font-serif

## Spacing
Generous whitespace. Section padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile.

## Borders & Dividers
- Hairline dividers: `border-linen` (1px)
- Card borders: `border-linen` with subtle shadow
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md` with warm tint
- Drawer: `shadow-2xl`
- Subtle: `shadow-sm`

## Buttons
- Primary (filled): `bg-gold text-cream` hover `bg-gold-light`, uppercase tracking-widest, py-3 px-8
- Secondary (outlined): `border border-gold text-gold` hover `bg-gold text-cream`
- Ghost: `text-ink-muted` hover `text-ink`
- All buttons: font-sans, text-xs, tracking-widest, uppercase, transition-all duration-300

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Fade in: `opacity-0 → opacity-100`
- Cart drawer: slide from right

## Do's
- Use Cormorant Garamond for all headings and product names
- Use generous padding and whitespace
- Keep accent color (gold) restrained — only for CTAs and key highlights
- Use warm off-white (parchment/cream) as primary background
- Hairline borders, never thick borders
- Large editorial images

## Don'ts
- No bright/neon colors
- No thick borders or heavy shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
- No all-caps body text (only product names and button labels)
