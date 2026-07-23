# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background (primary):** `bg-ivory` (#F7F3EE) — warm cream base
- **Background (secondary):** `bg-ivory-dark` (#EDE8E0) — slightly deeper cream
- **Background (dark):** `bg-obsidian` (#1A1714) — deep warm charcoal (hero, footer, dark sections)
- **Background (dark secondary):** `bg-obsidian-light` (#2C2825)
- **Accent (gold):** `text-gold` / `bg-gold` (#C9A96E) — warm metallic gold
- **Accent (gold light):** `text-gold-light` (#DFC08A)
- **Accent (gold dark):** `text-gold-dark` (#A8854A)
- **Text (primary on light):** `text-obsidian` (#1A1714)
- **Text (secondary):** `text-taupe` (#8C7B6B)
- **Text (muted):** `text-taupe-light` (#B5A898)
- **Blush accent:** `bg-blush` (#E8D5C4)

## Typography
- **Headings / Product names:** `font-serif` (Cormorant Garamond) — elegant, editorial
  - Hero H1: `text-5xl md:text-7xl font-serif font-light tracking-wide`
  - Section titles: `text-3xl md:text-4xl font-serif font-light`
  - Product names: `font-serif text-xl uppercase tracking-widest2`
- **Body / UI:** `font-sans` (Manrope) — clean, modern
  - Body: `text-sm font-sans font-normal`
  - Nav links: `text-xs font-sans uppercase tracking-widest`
  - Prices: `text-base font-sans font-medium`

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Hairline dividers: `border-t border-ivory-dark` (on light) or `border-t border-obsidian-light` (on dark)

## Buttons
- **Primary (solid gold):** `bg-gold text-obsidian hover:bg-gold-dark px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium transition-colors duration-300`
- **Secondary (outlined):** `border border-gold text-gold hover:bg-gold hover:text-obsidian px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium transition-all duration-300`
- **Ghost (dark bg):** `border border-ivory text-ivory hover:bg-ivory hover:text-obsidian`

## Cards & Surfaces
- Product cards: `bg-ivory-dark` with `overflow-hidden`, subtle shadow on hover
- Hover shadow: `hover:shadow-lg transition-shadow duration-400`
- Image containers: `overflow-hidden` with `product-img-zoom` class for scale effect

## Do's
- Use Cormorant Garamond for all headings and product names
- Product names always UPPERCASE with wide letter-spacing
- Gold (#C9A96E) as the single accent color — use sparingly
- Thin 1px borders/dividers only
- Generous padding and whitespace
- Subtle transitions (300–600ms)

## Don'ts
- No bright colors, no neon, no heavy drop shadows
- No rounded corners on buttons (sharp or very subtle radius only)
- No generic e-commerce blue/green CTAs
- No crowded layouts
- Never use white text on ivory backgrounds
