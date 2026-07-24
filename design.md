# Velmora Fine Jewelry — Design System

## Brand direction
Quiet luxury, warm and editorial. Premium demi-fine gold jewelry store for women 25–45, gifting and self-purchase. No loud discounts, no generic marketplace feel. The site should feel like a beautifully art-directed lookbook.

## Color palette
- Background base: `bg-stone-50` (#fafaf9) — warm off-white
- Surface cards: `bg-white` with subtle `shadow-sm`
- Primary dark: `stone-950` (#0c0a09) — near-black for text and nav
- Muted text: `stone-500` (#78716c)
- Hairline: `stone-200` (#e7e5e4)
- Accent: `amber-700` (#b45309) — warm bronze/gold button and CTA color
- Accent hover: `amber-800` (#92400e)
- Accent text on accent: `white`
- Star rating: `amber-400`

### Accessibility
All body text uses `stone-950` on `stone-50`/`white` for strong contrast. Accent buttons are white text on `amber-700` (4.5:1+). No light text on light surfaces.

## Typography
- Headings / product names / logo: `Cormorant Garamond` (serif), 300–700 weights.
- Body / UI / price: `Inter` (sans-serif), 300–600 weights.
- Product names: uppercase, `tracking-[0.2em]`, `text-sm` to `text-base`.
- Display headline: `text-4xl md:text-6xl lg:text-7xl`, `font-light`, `leading-[1.05]`.

## Spacing & layout
- Container max width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12`
- Section vertical spacing: `py-16 md:py-24`
- Hairline divider: `border-t border-stone-200`
- Grid gaps: `gap-4 md:gap-6 lg:gap-8`

## Components

### Buttons
- Primary (solid): `bg-amber-700 text-white hover:bg-amber-800 transition-colors duration-300`
- Secondary (outline): `border border-stone-950 text-stone-950 hover:bg-stone-950 hover:text-white transition-colors duration-300`
- Ghost nav link: `text-stone-950 hover:text-amber-700 transition-colors`

### Cards
- Product card: `group bg-white overflow-hidden` with image hover transition and quick-add overlay.
- Testimonial card: `bg-white border border-stone-200 p-6 md:p-8`
- Category tile: `relative overflow-hidden aspect-[3/4]`, image scales on hover, label appears on hover.

### Elevation
- Soft shadow: `shadow-sm`
- Hover lift: `hover:shadow-md transition-shadow duration-300`

## Imagery style
Warm-lit gold jewelry on dark chocolate, cream, or skin-tone backgrounds. Editorial close-ups, soft shadows, no harsh whites. Use strikingly image SDK with `data-strk-img` queries referencing nearby text IDs.

## Animation
- Transition defaults: `transition-all duration-300 ease-out`
- Hover image crossfade: `opacity-0 group-hover:opacity-100`
- Nav background: `transition-colors duration-300`
- Cart drawer: CSS translate transform + backdrop.
