# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, nav solid
- `ink` (primary text): `#2A2520` — warm near-black for body text on light
- `gold` (accent): `#B08A4A` — refined warm metallic gold for buttons, links, accents, dividers
- `gold-soft`: `#C9A86A` — lighter gold for hover / highlights
- `ivory` (page background): `#F7F3EC` — warm soft cream
- `sand` (secondary surface): `#EFE8DC` — slightly deeper cream for cards / alternating sections
- `stone` (muted text): `#8A8074` — warm gray for secondary text
- `line` (hairline): `#E2D9C9` — warm hairline divider

All text on dark `espresso` uses `ivory`/`gold`. All text on light `ivory`/`sand` uses `ink`/`stone`. Strong contrast maintained.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`, `stone` or `gold`.
- Hero headline: Cormorant Garamond, large (`text-5xl`–`text-7xl`), tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): `bg-gold text-ivory` solid, `hover:bg-gold-soft`, `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, subtle transition.
- Outline: `border border-ink text-ink hover:bg-ink hover:text-ivory`.
- On dark sections: `bg-gold text-espresso` or outline `border-ivory text-ivory`.

## Cards & Imagery
- Product cards: `bg-ivory`, image square or 4x5, hover reveals second image (opacity swap), quick "Add to Cart" button slides up on hover.
- Soft shadows: `shadow-sm` only, restrained.
- Rounded corners: minimal — `rounded-none` for editorial feel, or `rounded-sm` at most.

## Do's
- Use Cormorant Garamond for all serif headings and product names.
- Keep accent gold restrained — buttons, small labels, hairline accents.
- Use warm ivory/sand backgrounds; never pure white or pure black.
- Uppercase wide-tracked labels for eyebrows and product names.

## Don'ts
- No bright/saturated colors. No pure `#000` or `#fff`.
- No heavy shadows or thick borders.
- No rounded-full buttons (keep editorial/rectangular).
- No generic e-commerce clutter — keep whitespace generous.
