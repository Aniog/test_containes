# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. NOT loud, NOT discount-looking, NOT generic e-commerce. Generous whitespace, large editorial imagery, thin hairline dividers, restrained accent color, subtle hover transitions, soft shadows.

## Color Palette
A deep refined base + warm metallic accents. One confident direction, consistent sitewide.

- `ink` (base dark): `#1A1714` — near-black warm espresso, used for dark sections, hero overlays, footer
- `cream` (base light): `#F7F3EC` — warm off-white, primary page background
- `sand`: `#EDE6DA` — soft warm neutral for cards / alternating sections
- `gold` (accent): `#B08D57` — warm metallic gold for CTAs, links, accents, dividers
- `gold-deep`: `#8A6A3B` — darker gold for hover / pressed states
- `charcoal`: `#3A332C` — body text on light backgrounds
- `muted`: `#8A8175` — secondary / muted text on light backgrounds
- `line`: `#D9CFC0` — hairline divider color on light backgrounds

Contrast: charcoal on cream passes WCAG AA. gold on ink passes AA for large text / UI. Never use gold text on cream/sand for body copy (use charcoal). On dark (ink) backgrounds use cream text.

## Typography
- Headings & product names: **Cormorant Garamond** (elegant serif), weights 400–600.
- Body & UI: **Inter** (clean sans-serif), weights 300–600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.18em]`), serif.
- Nav links: uppercase, `tracking-[0.2em]`, small (text-xs / text-sm), sans-serif.
- Buttons: uppercase, `tracking-[0.18em]`, text-xs/sm, sans-serif.

## Spacing & Layout
- Generous vertical rhythm: section padding `py-20 md:py-28`.
- Container max width `max-w-7xl mx-auto px-6 md:px-10`.
- Hairline dividers: `border-t border-line`.
- Card spacing: `gap-6 md:gap-8`.

## Components
- Buttons: solid gold (`bg-gold text-ink hover:bg-gold-deep hover:text-cream`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-cream`). Rounded-none (sharp) for editorial feel. Padding `px-8 py-4`.
- Cards: `bg-cream` with subtle hover lift (`hover:-translate-y-1 transition`), soft shadow on hover only.
- Pills (variant selector): `border border-line rounded-full px-5 py-2`, active = `bg-ink text-cream border-ink`.
- Inputs: `border-b border-line bg-transparent`, underline style, no box.

## Do's
- Use Cormorant Garamond for all serif headings.
- Keep accent (gold) restrained — CTAs, small accents, dividers only.
- Use generous whitespace.
- Hairline dividers between sections.
- Uppercase wide-tracked product names.

## Don'ts
- No bright/saturated colors. No discount-red badges.
- No rounded chunky buttons (use sharp/minimal radius).
- No heavy shadows (soft, hover-only).
- No gold body text on light backgrounds.
- No generic e-commerce clutter.
