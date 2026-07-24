# Velmora Fine Jewelry — Visual Identity

## Direction
Quiet-luxury editorial **dark** scheme. A deep espresso-black canvas that makes
gold jewelry glow, paired with warm champagne-gold accents and soft ivory text.
Warm, hushed, premium — never loud, never discount-looking.

## Color Palette (Tailwind config tokens — never raw hex in components)
- `bg-ink` (#14100B) — page background, deep espresso black
- `bg-coal` (#1C1610) — raised surfaces: cards, drawers, footer
- `bg-mocha` (#2A211A) — subtle fills, thumbnail wells, hover states
- `border-line` (#3A2E22) — hairline dividers on dark (use `border-line/60` for whisper lines)
- `text-ivory` (#F5EFE4) — primary text, warm ivory
- `text-sand` (#C9BBA6) — secondary text, captions
- `text-taupe` (#8F8270) — tertiary text, metadata, placeholders
- `bg-gold` (#C6A15B) — primary accent: CTAs, stars, active states
- `text-gold` (#C6A15B) — accent text, links on hover
- `bg-goldlight` (#E9D8B4) — soft gold highlights, badge fills
- `text-inkonaccent` (#1A140D) — text on gold surfaces

Contrast: ivory on ink ≈ 14:1, sand on ink ≈ 8:1, ink on gold ≈ 8:1 — all AA/AAA.

## Typography
- Headings / logo / product names: **Cormorant Garamond** (`font-serif`), light-to-medium weight
- Body / UI / buttons / prices: **Manrope** (`font-sans`)
- Product names: serif, UPPERCASE, `tracking-[0.18em]` or wider
- Eyebrow labels: sans, uppercase, `text-[11px] tracking-[0.3em] text-gold`
- Buttons: sans, uppercase, `text-xs tracking-[0.22em]`

## Shape & Depth
- Square corners (`rounded-none`) everywhere — editorial, not bubbly
- Hairline borders `border border-line` instead of heavy shadows
- Shadows rare and soft: `shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)]` for drawers/modals only
- Buttons: solid gold (`bg-gold text-inkonaccent hover:bg-goldlight`) or outlined (`border border-gold/60 text-gold hover:bg-gold hover:text-inkonaccent`), `rounded-none`, uppercase tracking

## Spacing & Layout
- Generous whitespace: sections `py-20 md:py-28`, container `max-w-7xl mx-auto px-5 md:px-10`
- Thin dividers `h-px bg-line/60` between major sections
- Grids: `grid-cols-2 lg:grid-cols-4` for products with `gap-px` hairline or `gap-6`

## Motion
- Subtle only: `transition-all duration-300 ease-out`
- Image hover: slow scale `group-hover:scale-105 duration-700`
- Reveal on scroll: fade + 16px rise
- Drawer/toast: 300ms slide, no bounce

## Do's
- Ivory text on ink; gold reserved for accents, stars, eyebrows, CTAs
- Large editorial serif headlines with italic accents
- UPPERCASE + wide tracking for product names and nav
- Warm gold-tinted imagery on dark/neutral backgrounds

## Don'ts
- No bright/saturated colors, no gradients, no rounded pill cards
- No gray-on-gray low contrast text; never use taupe for body copy
- No drop-shadow-heavy cards; use hairlines
- No loud badge colors (use goldlight bg + ink text for "New"/"Bestseller")
