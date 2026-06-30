# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `cream` (#FDFBF7) — warm off-white
- **Foreground / Text**: `charcoal` (#1C1917) — rich warm black
- **Accent**: `gold` (#B8860B) — dark goldenrod, premium metallic feel
- **Accent Light**: `gold-light` (#D4A853) — lighter gold for hover states
- **Muted**: `taupe` (#A8998A) — warm gray-brown for secondary text
- **Surface**: `linen` (#F5F0EA) — slightly darker warm surface for cards
- **Border**: `sand` (#E8E0D6) — subtle warm border

## Typography
- **Headings / Product Names**: `Cormorant Garamond` (serif), weight 300–600
- **Body / UI**: `Inter` (sans-serif), weight 300–500
- **Product names**: UPPERCASE, letter-spacing 0.15em–0.2em
- **Section headings**: Serif, normal case or uppercase with wide spacing

## Tailwind Classes (examples)
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-charcoal`
- Muted text: `text-taupe`
- Accent button: `bg-gold text-cream hover:bg-gold-light`
- Outlined button: `border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`
- Cards: `bg-linen border border-sand`
- Dividers: `border-t border-sand`

## Spacing
- Generous whitespace: sections use `py-20 md:py-28`
- Container max-width: `max-w-7xl mx-auto px-5 md:px-8`
- Product grid gap: `gap-4 md:gap-6`

## Borders & Shadows
- Hairline dividers: `border-t border-sand`
- Cards: no shadow or `shadow-sm`
- Buttons: no border-radius or very subtle `rounded-sm`

## Transitions
- All interactive elements: `transition-all duration-300 ease-in-out`
- Hover opacity shifts, subtle scale on product cards

## Do's
- Use generous whitespace
- Keep imagery large and editorial
- Use thin hairline dividers
- Restrained accent color usage
- Subtle hover transitions

## Don'ts
- No heavy drop shadows
- No rounded corners larger than rounded-sm
- No bright/neon colors
- No cluttered layouts
- No generic e-commerce feel
