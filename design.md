# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial, premium demi-fine jewelry. Refined and restrained — never loud, never discount-looking.

## Color Palette

### Primary
- **Base / Ink**: `#1c1917` (warm near-black) — primary text, nav, footer
- **Paper / Cream**: `#fbfaf9` — primary background
- **Warm Sand**: `#f5f0eb` — section alternates, subtle fills
- **Champagne Gold**: `#c8a473` — accent / metallic highlights
- **Deep Mocha**: `#3e332a` — rich dark accents

### Secondary
- **Muted Taupe**: `#8c8178` — secondary text, captions
- **Soft Linen**: `#ede8e2` — borders, dividers, hover fills
- **Rose Gold Hint**: `#d4b8a3` — subtle warm accents (stars, highlights)

### Semantic
- **Text Primary**: `#1c1917`
- **Text Secondary**: `#6b6159`
- **Text Muted**: `#8c8178`
- **Background**: `#fbfaf9`
- **Surface**: `#ffffff`
- **Accent**: `#c8a473`
- **Accent Hover**: `#b08a5a`
- **Divider**: `#e7e2dc`

## Typography
- **Headings / Product Names**: Cormorant Garamond, serif
  - Product names: uppercase, tracking-[0.22em], font-semibold
  - H1: text-5xl md:text-7xl font-light
  - H2: text-3xl md:text-5xl font-light
  - H3: text-xl md:text-2xl font-normal
- **Body / UI**: Inter, sans-serif
  - Body: text-sm md:text-base leading-relaxed
  - UI labels: text-xs uppercase tracking-[0.14em] font-medium

## Spacing & Layout
- Max container width: 1440px
- Page horizontal padding: px-4 sm:px-6 lg:px-12 xl:px-20
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Grid gaps: gap-4 md:gap-6 lg:gap-8
- Hairline dividers: border-b border-[#e7e2dc]

## Components

### Buttons
- **Primary (solid accent)**: bg-[#1c1917] text-white hover:bg-[#3e332a] rounded-none px-8 py-3 text-xs uppercase tracking-[0.16em] transition-colors duration-300
- **Outline**: border border-[#1c1917] text-[#1c1917] hover:bg-[#1c1917] hover:text-white rounded-none px-8 py-3 text-xs uppercase tracking-[0.16em] transition-all duration-300
- **Ghost**: text-[#1c1917] hover:text-[#c8a473] transition-colors

### Cards
- Product cards: bg-white, no border-radius, subtle hover shadow
- Image aspect ratios: 4:5 for products, 3:4 for editorial
- Hover: reveal secondary image with crossfade, lift slightly

### Inputs
- bg-transparent border-b border-[#1c1917] rounded-none
- focus:border-[#c8a473] focus:outline-none
- placeholder:text-[#8c8178]

## Motion
- Hover transitions: 300ms ease
- Image crossfade: 400ms ease-in-out
- Page elements: subtle fade/slide on scroll (optional)

## Do's
- Use generous whitespace
- Keep typography elegant and spacious
- Use warm neutrals that flatter gold jewelry
- Maintain strong contrast for accessibility

## Don'ts
- No loud discount styling
- No neon or cool neon accents
- No sharp shadows or heavy borders
- No generic e-commerce clutter
