# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `base` | `#1C1917` (warm near-black) | Primary text, nav solid bg, footer bg |
| `canvas` | `#FAF8F5` (warm off-white) | Page backgrounds |
| `surface` | `#FFFFFF` | Cards, elevated surfaces |
| `muted` | `#78716C` (warm stone) | Secondary text, captions |
| `accent` | `#B45309` (warm amber/bronze) | CTAs, links hover, active states |
| `accent-hover` | `#92400E` | Accent button hover |
| `border` | `#E7E5E4` | Hairline dividers |
| `star` | `#D97706` | Star ratings |

## Typography

| Role | Font | Weight | Style |
|------|------|--------|-------|
| Headings / Logo | Cormorant Garamond | 400–600 | Uppercase product names with `tracking-[0.2em]` |
| Body / UI | Inter | 300–500 | Clean, readable |

## Spacing
- Section padding: `py-20` (80px) desktop, `py-14` mobile
- Content max-width: `max-w-7xl` (1280px)
- Grid gap: `gap-6` to `gap-8`

## Components

### Buttons
- **Primary (solid accent)**: `bg-accent text-white px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-accent-hover transition-colors`
- **Secondary (outlined)**: `border border-base text-base px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-base hover:text-canvas transition-colors`
- **Ghost**: `text-base underline-offset-4 hover:underline`

### Cards
- Product card: `bg-surface rounded-none` (no border radius for editorial feel)
- Shadow: `shadow-sm hover:shadow-md transition-shadow`
- Image aspect: `aspect-[3/4]`

### Dividers
- Hairline: `h-px bg-border`

## Animation
- Hover transitions: `transition-all duration-300 ease-out`
- Fade-in on scroll: `opacity-0 translate-y-4` to `opacity-100 translate-y-0` over 600ms

## Do's
- Use generous whitespace
- Keep product names uppercase with wide tracking
- Use thin hairline borders for separation
- Prefer warm off-white backgrounds over pure white

## Don'ts
- No bright primary colors (red, blue, green)
- No heavy drop shadows
- No rounded-corner product cards (sharp editorial edges)
- No discount-style badges or loud sale banners
