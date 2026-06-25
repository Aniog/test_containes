# Velmora Fine Jewelry — Visual Design System

Quiet-luxury, warm, editorial demi-fine jewelry storefront. Premium but
accessible. NOT loud, NOT discount-looking, NOT generic e-commerce.

## Color Palette (one confident direction: warm editorial — deep espresso base + warm gold accent + soft ivory)

- `ink` (deep espresso near-black, warm): `#1C1714` — primary dark surface / text on light
- `espresso` (slightly lighter warm dark): `#2A2320`
- `ivory` (warm off-white background): `#F7F3EC`
- `cream` (card / panel surface): `#FBF8F2`
- `sand` (muted warm neutral, dividers/borders): `#E4DBCE`
- `taupe` (secondary text on light): `#7A6F62`
- `gold` (warm metallic accent — primary brand accent): `#B08A4F`
- `gold-deep` (darker gold for hover/contrast on light): `#8E6A36`
- `champagne` (soft gold tint surface): `#EFE6D2`

Text contrast rules:
- On `ivory`/`cream`: use `ink` for headings/body, `taupe` for secondary.
- On `ink`/`espresso`: use `ivory`/`cream` for text, `gold` for accents.
- Never use `taupe` text on `ink` (too low contrast) — use `sand` or `ivory` at reduced opacity.
- `gold` text only on dark backgrounds or as small accents; for gold buttons use `gold` bg with `ink` text.

## Typography

- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: uppercase, `tracking-[0.2em]`, small size (`text-xs`).
- Hero headline: large serif, tight leading.

## Spacing & Layout

- Generous whitespace. Section vertical padding: `py-20 md:py-28`.
- Container max-width: `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-ink/10`, 1px.

## Components / Style

- Buttons: solid `gold` bg + `ink` text, uppercase, tracked, `rounded-none`
  (sharp editorial) OR subtle `rounded-sm`. Hover: `gold-deep`. Outlined
  variant: `border-ink` text `ink`, hover fill `ink` text `ivory`.
- Cards: `cream` surface, soft shadow `shadow-sm`, hairline border optional.
  Hover: image crossfade to second image, soft lift.
- Pills (variant selector): `border-sand`, selected = `ink` bg + `ivory` text.
- Subtle transitions: `transition duration-300 ease-out`.
- Soft shadows only: `shadow-sm`, `shadow-md`. No harsh shadows.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, dividers.
- Large editorial imagery with warm tones.
- Hairline dividers between sections.

## Don'ts
- No bright/saturated colors. No pure black on pure white.
- No rounded-full chunky buttons. No discount badges / red sale colors.
- No generic blue links. No heavy drop shadows.
- Don't mix serif and sans for the same role.
