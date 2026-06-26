# ARTITECT MACHINERY — Design System

## Brand
ARTITECT MACHINERY manufactures precision sheet metal folding machines. The visual identity should communicate engineering excellence, reliability, and modern sophistication.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#0f172a` | Dark navy / charcoal — primary text, headers, footer bg |
| `--accent` | `#c9a227` | Warm gold — CTAs, highlights, hover states, icons |
| `--accent-hover` | `#b08d1e` | Darker gold for button hover |
| `--background` | `#ffffff` | Main page background |
| `--surface` | `#f5f5f5` | Alternate section backgrounds, cards |
| `--muted` | `#64748b` | Body text, captions, secondary content |
| `--border` | `#e2e8f0` | Dividers, card borders |
| `--foreground` | `#0f172a` | Primary text on light backgrounds |
| `--foreground-inverse` | `#ffffff` | Text on dark backgrounds |

## Typography

- **Font Family**: Inter (Google Fonts) — already loaded in index.html
- **Headings**: weight 700–800, tight line-height (1.1–1.2), letter-spacing -0.02em
- **Body**: weight 400–500, line-height 1.6–1.75
- **Labels / Nav**: weight 500, uppercase, letter-spacing 0.05em, size 0.875rem

### Scale
- H1: clamp(2.5rem, 5vw, 4rem)
- H2: clamp(1.75rem, 4vw, 2.75rem)
- H3: clamp(1.25rem, 3vw, 1.5rem)
- Body: 1rem / 1.125rem
- Small: 0.875rem

## Spacing

- Page horizontal padding: `px-4 sm:px-6 lg:px-8 xl:px-12`
- Max content width: `max-w-7xl mx-auto`
- Section vertical padding: `py-16 md:py-24`
- Component gap: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: bg-accent, text-white, rounded-md, px-6 py-3, font-medium
- Secondary: border border-primary, text-primary, rounded-md, px-6 py-3
- Hover: subtle scale(1.02) and color shift

### Cards
- White bg, rounded-xl, subtle shadow (`shadow-sm`), border (`border-border`)
- Padding: `p-6 md:p-8`
- Hover: `shadow-md`, translateY(-2px)

### Navigation
- Sticky top-0, white bg with slight backdrop blur on scroll
- Height: ~72px
- Links: uppercase, small, letter-spaced, hover accent color

## Do's and Don'ts

- DO use ample whitespace; avoid cramped layouts
- DO use the gold accent sparingly for emphasis only
- DO maintain high contrast; never place light gray text on white
- DON'T use more than two font weights in one sentence
- DON'T use bright saturated colors outside the palette
- DON'T use rounded-full pills; keep corners slightly rounded (rounded-md / rounded-xl)
