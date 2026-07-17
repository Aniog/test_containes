# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm near-black/espresso) paired with warm metallic gold accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `espresso`: `#2A2520` — slightly lighter warm dark for cards on dark
- `ivory`: `#F7F3EC` — warm off-white page background
- `cream`: `#EFE8DC` — secondary warm neutral
- `sand`: `#E3D8C6` — borders, dividers, muted surfaces
- `gold` (accent): `#B08A4B` — warm metallic gold for buttons, links, accents
- `gold-deep`: `#8A6A33` — hover / pressed gold
- `gold-soft`: `#C9A86A` — lighter gold for highlights
- `charcoal`: `#3A332C` — body text on light
- `muted`: `#8A8074` — secondary text on light

Tailwind tokens (added to tailwind.config.js `theme.extend.colors`):
- `ink`, `espresso`, `ivory`, `cream`, `sand`, `gold`, `gold-deep`, `gold-soft`, `charcoal`, `muted`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Loaded via Google Fonts in index.html.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase sans, `tracking-[0.2em]`, `text-xs`.
- Hero headline: serif, large (`text-5xl`–`text-7xl`), tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-sand`.
- Cards: subtle shadow `shadow-sm`, hover `shadow-md`, rounded-none or `rounded-sm` (editorial, minimal rounding).

## Buttons
- Primary (accent): solid `bg-gold text-ink` (or `text-ivory`), `tracking-[0.18em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`. Minimal rounding (`rounded-none`).
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-ivory`.
- On dark backgrounds: primary `bg-gold text-ink`, secondary `border border-ivory/40 text-ivory`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use the strk image system (`data-strk-img` / `data-strk-bg`) with descriptive queries referencing nearby text.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, stars.
- Use hairline dividers and whitespace to separate sections.
- Ensure strong text contrast (ivory on ink, charcoal on ivory).

## Don'ts
- No bright/saturated colors. No generic blue/purple.
- No heavy shadows or thick borders.
- No rounded-full buttons (editorial = sharp/minimal).
- No low-contrast text (e.g. gold text on ivory is borderline — use ink/charcoal for body).
