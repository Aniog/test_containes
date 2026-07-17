# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained,
confident, never loud or discount-looking. Generous whitespace, large
editorial imagery, thin hairline dividers, soft shadows, subtle motion.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `espresso` (base dark): `#1C1714` — near-black warm brown for dark sections / footer
- `ink` (primary text on light): `#221E1A` — warm near-black for body text
- `ivory` (page background): `#F7F3EC` — warm soft cream
- `cream` (card / alt surface): `#FBF8F2`
- `sand` (muted borders / dividers): `#E4DBCD`
- `taupe` (muted text): `#8A7F70` — secondary text, captions
- `gold` (accent): `#B08A4B` — warm metallic gold for CTAs, accents, links
- `gold-deep` (accent hover): `#94703A`
- `champagne` (soft accent surface): `#EFE6D2`

Contrast: ink on ivory is high-contrast and accessible. gold on espresso is
readable for accents; for body text on dark use `#EDE6DA` (warm off-white).

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
  Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Eyebrow / micro labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`.

Font sizes: hero h1 `text-5xl md:text-7xl`; section h2 `text-3xl md:text-5xl`;
product name `text-sm md:text-base`.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-sand`.
- Card radius: `rounded-none` (editorial, sharp corners) — keep edges crisp.
  Buttons also sharp-cornered for a refined look.

## Buttons
- Primary (accent): `bg-gold text-ivory` solid, `hover:bg-gold-deep`,
  `px-8 py-3.5 text-xs tracking-[0.2em] uppercase`, sharp corners.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-ivory`.
- On dark sections: `border border-ivory/70 text-ivory hover:bg-gold hover:border-gold`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` stock image system with descriptive
  queries referencing nearby text.

## Motion
- Subtle: `transition-all duration-500 ease-out`. Hover lifts on cards
  (`hover:-translate-y-1`), image cross-fade on product hover. No bouncy
  or flashy animations.

## Do's
- Use serif for all headings and product names.
- Keep generous whitespace; let imagery breathe.
- Use hairline `border-sand` dividers between sections.
- Ensure strong contrast on every surface.

## Don'ts
- No rounded pill buttons or chunky shadows.
- No bright/discount reds or generic e-commerce blues.
- No low-contrast muted text on light backgrounds without explicit color.
- No centered mega-menus; keep nav minimal and editorial.
