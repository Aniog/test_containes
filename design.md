# Velmora Fine Jewelry — Design System

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| Base | `#1A1A1A` | Primary text, dark backgrounds, buttons |
| Cream | `#F5F0EB` | Page background, cards, sections |
| White | `#FAF9F7` | Elevated surfaces, inputs, footer |
| Gold | `#C9A96E` | Primary accent — CTAs, highlights, stars |
| Gold Light | `#D9BC8E` | Hover states on gold elements |
| Gold Dark | `#A6884D` | Active states |
| Muted | `#8A8A8A` | Secondary text, captions |
| Muted Light | `#B5B5B5` | Placeholders, disabled |
| Border | `#E8E3DE` | Dividers, card borders, input borders |
| Border Dark | `#D4CFC9` | Hover borders |

## Typography

| Role | Font | Weight | Size | Letter-spacing | Transform |
|------|------|--------|------|----------------|-----------|
| H1 (hero) | Cormorant Garamond | 300 | 48–64px | 0.02em | none |
| H2 (section) | Cormorant Garamond | 400 | 36–48px | 0.02em | none |
| H3 (card) | Cormorant Garamond | 500 | 24–28px | 0.02em | none |
| Product Name | Cormorant Garamond | 500 | 14–16px | 0.2em | UPPERCASE |
| Body | Inter | 400 | 14–16px | 0 | none |
| Body Small | Inter | 400 | 12–13px | 0.02em | none |
| Nav Link | Inter | 500 | 13–14px | 0.08em | UPPERCASE |
| Button | Inter | 500 | 13–14px | 0.1em | UPPERCASE |
| Price | Inter | 500 | 14–16px | 0.02em | none |

## Spacing

- Section padding: `py-16 md:py-24` (64–96px)
- Container max-width: `max-w-7xl` (1280px)
- Container padding: `px-4 sm:px-6 lg:px-8`
- Card gap: `gap-4 md:gap-6`
- Component margin: `space-y-6` (24px)

## Components

### Buttons
- **Primary (Solid Gold)**: `bg-velmora-gold text-white hover:bg-velmora-gold-dark` — uppercase, tracking-widest, px-8 py-3
- **Secondary (Outline)**: `border border-velmora-base text-velmora-base hover:bg-velmora-base hover:text-white` — uppercase, tracking-widest
- **Ghost**: `text-velmora-base hover:text-velmora-gold` — for links

### Cards
- Background: `bg-velmora-white`
- Border: `border border-velmora-border` (optional)
- Shadow: `shadow-sm hover:shadow-md`
- Transition: `transition-all duration-400`

### Inputs
- Background: `bg-velmora-white`
- Border: `border border-velmora-border`
- Focus: `focus:border-velmora-gold focus:ring-1 focus:ring-velmora-gold`
- Text: `text-velmora-base placeholder:text-velmora-muted-light`

## Effects

- Hover lift: `hover:-translate-y-1`
- Image zoom: `hover:scale-105` on image containers with `overflow-hidden`
- Fade in: `opacity-0` to `opacity-100` with `transition-opacity duration-600`
- Hairline divider: `h-px bg-velmora-border`
- Backdrop blur on nav: `backdrop-blur-md bg-velmora-white/90`

## Do's and Don'ts

- DO use generous whitespace
- DO keep images warm-toned, editorial, soft lighting
- DO use uppercase + wide tracking for product names and nav
- DO maintain strong contrast — never light text on light bg
- DON'T use bright saturated colors
- DON'T use heavy drop shadows
- DON'T crowd elements
- DON'T use discount-style badges or urgency colors (red, orange)
