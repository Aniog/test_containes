# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on rich neutral backgrounds.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (page bg) | #FAF7F2 | `bg-ivory` | Page background |
| Charcoal (base text) | #1C1917 | `text-charcoal` | Headings, primary text |
| Warm Mink (secondary text) | #78716C | `text-mink` | Body copy, captions |
| Gold (accent) | #B8935A | `text-gold` / `bg-gold` | CTAs, accents, borders |
| Gold Light | #D4AF7A | `text-gold-light` | Hover states, subtle accents |
| Parchment | #EDE8DF | `bg-parchment` | Cards, trust bar, subtle sections |
| Deep Espresso | #0F0D0B | `bg-espresso` | Footer, dark sections |
| White | #FFFFFF | `bg-white` | Clean surfaces |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light tracking-wide`
- Product name: `font-cormorant text-xl uppercase tracking-[0.15em] font-medium`
- Body: `font-inter text-sm text-mink leading-relaxed`
- UI labels: `font-inter text-xs uppercase tracking-widest`

## Spacing
- Section padding: `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`

## Borders & Dividers
- Hairline divider: `border-t border-parchment`
- Card border: `border border-parchment`
- Accent border: `border border-gold`

## Buttons
- Primary (solid): `bg-charcoal text-ivory px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold transition-colors duration-300`
- Secondary (outlined): `border border-charcoal text-charcoal px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-charcoal hover:text-ivory transition-colors duration-300`
- Accent (gold): `bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest font-inter hover:bg-gold-light transition-colors duration-300`

## Shadows
- Card hover: `shadow-md shadow-charcoal/10`
- Drawer: `shadow-2xl`

## Transitions
- Default: `transition-all duration-300 ease-in-out`
- Hover image: `transition-transform duration-500 ease-in-out group-hover:scale-105`

## Do's
- Use generous whitespace between sections
- Large editorial imagery (full-bleed or half-page)
- Thin hairline dividers between sections
- Uppercase + wide letter-spacing for product names and UI labels
- Warm gold tones for all accents

## Don'ts
- No bright/saturated colors
- No rounded-full buttons (use rounded-none or rounded-sm)
- No drop shadows that look heavy or cheap
- No generic blue links
- No tight spacing or cluttered layouts
