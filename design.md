# Velmora Fine Jewelry — Design System

## Brand Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette

- **Background** `bg-velmora-cream` `#F7F4F0` — warm cream paper tone
- **Foreground/Text** `text-velmora-espresso` `#2A211F` — deep refined brown-black
- **Accent / Gold** `bg-velmora-gold` / `text-velmora-gold` `#B5894E` — burnished gold
- **Accent hover** `#9E7342` — deeper gold
- **Muted / Stone** `text-velmora-stone` `#A79A8F`
- **Hairline dividers** `border-velmora-espresso/10`
- **Surface cards** `bg-white` `#FFFFFF` on cream
- **Inverse / dark sections** `bg-velmora-espresso` `#2A211F` with `text-velmora-cream`

## Typography

- **Headings / Logo / Product names**: Cormorant Garamond (Google Font), 300–700 weights. Product names are UPPERCASE with wide `tracking-[0.18em]` letter-spacing.
- **Body / UI / Buttons / Prices**: Inter, weights 300–600.

## Spacing & Layout

- Generous vertical whitespace (`py-20` / `py-28` on sections).
- Container max-w-7xl, centered with `px-4 md:px-6 lg:px-8`.
- Thin hairline dividers: `border-t border-velmora-espresso/10`.
- Large editorial imagery, soft shadows `shadow-sm` / `shadow-lg`, subtle hover transitions `transition-all duration-500`.

## Components

- **Buttons**
  - Primary (solid gold): `bg-velmora-gold text-white hover:bg-velmora-gold-dark`.
  - Secondary (outlined): `border border-velmora-espresso text-velmora-espresso hover:bg-velmora-espresso hover:text-velmora-cream`.
  - Ghost / links: underline-on-hover animation.
- **Cards**: white or cream surface, minimal shadow, image zoom on hover.
- **Inputs**: `border-b` underline style or clean bordered, focus ring gold.
- **Pills**: rounded-full border, selected state has gold background.

## Imagery

- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` stock image tags for product images, hero, UGC, and category tiles.
- Placeholder image ratio and width attributes optimized per context.

## Accessibility

- Minimum contrast 4.5:1 for body text.
- All interactive elements focusable with visible focus ring.
- Skip irrelevant decorative-only colors; ensure readable foreground colors on all surfaces.
