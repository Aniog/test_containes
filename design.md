# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `cream`: #FAF7F2 — primary background, warm off-white
- `parchment`: #F2EDE4 — secondary background, section alternates
- `espresso`: #1A1714 — primary text, deep warm near-black
- `charcoal`: #2E2B27 — secondary text, nav
- `stone`: #7A7570 — muted text, captions, labels
- `gold`: #C4973A — primary accent, CTAs, highlights
- `gold-light`: #D4AA5A — hover state for gold
- `gold-pale`: #F0E4C8 — very light gold tint for backgrounds
- `ivory`: #FFFDF9 — card backgrounds, pure near-white

### Usage
- Page background: `bg-cream`
- Cards: `bg-ivory`
- Section alternates: `bg-parchment`
- Primary text: `text-espresso`
- Muted text: `text-stone`
- Accent/CTA: `bg-gold text-ivory` or `border-gold text-gold`
- Dividers: `border-stone/20` (hairline)

## Typography

### Fonts
- Serif (headings, product names, editorial): Cormorant Garamond — loaded via Google Fonts
- Sans-serif (body, UI, labels): Inter — loaded via Google Fonts

### Scale
- Hero headline: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section headline: `font-serif text-3xl md:text-4xl font-light`
- Product name: `font-serif text-xl uppercase tracking-[0.15em]`
- Body: `font-sans text-base text-espresso/80`
- Label/caption: `font-sans text-xs uppercase tracking-[0.12em] text-stone`
- Price: `font-sans text-lg font-medium text-espresso`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-stone/20`
- Card border: `border border-stone/10`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for buttons

## Shadows
- Card hover: `shadow-md shadow-espresso/5`
- Drawer: `shadow-2xl shadow-espresso/20`

## Buttons
- Primary (solid): `bg-gold text-ivory px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans hover:bg-espresso hover:text-ivory transition-colors`
- Ghost: `text-espresso text-xs uppercase tracking-[0.12em] underline-offset-4 hover:underline`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Uppercase product names with wide letter-spacing
- Warm gold accents sparingly

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep square/rectangular)
- No heavy drop shadows
- No generic e-commerce blue/green CTAs
- No crowded layouts
