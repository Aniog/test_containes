# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Base Colors
- `velmora-obsidian`: #1A1614 — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: #2C2420 — Rich dark brown-black (secondary backgrounds)
- `velmora-ivory`: #FAF7F2 — Warm off-white (page background, light surfaces)
- `velmora-cream`: #F2EDE4 — Warm cream (section backgrounds, cards)
- `velmora-linen`: #E8E0D4 — Warm linen (borders, dividers)

### Accent Colors
- `velmora-gold`: #C9A96E — Warm antique gold (primary accent, CTAs, highlights)
- `velmora-gold-light`: #E2C98A — Light gold (hover states, shimmer)
- `velmora-gold-dark`: #A07840 — Deep gold (pressed states)
- `velmora-rose`: #C4907A — Warm rose (secondary accent, subtle warmth)

### Text Colors
- `velmora-text`: #1A1614 — Primary text on light backgrounds
- `velmora-muted`: #6B5E54 — Muted/secondary text
- `velmora-subtle`: #9C8E84 — Placeholder, captions

## Typography

### Fonts
- **Serif (headings, product names, editorial)**: Cormorant Garamond — elegant, high-fashion
- **Sans-serif (body, UI, labels)**: Manrope — clean, modern, readable

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant uppercase tracking-widest`
- Body: `text-sm font-manrope text-velmora-muted`
- Label/UI: `text-xs font-manrope uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-velmora-linen` (1px)
- Card borders: `border border-velmora-linen`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Soft card shadow: `shadow-[0_2px_20px_rgba(26,22,20,0.06)]`
- Hover elevation: `shadow-[0_8px_40px_rgba(26,22,20,0.12)]`

## Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs uppercase tracking-widest font-manrope hover:bg-velmora-gold-light transition-all duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-muted text-xs uppercase tracking-widest hover:text-velmora-gold transition-colors duration-200`

## Animations
- Transitions: `duration-300 ease-out` for most interactions
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 → opacity-100 transition-opacity duration-500`
- No bouncy or playful animations — everything is smooth and restrained

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm gold (#C9A96E) as the single accent color
- Generous padding and whitespace
- Thin hairline borders
- Soft, warm imagery tones

## Don'ts
- No bright whites (#FFFFFF) — use warm ivory/cream instead
- No cool grays — everything has warm undertones
- No rounded-full buttons (pill shape feels cheap) — use sharp or very slightly rounded
- No drop shadows that are too dark or harsh
- No more than 2 accent colors visible at once
