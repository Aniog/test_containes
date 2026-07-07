# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF8F5` | Page background, primary surface |
| `ivory` | `#F2EDE6` | Card backgrounds, subtle sections |
| `gold` | `#C9A96E` | Primary accent, CTAs, highlights |
| `gold-light` | `#E8D5B0` | Hover states, borders |
| `gold-dark` | `#A07840` | Active states, deep accents |
| `obsidian` | `#1C1410` | Primary text, nav, headings |
| `taupe` | `#6B5E52` | Body text, secondary text |
| `stone` | `#9E9189` | Muted/placeholder text |
| `border` | `#E8E0D5` | Hairline dividers, card borders |
| `white` | `#FFFFFF` | Cards, overlays |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product name: `font-cormorant text-xl uppercase tracking-widest`

### Body — Inter (sans-serif)
- Body: `font-inter text-sm text-taupe leading-relaxed`
- UI labels: `font-inter text-xs uppercase tracking-widest`
- Price: `font-inter text-lg font-medium text-obsidian`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Buttons
- Primary (solid): `bg-obsidian text-cream hover:bg-gold hover:text-obsidian transition-colors duration-300 px-8 py-3 text-xs uppercase tracking-widest`
- Outline: `border border-obsidian text-obsidian hover:bg-obsidian hover:text-cream transition-colors duration-300 px-8 py-3 text-xs uppercase tracking-widest`
- Gold accent: `bg-gold text-obsidian hover:bg-gold-dark transition-colors duration-300 px-8 py-3 text-xs uppercase tracking-widest`

## Borders & Dividers
- Hairline: `border-border` (1px, warm light gray)
- Card border: `border border-border`
- Divider: `<hr class="border-t border-border" />`

## Shadows
- Card hover: `shadow-md shadow-obsidian/5`
- Drawer: `shadow-2xl shadow-obsidian/20`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom: `group-hover:scale-105 transition-transform duration-700 ease-out`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- UPPERCASE with wide letter-spacing for product names and labels
- Warm, muted tones — never pure black or pure white

## Don'ts
- No bright/saturated colors
- No heavy drop shadows
- No rounded corners on buttons (sharp edges feel more premium)
- No generic stock photo aesthetics
- No cluttered layouts
