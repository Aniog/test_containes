# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav-solid
- `ink` (primary text): `#2A2520` — warm near-black for body text on light
- `gold` (accent): `#B08D57` — warm metallic gold for CTAs, accents, links hover
- `gold-soft`: `#C9A876` — lighter gold for hover/secondary
- `ivory` (page background): `#F7F3EE` — warm soft ivory
- `cream` (card/section alt): `#EFE8DF` — slightly deeper warm neutral
- `sand` (borders/hairlines): `#E2D8CC` — warm hairline divider color
- `muted` (secondary text): `#8A7F73` — warm muted brown-gray

Tailwind tokens to add: espresso, ink, gold, gold-soft, ivory, cream, sand, muted.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Large editorial sizes.
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), smaller serif.
- Nav links: uppercase, `tracking-[0.2em]`, text-xs, sans-serif.
- Buttons: uppercase, `tracking-[0.15em]`, text-xs/sm.

## Buttons
- Primary (accent): solid `bg-gold text-ivory`, hover `bg-gold-soft`, uppercase tracking, py-3 px-8, no border-radius (sharp/editorial) or very subtle `rounded-none`.
- Secondary/Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Premium feel: generous padding, letter-spacing, subtle transition `duration-300`.

## Layout & Spacing
- Max content width: `max-w-7xl mx-auto px-6 md:px-10`.
- Section vertical padding: `py-20 md:py-28`.
- Hairline dividers: `border-t border-sand`.
- Cards: minimal borders, soft shadow on hover only (`shadow-sm` -> `shadow-md`), `transition duration-500`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial hero (full-bleed).
- Product cards: square or 4x5, hover reveals second image.
- Use `data-strk-img` / `data-strk-bg` tagging system with dynamic text references.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — CTAs, small accents, hover states.
- Generous whitespace between sections.
- Hairline dividers between sections, not heavy borders.
- Uppercase wide-tracked labels for nav, product names, section eyebrows.

## Don'ts
- No rounded-full buttons (too casual). Use sharp/subtle radius.
- No bright/saturated colors. Stay in warm neutral + gold range.
- No heavy shadows. Soft and subtle only.
- No generic e-commerce density — keep it airy and editorial.
- Don't use light text on light backgrounds or dark text on dark backgrounds.
