# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `bg-cream` (#FAF7F2) — warm off-white
- **Surface**: `bg-surface` (#FFFFFF) — pure white cards
- **Primary text**: `text-charcoal` (#1A1A1A) — near-black
- **Secondary text**: `text-warm-gray` (#6B5E54) — warm muted brown-gray
- **Accent**: `text-gold` / `bg-gold` (#B8860B) — dark goldenrod, premium metallic feel
- **Accent hover**: `bg-gold-dark` (#96700A) — deeper gold
- **Accent light**: `bg-gold-light` (#F5ECD7) — soft gold tint for backgrounds
- **Border**: `border-hairline` (#E8E2DA) — warm light border
- **Dark section**: `bg-espresso` (#2C2420) — deep warm brown for contrast sections

## Typography
- **Headings / Product names**: `font-serif` → Cormorant Garamond (weights 300, 400, 500, 600)
- **Body / UI**: `font-sans` → Inter (weights 300, 400, 500, 600)
- **Product names**: UPPERCASE, letter-spacing `tracking-[0.2em]`
- **Section headings**: Serif, normal case or uppercase depending on context
- **Body text**: 16px base, line-height 1.6

## Spacing & Layout
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-6`
- Card padding: `p-6` or `p-8`
- Grid gaps: `gap-6` or `gap-8`

## Borders & Dividers
- Hairline dividers: `border-t border-hairline` (1px warm light)
- Card borders: `border border-hairline`
- No heavy borders or box shadows

## Buttons
- Primary: `bg-gold text-white` with `hover:bg-gold-dark`, `px-8 py-3`, uppercase tracking
- Secondary/outlined: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-white`
- Rounded: `rounded-none` (sharp edges for premium feel) or very subtle `rounded-sm`

## Shadows
- Minimal: `shadow-sm` only on hover states for cards
- No heavy drop shadows

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover opacity changes: `hover:opacity-80`
- Image zoom on hover: `hover:scale-105` with overflow hidden

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Subtle hover transitions
- Serif for elegance, sans for clarity
- Gold accent sparingly

## Don'ts
- No bright/neon colors
- No heavy shadows or borders
- No rounded-full buttons (too casual)
- No cluttered layouts
- No discount/sale-style badges
- No generic stock photo feel
