# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, generous whitespace, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base with warm metallic gold accents.

- `ink` (base dark): `#1A1714` — near-black warm brown, used for footer / dark sections
- `espresso`: `#2A2420` — slightly lighter warm dark
- `cream` (page background): `#F7F3EC` — warm off-white
- `sand`: `#EDE6DA` — soft neutral for cards / strips
- `stone`: `#C9BFB0` — muted neutral for borders / dividers
- `gold` (primary accent): `#B08D57` — warm metallic gold (buttons, accents)
- `gold-deep`: `#8A6A3B` — hover / deeper gold
- `charcoal` (text): `#2A2420` — primary text on light
- `muted` (secondary text): `#7A6F62` — warm gray for body/secondary

Tailwind named colors to add: `ink`, `espresso`, `cream`, `sand`, `stone`, `gold`, `gold-deep`, `charcoal`, `muted`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, small, letter-spaced.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-stone/60`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, hover `bg-gold-deep`, uppercase, letter-spaced, `px-8 py-3.5`, soft transition.
- Outlined: `border border-charcoal text-charcoal`, hover `bg-charcoal text-cream`.
- No harsh rounded corners — use `rounded-none` or subtle `rounded-sm` for editorial feel.

## Imagery
- Large editorial imagery, warm-lit gold jewelry on dark/neutral backgrounds.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.

## Do's
- Keep palette consistent sitewide.
- Use serif for all headings and product names.
- Maintain strong contrast (charcoal on cream, cream on ink).
- Subtle, slow transitions (200–400ms ease).

## Don'ts
- No loud discount-looking reds or generic e-commerce blues.
- No heavy shadows; keep them soft (`shadow-sm`).
- No rounded-full buttons (use sharp/subtle corners).
- Don't mix serif weights carelessly.
