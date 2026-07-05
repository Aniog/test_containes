# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking.

## Color Palette
- `ink` (deep warm near-black base): `#1A1714` — primary dark surface / text on light
- `cream` (warm editorial background): `#F6F1E9` — page background
- `sand` (soft neutral panel): `#EDE4D6` — secondary surfaces, dividers
- `gold` (warm metallic accent): `#B08D57` — primary accent, buttons, links
- `gold-deep` (darker metallic for hover): `#8E6F3E`
- `champagne` (light metallic tint): `#D9C3A1`
- `muted` (muted text on cream): `#7A6F62`
- `line` (hairline divider): `#D8CDBD`

Semantic token pairs:
- foreground `#1A1714` on background `#F6F1E9`
- card-foreground `#1A1714` on card `#FFFFFF`
- muted-foreground `#7A6F62` on muted `#EDE4D6`
- primary-foreground `#F6F1E9` on primary `#B08D57`

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.

## Components
- Buttons: solid gold (`bg-gold text-cream hover:bg-gold-deep`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none or slight `rounded-sm`. Uppercase, tracked label.
- Cards: white surface, soft shadow `shadow-[0_10px_40px_-20px_rgba(26,23,20,0.25)]`, hairline border.
- Inputs: underline or thin border, no heavy radius.
- Pills (variant selector): `border border-line`, active = `border-gold bg-gold/10 text-ink`.

## Motion
- Subtle hover transitions (`transition duration-300`).
- Image hover: reveal second image with fade.
- Soft shadows, no harsh drop shadows.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, links.
- Ensure strong contrast: ink text on cream, cream text on ink/gold.

## Don'ts
- No bright/saturated colors. No generic blue/purple.
- No heavy rounded corners (max `rounded-sm`).
- No loud gradients or discount-style badges.
- No low-contrast muted text on light backgrounds without explicit color.
