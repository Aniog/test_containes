# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `ivory` | `#FAF8F4` | Page background |
| `ivory-dark` | `#F2EDE5` | Card / section alt bg |
| `charcoal` | `#1A1714` | Primary text, nav |
| `charcoal-mid` | `#3D3530` | Secondary headings |
| `taupe` | `#7A6E65` | Body text, captions |
| `taupe-light` | `#A89E95` | Placeholder, muted |
| `gold` | `#C4973A` | Accent — CTAs, highlights |
| `gold-light` | `#D4AA55` | Hover state for gold |
| `gold-pale` | `#F0E4C8` | Subtle gold tint bg |
| `border` | `#E5DDD4` | Hairline dividers |
| `dark-bg` | `#1C1714` | Dark sections (newsletter, footer) |
| `dark-mid` | `#2A2320` | Dark section cards |

## Typography

### Fonts
- **Serif (headings, product names):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI):** Inter — weights 300, 400, 500, 600

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section heading: `text-3xl md:text-4xl font-cormorant font-light`
- Product name: `text-xl font-cormorant font-medium uppercase tracking-widest`
- Body: `text-sm font-inter font-normal text-taupe`
- Caption: `text-xs font-inter tracking-wider uppercase text-taupe-light`
- Nav links: `text-xs font-inter font-medium uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline: `border border-border` (1px, `#E5DDD4`)
- Divider: `<hr class="border-t border-border" />`

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer: `shadow-2xl shadow-charcoal/20`

## Buttons
- **Primary (gold solid):** `bg-gold text-ivory hover:bg-gold-light transition-colors px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium`
- **Outlined:** `border border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory transition-colors px-8 py-3 text-xs tracking-widest uppercase font-inter font-medium`
- **Ghost:** `text-charcoal hover:text-gold transition-colors text-xs tracking-widest uppercase`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Product names always UPPERCASE with wide letter-spacing
- Serif for all editorial/emotional copy
- Sans-serif for prices, labels, UI elements
- Gold accent used sparingly — CTAs and key highlights only

## Don'ts
- No bright/saturated colors
- No rounded corners on buttons (sharp or very subtle)
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No dark text on dark backgrounds
