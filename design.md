# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette
A deep warm espresso base with soft ivory surfaces and a refined gold accent.
Strong contrast for accessibility.

- `espresso` (base dark): `#1C1714`  — deep warm near-black, used for footer/hero overlays
- `ink` (primary text): `#2A2420`    — warm near-black for body text on light surfaces
- `ivory` (page background): `#F7F3EE` — warm soft cream
- `cream` (card surface): `#FBF8F4`   — slightly lighter than page bg
- `sand` (muted borders/dividers): `#E4DBD0`
- `taupe` (muted text): `#8A7E72`
- `gold` (accent): `#B08D57`          — refined antique gold for CTAs, links, accents
- `gold-dark` (accent hover): `#947241`
- `champagne` (soft accent bg): `#EFE6D6`

Tailwind tokens (see tailwind.config.js): `espresso`, `ink`, `ivory`, `cream`,
`sand`, `taupe`, `gold`, `gold-dark`, `champagne`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, small, wide tracking (`tracking-[0.2em]`), `text-xs`.

Fonts loaded via Google Fonts in `index.html`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous whitespace between elements.
- Hairline dividers: `border-sand` / `border-t`.

## Buttons
- Primary (accent): solid `bg-gold text-ivory`, hover `bg-gold-dark`,
  `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, rounded-none (sharp,
  editorial) or `rounded-sm`. Subtle transition `duration-300`.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- No heavy shadows on buttons; soft shadows only on cards.

## Cards & Imagery
- Product cards: `bg-cream`, hairline border, soft shadow on hover
  (`shadow-sm` -> `shadow-md`), image zoom on hover (`scale-105` over 700ms).
- Hover reveals second product image (cross-fade).
- Editorial imagery: large, full-bleed where possible.

## Motion
- Subtle, slow transitions (`duration-300` to `duration-700`).
- Hover lifts and image zooms only.
- No bouncy or loud animations.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — CTAs, small details, stars.
- Ensure strong text contrast (ink on ivory, ivory on espresso).
- Uppercase + wide tracking for product names and nav.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons. No heavy drop shadows.
- No generic e-commerce clutter (badges, loud banners).
- Don't mix serif and sans for the same role.
