# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `cream`: #FAF7F2 — primary background, warm ivory
- `cream-dark`: #F2EDE4 — secondary background, card surfaces
- `espresso`: #1C1410 — primary text, deep warm charcoal
- `espresso-light`: #3D2E24 — secondary text
- `gold`: #C9A96E — primary accent, CTAs, highlights
- `gold-light`: #E8D5A3 — light gold tint, hover states
- `gold-dark`: #A07840 — dark gold, pressed states
- `stone`: #8C7B6B — muted text, captions, labels
- `stone-light`: #C4B5A5 — hairline dividers, borders
- `charcoal`: #2C2420 — nav background (solid), footer

### Usage
- Page background: `bg-cream`
- Cards: `bg-cream-dark` or `bg-white`
- Primary text: `text-espresso`
- Muted text: `text-stone`
- Accent / CTA: `bg-gold text-cream` or `border-gold text-gold`
- Dividers: `border-stone-light`
- Nav (solid): `bg-charcoal text-cream`
- Footer: `bg-charcoal text-cream`

## Typography

### Fonts
- Serif: Cormorant Garamond (headings, product names, editorial text)
- Sans: Inter (body, UI, labels, prices)

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest`
- Body: `font-inter text-sm text-stone`
- Price: `font-inter text-base font-medium text-espresso`
- Label/UI: `font-inter text-xs uppercase tracking-widest`

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline: `border border-stone-light` (1px)
- Card border: `border border-stone-light/50`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-espresso/5`
- Drawer: `shadow-2xl shadow-espresso/20`

## Buttons
- Primary (solid): `bg-gold text-cream px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold-dark transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold hover:text-cream transition-colors`
- Ghost: `text-espresso text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Thin hairline dividers between sections
- Large editorial imagery with generous whitespace
- Warm gold (#C9A96E) as the single accent color

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial images
- No generic e-commerce blue/green CTAs
- No tight spacing or cramped layouts
- No bold/heavy serif weights (keep it light and elegant)
