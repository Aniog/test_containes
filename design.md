# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Named Colors (in tailwind.config.js)
- `ivory`: `#FAF7F2` — primary background, warm off-white
- `ivory-dark`: `#F2EDE4` — secondary background, card surfaces
- `espresso`: `#1C1410` — primary text, deepest dark
- `espresso-light`: `#3D2B1F` — secondary text, rich brown
- `gold`: `#C9A96E` — primary accent, warm gold
- `gold-light`: `#E2C98A` — hover/highlight gold
- `gold-dark`: `#A8854A` — pressed/active gold
- `stone`: `#8C7B6B` — muted text, captions
- `stone-light`: `#BFB0A0` — hairline dividers, borders
- `charcoal`: `#2C2420` — nav background (solid state), footer

### Usage
- Page background: `bg-ivory`
- Cards: `bg-ivory-dark` or `bg-white`
- Primary text: `text-espresso`
- Muted/caption text: `text-stone`
- Accent/CTA: `bg-gold text-espresso` or `border-gold text-gold`
- Dividers: `border-stone-light`
- Nav (solid): `bg-charcoal text-ivory`
- Footer: `bg-charcoal text-ivory`

## Typography

### Fonts
- Serif (headings, product names, logo): **Cormorant Garamond** — weights 300, 400, 500, 600, 700
- Sans-serif (body, UI, labels): **Inter** — weights 300, 400, 500, 600

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl md:text-2xl uppercase tracking-[0.15em]`
- Body: `font-inter text-sm md:text-base font-light`
- Label/UI: `font-inter text-xs uppercase tracking-[0.12em]`
- Price: `font-inter text-base font-medium`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8 lg:px-12`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-stone-light` (1px)
- Card borders: `border border-stone-light/50`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for buttons

## Shadows
- Card hover: `shadow-md shadow-espresso/5`
- Drawer/modal: `shadow-2xl shadow-espresso/20`

## Buttons
- Primary CTA: `bg-gold text-espresso font-inter text-xs uppercase tracking-[0.15em] px-8 py-3 hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold font-inter text-xs uppercase tracking-[0.15em] px-8 py-3 hover:bg-gold hover:text-espresso transition-colors`
- Ghost/text: `text-stone font-inter text-xs uppercase tracking-[0.12em] hover:text-espresso transition-colors`

## Animations
- Transitions: `transition-all duration-300 ease-out`
- Hover image scale: `hover:scale-105 transition-transform duration-500`
- Fade in: subtle opacity transitions

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Warm ivory backgrounds, never cold white
- Thin hairline borders, generous padding
- Large editorial imagery
- Restrained use of gold accent — only for CTAs and key highlights

## Don'ts
- No bright/saturated colors
- No rounded pill buttons (use sharp or very slightly rounded)
- No heavy drop shadows
- No generic sans-serif headings
- No cluttered layouts
- No cold grays or blues
