# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Deep warm charcoal base with ivory surfaces and gold accents. NOT loud, NOT discount-looking.

## Color Palette

| Token         | Hex       | Usage                                      |
|---------------|-----------|--------------------------------------------|
| velvet-900    | #1C1814   | Primary text, nav background (solid state) |
| velvet-800    | #3D3025   | Secondary dark surfaces                    |
| velvet-700    | #5E4A33   | Tertiary text on light                     |
| ivory-100     | #FAF7F2   | Page background, card backgrounds          |
| ivory-200     | #F2EBE0   | Subtle section backgrounds                 |
| ivory-300     | #E8DECE   | Hairline borders, dividers                 |
| gold           | #C9A96E   | Primary accent: CTAs, icons, highlights    |
| gold-light    | #E2C98A   | Hover states, shimmer                      |
| gold-dark     | #A07840   | Active states, pressed                     |
| stone-warm    | #8C7B6B   | Muted body text, captions                  |

**Do:** Use velvet-900 text on ivory backgrounds. Use gold for CTAs and accents only.
**Don't:** Use gold as a background for large areas. Don't use light text on ivory.

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide text-velvet-900`
- Section H2: `font-serif text-3xl md:text-4xl font-light text-velvet-900`
- Product name: `font-serif text-xl md:text-2xl font-medium tracking-widest2 uppercase text-velvet-900`
- Quote/editorial: `font-serif text-2xl italic font-light text-velvet-800`

### Body — Manrope (sans-serif)
- Body: `font-sans text-sm md:text-base font-normal text-velvet-700`
- Caption/label: `font-sans text-xs tracking-widest uppercase text-stone-warm`
- Price: `font-sans text-lg font-medium text-velvet-900`
- Nav links: `font-sans text-xs tracking-widest2 uppercase text-velvet-900`

## Spacing
- Section padding: `py-16 md:py-24 px-4 md:px-8 lg:px-16`
- Card padding: `p-4 md:p-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline: `border-t border-ivory-300` (1px, #E8DECE)
- Card border: `border border-ivory-300`
- Radius: `rounded-none` for editorial feel, `rounded-sm` for pills/badges

## Buttons
- Primary CTA: `bg-velvet-900 text-ivory-100 px-8 py-3 text-xs tracking-widest2 uppercase font-sans font-medium hover:bg-velvet-800 transition-colors`
- Gold outline: `border border-gold text-gold px-8 py-3 text-xs tracking-widest2 uppercase hover:bg-gold hover:text-velvet-900 transition-colors`
- Ghost: `text-velvet-900 underline underline-offset-4 text-xs tracking-widest uppercase`

## Shadows
- Card hover: `shadow-md shadow-velvet-900/10`
- Drawer: `shadow-2xl shadow-velvet-900/20`

## Animations
- All transitions: `transition-all duration-300 ease-luxury`
- Image zoom on hover: `scale-[1.04]` over 600ms
- Cart drawer: slide in from right, 350ms ease
- Nav: opacity + transform on scroll

## Images
- Hero: full-bleed, 16:9 or taller, warm-lit gold jewelry on model
- Product cards: 3:4 portrait ratio
- UGC reel: 9:16 vertical
- Category tiles: 4:3 landscape
