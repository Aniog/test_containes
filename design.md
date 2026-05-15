# Design System — Butter & Cheese

## Brand Identity
Warm, artisanal, farmhouse-inspired. Evokes the richness of handcrafted dairy — golden butter, aged cheese, rustic wooden boards, and linen textures.

## Color Palette
All hex values are registered as named Tailwind colors in `tailwind.config.js`.

| Name         | Hex       | Tailwind Class         | Usage                          |
|--------------|-----------|------------------------|--------------------------------|
| cream        | #FFF8E7   | `bg-cream`             | Page background                |
| butter       | #F5C842   | `bg-butter`            | Primary accent, CTAs           |
| butter-dark  | #D4A017   | `bg-butter-dark`       | Hover states on butter         |
| brown        | #8B5E3C   | `bg-brown`             | Section headings, borders      |
| brown-dark   | #3D2B1F   | `bg-brown-dark`        | Footer, dark backgrounds       |
| parchment    | #FAF3E0   | `bg-parchment`         | Card backgrounds               |
| sage         | #7A9E7E   | `bg-sage`              | Secondary accent               |
| sage-dark    | #5A7A5E   | `bg-sage-dark`         | Hover on sage                  |
| warm-gray    | #6B6560   | `text-warm-gray`       | Body text on light backgrounds |

## Typography
- **Font**: Playfair Display (headings) + Inter (body) via Google Fonts
- **Headings**: `font-playfair font-bold tracking-tight text-brown-dark`
- **Body**: `font-sans text-warm-gray leading-relaxed`
- **Labels/Caps**: `uppercase tracking-widest text-sm font-semibold`

## Spacing & Layout
- Max content width: `max-w-6xl mx-auto px-6`
- Section padding: `py-20 px-6`
- Card padding: `p-6` or `p-8`
- Border radius: `rounded-2xl` for cards, `rounded-full` for pills/badges

## Component Styles

### Buttons
- Primary: `bg-butter hover:bg-butter-dark text-brown-dark font-semibold px-6 py-3 rounded-full transition-colors`
- Secondary: `border-2 border-brown text-brown hover:bg-brown hover:text-cream px-6 py-3 rounded-full transition-colors`

### Cards
- `bg-parchment rounded-2xl shadow-md overflow-hidden`
- Image on top, content below with `p-6`

### Section Dividers
- Use `border-t border-brown/20` for subtle dividers

### Navigation
- Sticky top, `bg-cream/95 backdrop-blur-sm shadow-sm`
- Logo in Playfair Display, links in Inter

## Do's
- Use warm, golden tones as primary palette
- Pair Playfair Display headings with Inter body text
- Use generous whitespace between sections
- Use `rounded-2xl` for all cards and image containers
- Keep text on light backgrounds dark (`text-brown-dark` or `text-warm-gray`)
- Keep text on dark backgrounds light (`text-cream` or `text-parchment`)

## Don'ts
- Don't use cold blues or grays as primary colors
- Don't use pure black (`#000`) — use `brown-dark` instead
- Don't use pure white — use `cream` or `parchment`
- Don't place light text on light backgrounds
- Don't use more than 3 font weights per section
