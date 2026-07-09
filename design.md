# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount, NOT generic.

## Color Palette

### Base
- `obsidian`: #1A1714 — primary dark background, nav solid state
- `charcoal`: #2C2825 — secondary dark surface
- `stone`: #4A4540 — muted text on dark
- `parchment`: #F5F0E8 — warm off-white, primary light background
- `cream`: #FAF7F2 — lightest warm white, card backgrounds
- `linen`: #EDE8DF — subtle dividers, borders

### Accent (Gold)
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #DFC08A — hover state, lighter gold
- `gold-dark`: #A8854A — pressed state, deep gold

### Text
- `ink`: #1A1714 — primary text on light backgrounds
- `ink-muted`: #6B6560 — secondary/body text
- `ink-faint`: #9C9590 — placeholder, captions

### Semantic
- `surface`: #FAF7F2 — card/panel background
- `border`: #E8E2D9 — hairline dividers

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Sans**: Manrope — body, UI, labels, navigation
  - Weights: 300, 400, 500, 600, 700

### Scale
- `text-xs`: 11px — labels, badges
- `text-sm`: 13px — captions, secondary UI
- `text-base`: 15px — body text
- `text-lg`: 18px — lead text
- `text-xl`: 22px — subheadings
- `text-2xl`: 28px — section headings
- `text-3xl`: 36px — page headings
- `text-4xl`: 48px — hero subhead
- `text-5xl`: 60px — hero headline
- `text-6xl`: 72px — large editorial

### Product Names
- Font: Cormorant Garamond, SemiBold
- Transform: UPPERCASE
- Letter-spacing: `tracking-widest` (0.15em)

## Spacing
- Section padding: `py-20` desktop, `py-12` mobile
- Container max-width: `max-w-7xl mx-auto px-6`
- Card gap: `gap-6` desktop, `gap-4` mobile
- Hairline divider: `border-t border-linen`

## Components

### Buttons
- **Primary (Accent)**: `bg-gold text-cream px-8 py-3 text-sm tracking-widest uppercase font-manrope font-medium hover:bg-gold-light transition-colors`
- **Outlined**: `border border-gold text-gold px-8 py-3 text-sm tracking-widest uppercase hover:bg-gold hover:text-cream transition-colors`
- **Ghost**: `text-ink-muted text-sm tracking-wide hover:text-gold transition-colors`
- No border-radius on primary buttons (sharp edges feel premium) — use `rounded-none`

### Cards
- Background: `bg-cream`
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- No heavy borders — use subtle `border border-linen`

### Nav
- Transparent over hero, transitions to `bg-obsidian/95 backdrop-blur` on scroll
- Logo: Cormorant Garamond, tracking-widest, uppercase
- Links: Manrope, text-sm, tracking-wide

### Dividers
- `border-t border-linen` — hairline, warm tone

## Do's
- Use generous whitespace — let products breathe
- Large editorial imagery (full-bleed hero, big product shots)
- Serif for all headings and product names
- Gold accent sparingly — it should feel precious
- Subtle hover transitions (200ms ease)
- Warm neutrals throughout — avoid cold grays

## Don'ts
- No bright/saturated colors other than gold
- No heavy drop shadows
- No rounded pill buttons (use sharp or very subtle radius)
- No generic blue links
- No crowded layouts
- No cold white (#FFFFFF) — always use warm cream/parchment
