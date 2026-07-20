# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry for women 25–45. No loud discounts, no generic e-commerce noise. Generous whitespace, large imagery, thin hairline dividers, restrained warm-gold accent.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-background` | `#FAF8F5` | Page background, cards |
| `--color-foreground` | `#1E1812` | Primary text, headings |
| `--color-accent` | `#B48A4D` | CTAs, links, stars, hover accents |
| `--color-accent-hover` | `#9A733D` | Accent hover / active |
| `--color-muted` | `#6B5E51` | Secondary text, captions |
| `--color-subtle` | `#E8E2D9` | Hairline borders, dividers |
| `--color-overlay` | `rgba(30,24,18,0.45)` | Image overlays |
| `--color-cream-dark` | `#F2EEE6` | Newsletter block, alternate sections |

## Typography

- **Headings / product names**: `Cormorant Garamond`, serif. Weight 400–600.
- **Body / UI**: `Inter`, sans-serif. Weight 300–500.
- Product names are **UPPERCASE** with wide letter-spacing (`tracking-[0.2em]`).

## Spacing & Layout

- Max content width: `1280px` (`max-w-7xl`).
- Section vertical padding: `py-16 md:py-24`.
- Component gaps: `gap-6 md:gap-8`.
- Hairline dividers: `border-subtle` (`1px solid #E8E2D9`).

## Components

### Buttons
- **Primary (solid accent)**: `bg-accent text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-accent-hover transition-colors`.
- **Secondary (outline)**: `border border-foreground text-foreground px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-foreground hover:text-background transition-colors`.

### Product Cards
- Square-ish image (`aspect-[4/5]`), object-cover.
- Hover: reveal second image with cross-fade; show quick "Add to Cart" pill.
- Title uppercase, small muted price.

### Forms
- Inputs: `bg-transparent border-b border-subtle focus:border-accent outline-none py-2 text-foreground placeholder:text-muted`.

## Animation
- Transitions: `transition-all duration-300 ease-out`.
- Hover lifts: `hover:-translate-y-0.5`.
- Fade-ins via simple opacity/translate on scroll optional; keep subtle.
