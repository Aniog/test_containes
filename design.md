# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine jewelry. NOT loud, NOT discount-looking.

## Color Palette
- **Background**: `ivory` (#FDFBF7) — warm off-white
- **Surface**: `cream` (#F7F3ED) — slightly darker warm neutral for cards
- **Foreground / Text**: `charcoal` (#1C1917) — warm near-black
- **Muted text**: `stone` (#78716C) — warm gray for secondary text
- **Accent**: `gold` (#B8860B) — dark goldenrod, the primary brand accent
- **Accent light**: `gold-light` (#D4A843) — lighter gold for hover states
- **Accent dark**: `gold-dark` (#8B6508) — deeper gold for active states
- **Border**: `sand` (#E7E0D6) — warm hairline dividers
- **Dark surface**: `espresso` (#292524) — for dark sections (footer, newsletter)

## Typography
- **Headings / Product names**: `Cormorant Garamond` (serif), weights 300–600
  - Product names: UPPERCASE, letter-spacing: 0.15em
  - Section headings: normal case or uppercase depending on context
- **Body / UI**: `Inter` (sans-serif), weights 300–500
  - Body: 400 weight, text-base (16px)
  - Small/labels: 300 weight, text-sm
  - Buttons: 500 weight, text-sm, uppercase, letter-spacing 0.1em

## Tailwind Classes Reference
- Headings: `font-serif text-charcoal`
- Body: `font-sans text-charcoal`
- Muted: `text-stone`
- Accent button (solid): `bg-gold text-white hover:bg-gold-light`
- Accent button (outline): `border border-gold text-gold hover:bg-gold hover:text-white`
- Card: `bg-cream border border-sand`
- Divider: `border-t border-sand`
- Section spacing: `py-16 md:py-24`
- Container: `max-w-7xl mx-auto px-4 md:px-8`

## Do's
- Use generous whitespace between sections
- Large editorial imagery
- Thin hairline dividers (1px, sand color)
- Subtle hover transitions (300ms ease)
- Soft shadows on cards: `shadow-sm`
- Restrained use of accent color (buttons, links, highlights only)

## Don'ts
- No bright/neon colors
- No heavy drop shadows
- No rounded-full buttons (use rounded-sm or rounded-none)
- No cluttered layouts
- No discount/sale badges or loud CTAs
- No dark mode (this is a light, warm brand)
