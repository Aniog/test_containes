# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- **Charcoal** (`charcoal`): `#1C1917` — Primary dark background, text
- **Warm Cream** (`cream`): `#FAF7F2` — Light background, cards
- **Ivory** (`ivory`): `#F5F0E8` — Alternate light background
- **Gold Accent** (`gold`): `#B8860B` — CTA buttons, accent elements, hover states
- **Gold Light** (`gold-light`): `#D4A843` — Hover gold, highlights
- **Gold Muted** (`gold-muted`): `#C9A96E` — Subtle gold text, icons

### Neutral Tones
- **Stone 900**: `#1C1917` — Primary text on light
- **Stone 700**: `#44403C` — Body text
- **Stone 500**: `#78716C` — Muted/secondary text
- **Stone 300**: `#D6D3D1` — Borders, dividers
- **Stone 100**: `#F5F5F4` — Subtle backgrounds

### Semantic
- **Star Rating**: `#D4A843` (gold-light)
- **Success**: `#166534`
- **Error**: `#991B1B`

## Typography

### Headings — Serif (Cormorant Garamond)
- H1: `text-4xl md:text-6xl font-light tracking-wide`
- H2: `text-3xl md:text-5xl font-light tracking-wide`
- H3: `text-xl md:text-2xl font-medium tracking-wider`
- Product Names: `font-serif uppercase tracking-[0.2em]`

### Body — Sans-serif (Inter)
- Body: `text-base font-normal leading-relaxed`
- Small: `text-sm`
- Caption: `text-xs uppercase tracking-widest`

### Letter Spacing
- Wide: `tracking-wide` (0.025em)
- Wider: `tracking-wider` (0.05em)
- Widest: `tracking-widest` (0.1em)
- Product Name: `tracking-[0.2em]` (0.2em)

## Spacing
- Section padding: `py-16 md:py-24`
- Container max: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-stone-300/40` or `divide-y divide-stone-300/40`
- Card border: `border border-stone-200`
- Subtle: `border-b border-stone-300/30`

## Shadows
- Card hover: `shadow-lg`
- Dropdown: `shadow-xl`
- Subtle: `shadow-sm`

## Transitions
- Default: `transition-all duration-300 ease-out`
- Fast: `transition-colors duration-200`
- Slow: `transition-all duration-500 ease-out`

## Buttons
### Primary (Gold CTA)
- `bg-gold text-white hover:bg-gold-light`
- `px-8 py-3 text-sm uppercase tracking-widest font-medium`

### Secondary (Outlined)
- `border border-gold text-gold hover:bg-gold hover:text-white`
- `px-8 py-3 text-sm uppercase tracking-widest font-medium`

### Ghost
- `text-stone-700 hover:text-gold`
- No background, just text with hover transition

## Do's
- Use generous whitespace
- Maintain warm, muted tones
- Keep transitions subtle (300ms)
- Use hairline dividers instead of heavy borders
- Product names always UPPERCASE with wide tracking
- Use the serif font for headings and product names
- Use sans-serif for body text and UI elements

## Don'ts
- Don't use bright or saturated colors
- Don't use heavy borders or shadows
- Don't use harsh color transitions
- Don't mix multiple serif fonts
- Don't use tight spacing
- Don't use discount-looking badges or bright sale colors
