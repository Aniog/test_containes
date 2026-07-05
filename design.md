# Velmora Fine Jewelry — Design System

## Visual Direction
Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette
- **Base (deep warm charcoal):** #1C1917 (stone-900) — primary background for hero/dark sections
- **Cream (warm off-white):** #FAF7F2 — primary light background
- **Gold Accent:** #C9A96E — primary accent, buttons, highlights
- **Gold Hover:** #B8944F — darker gold for hover states
- **Text Primary:** #1C1917 — on light backgrounds
- **Text Secondary:** #78716C (stone-500) — muted text on light
- **Text on Dark:** #FAF7F2 — on dark backgrounds
- **Divider:** #E7E5E4 (stone-200) — hairline dividers
- **Card Background:** #FFFFFF
- **Overlay:** rgba(28, 25, 23, 0.6) — for image overlays

## Typography
- **Headings:** Cormorant Garamond (serif) — elegant, editorial
- **Body/UI:** Inter (sans-serif) — clean, readable
- **Product names:** UPPERCASE, letter-spacing: 0.15em, Cormorant Garamond
- **Nav links:** UPPERCASE, letter-spacing: 0.1em, Inter, text-sm

## Tailwind Custom Colors
- `velmora-cream`: #FAF7F2
- `velmora-gold`: #C9A96E
- `velmora-gold-hover`: #B8944F
- `velmora-charcoal`: #1C1917
- `velmora-muted`: #78716C
- `velmora-divider`: #E7E5E4

## Spacing & Layout
- Generous whitespace — sections have py-20 to py-28 on desktop
- Max content width: 1280px (max-w-7xl)
- Product grid gap: 6 (24px)
- Section padding: px-4 md:px-8

## Buttons
- Primary: bg-velmora-gold text-white, hover:bg-velmora-gold-hover, tracking-widest uppercase text-xs font-medium, py-3 px-8
- Secondary: border border-velmora-charcoal text-velmora-charcoal, hover:bg-velmora-charcoal hover:text-white
- On dark: border-white text-white, hover:bg-white hover:text-velmora-charcoal

## Cards
- Clean white bg on cream, subtle shadow on hover
- Image aspect ratio: 4x5 for products
- Hover: second image fade-in, slight scale

## Animations
- Subtle, smooth transitions (300ms ease)
- Hover scale: scale-[1.02] on product cards
- Fade-in on scroll sections
- Cart drawer slides from right

## Do's
- Use generous whitespace
- Use serif for all headings and product names
- Use uppercase with wide letter-spacing for product names
- Use thin hairline dividers
- Keep accent color restrained (gold only for CTAs and key highlights)

## Don'ts
- Don't use bright/saturated colors
- Don't use heavy shadows or thick borders
- Don't use sans-serif for headings
- Don't crowd elements — let them breathe
- Don't use more than 2 font families
