# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette — "Warm Editorial"
A deep refined base with warm metallic gold accents on a soft warm-neutral canvas.

- `canvas` (page bg): `#F7F3EC` — warm ivory
- `ink` (primary text): `#1C1A17` — near-black warm
- `espresso` (deep base / footer / nav solid): `#211E1A` — warm near-black
- `gold` (accent / metallic): `#B08A4B` — refined antique gold
- `gold-soft` (hover / fills): `#C9A86A`
- `stone` (muted text / borders): `#8A8276` — warm taupe
- `line` (hairline dividers): `#E2D9CB` — warm sand
- `cream` (card surface): `#FBF8F2`

Contrast: ink on canvas and gold on espresso both pass WCAG AA. Muted `stone` used only for secondary text, never for primary values.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, text-xs.
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.
- Cards: `bg-cream`, soft shadow `shadow-[0_10px_40px_-20px_rgba(28,26,23,0.25)]`.

## Buttons
- Primary (accent): `bg-gold text-espresso` solid, uppercase tracking, hover `bg-gold-soft`.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-canvas`.
- Full-width accent on PDP.

## Imagery
Warm gold jewelry on dark/neutral backgrounds. Large editorial hero. 9:16 reels. Square-ish product cards (4:5).

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, stars.
- Generous whitespace between sections.
- Hairline dividers between sections.

## Don'ts
- No bright/discount reds or generic e-commerce blues.
- No loud gradients.
- No low-contrast muted text for important values.
- No all-caps sans-serif for product names (use serif uppercase).
