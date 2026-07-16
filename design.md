# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| Obsidian | #0f0d0b | `bg-obsidian` | Primary dark background, hero |
| Parchment | #f7f3ed | `bg-parchment` | Light page background |
| Ivory | #faf8f4 | `bg-ivory` | Cards, surfaces |
| Gold | #c9a96e | `text-gold` / `bg-gold` | Primary accent, CTAs, highlights |
| Gold Light | #e2c99a | `text-gold-light` | Hover states, subtle accents |
| Gold Dark | #a07c45 | `text-gold-dark` | Active states |
| Warm Stone | #8a7f72 | `text-stone-warm` | Body text on light bg |
| Warm Stone Light | #b5aca0 | `text-stone-light` | Captions, secondary text |
| Charcoal | #2a2520 | `text-charcoal` | Headings on light bg |
| Divider | #e8e2d9 | `border-divider` | Hairline dividers |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section heading: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-inter text-sm text-stone-warm leading-relaxed`
- Caption: `font-inter text-xs text-stone-light tracking-wide uppercase`
- Price: `font-inter text-base font-medium text-charcoal`
- Nav links: `font-inter text-xs uppercase tracking-[0.12em] text-charcoal`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`
- Generous whitespace between elements

## Borders & Dividers
- Hairline dividers: `border-t border-divider`
- Card borders: `border border-divider`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/buttons

## Shadows
- Card hover: `shadow-md shadow-black/5`
- Drawer: `shadow-2xl shadow-black/20`

## Buttons
- Primary (CTA): `bg-gold text-obsidian px-8 py-3 text-xs uppercase tracking-[0.15em] font-inter font-medium hover:bg-gold-dark transition-colors`
- Outlined: `border border-gold text-gold px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-gold hover:text-obsidian transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-[0.12em] hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-700`
- Fade in: `opacity-0 animate-fadeIn`
- Drawer slide: `translate-x-full → translate-x-0 transition-transform duration-400`

## Do's
- Use Cormorant Garamond for all headings and product names
- UPPERCASE with wide letter-spacing for product names and nav links
- Generous whitespace — let the jewelry breathe
- Warm gold (#c9a96e) as the single accent color
- Dark obsidian backgrounds for hero/editorial sections
- Parchment/ivory for content sections

## Don'ts
- No bright whites (#ffffff) — use ivory/parchment instead
- No blue links or generic e-commerce colors
- No tight spacing or cluttered layouts
- No rounded corners on editorial image containers
- No more than 2 font families
