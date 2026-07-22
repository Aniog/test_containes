# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (deep warm near-black base): `#1C1714` — primary dark surface / nav solid / footer
- `espresso-soft`: `#2A2320` — raised dark surfaces
- `ivory` (warm off-white page background): `#F7F3EC`
- `cream`: `#EFE8DC` — secondary light surface, cards
- `sand`: `#E2D8C7` — borders, dividers, muted tiles
- `gold` (warm metallic accent): `#B08D57` — primary accent, buttons, links, price highlights
- `gold-deep`: `#8A6A3B` — hover / pressed accent
- `ink` (primary text on light): `#2A2320`
- `stone` (muted text on light): `#6B6258`
- `mist` (text on dark): `#E8E0D4`

All text must have strong contrast. On `espresso` use `mist`/`ivory`. On `ivory`/`cream` use `ink`/`stone`. Never use `stone` on `espresso` or `mist` on `ivory`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels / nav: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`.
- Load both via Google Fonts in `index.html`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-white/10` on dark, 1px.
- Card radius: `rounded-none` (editorial, sharp) or `rounded-sm` max. Avoid large rounded corners.

## Buttons
- Primary (accent): solid `bg-gold text-espresso`, uppercase, tracked, `px-8 py-3.5 text-xs`, hover `bg-gold-deep text-ivory`, subtle transition.
- Outline (on light): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Outline (on dark): `border border-mist/40 text-mist`, hover `bg-mist text-espresso`.
- Pill variant buttons (tone selector): `rounded-full border`, active = `bg-ink text-ivory`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` system with descriptive queries referencing nearby text.

## Do's
- Use generous whitespace and hairline dividers.
- Keep accent (gold) restrained — buttons, small highlights, prices.
- Uppercase serif product names with wide tracking.
- Subtle transitions (`transition duration-300`), soft shadows (`shadow-sm`).

## Don'ts
- No large rounded corners, no gradients, no drop shadows on cards.
- No loud colors, no discount badges, no generic e-commerce clutter.
- No low-contrast text. No hardcoded hex outside tailwind config tokens.
