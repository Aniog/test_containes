# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — Deep warm black (primary background, nav solid)
- `velmora-charcoal`: `#2C2825` — Rich dark brown-black (card backgrounds, footer)
- `velmora-stone`: `#3D3733` — Warm dark stone (borders, dividers)

### Neutrals / Surfaces
- `velmora-cream`: `#FAF7F2` — Warm off-white (page background, light sections)
- `velmora-linen`: `#F2EDE5` — Warm linen (alternate section backgrounds)
- `velmora-mist`: `#E8E2D9` — Soft warm gray (input backgrounds, subtle fills)

### Accent / Gold
- `velmora-gold`: `#C9A96E` — Warm antique gold (primary accent, CTAs, stars)
- `velmora-gold-light`: `#DFC08A` — Light gold (hover states, highlights)
- `velmora-gold-dark`: `#A8854A` — Deep gold (pressed states, borders)

### Text
- `velmora-ink`: `#1A1714` — Primary text on light backgrounds
- `velmora-slate`: `#5C5550` — Secondary/body text
- `velmora-dust`: `#9C9490` — Muted/placeholder text

## Typography

### Headings — Cormorant Garamond (serif)
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide`
- Section titles: `text-3xl md:text-4xl font-light tracking-wide`
- Product names: `text-xl font-normal uppercase tracking-[0.15em]`
- Quote/editorial: `text-2xl font-light italic`

### Body — Manrope (sans-serif)
- Body text: `text-sm font-normal leading-relaxed`
- UI labels: `text-xs font-medium uppercase tracking-widest`
- Prices: `text-base font-medium`
- Nav links: `text-xs font-medium uppercase tracking-[0.12em]`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-mist` (1px)
- Card border: `border border-velmora-mist`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

## Buttons
- Primary (solid): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold-light transition-colors`
- Secondary (outlined): `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs uppercase tracking-widest font-medium hover:bg-velmora-gold hover:text-velmora-obsidian transition-colors`
- Ghost: `text-velmora-slate text-xs uppercase tracking-widest hover:text-velmora-ink`

## Shadows
- Card hover: `shadow-[0_8px_32px_rgba(26,23,20,0.08)]`
- Drawer: `shadow-[-8px_0_40px_rgba(26,23,20,0.15)]`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover scale: `hover:scale-[1.02]`
- Fade in: opacity 0 → 1, translateY 16px → 0

## Do's
- Use Cormorant Garamond for all headings and product names
- Use Manrope for all body, UI, nav, labels
- Product names always UPPERCASE with wide letter-spacing
- Generous whitespace — let the jewelry breathe
- Warm gold (#C9A96E) as the single accent color
- Dark obsidian sections contrast beautifully with gold

## Don'ts
- No bright whites (#FFFFFF) — use warm cream (#FAF7F2)
- No cool grays — everything has a warm undertone
- No rounded pill buttons — keep them sharp/minimal
- No drop shadows on text
- No more than 2 font families
