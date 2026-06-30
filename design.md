# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — warm near-black for text and dark sections
- `cream` (page background): `#F7F3EC` — warm off-white / editorial paper
- `sand` (soft neutral): `#EDE6DA` — secondary surfaces, cards
- `stone` (muted text): `#8A8175` — secondary/caption text
- `gold` (accent / metallic): `#B08D57` — primary accent, buttons, links, metallic highlights
- `gold-deep` (hover): `#94703F` — darker gold for hover states
- `champagne` (light accent surface): `#E8D9BE` — newsletter / accent blocks
- `line` (hairline divider): `#D9D0C2` — thin borders

Contrast: ink on cream = strong. gold on ink = strong. stone is used only for secondary text on cream/sand (still legible). Never use stone on gold or gold on champagne without checking contrast.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase sans, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: large serif, `text-5xl` to `text-7xl`, tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container max width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-line`.
- Card gaps: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-gold text-ink` (dark text on gold for contrast), `tracking-[0.15em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep` (keep text ink). Soft shadow on hover.
- Secondary (outlined): `border border-ink text-ink`, hover `bg-ink text-cream`.
- On dark sections: primary `bg-gold text-ink`, secondary `border border-cream/70 text-cream`.

## Cards & Imagery
- Product cards: clean, image-first, no heavy borders. Soft shadow on hover (`shadow-[0_18px_40px_-20px_rgba(26,23,20,0.35)]`).
- Hover reveals second image (crossfade) + quick "Add to Cart" button sliding up.
- Editorial imagery: large, full-bleed where possible, warm-lit.

## Motion
- Subtle, slow transitions (`duration-500`, `ease-out`).
- Hover lifts: `hover:-translate-y-1`.
- No bouncy / loud animations.

## Do's
- Use semantic token pairs (ink/cream, gold/ink).
- Keep accent (gold) restrained — buttons, links, small highlights.
- Uppercase wide-tracked serif for product names.
- Hairline dividers between sections.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No generic blue/purple. No discount-red badges.
- No heavy drop shadows. No rounded-full buttons (use slight radius `rounded-none` or `rounded-sm` for editorial feel).
- No low-contrast text (stone only on light surfaces, never on gold).
