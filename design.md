# Velmora Fine Jewelry — Design System

## Mood
Quiet luxury, warm, editorial. Premium demi-fine gold jewelry. Restrained, confident, never loud or discount-looking.

## Color Palette (committed direction: warm editorial — deep espresso base + warm gold accent + soft ivory)
- `espresso` (base dark): `#1C1714` — deep warm near-black, used for footer, dark sections, hero overlays
- `ink` (primary text): `#2A2520` — warm near-black for body text on light
- `gold` (accent): `#B08D57` — warm metallic gold for buttons, links, accents, hairlines
- `gold-soft`: `#C9A876` — lighter gold for hover states
- `ivory` (page background): `#F7F3EE` — warm soft cream
- `sand` (secondary surface): `#EDE6DC` — slightly deeper warm neutral for cards/strips
- `stone` (muted text): `#8A7F73` — warm gray for secondary text
- `line` (hairline): `#E2D9CC` — warm hairline divider

Contrast: ink on ivory (strong), ivory on espresso (strong), gold on espresso (good for accents). Never use stone on ivory for important content — use ink.

## Typography
- Headings & product names: **Cormorant Garamond** (serif), weights 400/500/600. Large editorial sizes.
- Body & UI: **Inter** (sans-serif), weights 400/500/600.
- Product names: UPPERCASE with wide letter-spacing (`tracking-[0.2em]`), smaller size.
- Nav links: UPPERCASE, `tracking-[0.15em]`, text-xs/sm.
- Buttons: UPPERCASE, `tracking-[0.15em]`, text-xs/sm, font-medium.

## Spacing & Layout
- Generous whitespace. Section padding `py-20 md:py-28`.
- Container: `max-w-7xl mx-auto px-5 md:px-8`.
- Hairline dividers: `border-t border-line`.

## Components
- Buttons: solid gold (`bg-gold text-ivory hover:bg-gold-soft`) or outlined (`border border-ink text-ink hover:bg-ink hover:text-ivory`). Rounded-none (sharp) for premium feel. Padding `px-8 py-3.5`.
- Cards: `bg-ivory` with subtle hover lift, soft shadow on hover only.
- Inputs: `border border-line bg-transparent`, underline style for newsletter.
- Pills (variant selector): `border border-line rounded-full px-5 py-2`, active = `border-ink bg-ink text-ivory`.

## Do's
- Use serif for all headings and product names.
- Keep accent gold restrained — buttons, small details, hairlines.
- Large editorial imagery with warm tones.
- Subtle transitions (duration-500, ease-out).

## Don'ts
- No rounded corners on buttons/cards (sharp = premium). Pills are the only rounded element.
- No bright/saturated colors. No discount badges in red.
- No heavy shadows. Soft, minimal shadows only.
- Don't put stone-colored text on ivory for important content.
