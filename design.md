# Velmora Fine Jewelry — Visual Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, not loud. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `ink` (espresso near-black, warm): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `cream` (warm ivory background): `#F7F2EA` — page background
- `sand`: `#EDE3D3` — subtle surfaces, dividers tint
- `stone`: `#8A7E6E` — muted/placeholder text
- `gold` (warm metallic accent): `#B08D57` — primary accent, buttons, links hover
- `gold-deep`: `#8C6E3F` — hover/pressed accent
- `champagne`: `#D9C3A0` — soft accent fills, badges
- `line` (hairline): `#E2D8C8` — dividers/borders on light

Contrast: ink on cream = strong. gold on ink = strong. stone used only for muted secondary text, never for primary content.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans), weights 400–600.
- Product names: UPPERCASE, wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: sans, uppercase, `tracking-[0.14em]`, text-sm.
- Eyebrow labels: sans, uppercase, `tracking-[0.2em]`, text-xs, gold.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.

## Buttons
- Primary (accent): `bg-gold text-cream hover:bg-gold-deep`, uppercase, tracking-wide, `px-8 py-3.5`, text-sm, transition.
- Outlined: `border border-ink text-ink hover:bg-ink hover:text-cream`.
- Ghost/link: gold underline on hover.

## Cards & Imagery
- Product cards: white/cream surface, image area `aspect-[4/5]`, hover reveals second image (opacity swap), quick "Add to Cart" slides up.
- Soft shadow only on hover: `shadow-[0_18px_40px_-24px_rgba(28,23,20,0.35)]`.
- Rounded corners minimal: `rounded-none` for editorial feel; small `rounded-sm` for pills.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, eyebrows, small icons.
- Generous whitespace between sections.
- Hairline dividers between sections.

## Don'ts
- No loud discount badges or red sale colors.
- No generic blue/purple. No pure black on pure white.
- No heavy shadows on resting elements.
- No rounded-full buttons (use subtle radius).
- Don't use stone for primary readable text.
