# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount, NOT generic e-commerce.

## Color Palette
| Token       | Hex       | Usage                                  |
|-------------|-----------|----------------------------------------|
| velvet      | #1A1714   | Primary text, nav bg (scrolled), hero  |
| obsidian    | #2C2825   | Dark card surfaces, footer             |
| mink        | #3D3733   | Borders, dividers (heavier)            |
| stone       | #7A736C   | Muted body text, captions              |
| parchment   | #F5F0E8   | Page background                        |
| cream       | #FAF7F2   | Card / section backgrounds             |
| champagne   | #C9A96E   | Primary accent — CTAs, highlights      |
| gold        | #B8924A   | Hover state for champagne elements     |
| blush       | #E8D5B7   | Hairline dividers, soft highlights     |
| ivory       | #FFFDF9   | Pure light surface, input backgrounds  |

## Typography
- **Headings / Product names**: Cormorant Garamond — elegant, editorial serif
  - Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide`
  - Section titles: `font-serif text-3xl md:text-4xl font-light`
  - Product names: `font-serif uppercase tracking-widest2 text-lg font-medium`
- **Body / UI**: Manrope — clean, modern sans-serif
  - Body: `font-sans text-sm text-stone`
  - Nav links: `font-sans text-xs uppercase tracking-widest font-medium`
  - Prices: `font-sans text-base font-semibold text-velvet`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Container: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `p-6` internal, `gap-6 md:gap-8` in grids

## Borders & Dividers
- Hairline: `border-blush` (1px solid #E8D5B7)
- Card borders: none — use shadow or background contrast instead
- Subtle shadow: `shadow-sm` with warm tint

## Buttons
- **Primary (CTA)**: `bg-champagne text-velvet hover:bg-gold px-8 py-3 text-xs uppercase tracking-widest font-semibold transition-colors duration-300`
- **Outlined**: `border border-champagne text-champagne hover:bg-champagne hover:text-velvet px-8 py-3 text-xs uppercase tracking-widest`
- **Ghost/text**: `text-champagne hover:text-gold underline-offset-4 hover:underline`

## Hover Transitions
- Images: `transition-transform duration-500 group-hover:scale-105`
- Overlays: `transition-opacity duration-300`
- All transitions: `duration-300` or `duration-400` — never instant, never slow

## Do's
- Use Cormorant Garamond for all headings and product names
- Keep product names UPPERCASE with wide letter-spacing
- Use champagne (#C9A96E) as the single accent color
- Maintain generous whitespace — resist the urge to fill space
- Use thin hairline dividers (blush color) between sections
- Warm, editorial photography feel in all imagery

## Don'ts
- No bright/saturated colors (no red, blue, green accents)
- No rounded-full buttons (use rounded-none or rounded-sm for premium feel)
- No heavy drop shadows
- No generic sans-serif headings
- No tight letter-spacing on serif headings
