# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry for women 25–45. No loud discount styling, no generic e-commerce clutter.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| ink | `#1a1818` | Primary dark backgrounds, primary text on cream |
| ink-soft | `#2d2a27` | Secondary dark surfaces, hover states |
| cream | `#f7f3ed` | Primary light background |
| cream-dark | `#efe9e1` | Secondary light surfaces, input backgrounds |
| cream-muted | `#dcd4c8` | Dividers, borders, disabled backgrounds |
| gold | `#c5a06d` | Primary accent, CTAs, highlights, links |
| gold-dark | `#b08a55` | Accent hover / active |
| gold-light | `#d9bc94` | Subtle gold glows, borders |
| stone | `#8c8277` | Muted body text, secondary labels |
| stone-light | `#b0a79d` | Placeholder text, disabled text |

## Typography

- **Headings / product names:** Cormorant Garamond, elegant serif.
  - Product names: uppercase, `tracking-widest`, font-weight 500–600.
- **Body / UI:** Manrope, clean sans-serif.
  - Body: font-weight 400, line-height relaxed.
  - UI labels / nav: uppercase, `tracking-wider`, font-weight 500.

## Spacing & Layout

- Generous whitespace. Section vertical padding: `py-16 md:py-24 lg:py-32`.
- Page horizontal padding: `px-4 sm:px-6 lg:px-8 xl:px-12`.
- Max container width: `max-w-7xl` (1280px) centered.
- Thin hairline dividers: `border-cream-muted` or `border-ink/10`.

## Components

### Buttons
- **Primary (solid accent):** `bg-gold text-ink hover:bg-gold-dark`.
- **Secondary (outline):** `border border-ink text-ink hover:bg-ink hover:text-cream`.
- **Ghost:** transparent with underline or arrow.
- Transitions: `transition-all duration-300`.

### Cards
- Product cards: no border, subtle shadow on hover, image swap on hover.
- UGC cards: vertical 9:16, caption overlay in soft serif.

### Inputs
- `bg-cream-dark border-cream-muted text-ink placeholder:text-stone-light`.
- Focus ring: `focus:outline-none focus:ring-1 focus:ring-gold`.

## Accessibility
- Maintain strong contrast: ink on cream, cream on ink, ink on gold.
- Interactive elements have visible focus states.
- Text never blends into backgrounds.
