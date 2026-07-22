# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Named Colors (defined in tailwind.config.js)
- `ivory`: #FAF7F2 — primary page background, warm off-white
- `cream`: #F2EDE4 — secondary background, card surfaces
- `parchment`: #E8E0D4 — borders, dividers, subtle backgrounds
- `charcoal`: #1C1917 — primary text, headings
- `stone`: #57534E — secondary text, captions
- `mist`: #A8A29E — muted text, placeholders
- `gold`: #B8965A — primary accent, CTAs, highlights
- `gold-light`: #D4AF7A — hover states, lighter gold
- `gold-dark`: #8B6E3A — pressed states, darker gold

### Usage Rules
- Page background: `bg-ivory`
- Card/surface background: `bg-cream`
- Dividers: `border-parchment`
- Primary headings: `text-charcoal`
- Body text: `text-stone`
- Muted/caption text: `text-mist`
- Accent/CTA: `bg-gold text-ivory` or `border-gold text-gold`
- NEVER use white text on ivory/cream backgrounds
- NEVER use charcoal text on charcoal backgrounds

## Typography

### Fonts
- Headings: Cormorant Garamond (serif) — loaded via Google Fonts
- Body/UI: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide text-charcoal`
- Section title: `font-cormorant text-3xl md:text-4xl font-light tracking-wide text-charcoal`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] text-charcoal`
- Nav links: `font-inter text-xs uppercase tracking-[0.12em] text-stone`
- Body text: `font-inter text-sm text-stone leading-relaxed`
- Price: `font-inter text-base font-medium text-charcoal`
- Button text: `font-inter text-xs uppercase tracking-[0.1em]`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between sections

## Borders & Dividers
- Hairline dividers: `border-t border-parchment`
- Card borders: `border border-parchment`
- Rounded corners: `rounded-none` (sharp, editorial) or `rounded-sm` (subtle)

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer/modal: `shadow-2xl shadow-charcoal/10`

## Buttons
- Primary (solid): `bg-gold text-ivory hover:bg-gold-dark px-8 py-3 text-xs uppercase tracking-[0.1em] transition-colors duration-300`
- Secondary (outlined): `border border-gold text-gold hover:bg-gold hover:text-ivory px-8 py-3 text-xs uppercase tracking-[0.1em] transition-colors duration-300`
- Ghost: `text-stone hover:text-charcoal text-xs uppercase tracking-[0.1em] transition-colors duration-200`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`
- Subtle, never flashy

## Do's
- Large editorial imagery
- Generous whitespace
- Thin hairline dividers
- Uppercase product names with wide letter-spacing
- Warm, neutral backgrounds that flatter gold
- Restrained use of gold accent

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded pill buttons (keep sharp/minimal)
- No cluttered layouts
- No generic e-commerce blue/red CTAs
