# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (deep espresso base): `#1C1714` — primary dark surface / text on light
- `ink-soft`: `#2A2320`
- `ivory` (page background): `#F7F3EC` — warm off-white
- `cream`: `#EFE7DA` — secondary surface
- `sand`: `#E2D6C2` — borders / dividers
- `gold` (accent): `#B08A4A` — primary accent (buttons, links, highlights)
- `gold-deep`: `#8C6A33` — hover / pressed accent
- `champagne`: `#D9BE86` — soft metallic highlight
- `muted` (muted text): `#7A6F62` — secondary text on light
- `muted-dark`: `#9A8E80` — secondary text on dark

Semantic token pairs (always set foreground explicitly):
- On ivory: text `ink`, muted text `muted`
- On ink: text `ivory`, muted text `muted-dark`
- On gold: text `ivory` (never light-on-light)
- On cream: text `ink`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, `tracking-[0.2em]`, `text-xs`.
- Section eyebrows: UPPERCASE, `tracking-[0.3em]`, `text-xs`, gold.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-ink/10`, `border-t`.
- Card radius: `rounded-none` (editorial, sharp) or `rounded-sm` max. Keep edges crisp.

## Buttons
- Primary (accent): `bg-gold text-ivory`, uppercase, `tracking-[0.2em]`, `text-xs`, `px-8 py-4`, hover `bg-gold-deep`.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark backgrounds: outlined `border-ivory/70 text-ivory`, hover `bg-ivory text-ink`.
- No rounded pill buttons except variant pills (rounded-full).

## Imagery
- Warm gold jewelry on dark/neutral backgrounds.
- Large editorial full-bleed hero.
- Product cards: square or 4x5, hover reveals second image.
- Reels: 9:16 vertical.

## Do's
- Use generous whitespace.
- Use hairline dividers, not heavy borders.
- Keep accent (gold) restrained — buttons, eyebrows, small highlights.
- Ensure strong contrast: ink on ivory, ivory on ink, ivory on gold.

## Don'ts
- No loud discount badges, no neon colors, no drop shadows on text.
- No generic blue/purple. No `rounded-2xl` chunky cards.
- No low-contrast muted text on light backgrounds (keep `muted` readable).
- No hardcoded arbitrary hex in components — use Tailwind named tokens below.

## Tailwind tokens to add
Extend `theme.extend.colors` with: `ink`, `ink-soft`, `ivory`, `cream`, `sand`, `gold`, `gold-deep`, `champagne`, `muted`, `muted-dark`.
Extend `fontFamily` with `serif: ['Cormorant Garamond', serif]`, `sans: ['Inter', sans-serif]`.
