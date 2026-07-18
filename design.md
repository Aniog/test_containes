# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry flattery.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Cream (bg) | #FAF8F5 | `bg-cream` | Page background |
| Parchment | #F2EDE4 | `bg-parchment` | Section alternates, cards |
| Champagne | #E8D5B0 | `bg-champagne` | Subtle accents, borders |
| Gold | #C9A96E | `text-gold` / `bg-gold` | Primary accent, CTAs, highlights |
| Gold Dark | #A8854A | `text-gold-dark` | Hover states on gold |
| Ink | #1C1410 | `text-ink` | Primary text, headings |
| Taupe | #6B5E52 | `text-taupe` | Secondary text, captions |
| Stone | #9E9189 | `text-stone-warm` | Muted text, placeholders |
| Hairline | #E2D9CC | `border-hairline` | Dividers, borders |
| White | #FFFFFF | `bg-white` | Cards, nav solid |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Manrope (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `text-5xl md:text-7xl font-light tracking-wide` (Cormorant)
- Section title: `text-3xl md:text-4xl font-light tracking-wide` (Cormorant)
- Product name: `text-xl font-normal tracking-[0.15em] uppercase` (Cormorant)
- Body: `text-sm md:text-base font-normal leading-relaxed` (Manrope)
- Caption / label: `text-xs tracking-widest uppercase` (Manrope)
- Price: `text-lg font-medium` (Manrope)

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline dividers: `border-t border-hairline`
- Card borders: `border border-hairline`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Buttons
- Primary (solid): `bg-ink text-cream px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-ink transition-colors duration-300`
- Secondary (outlined): `border border-ink text-ink px-8 py-3 text-xs tracking-widest uppercase hover:bg-ink hover:text-cream transition-colors duration-300`
- Gold accent: `bg-gold text-ink px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300`

## Shadows
- Card hover: `shadow-md shadow-ink/5`
- Nav solid: `shadow-sm shadow-ink/10`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE + wide letter-spacing for product names and labels
- Generous whitespace between sections
- Hairline borders (1px, warm beige)
- Warm gold (#C9A96E) as the single accent color
- Soft, warm image treatments

## Don'ts
- No bright/saturated colors
- No rounded corners on editorial images
- No generic blue links
- No tight spacing
- No bold/heavy weights on headings (use light/regular)
- No cold grays — always warm neutrals
