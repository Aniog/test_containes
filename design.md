# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry store. No loud discounts, no generic marketplace feel.

## Color Palette

| Role | Hex | Tailwind Name | Usage |
|------|-----|---------------|-------|
| Background | `#F9F7F2` | `velmora-cream` | Page backgrounds, cards, nav solid state |
| Background Alt | `#EFEBE3` | `velmora-stone` | Subtle sections, newsletter block |
| Text Primary | `#1C1917` | `velmora-espresso` | Headings, body copy |
| Text Secondary | `#6B6560` | `velmora-taupe` | Captions, muted text |
| Accent | `#BFA15F` | `velmora-gold` | CTAs, links, stars, hover states |
| Accent Hover | `#A88B4A` | `velmora-gold-dark` | Button hover |
| Border | `#E0DCD3` | `velmora-border` | Hairlines, dividers |
| Dark Surface | `#1C1917` | `velmora-espresso` | Footer, dark hero overlays |
| White | `#FFFFFF` | `white` | Text on dark, input backgrounds |

## Typography

- **Headings / Display / Product Names**: `Playfair Display`, serif. Elegant, high contrast.
- **Body / UI / Nav / Buttons**: `Inter`, sans-serif. Clean, readable.
- Product names are rendered in uppercase with wide letter-spacing (`tracking-[0.22em]`).

### Type Scale

- Hero headline: `text-4xl md:text-6xl lg:text-7xl` Playfair, leading-tight.
- Section headline: `text-3xl md:text-4xl` Playfair.
- Product name: `text-xs tracking-[0.22em] uppercase` Inter semibold.
- Body: `text-sm md:text-base` Inter, leading-relaxed.
- UI label: `text-xs uppercase tracking-widest` Inter.

## Spacing & Layout

- Max content width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`.
- Generous vertical section spacing: `py-16 md:py-24`.
- Thin hairline dividers: `border-b border-velmora-border`.

## Components

### Buttons
- **Primary (solid)**: `bg-velmora-gold text-white hover:bg-velmora-gold-dark`.
- **Secondary (outline)**: `border border-velmora-espresso text-velmora-espresso hover:bg-velmora-espresso hover:text-white`.
- **Ghost**: transparent with underline or text color change.
- All buttons use `transition-colors duration-200`.

### Cards
- Product cards: no border, subtle shadow on hover (`shadow-sm hover:shadow-md`), image aspect `4x5` or `4x3`.
- Hover reveals alternate image and quick-add button.

### Inputs
- Minimal underline or soft bordered inputs on cream/stone backgrounds.
- Focus ring in `velmora-gold`.

## Imagery

- Warm gold jewelry on dark or neutral backgrounds.
- Use `data-strk-img` stock-image tagging with queries built from nearby product/section text.
- Hero: large editorial close-up. UGC: 9:16 vertical cards. Category tiles: 3x2 or 4x3.

## Motion

- Subtle hover transitions: `duration-300 ease-out`.
- Cart drawer slides in from right.
- Sticky nav transitions background color on scroll.
- Image hover cross-fade on product cards.
