# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury. Warm, editorial, premium-but-accessible. Think Mejuri meets Net-a-Porter.
NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token        | Hex       | Usage                                      | Tailwind class         |
|--------------|-----------|--------------------------------------------|------------------------|
| cream        | #FAF7F2   | Page background                            | `bg-cream`             |
| parchment    | #F2EDE4   | Alternate section backgrounds              | `bg-parchment`         |
| espresso     | #1C1814   | Primary text, nav background (solid)       | `text-espresso`        |
| charcoal     | #2E2A26   | Secondary text, headings                   | `text-charcoal`        |
| stone        | #7A7068   | Muted / helper text, captions              | `text-stone`           |
| gold         | #B8924A   | Primary accent — CTAs, borders, icons      | `text-gold bg-gold`    |
| gold-light   | #D4AA6A   | Hover states, lighter accents              | `text-gold-light`      |
| gold-pale    | #EDD9A3   | Very light tint, shimmer highlights        | `text-gold-pale`       |
| ivory        | #FFFDF9   | Card backgrounds, input fields             | `bg-ivory`             |
| border       | #E8E0D4   | Hairline dividers, card borders            | `border-border`        |

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide text-espresso`
- Section titles: `font-serif text-3xl md:text-4xl font-light text-espresso`
- Product names: `font-serif text-xl tracking-widest2 uppercase text-espresso`
- Italic accent: `font-serif italic font-light text-stone`

### Body — Inter (sans-serif)
- Body text: `font-sans text-sm text-charcoal leading-relaxed`
- UI labels: `font-sans text-xs tracking-widest uppercase text-stone`
- Prices: `font-sans text-base font-medium text-espresso`
- Captions: `font-sans text-xs text-stone`

## Spacing
- Section vertical padding: `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Card gap: `gap-6 md:gap-8`
- Generous whitespace — never cramped

## Borders & Dividers
- Hairline: `border border-border` (1px, #E8E0D4)
- Card border: `border border-border rounded-none` (no border-radius on product cards — editorial)
- Buttons: no border-radius or very slight `rounded-sm`

## Buttons
- Primary (solid): `bg-espresso text-cream px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-gold transition-colors`
- Secondary (outlined): `border border-espresso text-espresso px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-espresso hover:text-cream transition-colors`
- Gold accent: `bg-gold text-ivory px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-gold-light transition-colors`

## Imagery
- Full-bleed hero: warm-lit, editorial, model wearing jewelry
- Product cards: clean neutral/dark backgrounds, jewelry centered
- UGC: vertical 9:16 format, warm tones
- Category tiles: lifestyle shots, jewelry in context

## Animations
- Hover transitions: `transition-all duration-300 ease-luxury`
- Image zoom on hover: scale(1.05) over 0.6s
- Cart drawer: slide in from right
- Fade-in-up on scroll sections

## Do's
- Use generous whitespace
- Serif for all product names and headings
- Uppercase + wide letter-spacing for labels and product names
- Thin hairline dividers between sections
- Warm gold as the ONLY accent color
- Keep layouts clean and editorial

## Don'ts
- No rounded corners on product cards (editorial, not bubbly)
- No bright colors other than gold
- No heavy drop shadows (use subtle `shadow-sm` at most)
- No generic e-commerce patterns (no rainbow badges, no "SALE" banners in red)
- No text that blends into background — always check contrast
