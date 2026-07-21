# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep, refined warm-neutral base with a soft champagne-gold accent. Editorial and warm, flatters gold jewelry.

- `ink` (base dark / text): `#1C1A17` — near-black warm ink for text and dark sections
- `cream` (page background): `#F7F3EC` — warm off-white editorial background
- `sand` (secondary surface): `#EFE8DC` — soft warm sand for cards / strips
- `stone` (muted text / borders): `#8A8276` — warm muted stone for secondary text
- `hairline` (dividers): `#E2D9CB` — thin warm hairline borders
- `gold` (accent): `#B08D57` — refined champagne gold for buttons, links, accents
- `gold-deep` (accent hover): `#94723F` — deeper gold for hover states
- `champagne` (soft accent surface): `#E7D6B8` — soft champagne for newsletter block

Text contrast: ink on cream/sand = strong. gold on ink = strong. Never use gold text on cream (low contrast) — use ink for body text on light surfaces.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif), weights 400–600.
- Body & UI: **Inter** (clean sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, small, `tracking-[0.2em]`, `text-xs`.
- Hero headline: serif, large, `text-5xl` to `text-7xl`, leading tight.

## Spacing & Layout
- Generous vertical rhythm: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-hairline`.
- Cards: subtle `shadow-sm`, `border border-hairline`, rounded-none or `rounded-sm` (sharp editorial feel).

## Buttons
- Primary (accent): solid `bg-ink text-cream` OR `bg-gold text-white`. Hover: `bg-gold-deep`.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Pill variant buttons (product variants): `border border-hairline`, active = `border-ink bg-ink text-cream`.
- All buttons: uppercase, `tracking-[0.18em]`, `text-xs`, `py-3 px-8`, transition `duration-300`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero, full-bleed.
- Product cards: 4:3 or 1:1, hover reveals second image.
- UGC reel: vertical 9:16 cards.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small labels, links.
- Use hairline dividers between sections.
- Generous whitespace.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No rounded-full buttons (except small icon buttons).
- No heavy shadows. No gradients except very subtle.
- No gold body text on light backgrounds (low contrast).
