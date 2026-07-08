# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. NOT loud, NOT discount-looking.

## Color Palette
All colors defined as Tailwind custom tokens under `velmora.*`:

| Token                  | Hex       | Usage                                      |
|------------------------|-----------|--------------------------------------------|
| `velmora-black`        | `#1a1614` | Primary text, nav background (solid)       |
| `velmora-charcoal`     | `#2d2926` | Dark section backgrounds, footer           |
| `velmora-brown`        | `#3d3330` | Secondary dark surfaces                    |
| `velmora-stone`        | `#8c7b6e` | Muted/secondary text, captions             |
| `velmora-sand`         | `#c4b09a` | Borders, dividers, subtle accents          |
| `velmora-gold`         | `#c9a96e` | Primary accent — CTAs, highlights, stars   |
| `velmora-gold-light`   | `#e8d5b0` | Hairline dividers, light gold tints        |
| `velmora-blush`        | `#e8d5c4` | Soft background tints, hover states        |
| `velmora-cream`        | `#f5f0e8` | Section backgrounds, card backgrounds      |
| `velmora-ivory`        | `#faf7f2` | Page background (body)                     |

**Do:** Use `velmora-gold` sparingly as a true accent. Pair dark text on light backgrounds.
**Don't:** Use generic grays or blues. Never use white (#fff) as the base — use ivory/cream.

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide`
- Section H2: `font-serif text-3xl md:text-4xl font-light`
- Product names: `font-serif text-xl tracking-widest2 uppercase`
- Subheadings: `font-serif text-lg italic text-velmora-stone`

### Body — Inter (sans-serif)
- Body text: `font-sans text-sm text-velmora-black leading-relaxed`
- UI labels: `font-sans text-xs tracking-widest uppercase text-velmora-stone`
- Prices: `font-sans text-base font-medium text-velmora-black`
- Captions: `font-sans text-xs text-velmora-stone`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace between elements

## Borders & Dividers
- Hairline: `border-t border-velmora-gold-light` (1px, warm gold-light)
- Card border: `border border-velmora-gold-light/50`
- Radius: `rounded-none` for editorial feel; `rounded-sm` for pills/badges

## Buttons
- Primary (solid): `bg-velmora-black text-velmora-ivory px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-velmora-charcoal transition-colors`
- Accent (gold): `bg-velmora-gold text-velmora-black px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-velmora-sand transition-colors`
- Outlined: `border border-velmora-black text-velmora-black px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-velmora-black hover:text-velmora-ivory transition-colors`
- Pill variant selector: `border border-velmora-sand px-4 py-1.5 text-xs tracking-wider rounded-full`

## Shadows
- Card hover: `shadow-md shadow-velmora-sand/30`
- Drawer: `shadow-2xl`
- Subtle: `shadow-sm`

## Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover image: `transition-opacity duration-400`
- Nav: `transition-colors duration-300`

## Images
- Product cards: 3x4 portrait ratio
- Hero: 16x9 or full-bleed
- UGC/Reels: 9x16 vertical
- Category tiles: 3x4

## Do's and Don'ts
- DO use generous whitespace — let the jewelry breathe
- DO use thin hairline dividers between sections
- DO use uppercase + wide letter-spacing for product names and labels
- DON'T use rounded corners on images (editorial = square/sharp)
- DON'T use bright colors or gradients
- DON'T crowd elements — less is more
