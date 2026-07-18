# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE4 — secondary background, section alternates
- `espresso`: #1C1410 — primary text, deepest dark
- `espresso-light`: #3D2E24 — secondary text, warm dark brown
- `gold`: #C9A96E — primary accent, warm gold
- `gold-light`: #E2C98A — lighter gold for hover states
- `gold-dark`: #A8854A — darker gold for pressed states
- `stone`: #8C7B6B — muted text, captions, metadata
- `stone-light`: #C4B5A5 — hairline dividers, borders
- `charcoal`: #2C2420 — card backgrounds, dark sections

### Usage
- Page background: `bg-ivory`
- Section alternates: `bg-ivory-dark`
- Dark sections (hero, newsletter): `bg-espresso`
- Primary text: `text-espresso`
- Secondary/muted text: `text-stone`
- Accent: `text-gold`, `bg-gold`, `border-gold`
- Dividers: `border-stone-light`

## Typography

### Fonts
- Serif (headings, product names, brand): Cormorant Garamond — weights 300, 400, 500, 600, 700
- Sans-serif (body, UI, labels): Inter — weights 300, 400, 500, 600

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-inter text-sm leading-relaxed text-stone`
- Label/UI: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-base font-medium text-espresso`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-espresso font-inter text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold font-inter text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-gold hover:text-espresso transition-all duration-300`
- Ghost: `text-espresso font-inter text-xs uppercase tracking-widest hover:text-gold transition-colors duration-300`

### Cards
- Product card: `bg-white shadow-sm hover:shadow-md transition-shadow duration-300`
- Rounded: `rounded-none` (sharp corners for editorial feel)

### Dividers
- `border-t border-stone-light`

### Transitions
- Default: `transition-all duration-300 ease-out`
- Hover image: `scale-105 transition-transform duration-500`

## Do's
- Use generous whitespace between sections
- Keep typography hierarchy clear: serif for emotion, sans for function
- Use gold sparingly as a true accent
- Thin hairline borders (1px) for structure
- Large editorial imagery

## Don'ts
- No rounded corners on product cards (editorial, not playful)
- No bright/saturated colors
- No heavy drop shadows
- No generic e-commerce patterns (no blue "Buy Now" buttons)
- No tight spacing
