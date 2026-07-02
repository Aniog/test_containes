# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm and editorial. Premium demi-fine jewelry for women 25–45. No loud discount cues, no generic marketplace styling. The site should feel like a carefully art-directed boutique.

## Color palette
We commit to a **soft neutral / editorial scheme** with a deep refined base and warm metallic accents that flatter gold jewelry.

| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-bg` | `#F7F4EF` | Primary page background (warm off-white) |
| `velmora-fg` | `#1E1A16` | Primary text, dark base (deep espresso brown) |
| `velmora-muted` | `#7C756D` | Secondary / muted text |
| `velmora-border` | `#E3DDD4` | Hairline dividers, borders |
| `velmora-accent` | `#A66A3F` | Warm bronze accent for CTAs, highlights |
| `velmora-accent-hover` | `#8B5532` | Accent hover state |
| `velmora-gold` | `#C9A86A` | Metallic gold accent for icons, stars, subtle highlights |
| `velmora-cream` | `#FAF8F5` | Cards, panels, subtle surfaces |
| `velmora-overlay` | `rgba(30,26,22,0.45)` | Image overlays for text legibility |

## Typography
- **Headings / product names**: `Cormorant Garamond`, serif, uppercase for product names, wide letter-spacing (`tracking-[0.22em]`).
- **Body / UI**: `Inter`, sans-serif.
- Product names always uppercase with generous letter-spacing. Body text is warm dark on warm off-white.

## Spacing & layout
- Generous whitespace. Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Container max-width: `max-w-7xl` centered with `px-4 sm:px-6 lg:px-8`.
- Hairline dividers: `border-b border-[#E3DDD4]`.
- Soft shadows: `shadow-sm`, `shadow-md` only on hover cards.

## Components

### Buttons
- Primary: solid `bg-velmora-accent text-white` with no border-radius (square), uppercase tracking-wide text-xs, py-3 px-8, hover `bg-velmora-accent-hover`.
- Secondary / outline: `border border-velmora-fg text-velmora-fg bg-transparent` hover `bg-velmora-fg text-white`.
- Ghost: text only with underline animation.

### Cards
- Product card: no border, cream or transparent background, image aspect `4/5`, hover reveals second image and quick-add button.
- Category tile: full-bleed image, label appears on hover via overlay gradient.

### Forms
- Inputs: `bg-white border border-velmora-border`, focus `ring-velmora-accent`, rounded-none.

### Navigation
- Sticky top. Transparent over hero, solid `bg-velmora-bg/95 backdrop-blur` on scroll.
- Logo left (serif), center links, right icons.

## Imagery
Warm gold jewelry on dark or neutral backgrounds. Use the stock-image system (`data-strk-img`) with placeholders. Hero: full-bleed, moody warm-lit close-up. Product images: 4:5 or 1:1 on cream/charcoal.

## Motion
- Subtle hover transitions: `transition-all duration-300 ease-out`.
- Image scale on hover: `scale-105`.
- Fade-in on scroll optional; keep minimal to maintain fast load.
