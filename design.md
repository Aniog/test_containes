# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount styling, no generic e-commerce. Generous whitespace, large imagery, thin hairlines, subtle hover transitions.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#FAF8F5` | Primary page background |
| `--color-espresso` | `#1F1A17` | Primary text, nav text, footer background |
| `--color-gold` | `#B89B72` | Accent CTA buttons, hover states, stars, price highlights |
| `--color-gold-dark` | `#9A805D` | Hover/focus state for gold buttons |
| `--color-stone` | `#8C8179` | Secondary text, captions, muted labels |
| `--color-taupe` | `#D9D3CA` | Hairline dividers, borders, subtle separators |
| `--color-sand` | `#F2EEE8` | Card backgrounds, newsletter block, soft sections |
| `--color-white` | `#FFFFFF` | Cards, overlays, input backgrounds |

## Typography

- **Headings / product names / editorial text**: Cormorant Garamond, serif. Elegant, high contrast.
- **Body / UI / buttons / nav**: Inter, sans-serif. Clean and readable.
- Product names: uppercase, `tracking-[0.2em]`, `font-medium`.

### Scale
- Hero headline: `text-4xl md:text-6xl lg:text-7xl`
- Section headline: `text-3xl md:text-4xl`
- Product name: `text-sm md:text-base`
- Body: `text-sm md:text-base`
- Caption / UI: `text-xs uppercase tracking-widest`

## Components

### Buttons
- **Primary (solid gold)**: `bg-[#B89B72] text-white px-8 py-3 uppercase text-xs tracking-[0.2em] hover:bg-[#9A805D] transition-colors`
- **Secondary (outlined)**: `border border-[#1F1A17] text-[#1F1A17] px-6 py-3 uppercase text-xs tracking-[0.2em] hover:bg-[#1F1A17] hover:text-white transition-colors`
- **Text link**: underline on hover, serif or sans depending on context.

### Cards
- White background, no border-radius or very subtle (`rounded-sm`), thin shadow on hover.
- Product card hover reveals alternate image and quick-add button.

### Dividers
- `h-px bg-[#E5E0D8]` hairline.

## Spacing
- Section vertical padding: `py-16 md:py-24 lg:py-32`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use Strikingly stock image tags with descriptive jewelry queries.
- Editorial hero: close-up of gold jewelry on model.

## Accessibility
- Strong contrast between espresso text and cream background.
- Gold accent never used as the only text color on light background for body copy.
- Focus states visible with espresso outline.
