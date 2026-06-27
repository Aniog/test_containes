# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `--color-bg` = `#FAF8F5` (warm ivory)
- **Surface**: `--color-surface` = `#FFFFFF`
- **Foreground / Text**: `--color-text` = `#1A1A1A` (near-black)
- **Text Muted**: `--color-text-muted` = `#6B6560` (warm gray)
- **Accent (Gold)**: `--color-accent` = `#B8860B` (dark goldenrod — warm, rich)
- **Accent Hover**: `--color-accent-hover` = `#9A7209`
- **Accent Light**: `--color-accent-light` = `#F5EFE0` (soft gold tint for backgrounds)
- **Border**: `--color-border` = `#E8E4DF` (warm hairline)
- **Border Dark**: `--color-border-dark` = `#D4CFC8`

## Typography
- **Headings / Product Names**: `Cormorant Garamond`, serif — weights 400, 500, 600
- **Body / UI**: `Inter`, sans-serif — weights 300, 400, 500, 600
- Product names: UPPERCASE, letter-spacing `0.12em`
- Section headings: serif, normal case or uppercase depending on context
- Body: 16px base, line-height 1.6

## Tailwind Usage
- Spacing: generous — `py-16`, `py-20`, `py-24` for sections; `gap-6`, `gap-8` for grids
- Borders: `border-border` (1px), hairline dividers
- Rounded: minimal — `rounded-none` or `rounded-sm` for buttons; no heavy rounding
- Shadows: `shadow-sm` only, very subtle
- Transitions: `transition-all duration-300 ease-in-out`
- Buttons: solid accent bg with white text, or outlined with accent border + accent text. No heavy border-radius.

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover transitions (opacity, translateY)
- Serif for elegance, sans for clarity
- Gold accent sparingly — CTAs, highlights, icons

## Don'ts
- No heavy shadows or gradients
- No rounded-full buttons (use rounded-sm or rounded-none)
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
- No dark mode (this is a light, warm brand)
