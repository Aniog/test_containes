# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `warm-black` | `#1A1714` | Primary background, nav solid, footer |
| `deep-brown` | `#2A2520` | Card backgrounds, secondary surfaces |
| `warm-charcoal` | `#3D3630` | Borders, dividers, subtle elements |
| `muted-gold` | `#C4A868` | Primary accent, CTAs, highlights |
| `bright-gold` | `#D4BA7A` | Hover states, emphasis |
| `cream` | `#F5F0E8` | Light backgrounds, cards on light sections |
| `ivory` | `#FAF7F2` | Page background (light sections) |
| `warm-white` | `#FFFDF9` | Text on dark backgrounds |
| `soft-white` | `#F0EBE3` | Muted text on dark, secondary text |
| `warm-gray` | `#8A8279` | Body text on light, captions |

## Typography

- **Headings / Product Names**: `Cormorant Garamond`, serif. Uppercase with wide letter-spacing for product names and section titles.
- **Body / UI**: `Inter`, sans-serif. Clean, legible at all sizes.

### Scale
- Hero headline: `text-5xl md:text-7xl`, font-light, tracking-wide
- Section titles: `text-3xl md:text-4xl`, font-light, uppercase, tracking-widest
- Product names: `text-lg md:text-xl`, font-medium, uppercase, tracking-[0.15em]
- Body: `text-sm md:text-base`, font-light
- Captions/labels: `text-xs`, uppercase, tracking-widest

## Spacing & Layout
- Generous whitespace. Sections separated by `py-20 md:py-32`.
- Max content width: `max-w-7xl` (1280px), centered.
- Hairline dividers: `border-t border-warm-charcoal/30` or `border-muted-gold/20`.

## Buttons
- Primary: `bg-muted-gold text-warm-black`, hover `bg-bright-gold`. Rounded-none or slight rounded. Uppercase, tracking-widest, text-xs or text-sm.
- Secondary: `border border-muted-gold text-muted-gold`, hover `bg-muted-gold text-warm-black`.
- Transitions: `transition-all duration-300`.

## Cards
- Product cards: minimal, generous padding. Image with subtle hover scale. No heavy shadows.
- Hover: second image fade-in, subtle scale `hover:scale-[1.02]`.

## Images
- Editorial, warm-lit. Gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` system for stock images.
- Aspect ratios: product cards 3x4, hero 16x9, category tiles 4x5, UGC 9x16.

## Animations
- Subtle, refined. `transition-all duration-300` or `duration-500`.
- No bouncy or playful animations.
- Fade-ins on scroll (CSS only, no heavy JS).

## Do's
- Use serif for all headings and product names
- Keep generous whitespace
- Use muted gold sparingly as accent
- Ensure strong contrast (warm-white on warm-black, warm-black on ivory)

## Don'ts
- Don't use bright/saturated colors
- Don't use rounded/bubbly UI elements
- Don't crowd sections with too much content
- Don't use generic e-commerce patterns (badges, countdown timers, aggressive CTAs)
