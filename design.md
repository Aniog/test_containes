# Velmora Fine Jewelry — Design System

## Brand Identity
Quiet luxury, warm editorial aesthetic. Premium demi-fine gold jewelry brand. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

### Primary Colors
- `cream`: #FAF7F2 — Primary page background (warm cream)
- `charcoal`: #1C1917 — Primary text, headings
- `warm-gray`: #78716C — Secondary text, labels
- `stone`: #E7E5E4 — Borders, dividers, subtle backgrounds
- `stone-dark`: #A8A29E — Muted borders, disabled states

### Accent Colors
- `gold`: #B08D57 — Primary accent, CTA buttons, hover states
- `gold-light`: #C9A96E — Light gold accent
- `gold-dark`: #8B6F43 — Hover state for gold elements
- `gold-muted`: #D4C5A9 — Soft gold for subtle accents

### Background Colors
- `ivory`: #FFFEF9 — Card backgrounds
- `warm-white`: #F5F0E8 — Section alternates
- `deep-brown`: #2C1810 — Dark sections (footer, hero overlays)

### Semantic
- `success`: #2D5A3D — Success states
- `error`: #8B2500 — Error states

## Typography

### Font Families
- **Headings/Display**: Cormorant Garamond (serif) — elegant, light, editorial
- **Body/UI**: Inter (sans-serif) — clean, readable, modern
- **Product Names**: Inter, uppercase, wide letter-spacing (tracking)

### Font Sizes (Tailwind scale)
- Hero headline: text-5xl md:text-7xl
- Section headings: text-3xl md:text-4xl
- Subheadings: text-xl md:text-2xl
- Body: text-base (16px)
- Small/UI: text-sm (14px)
- Caption: text-xs (12px)

### Font Weights
- Headings: font-light (300) for serif headings
- Body: font-normal (400)
- Emphasis: font-medium (500)
- Buttons: font-medium (500)

### Letter Spacing
- Product names: tracking-[0.2em] uppercase
- Navigation links: tracking-wide
- Section subtitles: tracking-widest uppercase text-xs

## Spacing & Layout
- Section padding: py-16 md:py-24
- Container max: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Card padding: p-4 to p-6
- Generous whitespace between sections
- Hairline dividers: border border-stone

## Borders & Shadows
- Cards: rounded-lg or rounded-none (clean edges)
- Subtle shadows: shadow-sm with warm tones
- Hairline dividers: 1px solid #E7E5E4
- No heavy borders or drop shadows

## Buttons
- Primary: bg-gold text-white hover:bg-gold-dark — solid, medium weight, rounded-sm, px-8 py-3
- Secondary: border border-charcoal text-charcoal hover:bg-charcoal hover:text-white — outlined
- Text: text-charcoal underline underline-offset-4 hover:text-gold

## Animations & Transitions
- Hover transitions: transition-all duration-300
- Product cards: subtle scale on hover (hover:scale-[1.02])
- Cart drawer: slide-in from right
- Navbar: smooth background color change on scroll
- Image hover: opacity crossfade for secondary image

## Cards (Product)
- Clean, minimal card with image on cream background
- No heavy borders
- Hover: slight lift + shadow, reveal second image + quick add button
- Product name: uppercase, tracking-wide, serif or sans-serif
- Price: gold accent color

## Layout Principles
- Mobile-first responsive design
- Large editorial imagery
- Thin hairline dividers between sections
- Centered content with max-width container
- Full-bleed hero sections allowed
