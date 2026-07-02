# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry for women 25–45.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Palette
- **Obsidian** `#1A1714` — deep warm-black base, primary text, nav background (solid state)
- **Ivory Cream** `#FAF7F2` — warm off-white page background, cards
- **Warm Parchment** `#F2EDE4` — secondary background, section alternates
- **Gold Accent** `#C9A96E` — primary accent, CTAs, highlights, borders
- **Gold Light** `#E8D5A3` — hover states, subtle fills
- **Muted Taupe** `#8C7B6B` — secondary text, captions, labels
- **Hairline** `#E0D8CE` — dividers, borders, separators

### Tailwind Custom Colors
```js
obsidian: '#1A1714'
cream: '#FAF7F2'
parchment: '#F2EDE4'
gold: '#C9A96E'
goldLight: '#E8D5A3'
taupe: '#8C7B6B'
hairline: '#E0D8CE'
```

## Typography

### Fonts
- **Cormorant Garamond** — headings, product names, editorial text (serif)
- **Manrope** — body, UI, navigation, labels (sans-serif)

### Scale
- Display: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- H1: `font-cormorant text-4xl md:text-5xl font-light`
- H2: `font-cormorant text-3xl md:text-4xl font-light`
- H3: `font-cormorant text-2xl font-light`
- Product Name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-manrope text-sm text-taupe leading-relaxed`
- Label/UI: `font-manrope text-xs uppercase tracking-[0.12em]`
- Price: `font-manrope text-lg font-medium text-obsidian`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between elements

## Components

### Buttons
- **Primary (Accent)**: `bg-gold text-obsidian font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-goldLight transition-colors duration-300`
- **Outlined**: `border border-gold text-gold font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-gold hover:text-obsidian transition-colors duration-300`
- **Ghost/Dark**: `bg-obsidian text-cream font-manrope text-xs uppercase tracking-[0.12em] px-8 py-3.5 hover:bg-taupe transition-colors duration-300`

### Cards
- Background: `bg-cream`
- Shadow: `shadow-sm hover:shadow-md transition-shadow duration-300`
- No harsh borders — use hairline or none

### Dividers
- `border-t border-hairline` — thin hairline dividers

### Transitions
- All hover: `transition-all duration-300 ease-in-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and labels
- Generous whitespace — let the jewelry breathe
- Warm, editorial photography feel
- Subtle gold accents, not overwhelming
- Thin hairline borders and dividers

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on buttons (sharp or very subtle)
- No generic blue links
- No crowded layouts
- No bold/heavy serif weights — keep it light and elegant
