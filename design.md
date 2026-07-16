# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (in tailwind.config.js)
- `cream`: #FAF8F5 — page background, warm off-white
- `parchment`: #F2EDE4 — card/surface background
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — hover states, subtle accents
- `gold-dark`: #A07840 — pressed states, deep gold
- `espresso`: #1C1917 — primary text, nav background (solid)
- `charcoal`: #2C2420 — body text
- `taupe`: #8B7355 — muted/secondary text
- `linen`: #E8E0D0 — hairline borders, dividers
- `blush`: #F7F0E8 — section alternates

### Usage Rules
- Page background: `bg-cream`
- Cards/surfaces: `bg-parchment`
- Primary text: `text-espresso`
- Body text: `text-charcoal`
- Muted text: `text-taupe`
- Accent/CTA: `bg-gold text-espresso` or `border-gold text-gold`
- Dividers: `border-linen`
- Nav (transparent over hero): `bg-transparent`
- Nav (scrolled/solid): `bg-espresso text-cream`

## Typography

### Fonts
- Serif: "Cormorant Garamond" — headings, product names, editorial text
- Sans: "Manrope" — body, UI, labels, prices

### Scale
- Hero headline: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-serif text-3xl md:text-4xl font-light`
- Product name: `font-serif text-xl uppercase tracking-widest`
- Price: `font-sans text-lg font-medium`
- Body: `font-sans text-sm leading-relaxed`
- Label/UI: `font-sans text-xs uppercase tracking-widest`
- Caption: `font-sans text-xs text-taupe`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Shadows
- Hairline divider: `border-t border-linen`
- Card border: `border border-linen`
- Soft shadow: `shadow-sm` or `shadow-[0_2px_20px_rgba(0,0,0,0.06)]`
- No harsh box shadows

## Buttons
- Primary (filled): `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest font-sans font-medium hover:bg-espresso hover:text-cream transition-colors`
- Ghost: `text-taupe hover:text-espresso text-xs uppercase tracking-widest`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions
- Cart drawer: slide in from right

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, flattering image treatments

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle radius only)
- No generic stock photo vibes — editorial warmth only
- No cluttered layouts
