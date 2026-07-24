# Velmora Fine Jewelry — Design Specification

## Visual Identity
- **Mood**: Quiet luxury, warm, editorial. Premium demi-fine jewelry — NOT loud, NOT discount-looking, NOT generic e-commerce.
- **Target**: Women 25–45, gifting and self-purchase, premium-but-accessible ($30–$120).

## Color Palette
- **Base (Dark)**: `#1C1917` (warm charcoal/stone-900) — primary background for hero, nav, footer, accent sections
- **Surface (Light)**: `#FAFAF9` (stone-50) — main page background, card backgrounds
- **Warm Cream**: `#F5F0EB` — subtle warm tint for alternate sections
- **Gold Accent**: `#C9A96E` — primary accent for buttons, highlights, links, gold-themed elements
- **Gold Light**: `#D4B87A` — hover state for gold accent
- **Text Primary**: `#1C1917` — on light backgrounds
- **Text Secondary**: `#78716C` (stone-500) — muted text, descriptions
- **Text On Dark**: `#FAFAF9` — on dark backgrounds
- **Divider**: `#E7E5E4` (stone-200) — hairline dividers
- **Error**: `#DC2626` — form validation errors

## Typography
- **Headings / Product Names**: Cormorant Garamond (serif), weight 400–600
- **Body / UI**: Inter (sans-serif), weight 300–500
- **Product Names**: UPPERCASE with `tracking-[0.15em]` letter-spacing
- **Nav Links**: UPPERCASE with `tracking-[0.1em]`, Inter weight 400
- **Price**: Inter weight 500, same size as product name

## Tailwind Custom Colors
Map in tailwind.config.js:
- `velmora-gold`: `#C9A96E`
- `velmora-gold-light`: `#D4B87A`
- `velmora-dark`: `#1C1917`
- `velmora-cream`: `#F5F0EB`
- `velmora-light`: `#FAFAF9`

## Spacing & Layout
- Generous whitespace: sections `py-20 md:py-28`, content max-width `max-w-7xl`
- Product grid gap: `gap-6 md:gap-8`
- Section headings: `mb-10 md:mb-14`
- Hairline dividers: `border-t border-stone-200`

## Buttons
- **Primary (Accent)**: `bg-velmora-gold text-velmora-dark hover:bg-velmora-gold-light`, rounded-none or `rounded-sm`, `px-8 py-3`, Inter 500, uppercase tracking-wide
- **Secondary (Outlined)**: `border border-velmora-gold text-velmora-gold hover:bg-velmora-gold hover:text-velmora-dark`, same sizing
- **Ghost**: `text-velmora-dark hover:text-velmora-gold`, no border/bg

## Cards
- Product cards: bg-white, subtle shadow on hover `shadow-md`, thin border `border-stone-200`
- Image aspect: 4x3 for product grid, 3x4 for UGC reels
- Hover: second image fade-in, "Add to Cart" button slides up from bottom

## Animations
- Subtle, smooth: `transition-all duration-300 ease-out`
- Nav: transparent → solid bg on scroll (backdrop-blur)
- Hover: image crossfade, button reveal
- No jarring or fast animations

## Do's
- Use warm, editorial imagery with gold jewelry on neutral/dark backgrounds
- Keep product names in uppercase serif with wide tracking
- Use generous whitespace between sections
- Use hairline dividers, not thick borders
- Keep buttons feeling premium — solid gold or outlined gold
- Ensure all text is clearly readable against its background

## Don'ts
- Don't use loud colors, gradients, or discount-style red banners
- Don't use generic e-commerce templates or cluttered layouts
- Don't use thin/light text on dark backgrounds without sufficient contrast
- Don't use rounded/chubby buttons — keep them refined
- Don't over-animate — keep transitions subtle and slow
