# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry for women 25–45. No loud discounts, no generic e-commerce chrome.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `velmora-cream` | `#FAF7F2` | Primary background |
| `velmora-warm` | `#F5F0E8` | Section alternates / soft panels |
| `velmora-sand` | `#EDE8E0` | Borders, dividers, hover fills |
| `velmora-gold` | `#C5A065` | Accent CTA, stars, highlights |
| `velmora-gold-dark` | `#A88347` | Accent hover state |
| `velmora-ink` | `#1C1917` | Primary text, solid buttons |
| `velmora-charcoal` | `#292524` | Secondary text |
| `velmora-taupe` | `#A89F91` | Muted text, captions |

### Rules
- Use cream/sand for 90% of surfaces; gold as the only saturated accent.
- Text on cream must be ink or charcoal for strong contrast.
- Gold text is reserved for micro-labels and small accents only; never for body copy.

## Typography

### Fonts
- **Headings / product names:** Cormorant Garamond (serif), weight 400–600.
- **Body / UI:** Inter (sans-serif), weight 300–500.

### Scale
- Hero headline: `font-serif text-5xl md:text-7xl lg:text-8xl` tracking-wide
- Section headlines: `font-serif text-3xl md:text-4xl` tracking-wide
- Product names: `font-serif text-base uppercase tracking-widest`
- UI labels / nav: `text-xs uppercase tracking-[0.18em]`
- Body: `text-sm md:text-base leading-relaxed`

### Rules
- Product names are always uppercase with wide letter-spacing.
- Avoid all-caps for body copy.

## Spacing & Layout
- Max content width: `max-w-7xl` (80rem), centered with `mx-auto`.
- Section padding: `py-16 md:py-24`.
- Grid gaps: `gap-4` for product grids, `gap-6`–`gap-12` for editorial sections.
- Generous whitespace; avoid cramped cards.

## Components

### Buttons
- **Accent:** `bg-velmora-gold text-white hover:bg-velmora-gold-dark shadow-sm`.
- **Solid (dark):** `bg-velmora-ink text-white hover:bg-velmora-charcoal`.
- **Outline:** `border border-velmora-ink text-velmora-ink hover:bg-velmora-ink hover:text-white`.
- **Ghost:** `bg-transparent text-velmora-ink hover:bg-velmora-sand`.
- All buttons use `rounded-sm`, medium font weight, and transition durations of 200ms.

### Cards
- Product cards use a `4:5` aspect ratio container with a subtle sand background.
- Hover reveals a quick-add button on desktop; quick-add is always visible on mobile.
- Product names and prices are centered below the image.

### Inputs
- Inputs use a white or cream fill with a `velmora-sand` border.
- Focus ring: `focus:border-velmora-gold focus:outline-none`.

### Dividers
- Hairline dividers: `border-velmora-sand`.

## Imagery
- Warm gold jewelry on cream, sand, or dark charcoal backgrounds.
- Editorial, large-scale photography with soft shadows.
- Stock images are loaded via the `data-strk-img` / `data-strk-bg` tagging system using surrounding text for context.

## Motion
- Default transition: `transition-all duration-200` for UI, `duration-300` for reveals, `duration-700` for image scale.
- Hover: subtle scale (`scale-105`) on product/category images.
- Cart drawer: `translate-x` slide with opacity fade on backdrop.

## Responsive
- Mobile-first: single-column stacked layouts on small screens, multi-column grids on `md` and `lg`.
- Navigation collapses to hamburger on mobile.
- Product grid: `grid-cols-2` on mobile, `grid-cols-3` on tablet, `grid-cols-4` or `grid-cols-5` on desktop.
