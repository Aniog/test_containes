# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry that feels attainable. No loud discount visuals, no generic marketplace clutter.

## Color Palette

### Primary
- **Base / Ink**: `#1a1612` — deep espresso brown for text and rich backgrounds
- **Warm White**: `#faf8f5` — primary surface, cards, page background
- **Champagne**: `#e9dfd1` — secondary surface, hero overlays, subtle sections

### Accents
- **Gold**: `#c9a86c` — metallic accent for CTAs, highlights, star ratings
- **Gold Hover**: `#b08b55` — deeper gold for hover states
- **Soft Rose**: `#d8c8bc` — subtle tint for newsletter block, hover backgrounds

### Neutrals
- **Stone**: `#8a817a` — muted body text, secondary info
- **Line**: `#e0d8ce` — hairline dividers, borders

## Typography

### Fonts
- **Headings / Serif**: `Cormorant Garamond`, serif
- **Body / Sans**: `Manrope`, sans-serif
- **Fallback UI**: `Inter`, system-ui

### Treatment
- Product names and section eyebrows: uppercase, `tracking-[0.18em]`, `font-medium`
- Headings: light to normal weight, generous line-height
- Body: `text-stone-600` on warm-white surfaces for soft contrast

## Spacing & Layout
- Container max-width: `1280px`
- Section vertical padding: `py-20 md:py-28`
- Generous whitespace; avoid crowding
- Hairline dividers: `border-ink/10` or `border-line`

## Components

### Buttons
- **Primary (solid gold)**: `bg-gold text-white hover:bg-gold-hover` uppercase tracking-wide
- **Secondary (outline)**: `border-ink text-ink hover:bg-ink hover:text-warm-white` uppercase tracking-wide
- **Ghost**: text link with underline-on-hover

### Cards
- White or champagne background
- Subtle shadow: `shadow-sm hover:shadow-md`
- Smooth image scale on hover

### Forms
- Inputs: `bg-transparent border-b border-line focus:border-gold` minimal underlined style
- Pills: rounded-full borders for variant selectors

## Effects
- Transitions: `transition-all duration-300 ease-out`
- Image hover: `scale-105` over 500ms
- Nav: glassy solid background on scroll

## Accessibility
- Minimum contrast ratio 4.5:1 for body text
- Large text and UI elements 3:1
- Focus rings: `focus-visible:ring-2 focus-visible:ring-gold`
