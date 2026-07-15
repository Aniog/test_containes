# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking.

## Color Palette
A deep warm-charcoal base with warm metallic gold accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `ink-soft`: `#2A2520` — slightly lifted dark surface
- `cream` (light base): `#F7F3EC` — warm ivory page background
- `cream-deep`: `#EFE8DC` — slightly deeper neutral for cards/strips
- `sand`: `#E3D9C7` — soft warm neutral, dividers, secondary surfaces
- `gold` (primary accent): `#B08D57` — warm metallic gold for buttons, links, accents
- `gold-deep`: `#9A7544` — hover / pressed state for gold
- `gold-soft`: `#C9A876` — lighter gold for subtle accents
- `charcoal` (text on light): `#2A2520` — primary body text on cream
- `stone` (muted text): `#7A7268` — secondary/muted text on cream
- `mist` (muted text on dark): `#B8AEA2` — secondary text on ink

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero display sizes use serif at large scale with tight leading.

## Spacing & Layout
- Generous whitespace. Section vertical padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-6 md:px-10`.
- Thin hairline dividers: `border-sand` at 1px.

## Components
- Buttons: solid gold (`bg-gold text-cream hover:bg-gold-deep`) or outlined (`border border-charcoal text-charcoal hover:bg-charcoal hover:text-cream`). Rounded-none (sharp) or minimal radius. Uppercase tracking-wide labels, medium weight.
- Cards: `bg-white` or `bg-cream`, soft shadow `shadow-sm`, hairline borders. Hover: subtle lift + image crossfade.
- Pills (variant selector): `border border-stone` selected `bg-charcoal text-cream border-charcoal`.
- Inputs: underline style or thin border, no heavy radius.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, stars.
- Use warm ivory backgrounds for light sections, ink for dramatic/editorial sections.
- Ensure strong contrast: charcoal text on cream, cream text on ink.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows or rounded chunky buttons.
- No generic e-commerce clutter — keep it editorial and spacious.
- Don't mix serif and sans for the same role.
