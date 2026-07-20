# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Think: candlelit gold, soft linen, editorial silence.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `velmora-obsidian` | #1A1714 | Primary background, nav solid, footer |
| `velmora-charcoal` | #2C2825 | Secondary dark surfaces |
| `velmora-cream` | #FAF7F2 | Page background, light surfaces |
| `velmora-linen` | #F0EBE3 | Cards, section backgrounds |
| `velmora-gold` | #C9A96E | Primary accent — CTAs, highlights, borders |
| `velmora-gold-light` | #E8D5B0 | Hover states, subtle gold tints |
| `velmora-gold-dark` | #A8854A | Active/pressed gold states |
| `velmora-muted` | #8C7B6B | Body text on light, captions |
| `velmora-stone` | #D4C9BC | Dividers, borders, hairlines |
| `velmora-white` | #FFFFFF | Text on dark backgrounds |

## Typography

### Fonts
- **Serif (headings, product names, editorial):** Cormorant Garamond — weights 300, 400, 500, 600
- **Sans-serif (body, UI, labels):** Inter — weights 300, 400, 500, 600

### Scale
- Hero headline: `text-6xl md:text-8xl font-cormorant font-light tracking-tight`
- Section heading: `text-4xl md:text-5xl font-cormorant font-light`
- Product name: `text-xl font-cormorant font-medium uppercase tracking-widest`
- Body: `text-sm font-inter font-normal leading-relaxed`
- Label/UI: `text-xs font-inter font-medium uppercase tracking-widest`
- Price: `text-lg font-inter font-light`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-6 md:px-12`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-velmora-stone` (1px)
- Card border: `border border-velmora-stone/50`
- Accent border: `border-velmora-gold`

## Shadows
- Card hover: `shadow-lg shadow-velmora-obsidian/10`
- Drawer: `shadow-2xl shadow-velmora-obsidian/30`

## Buttons
- **Primary (CTA):** `bg-velmora-gold text-velmora-obsidian hover:bg-velmora-gold-dark` — uppercase, tracked, no border-radius or very slight
- **Outlined:** `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-obsidian`
- **Ghost/dark:** `bg-velmora-obsidian text-velmora-white hover:bg-velmora-charcoal`
- Border radius: `rounded-none` (sharp, editorial) or `rounded-sm` for pill variants

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `scale-105`
- Overlay fade: `opacity-0 group-hover:opacity-100 transition-opacity duration-300`

## Do's
- Use generous whitespace — let the jewelry breathe
- Serif for all product names, headings, editorial copy
- Gold accent sparingly — it should feel precious, not garish
- Thin hairline borders, not thick chunky ones
- Uppercase + wide tracking for labels and product names

## Don'ts
- No bright/neon colors
- No rounded pill buttons for primary CTAs (keep sharp/editorial)
- No dense layouts — avoid cramming content
- No generic stock-photo vibes — warm, editorial, intimate
- No blue links — use gold or obsidian
