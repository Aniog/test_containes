# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury. Warm, editorial, premium-but-accessible. Gold jewelry on warm neutral backgrounds. Never loud, never discount-looking.

## Color Palette

| Token | Hex | Tailwind | Usage |
|---|---|---|---|
| Cream (base bg) | #faf8f5 | `bg-cream` | Page background |
| Cream 200 | #f5ede0 | `bg-cream-200` | Section alternates, cards |
| Charcoal (text) | #1c1917 | `text-charcoal` | Primary text, headings |
| Charcoal Light | #2d2926 | `bg-charcoal-light` | Dark sections, footer |
| Charcoal Muted | #7c6e62 | `text-charcoal-muted` | Secondary text, captions |
| Gold (accent) | #b8965a | `text-gold`, `bg-gold` | CTAs, accents, highlights |
| Gold Light | #d4b483 | `text-gold-light` | Hover states, decorative |
| Gold Dark | #9a7a42 | `text-gold-dark` | Pressed states |
| Gold Pale | #f0e6d3 | `bg-gold-pale` | Subtle accent backgrounds |
| Divider | #e8e0d5 | `border-divider` | Hairline borders, separators |

**DO:** Use cream as the default page background. Use charcoal for all primary text. Use gold sparingly as the accent — buttons, underlines, icons.
**DON'T:** Use white (#ffffff) as the page background. Don't use gold for large text blocks. Don't use blue or cool tones anywhere.

## Typography

### Headings — Cormorant Garamond (serif)
- Hero H1: `font-serif text-5xl md:text-7xl font-light tracking-wide text-charcoal`
- Section H2: `font-serif text-3xl md:text-4xl font-light text-charcoal`
- Product Name: `font-serif text-xl tracking-widest uppercase text-charcoal`
- Subheadings: `font-serif text-lg italic text-charcoal-muted`

### Body — Inter (sans-serif)
- Body: `font-sans text-sm text-charcoal-muted leading-relaxed`
- Nav links: `font-sans text-xs tracking-widest uppercase text-charcoal`
- Captions: `font-sans text-xs text-charcoal-muted`
- Price: `font-sans text-base font-medium text-charcoal`

**DO:** Use Cormorant Garamond for all headings and product names. Use Inter for all UI, body copy, labels.
**DON'T:** Mix serif and sans in the same line unless intentional (e.g. serif headline + sans subhead).

## Spacing
- Section padding: `py-16 md:py-24 px-6 md:px-12 lg:px-20`
- Card padding: `p-4 md:p-6`
- Generous whitespace between sections

## Borders & Dividers
- Hairline: `border-t border-divider` (1px, #e8e0d5)
- Card border: `border border-divider`
- No heavy borders or box shadows on cards — use subtle `shadow-sm`

## Buttons
- Primary (solid gold): `bg-gold text-white font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-gold-dark transition-colors duration-300`
- Secondary (outlined): `border border-charcoal text-charcoal font-sans text-xs tracking-widest uppercase px-8 py-3 hover:bg-charcoal hover:text-cream transition-colors duration-300`
- Ghost: `text-gold font-sans text-xs tracking-widest uppercase underline underline-offset-4`

## Animations
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: opacity crossfade between primary/secondary product images
- Nav: transparent → solid on scroll (smooth)
- Cart drawer: slide in from right

## Images
- All product images: warm-lit gold jewelry on dark/neutral backgrounds
- Hero: full-bleed, warm editorial
- UGC: vertical 9:16 ratio, lifestyle/worn shots
- Category tiles: square or 4:3, editorial

## Do's and Don'ts
- DO use generous whitespace
- DO use thin hairline dividers between sections
- DO use uppercase + wide tracking for product names and nav links
- DO use italic serif for subheadings and captions
- DON'T use rounded corners on buttons (sharp or very subtle `rounded-none` or `rounded-sm`)
- DON'T use heavy drop shadows
- DON'T use bright colors or gradients
- DON'T crowd elements — less is more
