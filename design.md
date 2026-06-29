# ARTITECT MACHINERY - Design System

## Brand Identity
ARTITECT MACHINERY manufactures premium sheet metal folding machines. The brand combines industrial strength with architectural precision. The visual language should feel refined, trustworthy, and modern — bridging heavy machinery with elegant design.

## Typography
- **Headings**: Inter, weight 700-800, tracking tight
- **Body**: Inter, weight 400-500, comfortable line-height
- **Accent**: Inter, weight 300 for subtle labels and captions
- Tailwind: `font-['Inter']` throughout

## Color Palette
- **Primary**: `#1a1a2e` (deep navy/charcoal) — headers, primary buttons, dark sections
- **Primary Light**: `#16213e` — card backgrounds, subtle surfaces
- **Accent**: `#d4a853` (warm gold/brass) — CTAs, highlights, links, decorative elements
- **Accent Dark**: `#b8943a` — hover states for gold
- **Surface**: `#f8f7f4` (warm off-white) — page background
- **Surface Alt**: `#f0ede8` — alternating section backgrounds
- **Text Primary**: `#1a1a2e` — main body text
- **Text Secondary**: `#5c5c6e` — muted text, descriptions
- **Text Light**: `#9ca3af` — subtle labels
- **White**: `#ffffff` — cards, contrast sections

## Tailwind Theme Configuration
Colors are defined via CSS custom properties in index.css using `@theme`:
- `--color-primary`: #1a1a2e
- `--color-primary-light`: #16213e
- `--color-accent`: #d4a853
- `--color-accent-dark`: #b8943a
- `--color-surface`: #f8f7f4
- `--color-surface-alt`: #f0ede8
- `--color-text-primary`: #1a1a2e
- `--color-text-secondary`: #5c5c6e

## Visual Style
- Clean, generous whitespace
- Subtle borders and shadows
- Gold accent lines as section dividers
- Large, bold typography for hero sections
- Cards with subtle hover lift effects
- Industrial imagery paired with clean layouts
- Rounded corners: `rounded-lg` for cards, `rounded-full` for badges

## Spacing
- Sections: `py-20 md:py-28` for major sections
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Card padding: `p-6 md:p-8`

## Do's
- Use gold accent sparingly for CTAs and highlights
- Maintain generous whitespace
- Use the warm off-white background
- Keep navigation clean and minimal
- Use subtle shadows (shadow-sm, shadow-md)

## Don'ts
- Don't use harsh pure black (#000) or pure white (#fff) for large areas
- Don't overcrowd sections
- Don't use more than 2 accent colors
- Don't use animations that are too flashy