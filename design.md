# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color. Subtle hover transitions, soft shadows.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory neutrals)
- `ivory`        #F7F3EC  — page background (warm off-white)
- `cream`        #EFE8DC  — secondary surface / cards
- `sand`         #E2D8C6  — borders, hairline dividers
- `espresso`     #2A211A  — primary dark text / dark sections (deep warm brown-black)
- `cocoa`        #4A3F33  — secondary text
- `taupe`        #8A7C6A  — muted text / placeholders
- `gold`         #B08D57  — primary accent (warm metallic gold)
- `gold-deep`    #9A7544  — hover / pressed accent
- `champagne`    #D9C7A3  — soft accent fills

All text on `ivory`/`cream` uses `espresso`/`cocoa`/`taupe` for strong contrast.
Accent `gold` text only used on dark `espresso` backgrounds (high contrast).
Never use `taupe` on `cream` for important data — use `cocoa` or `espresso`.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400–600.
- Body & UI: **Inter** (sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`).
- Nav links: UPPERCASE, `text-xs`, `tracking-[0.2em]`.
- Hero headline: serif, large, tight leading.

## Spacing & Layout
- Section vertical padding: `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-sand` `border-t`.
- Generous gaps in grids: `gap-6 md:gap-8`.

## Buttons
- Primary (accent): solid `bg-gold text-ivory`, hover `bg-gold-deep`, uppercase tracking, `py-3 px-8`, `text-xs`.
- Outlined: `border border-espresso text-espresso`, hover `bg-espresso text-ivory`.
- Pill (variant selector): `border border-sand`, active `bg-espresso text-ivory border-espresso`.

## Cards & Imagery
- Product cards: `bg-ivory`, image in `aspect-[4/5]`, soft hover lift, second image cross-fade on hover.
- Soft shadows: `shadow-[0_10px_40px_-20px_rgba(42,33,26,0.25)]`.
- Rounded corners: minimal — `rounded-none` for editorial feel, or `rounded-sm` max.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small highlights, dividers.
- Large whitespace, thin hairlines.
- Warm gold jewelry imagery on dark/neutral backgrounds.

## Don'ts
- No bright/discount reds or generic blue e-commerce colors.
- No heavy drop shadows or thick borders.
- No all-caps sans-serif headings.
- No low-contrast text (taupe on cream for important content).
