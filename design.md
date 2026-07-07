# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep refined base (warm espresso/charcoal) with warm metallic gold accents and soft neutral cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1C1714` — warm near-black espresso, used for text on light surfaces and for dark sections
- `cream` (light surface): `#F7F2EA` — warm off-white / editorial paper
- `sand` (secondary surface): `#EFE7DA` — soft warm neutral
- `gold` (accent): `#B08A4B` — refined warm metallic gold (buttons, links, accents)
- `gold-soft`: `#C9A86A` — lighter gold for hovers / hairlines
- `stone` (muted text): `#6B6258` — warm gray for secondary text on cream
- `line` (hairline): `#E2D8C8` — warm hairline divider on light surfaces

Pairings (always set explicit foreground on backgrounds):
- cream / ink text
- sand / ink text
- ink (dark section) / cream text
- gold button / cream text (or ink text on gold-soft)

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, muted.

Font sizes: use Tailwind scale. Hero headline `text-5xl md:text-7xl`. Section titles `text-3xl md:text-5xl`.

## Spacing & Layout
- Generous vertical rhythm: sections `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, `px-8 py-3.5`, `tracking-[0.15em] uppercase text-xs`, hover `bg-gold-soft`, subtle transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-cream`.
- Pill (variant selector): `border border-line rounded-full px-5 py-2 text-xs uppercase tracking-wider`, active `bg-ink text-cream border-ink`.

## Cards & Imagery
- Product cards: clean, image-first, `bg-cream`. Hover reveals second image (fade), quick "Add to Cart" button slides up.
- Soft shadows: `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`.
- Rounded corners: minimal — `rounded-none` for editorial feel, or `rounded-sm` for cards.

## Motion
- Subtle, slow transitions (`duration-500`, `ease-out`). Hover image crossfade. No bouncy/loud animations.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, links, small details.
- Ensure strong contrast: ink text on cream/sand, cream text on ink.
- Uppercase + wide tracking for product names and eyebrow labels.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No generic e-commerce clutter. No discount badges.
- No low-contrast text. Never put stone text on sand without checking.
- Don't mix multiple accent colors — gold is the only accent.
