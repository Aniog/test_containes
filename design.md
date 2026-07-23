# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, sitewide.

- `ink` (base dark): `#1A1714` — warm near-black for text, footer, dark sections
- `cream` (base light): `#F7F3EC` — warm off-white page background
- `sand`: `#EDE6DA` — secondary surface, dividers, cards
- `gold`: `#B08A4F` — primary accent (buttons, links, price highlights, hairlines)
- `gold-deep`: `#8A6A36` — hover / pressed accent
- `champagne`: `#D9C29A` — soft metallic for subtle accents
- `muted`: `#8A8278` — secondary text on light
- `muted-dark`: `#A89F94` — secondary text on dark

Tailwind config tokens:
- `ink`, `cream`, `sand`, `gold`, `gold-deep`, `champagne`, `muted`, `muted-dark`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-ink/10` or `border-gold/30`, 1px.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`. Rounded-none or slightly rounded. Uppercase, tracked, small text. Subtle transition.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- Premium feel: no heavy shadows, no gradients.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial hero. 9:16 reels. Square-ish product cards (4:5 or 1:1).

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, links, small details.
- Ensure strong contrast: ink text on cream, cream text on ink.
- Hairline dividers between sections.

## Don'ts
- No bright/discount reds or generic e-commerce blues.
- No heavy drop shadows or gradients.
- No lowercase product names — always uppercase + tracked.
- No low-contrast text (e.g. gold text on cream without weight).
