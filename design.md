# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/ink) paired with warm metallic gold accents and soft neutral editorial tones. Light scheme is the primary storefront (warm ivory/cream), with a deep espresso used for hero/footer blocks.

- `ink` / `espresso`: deep warm near-black `#1C1714` (footer, hero overlays, dark sections)
- `cream`: warm ivory background `#F7F2EA`
- `sand`: soft neutral `#EDE4D6`
- `gold`: warm metallic accent `#B08A4B` (buttons, links, hairlines, price)
- `gold-soft`: lighter metallic `#C9A86A`
- `charcoal`: body text `#2A2520`
- `stone`: muted secondary text `#7A7268`
- `hairline`: thin divider `#E2D8C8`

Tailwind tokens (added to config):
- `ink: '#1C1714'`
- `cream: '#F7F2EA'`
- `sand: '#EDE4D6'`
- `gold: '#B08A4B'`
- `gold-soft: '#C9A86A'`
- `charcoal: '#2A2520'`
- `stone: '#7A7268'`
- `hairline: '#E2D8C8'`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: serif, large (`text-5xl`–`text-7xl`), tight leading.

Fonts loaded via Google Fonts in `index.html`.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container max width `max-w-7xl`, horizontal padding `px-6 md:px-10`.
- Hairline dividers: `border-hairline` / `border-t`.
- Cards: soft shadow `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`, no hard borders.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, uppercase, `tracking-[0.18em]`, `text-xs`, `px-8 py-4`, hover slightly darker gold, subtle transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Ghost/text links: underline-on-hover, gold on hover.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed).
- Product cards: 4:3 or 3:4, hover reveals second image.
- Reel strip: 9:16 vertical cards.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, prices, hairlines, small icons.
- Maintain strong contrast: charcoal text on cream, cream text on ink.
- Use uppercase + wide tracking for product names and nav.

## Don'ts
- No bright/saturated colors. No discount-red badges.
- No generic blue/purple. No heavy shadows or thick borders.
- No centered single-column on desktop where a multi-column editorial layout fits.
- Don't use low-contrast text (e.g. gold text on cream for body copy).
