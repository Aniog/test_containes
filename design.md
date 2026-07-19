# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud sale vibes, no generic e-commerce clutter.

## Color Palette

Base: deep, refined warm charcoal.
- `--background`: #0C0B0A (near-black, warm)
- `--surface`: #181615 (elevated cards/panels)
- `--surface-2`: #23201E (subtle hover/accents)
- `--foreground`: #F6F2ED (warm off-white)
- `--muted`: #B0A69B (warm taupe)
- `--hairline`: rgba(246, 242, 237, 0.12)

Accent: warm terracotta/copper.
- `--accent`: #B76E4A (warm copper)
- `--accent-hover`: #C9815A
- `--accent-foreground`: #FFFFFF

Metallic hint for luxury:
- `--gold`: #C9A86C

## Typography

Headings: Cormorant Garamond (serif), 300–700.
- Hero headline: 3xl–6xl, font-light, tracking-tight
- Section titles: 2xl–4xl, font-normal, tracking-wide
- Product names: uppercase, tracking-[0.2em], text-sm

Body/UI: Inter (sans-serif), 300–600.
- Body: text-sm–base, leading-relaxed
- Buttons: uppercase, tracking-widest, text-xs

## Spacing
- Section vertical padding: py-16 md:py-24
- Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Grid gaps: gap-4 md:gap-8
- Card radius: none (sharp editorial) or very subtle rounded-sm

## Components

Buttons:
- Primary: solid accent bg, white text, no radius, uppercase tracking-widest, px-8 py-3, hover:bg-accent-hover
- Secondary/outline: transparent bg, 1px hairline border, foreground text, hover:bg-surface-2

Cards:
- No heavy shadow, use subtle border or none
- Image hover: scale 1.03, transition 500ms ease-out
- Quick-add: absolute bottom-3 left-3 right-3, appears on hover

Dividers:
- 1px hairline color, full width

## Imagery
Warm gold jewelry on dark or neutral backgrounds. Editorial close-ups. Use strk-img tagging with rich contextual queries.
