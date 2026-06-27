# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, generous whitespace, thin hairline dividers, soft shadows, subtle hover transitions. NOT loud, NOT discount-looking.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ink` (espresso near-black, warm): `#1C1714` — primary text, dark sections, footer
- `ink-soft`: `#3A322C` — secondary text on light
- `cream` (warm ivory): `#F7F2EA` — page background
- `sand`: `#EDE3D3` — subtle section backgrounds, dividers tint
- `stone`: `#A89B8A` — muted text / placeholders
- `gold` (warm metallic accent): `#B08A4F` — primary accent, buttons, hairlines
- `gold-deep`: `#8C6A36` — hover / pressed accent
- `champagne`: `#E8D9B5` — soft accent fills, badges
- `line` (hairline): `#E2D8C8` — thin dividers on light

Contrast: ink on cream = strong. gold on ink = strong. Never use stone text on cream without testing; prefer ink-soft for body. On dark (ink) sections use cream text.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600. Product names UPPERCASE with wide letter-spacing (tracking).
- Body & UI: **Inter** (sans-serif), weights 400–600.
- Eyebrow / labels / nav: Inter, UPPERCASE, letter-spacing wide, small size.
- Load via Google Fonts in index.html.

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-28`.
- Container max-width `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.

## Components
- Buttons: solid gold (`bg-gold text-cream hover:bg-gold-deep`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none or slightly rounded (`rounded-sm`). Subtle transition.
- Cards: white/cream surface, soft shadow on hover (`shadow-[0_18px_40px_-24px_rgba(28,23,20,0.35)]`), image zoom on hover.
- Pills (variant selector): `border border-line`, active = `border-gold bg-gold/10 text-ink`.
- Inputs: underline or thin border, cream bg.

## Do's
- Use serif for all headings and product names.
- Keep accent (gold) restrained — buttons, small highlights, hairlines.
- Large editorial imagery with warm tones.
- Uppercase wide-tracked labels for nav and eyebrows.

## Don'ts
- No bright/discount reds or generic e-commerce blues.
- No heavy shadows or thick borders.
- No all-caps body text.
- No low-contrast text (e.g. stone on cream for important content).
