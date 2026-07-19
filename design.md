# Velmora Fine Jewelry — Design System

## Brand Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token          | Value     | Usage                                    |
|----------------|-----------|------------------------------------------|
| cream          | #FAF7F2   | Page background, light surfaces          |
| charcoal       | #1A1A1A   | Primary text, headings                   |
| warm-gray      | #6B6460   | Body text, secondary text                |
| gold           | #B8860B   | Accent color, CTAs, highlights           |
| gold-light     | #D4A843   | Hover states, lighter accent             |
| gold-muted     | #C9A96E   | Subtle gold tones, borders               |
| ivory          | #F5F0E8   | Card backgrounds, alternate sections     |
| deep-brown     | #2C1810   | Dark backgrounds (hero, footer)          |
| blush          | #F2E8E0   | Soft highlight backgrounds               |

## Typography

- **Headings / Product Names**: `Cormorant Garamond`, serif. Weights 300–700.
- **Body / UI**: `Inter`, sans-serif. Weights 300–600.
- Product names: UPPERCASE, letter-spacing `0.15em`.
- Section headings: Cormorant Garamond, weight 300 or 400, large sizes.

### Tailwind Classes
- Heading: `font-serif text-charcoal`
- Body: `font-sans text-warm-gray`
- Product name: `font-serif uppercase tracking-widest`
- CTA button: `bg-gold text-cream hover:bg-gold-light`

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Max content width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: subtle shadow `shadow-sm`, rounded `rounded-sm`
- Hairline dividers: `border-t border-gold-muted/30`

## Buttons
- Primary: `bg-gold text-cream px-8 py-3 text-sm uppercase tracking-widest font-sans font-medium hover:bg-gold-light transition-colors`
- Secondary/Outlined: `border border-gold text-gold px-8 py-3 text-sm uppercase tracking-widest hover:bg-gold hover:text-cream transition-colors`

## Interactions
- Hover transitions: `transition-all duration-300`
- Image hover: subtle scale `hover:scale-105`
- Links: underline on hover, gold color

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers sparingly
- Maintain warm, inviting tone
- Use soft shadows only

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
