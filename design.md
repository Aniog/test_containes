# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `velmora-cream` | `#FAF7F2` | Page background, card backgrounds |
| `velmora-charcoal` | `#1C1917` | Primary text, nav solid bg |
| `velmora-gold` | `#B8956A` | Accent — buttons, links, highlights |
| `velmora-gold-light` | `#D4B896` | Hover states, subtle accents |
| `velmora-gold-dark` | `#8B6D47` | Active/pressed accent |
| `velmora-warm-gray` | `#A8A29E` | Muted text, secondary labels |
| `velmora-border` | `#E7E0D8` | Hairline dividers, card borders |
| `velmora-white` | `#FFFFFF` | Card surfaces, modals |
| `velmora-overlay` | `rgba(28,25,23,0.6)` | Hero overlay, image overlays |

## Typography

- **Headings**: `Cormorant Garamond`, serif. Uppercase with wide letter-spacing for product names and section titles.
  - H1: `text-4xl md:text-5xl lg:text-6xl font-light tracking-wide uppercase`
  - H2: `text-3xl md:text-4xl font-light tracking-wide uppercase`
  - H3: `text-xl md:text-2xl font-medium tracking-wider uppercase`
- **Body**: `Inter`, sans-serif. Clean, readable.
  - Body: `text-sm md:text-base font-normal`
  - Small/label: `text-xs font-medium tracking-wider uppercase`
- **Product names**: Always uppercase, `tracking-[0.15em]`, Cormorant Garamond.

## Spacing & Layout

- Generous whitespace. Sections: `py-16 md:py-24 lg:py-32`.
- Container max-width: `max-w-7xl mx-auto px-4 md:px-6 lg:px-8`.
- Hairline dividers: `border-t border-velmora-border`.
- Card padding: `p-4 md:p-6`.

## Buttons

- **Primary (accent)**: `bg-velmora-gold text-velmora-charcoal hover:bg-velmora-gold-light`, uppercase, tracking-wide, `px-8 py-3 text-xs font-semibold tracking-[0.15em]`.
- **Secondary (outlined)**: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-charcoal`, same sizing.
- Transitions: `transition-all duration-300`.

## Cards & Surfaces

- Product cards: `bg-velmora-white rounded-none shadow-sm hover:shadow-md transition-shadow duration-300`.
- Image aspect ratios: product images 4x5, category tiles 3x4, hero 16x9.
- Hover: second image fade-in, subtle scale on category tiles.

## Animations

- Subtle, refined. `transition-all duration-300` on hovers.
- No bouncy or playful animations.
- Fade-in on scroll (optional, CSS only).

## Do's

- Use warm, neutral backgrounds that flatter gold jewelry.
- Keep typography elegant and restrained.
- Use generous whitespace between sections.
- Ensure strong contrast for accessibility (charcoal on cream, gold on charcoal).

## Don'ts

- No bright or saturated colors.
- No rounded buttons or playful shapes.
- No discount/sale badges or aggressive CTAs.
- No generic e-commerce patterns (no starburst, no loud banners).
