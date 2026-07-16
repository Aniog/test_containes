# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Tailwind Name | Usage |
|---|---|---|---|
| Ink (base) | #1C1917 | `ink` | Primary text, nav background (solid) |
| Parchment | #FAF7F2 | `parchment` | Page background, card backgrounds |
| Warm White | #FFFDF9 | `warmwhite` | Section backgrounds, hero overlay |
| Gold | #B8935A | `gold` | Primary accent, CTA buttons, borders |
| Gold Light | #D4AF7A | `gold-light` | Hover states, highlights |
| Gold Muted | #E8D5B0 | `gold-muted` | Subtle dividers, pill borders |
| Stone | #8C7B6B | `stone-warm` | Secondary text, captions |
| Stone Light | #C4B5A5 | `stone-light` | Placeholder text, muted labels |
| Charcoal | #3D3530 | `charcoal` | Body text on light backgrounds |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-cormorant font-light tracking-wide`
- Section title: `text-3xl md:text-4xl font-cormorant font-light tracking-wide`
- Product name: `text-xl font-cormorant uppercase tracking-[0.15em]`
- Body: `text-sm font-inter text-charcoal leading-relaxed`
- Caption / label: `text-xs font-inter uppercase tracking-[0.12em] text-stone-warm`

### Rules
- Product names always UPPERCASE with wide letter-spacing (`tracking-[0.15em]`)
- Section headings in Cormorant Garamond, light weight
- All UI labels (nav links, buttons, filters) in Inter, small, uppercase, tracked

## Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Section vertical padding: `py-16 md:py-24`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-gold-muted` at `border-[0.5px]` or `border`
- Card borders: none by default; use shadow instead
- Pill buttons: `border border-gold rounded-full`

## Shadows
- Card hover: `shadow-md shadow-gold-muted/30`
- Drawer: `shadow-2xl`
- Subtle: `shadow-sm`

## Buttons
- **Primary (CTA)**: `bg-gold text-warmwhite hover:bg-gold-light px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter transition-colors`
- **Outlined**: `border border-gold text-gold hover:bg-gold hover:text-warmwhite px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter transition-colors`
- **Ghost**: `text-charcoal hover:text-gold text-xs uppercase tracking-[0.12em] font-inter transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-300`

## Do's
- Use warm, editorial photography (gold on dark/neutral)
- Generous padding around all content
- Thin gold hairlines as section separators
- Serif for all emotional/brand copy
- Sans-serif for all functional UI

## Don'ts
- No bright whites (#FFFFFF) — use parchment or warm white
- No cool grays — always warm-toned neutrals
- No rounded corners on images (keep them square/rectangular)
- No drop shadows on text
- No more than 2 font families
