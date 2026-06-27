# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (deep espresso near-black, warm): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `ivory` (warm off-white background): `#F7F3EC` — page background
- `cream`: `#EFE7DA` — alt section background, cards
- `sand`: `#E2D6C3` — borders, dividers, muted surfaces
- `gold` (warm metallic accent): `#B08A4F` — primary accent (buttons, links, highlights)
- `gold-deep`: `#8C6A36` — hover/pressed accent
- `champagne`: `#D9BE8A` — soft gold for subtle highlights
- `muted` (muted text): `#8A7F73` — captions, meta text
- `white`: `#FFFFFF` — cards, surfaces on dark

Contrast rules: ink on ivory/cream = strong. gold on ink = strong. Never use gold text on cream/sand (low contrast) — use ink instead. On dark (ink) backgrounds use ivory/champagne text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero headline: Cormorant Garamond, large, light weight, generous line-height.
- Eyebrow/labels: Inter, UPPERCASE, `tracking-[0.25em]`, `text-xs`, muted color.
- Load both via Google Fonts in index.html.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 sm:px-8`.
- Hairline dividers: `border-t border-sand`.
- Card gaps: `gap-6 md:gap-8`.

## Buttons (premium feel)
- Primary (accent): solid `bg-gold text-ink` (dark text on gold for contrast), `tracking-[0.18em] uppercase text-xs`, `px-8 py-4`, hover `bg-gold-deep`. Subtle transition.
- On dark sections: `bg-gold text-ink` still works; or outlined `border border-champagne text-ivory hover:bg-champagne hover:text-ink`.
- Rounded: `rounded-none` (sharp editorial) or `rounded-full` for pills. Commit to sharp `rounded-none` for primary buttons, `rounded-full` for variant pills.

## Cards & Imagery
- Product cards: ivory/white background, hairline border, large image area (4:5 portrait), name + price below. Hover: reveal second image (fade), show "Add to Cart" overlay button.
- Soft shadows only: `shadow-sm`, `shadow-md` on hover.
- Editorial imagery: warm-lit, gold jewelry on dark/neutral backgrounds.

## Do's
- Use Cormorant Garamond for all serif headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, links.
- Use hairline sand dividers between sections.
- Generous whitespace; let imagery breathe.
- Uppercase wide-tracked labels for eyebrows and product names.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No gold text on cream/sand backgrounds (low contrast).
- No heavy shadows or rounded chunky buttons.
- No generic e-commerce clutter; keep it editorial and calm.
- Don't mix serif weights chaotically — stick to 400/500/600.
