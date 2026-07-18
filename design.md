# Velmora Fine Jewelry — Design System

## Direction
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. No loud discount cues, no generic e-commerce overload.

## Color Palette
- **Paper** (`bg-paper`) — `#F8F6F2` — primary background, warm off-white/cream.
- **Ink** (`text-ink`) — `#1E1A17` — primary text, deep espresso/charcoal.
- **Gold** (`bg-gold`, `text-gold`) — `#A87E2B` — CTA buttons, accents, stars, hover underlines.
- **Champagne** (`bg-champagne`) — `#E9E0D3` — secondary surfaces, newsletter block, subtle cards.
- **Warm Gray** (`text-stone`) — `#6B655D` — secondary text, captions, muted labels.
- **Hairline** (`border-ink/10`) — `#1E1A17` at 10% opacity — dividers.

Do's:
- Use generous whitespace (sections `py-16 md:py-24`).
- Use thin `border-b border-ink/10` dividers.
- Use uppercase serif product names with `tracking-[0.2em]`.
- Use solid gold buttons with cream text, or outlined gold buttons.

Don'ts:
- No bright saturated primary colors.
- No heavy drop shadows.
- No discount-style badges or countdown timers.
- No black on pure white backgrounds.

## Typography
- **Headings / product names**: `Cormorant Garamond`, serif. Uppercase product names, wide letter-spacing.
- **Body / UI**: `Inter`, sans-serif.

## Elevation & Shape
- Buttons: `rounded-none` or slight `rounded-sm`, uppercase, tracking-wide.
- Cards: flat or `shadow-sm` only on hover.
- Transitions: `transition-all duration-300 ease-out`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` placeholders; no hardcoded Unsplash URLs.
