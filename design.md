# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette (Tailwind config names)
- **cream**: `#FAF7F2` — page background, light surfaces
- **charcoal**: `#1C1917` — primary text, dark surfaces
- **warm-gold**: `#B8860B` — accent color for CTAs, highlights, hover states
- **warm-gold-light**: `#D4A843` — lighter gold for subtle accents
- **taupe**: `#8B7D6B` — secondary text, muted elements
- **sand**: `#F0EBE3` — card backgrounds, subtle sections
- **ivory**: `#FFFDF8` — hero overlays, light cards

## Typography
- **Headings / Product names**: `Cormorant Garamond` (serif), weight 300–600
- **Body / UI**: `Inter` (sans-serif), weight 300–500
- Product names: UPPERCASE, letter-spacing `0.15em`
- Section headings: normal case or uppercase depending on context

## Spacing & Layout
- Generous whitespace: sections use `py-16 md:py-24`
- Container max-width: `max-w-7xl mx-auto px-4 md:px-8`
- Cards: `rounded-none` or very subtle `rounded-sm`, thin borders `border border-sand`
- Hairline dividers: `border-t border-taupe/20`

## Buttons
- Primary: `bg-charcoal text-cream hover:bg-warm-gold transition-colors duration-300`
- Secondary/Outlined: `border border-charcoal text-charcoal hover:border-warm-gold hover:text-warm-gold`
- Pill shape for variant selectors: `rounded-full px-4 py-1.5`

## Shadows & Effects
- Soft shadows: `shadow-sm` or none
- Hover transitions: `transition-all duration-300 ease-in-out`
- Image hover: subtle scale `hover:scale-105`

## Do's
- Use generous whitespace
- Keep typography elegant and restrained
- Use warm-gold sparingly as accent
- Large editorial imagery
- Thin hairline dividers between sections
- Subtle hover animations (opacity, scale, color)

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded corners on cards (keep sharp/editorial)
- No cluttered layouts
- No discount/sale-style badges
- No generic e-commerce feel
