# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

### Direction: Deep Obsidian + Warm Gold + Ivory Cream
A sophisticated dark-neutral base with warm gold accents and soft ivory for contrast.

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Obsidian | #1A1714 | `bg-obsidian` | Primary background, nav solid |
| Charcoal | #2C2825 | `bg-charcoal` | Cards, footer |
| Warm Ivory | #F5F0E8 | `bg-ivory` | Page background, light sections |
| Cream | #EDE8DF | `bg-cream` | Section alternates |
| Gold | #C9A96E | `text-gold` | Primary accent, CTAs, borders |
| Gold Light | #E2C98A | `text-gold-light` | Hover states, highlights |
| Gold Dark | #A8854A | `text-gold-dark` | Active states |
| Warm White | #FDFAF5 | `text-warm-white` | Text on dark backgrounds |
| Stone | #8C8278 | `text-stone` | Muted text, captions |
| Blush | #D4B8A0 | `text-blush` | Subtle accents |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — elegant, editorial
- **Body / UI**: Manrope (sans-serif) — clean, modern, readable

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant)
- Section title: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant)
- Product name: `text-xl font-normal uppercase tracking-[0.15em]` (Cormorant)
- Body: `text-sm md:text-base font-normal leading-relaxed` (Manrope)
- Caption/label: `text-xs uppercase tracking-[0.12em]` (Manrope)
- Price: `text-lg font-medium` (Manrope)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-gold/20` or `border-stone/20`
- Card borders: `border border-gold/10`
- Thin accent lines: `h-px bg-gold/30`

## Shadows
- Soft card shadow: `shadow-[0_4px_24px_rgba(0,0,0,0.08)]`
- Hover lift: `shadow-[0_8px_32px_rgba(0,0,0,0.12)]`

## Buttons
- Primary (CTA): `bg-gold text-obsidian hover:bg-gold-light` — solid, premium
- Outlined: `border border-gold text-gold hover:bg-gold hover:text-obsidian`
- Ghost: `text-gold hover:text-gold-light underline-offset-4 hover:underline`
- All buttons: `tracking-[0.08em] uppercase text-xs font-medium transition-all duration-300`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`
- Subtle — never flashy

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers
- Restrained gold accent
- Uppercase product names with wide letter-spacing
- Serif for all headings and product names
- Warm, editorial photography feel

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on images (keep square/slight radius)
- No generic e-commerce look
- No cluttered layouts
- No Comic Sans or system fonts
