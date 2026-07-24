# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. Premium-but-accessible, never loud or discount-looking.

## Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Background | `#FAF8F5` | Page background (warm ivory) |
| Surface | `#FFFFFF` | Cards, drawer, input fields |
| Primary Text | `#1C1A17` | Headings, body copy, buttons |
| Secondary Text | `#6B665E` | Captions, placeholders, subtle labels |
| Accent | `#B48A5C` | CTA buttons, links, highlights, badges |
| Accent Hover | `#9C744B` | Hover state for accent buttons |
| Muted | `#EFEBE5` | Section backgrounds, tags, soft separators |
| Hairline | `#E0DAD2` | Borders, dividers |
| Star | `#B48A5C` | Ratings |

## Typography

- **Headings / product names**: Cormorant Garamond, serif.
- **Body / UI / labels**: Manrope, sans-serif.
- Product names are UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Headings use tight line-height (`leading-[1.1]`), body uses comfortable `leading-relaxed`.

## Spacing & Layout

- Generous whitespace. Major section padding: `py-20 md:py-28`.
- Max container width: `max-w-7xl` (80rem) centered with `px-4 sm:px-6 lg:px-8`.
- Thin hairline dividers (`h-px bg-hairline`).
- Cards have soft, subtle shadows only when needed (`shadow-sm`).

## Components

- **Buttons**
  - Primary: solid accent background, dark text (`text-primary`) — actually use dark primary text on accent for elegance? Or white? Let's use `bg-accent text-white` for clarity and strong contrast; hover `bg-accent-hover`.
  - Secondary / outline: `border border-primary text-primary hover:bg-primary hover:text-background`.
  - Ghost: `text-primary hover:text-accent`.
- **Inputs**: clean rectangular, `border border-hairline bg-surface`, focus ring accent.
- **Badges**: small uppercase, tracking-wide, muted background, dark text.
- **Cards**: no border-radius overload; subtle rounded `rounded-sm`, overflow hidden.

## Motion

- Transitions: `transition-colors duration-300 ease-out`, `transition-transform duration-500`.
- Hover images: opacity cross-fade on product cards.
- Nav: transparent over hero, solid background after scroll (backdrop blur optional).

## Imagery

- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` tags with descriptive queries.
- Placeholder is a 1x1 transparent SVG.
