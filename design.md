# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-ivory` | `#FAF8F5` | Page background, light surfaces |
| `--color-cream` | `#F3EDE4` | Card backgrounds, subtle fills |
| `--color-taupe` | `#C5B9A8` | Muted accents, borders, dividers |
| `--color-bronze` | `#8B7355` | Secondary text, hover states |
| `--color-espresso` | `#2C2416` | Primary text, headings, dark surfaces |
| `--color-gold` | `#C9A96E` | Primary accent, CTAs, highlights |
| `--color-gold-light` | `#D9C39A` | Gold hover, subtle gold accents |
| `--color-blush` | `#F5EDE6` | Newsletter block, soft backgrounds |

## Typography

| Role | Font | Weight | Styling |
|------|------|--------|---------|
| Headlines | Cormorant Garamond | 400, 500 | Elegant serif |
| Product names | Cormorant Garamond | 500 | UPPERCASE, tracking-widest |
| Body / UI | Inter | 400, 500, 600 | Clean sans-serif |
| Labels / Tags | Inter | 500 | UPPERCASE, tracking-wide, small |

## Spacing & Layout

- Generous whitespace: sections have `py-20` to `py-28` padding
- Container max-width: `max-w-7xl` centered
- Thin hairline dividers: `border-t border-taupe/30`
- Card border-radius: minimal, `rounded-sm` to `rounded-md`
- Button border-radius: `0` (sharp, premium feel)

## Component Styles

### Buttons
- Primary: `bg-gold text-espresso px-8 py-3.5 font-medium tracking-wide uppercase text-sm` — sharp corners, no radius
- Secondary/Outline: `border border-espresso text-espresso bg-transparent` — same padding, hover fills with espresso
- Hover transitions: `transition-all duration-300 ease-out`

### Product Cards
- Image aspect: 4:5 (portrait)
- Hover: reveal second image with `opacity` transition
- Quick add button appears on hover
- Subtle shadow on hover: `shadow-lg`

### Navigation
- Transparent over hero, solid `bg-ivory/95 backdrop-blur-sm` on scroll
- Logo: serif, left
- Links: sans-serif, uppercase, tracking-wide, small
- Icons: search + cart, minimal stroke

## Animations

- Page transitions: subtle fade, `duration-500`
- Hover reveals: `opacity` + `translateY`, `duration-300`
- Scroll reveals: fade-up with `y: 20`, `duration: 0.6`, `ease: easeOut`
- Cart drawer: slide from right, `duration-300`

## Do's and Don'ts

- DO use generous whitespace and large imagery
- DO keep gold as the only strong accent color
- DO use uppercase with wide tracking for product names and labels
- DON'T use bright colors, gradients, or flashy effects
- DON'T use rounded corners on primary buttons
- DON'T crowd elements — let jewelry breathe
