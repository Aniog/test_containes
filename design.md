# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Primary Colors
- **Obsidian** `#1A1714` — primary background, deep warm black
- **Ivory Cream** `#FAF7F2` — light background, page base
- **Warm White** `#FFFDF9` — card backgrounds, surfaces

### Accent Colors
- **Gold Dust** `#C9A96E` — primary accent, CTAs, highlights (warm 18K gold tone)
- **Gold Light** `#E8D5A3` — hover states, subtle gold tints
- **Gold Deep** `#A07840` — pressed states, dark gold

### Text Colors
- **Ink** `#1A1714` — primary text on light backgrounds
- **Muted** `#6B6560` — secondary text, captions
- **Whisper** `#9E9690` — placeholder, disabled text
- **On-Dark** `#FAF7F2` — text on dark/obsidian backgrounds

### UI Colors
- **Divider** `#E8E2D9` — hairline borders, dividers
- **Surface** `#F5F0E8` — subtle tinted surfaces

## Typography

### Fonts
- **Serif**: Cormorant Garamond — headings, product names, editorial text
- **Sans**: Manrope — body, UI, labels, navigation

### Scale
- Display: `font-cormorant text-6xl lg:text-8xl font-light tracking-tight`
- H1: `font-cormorant text-4xl lg:text-5xl font-light`
- H2: `font-cormorant text-3xl lg:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-widest font-medium`
- Body: `font-manrope text-sm leading-relaxed`
- Caption: `font-manrope text-xs tracking-wide uppercase`
- Label: `font-manrope text-xs font-medium`

## Spacing
- Section padding: `py-20 lg:py-28`
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card gap: `gap-6 lg:gap-8`

## Components

### Buttons
- **Primary**: `bg-gold-dust text-obsidian font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-deep transition-colors duration-300`
- **Outlined**: `border border-gold-dust text-gold-dust font-manrope text-xs tracking-widest uppercase px-8 py-4 hover:bg-gold-dust hover:text-obsidian transition-all duration-300`
- **Ghost**: `text-ink font-manrope text-xs tracking-widest uppercase hover:text-gold-dust transition-colors duration-300`

### Cards
- Product card: `bg-warm-white overflow-hidden group cursor-pointer`
- Soft shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`

### Dividers
- Hairline: `border-t border-divider`
- Accent: `border-t border-gold-dust/30`

## Do's
- Use generous whitespace — let the jewelry breathe
- Serif for all editorial/product text
- Gold accent sparingly — it should feel precious
- Uppercase + wide tracking for product names and labels
- Subtle hover transitions (300ms ease)
- Large imagery, minimal text clutter

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp = premium)
- No generic e-commerce patterns (no "BUY NOW" in red)
- No crowded layouts
