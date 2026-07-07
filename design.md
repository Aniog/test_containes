# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base (warm charcoal/espresso) paired with warm metallic gold accents and soft neutral editorial backgrounds.

- `ink` (base dark): `#1C1A17` — warm near-black, used for footer, dark sections, text on light
- `espresso`: `#2A2622` — slightly lighter warm dark for nav solid
- `cream`: `#F7F3EC` — primary page background, warm off-white
- `sand`: `#EDE6DA` — secondary surface, cards, dividers base
- `stone`: `#B8AE9E` — muted neutral for secondary text / hairlines
- `gold`: `#B08D57` — primary accent (warm metallic gold), buttons, links, highlights
- `gold-deep`: `#8A6A3B` — hover / pressed state for gold
- `champagne`: `#D9C7A3` — soft gold tint for subtle backgrounds

Text contrast rules:
- On `cream`/`sand`: use `ink` for primary text, `stone` for secondary. Never use gold for body text (low contrast).
- On `ink`/`espresso`: use `cream` for primary text, `sand`/`champagne` for secondary. Gold for accents/links only.
- Gold buttons: `gold` background with `cream`/`ink` text — use `ink` text on gold for strong contrast.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), serif.
- Nav links: uppercase, `text-xs`, `tracking-[0.18em]`, sans-serif.
- Eyebrow labels: uppercase, `text-xs`, `tracking-[0.25em]`, gold.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28` for editorial sections.
- Container: `max-w-7xl mx-auto px-6 md:px-10`.
- Generous gaps between grid items: `gap-6 md:gap-8`.
- Hairline dividers: `border-stone/30` or `border-ink/10`.

## Buttons
- Primary (accent): solid `gold` bg, `ink` text, uppercase, tracking-wide, `px-8 py-3.5`, hover `gold-deep`, subtle transition.
- Outlined: `border border-ink/30`, `ink` text, hover `bg-ink text-cream`.
- No rounded-full chunky buttons; use `rounded-none` or `rounded-sm` for editorial feel.

## Cards & Imagery
- Product cards: clean, no heavy borders. Soft shadow on hover (`shadow-md`). Image square or 4:5.
- Hover: reveal second image (fade), show "Add to Cart" overlay button.
- Editorial images: large, full-bleed where possible.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small labels, links.
- Use generous whitespace.
- Hairline dividers between sections.

## Don'ts
- Don't use bright/saturated colors.
- Don't use gold for body text on light backgrounds (low contrast).
- Don't use heavy shadows or thick borders.
- Don't use rounded-full buttons.
- Don't stack single-column layouts on desktop.
