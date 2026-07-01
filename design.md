# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (one confident direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `ivory` (page background): `#F7F3EC` — warm soft ivory
- `cream` (alt surface): `#EFE8DC`
- `espresso` (primary dark / text): `#2A211B` — deep warm brown-black
- `espresso-soft`: `#4A3F37`
- `gold` (accent): `#B08A4F` — refined warm metallic gold
- `gold-deep`: `#8C6A36` — hover / pressed
- `stone` (muted text / borders): `#9A8E7E`
- `hairline` (dividers): `#E2D9CB`

Semantic token pairs (Tailwind):
- text on ivory: `text-espresso`
- text on espresso: `text-ivory`
- accent button: `bg-gold text-ivory` hover `bg-gold-deep`
- outlined button: `border border-espresso text-espresso` hover `bg-espresso text-ivory`
- muted text: `text-stone`
- hairline divider: `border-hairline`

Contrast: espresso (#2A211B) on ivory (#F7F3EC) = strong. ivory on espresso = strong. gold (#B08A4F) used for accents/buttons with ivory text — readable. Never use stone text on cream without checking; prefer espresso for body.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Product names UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Body & UI: **Inter** (sans-serif), weights 300/400/500/600.
- Eyebrow / labels / nav: Inter, UPPERCASE, `tracking-[0.2em]`, `text-xs`, `text-stone`.
- Hero headline: Cormorant Garamond, large (`text-5xl`–`text-7xl`), tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-hairline`.
- Cards: subtle, no heavy borders; soft shadow `shadow-[0_10px_40px_-20px_rgba(42,33,27,0.25)]` on hover.

## Buttons
- Primary (accent): `bg-gold text-ivory tracking-[0.15em] uppercase text-xs px-8 py-4 hover:bg-gold-deep transition-colors`.
- Outlined: `border border-espresso text-espresso uppercase tracking-[0.15em] text-xs px-8 py-4 hover:bg-espresso hover:text-ivory transition-colors`.
- Rounded: none (sharp/editorial) or very subtle. Use square corners for editorial feel.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial close-ups.
- Use `data-strk-img` / `data-strk-bg` stock image system with dynamic text references.

## Do's
- Generous whitespace, hairline dividers, restrained gold accent.
- Uppercase serif product names with wide tracking.
- Subtle transitions (colors, opacity), soft shadows on hover.

## Don'ts
- No loud gradients, no discount badges, no generic e-commerce clutter.
- No low-contrast text (stone on cream is risky — use espresso for body text).
- No rounded chunky buttons; keep editorial/sharp.
- Do not hardcode hex in components — use Tailwind named colors above.
