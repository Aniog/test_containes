# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry flattery.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette

| Token | Hex | Tailwind Class | Usage |
|---|---|---|---|
| Ivory (bg) | #FAF7F2 | `bg-ivory` | Page background |
| Parchment | #F2EDE4 | `bg-parchment` | Card/section backgrounds |
| Linen | #E8E0D0 | `border-linen` | Hairline dividers, borders |
| Gold | #C9A96E | `text-gold`, `bg-gold` | Primary accent, CTAs, highlights |
| Gold Dark | #A8854A | `text-gold-dark` | Hover states on gold |
| Gold Light | #E8D5B0 | `bg-gold-light` | Subtle gold tints |
| Espresso | #1C1917 | `text-espresso` | Primary text, headings |
| Umber | #5C4A32 | `text-umber` | Secondary text, captions |
| Stone | #8B7B6B | `text-stone-warm` | Muted/tertiary text |
| White | #FFFFFF | `bg-white` | Clean surfaces |

## Typography

### Fonts
- **Headings / Product Names**: Cormorant Garamond (serif) — loaded via Google Fonts
- **Body / UI**: Inter (sans-serif) — loaded via Google Fonts

### Scale
- Hero headline: `font-cormorant text-5xl md:text-7xl font-light tracking-wide`
- Section title: `font-cormorant text-3xl md:text-4xl font-light`
- Product name: `font-cormorant text-xl uppercase tracking-widest`
- Price: `font-inter text-lg font-medium`
- Body: `font-inter text-sm leading-relaxed`
- Caption/label: `font-inter text-xs uppercase tracking-widest`

### Rules
- Product names always UPPERCASE with `tracking-widest`
- Headings always use Cormorant Garamond, `font-light` or `font-normal`
- Never bold serif headings — elegance comes from weight contrast
- Body text in Inter, `text-espresso` or `text-umber`

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Grid gaps: `gap-6 md:gap-8`
- Hairline dividers: `border-t border-linen`

## Components

### Buttons
- **Primary (CTA)**: `bg-gold text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-gold-dark transition-colors`
- **Outlined**: `border border-espresso text-espresso px-8 py-3 text-xs uppercase tracking-widest hover:bg-espresso hover:text-ivory transition-colors`
- **Ghost**: `text-espresso text-xs uppercase tracking-widest underline-offset-4 hover:underline`
- No border-radius on primary buttons (sharp = premium). Use `rounded-none`.

### Cards
- Product card: white bg, no border, soft shadow on hover `hover:shadow-lg transition-shadow`
- Image aspect ratio: `aspect-[3/4]` for product images
- Hover: second image crossfade + "Add to Cart" overlay

### Dividers
- `<hr className="border-t border-linen" />`
- Section separators: thin `1px` lines in `#E8E0D0`

### Badges
- Material badge: `bg-gold-light text-umber text-xs px-2 py-0.5 uppercase tracking-wider`

## Animations
- All transitions: `transition-all duration-300 ease-in-out`
- Image hover scale: `hover:scale-105`
- Nav scroll: opacity + background transition
- Cart drawer: slide-in from right

## Do's
- Use warm ivory backgrounds, never pure white for full pages
- Keep gold accent restrained — only for CTAs and key highlights
- Large editorial imagery with generous padding
- Thin hairline borders, never thick borders
- Subtle drop shadows, never harsh box shadows

## Don'ts
- No rounded buttons (use `rounded-none` for premium feel)
- No bright/saturated colors
- No generic blue links
- No heavy font weights on serif headings
- No tight spacing — always breathe
