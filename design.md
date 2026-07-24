# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Direction: Deep Obsidian + Warm Champagne Gold
A rich, near-black base that makes gold jewelry glow. Warm champagne/gold accents. Soft ivory for surfaces.

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| obsidian | #1A1714 | `bg-obsidian` | Primary background, nav solid |
| charcoal | #2C2825 | `bg-charcoal` | Secondary dark surfaces |
| ivory | #FAF7F2 | `bg-ivory` | Page background, cards |
| ivory-dark | #F0EBE3 | `bg-ivory-dark` | Subtle section alternates |
| champagne | #C9A96E | `text-champagne` | Primary accent, CTAs, highlights |
| champagne-light | #E8D5B0 | `text-champagne-light` | Hover states, borders |
| champagne-dark | #A07840 | `text-champagne-dark` | Active states |
| warm-gray | #8C8480 | `text-warm-gray` | Body text secondary |
| ink | #2C2825 | `text-ink` | Primary body text on light |

### Do's
- Use `obsidian` for hero, nav, footer backgrounds
- Use `ivory` as the main page background
- Use `champagne` for all CTAs, accents, underlines
- Pair `ink` text on `ivory` backgrounds
- Pair `ivory` text on `obsidian` backgrounds

### Don'ts
- Never use pure black (#000) or pure white (#fff) — too harsh
- Never use blue, purple, or cool-toned accents
- Never use generic gray buttons

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant)
- Section titles: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant)
- Product names: `text-sm md:text-base font-normal tracking-[0.2em] uppercase` (Cormorant)
- Body: `text-sm md:text-base font-normal leading-relaxed` (Inter)
- UI labels: `text-xs tracking-widest uppercase` (Inter)
- Prices: `text-base font-medium` (Inter)

## Spacing
- Section padding: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-champagne/20` or `border-ivory-dark`
- Card borders: `border border-champagne/15`
- Rounded corners: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Buttons
- Primary CTA: `bg-champagne text-obsidian hover:bg-champagne-dark px-8 py-3 text-xs tracking-widest uppercase font-medium transition-all duration-300`
- Outlined: `border border-champagne text-champagne hover:bg-champagne hover:text-obsidian px-8 py-3 text-xs tracking-widest uppercase`
- Ghost: `text-champagne hover:text-champagne-dark underline-offset-4 hover:underline`

## Shadows
- Card hover: `shadow-lg shadow-obsidian/10`
- Drawer: `shadow-2xl shadow-obsidian/30`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`

## Component Patterns
- Product cards: no border radius, thin champagne border on hover, image zoom
- Nav: transparent over hero, transitions to obsidian on scroll
- Section dividers: thin `<hr>` with `border-champagne/20`
- Pill variant selectors: `border border-champagne/30 hover:border-champagne`
