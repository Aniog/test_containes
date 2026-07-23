# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral/editorial cream surfaces. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black espresso, used for footer, dark sections, primary text on light
- `ink-soft`: `#2A2520`
- `cream` (page background): `#F7F3EC` — warm editorial cream
- `cream-deep`: `#EFE8DC`
- `sand`: `#E4D9C7` — soft neutral divider/tile
- `gold` (primary accent): `#B08D57` — refined warm gold (18K plated feel)
- `gold-deep`: `#9A7642`
- `gold-soft`: `#C9A876`
- `stone` (muted text): `#6B6258` — warm gray for secondary text on cream
- `stone-light`: `#8A8178`
- `line` (hairline): `#D9CFC0`

Text on cream: `ink` (#1A1714) and `stone` (#6B6258) — strong contrast.
Text on ink: `cream` (#F7F3EC) and `gold-soft` (#C9A876) — strong contrast.
Accent buttons: `gold` background with `ink` or `cream` text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow/labels: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, muted.

Font sizes: hero h1 `text-5xl md:text-7xl`, section h2 `text-3xl md:text-5xl`, product name `text-base md:text-lg`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): `bg-gold text-ink hover:bg-gold-deep hover:text-cream`, `px-8 py-3.5`, `tracking-[0.15em] uppercase text-xs`, subtle transition.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- On dark sections: `bg-gold text-ink` or `border border-cream/70 text-cream hover:bg-cream hover:text-ink`.

## Cards & Imagery
- Product cards: clean, no border, soft hover lift (`hover:-translate-y-1 transition`), image swap on hover.
- Soft shadows only: `shadow-sm`, `shadow-md` on hover.
- Rounded corners minimal: `rounded-none` for editorial feel, or `rounded-sm` for cards.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, stars.
- Use hairline dividers between sections.
- Large editorial imagery with warm tones.

## Don'ts
- No bright/saturated colors. No neon. No discount-red.
- No heavy shadows or thick borders.
- No generic e-commerce clutter.
- Don't put low-contrast text (e.g. stone on sand). Always verify readability.
