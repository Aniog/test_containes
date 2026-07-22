# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `cream`: #FAF7F2 — page background, warm off-white
- `parchment`: #F2EDE4 — card/surface background
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — hover states, subtle accents
- `gold-dark`: #A07840 — pressed states, deep gold
- `espresso`: #1C1A17 — primary text, dark backgrounds
- `charcoal`: #2D2A26 — secondary text
- `warm-gray`: #8C8680 — muted text, captions
- `warm-gray-light`: #D4CFC8 — borders, dividers
- `blush`: #F5EDE8 — soft accent surface

### Usage
- Page background: `bg-cream`
- Cards/surfaces: `bg-parchment`
- Primary text: `text-espresso`
- Secondary text: `text-charcoal`
- Muted/captions: `text-warm-gray`
- Borders/dividers: `border-warm-gray-light`
- CTA buttons: `bg-gold text-espresso` or `border-gold text-gold`
- Accent highlights: `text-gold`

## Typography

### Fonts
- Headings/Display: Cormorant Garamond (serif) — loaded via Google Fonts
- Body/UI: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em]`
- Body: `font-inter text-sm text-charcoal leading-relaxed`
- Caption/label: `font-inter text-xs uppercase tracking-[0.12em] text-warm-gray`
- Price: `font-inter text-lg font-medium text-espresso`

## Spacing & Layout
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border-t border-warm-gray-light`
- Card borders: `border border-warm-gray-light`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

## Buttons
- Primary CTA: `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter font-medium hover:bg-gold-dark transition-colors`
- Outlined: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-espresso hover:text-cream transition-colors`
- Ghost: `text-espresso text-xs uppercase tracking-[0.12em] underline-offset-4 hover:underline`

## Animations & Transitions
- Default transition: `transition-all duration-300 ease-in-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions
- No jarring animations — everything is soft and refined

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Uppercase product names with wide letter-spacing
- Warm gold accents sparingly
- Serif for all display/heading text

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very subtle radius)
- No heavy drop shadows (use soft, warm shadows only)
- No generic e-commerce patterns
- No cluttered layouts
