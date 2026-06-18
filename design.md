# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `bg-cream` (#FAF7F2) — warm off-white
- **Surface**: `bg-surface` (#FFFFFF) — pure white cards
- **Primary text**: `text-charcoal` (#1A1A1A) — near-black
- **Secondary text**: `text-warm-gray` (#6B5E54) — warm muted brown-gray
- **Accent**: `text-accent` / `bg-accent` (#8B6914) — rich antique gold
- **Accent hover**: `bg-accent-dark` (#6B5010) — deeper gold
- **Muted border**: `border-muted` (#E8E2DA) — warm light border
- **Dark section**: `bg-dark` (#1A1A1A) — for footer/contrast sections

## Typography
- **Headings / Product names**: Cormorant Garamond (serif), weight 300–600
- **Body / UI**: Inter (sans-serif), weight 300–500
- **Product names**: UPPERCASE, letter-spacing 0.15em–0.2em
- **Section headings**: Cormorant Garamond, font-light or font-normal, text-3xl to text-5xl

## Tailwind Classes (common)
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-warm-gray`
- Accent button: `bg-accent text-white hover:bg-accent-dark transition-colors duration-300`
- Outlined button: `border border-accent text-accent hover:bg-accent hover:text-white transition-colors duration-300`
- Cards: `bg-surface border border-muted`
- Dividers: `border-t border-muted`
- Spacing: generous — `py-16 md:py-24`, `px-6 md:px-12 lg:px-20`

## Do's
- Use generous whitespace
- Large editorial imagery
- Thin hairline dividers (1px, border-muted)
- Subtle hover transitions (duration-300, opacity, translateY)
- Soft shadows on cards (shadow-sm)
- Restrained accent color usage

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
