# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant, never loud or discount-looking. Generous whitespace, large editorial imagery, thin hairline dividers, soft shadows, subtle hover transitions.

## Color Palette
A deep warm-charcoal base with warm metallic gold accents and soft ivory neutrals. Strong contrast for accessibility.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `ink-soft`: `#2A2520` — slightly lifted dark surface
- `cream` (light base): `#F7F3EC` — warm ivory page background
- `cream-deep`: `#EFE8DC` — slightly deeper neutral for cards/strips
- `sand`: `#E3D9C8` — warm neutral border / divider tone
- `gold` (primary accent): `#B08D57` — refined warm gold for buttons, accents, links
- `gold-deep`: `#8A6D3E` — hover / pressed gold
- `gold-soft`: `#C9A876` — lighter gold for subtle accents
- `charcoal` (text on light): `#2A2520` — primary body text on cream
- `stone` (muted text): `#6B6258` — secondary text on cream
- `mist` (muted text on dark): `#B8AE9F` — secondary text on ink

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Hero display sizes use serif at large scale. Letter-spacing on uppercase labels: `tracking-[0.2em]` to `tracking-[0.3em]`.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl` with `px-6 md:px-10`.
- Hairline dividers: `border-sand` at `border-t`.

## Buttons
- Primary (solid): `bg-gold text-cream` hover `bg-gold-deep`, uppercase tracking, `py-3.5 px-8`, subtle transition.
- Secondary (outlined): `border border-ink text-ink` hover `bg-ink text-cream`.
- Pill variant buttons for selectors: rounded-full, thin border.

## Shadows
- Soft, subtle: `shadow-[0_10px_40px_-15px_rgba(26,23,20,0.25)]` for cards/modals.
- Avoid hard shadows.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small labels, hairline accents.
- Use warm ivory backgrounds for light sections, ink for dark sections.
- Ensure strong text contrast on every surface.

## Don'ts
- No bright/saturated colors. No pure black or pure white.
- No heavy shadows or thick borders.
- No generic e-commerce loudness (badges, red sale tags, etc.).
- No low-contrast text (e.g. gold text on cream without sufficient weight).
