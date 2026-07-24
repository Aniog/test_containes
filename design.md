# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Inspired by high-end jewelry editorial photography — deep neutral backgrounds, warm gold accents, generous whitespace.

## Color Palette

### Base
- `velmora-obsidian`: `#1A1714` — primary dark background, nav solid state
- `velmora-charcoal`: `#2C2825` — secondary dark surface
- `velmora-stone`: `#3D3830` — muted dark surface

### Warm Neutrals
- `velmora-linen`: `#F5F0E8` — primary light background, page base
- `velmora-cream`: `#FAF7F2` — card backgrounds, hero overlay
- `velmora-sand`: `#E8DFD0` — dividers, borders, subtle fills

### Gold Accents
- `velmora-gold`: `#C9A96E` — primary accent, CTA buttons, highlights
- `velmora-gold-light`: `#DFC08A` — hover states, lighter gold
- `velmora-gold-muted`: `#A8895A` — darker gold, pressed states

### Text
- `velmora-text`: `#1A1714` — primary body text on light backgrounds
- `velmora-text-muted`: `#6B6259` — secondary text, captions
- `velmora-text-light`: `#9C9189` — placeholder, disabled

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant Garamond 300)
- Section H2: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant Garamond 300)
- Product Name: `text-xl md:text-2xl font-medium tracking-[0.15em] uppercase` (Cormorant Garamond 500)
- Card Title: `text-base font-medium tracking-[0.12em] uppercase`

### Body — Manrope (sans-serif)
- Body: `text-sm font-normal leading-relaxed` (Manrope 400)
- UI Labels: `text-xs font-medium tracking-widest uppercase` (Manrope 500)
- Price: `text-base font-medium` (Manrope 500)
- Nav Links: `text-xs font-medium tracking-[0.15em] uppercase` (Manrope 500)

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Hairline dividers: `border-velmora-sand border-t`

## Components

### Buttons
- Primary (CTA): `bg-velmora-gold text-velmora-obsidian px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold-light transition-colors duration-300`
- Outlined: `border border-velmora-gold text-velmora-gold px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-velmora-gold hover:text-velmora-obsidian transition-all duration-300`
- Ghost: `text-velmora-text-muted text-xs tracking-widest uppercase underline-offset-4 hover:underline`

### Cards
- Product card: `bg-velmora-cream overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`

### Dividers
- `border-t border-velmora-sand`
- `border-t border-velmora-gold/20`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`
- Cart drawer: slide from right, `translate-x-full` → `translate-x-0`

## Do's
- Use Cormorant Garamond for ALL headings and product names
- Use Manrope for ALL body copy, labels, nav, prices
- Product names always UPPERCASE with wide letter-spacing
- Generous whitespace — never feel cramped
- Warm gold (#C9A96E) as the single accent color
- Dark obsidian (#1A1714) for nav, footer, hero overlays
- Linen (#F5F0E8) as the page background

## Don'ts
- No bright whites (#FFFFFF) — use cream/linen instead
- No blue links or generic e-commerce styling
- No tight spacing or cluttered layouts
- No more than 2 accent colors on any single view
- No rounded corners on primary buttons (sharp = premium)
- No drop shadows heavier than `shadow-md`
