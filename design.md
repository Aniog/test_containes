# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, elegant, never loud or discount-looking.

## Color Palette
A deep, refined warm-charcoal base with warm metallic gold accents and soft ivory neutrals.

- `ink` (base dark): `#1A1714` — warm near-black, used for dark sections, footer, hero overlays
- `ink-soft`: `#2A2520` — slightly lifted dark surface
- `ivory` (light base): `#F7F3EC` — warm cream page background
- `cream`: `#EFE8DC` — secondary light surface / cards
- `sand`: `#E3D9C8` — borders, dividers, muted surfaces
- `gold` (primary accent): `#B08D57` — warm metallic gold for buttons, links, accents
- `gold-deep`: `#8A6A3B` — hover / pressed gold
- `stone` (muted text): `#6B6258` — secondary text on light
- `stone-light`: `#9A9085` — tertiary text / placeholders
- `champagne`: `#C9A86A` — lighter gold for fine details

All text on dark (`ink`) surfaces uses `ivory`/`cream`. All text on light (`ivory`/`cream`) surfaces uses `ink`/`stone`. Contrast verified for accessibility.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`).
- Nav links & labels: UPPERCASE, `text-xs`, `tracking-[0.18em]`.
- Hero headline: serif, large, `leading-[1.05]`.

## Spacing & Layout
- Generous whitespace. Section vertical padding: `py-20 md:py-28`.
- Container max-width: `max-w-7xl`, horizontal padding `px-5 md:px-8`.
- Hairline dividers: `border-sand` / `border-ink/10`, `border-t`.

## Components
- Buttons: solid gold (`bg-gold text-ink hover:bg-gold-deep hover:text-ivory`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-ivory`). Rounded-none (sharp editorial) or `rounded-sm`. Subtle transition `duration-300`.
- Cards: `bg-ivory`, soft shadow `shadow-[0_10px_40px_-20px_rgba(26,23,20,0.25)]`, hairline border optional.
- Inputs: underline style or thin border, `bg-transparent`, focus ring gold.
- Pills (variant selector): `rounded-full border`, active = `bg-ink text-ivory`.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Large editorial imagery. 9:16 reels, 4:5 / 3:4 product, 16:9 hero.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, links.
- Use hairline dividers between sections.
- Uppercase + wide tracking for product names and nav.

## Don'ts
- No bright/discount reds or generic e-commerce blues.
- No heavy shadows or rounded chunky buttons.
- No low-contrast text (e.g. stone on sand, gold on ivory for body text).
- No centered mobile-stacked layouts forced onto desktop.
