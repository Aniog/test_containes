# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. No loud colors, no discount styling, no generic e-commerce feel.

## Color palette
| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-cream` | `#FAF7F2` | Primary page background |
| `velmora-ivory` | `#F5F0E8` | Secondary backgrounds, cards, nav solid fill |
| `velmora-charcoal` | `#1F1C19` | Primary text, footer, dark sections |
| `velmora-warm-gray` | `#6B6560` | Body text, captions |
| `velmora-gold` | `#B8954F` | Primary accent, CTAs, stars, hover highlights |
| `velmora-gold-light` | `#D4B87A` | Gold hover state, subtle accents |
| `velmora-border` | `#E8E0D6` | Hairline dividers, borders |

## Typography
- **Headings / product names:** Cormorant Garamond, serif. Elegant, high contrast.
- **Body / UI:** Inter, sans-serif. Clean and readable.
- Product names: uppercase, `tracking-[0.2em]`, Cormorant Garamond.

## Spacing & layout
- Generous whitespace. Section vertical padding: `py-20` desktop, `py-14` mobile.
- Container max-width: `max-w-7xl` centered.
- Hairline dividers: `border-velmora-border` at 1px.

## Components
- **Buttons:** solid gold background with cream text (`bg-velmora-gold text-velmora-cream`). Hover: `bg-velmora-gold-light`. Outlined variant: `border-velmora-charcoal text-velmora-charcoal`, hover fills charcoal with cream text.
- **Cards:** white/cream background, subtle shadow, rounded corners (`rounded-sm`), image hover reveal.
- **Inputs:** light ivory background, thin border, focus ring in gold.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use stock-image tagging (`data-strk-img`) referencing nearby text IDs.
- Hero: full-bleed editorial image.

## Motion
- Subtle hover transitions: `transition duration-300 ease-out`.
- Fade/slide entrance for sections via simple opacity transitions.
- No jarring animations.

## Do's & Don'ts
- DO use plenty of whitespace.
- DO keep typography elegant and readable.
- DO maintain strong contrast (charcoal on cream, cream on charcoal).
- DON'T use bright saturated colors.
- DON'T use heavy drop shadows or loud borders.
- DON'T use generic placeholder color blocks without images.
