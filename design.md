# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm espresso/charcoal) paired with warm metallic gold accents and soft neutral editorial backgrounds. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black for text, dark sections, footer
- `ink-soft`: `#2B2622` — slightly lifted dark surface
- `cream` (page background): `#F7F3EC` — warm editorial off-white
- `sand`: `#EDE6DA` — secondary warm neutral surface
- `stone`: `#8A8178` — muted secondary text
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents
- `gold-deep`: `#9A7541` — hover/pressed gold
- `champagne`: `#D9C7A3` — soft gold tint for subtle backgrounds

Text on cream/ink: use `ink` for headings/body on light surfaces; `cream` for text on dark surfaces. Gold is reserved for accents, buttons, links, and small highlights — never large text blocks.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Eyebrow / label text: UPPERCASE, `text-xs`, `tracking-[0.25em]`, `text-stone`.
- Headings: generous size, tight leading (`leading-[1.05]`).

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-ink/10`.
- Card spacing: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-gold text-cream`, `px-8 py-3.5`, `text-xs tracking-[0.2em] uppercase`, hover `bg-gold-deep`. Rounded-none (sharp) for editorial feel.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- Minimal text link: `text-ink` with `border-b border-gold` underline on hover.

## Cards & Imagery
- Product cards: clean, no border, soft hover lift (`hover:-translate-y-1 transition`), image swap on hover.
- Image aspect ratios: product 4x5, hero 16x9, category tiles 4x5, reels 9x16.
- Shadows: `shadow-[0_10px_40px_-15px_rgba(26,23,20,0.25)]` only where needed.

## Do's
- Use Cormorant Garamond for all serif headings and product names.
- Keep gold restrained — accents only.
- Use hairline dividers between sections.
- Generous whitespace; let imagery breathe.
- Uppercase wide-tracked labels for eyebrows and product names.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded chunky buttons (use sharp/minimal radius).
- No heavy drop shadows on cards.
- No generic e-commerce clutter (badges, sale tags, busy banners).
- Never use low-contrast text (e.g. gold text on cream without weight).
