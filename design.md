# Velmora Fine Jewelry — Visual Identity

## Direction
Quiet luxury, warm editorial. Premium demi-fine jewelry for women 25–45. No loud discount aesthetics, no generic marketplace clutter. Confidence through restraint.

## Color palette

| Token | Hex | Usage |
|-------|-----|-------|
| `background` | `#0F0F0E` | Primary page background (deep warm black) |
| `surface` | `#181816` | Cards, nav solid state, drawer, footer |
| `surface-elevated` | `#232320` | Hover states, secondary panels |
| `foreground` | `#F7F5F0` | Primary text, headings on dark |
| `muted` | `#A9A59B` | Body copy, captions, placeholder text |
| `muted-subtle` | `#6D6A62` | Dividers, disabled, hairlines |
| `accent` | `#C8A464` | Primary CTA, links, star ratings, focus rings |
| `accent-hover` | `#D8B674` | CTA hover |
| `accent-soft` | `rgba(200,164,100,0.12)` | Subtle accent backgrounds |
| `overlay` | `rgba(0,0,0,0.55)` | Backdrops for drawers, overlays |

Contrast: foreground on background passes WCAG AA. Accent on dark is warm and readable.

## Typography

- **Headings / product names:** `Cormorant Garamond`, serif, weights 400–600.
- **Body / UI:** `Inter`, sans-serif, weights 300–500.
- Product names are UPPERCASE with wide `tracking-[0.22em]`.
- Hero headline: `text-5xl md:text-7xl lg:text-8xl`, font-serif, leading-tight.
- Body: `text-sm md:text-base` with relaxed leading.

## Spacing & layout

- Section vertical rhythm: `py-20 md:py-28`.
- Container max-width: `max-w-7xl` centered with `px-6 md:px-10`.
- Generous whitespace; avoid crowding.
- Hairline dividers: `border-b border-[#2A2926]`.

## Components

### Buttons
- Primary: solid `bg-accent text-[#0F0F0E] font-medium tracking-wide uppercase text-xs px-8 py-4` with hover `bg-accent-hover`.
- Secondary / outlined: `border border-foreground/30 text-foreground` hover `bg-foreground/5`.
- Transition `transition-all duration-300 ease-out`.

### Product cards
- Surface background, no border. Soft shadow on hover.
- Image ratio 4:5 with object-cover.
- Hover reveals alternate image + quick Add to Cart.
- Product name uppercase serif, price in muted sans.

### Forms
- Inputs: transparent background, bottom border `border-muted-subtle`, focus `border-accent`.
- Pills for variants: rounded-full border, selected state uses accent background and dark text.

### Icons
- Use `lucide-react`, stroke-width 1.5, size 20–24.

## Imagery
- Warm-lit gold jewelry on dark or neutral backgrounds.
- Large editorial crops. No harsh shadows, no discount badges.
- Use stock-image system with `data-strk-img` referencing nearby text IDs.

## Motion
- Subtle fade/slide on scroll using simple CSS transitions.
- Hover transitions 300ms ease-out.
- No jarring motion; accessibility prefers reduced motion when possible.
