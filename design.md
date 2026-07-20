# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (in tailwind.config.js)
- `ivory`: #FAF7F2 — primary background, warm off-white
- `ivory-dark`: #F2EDE4 — secondary background, section alternates
- `espresso`: #1C1410 — primary text, deepest dark
- `espresso-light`: #3D2E24 — secondary text, rich brown
- `gold`: #C9A96E — primary accent, warm gold
- `gold-light`: #E2C98A — lighter gold for hover states
- `gold-dark`: #A8854A — darker gold for pressed states
- `stone`: #8C7B6B — muted text, captions, labels
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
- Serif (headings, product names, logo): Cormorant Garamond — loaded via Google Fonts
- Sans-serif (body, UI, labels): Inter — loaded via Google Fonts

### Scale
- Display / Hero headline: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-serif text-3xl md:text-4xl font-light tracking-wide`
- Product name: `font-serif text-xl uppercase tracking-[0.15em]`
- Body: `font-sans text-base text-espresso`
- Caption / label: `font-sans text-xs uppercase tracking-[0.12em] text-stone`
- Price: `font-sans text-lg font-medium text-espresso`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary (solid): `bg-gold text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-[0.15em] font-sans font-medium hover:bg-espresso hover:text-ivory transition-colors duration-300`
- Ghost: `text-espresso text-xs uppercase tracking-[0.12em] underline-offset-4 hover:underline`

### Cards
- Product card: white/ivory bg, no border, soft shadow on hover `hover:shadow-lg transition-shadow duration-300`
- Thin hairline divider: `border-t border-stone-light`

### Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: subtle opacity transitions

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers (`border-stone-light`)
- Restrained gold accent — don't overuse
- UPPERCASE with wide letter-spacing for product names and labels
- Serif for all headings and product names
- Sans-serif for all body copy, prices, UI elements

## Don'ts
- No bright/saturated colors
- No thick borders or heavy shadows
- No generic e-commerce blue/red CTAs
- No tight spacing or cluttered layouts
- No mixed font weights (keep it light/regular for serif, medium for sans UI)
