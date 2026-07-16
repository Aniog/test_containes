# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant,
never loud or discount-looking. Generous whitespace, large editorial imagery,
thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep warm espresso base with warm metallic gold accents and soft ivory neutrals.
Strong contrast for accessibility.

- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections
- `ink` (primary text): `#2A2420` — warm near-black for body text on light
- `cream` (page background): `#F7F3EC` — warm ivory
- `sand` (secondary surface): `#EFE7DA` — soft warm beige for cards/strips
- `stone` (muted text): `#8A7F73` — warm gray for secondary text
- `gold` (accent): `#B08D57` — refined warm metallic gold for buttons, accents, links
- `gold-deep` (accent hover): `#94723F` — deeper gold for hover states
- `champagne` (light accent): `#E8D9BE` — soft champagne for subtle highlights

Tailwind tokens: map these as named colors in `tailwind.config.js`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names in UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero headline: serif, large, light weight, tight leading.

Google Fonts loaded in `index.html`:
Cormorant Garamond (400,500,600) + Inter (300,400,500,600).

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-6 md:px-10`.
- Thin hairline dividers: `border-t border-stone/30` or `border-ink/10`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`.
  Uppercase, wide tracking, medium padding, no border-radius (sharp/editorial) or
  very subtle `rounded-none`. Transition `duration-300`.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- Pill variant buttons (variant selectors): `rounded-full border`, active = `bg-ink text-cream`.

## Cards & Imagery
- Product cards: clean, no heavy borders. Soft shadow on hover (`shadow-lg`).
  Hover reveals second image (fade/slide) + quick "Add to Cart" overlay.
- Editorial imagery: large, full-bleed where possible. Warm gold jewelry on
  dark/neutral backgrounds.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, links.
- Use hairline dividers between sections.
- Ensure strong text contrast (ink on cream, cream on espresso/gold).

## Don'ts
- No loud discount badges, no neon colors, no generic blue/purple.
- No heavy drop shadows or thick borders.
- No rounded chunky buttons — keep editorial/sharp.
- Don't mix many fonts — only Cormorant Garamond + Inter.
