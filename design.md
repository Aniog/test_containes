# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Flatters gold jewelry.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token         | Hex       | Tailwind Class       | Usage                          |
|---------------|-----------|----------------------|--------------------------------|
| ivory         | #FAF7F2   | bg-ivory             | Primary background             |
| charcoal      | #1C1917   | text-charcoal        | Primary text, headings         |
| gold          | #B8965A   | text-gold / bg-gold  | Accent, CTAs, highlights       |
| gold-light    | #D4AF7A   | text-gold-light      | Hover states, subtle accents   |
| gold-dark     | #8C6E3A   | text-gold-dark       | Active states                  |
| taupe         | #E8DDD0   | bg-taupe             | Section backgrounds, dividers  |
| warm-gray     | #8C7B6E   | text-warm-gray       | Body text, captions, labels    |
| warm-gray-lt  | #C4B5A8   | text-warm-gray-lt    | Placeholder, muted text        |
| obsidian      | #0F0D0B   | bg-obsidian          | Dark sections, footer          |
| cream-white   | #FFFDF9   | bg-cream-white       | Cards, elevated surfaces       |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — elegant, editorial
- **Body / UI**: Manrope (sans-serif) — clean, modern, readable

### Scale
- Hero headline: `text-5xl md:text-7xl lg:text-8xl` font-cormorant font-light tracking-wide
- Section heading: `text-3xl md:text-4xl` font-cormorant font-light
- Product name: `text-xl md:text-2xl` font-cormorant uppercase tracking-widest
- Body: `text-sm md:text-base` font-manrope text-warm-gray
- Caption / label: `text-xs` font-manrope uppercase tracking-widest

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-4 md:gap-6`

## Borders & Dividers
- Hairline divider: `border-t border-taupe`
- Card border: `border border-taupe`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Shadows
- Card hover: `shadow-md shadow-charcoal/5`
- Drawer: `shadow-2xl`

## Buttons
- Primary (CTA): `bg-gold text-ivory px-8 py-3 text-xs uppercase tracking-widest font-manrope hover:bg-gold-dark transition-colors`
- Outlined: `border border-charcoal text-charcoal px-8 py-3 text-xs uppercase tracking-widest hover:bg-charcoal hover:text-ivory transition-colors`
- Ghost: `text-charcoal text-xs uppercase tracking-widest hover:text-gold transition-colors`

## Animations
- Hover transitions: `transition-all duration-300 ease-out`
- Image zoom on hover: `group-hover:scale-105 transition-transform duration-500`
- Fade in: `opacity-0 animate-fadeIn`

## Do's
- Use generous whitespace between sections
- Keep product names in UPPERCASE with wide letter-spacing
- Use hairline dividers (1px, taupe) between sections
- Warm, editorial photography — gold on dark/neutral backgrounds
- Restrained use of gold accent — only for CTAs and key highlights

## Don'ts
- No bright/neon colors
- No rounded corners on editorial image containers
- No generic sans-serif for headings
- No cluttered layouts — less is more
- No discount-style badges (e.g. "SALE 50% OFF" in red)
