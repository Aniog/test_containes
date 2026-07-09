# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking.
Warm gold jewelry on dark/neutral backgrounds. Generous whitespace, thin dividers, soft transitions.

## Color Palette

### Base & Surface
- `obsidian`: `#1a1a1a` — Primary dark background, hero overlays
- `charcoal`: `#2d2d2d` — Secondary dark surfaces
- `stone-50`: `#faf8f5` — Light page background
- `stone-100`: `#f5f0ea` — Card backgrounds, alternate sections
- `stone-200`: `#e7e0d8` — Borders, dividers, hairlines

### Gold Accent
- `gold`: `#c9a96e` — Primary accent (buttons, links, highlights)
- `gold-dark`: `#b8924a` — Hover state, pressed state
- `gold-light`: `#d4b87a` — Subtle accent, badges
- `gold-muted`: `#e8d5b0` — Backgrounds with gold tint

### Text
- `ink`: `#1c1917` — Primary text on light backgrounds
- `ink-light`: `#44403c` — Secondary text
- `ink-muted`: `#78716c` — Tertiary, labels, placeholders
- `cream`: `#faf8f5` — Text on dark backgrounds
- `cream-muted`: `#d6d0c8` — Secondary text on dark backgrounds

### Status
- `success`: `#16a34a`
- `error`: `#dc2626`

## Typography

### Headings — Cormorant Garamond (serif)
- H1: `text-5xl md:text-7xl font-light tracking-wide`
- H2: `text-3xl md:text-5xl font-light tracking-wide`
- H3: `text-xl md:text-2xl font-medium`
- Product names: UPPERCASE `tracking-[0.2em]`

### Body — Inter (sans-serif)
- Body: `text-base leading-relaxed`
- Small: `text-sm`
- Labels: `text-xs uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-32 px-6 md:px-12`
- Card padding: `p-6 md:p-8`
- Inline spacing: `gap-4 md:gap-6`

## Components

### Buttons
- Primary: `bg-gold text-obsidian hover:bg-gold-dark` with `transition-all duration-300`
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-obsidian`
- All uppercase, tracking-wider, text-sm

### Cards
- Subtle shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`
- Rounded corners: `rounded-none` (editorial) or `rounded-sm`
- Thin border: `border border-stone-200`

### Dividers
- Hairline: `border-t border-stone-200`
- Gold accent: `border-t border-gold/30`

## Animations
- Hover transitions: `transition-all duration-300 ease-in-out`
- Page fade-in: `animate-in fade-in duration-500`
- Subtle lift on hover: `hover:-translate-y-1`

## Don'ts
- No bright or neon colors
- No heavy borders or box shadows
- No rounded-xl on cards (too casual)
- No generic e-commerce blue
- No discount badges or urgency colors
- No busy patterns or textures
