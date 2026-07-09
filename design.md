# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (page bg) | #FAF7F2 | `bg-ivory` | Page background, light surfaces |
| Charcoal (base text) | #1C1917 | `text-charcoal` | Primary text, headings |
| Warm Mist (secondary bg) | #F0EBE3 | `bg-mist` | Section alternates, cards |
| Gold (accent) | #B8935A | `text-gold` / `bg-gold` | CTAs, accents, borders |
| Gold Light | #D4AF7A | `text-gold-light` | Hover states, subtle accents |
| Stone (secondary text) | #7C7168 | `text-stone-warm` | Body copy, captions |
| Divider | #E2D9CF | `border-divider` | Hairline dividers |
| Dark (footer/hero overlay) | #0F0D0B | `bg-dark` | Footer, hero overlay |

## Typography

### Fonts
- **Headings / Product names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em]`
- Price: `font-inter text-base font-medium`
- Body: `font-inter text-sm text-stone-warm leading-relaxed`
- Nav links: `font-inter text-xs uppercase tracking-[0.12em]`
- Button: `font-inter text-xs uppercase tracking-[0.15em] font-medium`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-divider`
- Card border: `border border-divider`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer: `shadow-2xl`

## Buttons
- Primary (solid): `bg-gold text-ivory px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold-light transition-colors`
- Secondary (outlined): `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gold hover:text-ivory transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Product names always UPPERCASE with wide letter-spacing
- Gold accent used sparingly — CTAs, hover states, star ratings
- Warm ivory/cream backgrounds, never pure white

## Don'ts
- No bright/saturated colors
- No rounded corners on images (keep editorial/square)
- No generic e-commerce blue/green CTAs
- No tight spacing or cluttered layouts
- No bold/heavy serif weights — keep headings light/thin
