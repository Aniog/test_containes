# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Not loud, not discount, not generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent.

## Color Palette
A deep, refined warm-charcoal base with warm metallic gold accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `ink-soft`: `#2A2520` — slightly lifted dark surface
- `ivory` (light base): `#F7F3EC` — warm off-white page background
- `cream`: `#EFE8DC` — secondary light surface / cards on light
- `sand`: `#E3D9C8` — hairline borders, dividers, muted surfaces
- `gold` (primary accent): `#B08D57` — warm metallic gold for CTAs, accents, links
- `gold-deep`: `#8A6A3B` — hover / pressed state for gold
- `champagne`: `#D9C3A0` — soft gold tint for subtle highlights
- `muted` (text on light): `#6B6258` — warm gray for secondary text
- `muted-dark` (text on dark): `#B8AE9F` — warm muted text on dark surfaces

Semantic token pairs (foreground / background):
- `ink` / `ivory` (dark text on light)
- `ivory` / `ink` (light text on dark)
- `gold` used on `ink` and `ivory` backgrounds for accents (both pass contrast)
- `muted` on `ivory` for secondary text

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28` for editorial breathing room.
- Container max width: `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-sand` (1px).
- Card spacing: `gap-6 md:gap-8`.

## Components
- Buttons: solid gold (`bg-gold text-ink hover:bg-gold-deep hover:text-ivory`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-ivory`). Rounded-none or `rounded-sm`. Uppercase, tracked, `text-xs`, generous padding `px-8 py-4`.
- Cards: `bg-ivory` with subtle hover lift, image swap on hover, quick-add overlay.
- Inputs: underline style or thin border, `border-sand`, focus `border-gold`.
- Accordions: hairline dividers, plus/minus toggle, serif question text.

## Do's
- Use generous whitespace and large imagery.
- Keep accent (gold) restrained — buttons, small highlights, links.
- Use serif for all headings and product names.
- Uppercase + tracked for product names and nav.
- Soft shadows: `shadow-sm`, `shadow-md` only.
- Subtle transitions: `transition-all duration-300 ease-out`.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No rounded-full buttons (except small pills like variant selectors).
- No heavy shadows or gradients.
- No generic e-commerce clutter (badges, sale tags everywhere).
- No low-contrast text. Always pair foreground with explicit background token.
