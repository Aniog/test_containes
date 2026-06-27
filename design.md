# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `--ink`: #1C1714 (deep warm espresso — primary text, dark sections)
- `--ink-soft`: #4A413A (muted brown-grey for secondary text)
- `--ivory`: #F7F2EA (warm ivory page background)
- `--cream`: #EFE7DA (slightly deeper neutral for cards/sections)
- `--sand`: #E3D6C2 (hairline dividers, soft borders)
- `--gold`: #B08A4F (warm metallic gold — primary accent / buttons)
- `--gold-deep`: #8E6A33 (hover / pressed state for gold)
- `--champagne`: #D9BE8A (lighter gold for subtle highlights)

Tailwind named colors (added via @theme in index.css): `ink`, `ink-soft`, `ivory`, `cream`, `sand`, `gold`, `gold-deep`, `champagne`.

Contrast: ink on ivory = strong. gold on ink = strong. ink-soft on ivory = readable for secondary text. Never use gold text on ivory (low contrast) — use ink for text, gold only for accents/borders/buttons.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Manrope** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Eyebrow / labels: Manrope UPPERCASE `tracking-[0.25em]` text-xs, ink-soft.
- Hero headline: serif, large, light weight, tight leading.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Max content width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-sand` 1px.
- Cards: subtle `shadow-[0_10px_40px_-20px_rgba(28,23,20,0.25)]`, no harsh borders.

## Buttons
- Primary (accent): solid `bg-gold text-ivory`, hover `bg-gold-deep`, uppercase tracking-wide, `px-8 py-3.5 text-xs`, smooth transition.
- Outlined: `border border-ink text-ink`, hover `bg-ink text-ivory`.
- Ghost/text links: underline-on-hover, ink-soft.

## Imagery
- Warm gold jewelry on dark/neutral backgrounds. Editorial close-ups.
- Use the strk image system (data-strk-img / data-strk-bg) with dynamic text references.

## Do's
- Keep palette consistent sitewide.
- Use serif for emotional/editorial moments, sans for utility.
- Large whitespace, restrained accents.
- Subtle transitions (duration-500 ease-out).

## Don'ts
- No bright/discount reds, no neon, no pure black (#000) — use ink.
- No gold text on light backgrounds (low contrast).
- No crowded mobile layouts — single column on mobile, multi-column on desktop.
- No generic e-commerce loudness.
