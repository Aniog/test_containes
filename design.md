# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount cues. No generic e-commerce tropes. Generous whitespace, large imagery, thin hairline dividers, restrained gold accent.

## Color Palette
- **Ink** `#1A1816` — primary text, nav solid background, footer.
- **Charcoal** `#2A2622` — secondary dark surfaces.
- **Stone** `#8A8279` — muted body text, secondary info.
- **Taupe** `#B5ACA0` — borders, dividers, placeholder text.
- **Cream** `#F7F4F0` — page background.
- **Ivory** `#FBFAF8` — cards, elevated surfaces.
- **Gold** `#C5A05A` — accent CTA, hover underlines, star fills.
- **Gold Dark** `#A8833F` — CTA hover / active state.
- **Gold Light** `#DCC390` — subtle highlights.

## Typography
- **Headings / product names**: Cormorant Garamond, Georgia fallback. Elegant, high contrast.
- **Body / UI**: Manrope, Inter fallback. Clean, modern, readable.
- Product names are **UPPERCASE** with `tracking-widest` (0.22em).
- Body text uses `text-stone` for a soft editorial feel on cream.

## Spacing & Layout
- Generous vertical section padding: `py-20 md:py-28`.
- Content max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Thin 1px dividers in `taupe/40`.
- Card radius: subtle, `rounded-sm` to `rounded-md`. Avoid heavy rounding.

## Components
- **Buttons**:
  - Primary: solid gold, ink text, hover gold-dark, transition 300ms.
  - Secondary: transparent with 1px ink/charcoal border, hover fills with ink/charcoal and ivory text.
- **Product cards**: ivory background, image fills card, hover reveals alternate image and quick-add bar.
- **Accordions**: border-b border-taupe/40, chevron rotates on open.
- **Form inputs**: transparent bg, 1px taupe border, focus:border-gold.

## Imagery
- Use `data-strk-img` stock image tags for all jewelry/model imagery.
- Queries reference nearby text IDs for contextual search.
- Placeholder SVG used as src until stock system resolves.

## Motion
- Subtle fade/slide-up on scroll-entry is optional; rely on hover transitions (300–400ms ease).
- Cart drawer slides in from right.
- Buttons scale slightly on hover (`hover:scale-[1.02]`).
